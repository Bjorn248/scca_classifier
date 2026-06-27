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
- Two `pdftotext` extractions of the GCR (both gitignored, dev-only — the generated `src/`
  HTML is committed and CI only minifies it):
  - **`gcr.txt` (`-raw`)**: content-stream order. Default mode strands list markers (`b.`,
    `3.`) away from the text they introduce; `-raw` keeps them attached.
  - **`gcr_layout.txt` (`-layout`)**: preserves column alignment. Used by the spec-line parser
    (tables) **and** the prose parser.
- **The prose parser reads `gcr_layout.txt`** (via `readLayoutFile`, which keeps newlines —
  unlike `readFile`, whose `\n\f` strip glues page-break lines together and destroys columns).
  `-layout` is preferred for prose because it keeps markers attached, has clean standalone
  footers, and lets `formatRRBody` de-hyphenate wrapped words (`modi-` + `fications`).
- **Important finding — nesting is by marker TYPE, not indentation.** `-layout` does preserve
  leading whitespace, but `pdftotext` re-detects columns *per page*, so the same logical level
  lands at different indents across page breaks (items `a.`–`e.` at col 6 on one page, `f.`–
  `o.` at col 0 on the next). Indent-rank nesting therefore fails. The rulebook's outline
  convention is stable and page-independent, so `formatRRBody`/`markerLevel` map: lowercase
  letter = level 0, number = level 1 (`.indent`), uppercase letter = level 2 (`.indent2`).
  This is a convention assumption; verify it holds for each new category (autocross, by
  contrast, uses uppercase at top level — conventions vary by document section).

## Road racing architecture (implemented in PR1)

Road racing categories are processed separately from autocross because they come from a
different rulebook and have a different structure.

- **`processRRChapters(funcMap)`** in `main.go`: reads `gcr_layout.txt`, strips PDF cruft,
  extracts each category's section bodies, generates carFlags, and renders each category's
  page. Returns the chapters so their carFlags are appended into `common.js`.
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

### Categories vs subclasses (important)
A road racing "class" is usually a **category with subclasses**, exactly like autocross:
- Improved Touring → **ITR/ITS/ITA/ITB/ITC**; Touring → T1/T2/T3/T4; Super Touring → STU/STL;
  Production → EP/FP/HP; GT → GT1/GT2/GT3/GTA/GTX.
- The **prep rules are shared across a category's subclasses** → that's the per-category
  questionnaire (analogous to autocross `/a/s.html` covering all Street subclasses).
- A car's **specific subclass + minimum weight comes from its spec line** (the per-car table),
  analogous to autocross using make/model/year to pick SS vs AS vs BS.
- So the questionnaire answers "can my car be built to this category's rules?"; the spec-line
  data answers "which subclass + weight". Each `Chapter` carries a `Subclasses []string` used
  in the eligible result (IT already lists ITR/ITS/ITA/ITB/ITC).
- The **table view + eligible-only view** is the road racing index/MMY selector (Task 3),
  mirroring `/a/index.html` (columns = categories, cells = subclasses, eligible-only toggle).

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

### 🔶 Task 2 — spec-line parser (IN PROGRESS: foundation laid)
Extract per-car data (make/model/year → subclass + min weight, plus wheelbase/notes) from the
GCR spec tables. This feeds the eligible-result subclass determination and the Task 3 table.

**Done so far:**
- `generate_rules_txt.sh` now also produces **`gcr_layout.txt`** via `pdftotext -layout`
  (added to `.gitignore`). Rationale: `-raw` (used for prose) collapses the spec tables to one
  field per line, but `-layout` preserves column alignment so each car's fields line up. The
  spec-line parser reads `gcr_layout.txt`; the prose parser reads `gcr.txt`.
- **ITCS parser written and working** (`parseITCSSpecLines` + `itcsWeight` in `main.go`).
  Parses **489 cars** across ITR=71/ITS=78/ITA=126/ITB=132/ITC=82, each as a `SpecLine`
  {Subclass, Model, MinWeight, Notes}. Verified against known values (Acura Integra Type R →
  ITR 2413; Audi TT Quattro → 2531 "32mm TIR required."; Mazda RX-8 → ITR 2743; rotary RX-7
  weight 2680 with note). Detects a primary row by its engine column (`itcsEngineRe`:
  cyl/rotor/V-config/displacement), takes the rightmost numeric field as weight, and folds
  model/year continuation lines (col1) into the model. `main()` currently just prints a count
  summary — the returned data is NOT yet emitted anywhere (that's the wiring step below).
- Known limitations to revisit: hyphenated model wraps show a stray space (`(non- turbo FWD)`);
  some models with a trailing `/` (e.g. `Mazda RX-7/ Convertible`) read awkwardly; cars with
  multiple weight variants on separate lines may need checking. Spot-check the full output.

**Layout format (ITCS example, `gcr_layout.txt`):**
- Each IT subclass table starts with a title line like `ITR    Engine    Bore x    Weight ... Notes:`
  (followed by a second header line `Type / Stroke(mm)/Displ. (cc) / (lbs)`). The subclass
  label in that title line (`ITR`/`ITS`/`ITA`/`ITB`/`ITC`) marks the current subclass.
- A **primary** car line carries: model(col1) · engine(col2, e.g. `4 Cyl` / `2 Rotor`) ·
  bore(col3, `81.0 x 87.2`) · **weight(col4, e.g. `2413`)** · optional note(col5). Split on 2+
  spaces to get columns. Rotary rows have no bore (`Mazda RX-8 | 2 Rotor | 2600cc | 2743`).
- **Continuation** lines stack in their columns below: model line 2/3 (incl. bare-year like
  `(97-98/00-01)` or `2000`), engine line 2 (`DOHC`/`VTEC`/`Turbo`), displacement.
- Robust detection: a primary line has a numeric token at the **Weight column position**
  (derivable from the title line's `Weight` x-offset); continuation numbers (displacement) sit
  in the bore/col3 position, not the weight column. Model = col1 text of the primary line plus
  the col1 text of following continuation lines, joined.
- Strip interspersed cruft: footers `© ?SCCA …`, running headers `9.1.3. ITR Spec Lines`
  (often glued to a value, e.g. `26719.1.3. ITR Spec Lines`), Summit Racing ad block.

**ITCS region (in `gcr_layout.txt`, line numbers differ from `gcr.txt`):** subclass tables run
ITR → ITS → ITA → ITB → ITC, then Super Touring. Bound each by its title line / running header.

**Remaining:**
1. DONE for IT: the parsed `SpecLine`s are attached to the IT `Chapter` (`Chapter.SpecLines`)
   in `processRRChapters` and rendered in the eligible result as a searchable table (Car /
   Class / Min Weight / Notes) filtered by `filterSpecLines` in `common.js`. Next: do the same
   for other categories as their spec parsers land, and/or fold into `common.js` for Task 3.
2. Split each `SpecLine.Model` into make / model / year-range if Task 3's selector needs
   structured make→model→year menus (the autocross data is keyed that way).
3. Extend to GT `9.1.2` (single-line rows: `Civic 96-06 2dr FWD 103.2 ...`) and Spec Miata
   `9.1.7` — different layouts, likely separate row parsers.
4. Spot-check the full 489-row output for parse errors before relying on the weights.
- Also relevant: embedded spec tables inside prose sections (e.g. IT Wheels & Tires rim widths)
  that the prose formatter renders as fragments — the same layout data can replace them.

### ✅ Task 3 — road racing make/model/year selector (DONE for IT)
`src/rr/index.html` is generated from `templates/rr/index.html.tmpl` (by `generateRRIndex`):
- **MMY selector**: make→model→year dropdowns backed by `allRRCars` (built by `buildRRCars`/
  `parseModel` from the ITCS spec lines, embedded inline as JSON). Selecting a car shows its
  class + min weight (`lookupRRCar`) and highlights the matching row in the class table.
- **Class table**: ITR/ITS/ITA/ITB/ITC rows linking to the IT questionnaire; "coming soon" note.
- JS engine in `common.js`: `populateRRMakes/Models/Years`, `lookupRRCar`, `fillSelect`
  (`/* global allRRCars */`). The IT questionnaire's eligible result now points users here
  instead of embedding the full table.
- **To extend**: as other categories' spec parsers land (Task 2), feed their lines into
  `allRRCars` and add their subclasses to the class table.
- **Caveat**: `parseModel` (make = first word, year = trailing parenthetical) is heuristic;
  merged/odd spec rows produce odd dropdown entries. Clean up spec data for a pristine selector.

## Known rough spots
- Embedded spec **tables** inside prose sections (e.g. IT Wheels & Tires rim widths) render as
  a column of fragments — out of scope for the prose formatter; the spec-table parser (task 2)
  is the real fix.
- Soft hyphenation: long words split across PDF line wraps (e.g. "prohib-\nited") render with
  the hyphen. Not yet de-hyphenated (risky vs real hyphens like "non-remote"); minor.
- The big column-bleed problems (orphan numbers, stranded markers like the Chassis "b./c.")
  were fixed at the source by switching to `pdftotext -raw`. New categories may still surface
  artifacts — always inspect rendered section bodies.

## Quick verify loop
```
go run main.go && npm run lint && npm run build
# inspect a page, e.g. render a section as text:
awk '/id="improvedtouringEngine"/{f=1} f{print} /id="improvedtouringRotaryEngine"/{exit}' src/rr/it.html \
  | sed 's/<br>/\n/g; s/<[^>]*>//g'
```
