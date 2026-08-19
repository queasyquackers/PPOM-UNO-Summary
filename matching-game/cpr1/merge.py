"""Merge the per-lecture fragments into one deduped CPR Block 1 dataset.

Each fragments/cv##.json holds only the categories that lecture contributes,
so a fragment is cheap to re-author in isolation when a lecture gets revised.
"""
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
FRAG = os.path.join(HERE, 'fragments')

CATS = ['drugs', 'transporters', 'formulas', 'correlates', 'findings', 'omm']
# Explicit id prefixes: two categories starting with the same letter would
# otherwise collide (findings/formulas).
PREFIX = {'drugs': 'd', 'transporters': 't', 'formulas': 'f',
          'correlates': 'c', 'findings': 'x', 'omm': 'o'}


def norm(s):
    s = s.lower()
    s = re.sub(r'\([^)]*\)', '', s)
    s = re.sub(r'[^a-z0-9 ]', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()


def lec_num(l):
    m = re.search(r'\d+', str(l))
    return int(m.group()) if m else 0


files = sorted((f for f in os.listdir(FRAG) if f.endswith('.json')),
               key=lambda f: lec_num(f))
out = {c: [] for c in CATS}
deduped = 0

for fn in files:
    with open(os.path.join(FRAG, fn), encoding='utf-8') as fh:
        frag = json.load(fh)
    unknown = [k for k in frag if k not in CATS]
    if unknown:
        raise SystemExit(f'{fn}: unknown category {unknown}')
    for cat in CATS:
        out[cat].extend(frag.get(cat, []))

# Dedupe after the full gather so the earliest lecture to teach a concept keeps
# it (fragments are read in lecture order above).
for cat in CATS:
    seen, keep = set(), []
    for item in out[cat]:
        key = norm(item['name'])
        if key in seen:
            deduped += 1
            continue
        seen.add(key)
        keep.append(item)
    keep.sort(key=lambda x: x['name'].lower())
    for i, item in enumerate(keep):
        item['id'] = PREFIX[cat] + str(i + 1)
    out[cat] = keep

with open(os.path.join(HERE, 'matching_data.json'), 'w', encoding='utf-8') as fh:
    json.dump(out, fh, indent=2, ensure_ascii=False)

print(f'{len(files)} fragments -> ' +
      ' · '.join(f'{c} {len(out[c])}' for c in CATS))
print('deduped:', deduped, '| total:', sum(len(v) for v in out.values()))
