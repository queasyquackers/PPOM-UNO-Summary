"""Gate a CPR Block 3 matching-game fragment (or the merged dataset).

    python qa.py fragments/C.json            # one agent's fragment
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

# Non-OMM CPR Block 3 lectures with a summary. OMM (113-115, 122-125, 133-135,
# 154) is out of scope; 158 has no transcript and no summary. 144 was
# summarized from its slides alone (no transcript exists).
LECTURES = {116, 117, 118, 119, 120, 121, 126, 127, 128, 129, 130, 131, 132,
            136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
            150, 151, 152, 153, 155, 156, 157, 159, 160, 161, 162, 163}
GROUPS = {'Antimycobacterials', 'Antivirals', 'Antimicrobials', 'Airway',
          'Kidney & bladder', 'Acid-base', 'Sleep', 'Oncology'}

SCHEMA = {
    'bugs': {'required': ['name', 'disease', 'micro', 'presentation', 'lecture'],
             'cards': ['micro', 'presentation', 'disease'],
             'recognition': ['presentation']},
    'drugs': {'required': ['name', 'groups', 'lecture'],
              'cards': ['mechanism', 'adverseEffects', 'use'],
              'min_cards': 2,
              'recognition': []},
    'correlates': {'required': ['name', 'presentation', 'lecture'],
                   'cards': ['presentation', 'workup', 'management'],
                   'recognition': ['presentation', 'workup']},
    # Gene cards are short and share words ("mutation", "loss"), so overlap
    # scoring is noise; exact and nested duplicates are still caught.
    'genes': {'required': ['name', 'gene', 'lecture'],
              'cards': ['card', 'role'],
              'recognition': [],
              'near_dup': False},
    # Biopsy cards legitimately repeat ("no immune deposits"); the engine never
    # deals two equal cards onto one board, so exact repeats only WARN here.
    'glomerular': {'required': ['name', 'lightMicro', 'lecture'],
                   'cards': ['lightMicro', 'immunofluor', 'electronMicro', 'clue'],
                   'recognition': ['lightMicro', 'immunofluor', 'electronMicro', 'clue'],
                   'dup_is_warn': True},
}
MAXLEN = {'card': 90, 'role': 160, 'presentation': 280, 'workup': 240, 'management': 240,
          'micro': 240, 'mechanism': 240, 'adverseEffects': 240, 'use': 200, 'disease': 70,
          'lightMicro': 200, 'immunofluor': 160, 'electronMicro': 160, 'clue': 220}

# Named signs, eponymous findings, stock metaphors and the giveaway labels of
# this block. A recognition card has to be solvable from raw findings, so the
# label for a finding never appears - describe what is seen, heard or measured.
BUZZ = [
    # carried over from CPR 2
    r'janeway', r'osler', r'roth spot', r'kussmaul', r'beck.s', r'chvostek', r'trousseau',
    r'homans?\b', r'kerley', r'hampton', r'westermark', r'virchow', r'cushing',
    r'boot[- ]shaped', r'egg[- ]on[- ]a[- ]string', r'machinery', r'water[- ]hammer',
    r'tearing', r'ripping', r'pulsus', r'tripod', r'steeple', r'thumb sign', r'thumbprint',
    r'barking', r'seal[- ]like', r'strawberry', r'currant', r'rice[- ]water', r'apple[- ]green',
    r'sulfur granule', r'tree[- ]in[- ]bud', r'honeycomb', r'bat[- ]?wing', r'butterfly',
    r'\bmalar\b', r'tombstone', r'saddle embol', r'nutmeg', r'bread[- ]and[- ]butter',
    r'onion[- ]skin', r'flea[- ]bitten', r'cobblestone', r'tram[- ]track', r'barrel chest',
    r'pink puffer', r'blue bloater', r'pathognomonic', r'classic', r'rose spots?',
    r'target lesion', r'bull.?s[- ]eye', r'splinter hemorrhage',
    # pulmonary
    r'samter', r'curschmann', r'charcot', r'creola', r'reid index', r'hamman', r'velcro',
    r'hoover', r'asteroid bod', r'schaumann', r'l[oö]fgren', r'heerfordt', r'birbeck',
    r'tennis[- ]racket', r'eggshell', r'ferruginous', r'asbestos', r'silica\b', r'beryllium',
    r'pancoast', r'horner', r'lambert', r'eaton', r'deep sulcus', r'silhouette sign',
    r'continuous diaphragm', r'spinnaker', r'air[- ]crescent', r'fungus ball', r'monod',
    r'crazy[- ]paving', r'ground[- ]glass halo', r'halo sign', r'reverse halo',
    r'water[- ]bottle', r'spine sign', r'sail sign', r'naclerio', r'golden s',
    # infectious
    r'\bghon', r'ranke', r'simon focus', r"\bpott'?s?\b", r'scrofula', r'rasmussen', r'millet',
    r'lady windermere', r'woolsorter', r'valley fever', r'desert rheumatism', r'ohio river',
    r'whoop', r'hundred[- ]day', r'100[- ]day', r'\brust', r'pseudomembran', r'bull neck',
    r'bubo', r'koplik', r'slapped', r'sandpaper', r'pastia', r'hot[- ]potato',
    r'breakbone', r'four corners', r'grape', r'cave disease', r'black eschar',
    r'india ink', r'owl.s eye', r'walking pneumonia', r'atypical pneumonia',
    r'legionnaire', r'pontiac', r'red man', r'lemierre', r'quinsy',
    # renal and GU
    r'kimmelstiel', r'armanni', r'spike[- ]and[- ]dome', r'lumpy[- ]bumpy', r'wire[- ]loop',
    r'starry', r'basket[- ]weave', r'full[- ]house', r'maltese', r'coffin', r'envelope',
    r'dumbbell', r'\bcola\b', r'smoky', r'tea[- ]colou?red', r'thyroidi[sz]ation',
    r'michaelis', r'gutmann', r'hansemann', r'homer[- ]wright', r'stauffer', r'potter\b', r'potter.s',
    r'wagr', r'denys', r'drash', r'beckwith', r'bell[- ]clapper', r'blue[- ]dot', r'prehn',
    r'bag of worms', r'berger', r'goodpasture', r'nutcracker',
    r'string of beads', r'beaded', r'cannonball', r'staghorn',
]
BUZZ_RE = re.compile('|'.join(BUZZ), re.I)

# Words too generic to count as the answer leaking into its own card.
GENERIC = set('''
a an the and or of in on with to for from by at as is are be its into via
acute chronic syndrome disease disorder deficiency type familial congenital primary
secondary heart cardiac pulmonary lung lungs renal kidney vascular artery arterial venous
left right high low induced associated related due after post pre infection infections
infective failure injury pain cell cells blood total early late new old drug drugs
toxicity overdose state small large i ii iii iv v vi system severe mild stable
pneumonia urinary tract bacterial viral fungal disseminated invasive simple uncomplicated
complicated adult child childhood pediatric infant infants neonatal community hospital
acquired variant with without from tumor tumors carcinoma cancer lesion obstruction
cough
'''.split())


def tokens(s):
    return set(t for t in re.findall(r'[a-z][a-z0-9]+', s.lower()) if t not in GENERIC and len(t) > 3)


def stem_tokens(name):
    """Distinctive tokens of an answer's name: drop parentheticals' brackets but keep the words."""
    return tokens(re.sub(r'[()/,]', ' ', name))


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


def gene_card(it):
    chrom = it.get('chromosome')
    return f"{it.get('gene')} · chromosome {chrom}" if chrom else str(it.get('gene'))


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
                it.setdefault('card', gene_card(it))
            for r in spec['required']:
                if not it.get(r):
                    fails.append(f'{cat}/{nm}: missing {r}')
            have = [f for f in spec['cards'] if it.get(f)]
            if len(have) < spec.get('min_cards', 1):
                fails.append(f'{cat}/{nm}: needs at least {spec["min_cards"]} of {spec["cards"]}')
            lec = str(it.get('lecture', ''))
            m = re.fullmatch(r'CV(\d+)', lec)
            if not m or int(m.group(1)) not in LECTURES:
                fails.append(f'{cat}/{nm}: lecture "{lec}" is not a non-OMM CPR 3 lecture')
            for extra in it.get('lectures', []):
                m2 = re.fullmatch(r'CV(\d+)', str(extra))
                if not m2 or int(m2.group(1)) not in LECTURES:
                    fails.append(f'{cat}/{nm}: lectures entry "{extra}" invalid')
            if it.get('lectures') and lec not in it['lectures']:
                fails.append(f'{cat}/{nm}: primary lecture {lec} missing from "lectures"')
            if cat == 'drugs':
                bad = [g for g in it.get('groups', []) if g not in GROUPS]
                if bad or not isinstance(it.get('groups'), list) or not it.get('groups'):
                    fails.append(f'drugs/{nm}: groups must be a non-empty list drawn from {sorted(GROUPS)}')
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
                if cat == 'genes' and f == 'card':
                    leak = []                # the gene card is the gene, not the disease
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
                    if cat == 'genes' and f == 'card' and a.get('gene') == b.get('gene'):
                        continue            # one gene, several diseases: the engine dedups the board
                    if cat == 'drugs' and not set(a.get('groups', [])) & set(b.get('groups', [])):
                        continue            # never on one board unless both classes are picked
                    na, nb = va.lower(), vb.lower()
                    if na == nb or na in nb or nb in na:
                        if avoided(a, b, f):
                            continue
                        msg = f'{cat}.{f}: "{a["name"]}" and "{b["name"]}" are the same card'
                        (warns if spec.get('dup_is_warn') else fails).append(msg)
                        continue
                    jac = jaccard(va, vb)
                    if spec.get('near_dup', True) and jac >= 0.5 and not avoided(a, b, f):
                        warns.append(f'{cat}.{f}: "{a["name"]}" ~ "{b["name"]}" (overlap {jac:.2f})')
        # Duplicate answers.
        seen = {}
        for it in items:
            if cat in ('bugs', 'genes'):
                key = (it.get('name', '').lower(), it.get('disease', it.get('gene', '')).lower())
            else:
                key = it.get('name', '').lower()
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
