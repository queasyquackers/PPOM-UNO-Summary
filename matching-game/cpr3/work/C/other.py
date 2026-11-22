import json, glob, sys, os
sys.stdout.reconfigure(encoding='utf-8')
root = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments'
names = [a.lower() for a in sys.argv[1:]]
for p in sorted(glob.glob(os.path.join(root, '*.json'))):
    d = json.load(open(p, encoding='utf-8'))
    for cat, items in d.items():
        for c in items:
            if any(n in c['name'].lower() for n in names):
                print(f"<{os.path.basename(p)[0]}/{cat}> {c['name']} ({c.get('lecture')}) avoid={c.get('avoid')}")
                for f, v in c.items():
                    if f in ('name', 'lecture', 'lectures', 'avoid'): continue
                    print(f"  {f}: {v}")
                print()
