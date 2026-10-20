"""Print neighbours' cards (read-only) whose name matches any pattern given on the command line."""
import glob, json, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
pats = [re.compile(p, re.I) for p in sys.argv[1:]]
seen = set()
for path in sorted(glob.glob(os.path.join(root, '[ABCD]', 'part*.json'))):
    try:
        data = json.load(open(path, encoding='utf-8'))
    except Exception:
        continue
    for cat, items in data.items():
        for it in items:
            nm = it.get('name', '')
            if any(p.search(nm) for p in pats) and (nm, it.get('disease')) not in seen:
                seen.add((nm, it.get('disease')))
                print(f"[{path.split(os.sep)[-2]}] {nm} | {it.get('disease','')}")
                for f in ('presentation', 'workup', 'management', 'micro'):
                    if it.get(f):
                        print(f"   {f[:4]}: {it[f]}")
