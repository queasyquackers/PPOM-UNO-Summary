"""Join part*.json into fragments/D.json and print field lengths."""
import glob, json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', '..', 'fragments', 'D.json')
MAX = {'presentation': 280, 'workup': 240, 'management': 240}
items = []
for p in sorted(glob.glob(os.path.join(HERE, 'part*.json'))):
    with open(p, encoding='utf-8') as fh:
        d = json.load(fh)
    for it in d['correlates']:
        it['_part'] = os.path.basename(p)
        items.append(it)
if '-v' in sys.argv:
    for it in items:
        print(it['_part'], it['name'], ' '.join(f"{k}={len(it[k])}{'!!' if len(it[k])>MAX[k] else ''}" for k in MAX if k in it))
for it in items:
    it.pop('_part')
with open(OUT, 'w', encoding='utf-8') as fh:
    json.dump({'correlates': items}, fh, ensure_ascii=False, indent=1)
print(len(items), 'items ->', os.path.normpath(OUT))
