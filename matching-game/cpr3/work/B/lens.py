import json, sys
for p in sys.argv[1:]:
    for it in json.load(open(p, encoding='utf-8'))['bugs']:
        print(f"{len(it['micro']):4d} {len(it['presentation']):4d} {len(it['disease']):3d}  {it['name']} | {it['disease']}")
