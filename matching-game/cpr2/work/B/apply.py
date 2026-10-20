import json,sys
P=r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\B.json'
def load(): return json.load(open(P,encoding='utf-8'))
def save(d):
    with open(P,'w',encoding='utf-8') as f:
        json.dump(d,f,indent=2,ensure_ascii=False); f.write('\n')
def sub(d,i,field,old,new):
    c=d['correlates'][i]
    assert old in c[field], (i,field,old)
    c[field]=c[field].replace(old,new)
    lim=280 if field=='presentation' else 240
    print(i,field,len(c[field]),'OK' if len(c[field])<=lim else 'TOO LONG')
