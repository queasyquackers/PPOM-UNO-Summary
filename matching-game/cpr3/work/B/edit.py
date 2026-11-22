"""usage: edit.py partNN.json  -- reads replacement pairs from stdin as JSON [[old,new],...]"""
import json, sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()
pairs = json.load(sys.stdin)
for old, new in pairs:
    n = s.count(old)
    if not n:
        print('NOT FOUND:', old[:60]); continue
    s = s.replace(old, new)
    print(f'replaced x{n}:', old[:50])
json.loads(s)
open(p, 'w', encoding='utf-8').write(s)
