"""Join part*.json in this folder into fragments/A.json (keys: drugs, genes, correlates)."""
import glob
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', '..', 'fragments', 'A.json')

data = {'drugs': [], 'genes': [], 'correlates': []}
for p in sorted(glob.glob(os.path.join(HERE, 'part*.json'))):
    with open(p, encoding='utf-8') as fh:
        d = json.load(fh)
    for k, v in d.items():
        if k not in data:
            raise SystemExit(f'{p}: unexpected key {k}')
        data[k].extend(v)
data = {k: v for k, v in data.items() if v}
with open(OUT, 'w', encoding='utf-8') as fh:
    json.dump(data, fh, indent=2, ensure_ascii=False)
print(os.path.normpath(OUT), {k: len(v) for k, v in data.items()})
