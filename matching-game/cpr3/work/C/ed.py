"""Apply edits: python ed.py edits.json  -> list of [name, field, value|null] ; field 'name' renames."""
import json, sys
sys.stdout.reconfigure(encoding='utf-8')
P = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\C.json'
d = json.load(open(P, encoding='utf-8'))
edits = json.load(open(sys.argv[1], encoding='utf-8'))
by = {c['name']: c for c in d['correlates']}
LIM = {'presentation': 280, 'workup': 240, 'management': 240}
for name, field, val in edits:
    c = by[name]
    if val is None:
        c.pop(field, None)
    else:
        c[field] = val
    if field in LIM and val and len(val) > LIM[field]:
        print('OVER', name, field, len(val))
    print('ok', name, field, len(val) if isinstance(val, str) else val)
json.dump(d, open(P, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
