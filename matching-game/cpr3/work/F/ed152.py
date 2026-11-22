import json
P = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\F.json'
d = json.load(open(P, encoding='utf-8'))
by = {it['name']: it for it in d['correlates']}
def rep(n, f, a, b):
    s = by[n][f]; assert a in s, (n, f, a); by[n][f] = s.replace(a, b)
rep('Urethritis (sexually transmitted)', 'workup', "swab and first-void urine sent for STI testing", "swab and urine sent for STI testing")
rep('Acute pyelonephritis', 'workup', "CT (if done): a wedge of darker, poorly enhancing kidney.", "CT (if done): an area of darker, poorly enhancing kidney.")
rep('Acute bacterial prostatitis', 'presentation', "a tense, boggy, exquisitely tender gland", "a tense, swollen, exquisitely tender gland")
by['Catheter-associated UTI']['workup'] = "Urine from a freshly replaced catheter: pyuria and more than 100,000 CFU/mL of a gram-negative rod (above 100 CFU/mL already counts from a catheter); the removed catheter's lumen is crusted and narrowed by biofilm."
by['UTI in a nursing-home resident']['presentation'] = "An 86-year-old woman in long-term care, incontinent and left in soiled briefs for hours, has 2 days of new confusion, poor appetite, feeling cold and shaking chills; no burning. T 35.8 C, HR 108, BP 104/60. No Foley. Dipstick: nitrite and leukocyte esterase positive."
by['Candiduria']['presentation'] = "A 66-year-old woman with poorly controlled diabetes has been in the ICU for 12 days with a Foley and is on a third broad-spectrum antibiotic. A surveillance urine culture is sent. No fever or flank pain; vitals stable. Dipstick: trace leukocyte esterase, nitrite negative."
by['Genitourinary tuberculosis']['workup'] = "Urine: white and red cells. An acid-fast stain of a spun urine sample shows slender red-staining rods."
by['Viral hemorrhagic cystitis (immunocompromised)']['workup'] = "Routine bacterial urine culture: no growth. Urine testing finds a polyomavirus that most people pick up in childhood and then carry latently."
for n in by:
    for f in ('presentation', 'workup', 'management'):
        if f in by[n]: assert len(by[n][f]) <= (280 if f == 'presentation' else 240), (n, f, len(by[n][f]))
with open(P, 'w', encoding='utf-8') as fh:
    json.dump(d, fh, indent=2, ensure_ascii=False); fh.write('\n')
print('ok')
