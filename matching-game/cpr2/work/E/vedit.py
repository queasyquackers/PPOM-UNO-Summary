import json,sys
p=r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\E.json'
d=json.load(open(p,encoding='utf-8'))
edits=json.load(open(sys.argv[1],encoding='utf-8'))
by={c['name']:c for c in d['correlates']}
for e in edits:
    c=by[e['name']]
    for k,v in e.get('set',{}).items():
        if v is None: c.pop(k,None)
        else: c[k]=v
        if isinstance(v,str): print(e['name'],k,len(v))
    if 'rename' in e:
        c['name']=e['rename']
json.dump(d,open(p,'w',encoding='utf-8'),indent=2,ensure_ascii=False)
print('ok')
