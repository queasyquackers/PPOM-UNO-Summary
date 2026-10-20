import json,sys
sys.stdout.reconfigure(encoding='utf-8')
d=json.load(open(r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\A.json',encoding='utf-8'))
for i in range(int(sys.argv[1]),int(sys.argv[2])):
    x=d['drugs'][i]
    print(f"[{i}] {x['name']}  {x['groups']}")
    print("  M:",x['mechanism'])
    print("  AE:",x['adverseEffects'])
    if 'avoid' in x: print("  avoid:",x['avoid'])
