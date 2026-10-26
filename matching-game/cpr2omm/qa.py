"""Gate the CPR Block 2 OMM matching-game dataset.

    python qa.py                 # checks matching_data.json
    python qa.py <file.json>

FAIL lines must be fixed. WARN lines are for a human read. NOTE lines list cards
that are deliberately identical (two organs share a Chapman point, two muscles
share a stretch): the game never deals equal or nested cards onto one board, so
these are safe - but check that each group really is the same fact.

Rules mirror cpr2/AUTHORING_BRIEF.md where they apply: an item's card never
contains its own name, correlate presentations and workups carry no buzzwords
or named signs, cards fit on a phone, and no two different cards in one
attribute are near-duplicates that could both look right on one board.
"""
import importlib.util
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))

# Reuse the CPR2 buzzword list so both games hold the same line.
_spec = importlib.util.spec_from_file_location('cpr2qa', os.path.join(HERE, '..', 'cpr2', 'qa.py'))
_cpr2 = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_cpr2)
BUZZ_RE = _cpr2.BUZZ_RE

SCHEMA = {
    'chapman': {'required': ['name', 'region', 'anterior'], 'cards': ['anterior', 'posterior'],
                'filter': ('region', ['Head & neck', 'Chest', 'Upper abdomen', 'Lower GI',
                                      'GU & pelvis', 'Endocrine', 'Limbs'])},
    'crossed': {'required': ['name', 'syndrome', 'pattern'], 'cards': ['pattern', 'exercise'],
                'filter': ('syndrome', ['Upper crossed', 'Lower crossed'])},
    'outlet': {'required': ['name', 'kind', 'where', 'significance'], 'cards': ['where', 'significance'],
               'filter': ('kind', ['Spaces', 'Structures', 'Tests', 'Workup & treatment'])},
    'lymph': {'required': ['name', 'kind', 'fact'], 'cards': ['fact', 'clinical'],
              'filter': ('kind', ['Stages & mechanics', 'Bottlenecks', 'Lymph formation',
                                  'Inflammation', 'Treatment & disease'])},
    'correlates': {'required': ['name', 'presentation', 'mechanism', 'lecture'],
                   'cards': ['presentation', 'mechanism', 'workup', 'management'],
                   'recognition': ['presentation', 'workup']},
}
MAXLEN = {'presentation': 280}
DEFAULT_MAX = 240
LECTURES = {'CV55', 'CV69', 'CV79', 'CV80', 'CV101', 'CV102', 'CV101/102'}
# An outlet space is named after its borders, so its "where" card naming a
# border muscle is the fact itself, not a leak - flag it for a read only.
SOFT_LEAK = {('outlet', 'where')}
# Location and pattern cards are short and differ by design in one number or
# word ("Left 6th" vs "Right 6th"), so word overlap says nothing about them.
STRUCTURED = {('chapman', 'anterior'), ('chapman', 'posterior'), ('crossed', 'pattern')}

GENERIC = set('''
a an the and or of in on with to for from by at as is are be its into via
syndrome disease upper lower anterior posterior middle inner outer lateral medial
right left first second deep major minor test sign maneuver space spaces gland
transverse process processes spinous intercostal thigh complex fibers part
lymph lymphatic lymphatics drainage
'''.split())


def tokens(s):
    return set(t for t in re.findall(r'[a-z][a-z0-9]+', s.lower()) if t not in GENERIC and len(t) > 3)


def jaccard(a, b):
    ta, tb = tokens(a), tokens(b)
    return len(ta & tb) / len(ta | tb) if ta and tb else 0.0


def avoided(a, b, field):
    for x, y in ((a, b), (b, a)):
        av = x.get('avoid')
        if isinstance(av, list) and y['name'] in av:
            return True
        if isinstance(av, dict) and y['name'] in av.get(field, []):
            return True
    return False


def check(data):
    fails, warns, notes = [], [], []
    for cat, spec in SCHEMA.items():
        items = data.get(cat)
        if not items:
            fails.append(f'missing category "{cat}"')
            continue
        names = {}
        for it in items:
            nm = it.get('name', '?')
            if nm.lower() in names:
                fails.append(f'{cat}: duplicate entry "{nm}"')
            names[nm.lower()] = 1
            for r in spec['required']:
                if not it.get(r):
                    fails.append(f'{cat}/{nm}: missing {r}')
            if it.get('lecture') not in LECTURES:
                fails.append(f'{cat}/{nm}: lecture "{it.get("lecture")}" is not an in-scope OMM lecture')
            if 'filter' in spec:
                f, allowed = spec['filter']
                if it.get(f) not in allowed:
                    fails.append(f'{cat}/{nm}: {f} "{it.get(f)}" not in {allowed}')
            own = tokens(re.sub(r'[()/&-]', ' ', nm))
            for f in spec['cards']:
                v = it.get(f)
                if not v:
                    continue
                if len(v) > MAXLEN.get(f, DEFAULT_MAX):
                    fails.append(f'{cat}/{nm}: {f} is {len(v)} chars (max {MAXLEN.get(f, DEFAULT_MAX)})')
                # Long words match on a 7-letter stem (scalenes ~ scalene); short ones whole.
                leak = sorted(t for t in own if re.search(
                    r'\b' + (re.escape(t[:7]) if len(t) > 7 else re.escape(t) + r's?\b'), v.lower()))
                if leak:
                    (warns if (cat, f) in SOFT_LEAK else fails).append(
                        f'{cat}/{nm}: {f} contains its own name {leak}')
                if f in spec.get('recognition', []):
                    b = sorted(set(m.group(0).lower() for m in BUZZ_RE.finditer(v)))
                    if b:
                        fails.append(f'{cat}/{nm}: {f} uses buzzword/named sign {b}')
        for f in spec['cards']:
            vals = [(it, it[f].strip()) for it in items if it.get(f)]
            groups = {}
            for i in range(len(vals)):
                for j in range(i + 1, len(vals)):
                    (a, va), (b, vb) = vals[i], vals[j]
                    na, nb = va.lower(), vb.lower()
                    if na == nb or na in nb or nb in na:
                        groups.setdefault(min(na, nb, key=len), set()).update([a['name'], b['name']])
                        continue
                    if (cat, f) in STRUCTURED:
                        continue
                    jac = jaccard(va, vb)
                    if jac >= 0.5 and not avoided(a, b, f):
                        warns.append(f'{cat}.{f}: "{a["name"]}" ~ "{b["name"]}" (overlap {jac:.2f})')
            for card, who in groups.items():
                notes.append(f'{cat}.{f}: never share a board - {", ".join(sorted(who))}  [{card[:50]}]')
    return fails, warns, notes


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, 'matching_data.json')
    with open(path, encoding='utf-8') as fh:
        data = json.load(fh)
    fails, warns, notes = check(data)
    print('== ' + ' · '.join(f'{k} {len(v)}' for k, v in data.items()))
    for n in notes:
        print('  NOTE ' + n)
    for w in warns:
        print('  WARN ' + w)
    for f in fails:
        print('  FAIL ' + f)
    print(f'  {len(fails)} FAIL, {len(warns)} WARN, {len(notes)} NOTE')
    sys.exit(1 if fails else 0)


if __name__ == '__main__':
    main()
