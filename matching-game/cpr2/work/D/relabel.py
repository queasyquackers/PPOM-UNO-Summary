import json, glob, os
HERE = os.path.dirname(os.path.abspath(__file__))
NEW = {
 "Prosthetic valve infection in the first 2 months after surgery": "Early prosthetic valve endocarditis (within 2 months of surgery)",
 "Endocarditis that points to an occult colorectal tumor": "Endocarditis with an occult colorectal cancer",
 "Endocarditis after oral trauma that needs vitamin B6 to grow": "Culture-negative endocarditis after a tooth extraction",
 "Pacemaker-lead or prosthetic device endocarditis from skin rods": "Pacemaker-lead or prosthetic device endocarditis",
 "Foodborne bacteremia in pregnancy or immunosuppression": "Bacteremia in a pregnant or immunosuppressed adult",
 "Slow-growing gram-negative endocarditis in a non-drug user": "Gram-negative native-valve endocarditis in a non-drug user",
 "Culture-negative endocarditis after livestock exposure": "Q fever endocarditis",
 "Culture-negative endocarditis in a homeless person with body lice": "Trench fever with endocarditis",
 "Severe atypical lung infection spread by contaminated water systems": "Severe atypical pneumonia in an older smoker",
 "Water-borne gram-negative endocarditis in injection drug use": "Gram-negative endocarditis in a person who injects drugs",
 "Chronic mucoid airway infection in cystic fibrosis": "Chronic airway infection in cystic fibrosis",
 "Fungal endocarditis in heroin users who dissolve drug in lemon juice": "Fungal endocarditis in a person who injects drugs",
 "Post-surgical endocarditis with sterile cultures and large emboli": "Fungal endocarditis after cardiac surgery",
 "Acute Chagas disease (swelling at the inoculation site)": "Acute Chagas disease",
 "Chronic Chagas cardiomyopathy with megaesophagus and megacolon": "Chronic Chagas cardiomyopathy",
 "Lyme carditis with rapidly fluctuating AV block": "Lyme carditis",
 "Toxin-mediated myocarditis after membranous pharyngitis": "Myocarditis complicating membranous pharyngitis",
 "Epidemic pleurodynia (paroxysmal chest-wall muscle pain)": "Epidemic pleurodynia",
 "Chronic granulomatous pericarditis progressing to constriction": "Chronic pericarditis progressing to constriction",
 "Lymphatic filariasis with chronic limb lymphedema": "Lymphatic filariasis",
 "Helminthic myocarditis after eating undercooked meat": "Helminthic myocarditis",
}
used = set()
for f in sorted(glob.glob(os.path.join(HERE, 'part*.json'))):
    d = json.load(open(f, encoding='utf-8'))
    ch = False
    for b in d.get('bugs', []):
        if b['disease'] in NEW:
            used.add(b['disease']); b['disease'] = NEW[b['disease']]; ch = True
    if ch:
        json.dump(d, open(f, 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
print('changed', len(used), 'missing', set(NEW) - used)
