"""Sanity-check the built dataset the way the game itself will consume it."""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))

with open(os.path.join(ROOT, 'matching-game', 'blocks', 'cpr1.json'), encoding='utf-8') as fh:
    cfg = json.load(fh)
with open(os.path.join(HERE, 'matching_data.json'), encoding='utf-8') as fh:
    data = json.load(fh)

MAXSIZE = 10          # the largest round the game offers
problems = 0

for cat, spec in cfg['cats'].items():
    items = data[cat]
    print(f"\n=== {cat} ({len(items)} items) ===")
    for it in items:
        if not it.get('name') or not it.get('lecture'):
            print(f"  MISSING name/lecture: {it}")
            problems += 1
    for attr in spec['attrs']:
        f = attr['field']
        vals = [(it['name'], str(it[f]).strip()) for it in items if it.get(f) and str(it[f]).strip()]
        # Replicate the game's distinct-value filter to find the real round ceiling.
        used, kept = [], 0
        for _, v in vals:
            n = v.lower()
            if any(u == n or u in n or n in u for u in used):
                continue
            used.append(n)
            kept += 1
        longest = max((len(v) for _, v in vals), default=0)
        flag = '  <-- CANNOT FILL A 10-PAIR ROUND' if kept < MAXSIZE else ''
        print(f"  {f:16} pool {len(vals):4}  distinct {kept:4}  longest {longest:4}{flag}")
        if kept < MAXSIZE:
            problems += 1
        for name, v in vals:
            if len(v) > 300:
                print(f"      LONG ({len(v)}): {name} -> {v[:70]}...")

print(f"\n{problems} problem(s)")
