"""Run qa.check on D's correlates merged with every other fragment's correlates; print lines that mention a D item."""
import json, os, sys, glob
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, '..', '..'))
import qa
frag = os.path.join(HERE, '..', '..', 'fragments')
mine = json.load(open(os.path.join(frag, 'D.json'), encoding='utf-8'))['correlates']
names = {it['name'] for it in mine}
allc = list(mine)
for p in glob.glob(os.path.join(frag, '*.json')):
    if p.endswith('D.json'):
        continue
    try:
        d = json.load(open(p, encoding='utf-8'))
    except Exception as e:
        print('skip', p, e); continue
    for it in d.get('correlates', []):
        it = dict(it); it['_src'] = os.path.basename(p)
        allc.append(it)
print('other correlates:', len(allc) - len(mine))
fails, warns = qa.check({'correlates': allc}, 'merged')
for line in fails + warns:
    if any(f'"{n}"' in line or f'/{n}:' in line for n in names):
        print(line)
# name collisions
others = [it['name'].lower() for it in allc[len(mine):]]
for n in names:
    if n.lower() in others:
        print('NAME COLLISION', n)
