# usage: python vset.py "Item name" field "new text"   (text 'DEL' deletes; avoid/lectures take JSON)
import json, sys
P = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\F.json'
name, field, val = sys.argv[1:4]
d = json.load(open(P, encoding='utf-8'))
hit = 0
for it in d['correlates']:
    if it['name'] == name:
        hit = 1
        if val == 'DEL': it.pop(field, None)
        elif field in ('avoid', 'lectures'): it[field] = json.loads(val)
        else: it[field] = val
        if val != 'DEL' and field not in ('avoid', 'lectures'): print(field, len(val))
assert hit, name
with open(P, 'w', encoding='utf-8') as fh:
    json.dump(d, fh, indent=2, ensure_ascii=False); fh.write('\n')
