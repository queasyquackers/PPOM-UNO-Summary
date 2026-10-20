"""usage: python setf.py part.json "Item name" field  (new value read from stdin)"""
import json, sys
p, name, field = sys.argv[1:4]
val = sys.stdin.read().strip()
d = json.load(open(p, encoding='utf-8'))
hit = [it for it in d['correlates'] if it['name'] == name]
assert hit, 'no such item'
hit[0][field] = val
json.dump(d, open(p, 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
print(name, field, len(val))
