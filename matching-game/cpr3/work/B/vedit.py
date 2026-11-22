"""Apply verifier patches to B.json and append them to verify_log.md.

    python vedit.py patchNN.json

patch file: [{"i": 0, "field": "presentation", "new": ..., "reason": "...", "src": "..."}, ...]
"new": null deletes the field. The current value must not have been changed by hand.
"""
import json, sys
sys.stdout.reconfigure(encoding='utf-8')
P = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\B.json'
LOG = r'E:\PPOM-UNO-Summary\matching-game\cpr3\work\B\verify_log.md'
d = json.load(open(P, encoding='utf-8'))
patches = json.load(open(sys.argv[1], encoding='utf-8'))
lines = []
for p in patches:
    it = d['bugs'][p['i']]
    f = p['field']
    before = it.get(f)
    if p['new'] is None:
        it.pop(f, None)
    else:
        it[f] = p['new']
    lines.append(f"- #{p['i']} {it['name']} / {it['disease'] if f != 'disease' else before} - **{f}**\n"
                 f"  - before: {json.dumps(before, ensure_ascii=False)}\n"
                 f"  - after: {json.dumps(p['new'], ensure_ascii=False)}\n"
                 f"  - reason: {p['reason']} (source: {p['src']})\n")
    if isinstance(p['new'], str) and f in ('presentation', 'micro'):
        print(p['i'], f, len(p['new']))
json.dump(d, open(P, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
open(P, 'a', encoding='utf-8').write('\n')
with open(LOG, 'a', encoding='utf-8') as fh:
    fh.write(''.join(lines))
print('applied', len(patches))
