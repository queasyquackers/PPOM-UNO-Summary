import json,sys
d=json.load(open(r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\E.json',encoding='utf-8'))
a,b=int(sys.argv[1]),int(sys.argv[2])
for i,c in enumerate(d['correlates'][a:b+1],a):
    print(f"[{i}] {c['name']}  ({','.join(c['lectures'])}) avoid={c.get('avoid','')}")
    for k in ('presentation','workup','management'):
        if k in c: print(f"  {k[0].upper()}: {c[k]}")
