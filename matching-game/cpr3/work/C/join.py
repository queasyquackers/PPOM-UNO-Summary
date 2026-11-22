import glob, json, os, sys
here = os.path.dirname(os.path.abspath(__file__))
out = {"correlates": []}
for p in sorted(glob.glob(os.path.join(here, 'part*.json'))):
    with open(p, encoding='utf-8') as fh:
        d = json.load(fh)
    out["correlates"].extend(d["correlates"])
dst = os.path.join(here, '..', '..', 'fragments', 'C.json')
with open(dst, 'w', encoding='utf-8') as fh:
    json.dump(out, fh, ensure_ascii=False, indent=1)
print(len(out["correlates"]), 'items ->', os.path.normpath(dst))
for it in out["correlates"]:
    for f in ('presentation', 'workup', 'management'):
        v = it.get(f)
        lim = 280 if f == 'presentation' else 240
        if v and len(v) > lim - 10:
            print('  near/over limit', it['name'], f, len(v))
