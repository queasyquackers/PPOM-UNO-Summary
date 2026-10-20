import json, sys
MAX = {'presentation': 280, 'workup': 240, 'management': 240, 'micro': 240, 'disease': 70}
for p in sys.argv[1:]:
    d = json.load(open(p, encoding='utf-8'))
    for cat, items in d.items():
        for i, it in enumerate(items):
            out = []
            for f, m in MAX.items():
                if f in it:
                    n = len(it[f]); flag = ' !!' if n > m else ''
                    out.append(f'{f[:4]}={n}{flag}')
            print(f'{p[-11:]} {cat[:3]} {i} {it["name"][:38]:38s} ' + ' '.join(out))
