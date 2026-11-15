# Pitfalls

These problems occurred during the update to the 2026 rulebook (July 2026 file).
Look for them again in each new rulebook.

## Text extraction

- `pdftotext -raw` and `pdftotext -layout` do not keep the column structure of
  Appendix A. The `-raw` text of the December 2025 file did not contain the FSP
  vehicle list. Thus, use `scripts/appendix_a.py`, which reads the x-position of
  each line from `pdftotext -bbox-layout`.
- The default `pdftotext` text (`rules.txt`) is correct for `main.go`. Do not
  change the mode in `generate_rules_txt.sh`.
- In the table of contents of the July 2026 file, some subchapter names have a
  space before the dot leaders ("13.1 Authorized Modifications ......"). The body
  heading does not have this space. Thus `getSubChapters` in `main.go` must
  remove the space (`strings.TrimSpace`). Without this, `go run main.go` stopped
  with a nil pointer error.
- Some page footers have an incorrect year ("192 — 2025 SCCA® National Solo®
  Rules" in the 2026 book). The page-number patterns must accept each year.
- Advertisement text (Tire Rack) is on some Appendix A pages. `appendix_a.py`
  ignores the known advertisement lines (`AD_RE`). If a new advertisement
  occurs, an entry with tire names or a phone number shows it. Add the new text
  to `AD_RE`.

## Rulebook text

- Typos in year ranges: "(2020-235)" (BMW 3 Series G20, FS). The extractor gives
  a warning. Use the range that agrees with the other categories.
- Typos in names: "EGallardo", "Ionic 5", "exclc.", "Civis Si", "Leguna Seca".
- Year formats: "(1992-10)" means 1992-2010. "(AWD/Performance 18-23)" means
  2018-2023. "(1993½-98)" means 1993-1998. "(2017-26, exc. Quadrifoglio Revial)"
  has text after the years. "(MORIZO Edition (2023-24 )" has a missing ")".
- An entry can be in two Street classes. Examples in the 2026 book:
  - MINI Cooper Hardtop S (F65/F66, 2025): GS lists the S for 2025, and HS lists
    "Cooper Hardtop (incl. S, ...) (2025-26)".
  - Tesla Model 3 RWD 2024: DS lists "Model 3 (RWD) (2018-24)", and SS lists
    "Model 3 (all) (2024-26)".
  Use the more specific entry and tell the maintainer.
- A new printing can move a car to a different class without other changes.
  Example: Subaru Legacy 2.5GT moved from GS (December 2025 file) to HS (July
  2026 file).
- A new printing can remove an entry that a Fastrack change added. Example: the
  992.2 911 Carrera (SS, 2025) was in the December 2025 file only. The car stays
  in SS through the SS catch-all.

## allSoloCars data

- The make keys are not always the rulebook names:

  | Rulebook | allSoloCars |
  |---|---|
  | Mercedes-Benz | Mercedes |
  | MINI | Mini |
  | Dodge & SRT | Dodge |
  | Tesla Motors | Tesla |
  | Nissan/Datsun, Nissan & Datsun | Nissan, Datsun |
  | Chrysler & Plymouth | Chrysler, Plymouth |
  | Fiat & Bertone | Fiat |
  | General Motors | NOC (Not Otherwise Classified) |

  `appendix_a.py` has this table (`MAKE_ALIASES`).
- Some model keys group variants that the book puts in different classes, for
  example `Porsche / 911 (non-Turbo)` or `Mini / Cooper S (including JCW &
  JCWGP except Countryman)`. Do not change such a key only to agree with one
  variant. Tell the maintainer.
- Some cars have two keys for the same car, for example `Porsche / Cayman GTS`
  and `Porsche / Cayman GTS 4.0`. Change the two keys together.
- Approximately 70 year keys have a duplicate code (for example
  `['ssp', 'ssp']`). These existed before the 2026 update. `allsolocars.py
  check -v` shows them.
- The class codes `csm`, `csx`, and `ssc` (Club Spec and Solo Spec Coupe) are
  not in Appendix A.
