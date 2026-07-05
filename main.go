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
	IndexCategory     string       // Class-table column this chapter's subclasses belong under; defaults to Name. Lets sibling rule sets (e.g. Touring T1 and T2-T4) share one "Touring" column.
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
// designation (make/model/years), minimum competition weight, and any per-car note. Make is
// optional: when set it is used verbatim (needed for multi-word makes like "BMC thru Rover
// Group"); when empty the make is split off the Model's first word. A zero MinWeight means
// the class sets weight elsewhere (GT-2/3/Lite weights are per-engine, not per-car).
type SpecLine struct {
	Subclass  string `json:"subclass"`
	Make      string `json:"make,omitempty"`
	Model     string `json:"model"`
	MinWeight int    `json:"minWeight"`
	Notes     string `json:"notes,omitempty"`
}

var (
	// A subclass table title in gcr_layout.txt, e.g. "        ITR        Engine   Bore x   Weight".
	itcsTitleRe = regexp.MustCompile(`^\s+(IT[RSABC])\s+Engine\b`)
	// The engine column of a car's primary line: a cylinder/rotor count, V-config, inline
	// count, or displacement (e.g. "4 Cyl", "2 Rotor", "V8", "Inline 5", "2.0"). Continuation
	// lines instead carry the valvetrain ("DOHC", "Turbo", "VTEC") here, so this
	// distinguishes the two.
	itcsEngineRe = regexp.MustCompile(`(?i)^(\d+\s?cyl|\d\s?rotor|v-?\d+|inline\s?\d|\d\.\d)`)
	// A 3-4 digit weight at the start of a field (allowing a trailing unit/note).
	weightLeadRe = regexp.MustCompile(`^(\d{3,4})\b`)
	// Page footers and running headers interspersed in the spec tables: a line-leading ©SCCA
	// footer marker, the GCR version footer, or a standalone "9.1.3. ITx Spec lines" running
	// header (either capitalization). Matched narrowly — a car's note may legitimately
	// mention SCCA ("...registered with SCCA before 5/1/06."), so a mid-line SCCA is kept.
	specCruftRe = regexp.MustCompile(`^\s*©?SCCA\b|GCR V\.|^\s*\d+\.\d+\.\d+\.\s+IT\w Spec [Ll]ines\s*$`)
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
	// Cars whose rows the column parser cannot recover: at a page top the PDF sometimes
	// explodes a row into one field per line (so the primary-line engine test never fires and
	// the fields fold into the previous car), and the Audi 4000 / Chevrolet Spark rows have
	// no engine column at all. The mangled combined rows are repaired in rrSpecFixes; the
	// swallowed cars are re-added here by hand from gcr_layout.txt.
	out = append(out,
		SpecLine{Subclass: "ITS", Model: "Alfa Romeo GTV-6 (81-86)", MinWeight: 2680, Notes: "Bosch L-Jetronic Fuel Injection"},
		SpecLine{Subclass: "ITS", Model: "Nissan 300-ZX 2+2 (1986)", MinWeight: 2725, Notes: "Bosch L-Jetronic Fuel Injection"},
		SpecLine{Subclass: "ITB", Model: "Audi 4000 & 4000S (1986)", MinWeight: 2500},
		SpecLine{Subclass: "ITC", Model: "Chevrolet Spark (2016-2022)", MinWeight: 2216},
	)
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

var (
	// A GT approved-automobiles section heading: "GT2 Cars", "GT3 Cars - ACURA",
	// "GTL-FP Cars - HONDA" (the GT-Lite list is shared with F Production).
	gtCarsHeadingRe = regexp.MustCompile(`^\s*(GT2|GT3|GTL)(?:-FP)? Cars(?:\s*-\s*(.+?))?\s*$`)
	// The car table's column header row; its x-offsets define the column boundaries. Some
	// tables wrap "Body Style" / "Wheel-base (in)" onto the adjacent lines, so only Model and
	// Years are required here (the rest fall back to the previous line).
	gtHeaderRe = regexp.MustCompile(`^\s*Model\s{2,}Years\b`)
	gtDriveRe  = regexp.MustCompile(`^(FWD|RWD|AWD|4WD)$`)
	// A body-style value ("2dr", "2 Dr", "2, 4dr"): the fallback value-line signal for rows
	// whose drive-line cell wraps ("Rear en-" / "gine/RWD").
	gtBodyRe = regexp.MustCompile(`^\d(?:,\s*\d)?\s*[Dd]r\b`)
	// A structural line that ends the current car table (per-engine spec tables, rule
	// sections, restrictor tables).
	gtTableEndRe = regexp.MustCompile(`^\s*(Engines\b|\d+\.\d+\.|[A-Z]\.\d+\.|SCCA Restrictor)`)
	// A run of text whose internal gaps are single spaces; 2+ spaces separate columns.
	gtChunkRe   = regexp.MustCompile(`\S+(?: \S+)*`)
	allCapsWord = regexp.MustCompile(`^[A-Z][A-Z]+$`)
)

// normalizeGTMake converts the heading's shouted make ("ALFA ROMEO", "CHRYSLER/DODGE/
// PLYMOUTH") to the title case the rest of the selector data uses, keeping initialisms
// (BMW, AMC, MG) as-is and matching existing make spellings.
func normalizeGTMake(s string) string {
	initialism := map[string]bool{"BMW": true, "AMC": true, "TVR": true, "NSU": true, "BMC": true}
	fix := map[string]string{"Mercedes Benz": "Mercedes-Benz", "Chevy": "Chevrolet"}
	words := strings.Fields(strings.TrimPrefix(strings.TrimSpace(s), "- "))
	for i, w := range words {
		parts := strings.Split(w, "/")
		for j, p := range parts {
			if len(p) >= 3 && allCapsWord.MatchString(p) && !initialism[p] {
				parts[j] = p[:1] + strings.ToLower(p[1:])
			}
		}
		words[i] = strings.Join(parts, "/")
	}
	out := strings.Join(words, " ")
	if f, ok := fix[out]; ok {
		return f
	}
	return out
}

// gtRow tracks the approved automobile most recently assembled from a value line, so wrapped
// model-column fragments below that line can be folded in (pdftotext centers a wrapped model
// around the line that carries the Years/Body/Drive values, so a row takes as many trailing
// fragments as it had leading ones). idx indexes the output slice — a pointer would dangle
// when append reallocates.
type gtRow struct {
	idx       int
	pre, post int
}

// parseGTSpecLines extracts the GT-2 / GT-3 / GT-Lite approved automobiles from their
// "GTx Cars - MAKE" tables in gcr_layout.txt. Columns are sliced by the x-offsets of each
// table's header row (values are centered under the headers, so a small margin is applied).
// GT weights are set per-engine rather than per-car, so MinWeight stays 0. The GT-1 approved
// list (FIA-homologation style) is a different shape and is not parsed yet.
func parseGTSpecLines() []SpecLine {
	data, err := os.ReadFile("gcr_layout.txt")
	if err != nil {
		fmt.Println("warning: gcr_layout.txt not found; skipping GT spec-line parse")
		return nil
	}
	var out []SpecLine
	subclass, mk := "", ""
	var centers []int // header center offsets: model, years, body, drive, wheelbase, notes (-1 = absent)
	var pending []string
	var last *gtRow
	// Values are centered under their column headers, so each 2+-space-separated chunk is
	// assigned to the column whose header center is nearest to the chunk's center.
	colOf := func(start, end int) int {
		mid, best, bestDist := (start+end)/2, 0, 1<<30
		for i, c := range centers {
			if c < 0 {
				continue
			}
			d := mid - c
			if d < 0 {
				d = -d
			}
			if d < bestDist {
				best, bestDist = i, d
			}
		}
		return best
	}
	split := func(line string) (cols [6][]string) {
		for _, loc := range gtChunkRe.FindAllStringIndex(line, -1) {
			i := colOf(loc[0], loc[1])
			cols[i] = append(cols[i], line[loc[0]:loc[1]])
		}
		return cols
	}
	flushRow := func(model, years string) {
		model = strings.TrimSpace(multiSpace.ReplaceAllString(model, " "))
		if model == "" {
			return
		}
		if years != "" && !strings.EqualFold(years, "NA") {
			model += " (" + strings.Trim(years, "()") + ")"
		}
		out = append(out, SpecLine{Subclass: subclass, Make: mk, Model: model})
		last = &gtRow{idx: len(out) - 1, pre: len(pending)}
		pending = nil
	}
	lines := strings.Split(string(data), "\n")
	for li, raw := range lines {
		// A page footer marker can share a line with real content ("©SCCA   GT3 Cars -
		// MERCURY"); blank it in place (© displays one column, so 5 spaces keep alignment).
		if strings.HasPrefix(strings.TrimSpace(raw), "©SCCA") {
			raw = strings.Replace(raw, "©SCCA", "     ", 1)
		}
		if m := gtCarsHeadingRe.FindStringSubmatch(raw); m != nil {
			subclass, mk = m[1], normalizeGTMake(m[2])
			centers, pending, last = nil, nil, nil
			continue
		}
		if subclass == "" {
			continue
		}
		if gtHeaderRe.MatchString(raw) {
			// Column headers can wrap ("Body" / "Wheel-base" above, "Style" / "(in)" below
			// the Model/Years line), so absent tokens fall back to the previous line.
			prev := ""
			if li > 0 {
				prev = lines[li-1]
			}
			centers = nil
			for _, h := range []string{"Model", "Years", "Body", "Drive", "Wheel-base", "Notes"} {
				if i := strings.Index(raw, h); i != -1 {
					centers = append(centers, i+len(h)/2)
				} else if i := strings.Index(prev, h); i != -1 {
					centers = append(centers, i+len(h)/2)
				} else {
					centers = append(centers, -1)
				}
			}
			pending, last = nil, nil
			continue
		}
		// A structural line ends the table only at normal indent — "9.1.2. GT2 Spec Lines"
		// running headers sit far right (col 150+) on otherwise-blank lines.
		if loc := gtTableEndRe.FindStringIndex(raw); loc != nil && len(raw)-len(strings.TrimLeft(raw, " \t\f")) < 60 {
			centers, pending, last = nil, nil, nil
			subclass = ""
			continue
		}
		if centers == nil {
			// Between the section heading and its header row, a bare heading ("GT2 Cars")
			// carries the first make on its own line.
			if t := strings.TrimSpace(raw); mk == "" && t != "" {
				mk = normalizeGTMake(t)
			}
			continue
		}
		if strings.TrimSpace(raw) == "" {
			// Blank lines separate rows; wrapped fragments are always adjacent.
			pending, last = nil, nil
			continue
		}
		if strings.Contains(raw, "GCR V.") {
			continue
		}
		cols := split(raw)
		model, years := strings.Join(cols[0], " "), strings.Join(cols[1], " ")
		body, drive := strings.Join(cols[2], " "), strings.Join(cols[3], " ")
		if gtDriveRe.MatchString(drive) || gtBodyRe.MatchString(body) {
			flushRow(strings.Join(append(append([]string{}, pending...), model), " "), years)
			continue
		}
		if model == "" {
			continue // wheelbase/notes wrap
		}
		// A model-column fragment: the previous row absorbs one for each fragment it had
		// above its value line; the rest lead the next row.
		if last != nil && last.post < last.pre {
			// The trailing fragment belongs inside the model, before any "(years)" suffix
			// flushRow added.
			s := &out[last.idx]
			if i := strings.LastIndex(s.Model, " ("); i != -1 {
				s.Model = s.Model[:i] + " " + model + s.Model[i:]
			} else {
				s.Model = strings.TrimSpace(s.Model + " " + model)
			}
			last.post++
		} else {
			pending = append(pending, model)
		}
	}
	// The GCR prints the GT-Lite listing twice; drop exact duplicate rows.
	seen := map[string]bool{}
	deduped := out[:0]
	for _, s := range out {
		key := s.Subclass + "|" + s.Make + "|" + s.Model
		if !seen[key] {
			seen[key] = true
			deduped = append(deduped, s)
		}
	}
	return deduped
}

// smSpecLines returns the Spec Miata (9.1.7) spec table. The table is four fixed rows whose
// columns pdftotext explodes one field per line, so they are transcribed by hand from
// gcr_layout.txt rather than parsed. Weights are for standard bore; the alternate-bore
// weight is in the note.
func smSpecLines() []SpecLine {
	return []SpecLine{
		{Subclass: "SM", Make: "Mazda", Model: "MX-5 / Miata (90-93)", MinWeight: 2275, Notes: "2290 with alternate bore."},
		{Subclass: "SM", Make: "Mazda", Model: "MX-5 / Miata (94-97)", MinWeight: 2385, Notes: "2400 with alternate bore. Must update to the 4.30:1 rear axle ratio as found in the 99+ cars."},
		{Subclass: "SM", Make: "Mazda", Model: "MX-5 / Miata (99-00)", MinWeight: 2400, Notes: "2415 with alternate bore. Maximum L dimension of 1.815” is permitted."},
		{Subclass: "SM", Make: "Mazda", Model: "MX-5 / Miata (01-05)", MinWeight: 2450, Notes: "2465 with alternate bore."},
	}
}

// rrCar is one car's road-racing classification for the make/model/year selector. A model
// year maps to a list of these because one car can hold several spec lines (e.g. dual-classed
// cars, or merged generations distinguished by the note).
type rrCar struct {
	Class  string `json:"class"`
	Weight int    `json:"weight"`
	Notes  string `json:"notes,omitempty"`
}

var (
	parenRe = regexp.MustCompile(`\(([^)]*)\)`)
	// One year or year range within a designation, after space/"1/2"/".5" cleanup.
	yearPartRe = regexp.MustCompile(`^(\d{2}|\d{4})(?:-(\d{2}|\d{4}))?$`)
	// A PDF soft line wrap after a slash ("328i/ is" was "328i/is" in the rulebook).
	wrapSlashRe = regexp.MustCompile(`(\S)/ +`)
	// A PDF soft line wrap inside a word ("ex- clude" was "exclude"). Only joined between
	// lowercase letters so real hyphens ("non-turbo") in mixed contexts survive.
	softWrapRe = regexp.MustCompile(`([a-z])- ([a-z])`)
	// A chassis code ("E36", "(E46)"): moved to the entry's note so generations of one model
	// fold together and the year picks the generation.
	chassisRe = regexp.MustCompile(`\(?\bE\d{2}\b\)?`)
)

// yearToken resolves a 2- or 4-digit year token; two-digit years pivot on 40 (the spec lines
// span 1968-present).
func yearToken(tok string) int {
	y, err := strconv.Atoi(tok)
	if err != nil {
		return 0
	}
	if len(tok) == 4 {
		return y
	}
	if y >= 40 {
		return 1900 + y
	}
	return 2000 + y
}

// expandYears expands a spec line's year designation into individual model years, matching
// the autocross data's year keys: "96-99" -> 1996..1999, "97-98/00-01" -> both ranges,
// "99-00" crosses the century, "86 1/2-92" rounds the mid-year revision down, and "all"
// passes through. Returns nil when s is not a year designation, which parseModel uses to
// tell year parentheticals apart from notes like "(exclude Cobra)".
func expandYears(s string) []string {
	if s == "all" {
		return []string{"all"}
	}
	s = strings.ReplaceAll(s, " ", "")
	s = strings.ReplaceAll(s, "1/2", "")
	s = strings.ReplaceAll(s, ".5", "")
	var out []string
	for _, part := range strings.Split(s, "/") {
		m := yearPartRe.FindStringSubmatch(part)
		if m == nil {
			return nil
		}
		start := yearToken(m[1])
		end := start
		if m[2] != "" {
			end = yearToken(m[2])
			if len(m[2]) == 2 {
				end = start - start%100 + end%100
				if end < start {
					end += 100
				}
			}
		}
		if start == 0 || end < start || end-start > 60 {
			return nil
		}
		for y := start; y <= end; y++ {
			out = append(out, strconv.Itoa(y))
		}
	}
	return out
}

// extractModelYear pulls the year designation and trailing note out of a model designation,
// e.g. "Integra Type R (97-98/00-01)" -> ("Integra Type R", "97-98/00-01", ""). The year is
// the rightmost parenthetical that parses as one (others are trim notes: "S2000 (04-09)
// (Exclude CR package)" -> note "Exclude CR package"). With no year parenthetical, a trailing
// unparenthesized range is tried ("TT Quattro 2001-2006", or "Capri I 72-74)" whose "(" the
// PDF lost); otherwise the year is "all". Text after the year that is not a single
// parenthesized note is table bleed and is dropped.
func extractModelYear(model string) (name, year, note string) {
	model = strings.TrimSpace(model)
	year = "all"
	locs := parenRe.FindAllStringSubmatchIndex(model, -1)
	for i := len(locs) - 1; i >= 0; i-- {
		inner := strings.TrimSpace(model[locs[i][2]:locs[i][3]])
		if expandYears(inner) == nil {
			continue
		}
		year = inner
		if trailing := strings.TrimSpace(model[locs[i][1]:]); trailing != "" {
			if m := parenRe.FindStringSubmatch(trailing); m != nil && parenRe.FindString(trailing) == trailing {
				// Rejoin PDF soft line wraps ("ex- clude Cobra" was "exclude Cobra").
				note = softWrapRe.ReplaceAllString(m[1], "$1$2")
			}
		}
		model = strings.TrimSpace(model[:locs[i][0]])
		break
	}
	if year == "all" {
		if i := strings.LastIndex(model, " "); i != -1 {
			tok := strings.TrimSuffix(model[i+1:], ")")
			if strings.Contains(tok, "-") && expandYears(tok) != nil {
				year = tok
				model = strings.TrimSpace(model[:i])
			}
		}
	}
	return model, year, note
}

// parseModel splits a spec line's model designation into make, model, year designation, and
// note, e.g. "Acura Integra Type R (97-98/00-01)" -> ("Acura", "Integra Type R",
// "97-98/00-01", ""). The make is the first word (see extractModelYear for the year/note
// rules); spec lines with a multi-word make set SpecLine.Make instead.
func parseModel(model string) (mk, name, year, note string) {
	name, year, note = extractModelYear(model)
	parts := strings.SplitN(name, " ", 2)
	mk = parts[0]
	if len(parts) > 1 {
		name = parts[1]
	} else {
		name = mk
	}
	// The GCR writes two-word makes that the first-space split cuts short.
	if mk == "Alfa" && strings.HasPrefix(name, "Romeo ") {
		mk = "Alfa Romeo"
		name = strings.TrimPrefix(name, "Romeo ")
	}
	return mk, name, year, note
}

// normalizeRRModel cleans a parsed model name: rejoins PDF soft line wraps after a slash and
// moves a chassis code ("E36") into the returned note so a model's generations share one
// selector entry.
func normalizeRRModel(name string) (string, string) {
	name = wrapSlashRe.ReplaceAllString(name, "$1/")
	note := ""
	if m := chassisRe.FindString(name); m != "" {
		note = strings.Trim(m, "()")
		name = strings.Replace(name, m, " ", 1)
	}
	name = strings.TrimSpace(multiSpace.ReplaceAllString(name, " "))
	return name, note
}

// rrSpecFix overrides a parsed spec line in the selector, keyed on "make|model" as produced
// by parseModel + normalizeRRModel. Model overrides fold variants of one model into a single
// selector entry (the year picks the generation, per the note); Make/Year overrides repair
// rows the column parser mangles (see parseITCSSpecLines) and misread makes.
type rrSpecFix struct {
	Make, Model, Year, Note string
}

var rrSpecFixes = map[string]rrSpecFix{
	// BMW generations: one model per designation; the year (and E-code note) picks the
	// generation, and trim lists like "328i/is" fold into the base designation.
	"BMW|318":                  {Model: "318i"},
	"BMW|318i/is":              {Model: "318i"},
	"BMW|318i/is Twin Cam":     {Model: "318i", Note: "Twin Cam"},
	"BMW|318ti & Club Sport":   {Model: "318ti", Note: "incl. Club Sport"},
	"BMW|318ti / Sport":        {Model: "318ti", Note: "incl. Sport"},
	"BMW|320i 1.8":             {Model: "320i", Note: "1.8L"},
	"BMW|320i 2.0":             {Model: "320i", Note: "2.0L"},
	"BMW|323 is":               {Model: "323i", Note: "is"},
	"BMW|325i/is":              {Model: "325i"},
	"BMW|325i/is (2 & 4door)":  {Model: "325i", Note: "2 & 4 door"},
	"BMW|325i/ci Coupe":        {Model: "325i", Note: "incl. Ci coupe"},
	"BMW|328i/is":              {Model: "328i"},
	"BMW|328i/ci":              {Model: "328i", Note: "incl. Ci"},
	"BMW|330i/ci excludes ZHP": {Model: "330i", Note: "incl. Ci; excludes ZHP"},
	// Other generation splits folded into one model.
	"Nissan|240-SX / S13":           {Model: "240-SX", Note: "S13"},
	"Nissan|240-SX / S14":           {Model: "240-SX", Note: "S14"},
	"Mazda|MX-5":                    {Model: "MX-5 / Miata"},
	"Mazda|MX-5 / Miata includes R": {Model: "MX-5 / Miata", Note: "includes R"},
	"Toyota|Celica I 2.0L":          {Model: "Celica", Note: "2.0L"},
	"Toyota|Celica I 2.2":           {Model: "Celica", Note: "2.2L"},
	"Toyota|Celica II 2.2":          {Model: "Celica", Note: "2.2L"},
	"Toyota|Celica II 2.4":          {Model: "Celica", Note: "2.4L"},
	"Toyota|Celica III 2.4":         {Model: "Celica", Note: "2.4L"},
	"Toyota|Celica III GTS":         {Model: "Celica GTS"},
	"Toyota|Celica ST":              {Model: "Celica", Note: "ST"},
	"Porsche|911 SC":                {Model: "911SC"},
	"Porsche|911S 2.0":              {Model: "911S", Note: "2.0L"},
	"Porsche|911S 2.2":              {Model: "911S", Note: "2.2L"},
	"Porsche|911S 2.4":              {Model: "911S", Note: "2.4L"},
	"Ford|Mustang GT & LX":          {Model: "Mustang GT", Note: "incl. LX"},
	// PDF soft line wraps and misread makes.
	"Pontiac|Fire- bird":                          {Model: "Firebird"},
	"Pontiac|Grand- Am (Quad 4)":                  {Model: "Grand Am (Quad 4)"},
	"Volkswagen|Sci- rocco 16V":                   {Model: "Scirocco 16V"},
	"Plymouth|Hori- zon 2.2":                      {Model: "Horizon 2.2"},
	"Dodge|Day- tona/Chrysler Laser 2.2":          {Model: "Daytona / Chrysler Laser 2.2"},
	"Alfa Romeo|Al- fetta GT, GTV, Sprint Veloce": {Model: "Alfetta GT, GTV, Sprint Veloce"},
	"Alfa Romeo|Spider Quadri- foglio":            {Model: "Spider Quadrifoglio"},
	"Mitsubishi|3000 GT (non- turbo FWD)":         {Model: "3000 GT", Note: "non-turbo FWD"},
	"Ford|Probe GL/LX 2.2L non- turbo":            {Model: "Probe GL/LX 2.2L", Note: "non-turbo"},
	"Mercedes-Benz|190E 2.3L 8V":                  {Model: "190 E 2.3L 8V"},
	"Dodge|/ Plymouth Neon RT & ACR":              {Model: "Neon RT & ACR", Note: "Dodge / Plymouth"},
	"Dodge|/ Plymouth Neon incl. SE, ES, SXT":     {Model: "Neon incl. SE, ES, SXT", Note: "Dodge / Plymouth"},
	"Mazda2|Mazda2":                               {Make: "Mazda"},
	"Chevy|Beretta":                               {Make: "Chevrolet"},
	"Audi|TT Quattro 2000":                        {Model: "TT Quattro", Year: "2000"},
	// Rows the column parser mangles (page-top exploded rows folded into the previous car —
	// see parseITCSSpecLines, which re-adds the swallowed cars).
	"Acura|TSX (04-08) GTV-6 V-6 SOHC 88.0 x 68.3 2492 2680":     {Model: "TSX", Year: "04-08"},
	"Nissan|300-ZX (84-88) 2+2 6 Cyl SOHC 87.0 x 83.0 2960 2725": {Model: "300-ZX", Year: "84-88"},
	"Mercury|Capri I V-6 72-74) 93.0 x 68.5 2796":                {Model: "Capri I V-6", Year: "72-74"},
	"Chevrolet|Chevette 1.6 (76-87) Chevrolet Spark":             {Model: "Chevette 1.6", Year: "76-87"},
	"Alfa Romeo|all Spider models (90-94) Audi 4000 & 4000S":     {Model: "all Spider models", Year: "90-94"},
}

// joinNotes joins the non-empty note fragments with "; ".
func joinNotes(parts ...string) string {
	var out []string
	for _, p := range parts {
		if p != "" {
			out = append(out, p)
		}
	}
	return strings.Join(out, "; ")
}

// buildRRCars indexes spec lines as make -> model -> year -> [{class, weight, notes}] for
// the road-racing make/model/year selector. Year designations expand to individual years
// (like the autocross data); a year holds a list because merged generations and dual-classed
// cars can share one. json.Marshal sorts the string keys, so output is deterministic.
func buildRRCars(specs []SpecLine) map[string]map[string]map[string][]rrCar {
	cars := map[string]map[string]map[string][]rrCar{}
	for _, s := range specs {
		var mk, name, year, note string
		if s.Make != "" {
			mk = s.Make
			name, year, note = extractModelYear(s.Model)
		} else {
			mk, name, year, note = parseModel(s.Model)
		}
		var chassis string
		name, chassis = normalizeRRModel(name)
		fixNote := ""
		if fix, ok := rrSpecFixes[mk+"|"+name]; ok {
			if fix.Make != "" {
				mk = fix.Make
			}
			if fix.Model != "" {
				name = fix.Model
			}
			if fix.Year != "" {
				year = fix.Year
			}
			fixNote = fix.Note
		}
		// The note only carries what distinguishes generations/variants of the model (chassis
		// code, trim, body style) — the ITCS Notes column text (fuel cell allowances, required
		// restrictors, ...) is shown in the questionnaire's spec-line table instead.
		car := rrCar{Class: s.Subclass, Weight: s.MinWeight, Notes: joinNotes(chassis, fixNote, note)}
		years := expandYears(year)
		if years == nil {
			years = []string{"all"}
		}
		if cars[mk] == nil {
			cars[mk] = map[string]map[string][]rrCar{}
		}
		if cars[mk][name] == nil {
			cars[mk][name] = map[string][]rrCar{}
		}
		for _, y := range years {
			dup := false
			for _, c := range cars[mk][name][y] {
				if c == car {
					dup = true
					break
				}
			}
			if !dup {
				cars[mk][name][y] = append(cars[mk][name][y], car)
			}
		}
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
			Name:          "Touring (T1)",
			ShortName:     "t1",
			Number:        "n/a",
			Subclasses:    []string{"T1"},
			IndexCategory: "Touring",
			start:         regexp.MustCompile(`9\.1\.9\.1 TOURING \(T1\) CATEGORY[ \t]*\n`),
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
			IndexCategory:     "Touring",
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
		{
			Name:       "Spec MX-5",
			ShortName:  "smx",
			Number:     "n/a",
			Subclasses: []string{"SMX"},
			start:      regexp.MustCompile(`9\.1\.7\.1 SPEC MX-5 \(SMX\)[ \t]*\n`),
			// End before the administrative VTS sections (Data Acquisition, video, confiscation,
			// penalties) and the next category.
			end:               regexp.MustCompile(`20\.[ \t]+Data Acquisition`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*(?:Category Specifications|Spec Lines)[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/smx.html",
			// Overview = Purpose/Classified Cars/Authorized Modifications + the VTS preamble. The
			// VTS numbered areas become questions; closely related items (transmission/differential
			// under Driveline, hubs under Suspension, tires under Wheels) fold into one question.
			SubChapters: []SubChapter{
				{Name: "Purpose", DisplayName: "Purpose & Intent", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*A\.[ \t]+PURPOSE AND INTENT`)},
				{Name: "ClassifiedCars", DisplayName: "Classified Cars & Weights", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*B\.[ \t]+CLASSIFIED CARS`)},
				{Name: "Modifications", DisplayName: "About These Modifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*C\.[ \t]+AUTHORIZED MODIFICATIONS`)},
				{Name: "VTS", DisplayName: "Vehicle Technical Specifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*D\.[ \t]+VEHICLE TECHNICAL SPECIFICATIONS`)},
				{Name: "WeightBallast", DisplayName: "Weight & Ballast", anchor: regexp.MustCompile(`1\.[ \t]+Vehicle Weight`)},
				{Name: "Chassis", DisplayName: "Chassis", anchor: regexp.MustCompile(`3\.[ \t]+Chassis`)},
				{Name: "Body", DisplayName: "Body", anchor: regexp.MustCompile(`4\.[ \t]+Body\b`)},
				{Name: "Cockpit", DisplayName: "Cockpit / Trunk", anchor: regexp.MustCompile(`5\.[ \t]+Cockpit`)},
				{Name: "Engine", DisplayName: "Engine", anchor: regexp.MustCompile(`6\.[ \t]+Engine Modifications`)},
				{Name: "Exhaust", DisplayName: "Exhaust", anchor: regexp.MustCompile(`7\.[ \t]+Exhaust\b`)},
				{Name: "Cooling", DisplayName: "Cooling System", anchor: regexp.MustCompile(`8\.[ \t]+Cooling System`)},
				{Name: "Driveline", DisplayName: "Clutch & Drivetrain", anchor: regexp.MustCompile(`9\.[ \t]+Clutch`)},
				{Name: "Suspension", DisplayName: "Suspension & Steering", anchor: regexp.MustCompile(`12\.[ \t]+Suspension and Steering`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`14\.[ \t]+Brakes\b`)},
				{Name: "Wheels", DisplayName: "Wheels & Tires", anchor: regexp.MustCompile(`15\.[ \t]+Wheels\b`)},
				{Name: "Electrical", DisplayName: "Electrical Equipment", anchor: regexp.MustCompile(`17\.[ \t]+Electrical Equipment`)},
				{Name: "RollCage", DisplayName: "Roll Cage", anchor: regexp.MustCompile(`18\.[ \t]+Roll Cage`)},
				{Name: "Safety", DisplayName: "Safety", anchor: regexp.MustCompile(`19\.[ \t]+Safety\b`)},
			},
		},
		{
			Name:       "B-Spec",
			ShortName:  "bspec",
			Number:     "n/a",
			Subclasses: []string{"B-Spec", "C-Spec"},
			start:      regexp.MustCompile(`9\.1\.10\. B-SPEC AND C-SPEC \(REGIONAL CLASS ONLY\)[ \t]*\n`),
			// The per-car spec table begins with the "B-SPEC ... Stroke (mm)" column header.
			end:               regexp.MustCompile(`B-SPEC[ \t]+Stroke`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*(?:Category Specifications|Spec Lines)[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/bspec.html",
			// Definition/Eligibility/Classification are overview; the Technical & Safety and
			// Vehicle Preparation sections (each a long numbered list) become the questions.
			SubChapters: []SubChapter{
				{Name: "Definition", DisplayName: "Definition", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*A\.[ \t]+Definition`)},
				{Name: "Eligibility", DisplayName: "Automobile Eligibility", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*B\.[ \t]+Automobile Eligibility`)},
				{Name: "Classification", DisplayName: "Classification", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*C\.[ \t]+Classification`)},
				{Name: "Safety", DisplayName: "Technical & Safety Items", anchor: regexp.MustCompile(`(?m)^[ \t]*D\.[ \t]+Technical and Safety Items`)},
				{Name: "Preparation", DisplayName: "Vehicle Preparation", anchor: regexp.MustCompile(`(?m)^[ \t]*E\.[ \t]+Vehicle Preparation`)},
			},
		},
		{
			// Super Touring's STU and STL subclasses have their own technical regulations
			// (9.1.4.1 / 9.1.4.2), so each gets its own questionnaire under the shared
			// "Super Touring" class-table column.
			Name:          "Super Touring (STU)",
			ShortName:     "stu",
			Number:        "n/a",
			Subclasses:    []string{"STU"},
			IndexCategory: "Super Touring",
			start:         regexp.MustCompile(`STU SPECIFIC TECHNICAL REGULATIONS[ \t]*\n`),
			// End at the STU per-car spec table (Maximum Displacement / Minimum Weight).
			end:               regexp.MustCompile(`(?m)^[ \t]*STU[ \t]+Maximum Displacement`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*(?:Category Specifications|Spec Lines|Specifications)[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/stu.html",
			SubChapters: []SubChapter{
				{Name: "ChassisBodywork", DisplayName: "Chassis & Bodywork", anchor: regexp.MustCompile(`(?m)^[ \t]*A\.[ \t]+Chassis and Bodywork`)},
				{Name: "Engines", DisplayName: "Engines", anchor: regexp.MustCompile(`(?m)^[ \t]*B\.[ \t]+Engines`)},
				{Name: "Drivetrain", DisplayName: "Drivetrain", anchor: regexp.MustCompile(`(?m)^[ \t]*C\.[ \t]+Drivetrain`)},
				{Name: "Suspension", DisplayName: "Suspension & Steering", anchor: regexp.MustCompile(`(?m)^[ \t]*D\.[ \t]+Suspension and Steering`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`(?m)^[ \t]*E\.[ \t]+Brakes`)},
				{Name: "Wheels", DisplayName: "Wheels", anchor: regexp.MustCompile(`(?m)^[ \t]*F\.[ \t]+Wheels`)},
				{Name: "Tires", DisplayName: "Tires", anchor: regexp.MustCompile(`(?m)^[ \t]*G\.[ \t]+Tires`)},
				{Name: "Weights", DisplayName: "Weights & Engine Allowances", anchor: regexp.MustCompile(`(?m)^[ \t]*H\.[ \t]+Weights and Engine Allowances`)},
			},
		},
		{
			Name:              "Super Touring (STL)",
			ShortName:         "stl",
			Number:            "n/a",
			Subclasses:        []string{"STL"},
			IndexCategory:     "Super Touring",
			start:             regexp.MustCompile(`STL SPECIFIC TECHNICAL REGULATIONS[ \t]*\n`),
			end:               regexp.MustCompile(`(?m)^[ \t]*STL[ \t]+Maximum Displacement`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*(?:Category Specifications|Spec Lines|Specifications)[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/stl.html",
			SubChapters: []SubChapter{
				{Name: "Chassis", DisplayName: "Chassis", anchor: regexp.MustCompile(`(?m)^[ \t]*A\.[ \t]+Chassis`)},
				{Name: "Engines", DisplayName: "Engines", anchor: regexp.MustCompile(`(?m)^[ \t]*B\.[ \t]+Engines`)},
				{Name: "Drivetrain", DisplayName: "Drivetrain", anchor: regexp.MustCompile(`(?m)^[ \t]*C\.[ \t]+Drivetrain`)},
				{Name: "Suspension", DisplayName: "Suspension", anchor: regexp.MustCompile(`(?m)^[ \t]*D\.[ \t]+Suspension`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`(?m)^[ \t]*E\.[ \t]+Brakes`)},
				{Name: "Wheels", DisplayName: "Wheels", anchor: regexp.MustCompile(`(?m)^[ \t]*F\.[ \t]+Wheels`)},
				{Name: "Tires", DisplayName: "Tires", anchor: regexp.MustCompile(`(?m)^[ \t]*G\.[ \t]+Tires`)},
				{Name: "WeightReq", DisplayName: "Weight Requirements", anchor: regexp.MustCompile(`(?m)^[ \t]*H\.[ \t]+Weight Requirements`)},
				{Name: "Allowances", DisplayName: "Car & Engine Specific Allowances", anchor: regexp.MustCompile(`(?m)^[ \t]*I\.[ \t]+Car and Engine Specific Allowances`)},
			},
		},
		{
			Name:       "GT",
			ShortName:  "gt",
			Number:     "n/a",
			Subclasses: []string{"GT1", "GT2", "GT3", "GTL", "GTA", "GTX"},
			start:      regexp.MustCompile(`9\.1\.2\. GT1 CATEGORY SPECIFICATIONS[ \t]*\n`),
			// The GT-1 ruleset (A-D) is the questionnaire; end at the Approved Automobiles notes
			// (and the per-car spec lines / GT-2/3/Lite rulesets that follow).
			end:               regexp.MustCompile(`(?m)^[ \t]*E\.[ \t]+APPROVED AUTOMOBILES`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*(?:Category Specifications|Spec Lines)[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/gt.html",
			// Overview = Purpose/Intent/Specifications + the modifications preamble. The numbered
			// areas within "D. AUTHORIZED MODIFICATIONS (GT-1)" become questions (their "(GT-1)"
			// suffix keeps the anchors unambiguous). GT-2/3/Lite/A/X have their own rule sets.
			SubChapters: []SubChapter{
				{Name: "Purpose", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*A\.[ \t]+PURPOSE`)},
				{Name: "Intent", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*B\.[ \t]+INTENT`)},
				{Name: "Specifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*C\.[ \t]+SPECIFICATIONS`)},
				{Name: "Modifications", DisplayName: "About These Modifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*D\.[ \t]+AUTHORIZED MODIFICATIONS`)},
				{Name: "Engine", DisplayName: "Engine", anchor: regexp.MustCompile(`1\.[ \t]+Engine \(GT-1\)`)},
				{Name: "RotaryEngine", DisplayName: "Engine (Rotary)", anchor: regexp.MustCompile(`2\.[ \t]+Engine, Rotary Piston`)},
				{Name: "Cooling", DisplayName: "Cooling System", anchor: regexp.MustCompile(`3\.[ \t]+Cooling System \(GT-1\)`)},
				{Name: "Drivetrain", DisplayName: "Transmission / Final Drive", anchor: regexp.MustCompile(`4\.[ \t]+Transmission/Final Drive \(GT-1\)`)},
				{Name: "Suspension", DisplayName: "Suspension", anchor: regexp.MustCompile(`5\.[ \t]+Suspension \(GT-1\)`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`6\.[ \t]+Brakes \(GT-1\)`)},
				{Name: "Wheels", DisplayName: "Wheels & Tires", anchor: regexp.MustCompile(`7\.[ \t]+Wheels and Tires \(GT-1\)`)},
				{Name: "Bodywork", DisplayName: "Body & Structure", anchor: regexp.MustCompile(`8\.[ \t]+Body/Structure \(GT-1\)`)},
				{Name: "Interior", DisplayName: "Driver / Passenger Compartment", anchor: regexp.MustCompile(`9\.[ \t]+Driver/Passenger Compartment`)},
				{Name: "Safety", DisplayName: "Safety", anchor: regexp.MustCompile(`10\.[ \t]+Safety \(GT-1\)`)},
			},
		},
		{
			Name:       "Spec Miata",
			ShortName:  "specmiata",
			Number:     "n/a",
			Subclasses: []string{"SM"},
			start:      regexp.MustCompile(`9\.1\.7\. SPEC MIATA CLASS[ \t]*\n`),
			// The per-car spec table ("SM   Bore x ...") follows the prose rules.
			end:               regexp.MustCompile(`SM[ \t]+Bore x`),
			ChapterFillerText: regexp.MustCompile(`(?m)^[ \t]*\d+\.\d+\.\d+(?:\.\d+)?\.?[ \t]+.*(?:Category Specifications|Spec Lines)[ \t]*$`),
			templateFile:      "./templates/rr/questionnaire.html.tmpl",
			outputFile:        "./src/rr/specmiata.html",
			SubChapters: []SubChapter{
				{Name: "Purpose", DisplayName: "Purpose & Intent", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*A\.[ \t]+PURPOSE AND INTENT`)},
				{Name: "ClassifiedCars", DisplayName: "Classified Cars & Weights", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*B\.[ \t]+CLASSIFIED CARS`)},
				{Name: "Modifications", DisplayName: "About These Modifications", Informational: true, anchor: regexp.MustCompile(`(?m)^[ \t]*C\.[ \t]+AUTHORIZED MODIFICATIONS`)},
				{Name: "Engine", DisplayName: "Engine", anchor: regexp.MustCompile(`1\.[ \t]+Engine Modifications`)},
				{Name: "Drivetrain", DisplayName: "Transmission / Final Drive", anchor: regexp.MustCompile(`2\.[ \t]+Transmission/Final Drive`)},
				{Name: "Chassis", DisplayName: "Chassis", anchor: regexp.MustCompile(`3\.[ \t]+Chassis\b`)},
				{Name: "Brakes", DisplayName: "Brakes", anchor: regexp.MustCompile(`4\.[ \t]+Brakes\b`)},
				{Name: "Wheels", DisplayName: "Wheels", anchor: regexp.MustCompile(`5\.[ \t]+Wheels\b`)},
				{Name: "Tires", DisplayName: "Tires", anchor: regexp.MustCompile(`6\.[ \t]+Tires\b`)},
				{Name: "Bodywork", DisplayName: "Body & Structure", anchor: regexp.MustCompile(`7\.[ \t]+Body/Structure`)},
				{Name: "Interior", DisplayName: "Driver / Passenger Compartment", anchor: regexp.MustCompile(`8\.[ \t]+Driver/Passenger Compartment`)},
				{Name: "Safety", DisplayName: "Safety", anchor: regexp.MustCompile(`9\.[ \t]+Safety\b`)},
				{Name: "Updates", DisplayName: "Updates & Backdating", anchor: regexp.MustCompile(`10\.[ \t]+Updates`)},
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
	// One column per display category; its subclasses stack down the column (autocross-style).
	// Chapters sharing an IndexCategory (e.g. Touring T1 and T2-T4) merge into one column, with
	// each subclass linking to its own questionnaire. The grid is ragged — shorter columns
	// leave blank cells.
	var categories []string
	colCells := map[string][]rrClassCell{}
	for _, c := range chapters {
		if len(c.Subclasses) == 0 {
			continue
		}
		cat := c.IndexCategory
		if cat == "" {
			cat = c.Name
		}
		if _, seen := colCells[cat]; !seen {
			categories = append(categories, cat)
		}
		for _, sub := range c.Subclasses {
			colCells[cat] = append(colCells[cat], rrClassCell{Subclass: sub, URL: "/rr/" + c.ShortName + ".html"})
		}
	}
	cols := make([][]rrClassCell, len(categories))
	maxRows := 0
	for i, cat := range categories {
		cols[i] = colCells[cat]
		if len(cols[i]) > maxRows {
			maxRows = len(cols[i])
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

	// The make/model/year selector is fed by every category's parsed spec lines.
	itcs := parseITCSSpecLines()
	gt := parseGTSpecLines()
	sm := smSpecLines()
	fmt.Printf("Parsed %d ITCS, %d GT, %d SM spec lines\n", len(itcs), len(gt), len(sm))
	specLines := append(append(itcs, gt...), sm...)
	generateRRIndex(funcMap, rrChapters, specLines)

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
		// Tire Rack advertisement block, if present.
		regexp.MustCompile(`(?s)©20\d\d Tire Rack.+?ON ORDERS OVER \$50`),
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
