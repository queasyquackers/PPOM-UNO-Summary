window.receiveLectureContent({
  "id": "cv85",
  "title": "Lecture #85: Pharmacology of Antiarrhythmic Drugs",
  "lecturer": "Maria A. Pino, Ph.D.",
  "pdf": "content/CV85_HighYield_Render.pdf",
  "content": `
# Lecture #85: Pharmacology of Antiarrhythmic Drugs

**Lecturer:** Maria A. Pino, Ph.D.
**Session:** Lecture #85

## The Action Potential Is the Drug Map (Slides 3-4)

Every antiarrhythmic in this lecture is defined by *which phase of the cardiac action potential it touches*, so the phases are the scaffold for everything else. Sodium drives depolarization (phase 0), calcium holds the plateau (phase 2), potassium repolarizes (phase 3), and phase 4 is the pacemaker's slope - the target of beta blockers and calcium channel blockers. Each of those phases also has an EKG footprint, which is how the drugs (and their toxicities) show up clinically. The lecturer's framing: many of these drugs are themselves **pro-arrhythmic**, so sometimes the better answer is a pacemaker, ablation or cardioversion rather than a pill.

| Phase | Event | Ion | Drug class acting here |
| --- | --- | --- | --- |
| 0 | Upstroke (depolarization) | Na+ in | Class I (esp. Ia, Ic) |
| 1 | Initial repolarization | Na+ channels inactivate | - |
| 2 | Plateau ("shoulder") | Ca2+ in | Class IV (verapamil, diltiazem) |
| 3 | Repolarization | K+ out | Class III (and Ia) |
| 4 | Automaticity / reset | K+ dominant; Na+/K+ pump; Na+/Ca2+ antiport | Class II and IV (reduce the slope) |

- **Na+/Ca2+ exchanger (Slide 3):** 3 Na+ in for every 1 Ca2+ out - the link that makes digoxin work later.
- **Potassium is "the ion of rest"** [Lecturer Emphasis] - repolarization is the cell returning to rest.
- **EKG correlates (Slide 4):**
  - **P wave** = atrial depolarization (altered in AF/flutter).
  - **PR interval** = conduction through atria and **AV node**. The AV node is a **filter** that slows the impulse; without it, ventricular rates could reach **300-400/min** [Lecturer Emphasis].
  - **QRS** = ventricular depolarization -> "think sodium." Widened by Class Ia and Ic.
  - **T wave** = ventricular repolarization -> "think potassium." **Hypokalemia** (thiazide/loop diuretics) slows repolarization and flattens the T wave; **hyperkalemia** (ACE inhibitors, ARBs, spironolactone) slows conduction, shortens the AP and **peaks the T wave**.
  - **QT** = duration of the ventricular AP. Prolonged by **K+ channel blockade** (Class Ia, Class III) and in genetic long QT.

:::correlate
Ventricular Tachycardia and Ventricular Fibrillation

- **Pathophysiology:** Chaotic ventricular impulses; VF is the most disorganized.
- **Presentation:** VF can progress to cardiac arrest.
- **Treatment:** VT - Class I or III (Ib if ischemic); VF post-MI in the Question Review received lidocaine or amiodarone.
- **Lecturer's Point:** "Both serious, but V-fib is probably the worst."
:::

## Three Mechanisms of Arrhythmia (Slide 5)

Arrhythmias arise in three ways, and each maps onto a phase and a drug class. **Increased automaticity** lives in phase 4: norepinephrine on cardiac beta receptors steepens the pacemaker slope and enhances the AV node, so beta blockers and verapamil/diltiazem work by flattening phase 4. **Triggered activity** is an extra beat launched from an afterdepolarization. **Reentry** is an impulse that loops back and re-excites tissue it has already passed through.

- **Increased automaticity:** phase 4; sympathetic drive (NE on beta-1). Rx: Class II, Class IV.
- **Triggered activity:**
  - **Early afterdepolarization (EAD):** around **phase 3**; most commonly **hypokalemia + slow heart rate**.
  - **Delayed afterdepolarization (DAD):** **after phase 4**; driven by **intracellular calcium overload** - **digoxin toxicity** or **post-ischemia**.
- **Reentry:** atrial fibrillation/flutter are the classic examples; **Wolff-Parkinson-White** uses an **accessory pathway (bundle of Kent)** (Slide 39).

## Vaughan-Williams Classification (Slides 6-8)

The textbook classification sorts drugs by the channel or receptor they block, so knowing the class predicts the EKG change and much of the toxicity. The one concept that spans all of Class I is **use dependence**: a sodium channel blocker binds channels that are opening, so the faster the tissue fires, the more block accumulates - which is exactly what you want in tachycardia.

| Class | Target | Phase | EKG |
| --- | --- | --- | --- |
| I | Na+ channel blockade | 0 | QRS up (Ia, Ic) |
| II | Beta-1 blockade (sympatholytic) | 4 | PR up, rate down |
| III | K+ channel blockade | 3 | QT up |
| IV | Ca2+ channel blockade (verapamil, diltiazem) | 2 and 4 | PR up, rate down |
| V / misc | Digoxin, adenosine, magnesium, (ivabradine) | - | - |

- **Class I is use-dependent (Slide 8):** greater Na+ channel block at **faster rates (tachycardia)** - more inhibition in cells that depolarize more often.
- **AP shapes by subclass (Slide 7):** Ia - phase 0 slowed and AP prolonged; Ib - phase 0 barely changed, AP **shortened**; Ic - phase 0 slowed the most, AP duration unchanged.

:::correlate
Tricyclic Antidepressant Overdose

- **Pathophysiology:** TCAs (e.g., amitriptyline) mimic **Class Ia** sodium channel blockade, plus autonomic effects (M, H1, alpha blockade).
- **Presentation:** Cardiotoxicity, convulsions and coma; EKG shows **increased QRS and increased QT**.
- **Treatment:** **Sodium bicarbonate** to stabilize cardiac sodium channels.
- **Lecturer's Point:** Recalled from last semester's antidepressant lecture and repeated in the Rapid Pharmacology Concept Review #3 [Lecturer Emphasis].
:::

## Class I: Sodium Channel Blockers (Slides 9-15)

The three Class I subgroups all block Na+ channels but differ in *which channel state* they bind, *how fast they let go*, and *whether they also block K+*. Those three properties explain everything clinical: Ia also blocks K+ (so QT rises and torsades follows), Ib binds inactivated channels in already-depolarized ischemic tissue (so it is the post-MI drug and actually shortens QT), and Ic unbinds so slowly that QRS widens dramatically (so it is dangerous in a damaged heart).

| Subclass | Drugs | Channel state / kinetics | Phase 0 | AP / ERP | EKG | Use |
| --- | --- | --- | --- | --- | --- | --- |
| Ia | Quinidine, procainamide, disopyramide | Open channels; some K+ block | Slowed | Prolonged | QRS up, QT up | Atrial + ventricular |
| Ib | Lidocaine (IV), mexiletine (PO), phenytoin | Activated + inactivated; rapid dissociation | Minimal | Shortened | QT down | Ventricular, post-MI |
| Ic | Flecainide, propafenone | Open channels; slow dissociation | Slowed most | No change | QRS up a lot | Refractory ventricular; AF |

:::mnemonic
**Class Ia drugs (from First Aid)**
**The Queen Prefers Discos**

- **Queen:** Quinidine
- **Prefers:** Procainamide
- **Discos:** Disopyramide
:::

### Class Ia (Slides 9-12)

- **Mechanism (Slide 9):** blocks **open** Na+ channels -> slows phase 0 (QRS up); **K+ channel block** -> prolongs AP and ERP (QT up) = **pro-arrhythmic (torsades de pointes)**.
- **ERP defined:** the time for Na+ channels to recover so a new impulse can be generated.
- **All three block M2 receptors** -> removes vagal brake -> **increased AV node conduction**.
  - Receptor review: ACh on M2 -> Gi -> less adenylyl cyclase and cAMP -> **negative chronotropy** (rate) and **negative dromotropy** (AV conduction). Hence rivastigmine and organophosphates cause bradycardia; atropine reverses it but must be dosed carefully to avoid tachycardia.
- **Quinidine (Slide 10):** QT prolongation/torsades, M2 block, plus:
  - **Cinchonism** - headache, dizziness, **tinnitus** (as with quinine for *P. falciparum*; aspirin also causes early tinnitus).
  - **Immunologic reactions** - antibodies against platelet glycoproteins -> **thrombocytopenia** and bleeding; **hepatitis** (fever, skin change, RUQ pain). Stop the drug.
- **Procainamide (Slide 11):** QT prolongation, M2 block, plus **alpha blockade -> reduced PVR -> hypotension**.
  - **Acetylation** (phase II, like hydralazine and isoniazid) forms **N-acetylprocainamide (NAPA)**. Fast acetylators lose therapeutic effect; **slow acetylators** accumulate drug -> **drug-induced lupus** (arthralgias, butterfly rash; **antinuclear and antihistone antibodies** in the Question Review).
- **Disopyramide (Slide 12):** the **most atropine-like** -> urinary retention, mydriasis, tachycardia, constipation, dry mouth and eyes. Because AV conduction rises, **give with an AV node suppressant** - most often a **beta-1 blocker (metoprolol)**.

:::correlate
Drug-Induced Lupus

- **Pathophysiology:** Slow acetylation of procainamide (also hydralazine, isoniazid) leads to drug accumulation.
- **Presentation:** Arthralgias, malar (butterfly) rash.
- **Diagnosis:** Antinuclear and antihistone antibodies.
- **Treatment:** Stop the offending drug.
- **Lecturer's Point:** The first Question Review item - the "only antiarrhythmic with an acetylation pathway."
:::

### Class Ib (Slides 13-14)

- **Mechanism (Slide 13):** minimal phase 0 effect; **shortens AP and ERP -> decreased QT**; binds **inactivated** channels and dissociates rapidly, so it acts preferentially in **depolarized (ischemic) ventricular tissue**, where it slows conduction.
- **Use:** **prevents ventricular arrhythmias in the hours after MI** - QT falls instead of rising, which is why it fits the post-MI heart.
- **Lidocaine (IV) (Slide 14):** an **amide local anesthetic** (dental blocks, creams, patches). IV excess -> **neurologic toxicity: paresthesias, then seizures**. **CYP450 substrate** - an azole raises its level.
- **Mexiletine (PO):** same mechanism; **GI adverse effects**.
- **Phenytoin:** has Ib actions (not used on the floors for this); **hirsutism, gingival hyperplasia, nystagmus**.

:::correlate
Myocardial Infarction (Post-MI Ventricular Arrhythmias)

- **Pathophysiology:** Ischemic, depolarized ventricular tissue is prone to ventricular events.
- **Treatment:** **Lidocaine** (Ib) in the hours post-MI; shortens QT. Amiodarone for refractory VF (Question Review).
- **Complications:** Class Ic drugs **increase mortality** in patients with structural damage (CAST).
- **Lecturer's Point:** In the Question Review, a post-MI VF patient given a drug that *decreases AP duration and refractory period* -> lidocaine -> expect **paresthesia** at high doses.
:::

### Class Ic (Slide 15)

- **Mechanism:** blocks **open** channels with **slow unbinding kinetics** -> the greatest phase 0 slowing -> **marked QRS widening**, which can **increase ventricular rate**; APD and QT essentially unchanged.
- **Use:** **refractory ventricular arrhythmias in patients without structural heart damage**; also atrial fibrillation.
- **CAST (Cardiac Arrhythmia Suppression Trial):** flecainide given after MI -> **higher mortality** in patients with structural damage.
- **Negative inotrope -> worsens CHF.**
- **Flecainide also blocks the cardiac ryanodine receptor** -> used for **catecholaminergic polymorphic VT (CPVT)** - the cardiac analog of dantrolene blocking skeletal RyR in NMS (lead-pipe rigidity + hyperthermia after typical antipsychotics).

:::correlate
Congestive Heart Failure (as a Contraindication)

- **Pathophysiology:** Pump function already impaired.
- **Treatment:** Avoid negative inotropes such as **Class Ic** drugs.
- **Lecturer's Point:** "Anything negative inotropic is going to make it worse." Digoxin no longer anchors CHF therapy because it did not reduce mortality - ACE inhibitors/ARBs and beta blockers do.
:::

## Class II: Beta Blockers (Slides 16-18)

Beta blockers treat arrhythmias of **automaticity**. Norepinephrine on cardiac beta-1 receptors acts through Gs -> adenylyl cyclase -> cAMP -> PKA -> calcium entry, raising heart rate, contractility and AV conduction; blocking that cascade **decreases the slope of phase 4** in the SA and AV nodes, lowering heart rate and cardiac output. Selectivity decides the side effects: anything that also blocks beta-2 reaches the lungs, the liver and the peripheral vessels.

- **Beta-1 effects (Slide 18):** decreased HR, CO and **renin release from the juxtaglomerular apparatus** (indirect, weaker than ACEi/ARB); suppress SA and AV nodes; increase refractory period and APD.
- **Uses:** hypertension, MI, CHF, arrhythmia, **thyrotoxicosis/thyroid storm** (first choice to control the heart rate before methimazole takes effect).
- **Beta-1 selective:** atenolol, metoprolol. Adverse effect to watch: **AV block**.
- **Nonselective (beta-1 and beta-2):** nadolol, sotalol, propranolol, timolol -> **bronchoconstriction, hypoglycemia** (blocked glycogenolysis), **worsened PVD** (vasoconstriction).
- **ISA (partial agonists):** pindolol, acebutolol - can kick up sympathetics and **worsen ischemia**.
- **Esmolol:** ultra-short-acting, IV in hospital.

:::correlate
Thyrotoxicosis / Thyroid Storm

- **Pathophysiology:** Excess thyroid hormone drives heart rate high enough to risk arrhythmia.
- **Treatment:** Beta blocker first for rate control; methimazole treats the hyperthyroidism.
- **Lecturer's Point:** The heart can fail "before the antithyroid drugs kick in."
:::

:::correlate
COPD and Asthma with Nonselective Beta Blockade

- **Pathophysiology:** Beta-2 blockade in bronchial smooth muscle -> bronchoconstriction.
- **Presentation:** New wheezing and cough without fever.
- **Lecturer's Point:** Question Review - an AF/COPD patient on **sotalol** wheezes because of **beta-2 blockade**; tiotropium (muscarinic blocker) is first-line COPD therapy, and CCBs would not affect bronchial smooth muscle.
:::

## Class III: Potassium Channel Blockers (Slides 19-24)

Class III drugs **delay repolarization (phase 3)**, prolonging the AP and ERP **without changing phase 0 or the resting membrane potential** - the Ia picture without the sodium component. The price is **QT prolongation and torsades**, and it is worst at slow rates because of **reverse use dependence**: the opposite of Class I, these drugs act more when the heart is slow, so a bradycardic patient is the most sensitive to QT prolongation.

- **Uses (Slide 19):** AF, atrial flutter, ventricular tachycardia.
- **Drugs:** amiodarone, ibutilide, dofetilide, sotalol.

### Amiodarone (Slides 20-23)

"Quite possibly the biggest antiarrhythmic of all" [Lecturer Emphasis], because it is **broad-spectrum**: K+, Na+ and Ca2+ channel block plus **beta and alpha blockade** (so hypotension).

- **Lower incidence of QT-related events than Class Ia** - the on-board beta blockade protects against ventricular events.
- **Drug interactions:** **CYP3A4 substrate** (inhibitors and inducers change its level) and **inhibitor of P450 enzymes** -> raises **digoxin, warfarin (bleeding), statins**.
- **Long half-life (~60 days).**
- **Liver:** metabolite **desethylamiodarone** is **hepatotoxic** - inhibits fatty acid oxidation, increases lipid, damages mitochondria, forms ROS -> check **LFTs** at start.
- **Thyroid (Slide 21):** iodinated -> extra iodine -> **hyperthyroidism**; blocks **T4 -> T3 conversion** -> **hypothyroidism**. Check a **thyroid panel** at start.
- **Skin:** interacts with melanin -> bluish **"smurf skin."**
- **Eyes:** **corneal deposits** (drug in corneal lysosomes) -> opacity and vision change.
- **Lung (Slides 22-23):** **pulmonary fibrosis** - immunologic injury with **interstitial inflammation and hyperplasia of type II pneumocytes** -> **decreased surfactant**, plus ROS.
  - Monitoring: **baseline and yearly chest X-ray**; PFTs in some cases; extra caution in smokers.
  - Management: **discontinue the drug and give glucocorticoids** (it is an immune reaction).
  - Other pulmonary-fibrosis drugs: **bleomycin, busulfan, methotrexate** (antineoplastics; methotrexate also for RA), **nitrofurantoin** (UTI).

:::highyield
Amiodarone toxicity = **thyroid, liver, lung, eyes, skin**. "If I had to ask you something on amiodarone, you probably know that I will ask something about pulmonary fibrosis, changes in thyroid" [Lecturer Emphasis]. Pulmonary fibrosis comes from type II pneumocyte injury -> reduced surfactant; screen with baseline and yearly chest X-ray, and treat by stopping the drug and giving glucocorticoids.
:::

:::correlate
Amiodarone-Induced Pulmonary Fibrosis

- **Pathophysiology:** Immunologic damage and hyperplasia of type II pneumocytes; decreased surfactant; ROS.
- **Diagnosis:** Baseline and yearly chest X-ray; PFTs in some cases.
- **Treatment:** Discontinue amiodarone; glucocorticoids.
- **Risk Factors:** Tobacco use.
- **Lecturer's Point:** In the Question Review, a STEMI patient in refractory VF receives a drug that changes the thyroid panel -> long-term risk is pulmonary fibrosis.
:::

### Other Class III Drugs (Slide 24)

- **Dronedarone:** like amiodarone but **no iodine** -> less concern for thyroid, skin and corneal toxicity.
- **Sotalol:** **nonselective beta blocker (II) + K+ channel block (III)**; used for AF.
- **Dofetilide, ibutilide:** slow repolarization -> raise QT markedly -> start under surveillance with **continuous EKG for about 4 hours**. In the Question Review, dofetilide acts at **phase 3** and is not first-line for AF because of QT prolongation.

## Class IV: Calcium Channel Blockers (Slides 25-27)

Only the **non-dihydropyridines - verapamil and diltiazem** - are antiarrhythmics. They slow the inward Ca2+ current of the plateau and **decrease phase 4 slope** in the SA and AV nodes, **increasing the ERP especially in the AV node** - so they behave like beta blockers. The dihydropyridines ("-dipines") act on arteriolar smooth muscle; a sharp fall in blood pressure triggers the **baroreceptor reflex -> sympathetic activation -> reflex tachycardia**, the last thing an arrhythmia patient needs.

- **Uses:** prevent **SVT**; AF in patients who cannot tolerate beta blockers; hypertension, angina.
- **Potency:** arteriole and heart; **verapamil > diltiazem** on the heart.
- **Vascular mechanism:** Ca2+ -> calmodulin -> myosin light chain kinase -> contraction.
- **Adverse effects:**
  - **Dihydropyridines:** dizziness, headache, **edema** (reflex renin -> aldosterone -> Na+/water retention), **reflex tachycardia**.
  - **Verapamil/diltiazem:** **bradycardia** (most likely), **constipation** (most with verapamil; reduced gut peristalsis), **gingival overgrowth** (fibroblasts -> collagen), **grapefruit juice** inhibits their metabolism -> higher levels -> more bradycardia.

## Digoxin (Slides 28-31, 37)

Digoxin (digitalis, from foxglove) has **two mechanisms**. It is **vagal**: it raises parasympathetic tone, giving **negative chronotropy** and **AV node suppression** - the antiarrhythmic effect. And it **inhibits Na+/K+ ATPase**: Na+ accumulates inside, the Na+/Ca2+ exchanger loses its gradient, Ca2+ stays in the myocyte and binds the contractile machinery - **positive inotropy**, the reason it was once CHF therapy. That same calcium load is its danger: **delayed afterdepolarizations** after phase 4. **Hypokalemia** makes it worse because less K+ competing at the pump means **greater Na+/K+ ATPase inhibition** and a "super surge" of calcium.

- **Pharmacokinetics (Slide 29):** **long half-life, narrow therapeutic index** - "an extra tablet or two" causes toxicity.
- **Toxicity (Slide 30):**
  - **GI:** nausea, vomiting, diarrhea, anorexia.
  - **Ventricular arrhythmias** (DADs) - precipitated by **high Ca2+, low K+, low Mg2+**; loop diuretics used for CHF edema waste K+, Mg2+ and Ca2+ -> keep electrolytes normal.
  - **Xanthopsia** - yellow vision/halos from Na+/K+ ATPase inhibition in retinal cells ("Van Gogh effect").
  - **Gynecomastia** - estrogen-like backbone (also libido change).
- **Drug interactions:**
  - **Antacids** (weak-acid digoxin ionizes in a basic environment) and **cholestyramine** (reduced enterohepatic circulation) -> **reduced absorption**; space doses several hours apart.
  - **Amiodarone** inhibits digoxin metabolism.
  - **Verapamil and quinidine** inhibit renal **P-glycoprotein** -> **reduced digoxin clearance**.
- **Renal impairment** (older CHF patients) delays elimination -> dose carefully.
- **Antidote:** **DigFab (Digibind)** binds unabsorbed drug for excretion; once absorbed, **manage electrolytes and give magnesium**.
- **EKG (Slide 31):** **increased PR** (AV node suppression) and **ST depression with a "hockey stick" configuration** - may simply mean the patient is taking digoxin, not toxicity.

:::highyield
Digoxin = **Na+/K+ ATPase inhibitor** (positive inotropy) + **vagal** (negative chronotropy, AV node suppression). Toxicity: **N/V/D, yellow vision (xanthopsia), ventricular arrhythmias from DADs**, gynecomastia. **Hypokalemia** (loop or thiazide diuretics) potentiates toxicity; **verapamil, quinidine and amiodarone** raise levels; **renal impairment** slows elimination. Treat with **DigFab** and **magnesium**.
:::

:::correlate
Digoxin Toxicity

- **Pathophysiology:** Excess Na+/K+ ATPase inhibition -> intracellular Ca2+ overload -> delayed afterdepolarizations.
- **Presentation:** Nausea, vomiting, diarrhea, anorexia; yellow vision (xanthopsia); ventricular arrhythmias.
- **Diagnosis:** EKG - increased PR, hockey-stick ST depression; check K+, Mg2+, Ca2+ and renal function.
- **Treatment:** DigFab (Digibind); correct electrolytes; magnesium.
- **Risk Factors:** Hypokalemia and hypomagnesemia from loop diuretics, renal impairment, elderly, verapamil/quinidine/amiodarone.
- **Lecturer's Point:** Question Review - an 83-year-old with heart failure who "sees yellow" with diarrhea and nausea -> the drug inhibits Na+/K+ ATPase.
:::

:::diagram cv85-digoxin-calcium:::

## Adenosine (Slides 32-33)

Adenosine is injected and terminates **PSVT** within seconds (half-life **~5 s**). Its receptor subtypes explain both the benefit and every side effect: the benefit is a **Gi** mechanism in the heart like ACh on M2, and the side effects are Gs and Gq mechanisms elsewhere, all short-lived.

| Receptor | G protein | Effect |
| --- | --- | --- |
| A1 | Gi (less cAMP) | Decreased SA and AV node activity -> terminates PSVT |
| A2 | Gs (more cAMP) | Vasodilation -> **hypotension, flushing** |
| A2B | Gq (IP3/DAG, more Ca2+) | **Bronchoconstriction** -> brief wheeze, chest tightness |

- **Theophylline is the "opposite" (Slide 33):** a methylxanthine **adenosine antagonist** -> bronchodilation (asthma, COPD); in overdose the heart's Gi brake becomes stimulatory -> **arrhythmia** (narrow therapeutic index). Related to theobromine and caffeine - hence palpitations after too much coffee.

:::correlate
Paroxysmal Supraventricular Tachycardia (PSVT)

- **Presentation:** Sudden palpitations and fatigue; heart rate up to ~300/min in the Question Review.
- **Treatment:** **Adenosine** IV.
- **Complications:** Transient chest tightness and dyspnea (A2B/Gq bronchoconstriction), flushing and hypotension.
- **Lecturer's Point:** The effect "does not last long."
:::

## AV Nodal Suppressants, Magnesium and Potassium (Slides 34-37)

- **AV node suppressants (Slide 34):** **verapamil and diltiazem** (not dihydropyridines), **adenosine** (Gi), **digoxin** (vagal), **beta blockers** (block NE at beta-1).
- **Magnesium (Slide 35):** for **torsades de pointes** and **digitalis-induced arrhythmias** - **inhibits Ca2+ influx into the cytosol**, removing the calcium that drives DADs.
- **Potassium (Slide 36):**
  - **Hypokalemia:** slowed repolarization -> **early (phase 3) and delayed (phase 4) afterdepolarizations**; potentiates digoxin.
  - **Hyperkalemia:** depressed pacemaker (SA/AV) and slowed conduction; **decreased AP duration**.
  - Hyperkalemia from **ACE inhibitors, ARBs, aliskiren, spironolactone**; hypokalemia from thiazide and loop diuretics.

:::correlate
Torsades de Pointes

- **Pathophysiology:** QT prolongation from K+ channel blockade (Class Ia, Class III) or genetic long QT; EADs from hypokalemia and slow rates.
- **Treatment:** **Magnesium** (blocks Ca2+ influx).
- **Lecturer's Point:** Class III's reverse use dependence makes bradycardic patients most vulnerable.
:::

## Ivabradine (Slide 38)

Ivabradine is a **selective If ("funny current") blocker** that acts in the **SA node** only - it slows the pacemaker **without changing AP duration, repolarization or conduction**. "Look at the name": its main adverse effect is **bradycardia**.

- **Use:** CHF and stable angina, especially patients who **cannot tolerate or be managed with a beta blocker**.
- **Adverse effects:** bradycardia; **vision changes (phosphenes)** - bright spots, because it also blocks the retinal **Ih** channel that filters light; **avoid in pregnancy** (not well studied); **CYP3A4 inhibitors** (e.g., grapefruit juice) raise levels -> more bradycardia.

## Wolff-Parkinson-White (Slide 39)

In WPW an **accessory pathway (bundle of Kent)** bypasses the AV node, producing a **delta wave**. The AV node is the heart's filter, so if a WPW patient develops **atrial fibrillation** (or antidromic AV reentry) and you **suppress the AV node**, impulses are pushed down the unfiltered bundle of Kent and the ventricular rate can reach **200-300/min**.

:::highyield
**WPW + atrial fibrillation: never give an AV node suppressant** (verapamil, diltiazem, adenosine, digoxin, beta blockers). Use **procainamide** (inhibits initiation of the impulse) or **amiodarone** (increases refractoriness). Definitive therapy is procedural.
:::

:::correlate
Wolff-Parkinson-White Syndrome

- **Pathophysiology:** Reentry via an accessory pathway (bundle of Kent).
- **Diagnosis:** Delta wave on EKG.
- **Treatment:** Procedure (ablation); with AF, procainamide or amiodarone.
- **Complications:** AV node suppression -> ventricular rate 200-300/min.
:::

:::diagram cv85-wpw-af:::

## Drug Indications Summary (Slide 40)

The lecturer reviewed this table but said **"I'm not going to test you this on the exam"** - focus on mechanisms and adverse effects instead. For reference: sinus tachycardia - II, IV; atrial flutter/AF - Ia, Ic, II, III, IV or digoxin; **PSVT - adenosine**; **AV block - atropine** (M2 block); VT - I, III (**Ib if ischemic**); VF - Ia, Ib, III; **torsades - magnesium**; **TCA overdose - sodium bicarbonate**.
`,
  "flashcards": [
    { "front": "Match each phase of the ventricular action potential to its ion and antiarrhythmic class.", "back": "Phase 0 upstroke - Na+ in (Class I). Phase 1 - Na+ channels inactivate. Phase 2 plateau - Ca2+ in (Class IV). Phase 3 repolarization - K+ out (Class III, also Ia). Phase 4 - pacemaker slope, reduced by Class II and IV.", "tag": "Concept" },
    { "front": "What causes early versus delayed afterdepolarizations?", "back": "EADs arise around phase 3, most commonly from hypokalemia with a slow heart rate. DADs arise after phase 4 from intracellular calcium overload - digoxin toxicity or post-ischemia.", "tag": "Concept" },
    { "front": "What is use dependence, and what is reverse use dependence?", "back": "Use dependence (Class I): more Na+ channel block at faster rates, so the drug works harder in tachycardia. Reverse use dependence (Class III): more effect at slow rates, so bradycardic patients get the most QT prolongation.", "tag": "Glossary" },
    { "front": "Compare Ia, Ib and Ic effects on QRS and QT.", "back": "Ia (quinidine, procainamide, disopyramide): QRS up and QT up (also K+ block). Ib (lidocaine, mexiletine): QT down (AP shortened), minimal phase 0 effect. Ic (flecainide, propafenone): QRS up markedly, no QT change.", "tag": "Concept" },
    { "front": "Name the unique adverse effect of each Class Ia drug.", "back": "Quinidine: cinchonism (headache, dizziness, tinnitus) and immune thrombocytopenia/hepatitis. Procainamide: alpha block hypotension and drug-induced lupus in slow acetylators (NAPA). Disopyramide: the most atropine-like - give with an AV node suppressant.", "tag": "Clinical" },
    { "front": "Why is lidocaine the post-MI antiarrhythmic, and what is its toxicity?", "back": "It binds inactivated Na+ channels in depolarized ischemic tissue and shortens the AP, lowering QT. IV excess causes neurologic toxicity - paresthesias, then seizures. It is a CYP450 substrate.", "tag": "Clinical" },
    { "front": "Why are Class Ic drugs avoided after MI?", "back": "They markedly widen QRS and can raise ventricular rate; CAST showed higher mortality with flecainide in patients with structural damage. They are also negative inotropes that worsen CHF.", "tag": "Clinical" },
    { "front": "List the adverse effects of nonselective beta blockers from beta-2 blockade.", "back": "Bronchoconstriction, hypoglycemia (blocked glycogen breakdown) and worsened peripheral vascular disease. ISA agents (pindolol, acebutolol) can worsen ischemia.", "tag": "Clinical" },
    { "front": "What are the amiodarone toxicities and monitoring?", "back": "Thyroid (hyper from iodine; hypo from blocked T4 to T3), liver (desethylamiodarone), lung (pulmonary fibrosis - type II pneumocyte hyperplasia), eyes (corneal deposits), skin (smurf skin); P450 inhibition raises digoxin, warfarin, statins. Baseline LFTs, thyroid panel, and baseline plus yearly chest X-ray.", "tag": "Clinical" },
    { "front": "Why are dihydropyridines not used for arrhythmias?", "back": "They act on arteriolar smooth muscle; the fall in blood pressure triggers the baroreceptor reflex and reflex tachycardia (plus renin-driven edema). Verapamil and diltiazem act on the SA and AV nodes instead.", "tag": "Concept" },
    { "front": "What are the two mechanisms of digoxin?", "back": "Vagal (parasympathetic) - negative chronotropy and AV node suppression. Na+/K+ ATPase inhibition - Na+ builds up, the Na+/Ca2+ exchanger removes less Ca2+, contractility rises (positive inotropy).", "tag": "Concept" },
    { "front": "List digoxin toxicity signs, precipitants and treatment.", "back": "N/V/D, anorexia, xanthopsia (yellow vision), ventricular arrhythmias from DADs, gynecomastia. Precipitants: hypokalemia, hypomagnesemia, hypercalcemia, renal impairment, verapamil/quinidine (P-gp), amiodarone. Treat with DigFab and magnesium; EKG shows increased PR and hockey-stick ST depression.", "tag": "Clinical" },
    { "front": "Explain adenosine's therapeutic and adverse effects by receptor.", "back": "A1-Gi: decreased SA/AV node activity - terminates PSVT (half-life ~5 s). A2-Gs: vasodilation - hypotension, flushing. A2B-Gq: bronchoconstriction - brief wheeze. Theophylline is an adenosine antagonist (opposite).", "tag": "Concept" },
    { "front": "What drugs are used for WPW with atrial fibrillation, and what must be avoided?", "back": "Procainamide (inhibits initiation) or amiodarone (increases refractoriness). Avoid AV node suppressants - they divert impulses down the bundle of Kent, pushing the ventricular rate to 200-300/min.", "tag": "Clinical" },
    { "front": "What does ivabradine block, and what are its adverse effects?", "back": "The If funny current in the SA node, without changing AP duration or conduction. Adverse effects: bradycardia, phosphenes (retinal Ih block), avoid in pregnancy, CYP3A4 inhibitors raise levels.", "tag": "Concept" }
  ],
  "questions": [
    {
      "question": "A 62-year-old man is treated for paroxysmal atrial fibrillation with an oral antiarrhythmic. Six months later he has symmetric joint pain and a malar rash, and serology shows antihistone antibodies. Which feature of the patient most likely explains this reaction?",
      "options": ["A. Rapid hepatic CYP3A4 activity", "B. Slow N-acetylation of the drug", "C. Reduced renal P-glycoprotein function", "D. Low serum potassium", "E. Iodine accumulation in tissues"],
      "answer": "B",
      "rationale": "Procainamide undergoes phase II acetylation to N-acetylprocainamide. Slow acetylators accumulate the drug and develop drug-induced lupus (arthralgias, butterfly rash, antihistone antibodies), as with hydralazine and isoniazid. Iodine accumulation is an amiodarone problem, and P-glycoprotein and potassium matter for digoxin.",
      "hidden": true
    },
    {
      "question": "A 58-year-old man develops ventricular tachycardia a few hours after an acute MI. He receives an intravenous drug that binds inactivated sodium channels and shortens the ventricular action potential. Which adverse effect is most likely if the dose is too high?",
      "options": ["A. Bronchospasm", "B. Thrombocytopenia", "C. Paresthesias and seizures", "D. Butterfly rash", "E. Torsades de pointes"],
      "answer": "C",
      "rationale": "Lidocaine (Class Ib) acts on depolarized ischemic tissue and shortens the AP, lowering QT - which is why it suits the post-MI heart and does not cause torsades. As an amide local anesthetic, excess IV lidocaine causes neurologic toxicity: paresthesias and, at worst, seizures.",
      "hidden": true
    },
    {
      "question": "A 70-year-old woman on long-term therapy for atrial fibrillation develops progressive dyspnea and a dry cough. She also has bluish skin discoloration and corneal deposits. Which is the most appropriate management of her lung disease?",
      "options": ["A. Add a beta-2 agonist inhaler", "B. Start a loop diuretic", "C. Add digoxin", "D. Discontinue the drug and give glucocorticoids", "E. Continue the drug with yearly chest X-rays"],
      "answer": "D",
      "rationale": "Amiodarone causes pulmonary fibrosis through an immunologic reaction with type II pneumocyte hyperplasia and reduced surfactant; smurf skin and corneal deposits confirm the drug. Management is to stop amiodarone and give glucocorticoids. Yearly chest X-rays are screening, not treatment of established disease.",
      "hidden": true
    },
    {
      "question": "An 80-year-old woman with heart failure on digoxin is started on furosemide for worsening edema. Two weeks later she has nausea, sees yellow halos and has frequent ventricular ectopy. Which change most directly potentiated her toxicity?",
      "options": ["A. Hyperkalemia", "B. Hypermagnesemia", "C. Hypokalemia", "D. Hyponatremia", "E. Metabolic acidosis"],
      "answer": "C",
      "rationale": "Loop diuretics waste potassium, magnesium and calcium. Low potassium enhances digoxin's inhibition of Na+/K+ ATPase, producing an intracellular calcium surge and delayed afterdepolarizations. Keeping electrolytes normal is required before and during digoxin therapy; magnesium is part of the treatment.",
      "hidden": true
    },
    {
      "question": "A 24-year-old man with a known delta wave on EKG presents with an irregular tachycardia at 250/min consistent with atrial fibrillation. Which drug is most appropriate?",
      "options": ["A. Verapamil", "B. Adenosine", "C. Digoxin", "D. Metoprolol", "E. Procainamide"],
      "answer": "E",
      "rationale": "In Wolff-Parkinson-White with AF, suppressing the AV node diverts impulses down the unfiltered bundle of Kent, raising the ventricular rate further. Procainamide (inhibits initiation) or amiodarone (increases refractoriness) is used; verapamil, adenosine, digoxin and beta blockers are all AV node suppressants.",
      "hidden": true
    }
  ],
  "anking": [
    { "match": "Antiarrhythmics: Vaughan-Williams classification", "resources": "Class I Na+ block, II beta block, III K+ block, IV Ca2+ block; phase of action potential for each" },
    { "match": "Class IA antiarrhythmics", "resources": "Quinidine, procainamide, disopyramide; increased QRS and QT, torsades, cinchonism, thrombocytopenia, drug-induced lupus, anticholinergic effects" },
    { "match": "Class IB antiarrhythmics", "resources": "Lidocaine, mexiletine; inactivated channels, ischemic tissue, post-MI ventricular arrhythmias, CNS toxicity" },
    { "match": "Class IC antiarrhythmics", "resources": "Flecainide, propafenone; contraindicated in structural heart disease (CAST), widened QRS" },
    { "match": "Class II and IV antiarrhythmics", "resources": "Beta blockers decrease phase 4 slope; verapamil and diltiazem AV nodal block; constipation, gingival hyperplasia" },
    { "match": "Class III antiarrhythmics and amiodarone toxicity", "resources": "Amiodarone, sotalol, dofetilide, ibutilide, dronedarone; pulmonary fibrosis, hypo/hyperthyroidism, hepatotoxicity, corneal deposits, blue-gray skin; reverse use dependence" },
    { "match": "Digoxin mechanism and toxicity", "resources": "Na+/K+ ATPase inhibition, vagal effect, hypokalemia, yellow vision, DigFab, magnesium, verapamil/quinidine/amiodarone interactions" },
    { "match": "Adenosine and magnesium (Class V/other)", "resources": "Adenosine for PSVT, flushing, bronchospasm, theophylline antagonism; magnesium for torsades and digoxin toxicity" },
    { "match": "Ivabradine", "resources": "If (funny current) inhibitor, SA node, bradycardia, luminous phenomena (phosphenes)" },
    { "match": "Wolff-Parkinson-White syndrome", "resources": "Bundle of Kent, delta wave, avoid AV nodal blockers in AF, procainamide" }
  ],
  "ankingResource": {
    "primarySource": "BandB",
    "chapter": "Pharmacology > Cardiovascular > Antiarrhythmics",
    "alternatives": [
      { "resource": "SketchyPharm", "chapter": "Cardiovascular > Antiarrhythmics (Class I-IV, adenosine, digoxin)" },
      { "resource": "FirstAid", "chapter": "Cardiovascular > Pharmacology > Antiarrhythmics" },
      { "resource": "Pixorize", "chapter": "Pharmacology > Cardiovascular > Antiarrhythmics" },
      { "resource": "Bootcamp", "chapter": "Pharmacology > Cardiovascular > Antiarrhythmic Drugs" }
    ]
  },
  "pearls": [
    { "title": "Sodium is QRS, potassium is QT", "content": "QRS is ventricular depolarization (Na+), so Class Ia and Ic widen it. QT is the ventricular AP duration, so anything blocking K+ (Class Ia, Class III) lengthens it and risks torsades." },
    { "title": "The AV node is a filter", "content": "Without it, ventricular rates could reach 300-400/min. That is why AV node suppression controls rate in AF - and why it is dangerous when a bundle of Kent offers an unfiltered bypass." },
    { "title": "Use dependence vs reverse use dependence", "content": "Class I blocks more at fast rates (good in tachycardia). Class III acts more at slow rates, so bradycardic patients get the most QT prolongation." },
    { "title": "The Queen Prefers Discos", "content": "Quinidine (cinchonism, immune thrombocytopenia), procainamide (alpha block hypotension, lupus in slow acetylators), disopyramide (most atropine-like - pair with an AV node suppressant). All three block M2 and prolong QT." },
    { "title": "Ib shortens, Ic widens", "content": "Lidocaine shortens the AP and lowers QT, ideal post-MI; excess causes paresthesias and seizures. Flecainide widens QRS a lot and raised mortality in structurally damaged hearts (CAST)." },
    { "title": "Beta-2 blockade reaches the lungs", "content": "Nonselective beta blockers - including sotalol - cause bronchoconstriction, hypoglycemia and worsened PVD. New wheeze in a COPD patient on sotalol is beta-2 blockade." },
    { "title": "Amiodarone hits five organs", "content": "Thyroid, liver, lung, eyes, skin. Check LFTs, thyroid panel and a baseline chest X-ray, repeat the X-ray yearly; stop the drug and give glucocorticoids for pulmonary fibrosis." },
    { "title": "Dofetilide means 4 hours on the monitor", "content": "Dofetilide and ibutilide slow repolarization enough to raise QT markedly, so therapy starts with continuous EKG monitoring for about 4 hours." },
    { "title": "No dipines for arrhythmias", "content": "Dihydropyridines drop arteriolar pressure, provoke baroreflex tachycardia and renin-driven edema. Verapamil and diltiazem act on the SA and AV nodes; verapamil causes the most constipation." },
    { "title": "Hypokalemia arms digoxin", "content": "Low K+ strengthens Na+/K+ ATPase inhibition, overloads the myocyte with calcium and fires delayed afterdepolarizations. Loop diuretics in CHF are the classic setup." },
    { "title": "Yellow vision means digoxin", "content": "Xanthopsia comes from Na+/K+ ATPase inhibition in retinal cells. Add nausea, vomiting, diarrhea and ventricular ectopy in an elderly heart failure patient and the diagnosis is digoxin toxicity." },
    { "title": "Magnesium keeps calcium out", "content": "Magnesium inhibits calcium influx into the cytosol, treating both torsades and digoxin-induced delayed afterdepolarizations." },
    { "title": "Adenosine side effects are its other receptors", "content": "A1-Gi slows the AV node and ends PSVT in seconds; A2-Gs causes flushing and hypotension; A2B-Gq causes transient bronchoconstriction. Theophylline is its antagonist." },
    { "title": "Ivabradine: brady in the name", "content": "Selective If blocker in the SA node, no effect on AP duration or conduction. Expect bradycardia and phosphenes; avoid in pregnancy and with CYP3A4 inhibitors." },
    { "title": "TCA overdose looks like Class Ia", "content": "Tricyclics block cardiac Na+ channels: wide QRS and long QT. Give sodium bicarbonate to stabilize the channels." }
  ],
  "mindmap": `
## Antiarrhythmic Pharmacology

### Action Potential and EKG

- **Phase 0**: Na+ influx, upstroke; Class I
- **Phase 2**: Ca2+ plateau; Class IV
- **Phase 3**: K+ repolarization; Class III and Ia
- **Phase 4**: pacemaker slope; Class II and IV reduce it
- **Na+/Ca2+ exchanger**: 3 Na+ in for 1 Ca2+ out
- **QRS**: ventricular depolarization, sodium
- **T wave**: repolarization, potassium; flat in hypokalemia, peaked in hyperkalemia
- **QT**: ventricular AP duration; prolonged by K+ block
- **AV node**: filter; without it rates of 300-400/min

### Mechanisms of Arrhythmia

- **Automaticity**: phase 4, norepinephrine on beta-1
- **EAD**: phase 3, hypokalemia with slow rate
- **DAD**: after phase 4, calcium overload (digoxin, ischemia)
- **Reentry**: AF, flutter, WPW bundle of Kent

### Class I Sodium Channel Blockers

- **Use dependence**: more block at faster rates
- **Ia**: quinidine, procainamide, disopyramide; open channels; QRS and QT up; M2 block
- **Quinidine**: cinchonism, thrombocytopenia, hepatitis
- **Procainamide**: alpha block hypotension; NAPA; lupus in slow acetylators
- **Disopyramide**: most atropine-like; add AV node suppressant
- **Ib**: lidocaine, mexiletine, phenytoin; inactivated channels; AP and QT shortened; post-MI
- **Lidocaine toxicity**: paresthesias, seizures; CYP substrate
- **Ic**: flecainide, propafenone; slow unbinding; QRS widened a lot; no structural disease (CAST); negative inotrope
- **Flecainide**: ryanodine receptor block, CPVT

### Class II Beta Blockers

- **Mechanism**: decrease phase 4 slope; decrease HR, CO, renin
- **Uses**: hypertension, MI, CHF, arrhythmia, thyrotoxicosis
- **Nonselective**: bronchoconstriction, hypoglycemia, PVD
- **ISA**: pindolol, acebutolol worsen ischemia
- **Esmolol**: ultra-short IV

### Class III Potassium Channel Blockers

- **Mechanism**: prolong AP and ERP, no phase 0 change; QT up
- **Reverse use dependence**: more effect at slow rates
- **Amiodarone**: broad spectrum; P450 inhibitor; half-life ~60 days
- **Amiodarone toxicity**: thyroid, liver, lung fibrosis, corneal deposits, smurf skin
- **Lung monitoring**: baseline and yearly chest X-ray; stop drug, glucocorticoids
- **Dronedarone**: no iodine
- **Sotalol**: nonselective beta block plus K+ block
- **Dofetilide, ibutilide**: 4 hours EKG monitoring

### Class IV Calcium Channel Blockers

- **Verapamil, diltiazem**: increase AV node ERP; decrease phase 4
- **Not dihydropyridines**: baroreflex tachycardia, edema
- **Adverse effects**: bradycardia, constipation (verapamil), gingival overgrowth, grapefruit interaction

### Miscellaneous Agents

- **Digoxin**: Na+/K+ ATPase inhibition plus vagal effect
- **Digoxin toxicity**: N/V/D, xanthopsia, DAD arrhythmias, gynecomastia
- **Digoxin interactions**: antacids, cholestyramine, amiodarone, verapamil, quinidine; renal impairment
- **Digoxin treatment**: DigFab, electrolytes, magnesium
- **Digoxin EKG**: PR up, hockey-stick ST depression
- **Adenosine**: A1-Gi for PSVT; A2-Gs hypotension; A2B-Gq bronchoconstriction; theophylline opposite
- **Magnesium**: blocks Ca2+ influx; torsades and digoxin arrhythmia
- **Potassium**: hypokalemia EAD/DAD; hyperkalemia shortens AP
- **Ivabradine**: If blocker; bradycardia, phosphenes, avoid in pregnancy

### Special Situations

- **WPW with AF**: avoid AV node suppressants; procainamide or amiodarone
- **TCA overdose**: Ia-like QRS and QT; sodium bicarbonate
`
});
