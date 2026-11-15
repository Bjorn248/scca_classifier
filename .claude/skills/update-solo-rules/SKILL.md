---
name: update-solo-rules
description: Update the scca_classifier website to a new SCCA National Solo (autocross) rulebook edition or printing. Use when SCCA publishes a new rulebook, when the rulebook download link in generate_rules_txt.sh stops giving a PDF, or when the allSoloCars class data must agree with Appendix A of the current rulebook.
---

# Update the website to a new Solo rulebook

This skill updates two parts of the website:

1. The class pages (`src/a/*.html`) and the questionnaire flags in `src/common.js`.
   `npm run generate_site` makes these from the rulebook text.
2. The `allSoloCars` data (make, model, model year, class codes). This data is
   maintained by hand. The scripts in this skill find and apply the changes.

## How the repository operates

- `generate_rules_txt.sh` (`npm run generate_rules`) downloads `rules.pdf` and
  converts it to `rules.txt` with the default `pdftotext` mode. All `rules.*` and
  `old_rules.*` files are in `.gitignore`.
- `main.go` (`npm run generate_site`) reads `rules.txt` and makes these files:
  - `src/a/{s,st,sp,sm,p,m,ssc}.html` from `templates/a/*.html.tmpl` (rule text of
    chapters 13 to 20),
  - `src/common.js` from `templates/common.js.tmpl` (the `carFlags` come from the
    subchapters of the rulebook).
- Do not edit the made files by hand. Edit the templates, then start
  `npm run generate_site`.
- `allSoloCars` is in `templates/common.js.tmpl`. The generator copies it to
  `src/common.js` without changes.
- The class codes are the keys of `subclassMap` in `templates/common.js.tmpl`.

## Tools in this skill

Start the tools from the repository root. They use Python 3 (standard library
only), `pdftotext` (poppler-utils), and `node`.

| Command | Use |
|---|---|
| `scripts/appendix_a.py extract rules.pdf -o NEW.tsv` | Write each Appendix A vehicle entry (Street, Street Touring, Street Prepared) as a TSV row. |
| `scripts/appendix_a.py diff old_rules.pdf rules.pdf` | Show the entries that were added, removed, or changed between two rulebooks. |
| `scripts/appendix_a.py compare rules.pdf [--classes SS,AS] [--make porsche]` | Show the rulebook entries ("R") next to the `allSoloCars` models that have the class code ("T"). |
| `scripts/allsolocars.py show "Porsche/Cayman"` | Show models in a short form (years with the same codes are joined). |
| `scripts/allsolocars.py check` | Find empty arrays, unknown codes, incorrect year keys, and years with two Street codes. |
| `allsolocars.Session` (Python) | Apply logged changes to `allSoloCars` and write the file in its own format. |

The script paths are relative to `.claude/skills/update-solo-rules/`.

## Procedure

### 1. Get the new rulebook

1. Keep the previous rulebook: `cp rules.pdf old_rules.pdf`.
2. Find the PDF link of the current rulebook on the SCCA Solo rules page.
3. Make sure that the link gives a PDF:

   ```bash
   curl -sL "<url>" -o /tmp/rules_check.pdf -w "%{http_code} %{content_type}\n"
   file /tmp/rules_check.pdf     # must be "PDF document"
   ```

4. Put the link in `generate_rules_txt.sh`, then start `npm run generate_rules`.
5. Record the edition, the printing, and the creation date:

   ```bash
   pdftotext -l 3 rules.pdf - | grep -E "EDITION|printing"
   pdfinfo rules.pdf | grep CreationDate
   ```

Note: SCCA can upload a changed book with the same printing text. For example, the
2026 book says "Fifty Third printing, January, 2026", but the file of July 2026
has more model years than the file of January 2026. Thus, always compare the
files, not only the printing text.

Note: `scca.com` can refuse `curl` for HTML pages (HTTP 403). The PDF links do
not have this problem.

### 2. Make the class pages again

1. Start `npm run generate_site`.
2. If the generator stops with `nil pointer dereference` in `subChapterText`, it
   cannot find a subchapter heading in the chapter body. Compare the table of
   contents in `rules.txt` with the subchapter headings in the body. Then adjust
   the `allChapters` patterns, `getSubChapters`, or the `toRemove` patterns in
   `main.go`.
3. Examine `git diff src/a/`. Usually only rule text changes. If a subchapter is
   added or removed, also examine the questionnaire flags (`carFlags`) in
   `src/common.js`.

### 3. Find the Appendix A changes

```bash
S=.claude/skills/update-solo-rules/scripts
python3 $S/appendix_a.py extract rules.pdf -o /tmp/appendix_a.tsv
python3 $S/appendix_a.py diff old_rules.pdf rules.pdf > /tmp/appendix_a_diff.txt
python3 $S/appendix_a.py compare /tmp/appendix_a.tsv > /tmp/street_worksheet.txt
python3 $S/appendix_a.py compare /tmp/appendix_a.tsv --classes SST,AST,BST,CST,DST,EST,GST > /tmp/st_worksheet.txt
python3 $S/appendix_a.py compare /tmp/appendix_a.tsv --classes SSP,CSP,DSP,ESP,FSP --by-make > /tmp/sp_worksheet.txt
```

- The `diff` output gives the changes of the new book. Apply all of them.
- The `compare` worksheets also show old differences between the book and the
  data. Fix them when the book is clear (see step 4).
- For Street Prepared, use `--by-make`. Cars often move between SP classes, and
  this view shows all SP classes of a make together.
- Read the warnings of `extract`. They show year ranges that the script cannot
  read (usually typos in the book).
- Before you use an entry, make sure that it agrees with the PDF. The `page`
  column of the TSV gives the PDF page. See `references/pitfalls.md`.

### 4. Decide each change

Use these rules for each worksheet difference:

1. The class of a car comes from its explicit Appendix A entry.
2. An omitted version or model year gets the class of the equivalent listed car
   (Appendix A introduction). Thus, do not remove a code only because the book
   range ends before the newest model year of the same car. Change it only when
   the book lists that car and year in a different class, or when the book makes
   it ineligible.
3. For an unlisted car, use the catch-alls. Start at the last class (HS) and go
   up. The SS catch-all takes all eligible cars that are not classified.
4. The start of the Street category lists cars that are not eligible, and cars
   that are excluded because of stability. Remove all Street codes from them.
5. SCCA publishes monthly Fastrack changes between printings. Some commits add
   them (`git log --oneline | grep -i fastrack`). If the new book does not
   contain a change that such a commit added, do not remove it. Tell the
   maintainer in the pull request.
6. If two book entries disagree, or an entry has a typo, use the more specific
   entry and tell the maintainer in the pull request.
7. A year key has a maximum of one Street code (`ss` to `hs`).
8. Street Prepared "Limited Prep" entries also get their code. Thus, one car
   can have two SP codes (for example `csp` and `dsp` for the BRZ).
9. Street Prepared: do not add a code to a car that has no SP code when only a
   catch-all covers it. Tell the maintainer in the pull request.

### 5. Edit allSoloCars

Edit only `templates/common.js.tmpl`. For more than some changes, write a change
file and apply it with `allsolocars.Session`:

```python
import sys
sys.path.insert(0, '.claude/skills/update-solo-rules/scripts')
from allsolocars import Session

s = Session()
s.code('Kia', 'EV6 GT', 'ss', '2022-2026', 'SS: EV6 (GT) (2022-26)')   # exact year set
s.swap('Cadillac', 'ATS-V', 'bs', 'fs', 'FS: ATS-V (2016-19)')           # class move
s.drop('Ferrari', '458', 'ss', 'not in SS')                               # remove a code
s.add_all('Shelby', 'Charger turbo', 'es', 'ES: Charger GLH-S (1987)')    # 'all' key
s.save()
s.report()
```

Obey these conventions:

- The data is make (2 spaces) -> model (4 spaces) -> year key (6 spaces) -> array.
  A year key is `'YYYY'`, `'all'`, `'2001-any'`, or `'any-2000'`.
- An array is never empty. If a year key has no codes, remove it.
- Put new years and classes into the existing model keys. Add a model key only
  when no existing key fits (for example, the book splits a model into two
  variants with different classes). Do not rename a model key without a reason.
- `Session.code()` sets the exact year set of a code. Include the current years
  that must keep the code.
- A new year key gets the other codes of the nearest earlier year. Examine these
  codes (Street Touring, Street Prepared) against the book. `report()` lists the
  new year keys.
- A model with an `'all'` key must get explicit years (`expand()`) before one
  code can change for some years only. Use the production years of the car.
- Put the Street code first, then the Street Touring code, then the Street
  Prepared code. `Session` does this.

### 6. Make sure that the result is correct

```bash
npm run generate_site                                   # copies allSoloCars to src/common.js
python3 .claude/skills/update-solo-rules/scripts/allsolocars.py check
node --check src/common.js
npm run lint
npm run build
git diff --stat                                         # only the expected files
```

- Make the `compare` worksheets again. Each remaining difference must be an
  intended decision from step 4.
- Do a check in a browser: start `python3 -m http.server` in `src/`, open
  `http://localhost:8000/`, and select some changed cars.

### 7. Commit and open the pull requests

- Use the commit style of `git log --oneline` (short, lower case).
- Put the Street changes, the Street Touring changes, and the Street Prepared
  changes into different commits.
- Update the "Rules" section of `README.md` (edition, printing, link).
- The pull request gives:
  - the edition, the printing, the creation date of the PDF, and the link,
  - a list of changes for each class, with the rulebook entry for each change,
  - the decisions from step 4 that the maintainer must examine,
  - the known differences that the pull request does not change.

## References

- `references/pitfalls.md`: problems in the rulebook PDF and in the data that
  occurred before, and how to identify them.
