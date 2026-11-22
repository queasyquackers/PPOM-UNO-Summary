# usage: python show.py FRAG start end   -> print items compactly
import json, sys
sys.stdout.reconfigure(encoding='utf-8')
f, a, b = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
d = json.load(open(rf'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\{f}.json', encoding='utf-8'))
items = [(k, it) for k, v in d.items() for it in v]
for i, (k, it) in enumerate(items[a:b], a):
    print(f'### [{i}] {k}: {it["name"]}')
    for fld, val in it.items():
        if fld == 'name': continue
        print(f'  {fld}: {val}')
