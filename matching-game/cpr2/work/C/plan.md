# Agent C plan - correlates (CV77-78, CV91/CV99, CV82-85, CV85/CV96 toxicities)

Name-token rule (qa.py): every non-generic word >3 letters in the item name is banned from that item's
own cards, so names are chosen to keep needed words usable (e.g. "Sustained monomorphic VT").

| # | Item (name) | Primary / lectures | Nearest differential | Separating feature on the card |
|---|---|---|---|---|
| 1 | Peripheral artery disease with intermittent claudication | CV77, CV58, CV65 | Neurogenic claudication; CLTI | Same distance every time, relieved by standing still; ABI 0.6 (0.4-0.9); no rest pain |
| 2 | Neurogenic claudication (lumbar spinal stenosis) | CV77 | PAD claudication | Distance varies day to day, relief only by bending forward/sitting, normal pulses and ABI 1.1 |
| 3 | Acute limb ischemia | CV77 | DVT (B); CLTI | Sudden onset hours ago in AF, leg pale/cold/pulseless, numbness; vs warm swollen leg in DVT |
| 4 | Chronic limb-threatening ischemia | CV77 | PAD claudication; ALI | Night pain relieved by dangling the foot, toe necrosis, ABI 0.3, months not hours |
| 5 | Aortoiliac occlusive disease (Leriche syndrome) | CV77 | PAD (femoropopliteal) | Buttock/thigh pain + weak femoral pulses both sides + erectile dysfunction |
| 6 | Transient ischemic attack | CV77 | Amaurosis fugax; embolic stroke (B) | Body deficit (face/arm/speech) resolved in 15 min, MRI no infarct |
| 7 | Amaurosis fugax (transient monocular blindness) | CV77 | TIA | One eye only, same side as the bruit; body exam normal |
| 8 | May-Thurner syndrome | CV77, CV73 | DVT (B); CVI | Young woman, LEFT leg only, duplex: left common iliac vein pinned by the right common iliac artery; stent |
| 9 | Chronic venous insufficiency | CV77 | Post-thrombotic syndrome (B); May-Thurner | No prior clot, both legs, standing job, duplex reflux at incompetent valves, no compression |
| 10 | Post-mastectomy lymphedema | CV77 | Lymphangiosarcoma; filariasis | Arm swelling after axillary node dissection, no skin lesions, no travel; pitting early, firm late |
| 11 | Lymphangiosarcoma (Stewart-Treves) | CV77 | Post-mastectomy lymphedema | NEW rapidly growing violaceous painful nodules on an arm swollen for >10 y; biopsy malignant vascular channels |
| 12 | Lymphatic filariasis | CV77 | Post-mastectomy lymphedema; CVI | Farmer from endemic South Asia, years of leg enlargement, firm, elevation no help, nocturnal blood smear worm |
| 13 | Abdominal aortic aneurysm | CV78, CV58, CV65 | Ruptured AAA; inflammatory AAA | Stable, painless, incidental pulsatile mass in a 70-y male smoker; US 4.6 cm; surveillance |
| 14 | Ruptured abdominal aortic aneurysm | CV78 | Dissection; renal colic | Hypotension + flank/back pain + pulsatile periumbilical mass; equal arm BPs |
| 15 | Inflammatory abdominal aortic aneurysm | CV78 | AAA; retroperitoneal fibrosis | Back/abdominal ache, weight loss, ESR 85, CT thick enhancing rind around aorta encasing ureter -> hydronephrosis |
| 16 | Mycotic aneurysm | CV78 | AAA; septic embolism (D) | Fever, positive S. aureus cultures, new tender saccular outpouching that grew in weeks |
| 17 | Stanford type A aortic dissection | CV78, CV58 | STEMI (B); type B | Ascending involvement: arm BP gap 30 mmHg, new early diastolic murmur, wide mediastinum, effusion; emergent surgery |
| 18 | Stanford type B aortic dissection | CV78 | Type A; ruptured AAA | Interscapular pain, ascending normal on CT, flap starts beyond left subclavian; IV beta blocker first |
| 19 | Thoracic aortic aneurysm | CV78 | Syphilitic aortitis; Marfan | Older hypertensive, hoarseness/dysphagia, CXR wide mediastinum, CTA 5.8 cm descending; no syphilis, no habitus |
| 20 | Traumatic aortic injury | CV78 | Dissection; tamponade (D) | High-speed deceleration crash, wide mediastinum, CTA contained outpouching at the isthmus |
| 21 | Marfan syndrome | CV78, CV110, CV91, CV99 | Homocystinuria (B); Loeys-Dietz | Tall, arm span > height, upward lens displacement, normal intellect, no bifid uvula, root dilation |
| 22 | Vascular Ehlers-Danlos syndrome | CV78, CV110 | Marfan; Loeys-Dietz | Not tall; thin translucent skin with visible veins, easy bruising, bowel/uterine/arterial rupture, COL3A1 |
| 23 | Loeys-Dietz syndrome | CV78, CV110 | Marfan | Bifid uvula, wide-set eyes, cervical spine instability, tortuous arteries, TGFBR variant |
| 24 | Syphilitic aortitis | CV78 | Thoracic aortic aneurysm | Untreated genital ulcer decades ago, ascending/root dilation with AR, positive treponemal test |
| 25 | Calcific aortic stenosis | CV99, CV91, CV58 | HCM (E); bicuspid valve | 78-y, exertional syncope/angina, RUSB crescendo-decrescendo to carotids, SOFTER with Valsalva, weak late carotid upstroke |
| 26 | Bicuspid aortic valve | CV91, CV78, CV99 | Calcific AS; coarctation (E) | 46-y man, early systolic click + ejection murmur, echo two unequal cusps with a raphe, ascending aorta 4.6 cm, equal arm/leg BP |
| 27 | Aortic regurgitation | CV99, CV58 | Pulmonic regurgitation | BP 165/45, head bob, early diastolic decrescendo LSB louder leaning forward/expiration/handgrip, S3 |
| 28 | Chronic mitral regurgitation | CV99, CV58, CV91 | TR; MVP; papillary rupture (B) | Apical blowing holosystolic to axilla, S1 soft, louder with handgrip, softer on inspiration; years, not post-MI day 3 |
| 29 | Mitral valve prolapse | CV99, CV91 | Chronic MR | Mid-systolic click then late murmur; click EARLIER on standing/Valsalva, later on squatting |
| 30 | Rheumatic mitral stenosis | CV99, CV91 | Tricuspid stenosis; MAC | Immigrant woman, childhood sore throats, dyspnea/AF, apical low rumble after an early diastolic sound, louder in expiration/left lateral |
| 31 | Mitral annular calcification | CV91 | Rheumatic MS | Incidental, 72-y woman with HTN/dyslipidemia, dense ring at leaflet bases, leaflets otherwise mobile; treat risk factors |
| 32 | Tricuspid regurgitation | CV99 | Chronic MR; cor pulmonale (E) | LLSB blowing holosystolic LOUDER with inspiration, giant systolic neck-vein waves, pulsatile liver |
| 33 | Tricuspid stenosis | CV99 | Rheumatic MS | LLSB 4th ICS soft diastolic rumble LOUDER with inspiration, giant presystolic neck wave, cold skin, ascites |
| 34 | Pulmonic stenosis | CV99 | Calcific AS; Noonan (D) | Young adult, LUSB harsh ejection murmur to left shoulder, LOUDER on inspiration, wide split S2, RV heave |
| 35 | Pulmonic regurgitation | CV99 | Aortic regurgitation | Repaired cyanotic defect in infancy, early diastolic decrescendo at left 3rd ICS LOUDER on inspiration, normal pulse pressure |
| 36 | Libman-Sacks endocarditis | CV91, CV99 | NBTE (D); IE (D) | Young woman with SLE labs (anti-dsDNA, low C3/C4), afebrile, cultures negative, 2-3 mm masses both leaflet surfaces |
| 37 | Paradoxical embolism (via PFO/ASD) | CV99 | Carotid embolic stroke (B); ASD (E) | 34-y, stroke after a 14-h flight with a swollen calf; agitated-saline bubbles cross to left heart; carotids clean |
| 38 | Sick sinus syndrome | CV84, CV82, CV83 | Beta-blocker overdose (B); Mobitz II | 79-y on no nodal drugs, dizzy spells; Holter rate 38 and 3.8-s pauses with NO P waves (vs P without QRS) |
| 39 | Atrial flutter | CV83, CV82 | AF; AVNRT | Regular narrow at exactly 150, continuous regular negative deflections at 300/min in II/III/aVF; CTI ablation |
| 40 | Atrial fibrillation | CV83, CV82, CV85, CV99 | Flutter; MAT | No organized P waves, R-R vary without pattern; HTN/thyroid/alcohol; CHA2DS2-VASc anticoagulation; PV isolation |
| 41 | Multifocal atrial tachycardia (ADD) | CV83 | AF | COPD exacerbation/hypoxemia, rate 120 irregular, >=3 distinct P shapes and varying PR; treat lung, verapamil |
| 42 | AV nodal reentrant tachycardia | CV83, CV82, CV85 | WPW; infant SVT (E) | Young woman, abrupt-onset palpitations, regular 180 narrow, P hidden at end of QRS, normal ECG between attacks; adenosine |
| 43 | Wolff-Parkinson-White syndrome | CV83, CV82, CV85 | AVNRT | Baseline PR 0.10 s with slurred QRS upstroke, QRS 125 ms; AV-nodal blockers contraindicated; procainamide; pathway ablation |
| 44 | Congenital long QT syndrome | CV82, CV110, CV93, CV94 | Drug/electrolyte torsades | Teen, syncope with swimming/alarm clock, sib sudden death, congenital deafness, QTc 520 on NO drugs, normal K/Mg; beta blocker |
| 45 | Torsades de pointes (drug- and electrolyte-induced) | CV82, CV83, CV84, CV85 | Congenital LQTS; monomorphic VT | New QT drug (e.g. ondansetron/haloperidol/sotalol) + K 2.9, Mg 1.2; twisting wide complexes after a sinus beat; IV Mg |
| 46 | Short QT syndrome | CV82 | Hypercalcemia (E); LQTS | Young man with palpitations/syncope, QTc 290 ms with normal Ca/K, tall peaked T, inducible AF/VF |
| 47 | Brugada syndrome | CV82, CV110 | STEMI (B); RBBB | 35-y Asian man, syncope during fever, J-point/ST elevation with down-sloping ST and inverted T only in V1-V2, troponin normal; ICD |
| 48 | Catecholaminergic polymorphic VT | CV82, CV85 | Congenital LQTS; HCM (E) | Child faints with exercise/emotion, resting ECG and QT normal, echo normal, exercise test provokes beat-to-beat alternating-axis wide complexes; RyR2 |
| 49 | Sustained monomorphic VT | CV83, CV82, CV85 | VF early after MI (B); SVT with aberrancy | Old MI/EF 30%, has a pulse, regular identical wide complexes 170, P waves independent; synchronized cardioversion/amiodarone |
| 50 | First-degree AV block | CV84 | Mobitz I | PR 260 ms fixed, every P conducted, asymptomatic; no treatment |
| 51 | Second-degree AV block, Mobitz type I | CV84 | Mobitz II | PR lengthens beat to beat then one P not conducted, narrow QRS, groups repeat; observe |
| 52 | Second-degree AV block, Mobitz type II | CV84 | Mobitz I; 3rd degree | Constant PR then sudden non-conducted P, wide QRS, syncope; pacemaker |
| 53 | Third-degree AV block | CV84 | Lyme carditis (D); congenital heart block (E) | Elderly degenerative, rate 34, P-P and R-R each regular but unrelated, more P than QRS; no tick exposure; pacemaker (avoid Lyme/neonatal on workup) |
| 54 | New left bundle branch block | CV84 | RBBB; STEMI (B) | QRS 150, V1 deep broad negative, I/V6 broad notched R, not on ECG 1 y ago, with ischemic pain -> treat as MI |
| 55 | Right bundle branch block | CV84 | LBBB; Brugada | QRS 130, V1 rSR' upright, I/V6 wide slurred S; no fever-related ST change |
| 56 | Left ventricular hypertrophy | CV84, CV58, CV99 | HCM (E); AS | 20-y untreated HTN, S4, precordial R/S voltage > 5 big boxes, lateral strain; control BP |
| 57 | Accidental hypothermia | CV84 | Hypothyroid myxedema (not an item); BB overdose (B) | Found outdoors in winter, core temp 29 C, slow AF/brady, hump at QRS-ST junction, long PR/QT; rewarm |
| 58 | Tricyclic antidepressant overdose | CV85 | Salicylate (B); CCB/BB overdose (B) | Dilated pupils, dry hot skin, urinary retention, seizure, QRS 150 with tall terminal R in aVR; sodium bicarbonate |
| 59 | Drug-induced lupus | CV85, CV96 | SLE / Libman-Sacks; | Months on hydralazine or procainamide (slow acetylator), arthralgia/serositis/rash, anti-histone +, anti-dsDNA -, normal kidneys; stop drug |
| 60 | Thyroid storm | CV85 | Amiodarone thyroid (C); AF | Fever 40.1, delirium, HR 160 AF, after surgery/infection in untreated Graves; propranolol first then PTU |
| 61 | Amiodarone pulmonary toxicity | CV85 | ADHF (E) | 14 mo on an iodinated antiarrhythmic, dry cough + dyspnea, crackles, no JVD/edema, BNP normal, restrictive PFT, low DLCO; stop + steroids |
| 62 | Amiodarone-induced hypothyroidism | CV96, CV85 | Hypothyroid dyslipidemia (B) | AF/VT on the antiarrhythmic for months, gray-blue skin, corneal deposits, TSH 18, low free T4; levothyroxine |
| 63 | Digoxin toxicity | CV96, CV82, CV85 | BB/CCB overdose (B); hyperkalemia (E) | Elderly HF on loop diuretic, CKD, anorexia/vomiting, yellow halos, bigeminy, K 2.9 or acute K 6.4; Fab fragments |
| 64 | Doxorubicin cardiomyopathy | CV96 | Peripartum/alcoholic/dilated (E) | Breast cancer treated with anthracycline-containing chemo 1 y ago, orthopnea, S3, EF 30% global dilation; dose-dependent, echo monitoring |
| 65 | ACE inhibitor angioedema | CV96 | Hereditary angioedema; anaphylaxis | First episode, new antihypertensive weeks ago, lip/tongue swelling without hives/itch, normal C4; stop drug, airway, icatibant |
| 66 | Hereditary angioedema | CV96 | ACE inhibitor angioedema | Recurrent since teens, family history, abdominal pain attacks, low C4 and low C1-esterase-inhibitor function |
| 67 | ACE inhibitor cough | CV104, CV96 | Upper airway cough syndrome (E) | Dry hacking after new BP drug, no nasal symptoms, normal lungs/CXR; switch to ARB |

Adds vs ASSIGNMENTS: Ruptured AAA (split from AAA), Stanford A/B (split), Thoracic aortic aneurysm,
Post-mastectomy lymphedema, Multifocal atrial tachycardia. CVI from the optional line. Rename:
amiodarone thyroid dysfunction -> Amiodarone-induced hypothyroidism (the case taught in CV96).
