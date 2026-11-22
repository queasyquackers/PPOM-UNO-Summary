import json, sys
sys.stdout.reconfigure(encoding='utf-8')
d = json.load(open(r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\C.json', encoding='utf-8'))
a, b = int(sys.argv[1]), int(sys.argv[2])
for i, c in enumerate(d['correlates'][a:b], a):
    print(f"[{i}] {c['name']}  ({c['lecture']} {c.get('lectures')}) avoid={c.get('avoid')}")
    for f in ('presentation', 'workup', 'management'):
        if c.get(f):
            print(f"  {f[:4].upper()}: {c[f]}")
    print()
