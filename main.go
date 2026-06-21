package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"path"
	"regexp"
	"strings"
	"text/template"

	// I am using lookaheads in a regex so I need PCRE
	// go regexp doesn't support any lookaround
	"go.arsenm.dev/pcre"
)

// Chapter defines the regex expressions to search for that denote the start and end of a
// chapter (e.g. Street, Street Touring) of the rulebook.
type Chapter struct {
	Name              string
	ShortName         string // Short identifier used for carFlags keys (e.g., "sp" for Street Prepared)
	Number            string
	SubChapters       []SubChapter
	OverviewSections  []SubChapter // Informational sections rendered on the landing page (e.g. Purpose, Intent)
	QuestionSections  []SubChapter // Sections rendered as yes/no eligibility questions
	Sections          []string     // Section names for classes without SubChapters (e.g., "Bodywork", "Safety")
	CarFlags          []string     // Question IDs for carFlags (auto-populated from SubChapters/Sections)
	Reader            *io.SectionReader
	start             *regexp.Regexp
	end               *regexp.Regexp
	ChapterFillerText *regexp.Regexp
	templateFile      string
	outputFile        string
	WeightInformation string
}

// SubChapter holds the name, number, and body of a subchapter of the rules (e.g. 13.2 Bodywork)
type SubChapter struct {
	Name string
	// DisplayName is an optional human-friendly label used for the sidebar menu and
	// question heading. When empty, ToMenuName(Name) is used. It does not affect the
	// element IDs or carFlags keys (those always derive from Name) so it is purely cosmetic.
	DisplayName string
	Number      string
	// Informational marks a section that is shown on the landing/overview page rather
	// than as a yes/no eligibility question (e.g. a category's Purpose and Intent).
	Informational bool
	// anchor matches the section's heading line in the rulebook. Road racing sections use
	// it (instead of Number+Name) because the GCR's logical sections are titled headings
	// (e.g. "Brakes", "Wheels/Tires") rather than numbered table-of-contents entries.
	anchor *regexp.Regexp
	Reader *io.SectionReader
}

// getSubChapters returns an array of sub chapters (e.g. 13.1, 13.2) that exist for a given
// chapter
func getSubChapters(rules, chapterNumber string) []SubChapter {
	SubChapters := []SubChapter{}
	// Regex handles both formats in table of contents:
	// "13.1 Authorized Modifications......79" (dots directly after name)
	// "13.4 Wheels. .......................82" (period, space, then dots)
	regexString := chapterNumber + `\.([0-9]+[.A-Z]*) ([^\.\n]*)\.? *\.{2,} *([0-9]+)`
	tableOfContents := regexp.MustCompile(regexString)
	match := tableOfContents.FindAllStringSubmatch(rules, -1)
	// SSC does not have its subchapters listed in the table of contents
	// so we have to do things differently
	if chapterNumber == "20" {
		regexString = `(?m)^` + chapterNumber + `\.([0-9]+) (.+)$`
		r := regexp.MustCompile(regexString)
		match = r.FindAllStringSubmatch(rules, -1)
	}
	// This means there probably aren't any subchapters
	if len(match) < 2 && chapterNumber != "20" {
		return SubChapters
	}
	for i := range match {
		SubChapters = append(SubChapters,
			SubChapter{
				Number: fmt.Sprintf("%s.%s", chapterNumber, match[i][1]),
				Name:   match[i][2],
			},
		)
	}
	return SubChapters
}

// readFile returns a Reader of a specific file
func readFile(filePath string) *strings.Reader {
	rules, err := os.ReadFile(filePath)
	if err != nil {
		fmt.Println("Encountered error reading file", filePath)
		os.Exit(1)
	}

	rulesString := string(rules)

	// Unsure why but the pdftotext output contains these characters
	// perhaps due to incorrect parsing?
	rulesString = strings.ReplaceAll(rulesString, "ﬀ", "ff")

	// standardize double quotes
	rulesString = strings.ReplaceAll(rulesString, "“", `"`)
	rulesString = strings.ReplaceAll(rulesString, "”", `"`)
	// standardize single quotes
	rulesString = strings.ReplaceAll(rulesString, "‘", `'`)
	rulesString = strings.ReplaceAll(rulesString, "’", `'`)

	remove := regexp.MustCompile(`\n\f`)
	rulesString = string(remove.ReplaceAll([]byte(rulesString), []byte{}))

	return strings.NewReader(rulesString)
}

// findSubChapterBody populates the reader field of each subchapter with the body
// of that subchapter
func findSubChapterBody(chapter Chapter, chapterText []byte) []SubChapter {
	SubChapters := chapter.SubChapters
	reader := strings.NewReader(string(chapterText))
	for i, subChapter := range SubChapters {
		reader.Seek(0, 0)
		var length int
		seekToEnd := false
		if i == len(SubChapters)-1 {
			seekToEnd = true
		}
		startRegexString := `(?i)` + regexp.QuoteMeta(subChapter.Number) + ` ` + regexp.QuoteMeta(subChapter.Name)
		startRegex := regexp.MustCompile(startRegexString)
		startMatch := startRegex.FindReaderIndex(reader)
		reader.Seek(0, 0)
		if startMatch != nil {
			if seekToEnd == true {
				length = reader.Len() // jump to end of reader, this is the last element
			} else {
				endRegexString := `(?i)` + regexp.QuoteMeta(SubChapters[i+1].Number) + ` ` + regexp.QuoteMeta(SubChapters[i+1].Name)
				endRegex := regexp.MustCompile(endRegexString)
				endMatch := endRegex.FindReaderIndex(reader)
				reader.Seek(0, 0)
				if endMatch != nil {
					length = endMatch[0] - startMatch[0]
				}
			}
			sectionReader := io.NewSectionReader(reader, int64(startMatch[0]), int64(length))
			SubChapters[i].Reader = sectionReader
			// uncomment to print for troubleshooting
			// warning: it will put the section reader in a "Read" state and you'll
			// have to seek to the beginning to be able to read from it again
			// fmt.Println("here")
			// subchapter, err := io.ReadAll(sectionReader)
			// if err != nil {
			// 	log.Fatal(err)
			// }
			// fmt.Println(subChapter.Number + " " + subChapter.Name)
			// fmt.Println(string(subchapter))
			// fmt.Printf("%v\n", chapter)
		}
	}
	return SubChapters
}

// findRRSectionBodies walks an ordered list of road-racing sections and fills each one's
// Reader with the text between its heading anchor and the next section's heading anchor
// (the last section runs to the end of the chapter text). Anchors are matched sequentially
// so a heading word that recurs in body text earlier in the chapter can't steal a match.
func findRRSectionBodies(sections []SubChapter, chapterText []byte) []SubChapter {
	text := string(chapterText)
	reader := strings.NewReader(text)
	headStart := make([]int, len(sections))
	bodyStart := make([]int, len(sections))
	cursor := 0
	for i := range sections {
		loc := sections[i].anchor.FindStringIndex(text[cursor:])
		if loc == nil {
			log.Fatalf("road racing section anchor not found: %q (%s)", sections[i].Name, sections[i].anchor)
		}
		headStart[i] = cursor + loc[0]
		bodyStart[i] = cursor + loc[1]
		cursor = cursor + loc[1]
	}
	for i := range sections {
		end := len(text)
		if i < len(sections)-1 {
			end = headStart[i+1]
		}
		sections[i].Reader = io.NewSectionReader(reader, int64(bodyStart[i]), int64(end-bodyStart[i]))
	}
	return sections
}

func getChapterReader(rules *strings.Reader, chapter Chapter) *io.SectionReader {
	rules.Seek(0, 0)
	startMatch := chapter.start.FindReaderIndex(rules)
	// Search for the end anchor only in the text following the start anchor. This lets
	// non-unique anchors (e.g. a spec-table column header that recurs in every category)
	// be used to bound a chapter, since we always take the first match after the start.
	rules.Seek(int64(startMatch[1]), 0)
	endMatch := chapter.end.FindReaderIndex(rules)
	rules.Seek(0, 0)
	length := (startMatch[1] + endMatch[0]) - startMatch[0]
	return io.NewSectionReader(rules, int64(startMatch[0]), int64(length))
}

// menuLabel returns the human-friendly label for a section's sidebar menu entry and
// question heading, preferring an explicit DisplayName and falling back to ToMenuName.
func menuLabel(sub SubChapter) string {
	if sub.DisplayName != "" {
		return sub.DisplayName
	}
	return ToMenuName(sub.Name)
}

func ToMenuName(in string) string {
	var result string
	result = strings.Split(in, " ")[0]
	result = strings.Split(result, "/")[0]
	result = regexp.MustCompile(`[^a-zA-Z0-9 ]+`).ReplaceAllString(result, "")
	// Normalize "Shock" to "Shocks" for consistency
	if result == "Shock" {
		result = "Shocks"
	}
	return result
}

func ToVarName(in string) string {
	var result string
	result = regexp.MustCompile(`[^a-zA-Z0-9]+`).ReplaceAllString(in, "")
	return strings.ToLower(result)
}

// generateCarFlags creates the carFlags array for a chapter based on its SubChapters or Sections
func generateCarFlags(chapter Chapter) []string {
	flags := []string{chapter.ShortName + "LandingPage"}
	if len(chapter.QuestionSections) > 0 {
		// Road racing categories list their question sections explicitly; the
		// informational overview sections are excluded from the questionnaire flags.
		varName := ToVarName(chapter.Name)
		for _, sub := range chapter.QuestionSections {
			flags = append(flags, varName+ToMenuName(sub.Name))
		}
	} else if len(chapter.SubChapters) > 0 {
		// Generate from SubChapters (parsed from rules.txt)
		varName := ToVarName(chapter.Name)
		for _, sub := range chapter.SubChapters {
			flags = append(flags, varName+ToMenuName(sub.Name))
		}
	} else if len(chapter.Sections) > 0 {
		// Generate from explicit Sections list
		for _, section := range chapter.Sections {
			flags = append(flags, chapter.ShortName+section)
		}
	}
	return flags
}

func stringEqual(a, b string) bool {
	return a == b
}

func addOne(i int) int {
	return i + 1
}

func formatChapterBody(in string) string {
	var result string
	result = regexp.MustCompile(`\n([A-Z]\.)`).ReplaceAllString(in, "<br><br>$1")
	result = regexp.MustCompile(`\n([0-9]\.)`).ReplaceAllString(result, "<br>$1")
	result = pcre.MustCompile(`(?s)(<br>[0-9]\..+?)(?=<br>)`).ReplaceAllString(result, "<div class=\"indent\">$1</div>")
	result = regexp.MustCompile(`:`).ReplaceAllString(result, ":<br>")
	result = regexp.MustCompile(`([^.]+\.{5,}.+\n)`).ReplaceAllString(result, "$1<br>")
	return result
}

// formatRRBody turns a road-racing section body into readable HTML. The GCR's multi-column
// PDF layout strands list markers ("b.", "3.") on their own lines and inserts blank gaps,
// and the shared formatChapterBody only breaks on uppercase letters/digits, so the lowercase
// lettered items (a., b., ... v.) otherwise run together into a wall of text. This rebuilds
// the list: rejoin a stranded marker with the text it introduces, collapse blank runs, then
// start each lettered item on a new line and each numbered item on a new indented line.
func formatRRBody(in string) string {
	s := in
	// Pull a marker the PDF left alone on a line ("b.\n\nText") onto the line it introduces.
	s = regexp.MustCompile(`(?m)^([a-zA-Z]\.|\d+\.)[ \t]*\n[ \t\n]*(\S)`).ReplaceAllString(s, "$1 $2")
	// Collapse leftover blank lines.
	s = regexp.MustCompile(`\n{2,}`).ReplaceAllString(s, "\n")
	// Lettered items (a., b., ...) begin a new, spaced line.
	s = regexp.MustCompile(`(?m)^([a-zA-Z]\. )`).ReplaceAllString(s, "<br><br>$1")
	// Numbered items (1., 2., ...) begin a new, indented line.
	s = regexp.MustCompile(`(?m)^(\d+\. )`).ReplaceAllString(s, "<br>$1")
	s = pcre.MustCompile(`(?s)(<br>\d+\. .+?)(?=<br>)`).ReplaceAllString(s, `<div class="indent">$1</div>`)
	// Trim any leading break/whitespace left at the very top of the section.
	s = regexp.MustCompile(`^(?:\s|<br>)+`).ReplaceAllString(s, "")
	return s
}

// subChapterTextRR renders a road-racing section body to HTML using the road-racing list
// formatter. The section heading is not part of the body (it is matched and consumed by the
// section anchor), so no leading-header stripping is needed.
func subChapterTextRR(r io.Reader, chapterFiller *regexp.Regexp) string {
	resultBytes, err := io.ReadAll(r)
	if err != nil {
		return ""
	}
	resultBytes = chapterFiller.ReplaceAll(resultBytes, []byte{})
	result := template.HTMLEscapeString(string(resultBytes))
	return formatRRBody(result)
}

func subChapterText(r io.Reader, chapterText *regexp.Regexp) string {
	var result string
	resultBytes, err := io.ReadAll(r)
	if err != nil {
		return ""
	}
	resultBytes = chapterText.ReplaceAll(resultBytes, []byte{})
	result = template.HTMLEscapeString(string(resultBytes))
	result = formatChapterBody(result)
	return result
}

// roadRacingChapters returns the prose road-racing categories parsed from gcr.txt.
// Unlike the autocross categories (whose subchapters are discovered from the rulebook
// table of contents), road-racing categories list their lettered sections explicitly
// because the GCR interleaves prose rules with large per-car spec tables that are not
// part of the questionnaire. Sections marked Informational render on the landing page;
// the rest become yes/no eligibility questions.
func roadRacingChapters() []Chapter {
	return []Chapter{
		{
			Name:      "Improved Touring",
			ShortName: "it",
			Number:    "n/a",
			// No leading newline anchor: the heading is preceded by a stray form feed left
			// over from the PDF. This exact text occurs once and differs from the table-of-
			// contents entry ("9.1.3.\nIMPROVED TOURING CATEGORY CLASSES...").
			start: regexp.MustCompile(`9\.1\.3\. IMPROVED TOURING CATEGORY\n`),
			// The Improved Touring Category Specifications (ITCS) per-car spec table begins
			// immediately after the prose rules with this column header.
			end: regexp.MustCompile(`Engine\nType\n\nBore x\n`),
			// Match only the standalone page-header repeats, not the identical phrase where
			// it legitimately appears inline (e.g. "...publish the Improved Touring Category
			// Specifications (ITCS)..." in section C).
			ChapterFillerText: regexp.MustCompile(`(?m)^(?:9\.1\.3\.|Improved Touring Category Specifications)\s*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/it.html",
			// Purpose/Intent/Specifications and the modifications preamble are informational
			// (landing page). The numbered modification categories within "D. AUTHORIZED
			// MODIFICATIONS" each become their own yes/no question, mirroring how the
			// autocross categories ask one question per modification area.
			SubChapters: []SubChapter{
				{Name: "Purpose", Informational: true, anchor: regexp.MustCompile(`\nA\. PURPOSE\n`)},
				{Name: "Intent", Informational: true, anchor: regexp.MustCompile(`\nB\. INTENT\n`)},
				{Name: "Specifications", Informational: true, anchor: regexp.MustCompile(`\nC\. SPECIFICATIONS\n`)},
				{Name: "Modifications", DisplayName: "About These Modifications", Informational: true, anchor: regexp.MustCompile(`\nD\. AUTHORIZED MODIFICATIONS\n`)},
				{Name: "Engine", DisplayName: "Engine (Reciprocating)", anchor: regexp.MustCompile(`\n1\.\n+Reciprocating Engines \(only\)\n`)},
				{Name: "RotaryEngine", DisplayName: "Engine (Rotary)", anchor: regexp.MustCompile(`\nRotary engines \(only\)\n`)},
				{Name: "TurboEngine", DisplayName: "Engine (Turbocharged)", anchor: regexp.MustCompile(`\nTurbocharged engines \(only\)\n`)},
				{Name: "Cooling", DisplayName: "Engine Cooling System", anchor: regexp.MustCompile(`\nEngine Cooling System\n`)},
				{Name: "Drivetrain", DisplayName: "Transmission / Final Drive", anchor: regexp.MustCompile(`\nTransmission/Final Drive\n`)},
				{Name: "Suspension", DisplayName: "Chassis & Suspension", anchor: regexp.MustCompile(`\nChassis\n`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`\nBrakes\n`)},
				{Name: "Wheels", DisplayName: "Wheels & Tires", anchor: regexp.MustCompile(`\nWheels/Tires\n`)},
				{Name: "Bodywork", DisplayName: "Body & Structure", anchor: regexp.MustCompile(`\nBody/Structure\n`)},
				{Name: "Interior", DisplayName: "Driver / Passenger Compartment", anchor: regexp.MustCompile(`\n10\. Driver/Passenger Compartment[^\n]*\n`)},
				{Name: "Electrical", DisplayName: "Electrical", anchor: regexp.MustCompile(`\n11\. Electrical\n`)},
				{Name: "Safety", DisplayName: "Safety", anchor: regexp.MustCompile(`\n12\. Safety\n`)},
				{Name: "Measurement", DisplayName: "Measurement Standards", anchor: regexp.MustCompile(`\nE\. MEASUREMENT STANDARDS\n`)},
			},
		},
	}
}

// processRRChapters parses gcr.txt, populates each road-racing chapter's section bodies
// and carFlags, and renders its questionnaire page. It returns the chapters so their
// carFlags can be included in common.js.
func processRRChapters(funcMap template.FuncMap) []Chapter {
	gcr := readFile("gcr.txt")
	rrChapters := roadRacingChapters()

	// Page footers and sponsor advertisements that bleed in from the GCR PDF layout.
	gcrRemove := []*regexp.Regexp{
		regexp.MustCompile(`©SCCA`),
		regexp.MustCompile(`\d* *20\d\d GCR V\.\d+ p\.\d+`),
		// Summit Racing full-page advertisement.
		regexp.MustCompile(`(?s)GET THE SUMMIT ADVANTAGE!.+?SummitRacing\.com`),
		// Standalone section-number page headers (e.g. a lone "9.1.3." line).
		regexp.MustCompile(`(?m)^9\.1\.\d+\.\s*$`),
		// Standalone running-header lines (e.g. "Improved Touring Category Specifications").
		// The $ anchor leaves inline mentions intact (e.g. "...the Improved Touring Category
		// Specifications (ITCS)..." keeps its trailing "(ITCS)" and so is not a whole line).
		regexp.MustCompile(`(?m)^[A-Z][A-Za-z0-9/&' -]+ Category Specifications[ \t]*$`),
		// Runs of two or more orphaned list-number lines left by the PDF's multi-column
		// page breaks (e.g. a stray "2.\n\n3.\n\n4." cluster whose text is in another
		// column). A single lone number line is a legitimate marker and is preserved.
		regexp.MustCompile(`(?m)^(?:\d+\.[ \t]*\n+){2,}`),
	}

	for i := range rrChapters {
		fmt.Printf("Currently processing (road racing): %s\n", rrChapters[i].Name)
		chapterReader := getChapterReader(gcr, rrChapters[i])
		rrChapters[i].Reader = chapterReader

		chapterText, err := io.ReadAll(chapterReader)
		if err != nil {
			fmt.Println("error reading road racing chapter text")
			os.Exit(1)
		}
		for _, r := range gcrRemove {
			chapterText = r.ReplaceAll(chapterText, []byte{})
		}

		rrChapters[i].SubChapters = findRRSectionBodies(rrChapters[i].SubChapters, chapterText)
		for _, sub := range rrChapters[i].SubChapters {
			if sub.Informational {
				rrChapters[i].OverviewSections = append(rrChapters[i].OverviewSections, sub)
			} else {
				rrChapters[i].QuestionSections = append(rrChapters[i].QuestionSections, sub)
			}
		}
		rrChapters[i].CarFlags = generateCarFlags(rrChapters[i])

		fmt.Println("Generating road racing class page...")
		classTemplate := template.New(path.Base(rrChapters[i].templateFile)).Funcs(funcMap)
		tpl, err := classTemplate.ParseFiles(rrChapters[i].templateFile)
		if err != nil {
			log.Fatal("Could not parse template", err)
		}
		outFile, err := os.Create(rrChapters[i].outputFile)
		if err != nil {
			log.Fatal("Could not create file", err)
		}
		if err = tpl.Execute(outFile, rrChapters[i]); err != nil {
			log.Fatal("Could not execute template", err)
		}
		outFile.Close()
	}
	return rrChapters
}

func main() {
	rules := readFile("rules.txt")

	rulesBytes, err := io.ReadAll(rules)
	if err != nil {
		log.Fatal(err)
	}

	rules.Seek(0, 0)
	allChapters := []Chapter{
		{
			Name:              "Street",
			ShortName:         "street",
			Number:            "13",
			start:             regexp.MustCompile(`\n13\. STREET CATEGORY\nCategory Objective`),
			end:               regexp.MustCompile(`\n14\. STREET TOURING® CATEGORY\nCategory Objective`),
			ChapterFillerText: regexp.MustCompile(`13\. Street Category`),
			templateFile:      "./templates/a/s.html.tmpl",
			outputFile:        "./src/a/s.html",
		},
		{
			Name:              "Street Touring",
			ShortName:         "streettouring",
			Number:            "14",
			start:             regexp.MustCompile(`\n14\. STREET TOURING® CATEGORY\nCategory Objective`),
			end:               regexp.MustCompile(`\n15\. STREET PREPARED CATEGORY\nCategory Objective`),
			ChapterFillerText: regexp.MustCompile(`14\. Street Touring®`),
			templateFile:      "./templates/a/st.html.tmpl",
			outputFile:        "./src/a/st.html",
		},
		{
			Name:              "Street Prepared",
			ShortName:         "sp",
			Number:            "15",
			start:             regexp.MustCompile(`\n15\. STREET PREPARED CATEGORY\nCategory Objective`),
			end:               regexp.MustCompile(`\n16\. STREET MODIFIED CATEGORY\nCategory Objective`),
			ChapterFillerText: regexp.MustCompile(`15\. Street Prepared`),
			templateFile:      "./templates/a/sp.html.tmpl",
			outputFile:        "./src/a/sp.html",
		},
		{
			Name:              "Street Modified",
			ShortName:         "sm",
			Number:            "16",
			start:             regexp.MustCompile(`\n16\. STREET MODIFIED CATEGORY\nCategory Objective`),
			end:               regexp.MustCompile(`\n17\. PREPARED CATEGORY\nCategory Objective`),
			ChapterFillerText: regexp.MustCompile(`16\. Street Modified`),
			templateFile:      "./templates/a/sm.html.tmpl",
			outputFile:        "./src/a/sm.html",
		},
		{
			Name:              "Prepared",
			ShortName:         "p",
			Number:            "17",
			start:             regexp.MustCompile(`\n17\. PREPARED CATEGORY\nCategory Objective`),
			end:               regexp.MustCompile(`\n18\. MODIFIED CATEGORY\nCategory Objectives`),
			ChapterFillerText: regexp.MustCompile(`17\. Prepared`),
			templateFile:      "./templates/a/p.html.tmpl",
			outputFile:        "./src/a/p.html",
		},
		{
			Name:              "Modified",
			ShortName:         "m",
			Number:            "18",
			start:             regexp.MustCompile(`\n18\. MODIFIED CATEGORY\nCategory Objectives`),
			end:               regexp.MustCompile(`\n19\. KART CATEGORY\nCategory Objective`),
			ChapterFillerText: regexp.MustCompile(`18\. Modified Category`),
			templateFile:      "./templates/a/m.html.tmpl",
			outputFile:        "./src/a/m.html",
		},
		{
			Name:              "Solo Spec Coupe",
			ShortName:         "ssc",
			Number:            "20",
			start:             regexp.MustCompile(`\n20\. SOLO® SPEC COUPE \(SSC\)\n`),
			end:               regexp.MustCompile(`\n21\. Classic American Muscle / Xtreme Street Category\n`),
			ChapterFillerText: regexp.MustCompile(`20\. Solo® Spec Coupe \(SSC\)`),
			templateFile:      "./templates/a/ssc.html.tmpl",
			outputFile:        "./src/a/ssc.html",
		},
		{
			Name:      "Xtreme Street",
			ShortName: "xs",
			Number:    "n/a",
			start:     regexp.MustCompile(`\n21\. Classic American Muscle / Xtreme Street Category\n`),
			end:       regexp.MustCompile(`\nElectrical Vehicle Experimental \(EVX\)\n`),
		},
		{
			Name:      "EVX",
			ShortName: "ev",
			Number:    "n/a",
			start:     regexp.MustCompile(`\nElectrical Vehicle Experimental \(EVX\)\n`),
			end:       regexp.MustCompile(`\nAPPENDIX C - SOLO® ROLL BAR STANDARDS\n`),
		},
	}

	// Static classes don't have numbered subchapters in rules.txt - their Sections are explicitly defined
	staticClasses := []Chapter{
		{ShortName: "csm", Sections: []string{"Bodywork", "Safety", "Suspension", "Electrical", "Brakes", "EngineAndDrivetrain"}},
		{ShortName: "csx", Sections: []string{"Bodywork", "Safety", "Suspension", "Electrical", "Brakes", "EngineAndDrivetrain"}},
		{ShortName: "xs", Sections: []string{"Bodywork", "Suspension", "Brakes", "Wheels", "Tires", "MinWeight", "EngineAndDrivetrain", "Aero"}},
		{ShortName: "ev", Sections: []string{"Bodywork", "Brakes", "Tires", "Wheels", "Shocks", "ARB", "Suspension", "ElectricalAndDrivetrain"}},
		{ShortName: "cam", Sections: []string{"Bodywork", "Suspension", "Brakes", "Wheels", "Tires", "Weight", "EngineAndDrivetrain"}},
	}

	toRemove := []*pcre.Regexp{
		pcre.MustCompile(`(?s)20-40% MORE.+Section 14`),
		pcre.MustCompile(`(?s)orders over .+15\. Street Prepared`),
		pcre.MustCompile(`(?s)Own a vehicle.+Section 16`),
		pcre.MustCompile(`(?s)MAKE EVERY.+©2022 Sunmarks, LLC. All Rights Reserved\.`),
		pcre.MustCompile(`(?s)orders over .+Section 19`),
		pcre.MustCompile(`\nSection 14\n`),
		pcre.MustCompile(`\nSection 15\n`),
		pcre.MustCompile(`\nSection 16\n`),
		pcre.MustCompile(`\n17. Prepared\n`),
		pcre.MustCompile(`\n18. Modified Category\n`),
		pcre.MustCompile(`\n21. ProSolo® Series\n`),
		// Tire Rack sidebar advertisements that bleed in from the PDF layout
		// (e.g. "FAST FREE SHIPPING", "tirerack.com/freeshipping", phone number,
		// product callouts). The block is matched as a run of ad-fragment lines
		// that must contain at least one strong ad token, so genuine rule text
		// referencing "Tire Rack®" parts is left untouched.
		pcre.MustCompile(`\n{2,}(?:[ \t]*(?:FAST FREE SHIPPING(?: On)?|On orders over \$50|orders over \$50|On|tirerack\.com/freeshipping|www\.tirerack\.com/storage|LOWERING SPRINGS & ANTI-ROLL BARS|COIL-OVERS|®|©20\d\d|Tire Rack|888-380-8473)[ \t]*\n+)*[ \t]*(?:FAST FREE SHIPPING(?: On)?|tirerack\.com/freeshipping|www\.tirerack\.com/storage|888-380-8473)[ \t]*\n+(?:[ \t]*(?:FAST FREE SHIPPING(?: On)?|On orders over \$50|orders over \$50|On|tirerack\.com/freeshipping|www\.tirerack\.com/storage|LOWERING SPRINGS & ANTI-ROLL BARS|COIL-OVERS|®|©20\d\d|Tire Rack|888-380-8473)[ \t]*\n+)*`),
		// Tire Rack tire-brand advertisement (a column of tire make/model names
		// under the "STREET AND ST-CLASS TIRES" banner). Anchored on that banner,
		// which never appears in genuine rule text, and bounded at the trailing
		// "Proxes RR" line so inline tire references in the rules are untouched.
		pcre.MustCompile(`(?s)\n+STREET AND ST-CLASS TIRES\n.+?\nProxes RR\b`),
	}

	SMWeights := []*pcre.Regexp{
		pcre.MustCompile(`(?s)Super Street Modified class \(SSM\)\n.+(Minimum Weight Calculations without driver.+?)\nStreet Modified class \(SM\)\n`),
		pcre.MustCompile(`(?s)Street Modified class \(SM\)\n.+(Minimum Weight Calculations without driver.+?)\nStreet Modified Front-Wheel-Drive class \(SMF\)\n`),
		pcre.MustCompile(`(?s)Street Modified Front-Wheel-Drive class \(SMF\)\n.+(Minimum Weight Calculations without driver.+?)Appendix A - \(XP\) Prepared`),
	}

	// using two arrays here for SMWeights and SMClasses sinces maps aren't walked deterministically
	SMClasses := []string{
		"Super Street Modified (SSM)",
		"Street Modified (SM)",
		"Street Modified FWD (SMF)",
	}

	funcMap := template.FuncMap{
		"subChapterText":   subChapterText,
		"subChapterTextRR": subChapterTextRR,
		"menuName":         ToMenuName,
		"menuLabel":        menuLabel,
		"stringEqual":      stringEqual,
		"addOne":           addOne,
		"toVarName":        ToVarName,
	}

	for i := range allChapters {
		if allChapters[i].Number != "n/a" {
			SubChapters := getSubChapters(string(rulesBytes), allChapters[i].Number)
			allChapters[i].SubChapters = SubChapters
		}
		fmt.Printf("Currently processing: %s\n", allChapters[i].Name)
		chapterReader := getChapterReader(rules, allChapters[i])
		allChapters[i].Reader = chapterReader

		chapterText, err := io.ReadAll(chapterReader)
		if err != nil {
			fmt.Println("error reading chapter text")
			os.Exit(1)
		}

		// remove all form feed (i.e. ) chapter title lines
		if allChapters[i].Number != "n/a" {
			remove := regexp.MustCompile(`\n\f` + allChapters[i].Number + `\. .+\n`)
			chapterText = remove.ReplaceAll(chapterText, []byte{})
		}

		// remove all page number text
		remove := regexp.MustCompile(`(?i)([0-9]+ — )*\d{4} SCCA® NATIONAL SOLO® RULES( )*(— [0-9]+)*`)
		chapterText = remove.ReplaceAll(chapterText, []byte{})

		// remove certain text (ads, section markers)
		for _, r := range toRemove {
			chapterText = r.ReplaceAll(chapterText, []byte{})
		}

		if allChapters[i].Number != "n/a" && len(allChapters[i].SubChapters) > 0 {
			allChapters[i].SubChapters = findSubChapterBody(allChapters[i], chapterText)
		}

		// Populate CarFlags for chapters with SubChapters
		if len(allChapters[i].SubChapters) > 0 {
			allChapters[i].CarFlags = generateCarFlags(allChapters[i])
		}

		// grab minmum weights from appendix for SM
		if allChapters[i].Name == "Street Modified" {
			var weightInfo string
			for i, regex := range SMWeights {
				weightInfo = weightInfo + "<br><br>" + SMClasses[i] + ":<br>"
				match := regex.FindAllStringSubmatch(string(rulesBytes), 1)
				if len(match) > 0 {
					weightInfo = weightInfo + match[0][1] + "\n"
				}
			}
			weightInfo = remove.ReplaceAllString(weightInfo, "")
			weightInfo = regexp.MustCompile(`(•)`).ReplaceAllString(weightInfo, "<br>$1")
			// Collapse the PDF dot-leaders ("....") that separate each label from its
			// value into a single em-dash so formulas render as "FWD — 1350 + 125 per
			// liter" instead of wrapping across the line. Handles runs split by a stray
			// ". " continuation (e.g. the forced-induction lines).
			dotLeader := regexp.MustCompile(`[\s.]*\.{2,}(?:[\s.]*\.{2,})*\s*`)
			weightInfo = dotLeader.ReplaceAllString(weightInfo, " — ")
			// Where a label already ends in a colon, drop the redundant dash.
			weightInfo = regexp.MustCompile(`:\s*—\s*`).ReplaceAllString(weightInfo, ": ")
			allChapters[i].WeightInformation = weightInfo
		}

		if allChapters[i].templateFile != "" {
			fmt.Println("Generating class specific page...")
			classTemplate := template.New(path.Base(allChapters[i].templateFile)).Funcs(funcMap)
			tpl, err := classTemplate.ParseFiles(allChapters[i].templateFile)
			if err != nil {
				log.Fatal("Could not parse template", err)
			}

			outFile, err := os.Create(allChapters[i].outputFile)
			if err != nil {
				log.Fatal("Could not create file", err)
			}

			err = tpl.Execute(outFile, allChapters[i])
			if err != nil {
				log.Fatal("Could not execute template", err)
			}

			outFile.Close()
		}
	}

	// Road racing categories are parsed from a separate rulebook (gcr.txt) and rendered
	// with their own template; their carFlags are folded into common.js below.
	rrChapters := processRRChapters(funcMap)

	fmt.Println("Generating common.js...")
	commonJS := template.New("common.js.tmpl").Funcs(funcMap)
	tpl, err := commonJS.ParseFiles("templates/common.js.tmpl")
	if err != nil {
		log.Fatal("Could not parse template", err)
	}

	outFile, err := os.Create("src/common.js")
	if err != nil {
		log.Fatal("Could not create file", err)
	}

	// Generate CarFlags for staticClasses from their Sections
	for i := range staticClasses {
		staticClasses[i].CarFlags = generateCarFlags(staticClasses[i])
	}

	// Combine allChapters, staticClasses, and road racing chapters for template execution
	allClassesForJS := append(allChapters, staticClasses...)
	allClassesForJS = append(allClassesForJS, rrChapters...)
	err = tpl.Execute(outFile, allClassesForJS)
	if err != nil {
		log.Fatal("Could not execute template", err)
	}

	outFile.Close()
}
