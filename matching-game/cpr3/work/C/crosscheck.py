"""Cross-check C's correlates against every other fragment's correlates (read-only)."""
import glob, json, os, sys
here = os.path.dirname(os.path.abspath(__file__))
root = os.path.normpath(os.path.join(here, '..', '..'))
sys.path.insert(0, root)
import qa
mine = json.load(open(os.path.join(root, 'fragments', 'C.json'), encoding='utf-8'))['correlates']
my_names = {it['name'] for it in mine}
allc = []
for p in sorted(glob.glob(os.path.join(root, 'fragments', '*.json'))):
    d = json.load(open(p, encoding='utf-8'))
    for it in d.get('correlates', []):
        it = dict(it); it['_src'] = os.path.basename(p)[0]
        allc.append(it)
print('other correlates:', sorted((it['_src'], it['name']) for it in allc if it['name'] not in my_names) if '-names' in sys.argv else len(allc))
fails, warns = qa.check({'correlates': allc}, 'merged')
for line in warns + fails:
    if any(('"%s"' % n) in line or ('/%s:' % n) in line for n in my_names):
        print(line)
