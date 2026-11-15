#!/usr/bin/env python3
"""Read, change, and examine the allSoloCars data in templates/common.js.tmpl.

Commands (start them from the repository root):

  show  "Make/model text" [...]
      Show each matching model in a short form. Years with the same class
      list are joined, for example "2017-2020:bs,sst,ssp,xp".

  check [--template PATH]
      Examine the data structure: empty arrays, unknown class codes,
      incorrect year keys, duplicate codes, and year keys with more than one
      Street class code. The command exits with code 1 if it finds a problem
      that is not a duplicate code (some duplicate codes exist since 2024).

Use as a library for a large change. Write a small change file:

  import sys
  sys.path.insert(0, '.claude/skills/update-solo-rules/scripts')
  from allsolocars import Session
  s = Session()
  s.code('Kia', 'EV6 GT', 'ss', '2022-2026', 'SS: EV6 (GT) (2022-26)')
  s.swap('Cadillac', 'ATS-V', 'bs', 'fs', 'FS: ATS-V (2016-19)')
  s.save()
  s.report()

Then start "npm run generate_site" to copy the data to src/common.js.

The writer gives the same text as the file (2-space indent, single quotes,
trailing commas). Thus an unchanged object gives no git diff.
"""

import argparse
import json
import re
import subprocess
import sys
from collections import OrderedDict

TEMPLATE = 'templates/common.js.tmpl'
STREET = ['ss', 'as', 'bs', 'cs', 'ds', 'es', 'fs', 'gs', 'hs']
STREET_TOURING = ['sst', 'ast', 'bst', 'cst', 'dst', 'est', 'gst']
STREET_PREPARED = ['ssp', 'csp', 'dsp', 'esp', 'fsp']
SPECIAL_YEARS = ('all', '2001-any', 'any-2000')

_JS = r"""
const fs = require('fs');
const src = fs.readFileSync(process.argv[1], 'utf8');
const get = (name) => {
  const m = src.match(new RegExp('const ' + name + ' = (\\{[\\s\\S]*?\\n\\});'));
  return m ? (new Function('return ' + m[1]))() : null;
};
process.stdout.write(JSON.stringify({cars: get('allSoloCars'), sub: get('subclassMap')}));
"""


def _load_js(path):
    out = subprocess.run(['node', '-e', _JS, path], check=True, capture_output=True, text=True)
    return json.loads(out.stdout, object_pairs_hook=OrderedDict)


def load(path=TEMPLATE):
    """Return allSoloCars as nested OrderedDicts (make -> model -> year -> codes)."""
    return _load_js(path)['cars']


def _q(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def _year_key(k):
    if k == 'all':
        return (0, 0)
    if k.isdigit():
        return (1, int(k))
    return (2, k)


def serialize(cars):
    lines = ['const allSoloCars = {']
    for make, models in cars.items():
        lines.append('  %s: {' % _q(make))
        for model, years in models.items():
            lines.append('    %s: {' % _q(model))
            for ykey, codes in years.items():
                lines.append('      %s: [%s],' % (_q(ykey), ', '.join(_q(c) for c in codes)))
            lines.append('    },')
        lines.append('  },')
    lines.append('};')
    return '\n'.join(lines)


def save(cars, path=TEMPLATE):
    with open(path, encoding='utf-8') as f:
        text = f.read()
    m = re.search(r'const allSoloCars = \{[\s\S]*?\n\};', text)
    text = text[:m.start()] + serialize(cars) + text[m.end():]
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)


def years(spec):
    """'2017-2021,2023' -> [2017, 2018, 2019, 2020, 2021, 2023]."""
    out = []
    for part in str(spec).split(','):
        part = part.strip()
        if not part:
            continue
        if '-' in part:
            a, b = part.split('-')
            out.extend(range(int(a), int(b) + 1))
        else:
            out.append(int(part))
    return out


def compress(values):
    ys = sorted(int(y) for y in values if str(y).isdigit())
    if not ys:
        return '-'
    out, start, prev = [], ys[0], ys[0]
    for y in ys[1:]:
        if y == prev + 1:
            prev = y
            continue
        out.append(str(start) if start == prev else '%d-%d' % (start, prev))
        start = prev = y
    out.append(str(start) if start == prev else '%d-%d' % (start, prev))
    return ','.join(out)


def insert_pos(arr, code):
    """Street codes first, then Street Touring, then Street Prepared codes."""
    if code in STREET:
        return 0
    if code in STREET_TOURING:
        return 1 if arr and arr[0] in STREET else 0
    if code in STREET_PREPARED:
        pos = 0
        for i, c in enumerate(arr):
            if c in STREET or c in STREET_TOURING:
                pos = i + 1
        return pos
    return len(arr)


class Session:
    """Load allSoloCars, apply logged changes, and save."""

    def __init__(self, path=TEMPLATE):
        self.path = path
        self.cars = load(path)
        self.log = []
        self.new_years = []

    def model(self, make, model):
        try:
            return self.cars[make][model]
        except KeyError:
            raise SystemExit('missing model: %s / %s' % (make, model))

    def _sort(self, make, model):
        m = self.cars[make][model]
        self.cars[make][model] = OrderedDict(sorted(m.items(), key=lambda kv: _year_key(kv[0])))

    def _new_year(self, make, model, y, src=None):
        m = self.cars[make][model]
        have = sorted(int(k) for k in m if k.isdigit())
        if not have:
            raise SystemExit('cannot add year %d to %s / %s: it has no year keys' % (y, make, model))
        if src is None:
            before = [k for k in have if k < y]
            src = before[-1] if before else have[0]
        # Copy the other codes of the source year, but not its Street code.
        m[str(y)] = list(dict.fromkeys(c for c in m[str(src)] if c not in STREET))
        self.new_years.append((make, model, y, src))
        self._sort(make, model)

    def code(self, make, model, code, spec, why, src=None):
        """Give `code` to exactly the years in `spec`, and remove it from the other years.

        A missing year key is added with the other codes of the nearest
        earlier year (or of year `src`). Include the current years in `spec`
        if they must keep the code.
        """
        m = self.model(make, model)
        if 'all' in m:
            raise SystemExit('%s / %s has an "all" key, use expand() first' % (make, model))
        want = set(years(spec))
        before = [k for k, v in m.items() if k.isdigit() and code in v]
        for y in sorted(want):
            if str(y) not in m:
                self._new_year(make, model, y, src)
        m = self.cars[make][model]
        for k in list(m):
            if not k.isdigit():
                continue
            if int(k) in want and code not in m[k]:
                m[k].insert(insert_pos(m[k], code), code)
            elif int(k) not in want and code in m[k]:
                m[k].remove(code)
                if not m[k]:
                    del m[k]
        after = [k for k, v in m.items() if k.isdigit() and code in v]
        self.log.append('code   %s / %s  %s: %s -> %s   # %s' % (
            make, model, code, compress(before), compress(after), why))

    def drop(self, make, model, code, why):
        """Remove `code` from all year keys of the model."""
        m = self.model(make, model)
        changed = [k for k, v in m.items() if code in v]
        for k in changed:
            m[k].remove(code)
            if not m[k]:
                del m[k]
        self.log.append('drop   %s / %s  %s from %s   # %s' % (make, model, code, changed, why))

    def swap(self, make, model, old, new, why):
        """Replace code `old` with `new` in each year key that has `old`."""
        m = self.model(make, model)
        changed = []
        for k, arr in m.items():
            if old in arr:
                if new in arr:
                    arr.remove(old)
                else:
                    arr[arr.index(old)] = new
                changed.append(k)
        self.log.append('swap   %s / %s  %s -> %s in %s   # %s' % (make, model, old, new, changed, why))

    def add_all(self, make, model, code, why):
        """Add `code` to the 'all' year key of the model."""
        arr = self.model(make, model)['all']
        if code not in arr:
            arr.insert(insert_pos(arr, code), code)
        self.log.append('add    %s / %s  %s to all   # %s' % (make, model, code, why))

    def expand(self, make, model, spec, why):
        """Replace the 'all' key with year keys (production years) that have the same codes."""
        m = self.model(make, model)
        codes = m.pop('all')
        for y in years(spec):
            m[str(y)] = list(codes)
        self._sort(make, model)
        self.log.append('expand %s / %s  all -> %s   # %s' % (make, model, spec, why))

    def add_model(self, make, model, data, why, after=None):
        """Add a model. `data` maps a year spec ('2021-2026' or 'all') to a code list."""
        items = list(self.cars[make].items())
        if model in self.cars[make]:
            raise SystemExit('model exists: %s / %s' % (make, model))
        new = OrderedDict()
        for spec, codes in data.items():
            for y in (['all'] if spec == 'all' else years(spec)):
                new[str(y)] = list(codes)
        idx = len(items) if after is None else [k for k, _ in items].index(after) + 1
        items.insert(idx, (model, new))
        self.cars[make] = OrderedDict(items)
        self.log.append('add    %s / %s  %s   # %s' % (make, model, dict(data), why))

    def save(self):
        save(self.cars, self.path)

    def report(self):
        print('\n'.join(self.log))
        if self.new_years:
            print('\nNew year keys (examine their other codes against the rulebook):')
            for make, model, y, src in self.new_years:
                print('  %s / %s  %d (codes copied from %d)' % (make, model, y, src))


def short(model):
    out, prev = [], None
    for k, v in model.items():
        if prev and k.isdigit() and prev[1].isdigit() and int(k) == int(prev[1]) + 1 and v == prev[2]:
            prev[1] = k
            continue
        if prev:
            out.append(prev)
        prev = [k, k, v]
    if prev:
        out.append(prev)
    return '; '.join(('%s' % a if a == b else '%s-%s' % (a, b)) + ':' + ','.join(v) for a, b, v in out)


def cmd_show(args):
    cars = load(args.template)
    for arg in args.patterns:
        make, _, pat = arg.partition('/')
        for mk, models in cars.items():
            if mk.lower() != make.lower():
                continue
            for model, data in models.items():
                if pat.lower() in model.lower():
                    print('%s / %s  =>  %s' % (mk, model, short(data)))


def cmd_check(args):
    data = _load_js(args.template)
    cars, sub = data['cars'], data['sub']
    if cars is None or sub is None:
        sys.exit('Cannot find allSoloCars and subclassMap in %s' % args.template)
    known = set(sub) | {'csm', 'csx', 'ssc'}
    problems = dups = 0
    for make, models in cars.items():
        for model, ys in models.items():
            for y, codes in ys.items():
                where = '%s / %s / %s' % (make, model, y)
                if not (y.isdigit() and len(y) == 4) and y not in SPECIAL_YEARS:
                    print('year key not permitted:', where)
                    problems += 1
                if not codes:
                    print('empty array:', where)
                    problems += 1
                for c in codes:
                    if c not in known:
                        print('unknown class code "%s":' % c, where)
                        problems += 1
                street = [c for c in codes if c in STREET]
                if len(street) > 1:
                    print('more than one Street class %s:' % street, where)
                    problems += 1
                if len(codes) != len(set(codes)):
                    dups += 1
                    if args.verbose:
                        print('duplicate code:', where, codes)
    print('%d problems, %d year keys with a duplicate code' % (problems, dups))
    sys.exit(1 if problems else 0)


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('--template', default=TEMPLATE)
    sub = p.add_subparsers(dest='cmd', required=True)
    s = sub.add_parser('show', help='show models in a short form')
    s.add_argument('patterns', nargs='+', help='"Make/model text", for example "Porsche/Cayman"')
    s.set_defaults(func=cmd_show)
    c = sub.add_parser('check', help='examine the data structure')
    c.add_argument('-v', '--verbose', action='store_true', help='also show duplicate codes')
    c.set_defaults(func=cmd_check)
    args = p.parse_args()
    args.func(args)


if __name__ == '__main__':
    main()
