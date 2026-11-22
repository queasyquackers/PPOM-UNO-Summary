"""Join partNN.json into fragments/G.json and build a temporary A-G merge for qa.

    python join.py
"""
import glob
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
FRAG = os.path.join(HERE, '..', '..', 'fragments')
ORDER = ['bugs', 'drugs', 'correlates', 'glomerular', 'genes']

out = {}
for p in sorted(glob.glob(os.path.join(HERE, 'part*.json'))):
    for k, v in json.load(open(p, encoding='utf-8')).items():
        out.setdefault(k, []).extend(v)
out = {k: out[k] for k in ORDER if k in out}
with open(os.path.join(FRAG, 'G.json'), 'w', encoding='utf-8') as fh:
    json.dump(out, fh, ensure_ascii=False, indent=1)
print('G.json:', {k: len(v) for k, v in out.items()})

merged = {}
for f in 'ABCDEFG':
    for k, v in json.load(open(os.path.join(FRAG, f + '.json'), encoding='utf-8')).items():
        merged.setdefault(k, []).extend(v)
with open(os.path.join(HERE, 'merged_tmp.json'), 'w', encoding='utf-8') as fh:
    json.dump(merged, fh, ensure_ascii=False, indent=1)
print('merged_tmp.json:', {k: len(v) for k, v in merged.items()})
