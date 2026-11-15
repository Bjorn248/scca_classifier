#!/usr/bin/env python3
"""Extract the Appendix A vehicle tables from the SCCA Solo rulebook PDF.

Use this script when a new rulebook is published. It has three commands:

  extract  PDF [-o OUT.tsv]
      Write one row for each vehicle entry in Appendix A:
      category, class, make, entry text, model years.

  diff     OLD NEW
      Show the entries that were added, removed, or changed between two
      rulebooks. OLD and NEW can be a PDF or a TSV file from "extract".

  compare  PDF|TSV [--classes SS,AS,...] [--make NAME] [--template PATH]
      For each class and make, show the rulebook entries ("R" lines) next to
      the allSoloCars models that have that class code ("T" lines, with
      compressed model years). The default is the nine Street classes.
      This is a worksheet for a person or an agent. The script does not
      match rulebook entries to allSoloCars models, and it does not change
      allSoloCars.

The script reads the Street, Street Touring, and Street Prepared categories
of Appendix A. The categories after them (Street Modified, Prepared,
Modified) use eligibility rules and weight formulas, not vehicle lists.

The script uses only the Python standard library, "pdftotext" from
poppler-utils (also used by generate_rules_txt.sh), and "node" (only for
"compare"). Start it from the repository root.

How the parser operates: the Appendix A tables are two columns. In each
column, a make name starts at the column edge, a vehicle entry starts
approximately 6 pt to the right, and a continuation line of a long entry
starts approximately 12 pt to the right. "pdftotext -bbox-layout" gives the
x-position of each line, thus the script can identify each line type. The
script writes a warning for year ranges that it cannot read, for example a
rulebook typo such as "(2020-235)".
"""

import argparse
import csv
import html
import json
import os
import re
import subprocess
import sys
import tempfile
from collections import Counter, OrderedDict, defaultdict

CATEGORY_HEADINGS = OrderedDict([
    ('STREET CATEGORY', 'Street'),
    ('STREET TOURING® CATEGORY', 'Street Touring'),
    ('STREET PREPARED CATEGORY', 'Street Prepared'),
])
# Appendix A ends the vehicle lists at this heading. The categories after it
# (Street Modified, Prepared, Modified) use eligibility rules and weight
# formulas, not vehicle lists, thus the script does not read them.
END_HEADING = 'STREET MODIFIED CATEGORY'

# Rulebook make name -> allSoloCars make key(s).
MAKE_ALIASES = {
    'Chrysler & Plymouth': ['Chrysler', 'Plymouth'],
    'Chrysler/Plymouth': ['Chrysler', 'Plymouth'],
    'Datsun/Nissan': ['Datsun', 'Nissan'],
    'Nissan/Datsun': ['Nissan', 'Datsun'],
    'Dodge & SRT': ['Dodge'],
    'Dodge/SRT': ['Dodge'],
    'Fiat & Bertone': ['Fiat'],
    'General Motors': ['NOC (Not Otherwise Classified)'],
    'Mercedes-Benz': ['Mercedes'],
    'MINI': ['Mini'],
    'Tesla Motors': ['Tesla'],
    'Volkswagen (VW)': ['Volkswagen'],
    'VW': ['Volkswagen'],
}

YEAR_TOKEN = re.compile(r'(?<![\d.])((?:19|20)?\d{2})(?:\s*-\s*((?:19|20)?\d{1,3}))?(?![\d.])')
# Offsets (pt) from the column edge: make names are at 0, entries at
# approximately 6, and continuation lines at approximately 12 to 15.
MAKE_MAX_OFFSET = 3.0
ENTRY_MAX_OFFSET = 10.5
# Make names in the 2026 rulebook. A line with one of these names is a make
# heading, also when its x-position is irregular. A new make that is not in
# this list is found from its x-position.
KNOWN_MAKES = {m.casefold() for m in (
    'Acura', 'Alfa Romeo', 'AMC', 'Aston Martin', 'Audi', 'Austin', 'Austin-Healey',
    'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Chrysler & Plymouth',
    'Chrysler, Plymouth, & Dodge', 'Chrysler/Plymouth/Dodge', 'Daewoo', 'Datsun',
    'DeTomaso', 'Dodge', 'Dodge & Mitsubishi', 'Dodge, Mitsubishi, & Eagle',
    'Dodge & SRT', 'Eagle', 'Elva', 'Ferrari', 'Fiat', 'Fiat & Bertone', 'Fisker',
    'Ford', 'Ford & Mercury', 'General Motors', 'Genesis', 'Geo', 'GMC', 'Griffith',
    'Honda', 'Hyundai', 'Infiniti', 'Isuzu', 'Jaguar', 'Jeep', 'Jensen', 'Kia',
    'Lamborghini', 'Lancia', 'Lexus', 'Lincoln', 'Lotus', 'Lucid', 'Maserati', 'Mazda',
    'McLaren', 'Mercedes', 'Mercedes-Benz', 'Mercury', 'Merkur', 'MG', 'MINI',
    'Mitsubishi', 'Morgan', 'Nissan', 'Nissan & Datsun', 'Nissan/Datsun', 'Oldsmobile',
    'Opel', 'Peugeot', 'Pininfarina', 'Plymouth', 'Polestar', 'Pontiac',
    'Pontiac & Saturn', 'Pontiac & Toyota', 'Porsche', 'Renault', 'Rivian', 'Saab',
    'Saleen', 'Saturn', 'Scion', 'Shelby', 'Subaru', 'Sunbeam', 'Suzuki', 'Tesla',
    'Tesla Motors', 'Toyota', 'Triumph', 'TVR', 'Volkswagen', 'Volvo', 'Yugo',
)}
# An entry that ends with its model years is complete.
COMPLETE_ENTRY_RE = re.compile(r'\([^()]*\d{2}[^()]*\)\*?$')
CATCH_ALL_RE = re.compile(r'^[“"]?Catch-all[”"]?:?(.*)$', re.I)
# Advertisement text on some Appendix A pages.
AD_RE = re.compile(r'tirerack|888-380-8473|FREE SHIPPING|R-COMPOUND TIRES|Tire Shaving|'
                   r'^On orders over|^orders over|^©20\d\d$|^Tire Rack|Pilot Sport|RT615K|'
                   r'3-rib/4-rib|STREET AND ST-CLASS TIRES|Potenza|g-Force|Proxes|ADVAN', re.I)


# --------------------------------------------------------------------------
# PDF reading


def bbox_lines(pdf_path):
    """Return a list of pages. Each page is a list of (x, y, text) lines."""
    with tempfile.TemporaryDirectory() as tmp:
        out = os.path.join(tmp, 'bbox.html')
        subprocess.run(['pdftotext', '-bbox-layout', pdf_path, out], check=True)
        with open(out, encoding='utf-8') as f:
            data = f.read()
    pages = []
    line_re = re.compile(
        r'<line xMin="([\d.]+)" yMin="([\d.]+)" xMax="[\d.]+" yMax="[\d.]+">(.*?)</line>', re.S)
    word_re = re.compile(r'<word[^>]*>(.*?)</word>', re.S)
    for page in re.findall(r'<page .*?</page>', data, re.S):
        lines = []
        for m in line_re.finditer(page):
            words = [html.unescape(w) for w in word_re.findall(m.group(3))]
            text = ' '.join(words).strip()
            if text:
                lines.append((float(m.group(1)), float(m.group(2)), text))
        pages.append(lines)
    return pages


def appendix_a_pages(pages):
    """Return the page indexes of Appendix A (to the page before Appendix B)."""
    start = end = None
    for i, lines in enumerate(pages):
        for x, y, text in lines:
            if y > 60:
                continue
            if start is None and text.startswith('APPENDIX A - AUTOMOBILE CLASSES'):
                start = i
            elif start is not None and text.startswith('APPENDIX B'):
                end = i
                break
        if end is not None:
            break
    if start is None:
        sys.exit('Cannot find the "APPENDIX A - AUTOMOBILE CLASSES" heading in the PDF.')
    return range(start, end if end is not None else len(pages))


def is_page_furniture(y, text):
    if y < 30 or y > 575:
        return True
    if re.fullmatch(r'(\d+ — )?\d{4} SCCA® National Solo® Rules( — \d+)?', text):
        return True
    return False


# --------------------------------------------------------------------------
# Entry parsing


def normalize_year(tok, base=None):
    tok = tok.strip()
    if len(tok) == 4:
        return int(tok)
    if len(tok) == 2:
        n = int(tok)
        if base is not None:
            y = (base // 100) * 100 + n
            return y if y >= base else y + 100
        return 2000 + n if n <= 40 else 1900 + n
    return None


def parse_years(text):
    """Return (years, warnings) for the model years in an entry.

    years is a sorted list of ints, or [] if the entry has no model years
    (the rulebook then means all years). The rulebook writes ranges as
    (2017-21), (2023-2026), (1992-10), (2012-13, 2018-20) and so on.
    """
    warnings = []
    text = text.replace('½', '')
    groups = re.findall(r'\(([^()]*\d{2}[^()]*)\)', text)
    if not groups:
        # Some entries have a missing ")" at the end, for example "(2023- 24".
        m = re.search(r'\(([^()]*)$', text)
        if m and re.search(r'\d{2}', m.group(1)):
            groups = [m.group(1)]
    years = set()
    for g in groups:
        g = re.sub(r'\s*-\s*', '-', g)
        found = False
        for m in YEAR_TOKEN.finditer(g):
            a, b = m.group(1), m.group(2)
            if len(a) == 2 and not re.search(r'(19|20)\d\d|\d{2}-\d{2}', g):
                continue
            # "M5 (incl. Competition, 2017-2023)" and "(AWD/Performance 18-23)"
            start = normalize_year(a)
            if start is None or start < 1940 or start > 2040:
                continue
            if b is None:
                years.add(start)
                found = True
                continue
            if len(b) == 3:
                warnings.append('end year "%s" has three digits (rulebook typo?)' % b)
                b = b[:2]
            end = normalize_year(b, base=start)
            if end is None or end < start or end - start > 70:
                warnings.append('cannot read year range "%s-%s"' % (a, b))
                continue
            years.update(range(start, end + 1))
            found = True
        if not found and re.search(r'(19|20)\d\d', g):
            warnings.append('cannot read years in "(%s)"' % g)
    return sorted(years), warnings


def compress_years(years):
    """[2001, 2002, 2003, 2005] -> '2001-2003, 2005'."""
    if not years:
        return ''
    out = []
    start = prev = years[0]
    for y in years[1:]:
        if y == prev + 1:
            prev = y
            continue
        out.append(str(start) if start == prev else '%d-%d' % (start, prev))
        start = prev = y
    out.append(str(start) if start == prev else '%d-%d' % (start, prev))
    return ', '.join(out)


def join_continuation(prev, nxt):
    if re.search(r'\d-$', prev) and re.match(r'\d', nxt):
        return prev + nxt                      # "(2015-" + "19)"
    if re.search(r'[a-z]-$', prev) and re.match(r'[a-z]', nxt):
        return prev[:-1] + nxt                 # "Chal-" + "lenge"
    return prev + ' ' + nxt


CLASS_CODES = {
    'SS', 'AS', 'BS', 'CS', 'DS', 'ES', 'FS', 'GS', 'HS',
    'SST', 'AST', 'BST', 'CST', 'DST', 'EST', 'GST',
    'SSP', 'CSP', 'DSP', 'ESP', 'FSP',
    'SSM', 'SM', 'SMF',
    'XP', 'CP', 'DP', 'EP', 'FP',
    'AM', 'BM', 'CM', 'DM', 'EM', 'FM',
}
# "B Street Class (BS)", "C Street Touring® (CST)", "X Prepared (XP)", "Modified class A (AM)"
CLASS_RE = re.compile(r'^(?=.*(?:class|Street|Touring|Prepared|Modified))[A-Z][\w ®&-]{0,60}'
                      r'\(([A-Z]{2,4})\)$', re.I)
CONT_RE = re.compile(r'^([A-Z]{2,4})\s*\(continued\)', re.I)


def class_heading(text):
    """Return the class code if the line is a class heading, else None."""
    m = CONT_RE.match(text)
    if m and m.group(1).upper() in CLASS_CODES:
        inner = re.search(r'\(([A-Z]{2,4})\)\s*$', text)
        if inner and inner.group(1).upper() in CLASS_CODES:
            return inner.group(1).upper()   # "SS (continued) A Street class (AS)"
        return m.group(1).upper()
    m = CLASS_RE.match(text)
    if m and m.group(1).upper() in CLASS_CODES:
        return m.group(1).upper()
    return None


def is_heading(text):
    return text in CATEGORY_HEADINGS or class_heading(text) is not None


def extract(pdf_path):
    pages = bbox_lines(pdf_path)
    rows = []
    category = None
    cls = None
    make = None
    entry = None
    warnings = []

    def flush():
        nonlocal entry
        if entry is not None:
            text = re.sub(r'\s+', ' ', entry['text']).strip()
            text = re.sub(r'\(\s+', '(', text)
            text = re.sub(r'\s+\)', ')', text)
            years, warn = parse_years(text)
            for w in warn:
                warnings.append('%s %s %s: %s' % (entry['class'], entry['make'], text, w))
            rows.append(OrderedDict([
                ('category', entry['category']),
                ('class', entry['class']),
                ('make', entry['make']),
                ('entry', text),
                ('years', compress_years(years)),
                ('page', entry['page']),
            ]))
            entry = None

    for pno in appendix_a_pages(pages):
        lines = [(x, y, t) for x, y, t in pages[pno] if not is_page_furniture(y, t)]
        if not lines:
            continue
        columns = [[l for l in lines if l[0] < 120], [l for l in lines if l[0] >= 120]]
        for col in columns:
            if not col:
                continue
            col.sort(key=lambda l: l[1])
            # The column edge is the x-position of the make names. Headings
            # can start a few points to the left of it, thus ignore them.
            # Most lines are vehicle entries, thus the most frequent
            # x-position is the entry position, and the edge is 6 pt left.
            body = [round(x) for x, y, t in col if not is_heading(t)]
            if body:
                entry_x = Counter(body).most_common(1)[0][0]
                edge = entry_x - 6
            else:
                edge = min(x for x, y, t in col)
            footnote = False
            for x, y, text in col:
                if text == END_HEADING:
                    flush()
                    category = cls = None
                    continue
                if text in CATEGORY_HEADINGS:
                    flush()
                    category, cls, make = CATEGORY_HEADINGS[text], None, None
                    continue
                new_cls = class_heading(text)
                if new_cls is not None:
                    flush()
                    # The make continues after a "(continued)" heading.
                    if new_cls != cls:
                        make = None
                    cls = new_cls
                    continue
                if category is None or cls is None or AD_RE.search(text):
                    continue
                offset = x - edge
                m_catch = CATCH_ALL_RE.match(text)
                if m_catch:
                    flush()
                    make = 'Catch-all'
                    text = m_catch.group(1).strip()
                    if not text:
                        continue
                    offset = 6
                if text.startswith('*') and not re.match(r'\*\s*Limited Prep', text, re.I):
                    # A footnote ("*All vehicles must meet ..."). Ignore it
                    # and its next lines, until the next make or heading.
                    flush()
                    footnote = True
                    continue
                # A make name at the entry position is an entry ("Mini").
                known_make = (text.rstrip(':').strip().casefold() in KNOWN_MAKES
                              and not MAKE_MAX_OFFSET <= offset < ENTRY_MAX_OFFSET)
                if footnote and not known_make:
                    continue
                footnote = False
                has_years = re.search(r'\(\s*(?:19|20)\d\d', text) is not None
                if known_make or (offset < MAKE_MAX_OFFSET and not has_years
                                  and not text.startswith('•')):
                    flush()
                    make = text.rstrip(':').strip()
                    edge = x
                elif (offset < ENTRY_MAX_OFFSET or entry is None
                      or (COMPLETE_ENTRY_RE.search(entry['text']) and re.match(r'[A-Z0-9]', text))):
                    flush()
                    entry = {'category': category, 'class': cls, 'make': make,
                             'text': text, 'page': pno + 1}
                elif entry is not None:
                    # A long entry can continue in the next column or page.
                    entry['text'] = join_continuation(entry['text'], text)
    flush()
    return rows, warnings


# --------------------------------------------------------------------------
# Commands


def load_rows(path):
    if path.lower().endswith('.pdf'):
        rows, warnings = extract(path)
        for w in warnings:
            print('warning:', w, file=sys.stderr)
        return rows
    with open(path, encoding='utf-8', newline='') as f:
        return list(csv.DictReader(f, delimiter='\t'))


def strip_years(text):
    """Entry text without its model years, used to match entries."""
    t = re.sub(r'\(\s*(?:19|20)\d\d[^()]*\)', '', text)
    t = re.sub(r'\(\s*\d{2}\s*-\s*\d{2}\s*\)', '', t)
    t = re.sub(r'[,;]?\s*(?:19|20)\d\d\s*-\s*(?:19|20)?\d{2,4}', '', t)
    return re.sub(r'\s+', ' ', t).strip(' ,')


def cmd_extract(args):
    rows, warnings = extract(args.pdf)
    for w in warnings:
        print('warning:', w, file=sys.stderr)
    if not rows:
        sys.exit('No Appendix A entries found.')
    out = open(args.output, 'w', encoding='utf-8', newline='') if args.output else sys.stdout
    try:
        writer = csv.DictWriter(out, fieldnames=list(rows[0].keys()), delimiter='\t',
                                lineterminator='\n')
        writer.writeheader()
        writer.writerows(rows)
    finally:
        if out is not sys.stdout:
            out.close()
    counts = defaultdict(int)
    for r in rows:
        counts[(r['category'], r['class'])] += 1
    summary = ', '.join('%s %d' % (c, n) for (cat, c), n in counts.items())
    print('%d entries: %s' % (len(rows), summary), file=sys.stderr)


def cmd_diff(args):
    old, new = load_rows(args.old), load_rows(args.new)

    def index(rows):
        idx = defaultdict(list)
        for r in rows:
            idx[(r['class'], r['make'] or '', strip_years(r['entry']).lower())].append(r)
        return idx

    a, b = index(old), index(new)
    out = defaultdict(list)
    for key in sorted(set(a) | set(b)):
        ra, rb = a.get(key, []), b.get(key, [])
        ya = sorted({r['years'] for r in ra})
        yb = sorted({r['years'] for r in rb})
        cls, make = key[0], key[1]
        if ra and not rb:
            for r in ra:
                out[(cls, make)].append('- %s   [years: %s]' % (r['entry'], r['years'] or 'all'))
        elif rb and not ra:
            for r in rb:
                out[(cls, make)].append('+ %s   [years: %s]' % (r['entry'], r['years'] or 'all'))
        elif ya != yb:
            out[(cls, make)].append('~ %s   [years: %s -> %s]' % (
                rb[0]['entry'], ' / '.join(ya) or 'all', ' / '.join(yb) or 'all'))
    order = []
    for r in new + old:
        if r['class'] not in order:
            order.append(r['class'])
    for cls in order:
        keys = sorted(k for k in out if k[0] == cls)
        if not keys:
            continue
        print('==== %s' % cls)
        for k in keys:
            print('  %s' % (k[1] or '(no make)'))
            for line in out[k]:
                print('    ' + line)


def load_template(path):
    js = r"""
const fs = require('fs');
const src = fs.readFileSync(process.argv[1], 'utf8');
const m = src.match(/const allSoloCars = (\{[\s\S]*?\n\});/);
if (!m) { console.error('allSoloCars not found'); process.exit(1); }
process.stdout.write(JSON.stringify((new Function('return ' + m[1]))()));
"""
    res = subprocess.run(['node', '-e', js, path], check=True, capture_output=True, text=True)
    return json.loads(res.stdout, object_pairs_hook=OrderedDict)


def template_years(model, code):
    """Return the year keys of a model whose array contains the class code."""
    years, special = [], []
    for ykey, codes in model.items():
        if code not in codes:
            continue
        if ykey.isdigit():
            years.append(int(ykey))
        else:
            special.append(ykey)
    text = compress_years(sorted(years))
    if special:
        text = ', '.join(special + ([text] if text else []))
    return text


def cmd_compare(args):
    rows = load_rows(args.source)
    cars = load_template(args.template)
    classes = [c.strip().upper() for c in args.classes.split(',')] if args.classes else None
    if classes is None:
        classes = []
        for r in rows:
            if r['category'] == 'Street' and r['class'] not in classes:
                classes.append(r['class'])
    make_filter = args.make.lower() if args.make else None
    for cls in classes:
        code = cls.lower()
        book = defaultdict(list)
        for r in rows:
            if r['class'] == cls:
                book[r['make'] or ''].append(r)
        tpl = defaultdict(list)
        for make, models in cars.items():
            for model, data in models.items():
                yrs = template_years(data, code)
                if yrs:
                    tpl[make].append((model, yrs))
        # Map each rulebook make to allSoloCars make keys.
        groups = OrderedDict()
        for bmake in book:
            keys = MAKE_ALIASES.get(bmake, [bmake])
            groups.setdefault(bmake, keys)
        used = {k for keys in groups.values() for k in keys}
        for tmake in tpl:
            if tmake not in used:
                groups[tmake + ' (not in rulebook class)'] = [tmake]
        print('#' * 70)
        print('# %s  (code "%s")' % (cls, code))
        for gname, keys in groups.items():
            if make_filter and make_filter not in gname.lower():
                continue
            print('== %s' % gname)
            bmake = gname.replace(' (not in rulebook class)', '')
            for r in book.get(bmake, []):
                print('   R  %-60s %s' % (r['entry'], r['years'] or 'all'))
            for k in keys:
                for model, yrs in tpl.get(k, []):
                    label = model if len(keys) == 1 else '%s / %s' % (k, model)
                    print('   T  %-60s %s' % (label, yrs))


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest='cmd', required=True)
    e = sub.add_parser('extract', help='write the Appendix A entries as TSV')
    e.add_argument('pdf')
    e.add_argument('-o', '--output')
    e.set_defaults(func=cmd_extract)
    d = sub.add_parser('diff', help='compare the Appendix A entries of two rulebooks')
    d.add_argument('old')
    d.add_argument('new')
    d.set_defaults(func=cmd_diff)
    c = sub.add_parser('compare', help='compare the rulebook with allSoloCars')
    c.add_argument('source', help='rulebook PDF, or TSV from "extract"')
    c.add_argument('--classes', help='comma-separated class list, for example SS,AS '
                   '(default: all Street classes)')
    c.add_argument('--make', help='show only makes that contain this text')
    c.add_argument('--template', default='templates/common.js.tmpl')
    c.set_defaults(func=cmd_compare)
    args = p.parse_args()
    args.func(args)


if __name__ == '__main__':
    main()
