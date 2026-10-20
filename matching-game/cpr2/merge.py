"""Merge the authors' fragments into the CPR Block 2 matching-game dataset.

    python merge.py

Each fragments/<ID>.json holds the categories one author owned (see
ASSIGNMENTS.md). Ownership is exclusive, so a name that turns up in two
fragments is a real collision to resolve by hand - the merge stops rather
than silently keeping one. Run qa.py on the result before building.
"""
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
CATS = ['bugs', 'drugs', 'correlates']
PREFIX = {'bugs': 'b', 'drugs': 'd', 'correlates': 'c'}
FIELDS = {
    'bugs': ['name', 'disease', 'micro', 'presentation'],
    'drugs': ['name', 'groups', 'mechanism', 'adverseEffects'],
    'correlates': ['name', 'presentation', 'workup', 'management'],
}


def norm(s):
    s = s.lower()
    s = re.sub(r'\([^)]*\)', '', s)
    s = re.sub(r'[^a-z0-9 ]', '', s)
    return re.sub(r'\s+', ' ', s).strip()


def key(cat, it):
    return (norm(it['name']), norm(it['disease'])) if cat == 'bugs' else norm(it['name'])


def lec_num(l):
    m = re.search(r'\d+', str(l))
    return int(m.group()) if m else 0


sys.stdout.reconfigure(encoding="utf-8")
out = {c: [] for c in CATS}
owner = {}
collisions = []
for path in sorted(glob.glob(os.path.join(HERE, 'fragments', '*.json'))):
    src = os.path.basename(path)[:-5]
    with open(path, encoding='utf-8') as fh:
        frag = json.load(fh)
    for cat, items in frag.items():
        if cat not in CATS:
            raise SystemExit(f'{src}: unknown category "{cat}"')
        for it in items:
            k = (cat, key(cat, it))
            if k in owner:
                collisions.append(f'{cat}: "{it["name"]}" in both {owner[k]} and {src}')
                continue
            owner[k] = src
            # Canonical field order, primary lecture first in "lectures".
            lecs = [it['lecture']] + [l for l in it.get('lectures', []) if l != it['lecture']]
            clean = {f: it[f] for f in FIELDS[cat] if it.get(f)}
            clean['lecture'] = it['lecture']
            clean['lectures'] = sorted(set(lecs), key=lambda l: (l != it['lecture'], lec_num(l)))
            if it.get('avoid'):
                clean['avoid'] = it['avoid']
            out[cat].append(clean)

if collisions:
    raise SystemExit('Resolve these collisions first:\n  ' + '\n  '.join(collisions))

for cat in CATS:
    out[cat].sort(key=lambda x: (x['name'].lower(), x.get('disease', '').lower()))
    for i, it in enumerate(out[cat]):
        it['id'] = PREFIX[cat] + str(i + 1)

# Every "avoid" must name a real item, or it silently does nothing.
names = {it['name'] for c in CATS for it in out[c]}
for c in CATS:
    for it in out[c]:
        av = it.get('avoid')
        targets = av if isinstance(av, list) else [n for v in (av or {}).values() for n in v]
        for n in targets:
            if n not in names:
                print(f'  WARNING: {it["name"]} avoids unknown item "{n}"')

with open(os.path.join(HERE, 'matching_data.json'), 'w', encoding='utf-8') as fh:
    json.dump(out, fh, indent=2, ensure_ascii=False)
print(' · '.join(f'{c} {len(out[c])}' for c in CATS), '| total', sum(len(v) for v in out.values()))
