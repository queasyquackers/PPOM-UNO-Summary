import json, glob
# sets.json: [[name, field, new_value], ...]
sets = json.load(open('sets.json', encoding='utf-8'))
done = set()
for p in sorted(glob.glob('part*.json')):
    d = json.load(open(p, encoding='utf-8')); ch = False
    for it in d['correlates']:
        for nm, f, new in sets:
            if it['name'] == nm:
                it[f] = new; ch = True; done.add((nm, f))
                print(f'{nm} | {f} | {len(new)}' + ('  <-- TOO LONG' if len(new) > (280 if f == 'presentation' else 240) else ''))
    if ch:
        json.dump(d, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for nm, f, _ in sets:
    if (nm, f) not in done: print('NOT FOUND', nm, f)
