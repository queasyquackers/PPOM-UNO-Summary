"""Join part*.json into fragments/B.json and run qa.py on it."""
import glob, json, os, subprocess, sys
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', '..', 'fragments', 'B.json')
bugs = []
for p in sorted(glob.glob(os.path.join(HERE, 'part*.json'))):
    with open(p, encoding='utf-8') as fh:
        bugs += json.load(fh)['bugs']
with open(OUT, 'w', encoding='utf-8') as fh:
    json.dump({'bugs': bugs}, fh, ensure_ascii=False, indent=1)
print('wrote', len(bugs), 'bugs')
if '--qa' in sys.argv:
    subprocess.run([sys.executable, os.path.join(HERE, '..', '..', 'qa.py'), OUT])
