"""Merge hand-authored categories into fragments/cv##.json, keeping the rest.

    python addfrag.py payload.json

payload.json is {"cv30": {"drugs": [...], "formulas": [...]}, ...}. Each named
category replaces that category in the fragment; categories not named (notably
the auto-extracted "correlates") are left alone, and every item gets its
"lecture" label stamped from the key so the fragment stays self-describing.
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
FRAG = os.path.join(HERE, 'fragments')
VALID = {'drugs', 'transporters', 'formulas', 'correlates', 'findings', 'omm'}

with open(sys.argv[1], encoding='utf-8') as fh:
    payload = json.load(fh)

for lec, cats in payload.items():
    path = os.path.join(FRAG, lec + '.json')
    frag = {}
    if os.path.exists(path):
        with open(path, encoding='utf-8') as fh:
            frag = json.load(fh)
    for cat, items in cats.items():
        if cat not in VALID:
            raise SystemExit(f'{lec}: unknown category "{cat}"')
        for it in items:
            it['lecture'] = lec.upper()
        frag[cat] = items
    with open(path, 'w', encoding='utf-8') as fh:
        json.dump(frag, fh, indent=2, ensure_ascii=False)
    print(f"{lec}: " + ', '.join(f'{c} {len(v)}' for c, v in cats.items()))
