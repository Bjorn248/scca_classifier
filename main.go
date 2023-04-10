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
)

// Chapter defines the regex expressions to search for that denote the start and end of a
// chapter (e.g. Street, Street Touring) of the rulebook.
type Chapter struct {
	Name              string
	Number            string
	SubChapters       []SubChapter
	Reader            *io.SectionReader
	start             *regexp.Regexp
	end               *regexp.Regexp
	ChapterFillerText *regexp.Regexp
	templateFile      string
	outputFile        string
}

// SubChapter holds the name, number, and body of a subchapter of the rules (e.g. 13.2 Bodywork)
type SubChapter struct {
	Name   string
	Number string
	Reader *io.SectionReader
}

// getSubChapters returns an array of sub chapters (e.g. 13.1, 13.2) that exist for a given
// chapter
func getSubChapters(rules, chapterNumber string) []SubChapter {
	SubChapters := []SubChapter{}
	regexString := chapterNumber + `\.([0-9]+[.A-Z]*) ([^\.\n]*)\.+[\. ]([0-9]+)`
	tableOfContents := regexp.MustCompile(regexString)
	match := tableOfContents.FindAllStringSubmatch(rules, -1)
	// This means there probably aren't any subchapters
	if len(match) < 2 {
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
			// subchapter, err := io.ReadAll(sectionReader)
			// if err != nil {
			// 	log.Fatal(err)
			// }
			// fmt.Println(subChapter.Number + " " + subChapter.Name)
			// fmt.Println(string(subchapter))
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

func ToVariableName(in string) string {
	var result string
	result = strings.Split(in, " ")[0]
	result = regexp.MustCompile(`[^a-zA-Z0-9 ]+`).ReplaceAllString(result, "")
	return result
}

func stringEqual(a, b string) bool {
	return a == b
}

func addOne(i int) int {
	return i + 1
}

func subChapterText(r io.Reader, chapterText *regexp.Regexp) string {
	var result string
	resultBytes, err := io.ReadAll(r)
	if err != nil {
		return ""
	}
	resultBytes = chapterText.ReplaceAll(resultBytes, []byte{})
	result = template.HTMLEscapeString(string(resultBytes))
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
			Number:            "13",
			start:             regexp.MustCompile(`\n13\. STREET CATEGORY\n`),
			end:               regexp.MustCompile(`\n14\. STREET TOURING® CATEGORY\n`),
			ChapterFillerText: regexp.MustCompile(`13\. Street Category`),
			templateFile:      "./templates/a/s.html.tmpl",
			outputFile:        "./src/a/s.html",
		},
		{
			Name:   "Street Touring",
			Number: "14",
			start:  regexp.MustCompile(`\n14\. STREET TOURING® CATEGORY\n`),
			end:    regexp.MustCompile(`\n15\. STREET PREPARED CATEGORY\n`),
		},
		{
			Name:   "Street Prepared",
			Number: "15",
			start:  regexp.MustCompile(`\n15\. STREET PREPARED CATEGORY\n`),
			end:    regexp.MustCompile(`\n16\. STREET MODIFIED CATEGORY\n`),
		},
		{
			Name:   "Street Modified",
			Number: "16",
			start:  regexp.MustCompile(`\n16\. STREET MODIFIED CATEGORY\n`),
			end:    regexp.MustCompile(`\n17\. PREPARED CATEGORY\n`),
		},
		{
			Name:   "Prepared",
			Number: "17",
			start:  regexp.MustCompile(`\n17\. PREPARED CATEGORY\n`),
			end:    regexp.MustCompile(`\n18\. MODIFIED CATEGORY\n`),
		},
		{
			Name:   "Modified",
			Number: "18",
			start:  regexp.MustCompile(`\n18\. MODIFIED CATEGORY\n`),
			end:    regexp.MustCompile(`\n19\. KART CATEGORY\n`),
		},
		{
			Name:   "Solo Spec Coupe",
			Number: "20",
			start:  regexp.MustCompile(`\n20\. SOLO® SPEC COUPE \(SSC\)\n`),
			end:    regexp.MustCompile(`\n21\. PROSOLO® NATIONAL SERIES RULES\n`),
		},
		{
			Name:   "Xtreme Street",
			Number: "n/a",
			start:  regexp.MustCompile(`\nClassic American Muscle \/ Xtreme Street Category\n`),
			end:    regexp.MustCompile(`\nElectrical Vehicle Experimental \(EVX\)\n`),
		},
		{
			Name:   "EVX",
			Number: "n/a",
			start:  regexp.MustCompile(`\nElectrical Vehicle Experimental \(EVX\)\n`),
			end:    regexp.MustCompile(`\nAPPENDIX C - SOLO® ROLL BAR STANDARDS\n`),
		},
	}

	funcMap := template.FuncMap{
		"subChapterText": subChapterText,
		"varName":        ToVariableName,
		"stringEqual":    stringEqual,
		"addOne":         addOne,
		"toLower":        strings.ToLower,
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

		if allChapters[i].Number != "n/a" && len(allChapters[i].SubChapters) > 0 {
			allChapters[i].SubChapters = findSubChapterBody(allChapters[i], chapterText)
		}

		if allChapters[i].templateFile != "" {
			fmt.Println("Generating class specific page...")
			commonJS := template.New(path.Base(allChapters[i].templateFile)).Funcs(funcMap)
			tpl, err := commonJS.ParseFiles(allChapters[i].templateFile)
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

	fmt.Printf("%+v\n", allChapters)

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

	err = tpl.Execute(outFile, allChapters)
	if err != nil {
		log.Fatal("Could not execute template", err)
	}

	outFile.Close()
}
