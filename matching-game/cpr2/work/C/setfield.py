"""Usage: python setfield.py partNN.json "<item name>" <field> "<new text>"  - replace one field."""
import json, sys
path, name, field, text = sys.argv[1:5]
with open(path, encoding='utf-8') as fh:
    data = json.load(fh)
hit = [it for it in data['correlates'] if it['name'] == name]
assert len(hit) == 1, f'no unique item {name!r}'
if text == '-':
    hit[0].pop(field, None)
else:
    hit[0][field] = text
with open(path, 'w', encoding='utf-8') as fh:
    fh.write('{"correlates": [\n')
    fh.write(',\n'.join(json.dumps(it, ensure_ascii=False) for it in data['correlates']))
    fh.write('\n]}\n')
print(name, field, len(text))
