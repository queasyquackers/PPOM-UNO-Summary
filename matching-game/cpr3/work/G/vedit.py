"""Verifier edit helper: python vedit.py <edits.json>
edits.json = [{"cat": "correlates", "name": "...", "set": {"field": "text"|null}}]
null deletes the field. Prints before/after lengths."""
import json, sys
FR = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\G.json'
d = json.load(open(FR, encoding='utf-8'))
edits = json.load(open(sys.argv[1], encoding='utf-8'))
for e in edits:
    it = next(x for x in d[e['cat']] if x['name'] == e['name'])
    for k, v in e['set'].items():
        old = it.get(k)
        if v is None:
            it.pop(k, None)
        else:
            it[k] = v
        print(f"{e['name']} | {k}: {len(json.dumps(old)) if old is not None else 0} -> {len(v) if isinstance(v, str) else v}")
json.dump(d, open(FR, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
open(FR, 'a', encoding='utf-8').write('\n')
