import json,sys
d=json.load(open(r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\B.json',encoding='utf-8'))
for a in sys.argv[1:]:
    i=int(a); c=d['correlates'][i]
    print('##',i,c['name'])
    for k in ('presentation','workup','management'):
        if k in c: print(' ',k.upper()+':',c[k])
    print('  lec:',c['lectures'],'avoid:',c.get('avoid'))
