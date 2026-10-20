# Verify log - fragment A (drugs)

Verifier run 2 (fresh start; previous verifier stalled before writing).
Scope: 65 drugs; check mechanism/AE vs CV71, CV72, CV85, CV95, CV96; group assignment; uniqueness within group.

## CV85 - Antiarrhythmics (sources: CV85 slides.txt read in full; transcript grepped)

| # | Item | Field | Verdict / change | Source |
|---|------|-------|------------------|--------|
| 0 | Quinidine | M, AE | OK. Ia open-channel, M2 block, cinchonism, thrombocytopenia/hepatitis, torsades, digoxin interaction all on slides 9-10, 30. | CV85 sl 9,10,30 |
| 1 | Procainamide | M, AE | OK. "M and alpha blockade" (sl 11); transcript L2390 "alpha 1 block ... procainamide can decrease blood pressure"; NAPA acetylation sl 11; WPW+AF use sl 39. | CV85 sl 11,39; tx L2390 |
| 2 | Disopyramide | M, AE | OK. Most atropine-like, give with AV-node suppressant (sl 12). | CV85 sl 12 |
| 3 | Lidocaine | M, AE | OK. Activated+inactivated channels, rapid dissociation, shorter QT, local anesthetic, CYP450 substrate; azole interaction stated in transcript L682. | CV85 sl 13-14; tx L682 |
| 4 | Mexiletine | M, AE | OK. Oral, GI AEs (sl 14). | CV85 sl 14 |
| 5 | Phenytoin | M, AE | OK. Similar MOA, hirsutism/gingival hyperplasia/nystagmus (sl 14). | CV85 sl 14 |
| 6 | Flecainide / propafenone | M | CHANGE: "no change in APD or QT" -> "minimal change in action potential duration (QT lengthens only through the wider QRS)". Slide says "minimal effects on the APD"; QT does rise with QRS widening, so "no change in QT" overstated. | CV85 sl 15 |
| 7 | Amiodarone | AE | CHANGE: "type II pneumocyte injury" -> "interstitial inflammation, type II pneumocyte hyperplasia" (what slide 23 shows). Rest OK (sl 20-22). | CV85 sl 20-23 |
| 8 | Dronedarone | M, AE | OK. "like amiodarone, with no I-" (sl 24); HF/permanent-AF mortality and liver injury are standard additions (author notes). | CV85 sl 24 |
| 9 | Sotalol | M, AE | OK. Nonselective beta block + K+ block, AF use (sl 18, 24); reverse use-dependence (sl 19). | CV85 sl 18,19,24 |
| 10 | Dofetilide / ibutilide | AE | KNOWN ISSUE FIXED. Before: "therapy starts in hospital with about 4 hours of continuous ECG monitoring; not first line for AF for this reason." After: "Marked QT prolongation and torsades, so therapy begins under continuous ECG monitoring: at least 4 hours after the IV infusion, or about 3 days in hospital while the oral agent is started and dosed to renal function." Lecture's "4 hours" (sl 24, tx L1125) is the IV agent's post-infusion window; oral agent is a 3-day inpatient load. Dropped "not first line" (not in lecture, and needed the space). | CV85 sl 24; tx L1125 |
| 11 | Verapamil / diltiazem | M, AE | OK. Verapamil > diltiazem on heart (sl 27); constipation, bradycardia, digoxin interaction (sl 27, 30). Overdose hyperglycemia is standard. | CV85 sl 25,27,30 |
| 12 | Adenosine | M, AE | OK. t1/2 ~5 s, A1-Gi, A2-Gs, A2B-Gq, methylxanthine antagonism (sl 32-33). | CV85 sl 32-33 |
| 13 | Magnesium sulfate | M, AE | OK. Digitalis arrhythmias + torsades, inhibits Ca2+ flux into cytosol (sl 35). | CV85 sl 35 |
| 14 | Digoxin | AE | CHANGE: added "high Ca2+" to the precipitants (sl 30: "High Ca, low K, Mg"). Rest OK. | CV85 sl 29-31 |
| 15 | Ivabradine | M, AE, groups | OK. Sl 38 (If block, no APD change, CHF + stable angina when beta blocker not tolerated, bradycardia, vision, pregnancy, CYP3A4). CV71 only says "future lecture", but Angina group is kept because CV85 sl 38 gives stable angina as an indication. | CV85 sl 38; CV71 sl ~188 |

## CV71 - beta blockers, nitrates, other antianginals (source: CV71 slides.txt read in full; transcript grepped)

| # | Item | Field | Verdict / change | Source |
|---|------|-------|------------------|--------|
| 16 | Metoprolol / atenolol / bisoprolol | M | CHANGE: "Oral beta-1 selective antagonists" -> "Beta-1 selective antagonists used orally for long-term therapy" (metoprolol also comes IV; the point is the contrast with the IV ultra-short agent). Groups OK: CV71 sl 21, CV85 sl 18, CV96. AV block "most" AE matches CV71 sl 21. | CV71 sl 21; CV85 sl 18 |
| 17 | Propranolol / nadolol / timolol | M, AE | OK. Beta-1,2: bronchoconstriction, hypoglycemia, PVD (CV71 sl 21; CV85 sl 18); glucagon antidote (CV71 sl 21). | CV71 sl 21 |
| 18 | Labetalol / carvedilol | M, AE, groups | OK. Alpha + beta (CV71 sl 21). Angina group justified by CV71 sl 21 listing. | CV71 sl 21 |
| 19 | Pindolol / acebutolol | M, AE | OK. ISA, "can worsen angina" (CV71 sl 21), "Worsens condition" (CV85 sl 18). Pindolol nonselective / acebutolol beta-1 selective correct. | CV71 sl 21 |
| 20 | Esmolol | M, AE | OK. Ultrashort (sl 21); theophylline-overdose arrhythmia example is the lecturer's own (tx L1272-1277). | CV71 sl 21; tx L1272 |
| 21 | Nebivolol | M, AE | OK. NO effect (sl 21). | CV71 sl 21 |
| 22 | Nitrates | AE | CHANGE: "needs an 8-hour daily free interval" -> "needs an 8- to 12-hour drug-free interval each day". Lecture says 8 h (sl 6); guideline interval is 10-12 h; range is true both ways. Mechanism: ALDH wording already handled by author (notes). | CV71 sl 6, 9 |
| 23 | Nitroprusside | AE | CHANGE: "Cyanide accumulation, especially in renal impairment" -> "Cyanide and its metabolite thiocyanate accumulate with high doses, long infusions or renal impairment". Lecturer ties buildup to renal impairment (tx L634); strictly it is thiocyanate that is renally cleared - wording now true both ways. | CV71 sl 11; tx L634 |
| 24 | Ranolazine | M, AE | OK. Late Na+ current, Na+/Ca2+ exchanger, chronic angina, nausea/constipation/dizziness, CYP inhibitors, QT (sl 23). | CV71 sl 23 |
| 25 | Trimetazidine | M, AE | OK. Metabolic modifier, not US approved (sl 24); parkinsonism is the standard EMA safety issue. | CV71 sl 24 |
| 26 | Aspirin | M, AE | OK. Irreversible COX-1,2; platelets cannot remake COX; GI bleed, hypersensitivity, metabolic acidosis/uncoupling, no salicylates in children (sl 26-29). | CV71 sl 26-29 |
| 27 | Clopidogrel | M, AE | OK. 2C19 activation, UA/NSTEMI + aspirin, stenting (sl 30); PPI switch / ticagrelor alternative in tx L1652-1656. | CV71 sl 30; tx L1652 |
| 28 | Ticlopidine | M, AE | OK. Neutropenia (sl 31); TTP standard. | CV71 sl 30-31 |
| 29 | Prasugrel | M, AE | OK. Lecture only lists it; stroke/TIA and age-75 cautions are standard. | CV71 sl 30 |
| 30 | Ticagrelor | M, AE | OK. Direct-acting, not prodrug (sl 30), costlier (tx L1657). | CV71 sl 30; tx L1657 |
| 31 | Cangrelor | M, AE | OK. IV, direct-acting, no first pass, fast (tx L1595-1602). | CV71 sl 30; tx L1595 |
| 32 | Abciximab / eptifibatide / tirofiban | M, AE | OK. Antibody off US market, reversible short-half-life infusions, indications, Glanzmann correlate (sl 32). | CV71 sl 32 |
| 33 | Cilostazol | M, AE | OK. PDE inhibitor for PAD (sl 26). HF contraindication standard (boxed warning). | CV71 sl 26 |
| 34 | Dipyridamole | M, AE | OK. PDE inhibitor (sl 26); coronary steal (sl 13). | CV71 sl 13, 26 |
| 35 | Amlodipine / felodipine / nifedipine | AE | CHANGE: "ankle edema (renin-aldosterone driven)" -> "ankle edema from arteriolar dilation". Lecturer attributes CCB edema to RAAS (tx L951-960, L2400-2411), but DHP edema is mainly precapillary arteriolar dilation raising capillary pressure (diuretics barely help). Lecturer also says "mainly because of the arterial vasodilating" (L2403), so new wording is true both ways. Rest OK (sl 17, 19). | CV71 sl 17,19; tx L951, L2400 |

## CV96 - Heart failure (source: CV96 slides.txt read in full; transcript grepped)

| # | Item | Field | Verdict / change | Source |
|---|------|-------|------------------|--------|
| 36 | ACE inhibitors | AE | KNOWN ISSUE FIXED. Before: "Dry cough and angioedema (bradykinin) - the only RAAS class that does this; ...". After: "Bradykinin dry cough (the usual reason to switch to an AT1 blocker) and angioedema, a risk shared with the neprilysin combination; ..." ("acute renal failure" shortened to "renal failure" for length). Slide 18 says "Specific to ACEI", but sacubitril-valsartan also causes angioedema (neprilysin degrades bradykinin; the 36-h washout exists for this reason). Rest OK (sl 18). | CV96 sl 18 |
| 37 | ARBs | M, AE | OK. Replace ACEI when cough (sl 18). | CV96 sl 18 |
| 38 | Aliskiren | M, AE | OK. Direct renin inhibitor, similar AEs (sl 18); "not first line, after ACEi/ARB non-response" is the lecturer's (tx L819-825). | CV96 sl 18; tx L819 |
| 39 | Sacubitril-valsartan | M, AE | OK. Prodrug neprilysin inhibitor + valsartan, hypotension, hyperkalemia (sl 36); survival benefit (sl 41). | CV96 sl 36, 41 |
| 40 | Spironolactone | M, AE | OK (sl 28). | CV96 sl 28 |
| 41 | Eplerenone / finerenone | M, AE | OK. Finerenone highly selective, slows CKD (sl 28). | CV96 sl 28 |
| 42 | Furosemide / bumetanide / torsemide | M, AE | OK (sl 30, 32). | CV96 sl 30-32 |
| 43 | Ethacrynic acid | M, AE | OK. No sulfur, most ototoxic, no hypersensitivity (sl 30, 32). | CV96 sl 30, 32 |
| 44 | Thiazides | M, AE | OK (sl 34). | CV96 sl 34 |
| 45 | SGLT2 inhibitors | M | CHANGE: "A1c falls ~1%" -> "A1c falls up to about 1%". Slide 37 says ~1%; typical trial drop is 0.5-0.8%, so the hedged wording is true both ways. AE OK (renal cutoff already hedged by author). | CV96 sl 37 |
| 46 | Hydralazine | M, AE | OK. Arteriolar, pregnancy HTN, acetylation, lupus-like, reflex tachycardia, fluid retention (sl 23); with nitrate for survival (sl 41). | CV96 sl 23, 41 |
| 47 | Dobutamine | M, AE | OK. Beta-1 Gs (sl 10, 15); tolerance at 48-72 h standard. | CV96 sl 10, 15 |
| 48 | Milrinone | M, AE | OK. PDE3, cAMP (sl 10, 15). | CV96 sl 10, 15 |
| 49 | Dopamine | M, AE | OK. Maintains GFR/renal flow (sl 10). | CV96 sl 10 |
| 50 | Vericiguat | M, AE | OK. sGC stimulator independent of NO, AEs, no NO donors/PDE5i, no tolerance, HFrEF hospitalizations (sl 40). | CV96 sl 40 |
| 51 | Nesiritide | M, AE | OK. Slide 20 lumps it with NO donors; card correctly gives BNP -> particulate GC -> cGMP (no conflict with "raises cGMP"). | CV96 sl 20 |
| 52 | Conivaptan | M, AE | OK. V1a lowers PVR, V2 water excretion (sl 36). | CV96 sl 36 |
| 53 | Semaglutide | M, AE | OK. Obesity-related HF (sl 36). | CV96 sl 36 |
| - | CV95 GDMT cross-check | - | Four pillars for HFrEF (ARNI, beta blocker, MRA, SGLT2i) + diuretics; SGLT2i cut HF hospitalization and CV mortality in HFpEF; GLP-1 agonists in obese HFpEF. SGLT2 and semaglutide cards agree; no change. | CV95 summary L276-349 |

## CV72 - Lipid-lowering (source: CV72 slides.txt read in full)

| # | Item | Field | Verdict / change | Source |
|---|------|-------|------------------|--------|
| 54 | Statins | M | CHANGE: "LDL falls 25-45%" -> "LDL falls 25% to 50% or more, dose-dependent". Slide 16 gives 25-45%; high-intensity regimens (slide 22 lists them) lower LDL >=50%, so widened range is true both ways. AE OK (sl 17-19). | CV72 sl 16-19, 22 |
| 55 | Bile acid resins | M, AE | OK. 30% LDL, interactions, spacing, pregnancy/peds acceptable (sl 12). | CV72 sl 12 |
| 56 | Niacin | M, AE | OK. Lipolysis inhibition, HDL 30-40%, flushing/aspirin, hyperglycemia, hyperuricemia, PUD, myositis with statin, not in pregnancy (sl 14-15). | CV72 sl 14-15 |
| 57 | Gemfibrozil / fenofibrate | M, AE | OK. PPAR-alpha, LPL, TG -35%, gallstones, myopathy with statins, renal injury (sl 23). 7-alpha-hydroxylase suppression is standard and explains gallstones. | CV72 sl 23 |
| 58 | Ezetimibe | M, AE | OK. NPC1L1, 25% with statin, LFTs (sl 24). | CV72 sl 24 |
| 59 | Alirocumab / evolocumab | M, AE | OK. SQ q2w/monthly, max statin, LDL + ApoB-100 (sl 25). Lecture flags "neurocognitive effects????"; card's "no proven cognitive harm" matches trial data. | CV72 sl 25 |
| 60 | Inclisiran | M, AE | OK. PCSK9 mRNA, SQ twice yearly (sl 26). | CV72 sl 26 |
| 61 | Lomitapide | M, AE | OK. HoFH LDL > 500 not responsive to PCSK9i, MTP, hepatotoxicity, pregnancy X, CYP3A4, statins, REMS (sl 27). | CV72 sl 27 |
| 62 | Omega-3 fatty acids | M, AE | OK. LPL via PPAR-alpha, antithrombotic, bleeding, EPA-only lowers ApoC-III (sl 28). | CV72 sl 28 |
| 63 | Bempedoic acid | M, AE | OK. ATP citrate lyase, less myopathy, hyperuricemia, tendon rupture (sl 29). | CV72 sl 29 |
| 64 | Evinacumab | M, AE | OK. ANGPTL3, LPL + endothelial lipase, HoFH, monthly infusion, anaphylaxis (sl 30). | CV72 sl 30 |

## Uniqueness pass (one card -> one drug within each group)

| Item | Field | Verdict / change |
|------|-------|------------------|
| Dofetilide / ibutilide | AE | CHANGE (second edit): sotalol is also started in hospital over ~3 days with renal dosing, so the AE card could have pointed to sotalol. Now: "Marked QT prolongation and torsades with no beta-blocker effects; ECG monitoring for at least 4 hours after the IV infusion, or about 3 days in hospital while the oral agent is started and dosed to renal function." Separating feature vs sotalol = no beta effects (sotalol card leads with wheeze/bradycardia). |
| Antiarrhythmics (20 items) | M, AE | Checked Ia trio (cinchona/P-gp vs alpha-1/NAPA vs strongest antimuscarinic), Ib trio (IV/local anesthetic vs oral counterpart vs antiseizure), amiodarone vs dronedarone (iodinated vs not), sotalol vs propranolol group (K+ block/torsades), esmolol vs metoprolol group (IV esterase kinetics). All separable; no avoid needed. |
| Angina (22 items) | M, AE | P2Y12 set separated by 2C19 dependence / reversibility / route / neutropenia; cilostazol vs dipyridamole (claudication + HF contraindication vs adenosine reuptake + steal); nebivolol vs metoprolol group vs labetalol/carvedilol (NO release, no vasodilator action, alpha block). OK. |
| Heart failure (26 items) | M, AE | ACEi vs ARB vs aliskiren vs ARNI separable after the ACEi fix (cough + switch, rare angioedema, diarrhea/no dual block, 36-h washout); vericiguat vs nitrates (no tolerance vs tolerance); loop group vs ethacrynic acid (sulfa allergy vs no sulfur/most ototoxic). OK. |
| Lipid-lowering (11 items) | M, AE | Omega-3 vs fibrates (both PPAR-alpha/LPL) separated by natural PUFA/ApoC-III/antithrombotic and bleeding/fishy taste vs gallstones; lomitapide vs evinacumab (MTP vs ANGPTL3). OK. |
| Groups | - | All group assignments match the author's stated policy and the slides (e.g. verapamil/diltiazem HF via CV96 sl 26 "Not for CHF"; pindolol/acebutolol all three via "Worsen!!!"). Not added: ACE inhibitors / statins to Angina although CV71 sl 4 and 24 list them as angina therapy ("future lecture") - left as author decided. |

## Result

qa.py fragments/A.json: 0 FAIL, 0 WARN (65 drugs).
Changed 11 items (11 fields; dofetilide AE edited twice): Flecainide/propafenone M, Amiodarone AE, Dofetilide/ibutilide AE (x2), Digoxin AE, Metoprolol group M, Nitrates AE, Nitroprusside AE, DHP CCBs AE, ACE inhibitors AE, SGLT2 M, Statins M.
