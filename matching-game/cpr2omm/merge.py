"""Merge the CPR Block 2 OMM fragments into one matching-game dataset.

    python merge.py

One fragment per category (chapman, crossed, outlet, correlates). Fills in the
lecture badge each category shares, gives every item a stable id, and writes
matching_data.json. Run qa.py on the result before building.
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
# Category order is the order of the category picker in the game.
CATS = {
    'chapman': {'prefix': 'p', 'lecture': 'CV69', 'lectures': ['CV69'],
                'fields': ['name', 'region', 'anterior', 'posterior']},
    'crossed': {'prefix': 'm', 'lecture': 'CV101/102', 'lectures': ['CV101', 'CV102'],
                'fields': ['name', 'syndrome', 'pattern', 'exercise']},
    'outlet': {'prefix': 't', 'lecture': 'CV80', 'lectures': ['CV80'],
               'fields': ['name', 'kind', 'where', 'significance']},
    'correlates': {'prefix': 'c', 'lecture': None, 'lectures': None,
                   'fields': ['name', 'presentation', 'mechanism', 'workup', 'management']},
}

sys.stdout.reconfigure(encoding='utf-8')
out = {}
for cat, spec in CATS.items():
    with open(os.path.join(HERE, 'fragments', cat + '.json'), encoding='utf-8') as fh:
        items = json.load(fh)[cat]
    rows = []
    for i, it in enumerate(items, 1):
        # Canonical field order; the shared lecture badge is filled in here so a
        # card's badge never hints at which item it belongs to.
        row = {f: it[f] for f in spec['fields'] if it.get(f)}
        row['lecture'] = it.get('lecture') or spec['lecture']
        # Primary lecture first; a combined badge like "CV101/102" just keeps the list.
        lecs = it.get('lectures') or spec['lectures'] or [row['lecture']]
        if row['lecture'] in lecs:
            lecs = [row['lecture']] + [l for l in lecs if l != row['lecture']]
        row['lectures'] = lecs
        if it.get('avoid'):
            row['avoid'] = it['avoid']
        row['id'] = f"{spec['prefix']}{i}"
        rows.append(row)
    out[cat] = rows

with open(os.path.join(HERE, 'matching_data.json'), 'w', encoding='utf-8') as fh:
    json.dump(out, fh, ensure_ascii=False, indent=1)
print('wrote matching_data.json - ' + ' · '.join(f'{k} {len(v)}' for k, v in out.items()))
