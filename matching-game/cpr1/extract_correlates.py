"""Harvest the ::correlate:: blocks out of the CV lecture files into fragments.

Every lecture summary already carries its clinical correlates as a structured
block with Pathophysiology / Presentation / Treatment fields - the same three
attributes the game matches against - so this category needs no hand-authoring.
Writes one fragments/cv##.json per lecture, merging into whatever hand-authored
categories that fragment already holds.
"""
import json
import os
import re
import glob

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
FRAG = os.path.join(HERE, 'fragments')

# Field aliases: the lectures use a few spellings for the same three slots.
ALIASES = {
    'presentation': ['Presentation', 'Presentation/Diagnosis', 'Presentation / Diagnosis',
                     'Presentation/Effect', 'Presentation/Complications', 'Diagnosis'],
    'pathophysiology': ['Pathophysiology', 'Pathophysiology/Rationale', 'Mechanism',
                        'Mechanism of the combination'],
    'treatment': ['Treatment', 'Treatment/Prevention', 'Treatment/Clinical use',
                  'Treatment mechanism', 'Treatment/Testing'],
}
MAX = 260  # card text beyond this wraps badly on a phone


def clean(t):
    t = re.sub(r'\[Lecturer Emphasis\]', '', t)
    t = re.sub(r'\*\*|\*|`', '', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t.strip(' .;,') + '.' if t and not t.endswith('.') else t


def trim(t):
    """Keep whole sentences up to MAX chars so a card never ends mid-clause."""
    if len(t) <= MAX:
        return t
    out = ''
    for sent in re.split(r'(?<=[.!?]) ', t):
        if out and len(out) + len(sent) + 1 > MAX:
            break
        out = (out + ' ' + sent).strip()
    if len(out) > MAX:                           # one enormous sentence
        head = out[:MAX]
        cut = max(head.rfind('; '), head.rfind(', '))
        out = (head[:cut] if cut > MAX // 2 else head.rsplit(' ', 1)[0]) + '…'
    return out


def parse_block(body):
    lines = body.strip().split('\n')
    name = clean(lines[0]).rstrip('.')
    fields = {}
    cur = None
    for line in lines[1:]:
        m = re.match(r"\s*-\s+\*\*([^:*]+):\*\*\s*(.*)", line)
        if m:
            cur = m.group(1).strip()
            fields[cur] = m.group(2)
        elif cur and line.strip():
            fields[cur] += ' ' + line.strip()
    item = {'name': name}
    for slot, names in ALIASES.items():
        for n in names:
            if fields.get(n):
                item[slot] = trim(clean(fields[n]))
                break
    return item if name and len(item) > 1 else None


total = 0
for path in sorted(glob.glob(os.path.join(ROOT, 'content', 'json', 'cv*.file.js')),
                   key=lambda p: int(re.search(r'cv(\d+)', p).group(1))):
    lec = re.search(r'cv(\d+)', path).group(1)
    label = 'CV' + lec
    src = open(path, encoding='utf-8').read()
    items = []
    for body in re.findall(r':::correlate\n(.*?)\n\s*:::', src, re.S):
        item = parse_block(body)
        if item:
            item['lecture'] = label
            items.append(item)
    if not items:
        continue
    out_path = os.path.join(FRAG, f'cv{lec}.json')
    frag = {}
    if os.path.exists(out_path):
        with open(out_path, encoding='utf-8') as fh:
            frag = json.load(fh)
    frag['correlates'] = items          # regenerated wholesale; other cats untouched
    with open(out_path, 'w', encoding='utf-8') as fh:
        json.dump(frag, fh, indent=2, ensure_ascii=False)
    total += len(items)
    print(f'{label}: {len(items)}')

print('total correlates:', total)
