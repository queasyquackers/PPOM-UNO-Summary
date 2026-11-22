# usage: python showname.py FRAG "name1" "name2" ...
import json, sys
sys.stdout.reconfigure(encoding='utf-8')
f = sys.argv[1]
d = json.load(open(rf'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\{f}.json', encoding='utf-8'))
for k, v in d.items():
    if k != 'correlates': continue
    for it in v:
        if it['name'] in sys.argv[2:]:
            print(f'### {f}: {it["name"]}')
            for fld, val in it.items():
                if fld != 'name': print(f'  {fld}: {val}')
