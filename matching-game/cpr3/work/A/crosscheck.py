"""Cross-check A's items against the other fragments (read-only)."""
import glob, json, os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))
import qa
HERE = os.path.dirname(os.path.abspath(__file__))
frag = os.path.join(HERE, '..', '..', 'fragments')
mine = json.load(open(os.path.join(frag, 'A.json'), encoding='utf-8'))
mynames = {c: {i['name'] for i in v} for c, v in mine.items()}
merged = {}
for p in sorted(glob.glob(os.path.join(frag, '*.json'))):
    d = json.load(open(p, encoding='utf-8'))
    for c, v in d.items():
        merged.setdefault(c, []).extend(v)
fails, warns = qa.check(merged, 'merged')
for line in fails + warns:
    if any(n in line for c in mynames for n in mynames[c]):
        print(line)
print({c: len(v) for c, v in merged.items()})
