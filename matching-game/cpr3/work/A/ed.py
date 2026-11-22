"""Tiny editor: python ed.py <changes.json>
changes.json: list of ops:
 {"cat":"drugs","name":"X","set":{"field":"value"}, "del":["field"], "rename":"New"}
 {"cat":"drugs","name":"X","drop":true}
"""
import json, sys
P = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\A.json'
with open(P, encoding='utf-8') as fh:
    data = json.load(fh)
ops = json.load(open(sys.argv[1], encoding='utf-8'))
for op in ops:
    items = data[op['cat']]
    key = op.get('gene')
    hits = [it for it in items if it['name'] == op['name'] and (key is None or it.get('gene') == key)]
    if len(hits) != 1:
        raise SystemExit(f'not exactly one match for {op}: {len(hits)}')
    it = hits[0]
    if op.get('drop'):
        items.remove(it); print('dropped', op['name']); continue
    for k, v in op.get('set', {}).items():
        it[k] = v
    for k in op.get('del', []):
        it.pop(k, None)
    if op.get('rename'):
        it['name'] = op['rename']
    print('ok', op['name'])
with open(P, 'w', encoding='utf-8') as fh:
    json.dump(data, fh, indent=2, ensure_ascii=False)
    fh.write('\n')
