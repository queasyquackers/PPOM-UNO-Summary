import json, sys, glob
# usage: python fix.py  (reads edits.json: [[name, field, old, new], ...])
edits = json.load(open('edits.json', encoding='utf-8'))
for p in sorted(glob.glob('part*.json')):
    d = json.load(open(p, encoding='utf-8'))
    ch = False
    for it in d['correlates']:
        for nm, f, old, new in edits:
            if it['name'] == nm:
                if old not in it[f]:
                    print('NOT FOUND', nm, f, old[:40]); continue
                it[f] = it[f].replace(old, new); ch = True
                print(nm, f, len(it[f]))
    if ch:
        with open(p, 'w', encoding='utf-8') as fh:
            json.dump(d, fh, ensure_ascii=False, indent=1)
