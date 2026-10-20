import json,sys
f=sys.argv[1]; pats=[p.lower() for p in sys.argv[2:]]
d=json.load(open(rf'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\{f}.json',encoding='utf-8'))
for cat,items in d.items():
  for c in items:
    if any(p in c['name'].lower() for p in pats):
      print(f"[{f}] {c['name']} avoid={c.get('avoid','')}")
      for k in ('disease','presentation','workup','management','mechanism','adverseEffects'):
        if k in c: print(f"  {k[:4]}: {c[k]}")
