"""Merge the 4 extraction fragments into one deduped matching-game dataset."""
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
FRAG = os.path.join(HERE, 'fragments')

parts = []
for f in ['part1.json', 'part2.json', 'part3.json', 'part4.json']:
    with open(os.path.join(FRAG, f), encoding='utf-8') as fh:
        parts.append(json.load(fh))

# Part-specific entries to drop (part index 0-based). Superseded elsewhere.
drops = [
    (1, 'bugs', 'Trypanosoma brucei'),                # subspecies covered in L173
    (2, 'bugs', 'Dermatophytes (Trichophyton)'),      # L186 has Trichophyton rubrum
    (2, 'bugs', 'Malassezia furfur'),                 # keep L186 tinea-versicolor version
    (1, 'drugs', 'NRTIs (Zidovudine, Tenofovir)'),    # individual ARVs in L184/L185
    (1, 'drugs', 'NNRTIs (Efavirenz)'),
    (1, 'drugs', 'Protease Inhibitors (-navir)'),
    (1, 'drugs', 'Integrase Inhibitors (-tegravir)'),
    (1, 'drugs', 'Tenofovir/Emtricitabine (PrEP)'),
    (1, 'drugs', 'Doxycycline (antimalarial use)'),   # general Doxycycline kept
    (0, 'drugs', 'Tranexamic acid'),                  # merged into Aminocaproic/Tranexamic
]

# Rename to canonical names so dedup catches aliases.
renames = {
    'Group A Streptococcus': 'Streptococcus pyogenes',
    'Human immunodeficiency virus (HIV-1)': 'HIV (Human Immunodeficiency Virus)',
}


def norm(s):
    s = s.lower()
    s = re.sub(r'\([^)]*\)', '', s)
    s = re.sub(r'[^a-z0-9 ]', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()


out = {'bugs': [], 'drugs': [], 'correlates': []}
dropped = deduped = 0

for cat in out:
    seen = set()
    for pi, p in enumerate(parts):
        for item in p.get(cat, []):
            if (pi, cat, item['name']) in [(d[0], d[1], d[2]) for d in drops]:
                dropped += 1
                continue
            if item['name'] in renames:
                item['name'] = renames[item['name']]
            key = norm(item['name'])
            if key in seen:
                deduped += 1
                continue
            seen.add(key)
            out[cat].append(item)
    out[cat].sort(key=lambda x: x['name'].lower())
    for i, item in enumerate(out[cat]):
        item['id'] = cat[0] + str(i + 1)

with open(os.path.join(HERE, 'matching_data.json'), 'w', encoding='utf-8') as fh:
    json.dump(out, fh, indent=2, ensure_ascii=False)

print('bugs:', len(out['bugs']), 'drugs:', len(out['drugs']),
      'correlates:', len(out['correlates']))
print('dropped:', dropped, 'deduped:', deduped)
