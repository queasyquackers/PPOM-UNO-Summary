"""Gate a CPR Block 2 matching-game fragment (or the merged dataset).

    python qa.py fragments/B.json            # one agent's fragment
    python qa.py matching_data.json          # the merged dataset
    python qa.py --all                       # every fragment in fragments/

FAIL lines must be fixed. WARN lines are for a human read: most are fine, but
each near-duplicate pair is a place two cards could both look right in one
round - either sharpen the wording or declare the pair in "avoid".

The rules mirror AUTHORING_BRIEF.md: no buzzwords or named signs in the
recognition cards, the answer's own name never leaks into its card, cards fit
on a phone, and no two cards in one category/attribute say the same thing.
"""
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))

LECTURES = {58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 71, 72, 73, 74, 75, 76, 77, 78,
            82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
            104, 105, 106, 107, 108, 109, 110, 111, 112}
GROUPS = {'Antiarrhythmics', 'Angina', 'Heart failure', 'Lipid-lowering'}

SCHEMA = {
    'bugs': {'required': ['name', 'disease', 'micro', 'presentation', 'lecture'],
             'cards': ['micro', 'presentation', 'disease'],
             'recognition': ['presentation']},
    'drugs': {'required': ['name', 'groups', 'mechanism', 'adverseEffects', 'lecture'],
              'cards': ['mechanism', 'adverseEffects'],
              'recognition': []},
    'correlates': {'required': ['name', 'presentation', 'lecture'],
                   'cards': ['presentation', 'workup', 'management'],
                   'recognition': ['presentation', 'workup']},
    # Gene cards share the word "chromosome", so overlap scoring would be noise;
    # exact and nested duplicates are still caught.
    'genes': {'required': ['name', 'gene', 'chromosome', 'lecture'],
              'cards': ['card'],
              'recognition': [],
              'near_dup': False},
}
MAXLEN = {'card': 80, 'presentation': 280, 'workup': 240, 'management': 240, 'micro': 240,
          'mechanism': 240, 'adverseEffects': 240, 'disease': 70}

# Named signs, eponymous findings and stock metaphors. A recognition card has
# to be solvable from raw findings, so the label for a finding never appears -
# describe what the examiner sees, hears or measures instead.
BUZZ = [
    r'janeway', r'osler', r'roth spot', r'kussmaul', r'beck', r'austin[- ]flint',
    r'duroziez', r'de musset', r'quincke', r'corrigan', r'traube', r'carvallo',
    r'graham[- ]steell', r'chvostek', r'trousseau', r'homans?\b', r'levine', r'kerley',
    r'hampton', r'westermark', r'wellens', r'osborn', r'delta wave', r'epsilon wave',
    r'j wave', r'u wave', r'brugada', r'virchow', r'cushing', r'kussmaul',
    r'boot[- ]shaped', r'egg[- ]on[- ]a[- ]string', r'snowman', r'figure[- ]of[- ](8|eight)',
    r'\b3 sign', r'machinery', r'water[- ]hammer', r'tearing', r'ripping',
    r'pulsus', r'parvus', r'tardus', r'alternans', r'tet spell', r'tripod',
    r'steeple', r'thumb sign', r'thumbprint', r'barking', r'seal[- ]like', r'strawberry',
    r'currant', r'rice[- ]water', r'apple[- ]green', r'sulfur granule', r'tree[- ]in[- ]bud',
    r'honeycomb', r'string of beads', r'bat[- ]?wing', r'butterfly', r'\bmalar\b',
    r'opening snap', r'tumor plop', r'fixed[- ]split', r'paradoxical(ly)? split',
    r'pericardial knock', r'heartbreak', r'broken heart', r'blue baby', r'tombstone',
    r'saddle embol', r'shark[- ]?fin', r'sawtooth', r'saw[- ]tooth', r'irregularly irregular',
    r'flutter waves', r'f waves', r'coved', r'rabbit ears?', r'bunny ears?',
    r'harlequin', r'gallavardin', r'still.s murmur', r'venous hum', r'cannon a', r'cannon wave',
    r'pistol[- ]shot', r'bounding', r'chest pain radiating to the back',
    r'worst (head|chest)', r'honk', r'crunch', r'hamman', r'mediastinal crunch',
    r'flea[- ]bitten', r'nutmeg', r'bread[- ]and[- ]butter', r'shaggy', r'onion[- ]skin',
    r'cobblestone', r'chicken[- ]wire', r'zebra', r'myxomatous', r'vegetation',
    r'tram[- ]track', r'barrel chest', r'pink puffer',
    r'blue bloater', r'cyanotic spells?', r'squatting', r'pathognomonic', r'classic',
    r'rose spots?', r'target lesion', r'erythema chronicum', r'bull.?s[- ]eye',
    r'erythema marginatum', r'sydenham', r'aschoff', r'anitschkow', r'caterpillar',
    r'splinter hemorrhage', r'mcconnell',
]
BUZZ_RE = re.compile('|'.join(BUZZ), re.I)

# Words too generic to count as the answer leaking into its own card.
GENERIC = set('''
a an the and or of in on with to for from by at as is are be its into via
acute chronic syndrome disease disorder deficiency type familial congenital primary
secondary heart cardiac pulmonary lung renal kidney vascular artery arterial venous
left right high low induced associated related due after post pre infection
infective failure injury pain cell cells blood total early late new old drug
toxicity overdose state small large i ii iii iv v vi system severe mild stable
'''.split())


def tokens(s):
    return set(t for t in re.findall(r'[a-z][a-z0-9]+', s.lower()) if t not in GENERIC and len(t) > 3)


def stem_tokens(name):
    """Distinctive tokens of an answer's name: drop parentheticals' brackets but keep the words."""
    return tokens(re.sub(r'[()/]', ' ', name))


def jaccard(a, b):
    ta, tb = tokens(a), tokens(b)
    if not ta or not tb:
        return 0.0
    return len(ta & tb) / len(ta | tb)


def avoided(a, b, field):
    for x, y in ((a, b), (b, a)):
        av = x.get('avoid')
        if isinstance(av, list) and y['name'] in av:
            return True
        if isinstance(av, dict) and y['name'] in av.get(field, []):
            return True
    return False


def check(data, label):
    fails, warns = [], []
    for cat, items in data.items():
        if cat not in SCHEMA:
            fails.append(f'{label}: unknown category "{cat}"')
            continue
        spec = SCHEMA[cat]
        for it in items:
            nm = it.get('name', '?')
            if cat == 'genes':
                it.setdefault('card', f"{it.get('gene')} · chromosome {it.get('chromosome')}")
            for r in spec['required']:
                if not it.get(r):
                    fails.append(f'{cat}/{nm}: missing {r}')
            lec = str(it.get('lecture', ''))
            m = re.fullmatch(r'CV(\d+)', lec)
            if not m or int(m.group(1)) not in LECTURES:
                fails.append(f'{cat}/{nm}: lecture "{lec}" is not a non-OMM CV55-112 lecture')
            for extra in it.get('lectures', []):
                m2 = re.fullmatch(r'CV(\d+)', str(extra))
                if not m2 or int(m2.group(1)) not in LECTURES:
                    fails.append(f'{cat}/{nm}: lectures entry "{extra}" invalid')
            if cat == 'drugs':
                bad = [g for g in it.get('groups', []) if g not in GROUPS]
                if bad or not isinstance(it.get('groups'), list):
                    fails.append(f'drugs/{nm}: groups must be a list drawn from {sorted(GROUPS)}')
            name_toks = stem_tokens(nm)
            if cat == 'bugs':
                # Genus and species both count; "Staphylococcus" leaks as "staph" too.
                name_toks |= {t[:5] for t in name_toks if len(t) > 6}
            for f in spec['cards']:
                v = it.get(f)
                if not v:
                    continue
                if not isinstance(v, str):
                    fails.append(f'{cat}/{nm}: {f} must be a string')
                    continue
                if len(v) > MAXLEN[f]:
                    fails.append(f'{cat}/{nm}: {f} is {len(v)} chars (max {MAXLEN[f]})')
                low = v.lower()
                leak = [t for t in name_toks if re.search(r'\b' + re.escape(t), low)]
                if leak and cat == 'bugs' and f == 'disease':
                    warns.append(f'bugs/{nm}: disease label is named after the bug {leak}')
                elif leak:
                    fails.append(f'{cat}/{nm}: {f} contains the answer\'s own name {leak}')
                if f in spec['recognition']:
                    b = [m.group(0) for m in BUZZ_RE.finditer(v)]
                    if b:
                        fails.append(f'{cat}/{nm}: {f} uses buzzword/named sign {sorted(set(map(str.lower, b)))}')
        # Duplicate / near-duplicate cards within one attribute.
        for f in spec['cards']:
            vals = [(it, it[f].strip()) for it in items if isinstance(it.get(f), str) and it[f].strip()]
            for i in range(len(vals)):
                for j in range(i + 1, len(vals)):
                    (a, va), (b, vb) = vals[i], vals[j]
                    if cat == 'bugs' and a['name'] == b['name']:
                        continue            # the same bug's ID card repeats by design
                    if cat == 'drugs' and not set(a.get('groups', [])) & set(b.get('groups', [])):
                        continue            # never on one board unless both classes are picked
                    na, nb = va.lower(), vb.lower()
                    if na == nb or na in nb or nb in na:
                        if not avoided(a, b, f):
                            fails.append(f'{cat}.{f}: "{a["name"]}" and "{b["name"]}" are the same card')
                        continue
                    jac = jaccard(va, vb)
                    if spec.get('near_dup', True) and jac >= 0.5 and not avoided(a, b, f):
                        warns.append(f'{cat}.{f}: "{a["name"]}" ~ "{b["name"]}" (overlap {jac:.2f})')
        # Duplicate answers.
        seen = {}
        for it in items:
            key = (it.get('name', '').lower(), it.get('disease', it.get('gene', '')).lower()) if cat in ('bugs', 'genes') else it.get('name', '').lower()
            if key in seen:
                fails.append(f'{cat}: duplicate entry "{it.get("name")}"')
            seen[key] = 1
        if cat == 'bugs':
            ds = {}
            for it in items:
                d = it.get('disease', '').lower()
                if d in ds:
                    fails.append(f'bugs: disease "{it.get("disease")}" used by both {ds[d]} and {it["name"]}')
                ds[d] = it['name']
    return fails, warns


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    args = sys.argv[1:]
    if args == ['--all']:
        args = sorted(glob.glob(os.path.join(HERE, 'fragments', '*.json')))
    if not args:
        raise SystemExit(__doc__)
    total_f = 0
    for path in args:
        with open(path, encoding='utf-8') as fh:
            data = json.load(fh)
        fails, warns = check(data, os.path.basename(path))
        counts = ' · '.join(f'{k} {len(v)}' for k, v in data.items())
        print(f'== {os.path.basename(path)}: {counts}')
        for w in warns:
            print('  WARN ' + w)
        for f in fails:
            print('  FAIL ' + f)
        print(f'  {len(fails)} FAIL, {len(warns)} WARN')
        total_f += len(fails)
    sys.exit(1 if total_f else 0)


if __name__ == '__main__':
    main()
