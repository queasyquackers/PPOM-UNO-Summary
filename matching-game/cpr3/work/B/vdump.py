import json, sys
sys.stdout.reconfigure(encoding='utf-8')
P = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\B.json'
d = json.load(open(P, encoding='utf-8'))
idx = [int(x) for x in sys.argv[1:]]
for i in idx:
    it = d['bugs'][i]
    print(f"#{i} {it['name']} | {it['disease']} | {it['lecture']} {it.get('lectures')} avoid={it.get('avoid','')}")
    print('  MICRO:', it['micro'])
    print('  PRES :', it['presentation'])
