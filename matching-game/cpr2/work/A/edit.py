import json,sys
sys.stdout.reconfigure(encoding='utf-8')
P=r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\A.json'
LIM={'mechanism':240,'adverseEffects':240}
def apply(edits):
    d=json.load(open(P,encoding='utf-8'))
    by={x['name']:x for x in d['drugs']}
    for name,field,old,new in edits:
        x=by[name]
        if field in ('groups','lectures','lecture','avoid'):
            x[field]=new
        elif old is None:
            x[field]=new
        else:
            assert old in x[field], (name,field,old)
            x[field]=x[field].replace(old,new)
        if field in LIM:
            assert len(x[field])<=LIM[field], (name,field,len(x[field]))
            print(name,field,len(x[field]),'->',x[field])
        else:
            print(name,field,'->',x[field])
    json.dump(d,open(P,'w',encoding='utf-8'),indent=2,ensure_ascii=False)
if __name__=='__main__':
    import importlib
    mod=importlib.import_module(sys.argv[1])
    apply(mod.EDITS)
