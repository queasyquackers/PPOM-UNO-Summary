"""Quick check of one part: field lengths + qa.py's rules on that part alone.

    python chk.py part01.json
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, '..', '..'))
import qa  # noqa: E402

sys.stdout.reconfigure(encoding='utf-8')
for p in sys.argv[1:]:
    data = json.load(open(os.path.join(HERE, p), encoding='utf-8'))
    for cat, items in data.items():
        for it in items:
            lens = {k: len(v) for k, v in it.items() if isinstance(v, str) and k in qa.MAXLEN}
            over = {k: n for k, n in lens.items() if n > qa.MAXLEN[k]}
            print(f'{cat}/{it["name"]}: {lens}' + (f'  OVER {over}' if over else ''))
    fails, warns = qa.check(data, p)
    for w in warns:
        print('  WARN', w)
    for f in fails:
        print('  FAIL', f)
    print(f'  {len(fails)} FAIL, {len(warns)} WARN')
