"""Join part*.json in this folder into fragments/E.json (keys: correlates, glomerular)."""
import glob
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', '..', 'fragments', 'E.json')

out = {'correlates': [], 'glomerular': []}
for path in sorted(glob.glob(os.path.join(HERE, 'part*.json'))):
    with open(path, encoding='utf-8') as fh:
        data = json.load(fh)
    for k, v in data.items():
        if k not in out:
            raise SystemExit(f'{path}: unexpected key {k}')
        out[k].extend(v)

out = {k: v for k, v in out.items() if v}
with open(OUT, 'w', encoding='utf-8') as fh:
    json.dump(out, fh, ensure_ascii=False, indent=1)
print({k: len(v) for k, v in out.items()}, '->', os.path.normpath(OUT))
