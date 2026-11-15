# Comparing two extractions of the rulebook

The SCCA re-typesets the rulebook PDF on every re-upload, so text extraction of two
different printings produces different line wrapping and column order. A raw `diff`
of the two `pdftotext` outputs is mostly noise. Use this normalized multiset
comparison instead — it answers "did any car/class/year content actually change?"
with zero false positives from column order:

```bash
# previous extraction first, then the new one
cp rules.txt /tmp/rules_prev.txt
npm run generate_rules   # writes fresh rules.txt
pdftotext rules.pdf /tmp/rules_new.txt
```

```python
# normalize_and_compare.py  (python3)
import re, collections

def load(p):
    return open(p, encoding='utf-8', errors='replace').read() \
        .replace('\u00a0', '\n').replace('\u00ad', '')

def norm(text):
    out = []
    for l in text.splitlines():
        l = re.sub(r'\s+', ' ', l).strip()
        l = re.sub(r'\.{2,}\s*\.?', ' ', l)          # TOC dot leaders
        l = re.sub(r'^\d+\s*[—–-]\s*20\d\d SCCA.*$', '', l)  # page footers
        l = re.sub(r'20\d\d SCCA.*Rules\s*[—–-]\s*\d+', '', l)
        if l:
            out.append(l)
    return out

a = collections.Counter(norm(load('/tmp/rules_prev.txt')))
b = collections.Counter(norm(load('/tmp/rules_new.txt')))
print('only in previous:')
for line in (a - b).elements():
    print('  -', line)
print('only in new:')
for line in (b - a).elements():
    print('  +', line)
```

What to look for in the output:

- Real changes: lines containing a car name and a year range, e.g.
  `EV6 (GT) (2022-26)` replacing `EV6 (GT) (2022-25)` — new/retired model years,
  cars added to or removed from a class, renamed variants.
- Noise to ignore: copyright boilerplate, TOC dot-leader remnants, section heading
  punctuation (`I.1 SOLO® EVENTS.` vs `I.1 SOLO® EVENTS`), ad pages (e.g. Tire Rack).
- A split line pair (`(2023` / `2026)` in one extraction vs `(2023-2026)` in the
  other) is wrapping noise; to resolve a specific entry, get its exact wording from
  the new PDF with `pdftotext -layout rules.pdf -` and searching near the class
  heading (e.g. `grep -n "Super Street class (SS)"` then read that page region).
