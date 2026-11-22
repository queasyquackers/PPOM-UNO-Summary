import json
P = r'E:\PPOM-UNO-Summary\matching-game\cpr3\fragments\F.json'
d = json.load(open(P, encoding='utf-8'))
by = {it['name']: it for it in d['correlates']}
a = by['Advanced CKD with volume overload and uremia']
a['presentation'] = "A 57-year-old man with diabetes, told at 50 his kidneys were mildly affected, stopped all his medicines. For 3 months: fatigue, poor appetite, nausea, itching, numb feet, swollen ankles, breathless on stairs, drowsy by noon. BP 168/96; scratch marks; leg edema; BUN 82 mg/dL."
a['management'] = "At GFR 15-29, prepare for kidney replacement with nephrology and the transplant team; at GFR below 15 start dialysis or transplant (preemptive or early transplant does best). Sodium under 2 g/day; ask about uremic symptoms at every visit."
a['avoid'] = {"presentation": ["Diabetic nephropathy"]}
r = by['Renal osteodystrophy (secondary hyperparathyroidism)']
r['presentation'] = "A 49-year-old man on hemodialysis for 6 years, who often skips his meal-time pills, has had a week of tingling around his mouth and painful cramping of his hands. BP 150/90, HR 78. ECG: QTc 520 ms."
h = by['Hyperkalemia in CKD']
h['presentation'] = "A 70-year-old man with stage 3b kidney disease (eGFR 38) and heart failure was started on lisinopril 3 weeks ago; since then he has taken ibuprofen daily for knee pain and drinks orange juice each morning. His legs feel weak. HR 52, BP 124/70; creatinine 1.8 mg/dL, as before."
c = by['Contrast-associated acute kidney injury']
c['presentation'] = "A 68-year-old woman with diabetes and an eGFR of 34, taking metformin, ibuprofen and chlorthalidone, has an abdominal CT with IV iodinated dye for pain. Two days later her creatinine is 2.5 mg/dL (1.6 before) and her urine output has fallen. BP never below 120/70; no rash." 
for n in by:
    for f in ('presentation', 'workup', 'management'):
        if f in by[n]: assert len(by[n][f]) <= (280 if f == 'presentation' else 240), (n, f, len(by[n][f]))
with open(P, 'w', encoding='utf-8') as fh:
    json.dump(d, fh, indent=2, ensure_ascii=False); fh.write('\n')
print(len(a['presentation']), c['presentation'][-60:])
