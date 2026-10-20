"""Usage: python -I vset.py "<item name>" <field> "<new text>"  - set one field in fragments/C.json ('-' removes it).
For avoid: field 'avoid' with JSON text."""
import json, os, sys
sys.stdout.reconfigure(encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', '..', 'fragments', 'C.json')
name, field, text = sys.argv[1:4]
with open(OUT, encoding='utf-8') as fh:
    data = json.load(fh)
hit = [it for it in data['correlates'] if it['name'] == name]
assert len(hit) == 1, f'no unique item {name!r}'
if text == '-':
    hit[0].pop(field, None)
elif field in ('avoid', 'lectures'):
    hit[0][field] = json.loads(text)
else:
    hit[0][field] = text
with open(OUT, 'w', encoding='utf-8') as fh:
    json.dump(data, fh, ensure_ascii=False, indent=1)
print(name, field, len(text))
