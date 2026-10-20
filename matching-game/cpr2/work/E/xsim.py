import json,re
base=r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments'
def toks(s): 
    stop=set('a an the and or of in to with for on at by is was has have his her he she no not from as per after over than this that it its be are'.split())
    return set(w for w in re.findall(r'[a-z0-9]+',s.lower()) if w not in stop and len(w)>2)
E=json.load(open(base+r'\E.json',encoding='utf-8'))['correlates']
others=[]
for f in 'BCD':
    for c in json.load(open(base+f'\{f}.json',encoding='utf-8')).get('correlates',[]): others.append((f,c))
res=[]
for e in E:
    for f,o in others:
        for k in ('presentation','workup','management'):
            if k in e and k in o:
                a,b=toks(e[k]),toks(o[k])
                j=len(a&b)/max(1,min(len(a),len(b)))
                res.append((j,k,e['name'],f,o['name']))
res.sort(reverse=True)
for r in res[:25]: print(f"{r[0]:.2f} {r[1][:4]} {r[2]} <> {r[3]}:{r[4]}")
