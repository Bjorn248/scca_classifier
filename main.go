package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"path"
	"regexp"
	"strconv"
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
	Subclasses        []string     // Category subclasses (e.g. ITR/ITS/ITA/ITB/ITC); the specific one is set by a car's spec line
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

// readLayoutFile reads a -layout pdftotext extraction, applying the same character
// normalization as readFile but preserving line structure. readFile removes "\n\f" page
// breaks, which glues the last line of a page to the next and destroys the leading-whitespace
// columns; the road-racing prose parser relies on that indentation, so here form feeds are
// dropped while newlines are kept.
func readLayoutFile(filePath string) *strings.Reader {
	raw, err := os.ReadFile(filePath)
	if err != nil {
		fmt.Println("Encountered error reading file", filePath)
		os.Exit(1)
	}
	s := string(raw)
	s = strings.ReplaceAll(s, "ﬀ", "ff")
	s = strings.ReplaceAll(s, "“", `"`)
	s = strings.ReplaceAll(s, "”", `"`)
	s = strings.ReplaceAll(s, "‘", `'`)
	s = strings.ReplaceAll(s, "’", `'`)
	s = strings.ReplaceAll(s, "\f", "")
	return strings.NewReader(s)
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
var rrMarkerRe = regexp.MustCompile(`^\s*([a-zA-Z]|\d{1,2})\.\s`)

// formatRRBody converts a -layout road-racing section body into nested HTML.
//
// Nesting is read from the marker *type*, not from indentation. The -layout extraction does
// preserve leading whitespace, but pdftotext re-detects columns per page, so the same logical
// level lands at different indents across page breaks (e.g. items a.-e. at column 6 on one
// page, f.-o. at column 0 on the next). The rulebook's outline convention, however, is stable
// and page-independent: lowercase letters are top-level items, numbers are their sub-items,
// and uppercase letters are sub-sub-items. (The -layout text is still preferable here for its
// clean footers and because it keeps markers attached to their content.)
//
// A line beginning with a marker (a./1./A.) starts a new item; any other non-empty line
// continues the current item, re-joining words the PDF hyphenated across a wrap ("modi-" +
// "fications"). Each item is emitted as a paragraph indented to its level.
func formatRRBody(in string) string {
	type item struct {
		level int
		text  string
	}
	var items []item
	for _, ln := range strings.Split(in, "\n") {
		text := strings.TrimSpace(ln)
		if text == "" {
			continue
		}
		text = multiSpace.ReplaceAllString(text, " ") // collapse -layout column padding
		if m := rrMarkerRe.FindStringSubmatch(ln); m != nil {
			items = append(items, item{level: markerLevel(m[1][0]), text: text})
			continue
		}
		if len(items) == 0 {
			// Preamble text before the first list marker (e.g. a section's opening sentence).
			items = append(items, item{level: 0, text: text})
			continue
		}
		prev := &items[len(items)-1]
		if n := len(prev.text); n >= 2 && prev.text[n-1] == '-' && isLower(prev.text[n-2]) {
			prev.text = prev.text[:n-1] + text
		} else {
			prev.text += " " + text
		}
	}

	var b strings.Builder
	for _, it := range items {
		class := ""
		switch it.level {
		case 1:
			class = ` class="indent"`
		case 2:
			class = ` class="indent2"`
		}
		b.WriteString("<p" + class + ">" + template.HTMLEscapeString(it.text) + "</p>")
	}
	return b.String()
}

// markerLevel maps a list marker to its outline nesting level: lowercase letter = top (0),
// number = sub-item (1), uppercase letter = sub-sub-item (2).
func markerLevel(marker byte) int {
	switch {
	case marker >= '0' && marker <= '9':
		return 1
	case marker >= 'A' && marker <= 'Z':
		return 2
	default:
		return 0
	}
}

func isLower(b byte) bool { return b >= 'a' && b <= 'z' }

// subChapterTextRR renders a road-racing section body to HTML. The section heading is matched
// and consumed by the section anchor, so the body begins with the section's content.
func subChapterTextRR(r io.Reader, chapterFiller *regexp.Regexp) string {
	resultBytes, err := io.ReadAll(r)
	if err != nil {
		return ""
	}
	resultBytes = chapterFiller.ReplaceAll(resultBytes, []byte{})
	return formatRRBody(string(resultBytes))
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

// SpecLine is one car's entry in a road-racing spec table: its category subclass, full model
// designation (make/model/years), minimum competition weight, and any per-car note.
type SpecLine struct {
	Subclass  string `json:"subclass"`
	Model     string `json:"model"`
	MinWeight int    `json:"minWeight"`
	Notes     string `json:"notes,omitempty"`
}

var (
	// A subclass table title in gcr_layout.txt, e.g. "        ITR        Engine   Bore x   Weight".
	itcsTitleRe = regexp.MustCompile(`^\s+(IT[RSABC])\s+Engine\b`)
	// The engine column of a car's primary line: a cylinder/rotor count, V-config, or
	// displacement (e.g. "4 Cyl", "2 Rotor", "V8", "2.0"). Continuation lines instead carry
	// the valvetrain ("DOHC", "Turbo", "VTEC") here, so this distinguishes the two.
	itcsEngineRe = regexp.MustCompile(`(?i)^(\d+\s?cyl|\d\s?rotor|v-?\d+|\d\.\d)`)
	// A 3-4 digit weight at the start of a field (allowing a trailing unit/note).
	weightLeadRe = regexp.MustCompile(`^(\d{3,4})\b`)
	// Page footers and running headers interspersed in the spec tables.
	specCruftRe = regexp.MustCompile(`SCCA|GCR V\.|Spec Lines`)
	multiSpace  = regexp.MustCompile(`\s{2,}`)
)

// parseITCSSpecLines extracts the Improved Touring Category Specifications per-car spec lines
// (ITR/ITS/ITA/ITB/ITC) from gcr_layout.txt. The -layout extraction aligns each car's fields
// into columns: a primary line carries model · engine · bore · weight [· note], with model/
// engine/displacement continuation lines stacked below. See ROAD_RACING_PLAN.md (Task 2).
func parseITCSSpecLines() []SpecLine {
	data, err := os.ReadFile("gcr_layout.txt")
	if err != nil {
		fmt.Println("warning: gcr_layout.txt not found; skipping spec-line parse")
		return nil
	}
	var out []SpecLine
	subclass := ""
	var cur *SpecLine
	flush := func() {
		if cur != nil {
			cur.Model = strings.TrimSpace(cur.Model)
			out = append(out, *cur)
			cur = nil
		}
	}
	for _, raw := range strings.Split(string(data), "\n") {
		if subclass != "" && strings.Contains(raw, "SUPER TOURING CATEGORY") {
			break // reached the next category; end of the ITCS region
		}
		if m := itcsTitleRe.FindStringSubmatch(raw); m != nil {
			flush()
			subclass = m[1]
			continue
		}
		if subclass == "" || strings.TrimSpace(raw) == "" || specCruftRe.MatchString(raw) {
			continue
		}
		fields := multiSpace.Split(strings.TrimSpace(raw), -1)
		// A new car begins on any line whose engine column is populated (continuation lines
		// carry the valvetrain "DOHC"/"Turbo" or a bare year there, which don't match). The
		// weight is read from this line, or — when the PDF misaligns it (e.g. a year lands in
		// the weight column) — from a continuation line below.
		if len(fields) >= 2 && itcsEngineRe.MatchString(fields[1]) {
			flush()
			w, note := itcsWeight(fields[2:])
			cur = &SpecLine{Subclass: subclass, Model: fields[0], MinWeight: w, Notes: note}
			continue
		}
		if cur != nil {
			// A model/year continuation line (e.g. "Type R", "(97-98/00-01)"); its first
			// column extends the current car's model designation.
			cur.Model += " " + fields[0]
			if cur.MinWeight == 0 && len(fields) > 1 {
				if w, note := itcsWeight(fields[1:]); w > 0 {
					cur.MinWeight = w
					if cur.Notes == "" {
						cur.Notes = note
					}
				}
			}
		}
	}
	flush()
	return out
}

// itcsWeight finds the minimum weight among a primary line's post-engine fields (bore,
// displacement, weight, note) and returns it with any trailing note text. The weight is the
// rightmost field beginning with a 3-4 digit number; the bore ("81.0 x ...") and a bare or
// "cc"-suffixed displacement sit to its left, and a leading note number (e.g. "32mm") is
// fewer digits, so scanning from the right lands on the weight column.
func itcsWeight(fields []string) (int, string) {
	for i := len(fields) - 1; i >= 0; i-- {
		m := weightLeadRe.FindStringSubmatch(fields[i])
		if m == nil {
			continue
		}
		weight, err := strconv.Atoi(m[1])
		if err != nil {
			continue
		}
		note := strings.TrimSpace(fields[i][len(m[1]):])
		if len(fields) > i+1 {
			note = strings.TrimSpace(note + " " + strings.Join(fields[i+1:], " "))
		}
		note = strings.TrimPrefix(note, "lbs.")
		note = strings.TrimPrefix(note, "lbs")
		return weight, strings.TrimSpace(note)
	}
	return 0, ""
}

// rrCar is one car's road-racing classification for the make/model/year selector.
type rrCar struct {
	Class  string `json:"class"`
	Weight int    `json:"weight"`
}

// parseModel splits a spec line's model designation into make, model, and year range, e.g.
// "Acura Integra Type R (97-98/00-01)" -> ("Acura", "Integra Type R", "97-98/00-01"). The
// year is taken from a trailing parenthetical; when absent it is "all".
func parseModel(model string) (mk, name, year string) {
	year = "all"
	if i := strings.LastIndex(model, "("); i != -1 {
		if j := strings.Index(model[i:], ")"); j != -1 {
			year = strings.TrimSpace(model[i+1 : i+j])
			model = strings.TrimSpace(model[:i])
		}
	}
	parts := strings.SplitN(strings.TrimSpace(model), " ", 2)
	mk = parts[0]
	if len(parts) > 1 {
		name = parts[1]
	} else {
		name = mk
	}
	return mk, name, year
}

// buildRRCars indexes spec lines as make -> model -> year -> {class, weight} for the
// road-racing make/model/year selector. json.Marshal sorts the string keys, so output is
// deterministic.
func buildRRCars(specs []SpecLine) map[string]map[string]map[string]rrCar {
	cars := map[string]map[string]map[string]rrCar{}
	for _, s := range specs {
		mk, name, year := parseModel(s.Model)
		if cars[mk] == nil {
			cars[mk] = map[string]map[string]rrCar{}
		}
		if cars[mk][name] == nil {
			cars[mk][name] = map[string]rrCar{}
		}
		cars[mk][name][year] = rrCar{Class: s.Subclass, Weight: s.MinWeight}
	}
	return cars
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
			// Improved Touring is a category; a car's specific subclass is set by its ITCS
			// spec line and minimum weight (handled later by the spec-table parser / selector).
			Subclasses: []string{"ITR", "ITS", "ITA", "ITB", "ITC"},
			// No leading newline anchor: the heading is preceded by a stray form feed left
			// over from the PDF. This exact text occurs once and differs from the table-of-
			// contents entry ("9.1.3.\nIMPROVED TOURING CATEGORY CLASSES...").
			// Anchors match the -layout extraction (gcr_layout.txt), which keeps each line's
			// indentation. The category heading is the running header; the TOC entry differs
			// ("...CATEGORY CLASSES") so requiring end-of-line after CATEGORY excludes it.
			start: regexp.MustCompile(`IMPROVED TOURING CATEGORY[ \t]*\n`),
			// The Improved Touring Category Specifications (ITCS) per-car spec table begins
			// immediately after the prose rules with this column-header row.
			end: regexp.MustCompile(`ITR[ \t]+Engine[ \t]+Bore x`),
			// Redundant safety net: the page-break running header is already stripped from
			// the chapter text by gcrRemove before sections are extracted.
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+\.[ \t]+[A-Z][A-Za-z0-9/&' -]*? Category Specifications[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/it.html",
			// Purpose/Intent/Specifications and the modifications preamble are informational
			// (landing page). The numbered modification categories within "D. AUTHORIZED
			// MODIFICATIONS" each become their own yes/no question, mirroring how the
			// autocross categories ask one question per modification area.
			SubChapters: []SubChapter{
				{Name: "Purpose", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*A\. PURPOSE[ \t]*$`)},
				{Name: "Intent", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*B\. INTENT[ \t]*$`)},
				{Name: "Specifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*C\. SPECIFICATIONS[ \t]*$`)},
				{Name: "Modifications", DisplayName: "About These Modifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*D\. AUTHORIZED MODIFICATIONS[ \t]*$`)},
				{Name: "Engine", DisplayName: "Engine (Reciprocating)", anchor: regexp.MustCompile(`(?m)^[ \t]*1\.[ \t]+Reciprocating Engines \(only\)[ \t]*$`)},
				{Name: "RotaryEngine", DisplayName: "Engine (Rotary)", anchor: regexp.MustCompile(`(?m)^[ \t]*2\.[ \t]+Rotary engines \(only\)[ \t]*$`)},
				{Name: "TurboEngine", DisplayName: "Engine (Turbocharged)", anchor: regexp.MustCompile(`(?m)^[ \t]*3\.[ \t]+Turbocharged engines \(only\)[ \t]*$`)},
				{Name: "Cooling", DisplayName: "Engine Cooling System", anchor: regexp.MustCompile(`(?m)^[ \t]*4\.[ \t]+Engine Cooling System[ \t]*$`)},
				{Name: "Drivetrain", DisplayName: "Transmission / Final Drive", anchor: regexp.MustCompile(`(?m)^[ \t]*5\.[ \t]+Transmission/Final Drive[ \t]*$`)},
				{Name: "Suspension", DisplayName: "Chassis & Suspension", anchor: regexp.MustCompile(`(?m)^[ \t]*6\.[ \t]+Chassis[ \t]*$`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`(?m)^[ \t]*7\.[ \t]+Brakes[ \t]*$`)},
				{Name: "Wheels", DisplayName: "Wheels & Tires", anchor: regexp.MustCompile(`(?m)^[ \t]*8\.[ \t]+Wheels/Tires[ \t]*$`)},
				{Name: "Bodywork", DisplayName: "Body & Structure", anchor: regexp.MustCompile(`(?m)^[ \t]*9\.[ \t]+Body/Structure[ \t]*$`)},
				{Name: "Interior", DisplayName: "Driver / Passenger Compartment", anchor: regexp.MustCompile(`(?m)^[ \t]*10\.[ \t]+Driver/Passenger Compartment[^\n]*$`)},
				{Name: "Electrical", DisplayName: "Electrical", anchor: regexp.MustCompile(`(?m)^[ \t]*11\.[ \t]+Electrical[ \t]*$`)},
				{Name: "Safety", DisplayName: "Safety", anchor: regexp.MustCompile(`(?m)^[ \t]*12\.[ \t]+Safety[ \t]*$`)},
				{Name: "Measurement", DisplayName: "Measurement Standards", anchor: regexp.MustCompile(`(?m)^[ \t]*E\. MEASUREMENT STANDARDS[ \t]*$`)},
			},
		},
		{
			Name:      "American Sedan",
			ShortName: "as",
			Number:    "n/a",
			// American Sedan (AS) is a single class.
			Subclasses: []string{"AS"},
			start:      regexp.MustCompile(`9\.1\.6\. AMERICAN SEDAN CATEGORY[ \t]*\n`),
			// The prose rules end where Car Classification (the eligible-cars reference and
			// engine build sheets) begins; the per-car spec table follows that.
			end:               regexp.MustCompile(`(?m)^[ \t]*E\. CAR CLASSIFICATION[ \t]*$`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+\.[ \t]+[A-Z][A-Za-z0-9/&' -]*? Category Specifications[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/as.html",
			// Overview = Purpose/Intent/Specifications + the modifications preamble. The numbered
			// areas within "D. AUTHORIZED MODIFICATIONS" each become a yes/no question.
			SubChapters: []SubChapter{
				{Name: "Purpose", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*A\. PURPOSE[ \t]*$`)},
				{Name: "Intent", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*B\. INTENT[ \t]*$`)},
				{Name: "Specifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*C\. SPECIFICATIONS[ \t]*$`)},
				{Name: "Modifications", DisplayName: "About These Modifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*D\. AUTHORIZED MODIFICATIONS[ \t]*$`)},
				// No line-start anchor: -layout sometimes glues a heading number to the previous
				// line's end (e.g. "...cadence.7.   Body/Structure:"). The specific heading text
				// plus sequential matching keeps these unambiguous.
				{Name: "Engine", DisplayName: "Engine", anchor: regexp.MustCompile(`1\.[ \t]+Engine \([^)]*\)`)},
				{Name: "Cooling", DisplayName: "Engine Cooling System", anchor: regexp.MustCompile(`2\.[ \t]+Engine Cooling System:`)},
				{Name: "Drivetrain", DisplayName: "Transmission / Final Drive", anchor: regexp.MustCompile(`3\.[ \t]+Transmission/Final Drive:`)},
				{Name: "Suspension", DisplayName: "Suspension", anchor: regexp.MustCompile(`4\.[ \t]+Suspension:`)},
				{Name: "Brakes", DisplayName: "Brake System", anchor: regexp.MustCompile(`5\.[ \t]+Brake System:`)},
				{Name: "Wheels", DisplayName: "Wheels & Tires", anchor: regexp.MustCompile(`6\.[ \t]+Wheels/Tires:`)},
				{Name: "Bodywork", DisplayName: "Body & Structure", anchor: regexp.MustCompile(`7\.[ \t]+Body/Structure:`)},
				{Name: "Interior", DisplayName: "Driver / Passenger Compartment", anchor: regexp.MustCompile(`8\.[ \t]+Driver/Passenger Compartment:`)},
				{Name: "Safety", DisplayName: "Safety", anchor: regexp.MustCompile(`9\.[ \t]+Safety:`)},
				{Name: "Misc", DisplayName: "Miscellaneous", anchor: regexp.MustCompile(`10\.[ \t]+Miscellaneous:`)},
			},
		},
		{
			Name:       "Touring (T1)",
			ShortName:  "t1",
			Number:     "n/a",
			Subclasses: []string{"T1"},
			start:      regexp.MustCompile(`9\.1\.9\.1 TOURING \(T1\) CATEGORY[ \t]*\n`),
			// End before the Labeling/Approved-Cars sections and the per-car spec table.
			end:               regexp.MustCompile(`M\.[ \t]+Labeling`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*Spec Lines[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/t1.html",
			// The lettered prep areas are the questions. The source mislabels some letters (D and
			// E repeat), so anchors match on the heading TEXT with a flexible letter prefix.
			SubChapters: []SubChapter{
				{Name: "Overview", DisplayName: "Purpose & Eligibility", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*T1 Category Purpose and Philosophy:`)},
				{Name: "Bodywork", DisplayName: "Bodywork", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Bodywork\b`)},
				{Name: "Aero", DisplayName: "Aerodynamic Devices", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Aerodynamic Devices`)},
				{Name: "Interior", DisplayName: "Interior", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Interior\b`)},
				{Name: "Chassis", DisplayName: "Chassis", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Chassis\b`)},
				{Name: "Engine", DisplayName: "Engine", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Engine\b`)},
				{Name: "Cooling", DisplayName: "Cooling", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Cooling\b`)},
				{Name: "FluidFuel", DisplayName: "Fluid Piping & Fuel Tank", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Fluid Piping`)},
				{Name: "Oil", DisplayName: "Oil System", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Oil System`)},
				{Name: "Exhaust", DisplayName: "Exhaust System", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Exhaust System`)},
				{Name: "Electrical", DisplayName: "Electrical System", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Electrical System`)},
				{Name: "Drivetrain", DisplayName: "Drivetrain", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Drivetrain\b`)},
				{Name: "Suspension", DisplayName: "Suspension & Steering", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Suspension and Steering`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Brakes\b`)},
				{Name: "Wheels", DisplayName: "Tires & Wheels", anchor: regexp.MustCompile(`[A-Z]\.[ \t]+Tires & Wheels`)},
			},
		},
		{
			Name:              "Touring (T2-T4)",
			ShortName:         "t2t4",
			Number:            "n/a",
			Subclasses:        []string{"T2", "T3", "T4"},
			start:             regexp.MustCompile(`9\.1\.9\.2 TOURING \(T2-T4\) CATEGORY[ \t]*\n`),
			end:               regexp.MustCompile(`E\.[ \t]+Car Classification`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*Spec Lines[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/t2t4.html",
			// Overview = Purpose/Intent/Specifications + the modifications preamble. The numbered
			// areas within "D. Modifications" become questions (the rotary sub-area folds into
			// Engine). Anchors drop the line-start since -layout can glue a number to a prior line.
			SubChapters: []SubChapter{
				{Name: "Purpose", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*A\.[ \t]+Purpose\b`)},
				{Name: "Intent", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*B\.[ \t]+Intent\b`)},
				{Name: "Specifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*C\.[ \t]+Specifications\b`)},
				{Name: "Modifications", DisplayName: "About These Modifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*D\.[ \t]+Modifications`)},
				{Name: "Engine", DisplayName: "Engine", anchor: regexp.MustCompile(`1\.[ \t]+Engine\b`)},
				{Name: "Cooling", DisplayName: "Cooling System", anchor: regexp.MustCompile(`3\.[ \t]+Cooling System`)},
				{Name: "Drivetrain", DisplayName: "Transmission / Final Drive", anchor: regexp.MustCompile(`4\.[ \t]+Transmission/Final Drive`)},
				{Name: "Suspension", DisplayName: "Suspension", anchor: regexp.MustCompile(`5\.[ \t]+Suspension\b`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`6\.[ \t]+Brakes\b`)},
				{Name: "Wheels", DisplayName: "Wheels & Tires", anchor: regexp.MustCompile(`7\.[ \t]+Wheels and Tires`)},
				{Name: "Bodywork", DisplayName: "Body & Structure", anchor: regexp.MustCompile(`8\.[ \t]+Body/Structure`)},
				{Name: "Interior", DisplayName: "Driver / Passenger Compartment", anchor: regexp.MustCompile(`9\.[ \t]+Driver \(Passenger\) Compartment`)},
				{Name: "Safety", DisplayName: "Safety", anchor: regexp.MustCompile(`10\.[ \t]+Safety\b`)},
			},
		},
		{
			Name:       "Production",
			ShortName:  "prod",
			Number:     "n/a",
			Subclasses: []string{"EP", "FP", "HP"},
			start:      regexp.MustCompile(`9\.1\.5 PRODUCTION CATEGORY[ \t]*\n`),
			// The per-car spec table begins with a standalone "EP" column header.
			end:               regexp.MustCompile(`(?m)^[ \t]*EP[ \t]*$`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*(?:Category Specifications|Spec Lines)[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/prod.html",
			// Overview = Philosophy/Classification/Specifications/Interpretation + the
			// modifications preamble. Each prep area within "E. Authorized Modifications"
			// becomes a question; the Level 1 / Level 2 pairs are folded into one question each.
			SubChapters: []SubChapter{
				{Name: "Philosophy", DisplayName: "Philosophy", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*A\.[ \t]+Philosophy\b`)},
				{Name: "Classification", DisplayName: "Classification", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*B\.[ \t]+Classification\b`)},
				{Name: "Specifications", DisplayName: "Specifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*C\.[ \t]+Specifications\b`)},
				{Name: "Interpretation", DisplayName: "Interpretation", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*D\.[ \t]+Interpretation\b`)},
				{Name: "Modifications", DisplayName: "About These Modifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*E\.[ \t]+Authorized Modifications`)},
				{Name: "Drivetrain", DisplayName: "Drivetrain", anchor: regexp.MustCompile(`1\.[ \t]+Drivetrain Level 1`)},
				{Name: "Suspension", DisplayName: "Suspension & Steering", anchor: regexp.MustCompile(`4\.[ \t]+Suspension and Steering Level 1`)},
				{Name: "Cooling", DisplayName: "Cooling System", anchor: regexp.MustCompile(`6\.[ \t]+Cooling System`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`7\.[ \t]+Brakes Level`)},
				{Name: "Wheels", DisplayName: "Wheels & Tires", anchor: regexp.MustCompile(`8\.[ \t]+Wheels and Tires`)},
				{Name: "Bodywork", DisplayName: "Body & Structure", anchor: regexp.MustCompile(`9\.[ \t]+Body/Structure`)},
				{Name: "Interior", DisplayName: "Driver / Passenger / Trunk Compartment", anchor: regexp.MustCompile(`10\.[ \t]+Driver/Passenger/Trunk`)},
				{Name: "GeneralPrep", DisplayName: "General Preparation", anchor: regexp.MustCompile(`11\.[ \t]+General preparation`)},
			},
		},
	}
}

// rrClassCell is one cell in the road-racing class table: a subclass and the page its
// questionnaire lives on. An empty Subclass renders as a blank cell.
type rrClassCell struct {
	Subclass string
	URL      string
}

// generateRRIndex renders the road-racing landing page (src/rr/index.html): a make/model/year
// selector backed by the spec-line data and a class table laid out like the autocross
// /a/index.html — each category is a column header with its subclasses stacked below.
func generateRRIndex(funcMap template.FuncMap, chapters []Chapter, specLines []SpecLine) {
	carsJSON, err := json.Marshal(buildRRCars(specLines))
	if err != nil {
		log.Fatal("Could not marshal road racing car data", err)
	}
	// One column per category that defines subclasses; its subclasses stack down the column
	// (autocross-style). The grid is ragged — categories with fewer subclasses leave blank cells.
	var categories []string
	var cols [][]rrClassCell
	maxRows := 0
	for _, c := range chapters {
		if len(c.Subclasses) == 0 {
			continue
		}
		categories = append(categories, c.Name)
		col := make([]rrClassCell, len(c.Subclasses))
		for i, sub := range c.Subclasses {
			col[i] = rrClassCell{Subclass: sub, URL: "/rr/" + c.ShortName + ".html"}
		}
		cols = append(cols, col)
		if len(col) > maxRows {
			maxRows = len(col)
		}
	}
	rows := make([][]rrClassCell, maxRows)
	for r := 0; r < maxRows; r++ {
		rows[r] = make([]rrClassCell, len(cols))
		for c := range cols {
			if r < len(cols[c]) {
				rows[r][c] = cols[c][r]
			}
		}
	}
	data := struct {
		CarsJSON   string
		Categories []string
		Rows       [][]rrClassCell
	}{CarsJSON: string(carsJSON), Categories: categories, Rows: rows}

	tpl := template.New("index.html.tmpl").Funcs(funcMap)
	tpl, err = tpl.ParseFiles("./templates/rr/index.html.tmpl")
	if err != nil {
		log.Fatal("Could not parse road racing index template", err)
	}
	out, err := os.Create("./src/rr/index.html")
	if err != nil {
		log.Fatal("Could not create road racing index", err)
	}
	defer out.Close()
	if err = tpl.Execute(out, data); err != nil {
		log.Fatal("Could not execute road racing index template", err)
	}
}

// processRRChapters parses gcr_layout.txt, populates each road-racing chapter's section
// bodies and carFlags, and renders its questionnaire page. It returns the chapters so their
// carFlags can be included in common.js. The -layout extraction is used (rather than the -raw
// gcr.txt) because it keeps list markers attached to their text, has clean standalone footers,
// and lets formatRRBody de-hyphenate line wraps. (List nesting is taken from the marker type,
// not indentation, since pdftotext re-detects columns per page — see formatRRBody.)
func processRRChapters(funcMap template.FuncMap) []Chapter {
	gcr := readLayoutFile("gcr_layout.txt")
	rrChapters := roadRacingChapters()

	// Attach the parsed Improved Touring spec lines to the IT category so the eligible result
	// can list each car's subclass and minimum weight.
	itcs := parseITCSSpecLines()
	fmt.Printf("Parsed %d ITCS spec lines\n", len(itcs))
	generateRRIndex(funcMap, rrChapters, itcs)

	// Page footers and running headers that bleed in from the GCR PDF layout. In -layout each
	// is its own line: a centered footer ("©SCCA   2026 GCR V.06 p.402") and a left running
	// header ("9.1.3.   Improved Touring Category Specifications").
	gcrRemove := []*regexp.Regexp{
		regexp.MustCompile(`(?m)^[ \t]*© ?SCCA[ \t]+\d{4} GCR V\.\d+ p\.\d+[ \t]*$`),
		// Running header. The numeric section prefix (e.g. "9.1.3. ") distinguishes it from
		// the legitimate inline mention "...the Improved Touring Category Specifications
		// (ITCS)..." which has no such prefix and is not a whole line.
		regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+\.[ \t]+[A-Z][A-Za-z0-9/&' -]*? Category Specifications[ \t]*$`),
		// Summit Racing full-page advertisement, if present.
		regexp.MustCompile(`(?s)GET THE SUMMIT ADVANTAGE!.+?SummitRacing\.com`),
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
