package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"path"
	"regexp"
	"sort"
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
	Sections          []string // Section names for classes without SubChapters (e.g., "Bodywork", "Safety")
	CarFlags          []string // Question IDs for carFlags (auto-populated from SubChapters/Sections)
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
	Name   string
	Number string
	Reader *io.SectionReader
}

// CarEntry represents a single car model in a specific class
type CarEntry struct {
	Make  string
	Model string
	Years []string // Individual years or "all"
	Class string   // lowercase class abbreviation
}

// ClassSection represents a parsed class section from Appendix A
type ClassSection struct {
	ClassName   string
	ClassAbbrev string
	RawText     string
}

// AllSoloCars: Make -> Model -> Year -> []Classes
type AllSoloCars map[string]map[string]map[string][]string

// TemplateData holds all data passed to templates
type TemplateData struct {
	Chapters      []Chapter
	AllSoloCarsJS string
}

// extractAppendixA extracts the Appendix A section from the rules text
func extractAppendixA(rules string) string {
	// Find all occurrences - we want the second one (first is Table of Contents)
	startPattern := regexp.MustCompile(`APPENDIX A - AUTOMOBILE CLASSES`)
	endPattern := regexp.MustCompile(`APPENDIX B`)

	allMatches := startPattern.FindAllStringIndex(rules, -1)
	if len(allMatches) < 2 {
		// Fallback to first match if only one exists
		if len(allMatches) == 1 {
			startMatch := allMatches[0]
			endMatch := endPattern.FindStringIndex(rules[startMatch[0]:])
			if endMatch == nil {
				return rules[startMatch[0]:]
			}
			return rules[startMatch[0] : startMatch[0]+endMatch[0]]
		}
		return ""
	}

	// Use the second occurrence (actual content, not ToC)
	startMatch := allMatches[1]
	endMatch := endPattern.FindStringIndex(rules[startMatch[0]:])
	if endMatch == nil {
		return rules[startMatch[0]:]
	}

	return rules[startMatch[0] : startMatch[0]+endMatch[0]]
}

// cleanAppendixText removes page numbers, headers, and other noise from Appendix A text
func cleanAppendixText(text string) string {
	// Remove page numbers like "2026 SCCA® National Solo® Rules — 189"
	pageNumPattern := regexp.MustCompile(`\d{4} SCCA® National Solo® Rules — \d+`)
	text = pageNumPattern.ReplaceAllString(text, "")

	// Remove page numbers like "189 — 2026 SCCA® National Solo® Rules"
	pageNumPattern2 := regexp.MustCompile(`\d+ — \d{4} SCCA® National Solo® Rules`)
	text = pageNumPattern2.ReplaceAllString(text, "")

	// NOTE: We no longer remove "Appendix A - (XX) ..." headers here because
	// parseClassSections needs them to identify class boundaries.
	// The inverted page headers like "Appendix A - (AS) Street" are used as markers.

	// Remove continuation markers like "SS (continued)"
	continuedPattern := regexp.MustCompile(`(?m)^[A-Z]+ \(continued\)$`)
	text = continuedPattern.ReplaceAllString(text, "")

	// Remove catch-all lines (simpler approach - just remove lines starting with "Catch-all")
	catchAllPattern := regexp.MustCompile(`(?m)^"Catch-all":.*$`)
	text = catchAllPattern.ReplaceAllString(text, "")

	// Also remove multi-line catch-all descriptions
	catchAllMultiline := regexp.MustCompile(`(?m)^All eligible unclassified cars.*$`)
	text = catchAllMultiline.ReplaceAllString(text, "")

	return text
}

// parseClassSections identifies and extracts individual class sections from Appendix A
func parseClassSections(appendixA string) []ClassSection {
	var sections []ClassSection

	// Patterns for different class types
	// These include both formal headers AND page headers (which appear in -raw PDF output)
	classPatterns := []struct {
		pattern *regexp.Regexp
		name    string
	}{
		// Street classes: "Super Street class (SS)", "A Street class (AS)"
		{regexp.MustCompile(`([A-Z][A-Za-z\s]*?) Street class \(([A-Z]+)\)`), "Street"},
		// Street Touring: "Super Street Touring® (SST)", "A Street Touring (AST)"
		{regexp.MustCompile(`([A-Z][A-Za-z\s]*?) Street Touring®? \(([A-Z]+)\)`), "Street Touring"},
		// Street Prepared: "Super Street Prepared (SSP)"
		{regexp.MustCompile(`([A-Z][A-Za-z\s]*?) Street Prepared \(([A-Z]+)\)`), "Street Prepared"},
		// Street Modified: "Super Street Modified class (SSM)", "Street Modified class (SM)"
		{regexp.MustCompile(`([A-Z][A-Za-z\s-]*?) Street Modified[A-Za-z\s-]* class \(([A-Z]+)\)`), "Street Modified"},
		// Prepared: "X Prepared (XP)", "C Prepared (CP)"
		{regexp.MustCompile(`([A-Z]) Prepared \(([A-Z]+)\)`), "Prepared"},
		// Page headers from -raw PDF output: "Street (BS) - Appendix A"
		{regexp.MustCompile(`(Street) \(([A-Z]{2})\) - Appendix A`), "Street Page Header"},
		// Page headers: "Street Touring® (SST) - Appendix A"
		{regexp.MustCompile(`(Street Touring®?) \(([A-Z]+)\) - Appendix A`), "Street Touring Page Header"},
		// Page headers: "Street Prepared (SSP) - Appendix A"
		{regexp.MustCompile(`(Street Prepared) \(([A-Z]+)\) - Appendix A`), "Street Prepared Page Header"},
		// Page headers: "Prepared (XP) - Appendix A"
		{regexp.MustCompile(`(Prepared) \(([A-Z]+)\) - Appendix A`), "Prepared Page Header"},
		// Inverted page headers: "Appendix A - (AS) Street"
		{regexp.MustCompile(`(?m)(Appendix A) - \(([A-Z]{2})\) Street$`), "Street Page Header Inverted"},
		// Inverted page headers: "Appendix A - (BST) Street Touring®"
		{regexp.MustCompile(`(Appendix A) - \(([A-Z]+)\) Street Touring®?`), "Street Touring Page Header Inverted"},
		// Inverted page headers: "Appendix A - (CSP) Street Prepared"
		{regexp.MustCompile(`(Appendix A) - \(([A-Z]+)\) Street Prepared`), "Street Prepared Page Header Inverted"},
		// Inverted page headers: "Appendix A - (SM) Street Modified"
		{regexp.MustCompile(`(Appendix A) - \(([A-Z]+)\) Street Modified`), "Street Modified Page Header Inverted"},
	}

	// Classes to parse (skip formula-based classes)
	targetClasses := map[string]bool{
		"SS": true, "AS": true, "BS": true, "CS": true, "DS": true,
		"ES": true, "FS": true, "GS": true, "HS": true,
		"SST": true, "AST": true, "BST": true, "CST": true,
		"DST": true, "EST": true, "GST": true,
		"SSP": true, "CSP": true, "DSP": true, "ESP": true, "FSP": true,
		"SSM": true, "SM": true, "SMF": true,
		"XP": true, "CP": true, "DP": true, "EP": true, "FP": true,
	}

	// Find all class headers and their positions
	type classMatch struct {
		name   string
		abbrev string
		start  int
		end    int
	}
	var matches []classMatch

	for _, cp := range classPatterns {
		allMatches := cp.pattern.FindAllStringSubmatchIndex(appendixA, -1)
		for _, m := range allMatches {
			if m == nil || len(m) < 6 {
				continue
			}
			abbrev := appendixA[m[4]:m[5]]
			if !targetClasses[abbrev] {
				continue
			}
			name := appendixA[m[2]:m[3]]
			matches = append(matches, classMatch{
				name:   strings.TrimSpace(name),
				abbrev: abbrev,
				start:  m[0],
				end:    m[1],
			})
		}
	}

	// Sort matches by position
	sort.Slice(matches, func(i, j int) bool {
		return matches[i].start < matches[j].start
	})

	// Deduplicate: keep only the first match for each class abbreviation
	// (page headers appear before formal headers, so first occurrence wins)
	seen := make(map[string]bool)
	var dedupedMatches []classMatch
	for _, m := range matches {
		if !seen[m.abbrev] {
			seen[m.abbrev] = true
			dedupedMatches = append(dedupedMatches, m)
		}
	}
	matches = dedupedMatches

	// Extract text for each class (from header to next header)
	for i, m := range matches {
		var endPos int
		if i+1 < len(matches) {
			endPos = matches[i+1].start
		} else {
			endPos = len(appendixA)
		}
		sections = append(sections, ClassSection{
			ClassName:   m.name,
			ClassAbbrev: m.abbrev,
			RawText:     appendixA[m.end:endPos],
		})
	}

	return sections
}

// expandYearRange expands year ranges like "2017-21" to individual years
func expandYearRange(yearStr string) []string {
	yearStr = strings.TrimSpace(yearStr)

	// Handle "all"
	if strings.ToLower(yearStr) == "all" {
		return []string{"all"}
	}

	var years []string

	// Split by comma for multiple ranges like "2012-13, 2018-20"
	parts := strings.Split(yearStr, ",")
	for _, part := range parts {
		part = strings.TrimSpace(part)
		// Remove half-year notation (e.g., "1993½")
		part = strings.ReplaceAll(part, "½", "")

		// Check for range pattern
		rangePattern := regexp.MustCompile(`(\d{4})-(\d{2,4})`)
		if match := rangePattern.FindStringSubmatch(part); match != nil {
			startYear, _ := strconv.Atoi(match[1])
			endYearStr := match[2]

			var endYear int
			if len(endYearStr) == 2 {
				// Short form like "17" for 2017
				century := (startYear / 100) * 100
				endYear, _ = strconv.Atoi(endYearStr)
				endYear += century
				// Handle century rollover (e.g., 1999-02)
				if endYear < startYear {
					endYear += 100
				}
			} else {
				endYear, _ = strconv.Atoi(endYearStr)
			}

			// Validate years
			if startYear >= 1960 && startYear <= 2030 && endYear >= startYear && endYear <= 2030 {
				for y := startYear; y <= endYear; y++ {
					years = append(years, strconv.Itoa(y))
				}
			}
		} else {
			// Single year pattern
			singlePattern := regexp.MustCompile(`(\d{4})`)
			if match := singlePattern.FindStringSubmatch(part); match != nil {
				year, _ := strconv.Atoi(match[1])
				if year >= 1960 && year <= 2030 {
					years = append(years, match[1])
				}
			}
		}
	}

	if len(years) == 0 {
		return []string{"all"}
	}

	return years
}

// parseCarEntries parses car entries from a class section
func parseCarEntries(classText string, classAbbrev string) []CarEntry {
	var entries []CarEntry

	lines := strings.Split(classText, "\n")
	var currentMake string
	var pendingModel string

	// Known makes map for matching
	knownMakes := map[string]bool{
		"Acura": true, "Alfa Romeo": true, "AMC": true, "Aston Martin": true,
		"Audi": true, "BMW": true, "Buick": true, "Cadillac": true,
		"Chevrolet": true, "Chrysler": true, "Datsun": true, "DeTomaso": true,
		"Dodge": true, "Eagle": true, "Ferrari": true, "Fiat": true,
		"Ford": true, "Genesis": true, "Geo": true, "GMC": true,
		"Honda": true, "Hyundai": true, "Infiniti": true, "Isuzu": true,
		"Jaguar": true, "Jeep": true, "Jensen": true, "Kia": true,
		"Lamborghini": true, "Lancia": true, "Lexus": true, "Lincoln": true,
		"Lotus": true, "Maserati": true, "Mazda": true, "McLaren": true,
		"Mercedes-Benz": true, "Mercury": true, "MG": true, "Mini": true,
		"Mitsubishi": true, "Morgan": true, "Nissan": true, "Oldsmobile": true,
		"Opel": true, "Panoz": true, "Peugeot": true, "Plymouth": true,
		"Polestar": true, "Pontiac": true, "Porsche": true, "Renault": true,
		"Saab": true, "Saleen": true, "Saturn": true, "Scion": true,
		"Shelby": true, "Smart": true, "SRT": true, "Subaru": true,
		"Sunbeam": true, "Suzuki": true, "Tesla Motors": true, "Toyota": true,
		"Triumph": true, "TVR": true, "Volkswagen": true, "Volvo": true,
		"Dodge & SRT": true, "Chrysler & Plymouth": true,
	}

	// Pattern for year in parentheses
	yearPattern := regexp.MustCompile(`\(([^)]+)\)\s*$`)

	for i := 0; i < len(lines); i++ {
		line := strings.TrimSpace(lines[i])
		if line == "" {
			continue
		}

		// Skip known non-car lines
		if strings.HasPrefix(line, "STREET") ||
			strings.HasPrefix(line, "PREPARED") ||
			strings.HasPrefix(line, "MODIFIED") ||
			strings.HasPrefix(line, "Excluded") ||
			strings.HasPrefix(line, "Cars designated") ||
			strings.HasPrefix(line, "The following") ||
			strings.HasPrefix(line, "•") ||
			strings.HasPrefix(line, "*") ||
			strings.Contains(line, "catch-all") ||
			strings.Contains(line, "Catch-all") ||
			strings.Contains(line, "NOC") && !strings.Contains(line, "(") {
			continue
		}

		// Skip page numbers and headers
		if regexp.MustCompile(`^\d+ —\d{4} SCCA`).MatchString(line) ||
			regexp.MustCompile(`^\d+ — \d{4} SCCA`).MatchString(line) ||
			regexp.MustCompile(`^\d{4} SCCA.*Rules`).MatchString(line) ||
			regexp.MustCompile(`^Appendix A`).MatchString(line) ||
			regexp.MustCompile(`^\([A-Z]+\) Street`).MatchString(line) ||
			regexp.MustCompile(`^[A-Z]+ \(continued\)$`).MatchString(line) ||
			regexp.MustCompile(`^\d{3} —\d{4}`).MatchString(line) {
			continue
		}

		// Skip explanatory text (lines that look like sentences)
		// These typically start lowercase, contain common words, or are very long
		if len(line) > 80 ||
			regexp.MustCompile(`^[a-z]`).MatchString(line) ||
			strings.Contains(line, " may be ") ||
			strings.Contains(line, " must be ") ||
			strings.Contains(line, " are allowed") ||
			strings.Contains(line, " will be ") ||
			strings.Contains(line, " is allowed") ||
			strings.Contains(line, " shall be ") ||
			strings.Contains(line, "displacement") ||
			strings.Contains(line, "eligible") ||
			strings.Contains(line, "classified") ||
			strings.Contains(line, "radiator") ||
			strings.Contains(line, "piston") ||
			strings.Contains(line, "rotors") ||
			strings.Contains(line, "engine") && !strings.Contains(line, "(") {
			continue
		}

		// Skip tire brand names and partial lines
		tireBrands := map[string]bool{
			"ADVAN": true, "ADVAN A052": true, "ADVAN A055": true,
			"AZENIS": true, "BFGoodrich": true, "Bridgestone": true,
			"Continental": true, "Dunlop": true, "Falken": true,
			"Firestone": true, "Goodyear": true, "Hankook": true,
			"Hoosier": true, "Kumho": true, "Maxxis": true,
			"Michelin": true, "Nitto": true, "Pirelli": true,
			"Toyo": true, "Yokohama": true, "RE-71R": true,
			"RE-71RS": true, "Pilot Sport": true, "Sport Cup": true,
			"Potenza": true, "A7 / R7": true, "CR-S": true,
			"Federal": true, "Nexen": true,
		}
		if tireBrands[line] {
			continue
		}

		// Skip lines ending with comma (partial lines from multi-column)
		if strings.HasSuffix(line, ",") {
			continue
		}

		// Skip lines that look like table rows or specifications
		if strings.Contains(line, "......") ||
			strings.Contains(line, "cc:") ||
			strings.Contains(line, "cc)") && !strings.Contains(line, "(") ||
			regexp.MustCompile(`^\d+$`).MatchString(line) ||
			regexp.MustCompile(`^[A-Z]+-[A-Z]+$`).MatchString(line) {
			continue
		}

		// Skip numbered rules/lists (e.g., "4. Electric Motors – ...")
		if regexp.MustCompile(`^\d+\.\s+[A-Z]`).MatchString(line) && len(line) > 30 {
			continue
		}

		// Skip lines with dashes that look like rule descriptions
		if strings.Contains(line, " – ") && len(line) > 40 {
			continue
		}

		// Skip lines that are clearly not model names (contain "including", "allowed", etc.)
		if strings.Contains(line, "including") ||
			strings.Contains(line, "following") ||
			strings.Contains(line, "vehicles") && len(line) > 20 {
			continue
		}

		// Check if this line exactly matches a known make
		if knownMakes[line] {
			currentMake = line
			pendingModel = ""
			continue
		}

		// Skip if no current make
		if currentMake == "" {
			continue
		}

		// Check if this line has a year pattern
		if yearMatch := yearPattern.FindStringSubmatch(line); yearMatch != nil {
			// This is a model line with years
			yearStr := yearMatch[1]
			modelName := strings.TrimSpace(line[:len(line)-len(yearMatch[0])])

			// Handle multi-line models (if previous line was a partial model name)
			if pendingModel != "" {
				modelName = pendingModel + " " + modelName
				pendingModel = ""
			}

			if modelName != "" {
				years := expandYearRange(yearStr)
				entries = append(entries, CarEntry{
					Make:  currentMake,
					Model: modelName,
					Years: years,
					Class: strings.ToLower(classAbbrev),
				})
			}
		} else {
			// Line without years - either a complete model or a continuation
			// Only treat as continuation if line ends with continuation chars
			if strings.HasSuffix(line, "-") || strings.HasSuffix(line, "(") {
				// Line ends with "-" or "(", it's a continuation
				pendingModel = line
			} else if i+1 < len(lines) {
				// Check if this line should be merged with the next line
				// Only merge if next line starts with "(" (year on separate line)
				nextLine := strings.TrimSpace(lines[i+1])
				if strings.HasPrefix(nextLine, "(") && yearPattern.MatchString(nextLine) {
					// Year is on the next line, merge
					pendingModel = line
					continue
				}
				// Otherwise, treat as complete model without years
				if len(line) > 1 && !knownMakes[line] {
					if regexp.MustCompile(`[a-zA-Z]`).MatchString(line) {
						entries = append(entries, CarEntry{
							Make:  currentMake,
							Model: line,
							Years: []string{"all"},
							Class: strings.ToLower(classAbbrev),
						})
					}
				}
			} else {
				// Last line, treat as model without years
				if len(line) > 1 && !knownMakes[line] {
					if regexp.MustCompile(`[a-zA-Z]`).MatchString(line) {
						entries = append(entries, CarEntry{
							Make:  currentMake,
							Model: line,
							Years: []string{"all"},
							Class: strings.ToLower(classAbbrev),
						})
					}
				}
			}
		}
	}

	return entries
}

// mergeCarEntries merges car entries from all classes into AllSoloCars structure
func mergeCarEntries(entries []CarEntry) AllSoloCars {
	result := make(AllSoloCars)

	for _, entry := range entries {
		if _, ok := result[entry.Make]; !ok {
			result[entry.Make] = make(map[string]map[string][]string)
		}
		if _, ok := result[entry.Make][entry.Model]; !ok {
			result[entry.Make][entry.Model] = make(map[string][]string)
		}

		for _, year := range entry.Years {
			// Check if class already exists for this year
			classes := result[entry.Make][entry.Model][year]
			found := false
			for _, c := range classes {
				if c == entry.Class {
					found = true
					break
				}
			}
			if !found {
				result[entry.Make][entry.Model][year] = append(classes, entry.Class)
			}
		}
	}

	return result
}

// generateAllSoloCarsJS generates the JavaScript object for allSoloCars
func generateAllSoloCarsJS(cars AllSoloCars) string {
	var sb strings.Builder
	sb.WriteString("const allSoloCars = {\n")

	// Sort makes
	makeNames := make([]string, 0, len(cars))
	for makeName := range cars {
		makeNames = append(makeNames, makeName)
	}
	sort.Strings(makeNames)

	for _, makeName := range makeNames {
		models := cars[makeName]
		sb.WriteString(fmt.Sprintf("  '%s': {\n", escapeJSString(makeName)))

		// Sort models
		modelNames := make([]string, 0, len(models))
		for model := range models {
			modelNames = append(modelNames, model)
		}
		sort.Strings(modelNames)

		for _, model := range modelNames {
			years := models[model]
			sb.WriteString(fmt.Sprintf("    '%s': {\n", escapeJSString(model)))

			// Sort years (put "all" first, then numeric years)
			yearList := make([]string, 0, len(years))
			for year := range years {
				yearList = append(yearList, year)
			}
			sort.Slice(yearList, func(i, j int) bool {
				if yearList[i] == "all" {
					return true
				}
				if yearList[j] == "all" {
					return false
				}
				return yearList[i] < yearList[j]
			})

			for _, year := range yearList {
				classes := years[year]
				// Sort classes
				sort.Strings(classes)
				classesStr := make([]string, len(classes))
				for i, c := range classes {
					classesStr[i] = fmt.Sprintf("'%s'", c)
				}
				sb.WriteString(fmt.Sprintf("      '%s': [%s],\n", year, strings.Join(classesStr, ", ")))
			}

			sb.WriteString("    },\n")
		}

		sb.WriteString("  },\n")
	}

	sb.WriteString("};")
	return sb.String()
}

// escapeJSString escapes a string for use in JavaScript
func escapeJSString(s string) string {
	s = strings.ReplaceAll(s, `\`, `\\`)
	s = strings.ReplaceAll(s, `'`, `\'`)
	return s
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
func readFile() *strings.Reader {
	filePath := "rules.txt"
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

func getChapterReader(rules *strings.Reader, chapter Chapter) *io.SectionReader {
	rules.Seek(0, 0)
	startMatch := chapter.start.FindReaderIndex(rules)
	rules.Seek(0, 0)
	endMatch := chapter.end.FindReaderIndex(rules)
	rules.Seek(0, 0)
	length := endMatch[0] - startMatch[0]
	return io.NewSectionReader(rules, int64(startMatch[0]), int64(length))
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
	if len(chapter.SubChapters) > 0 {
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
	result = regexp.MustCompile(`\n([A-Z]\.)`).ReplaceAllString(in, "</br></br>$1")
	result = regexp.MustCompile(`\n([0-9]\.)`).ReplaceAllString(result, "</br>$1")
	result = pcre.MustCompile(`(?s)(<\/br>[0-9]\..+?)(?=<\/br>)`).ReplaceAllString(result, "<div class=\"indent\">$1</div>")
	result = regexp.MustCompile(`:`).ReplaceAllString(result, ":</br>")
	result = regexp.MustCompile(`([^.]+\.{5,}.+\n)`).ReplaceAllString(result, "$1</br>")
	return result
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

func main() {
	rules := readFile()

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
	}

	SMWeights := []*pcre.Regexp{
		pcre.MustCompile(`(?s)Super Street Modified class \(SSM\)\n.+(Minimum Weight Calculations without driver.+?)\nStreet Modified class \(SM\)\n`),
		pcre.MustCompile(`(?s)Street Modified class \(SM\)\n.+(Minimum Weight Calculations without driver.+?)\nStreet Modified Front-Wheel-Drive class \(SMF\)\n`),
		pcre.MustCompile(`(?s)Street Modified Front-Wheel-Drive class \(SMF\)\n.+(Minimum Weight Calculations without driver.+?)Prepared \(XP\) - Appendix A`),
	}

	// using two arrays here for SMWeights and SMClasses sinces maps aren't walked deterministically
	SMClasses := []string{
		"Super Street Modified (SSM)",
		"Street Modified (SM)",
		"Street Modified FWD (SMF)",
	}

	funcMap := template.FuncMap{
		"subChapterText": subChapterText,
		"menuName":       ToMenuName,
		"stringEqual":    stringEqual,
		"addOne":         addOne,
		"toVarName":      ToVarName,
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
				weightInfo = weightInfo + "</br></br>" + SMClasses[i] + ":</br>"
				match := regex.FindAllStringSubmatch(string(rulesBytes), 1)
				if len(match) > 0 {
					weightInfo = weightInfo + match[0][1] + "\n"
				}
			}
			weightInfo = remove.ReplaceAllString(weightInfo, "")
			weightInfo = regexp.MustCompile(`(•)`).ReplaceAllString(weightInfo, "</br>$1")
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

	// Parse Appendix A for car classifications from raw format file
	// The raw format is needed to correctly parse multi-column Appendix A layout
	fmt.Println("Parsing Appendix A for car classifications...")
	rulesRawBytes, err := os.ReadFile("rules_raw.txt")
	if err != nil {
		log.Fatal("Could not read rules_raw.txt - run generate_rules_txt.sh first", err)
	}
	appendixA := extractAppendixA(string(rulesRawBytes))
	appendixA = cleanAppendixText(appendixA)
	classSections := parseClassSections(appendixA)

	var allEntries []CarEntry
	for _, section := range classSections {
		entries := parseCarEntries(section.RawText, section.ClassAbbrev)
		allEntries = append(allEntries, entries...)
	}

	allSoloCars := mergeCarEntries(allEntries)
	allSoloCarsJS := generateAllSoloCarsJS(allSoloCars)

	fmt.Printf("Parsed %d car entries across %d classes\n", len(allEntries), len(classSections))

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

	// Combine allChapters and staticClasses for template execution
	allClassesForJS := append(allChapters, staticClasses...)

	// Create template data with both chapter info and allSoloCars
	templateData := TemplateData{
		Chapters:      allClassesForJS,
		AllSoloCarsJS: allSoloCarsJS,
	}

	err = tpl.Execute(outFile, templateData)
	if err != nil {
		log.Fatal("Could not execute template", err)
	}

	outFile.Close()
}
