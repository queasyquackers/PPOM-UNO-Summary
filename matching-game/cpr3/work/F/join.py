import glob, json, os
H = os.path.dirname(os.path.abspath(__file__))
out = {"correlates": []}
for p in sorted(glob.glob(os.path.join(H, 'part*.json'))):
    with open(p, encoding='utf-8') as fh:
        out["correlates"] += json.load(fh)["correlates"]
dst = os.path.join(H, '..', '..', 'fragments', 'F.json')
with open(dst, 'w', encoding='utf-8') as fh:
    json.dump(out, fh, indent=1, ensure_ascii=False)
print(len(out["correlates"]), 'correlates ->', os.path.normpath(dst))
