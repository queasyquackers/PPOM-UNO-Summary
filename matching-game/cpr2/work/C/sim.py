"""List card pairs within C.json (and against other fragments if present) with token Jaccard >= threshold."""
import glob, json, os, re, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))
import qa
th = float(sys.argv[1]) if len(sys.argv) > 1 else 0.3
here = os.path.join(os.path.dirname(__file__), '..', '..', 'fragments')
mine = json.load(open(os.path.join(here, 'C.json'), encoding='utf-8'))['correlates']
others = []
for p in glob.glob(os.path.join(here, '*.json')):
    if p.endswith('C.json'): continue
    others += [(os.path.basename(p), it) for it in json.load(open(p, encoding='utf-8')).get('correlates', [])]
sys.stdout.reconfigure(encoding='utf-8')
for f in ('presentation', 'workup', 'management'):
    rows = []
    for i, a in enumerate(mine):
        for b in mine[i+1:]:
            if a.get(f) and b.get(f):
                j = qa.jaccard(a[f], b[f])
                if j >= th: rows.append((j, a['name'], b['name']))
        for src, b in others:
            if a.get(f) and b.get(f):
                j = qa.jaccard(a[f], b[f])
                if j >= th: rows.append((j, a['name'], f'{src}:{b["name"]}'))
    for j, x, y in sorted(rows, reverse=True):
        print(f'{f:12s} {j:.2f}  {x}  ~  {y}')
