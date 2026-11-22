"""Verifier edit helper: apply a batch of edits to fragments/E.json.

Usage: python vedit.py batchN.json
batch file: list of {"cat": "correlates"|"glomerular", "name": ..., "field": ...,
                     "value": <new value or null to delete>}
"""
import json
import sys

FRAG = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\E.json'

edits = json.load(open(sys.argv[1], encoding='utf-8'))
data = json.load(open(FRAG, encoding='utf-8'))
for e in edits:
    items = [x for x in data[e['cat']] if x['name'] == e['name']]
    if len(items) != 1:
        raise SystemExit('not found / ambiguous: %r' % e)
    it = items[0]
    if e.get('rename'):
        it['name'] = e['rename']
        continue
    if e['value'] is None:
        it.pop(e['field'], None)
    else:
        it[e['field']] = e['value']
    print('ok', e['cat'], e['name'], e['field'])
json.dump(data, open(FRAG, 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
open(FRAG, 'a', encoding='utf-8').write('\n')
