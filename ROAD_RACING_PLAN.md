# Road Racing Support — Implementation Plan

Status doc for adding an SCCA **Road Racing** section to the site, mirroring the existing
autocross (SCCA Solo) generator. Hand-off notes so this can be picked up in a fresh session.

## Goal

The site currently classifies **autocross** cars (generated from `rules.txt`, the Solo
rulebook). We're adding a parallel **road racing** section behind `/rr`, generated from
`gcr.txt` (the General Competition Rules), using the same Go generator + template approach.

Scope decisions already made with the owner (full scope):
- Per-class questionnaire pages, **each rulebook section is its own yes/no question** (like autocross).
- Eventually a **make/model/year selector** for road racing (like `/a/index.html`).
- A **spec-table parser** for GT / Spec Miata (those classes are car-spec lists, not prose rules).

The owner opens PRs themselves — don't run `gh`/branch commands. Use `rg`, not `grep`.

## How the generator works (shared with autocross)

- `go run main.go` (= `npm run generate_site`) parses the rulebook text and renders HTML
  into `src/`, plus `src/common.js`.
- `npm run build` (`./build.sh`) minifies `src/` → `build/` (deployed to S3).
- `npm run lint` (`./lint.sh`) runs eslint on `src/common.js`.
- Rulebooks are produced by `./generate_rules_txt.sh` (downloads PDFs, `pdftotext` →
  `rules.txt` and `gcr.txt`). Both `.txt` files are **gitignored** and regenerated.

## Road racing architecture (implemented in PR1)

Road racing categories are processed separately from autocross because they come from a
different rulebook and have a different structure.

- **`processRRChapters(funcMap)`** in `main.go`: reads `gcr.txt`, strips PDF cruft, extracts
  each category's section bodies, generates carFlags, and renders each category's page.
  Returns the chapters so their carFlags are appended into `common.js`.
- **`roadRacingChapters()`**: declares each category. Because the GCR interleaves prose rules
  with large per-car spec tables and the PDF mangles numbering, each category lists its
  sections **explicitly** with a hand-written `anchor` regex (the section's heading line).
- **Section model** (`SubChapter`):
  - `Informational: true` → rendered on the landing/overview page (e.g. Purpose, Intent).
  - otherwise → a yes/no **question** (one per modification area).
  - `anchor *regexp.Regexp` → matches the heading line in `gcr.txt`.
  - `DisplayName` → friendly label for the sidebar/heading (IDs still derive from `Name`).
- **`findRRSectionBodies(sections, chapterText)`**: walks the ordered sections, matching each
  anchor **sequentially** (so a heading word recurring earlier can't steal a match); each
  section's body is the text from its heading to the next section's heading.
- **`formatRRBody` / `subChapterTextRR`**: RR-specific list formatter — rejoins markers the
  PDF stranded on their own line, collapses blank runs, breaks lettered items (`a.`,`b.`…)
  onto new lines, indents numbered sub-items. (The shared `formatChapterBody` only broke on
  uppercase letters/digits, so lowercase lettered items ran together.)
- **PDF cruft removal** (`gcrRemove` in `processRRChapters`): strips `©SCCA`, page-number
  footers, Summit Racing ad, lone `9.1.x.` lines, standalone `… Category Specifications`
  running headers, and **runs of 2+ orphaned number lines** (multi-column page-break bleed).
  Single lone numbers are kept (legit markers).
- **`getChapterReader`** was changed to find the chapter `end` anchor *after* the `start`
  (so a recurring spec-table column header can bound the prose region). Safe for autocross.
- **`common.js` guard**: `checkEligibility` only does the autocross `allSoloCars[make][model]
  [year]` subclass lookup when a `specificClass` element + selected car exist — so RR pages
  (no car selected) don't crash.

### Key files
- `main.go` — generator (autocross + RR).
- `templates/rr/questionnaire.html.tmpl` — shared template for all prose RR classes.
- `templates/common.js.tmpl` → `src/common.js` — carFlags + shared questionnaire JS.
- `src/rr/index.html` — RR landing page (card-styled; lists available + coming-soon classes).
- `src/index.html` — homepage (both Autocross + Road Racing buttons, identical styling).
- `gcr.txt` — road racing rulebook text (gitignored; ~89k lines; Chapter 9 = Cars & Equipment).

## GCR structure cheat-sheet (Chapter 9)

Two shapes of class:
- **Prose / modification rules** (questionnaire fits): Improved Touring `9.1.3`, Super Touring
  `9.1.4`, American Sedan `9.1.6`, Touring T1 `9.1.9.1` / T2–T4 `9.1.9.2`, Spec MX-5 `9.1.7.1`.
  Sections are lettered (A. Purpose, B. Intent, …) and within "Authorized Modifications" the
  logical areas (Engine, Brakes, Wheels/Tires, Body, Interior, Electrical, …) are the questions.
- **Spec-line tables** (questionnaire does NOT fit — needs the spec-table parser): GT
  `9.1.2`, base Spec Miata `9.1.7`. These are make/model → min weight / wheelbase / notes.

Each prose category is followed by its own large per-car eligibility/spec table (e.g. the
ITCS table after Improved Touring) — those feed the MMY selector, not the questionnaire.

---

## Task status

### ✅ DONE — PR1: generator architecture + Improved Touring + homepage nav
(pending owner review)
- RR generator + template + `common.js` guard, as described above.
- **Improved Touring** (`/rr/it.html`) generates: overview (Purpose/Intent/Specifications +
  modifications preamble) on the landing page; **13 questions** — Engine (Reciprocating),
  Engine (Rotary), Engine (Turbocharged), Engine Cooling System, Transmission/Final Drive,
  Chassis & Suspension, Brakes, Wheels & Tires, Body & Structure, Driver/Passenger
  Compartment, Electrical, Safety, Measurement Standards.
- Question UX: heading is "Does your car meet the requirements below?" + a smaller
  `.questionContext` line "These requirements are for <section>."
- Homepage Road Racing button enabled; both homepage buttons use identical styling.
- `src/rr/index.html` restyled; only Improved Touring is linked (rest "coming soon").
- Verified: `go vet`, `eslint`, `npm run build` all pass; section bodies clean of cruft.

### ⬜ Task 5 — remaining prose classes (next, reuses PR1 machinery)
Add to `roadRacingChapters()`, one `Chapter` each, with hand-derived section anchors from
`gcr.txt`. Then add their buttons to `src/rr/index.html`.
- **American Sedan** (`9.1.6`): sections A Purpose, B Intent, C Specifications, D Authorized
  Modifications (split into its areas), E Car Classification, F Engine Build Sheets,
  G Measurement Standards. Ends before its car-eligibility list.
- **Touring T1** (`9.1.9.1`) and **T2–T4** (`9.1.9.2`): lettered areas (Bodywork, Aero,
  Interior, Chassis, Engine, …) map directly to questions.
- **Spec MX-5** (`9.1.7.1`): prose; smaller.
- **Super Touring** (`9.1.4`): **messy** — repeats sections A–O for each subclass (STU/STL/
  etc.). Needs per-subclass handling or a simplified single questionnaire. Do this last.

Process per class: read the category region in `gcr.txt`, list the logical section heading
lines, write `anchor` regexes, set the `end` anchor to where the prose stops (start of the
car spec table), regenerate, and **inspect the rendered bodies** for cruft/bleed before moving on.

### ⬜ Task 2 — spec-table parser for GT / Spec Miata
Second parser in `main.go` to extract make/model/year → min weight, wheelbase, drivetrain/
chassis notes from the GT `9.1.2` and SM `9.1.7` spec lines; render lookup pages into `src/rr/`.
Different from the questionnaire model. Will also handle embedded spec tables that the prose
formatter currently renders as fragments (e.g. the rim-width table inside IT Wheels & Tires).

### ⬜ Task 3 — road racing make/model/year selector
Mirror `/a/index.html`: an MMY selector that highlights eligible RR classes, backed by a
car→class dataset derived from the GCR eligibility/spec lists. Largest data effort. Wire into
`common.js` (the `checkEligibility` guard already anticipates RR having no MMY until this lands).

## Known rough spots
- Embedded spec **tables** inside prose sections (e.g. IT Wheels & Tires rim widths) render as
  a column of fragments — out of scope for the prose formatter; the spec-table parser (task 2)
  is the real fix.
- pdftotext mangling (orphan numbers, stranded markers) is handled heuristically in
  `formatRRBody`/`gcrRemove`; new categories may surface new artifacts — inspect output.

## Quick verify loop
```
go run main.go && npm run lint && npm run build
# inspect a page, e.g. render a section as text:
awk '/id="improvedtouringEngine"/{f=1} f{print} /id="improvedtouringRotaryEngine"/{exit}' src/rr/it.html \
  | sed 's/<br>/\n/g; s/<[^>]*>//g'
```
