import json
P = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\F.json'
d = json.load(open(P, encoding='utf-8'))
by = {it['name']: it for it in d['correlates']}
by['Ethylene glycol poisoning']['workup'] = "Creatinine climbs from 1.0 to 4.2 mg/dL over 2 days. Kidney biopsy: tubular cells swollen and ballooned; under polarized light, calcium oxalate crystals sit in and plug the tubular lumens."
by['Ethylene glycol poisoning']['lectures'] = ["CV126", "CV155"]
by['Salicylate overdose']['management'] = "Activated charcoal; gastric lavage only for a massive ingestion under 30 minutes old; IV sodium bicarbonate to alkalinize the urine (not the serum) and speed excretion; dialysis if severe."
by['Rhabdomyolysis']['lectures'] = ["CV126", "CV155"]
by['Chronic respiratory acidosis in COPD']['management'] = "Give only a little oxygen, titrated low, if needed: high-flow oxygen can push his CO2 higher and stop his breathing. Avoid sedatives; use CPAP or BiPAP by mask, or intubate, if ventilation stays poor."
by['Chronic respiratory acidosis in COPD']['avoid'] = {"presentation": ["Emphysema-predominant COPD", "Chronic bronchitis"]}
by['Hyperventilation from a panic attack']['management'] = "Calm reassurance and treat the underlying cause; do not infuse acid, which does not work. Watch the potassium: a low K+ can weaken the muscles, the diaphragm included."
by['Metabolic alkalosis from antacid overuse']['presentation'] = by['Metabolic alkalosis from antacid overuse']['presentation'].replace("creatinine 2.1 mg/dL (CKD).", "creatinine 2.1 mg/dL, the same as last year.")
by['Lactic acidosis from septic shock']['presentation'] = "A 67-year-old woman has had 3 days of fever and left lower abdominal pain and is now confused. T 39.4 C, BP 78/42, HR 128, RR 30, capillary refill 4 seconds, skin mottled; left lower quadrant tender with guarding. WBC 21,000 with 18% bands."
by['Acute respiratory distress syndrome']['avoid'] = {"workup": ["Severe COVID-19 with ARDS"]}
for n in by:
    for f in ('presentation', 'workup', 'management'):
        if f in by[n]: assert len(by[n][f]) <= (280 if f == 'presentation' else 240), (n, f, len(by[n][f]))
with open(P, 'w', encoding='utf-8') as fh:
    json.dump(d, fh, indent=2, ensure_ascii=False); fh.write('\n')
print('ok', by['Metabolic alkalosis from antacid overuse']['presentation'][-80:])
