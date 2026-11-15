---
name: update-solo-rules
description: Update the scca_classifier website with the latest SCCA National Solo (autocross) rulebook. Use when a new Solo rulebook edition or printing is released, when the SCCA rules download link has changed/broken, or when website class data (allSoloCars, class pages, questionnaires) drifts from the current rulebook's Appendix A vehicle tables.
---

# Update the website with the latest Solo rules

This project mirrors the SCCA National Solo (autocross) rulebook: the site's class
questionnaires, prep pages, and the `allSoloCars` vehicle/class/year data must match the
current official rulebook. This skill is the repeatable workflow for pulling the latest
rulebook, diffing it against what the repo uses, and propagating the changes to the site.

## Key facts about this repo

- The website source lives in `src/`; some files are generated from `templates/` via
  `go run main.go` (`npm run generate_site`).
- All vehicle/class/year data lives in the `allSoloCars` object, which exists in BOTH
  `templates/common.js.tmpl` and `src/common.js`. Every data change MUST be applied to
  both files identically (see CONTRIBUTING.md).
- `rules.pdf`, `rules.txt` (and `rules_*.txt`, `old_rules.*`) are gitignored local
  artifacts downloaded by `./generate_rules_txt.sh` (`npm run generate_rules`). The
  download URL in that script is the repo's single pointer to the "current" rulebook.
- The rulebook PDF is two-column. Plain `pdftotext` reads across columns, which garbles
  line order but preserves content. `pdftotext -layout` output (`rules_layout.txt`-style)
  is easier to read but reflows differently between printings. Never trust a raw
  `diff` of two extractions from different PDF builds; normalize first (see step 3).
- Class codes used in `allSoloCars`: ss as bs cs ds es fs gs hs (Street),
  sst ast bst cst dst est gst (Street Touring), ssp csp dsp esp fsp (Street Prepared),
  ssm sm smf (Street Modified), xp xu cp dp cm smf... etc. Cross-check any code against
  `src/a/*.html` page ids before adding one.

## Workflow

### 1. Find the current official rulebook

The historical `https://www.scca.com/downloads/<id>/download` links go stale whenever
SCCA re-uploads the book. Verify a link actually returns a PDF:

```bash
curl -sL "https://www.scca.com/downloads/<id>/download" -o /tmp/rules_check.pdf -w "%{content_type}\n"
file /tmp/rules_check.pdf   # must be "PDF document"; HTML means the link is dead
```

If it is dead, find the live link on https://www.scca.com/solo/rules (grep the page HTML
for `Autocross_Rulebook` or `wp-content/uploads/.*Rulebook.*pdf` download links).

Record the edition and printing from the front matter:

```bash
pdftotext /tmp/rules_check.pdf - | head -30   # "20XX EDITION", "Nth printing, Month"
```

A new *edition* (e.g. 2026 → 2027) is a major sync; a new *printing* of the same edition
(e.g. the January book gets re-uploaded with extra model years) is an incremental sync —
usually Appendix A year-range updates plus Fastrack/Bulletin car moves.

### 2. Update the repo's rules pointer

In `generate_rules_txt.sh`, replace the URL with the verified live link. Run
`npm run generate_rules` so the local `rules.pdf`/`rules.txt` are the current book.

### 3. Diff the new book against the previous one

Keep a copy of the previous extraction (git-ignored `rules.txt` before regenerating, or
`old_rules.txt`). Compare the *vehicle tables*, not raw diffs. Use the normalized
comparison from `references/rulebook-diff.md` to separate real content changes
(new/removed cars, changed year ranges, class moves) from pdftotext column-order noise.

Extract the Street-category Appendix A body for review — search the text for
`Super Street class (SS)` (use the LAST occurrence; earlier ones are the table of
contents) through `STREET TOURING® CATEGORY`.

### 4. Sync the website data

For every class in Appendix A (Automobile Classes), each entry
`Car description (years)` means that car is eligible for that class in those model
years. For each changed/affected car:

1. Find the car in `allSoloCars` in `templates/common.js.tmpl` (manufacturer → model →
   year → class-code array). Apply the identical edit to `src/common.js`.
2. Year arrays: add the class code for years the rulebook now covers; remove it for
   years it no longer covers. Watch for entries using the `'all'` year key — the
   rulebook's year range overrides `'all'` unless the book literally says `(all)`.
3. Variant naming: the rulebook car description (e.g. "M3 (excl. MP Sports Suspension)
   (G80)") must map to the correct template model entry; template splits variants into
   separate models more finely than the book does. Confirm before editing.
4. Newly listed cars may need a new model (or rarely manufacturer) entry. Copy an
   existing sibling entry's full class-code pattern, keep only the codes the rulebook
   supports, and update years.
5. If a Street class's rules *text* (allowed modifications, tires, wheels, etc.)
   changed, update the class page in `src/a/<class>.html` AND its template
   `templates/a/<class>.html.tmpl` when one exists. If a questionnaire option's
   rule text changed, also update the matching ids in `templates/common.js.tmpl` /
   `src/common.js` (`carFlags`, question divs).
6. If a car moves between classes, check for dangling class pages/questions: the class
   code must exist as a page under `src/a/` and in `subclassMap`.

### 5. Update human-facing "which rules" markers

- `README.md`: the "Rules" section states which edition the site is updated for and
  links the download URL — update both.

### 6. Validate

```bash
npm run lint          # eslint over src/*.js (CI runs this on PRs)
node --check src/common.js
npm run build         # minifier build; must succeed
```

Spot-check in a browser (`python -m http.server` from `build/` or repo root) that one
edited car still renders its class list correctly.

If `allSoloCars` gained new model entries, keep the object roughly sorted per
CONTRIBUTING.md's "Sorting allSoloCars" notes (sorting is manual/offline; prefer
inserting new models next to their siblings in alphabetical position).

### 7. Open the PR

- Branch from `main` named `issue-<n>-<slug>` when an issue exists, otherwise a
  descriptive name.
- PR body must list: rulebook edition + printing (+ printing date) being synced, the
  download URL now pinned in `generate_rules_txt.sh`, and a per-class summary of car
  additions/removals/year-range changes with the rulebook year ranges cited.
- Commit message style follows `git log --oneline` (e.g. `issue 404 add more years to camaro z28`).
- Every `allSoloCars` change appears in BOTH `templates/common.js.tmpl` and
  `src/common.js`; double-check with:

```bash
git diff --stat
diff <(git show HEAD:templates/common.js.tmpl) <(git show HEAD:src/common.js) | head
```

(The only expected diffs between those two files are the Go-template `{{...}}` blocks
for `carFlags` — never the vehicle data.)
