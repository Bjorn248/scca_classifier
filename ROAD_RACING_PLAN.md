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
- `src/rr/index.html` — RR landing page: make/model/year selector + class table (generated
  from `templates/rr/index.html.tmpl` by `generateRRIndex`).
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
- **Decision (owner, 2026-07):** keep one questionnaire per category when the GCR prep text is
  shared across its subclasses (IT, Production, T2-T4, B-Spec). A per-subclass split was tried
  for IT and reverted — the five pages asked identical questions. Split only when the GCR has
  separate rule sets per subclass, the way STU (`9.1.4.1`) / STL (`9.1.4.2`) are separate
  chapters. **GT is split the same way**: `gt.html` is the GT-1 rule set (GT1/GTA/GTX cells)
  and `gt23l.html` is the shared GT-2/3/Lite rule set from `9.1.2.F` (GT2/GT3/GTL cells) —
  F.1-F.5 informational (F.4/F.5 are alternative pre/post-1990 baselines, not yes/no
  questions), F.6 Safety + F.7's lettered areas as questions in PDF order (… h, i, m, n, j,
  k, l). Both stack under one "GT" column via `IndexCategory`.

---

## Status — where we are (2026-07-05)

**All questionnaires are live.** Every class in the table links to a rules questionnaire
generated from its GCR region, each verified for cruft/bleed when added:
- `it.html` Improved Touring (ITR/ITS/ITA/ITB/ITC) · `as.html` American Sedan ·
  `t1.html` / `t2t4.html` Touring · `prod.html` Production (EP/FP/HP) · `smx.html` Spec MX-5 ·
  `bspec.html` B-Spec/C-Spec · `stu.html` / `stl.html` Super Touring ·
  `gt.html` GT-1 (GT1/GTA/GTX) · `gt23l.html` GT-2/3/Lite (from `9.1.2.F`) ·
  `specmiata.html` Spec Miata.
- Result pages are styled as white cards (the old black-on-dark text was illegible); the
  single-subclass eligible wording says "Whether your specific car is classified in X…".

**The make/model/year selector covers IT, GT-2/3/Lite, and Spec Miata** (57 makes /
~600 models). Data shape: make → model → **individual 4-digit year** → list of
`{class, weight, notes}`; dual-classed cars show every entry (a '95 Miata is ITA + SM, a '78
911SC is ITR + GT2). Notes carry only generation/variant distinguishers (E36, S13, "incl.
Ci") — GCR note text stays out of the selector result. Details below under Task 2.

## What's next (priority order)

1. **GT-1 approved automobiles → selector** (`9.1.2.E`): FIA-homologation-style list with
   per-car weights/restrictors; rows explode one-field-per-line at page tops. Needs its own
   parser (or hand-transcription — it's a few dozen cars). Until then GT-1 cars aren't in
   the selector.
2. **Car lists for the remaining categories → selector**: Touring T1–T4, Production (PCS),
   American Sedan, B-Spec eligible cars, Super Touring STL engine/car list. Each is a
   different table shape feeding `allRRCars` (add the parser, feed `specLines` in
   `processRRChapters`).
3. **Systematic ITCS spot-check**: verify the ~499 parsed IT weights against the GCR (repairs
   and samples are verified; the full set never has been).
4. **Embedded tables in prose sections**: e.g. IT Wheels & Tires rim-width table renders as
   fragmented lines inside the questionnaire; replace with parsed layout data.
5. Minor rough spots: soft-hyphenation in prose bodies; `rrSpecFixes` cleanup applies only to
   the selector (nothing else consumes the raw spec lines today); GTA/GTX cells point at the
   GT-1 page (roughly right — they run GT-1-style prep — but they have their own GCR
   sections if we ever want to be exact).

---

## Task reference

### Task 2 — spec-line parsers (ITCS + GT-2/3/Lite + SM done; see "What's next" for the rest)
Extract per-car data (make/model/year → subclass + min weight) from the GCR spec tables;
everything below feeds `buildRRCars` → the selector's `allRRCars` JSON.

**ITCS (Improved Touring) parser** (`parseITCSSpecLines` + `itcsWeight`):
- `generate_rules_txt.sh` produces **`gcr_layout.txt`** via `pdftotext -layout` (gitignored).
  `-raw` collapses spec tables to one field per line; `-layout` keeps columns aligned.
- Parses **~499 cars** (ITR/ITS/ITA/ITB/ITC) as `SpecLine{Subclass, Make?, Model, MinWeight,
  Notes}`, wired into the selector. Detects a primary row by its engine column
  (`itcsEngineRe`: cyl/rotor/V-config/inline/displacement), takes the rightmost numeric field
  as weight, folds model/year continuation lines (col1) into the model. The cruft skip is
  narrow (a car note mentioning "SCCA" must not eat the row); 4 cars with unrecoverable rows
  (page-top exploded blocks / engineless rows: Alfa GTV-6, 300-ZX 2+2, Audi 4000, Chevrolet
  Spark) are re-added by hand at the end of `parseITCSSpecLines`, and their mangled host rows
  are repaired via `rrSpecFixes`.

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

**GT-2/3/Lite + Spec Miata parsers:**
- `parseGTSpecLines` parses the "GTx Cars - MAKE" approved-automobile tables (GT2 `p.332+`,
  GT3 `p.354+`, GTL as the "GTL-FP Cars" listings — printed twice in the GCR, deduped).
  Columns are located by the x-offsets of each table's header row and each 2+-space chunk is
  assigned to the **nearest column center** (values are centered, so boundary slicing clips).
  Wrapped model names ("240Z / 260Z / 280Z") fold around their value line: a row absorbs as
  many trailing model fragments as it had leading ones. Value lines are recognized by the
  drive-line cell (FWD/RWD/AWD) **or** a body-style cell ("2 Dr") when the drive cell wraps.
  Gotchas handled: headers that wrap "Body Style"/"Wheel-base" onto adjacent lines, `©SCCA`
  glued to a heading (blanked in place to keep column alignment), and far-right "9.1.2. GT2
  Spec Lines" running headers (a table-end marker only counts at indent < 60).
- GT weights are **per-engine, not per-car** → `MinWeight` 0; `lookupRRCar` says "minimum
  weight is set by the engine spec line in the GCR" for weight-less entries.
- The GT tables use **open-ended year ranges** ("M3 00-", "300-ZX Z31 -89") that can't expand
  to individual years. Each such row has an `rrSpecFixes` entry bounding the open side with
  the model's **production/US-model years, verified against Wikipedia** (the GCR-stated side
  is kept; still-produced models cap at the rulebook year, 2026). A few GCR quirks are
  interpreted there with comments: Spirit/900 "-79" read as "79-" (both nameplates *started*
  in '79), Scion tC's mangled "-5" cell, "Solora" → Solara.
- `SpecLine.Make` (new) carries multi-word makes ("BMC thru Rover Group") verbatim past the
  first-word make split; `normalizeGTMake` title-cases the shouted headings (KIA→Kia) keeping
  initialisms (BMW/AMC/TVR/BMC).
- **Spec Miata** (`9.1.7`): 4 fixed rows hand-transcribed in `smSpecLines` (standard-bore
  weights; alternate-bore weight in the note). A 1995 Miata now shows ITA + SM together.
- `populateRRMakes` now calls `lookupRRCar()` on load so a revisit restores the result.

**Selector data cleanup (shared by all parsers):**
- `expandYears` expands year designations into **individual 4-digit years** (like the
  autocross data): `96-99`, `97-98/00-01`, `2001- 03`, `86 1/2-92` (rounds down), `99-00`
  (crosses century). `parseModel` takes the **rightmost parenthetical that parses as a year**
  (others are trim notes, kept as the entry note), with a fallback for a trailing
  unparenthesized range ("TT Quattro 2001-2006").
- Generations of one model are **folded into a single selector model** — the year picks the
  generation. `normalizeRRModel` moves chassis codes (`E36`) into the entry note and rejoins
  PDF slash wraps (`328i/ is`); `rrSpecFixes` (keyed `"Make|Model"`) folds trim lists
  (BMW `328i/is` + `328i/ci` → `328i`), fixes hyphen wraps (`Fire- bird`), repairs rows the
  column parser mangles, and is **the extension point for further merges**.
- A year now maps to a **list** of `{class, weight, notes}` (dual-classed cars, and merged
  generations overlapping on a year — e.g. 328i in 1999 is E36 ITR@2714 *and* E46 ITR@2823);
  `lookupRRCar` renders one line per entry, notes in parentheses.
- The fixes apply only inside `buildRRCars` (the selector); nothing else consumes the raw
  spec lines today.

### Task 3 — road racing make/model/year selector (live; covers IT + GT-2/3/Lite + SM)
`src/rr/index.html` is generated from `templates/rr/index.html.tmpl` (by `generateRRIndex`):
- **MMY selector**: make→model→year dropdowns backed by `allRRCars` (built by `buildRRCars`
  from every parsed spec line, embedded inline as JSON). Selecting a car shows one line per
  entry — class + min weight, or "weight is set by the engine spec line" for GT — and
  highlights the matching cells in the class table. The result re-renders on page load.
- **Class table**: one column per `IndexCategory`, subclasses stacked below, each cell
  linking to its questionnaire (GT1/GTA/GTX → `gt.html`, GT2/GT3/GTL → `gt23l.html`).
- JS engine in `common.js`: `populateRRMakes/Models/Years`, `lookupRRCar`, `fillSelect`.
- **To extend**: as other categories' spec parsers land (Task 2), append their lines to
  `specLines` in `processRRChapters` — the selector and class-table highlighting pick them
  up automatically.

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
