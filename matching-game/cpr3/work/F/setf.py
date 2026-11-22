# usage: python setf.py partNN.json "Item name" field "new text"   (field 'DEL' text deletes it)
import json, sys
p, name, field, val = sys.argv[1:5]
d = json.load(open(p, encoding='utf-8'))
hit = 0
for it in d['correlates']:
    if it['name'] == name:
        hit = 1
        if val == 'DEL': it.pop(field, None)
        elif field == 'avoid': it['avoid'] = json.loads(val)
        elif field == 'lectures': it['lectures'] = json.loads(val)
        else: it[field] = val
        if field in ('presentation','workup','management'): print(field, len(val) if val!='DEL' else 0)
assert hit, name
with open(p, 'w', encoding='utf-8') as fh:
    fh.write('{"correlates": [\n' + ',\n'.join(json.dumps(i, ensure_ascii=False) for i in d['correlates']) + '\n]}\n')
