window.receiveLectureContent({
  "id": "cv82",
  "title": "Lecture #82: Pathophysiology of Arrhythmias",
  "lecturer": "Youhua Zhang, MD, PhD",
  "pdf": "content/CV82_HighYield_Render.pdf",
  "content": `
# Lecture #82: Pathophysiology of Arrhythmias

**Lecturer:** Youhua Zhang, MD, PhD
**Session:** Lecture #82

## What Counts as an Arrhythmia (Slides 3-5)

An arrhythmia is simply **anything that is not normal sinus rhythm**, so the definition only works once normal is pinned down. A normal beat starts in the **sinus (SA) node**, runs at **60-100 bpm**, is **regular**, and follows the normal conduction sequence: SN -> atria -> AV node -> His bundle -> bundle branches -> Purkinje system -> ventricular myocytes. Any deviation is an arrhythmia - but some are **physiological** (sinus tachycardia during exercise), and the lecture focuses on the clinically significant ones. Two classification axes follow: heart **rate** tells you the family of mechanism, and the **site of origin** tells you what the QRS will look like.

- **By rate (Slide 4)** - thresholds are for adults:
  - **Bradyarrhythmia (less than 60 bpm):** conduction block and/or reduced automaticity.
  - **Tachyarrhythmia (more than 100 bpm):** increased automaticity, triggered activity, and/or **reentry - the most common mechanism of all tachyarrhythmias**.
- **By site of origin, for tachyarrhythmias (Slide 5):**
  - **Supraventricular:** arises **at the His bundle or above**; ventricles activate normally, so the QRS is **normal/narrow** - unless there is pre-existing abnormal ventricular conduction such as bundle branch block.
  - **Ventricular:** arises **below the His bundle**; abnormal ventricular activation gives a **widened QRS**.

:::highyield
Narrow-QRS tachycardia = supraventricular origin (His bundle or above). Wide-QRS tachycardia = typically ventricular origin (below the His bundle). The one exception to "SVT is narrow" is a pre-existing ventricular conduction abnormality such as bundle branch block - or antidromic AVRT (Slide 24).
:::

## The Mechanism Map (Slide 6)

Every arrhythmia in this lecture traces back to one of two failures: the heart either **starts impulses wrongly** or **conducts them wrongly**. Keeping this tree in mind turns the clinical table later in the lecture into a matching exercise rather than a list to memorize.

| Category | Mechanism | Subtypes |
| --- | --- | --- |
| Abnormal impulse initiation | Abnormal automaticity | Altered normal automaticity; abnormal automaticity |
| Abnormal impulse initiation | Triggered activity (TA) | Early afterdepolarization (EAD); delayed afterdepolarization (DAD) |
| Abnormal impulse conduction | Conduction block | SN-atrial junction, AV node, His bundle, bundle branches |
| Abnormal impulse conduction | Reentry | Anatomic (accessory pathways, scar); functional (no structural change) |

## Altered Normal vs Abnormal Automaticity (Slides 7-8)

"Altered normal automaticity" means the **sinus node itself** is simply firing too fast or too slow. "Abnormal automaticity" is different in kind: a **non-pacemaker myocyte** acquires pacemaker activity it should never have. The link is the resting membrane potential - injury depolarizes it, which inactivates the fast Na+ channels, so the cell falls back on the L-type Ca2+ channel and behaves like a slow-response (nodal) cell.

- **Altered normal automaticity (Slide 7)** - sinus rate out of range:
  - **Sinus tachycardia (more than 100 bpm):** usually **secondary**; physiological with exercise, or from disease states such as **fever** and **thyrotoxicosis**.
  - **Inappropriate sinus tachycardia:** a clinical syndrome of sinus tachycardia **without an obvious cause**.
  - **Sinus bradycardia (less than 60 bpm):** physiological at rest; pathological in **sick sinus syndrome (SSS)**.
- **Abnormal automaticity (Slide 8)** - atrial or ventricular working myocytes:
  - **Triggers:** hypoxia, ischemia, inflammation -> cell injury.
  - **Chain:** cell cannot hold normal resting potential -> membrane potential rises (more positive) -> **fast Na+ channels inactivate** -> cell excites through **I Ca-L** -> behaves as a **slow-response cell** (recall the action potential lecture).
  - **Consequence:** atrial or ventricular arrhythmias, depending on where it happens.

:::correlate
Sick Sinus Syndrome

- **Pathophysiology:** Degenerative disease of the cardiac pacemaker and conduction system -> failure of impulse generation (decreased automaticity).
- **Presentation:** Pathological sinus bradycardia or sinus arrest.
- **Lecturer's Point:** Distinguish from physiological sinus bradycardia at rest; SSS is the named pathological cause on Slides 7 and 18.
:::

## Triggered Activity: EAD vs DAD (Slide 9)

Triggered activity is an oscillation of membrane potential that **requires a preceding action potential** - it is "triggered by the previous AP", unlike automaticity. Where the oscillation lands in the AP decides everything: an afterdepolarization in **late phase 2 or phase 3** is an **EAD**, one in **phase 4** is a **DAD**. The two then have opposite links to heart rate, which is the fact most worth remembering.

| Feature | EAD | DAD |
| --- | --- | --- |
| Timing | Late phase 2 / phase 3 | Phase 4 |
| Substrate | **Prolonged AP duration** (long QT, hypokalemia) | **Ca2+ overload** (digitalis toxicity, reperfusion, CPVT) |
| Ionic cause | **Re-opening of L-type Ca2+ channels** (time-dependent recovery) | Ca2+ overload -> **increased Na+/Ca2+ exchanger current** (brings in net positive charge) |
| Heart rate | **Risk rises at slow rates** (bradycardia prolongs AP/QT) | **Risk rises at fast rates** (promotes Ca2+ overload) |

:::mnemonic
**EAD vs DAD and heart rate**
**E = Elongated AP, D = Diastolic Ca2+**

- **EAD:** Elongated (prolonged) AP -> worse with bradycardia.
- **DAD:** Diastolic Ca2+ overload -> worse with tachycardia.
:::

:::correlate
Digitalis Toxicity

- **Pathophysiology:** Intracellular Ca2+ overload -> Na+/Ca2+ exchanger current -> DAD-type triggered activity.
- **Lecturer's Point:** Listed with reperfusion-induced arrhythmia and CPVT as the classic Ca2+-overload (DAD) states.
:::

## Conduction Block (Slide 10)

The simplest conduction failure is a block: the impulse is generated but cannot get through. Blocks cause **bradyarrhythmias**, and they can occur at any link in the conduction chain.

- **Sino-atrial exit block** -> sinus bradycardia or arrest.
- **AV (atrioventricular) block.**
- **Left or right bundle branch block (BBB).**

## Reentry: How One Beat Excites the Heart Twice (Slides 11-13)

Normally one sinus impulse activates the atria, AV node, His-Purkinje system and ventricles **once** and then dies out - an impulse descending both limbs of a loop meets itself at the bottom and extinguishes. **Reentry** is when **the same impulse re-excites the heart again**. The lecturer calls it the important concept of the lecture because reentry is the **most common mechanism of tachyarrhythmias** [Lecturer Emphasis]. It needs tissue that is **inhomogeneous** - two pathways with different electrophysiological properties, anatomically or functionally.

- **The two-pathway model (Slide 12):**
  - **Slow pathway:** slow conduction velocity (CV) but **short ERP** (recovers quickly).
  - **Fast pathway:** fast CV but **long ERP** (recovers slowly).
- **Regular beats (A1):** the impulse goes down both limbs; the fast wave reaches the bottom first and runs retrograde into the slow limb, the two fronts **collide and stop** - no reentry.
- **Premature beat (A2):**
  - The fast pathway is still refractory (long ERP) -> **blocked**.
  - The slow pathway has already recovered (short ERP) -> A2 conducts down it, slowly.
  - By the time A2 reaches the bottom, the fast pathway has recovered -> the impulse travels **retrograde up the fast pathway**, finds the proximal tissue recovered, and **re-enters** -> a circus movement.

:::highyield
Three requirements to form reentry (Slide 13): (1) **unidirectional block** - conduction fails in one direction but is allowed in the reverse; (2) **slow conduction** - buys time for the previously refractory tissue to recover; (3) **recovery of previously excited proximal tissue**. When all three are met, reentry forms. A premature beat is the usual initiator.
:::

:::diagram cv82-reentry-formation:::

## Wavelength and the Excitable Gap (Slides 14-16)

A running reentry circuit has two parts: tissue that has just been excited and is **still refractory - the wavelength (WL)**, and tissue that has recovered and **can be excited - the excitable gap**. Circuit length = WL + excitable gap, so reentry survives only while **WL is shorter than the circuit** ("the head never catches up with the tail"). If the head runs into refractory tail, the wave dies.

- **Wavelength = CV x ERP** (distance = speed x time).
- **Increase WL -> decreased reentry risk; decrease WL -> increased reentry risk** (Slide 14).
- **Why many antiarrhythmics prolong ERP:** a longer ERP lengthens WL and suppresses reentry [Lecturer Emphasis].
- **Toy-train analogy (Slide 15):** the train (WL) must be shorter than the track (circuit) to run; a very short train lets **more than one train** fit on the track -> multiple simultaneous reentries.
- **Anti-tachycardia pacing, ATP (Slide 16):** because an excitable gap always exists, **capturing the gap by pacing or electrical shock** makes that tissue refractory ahead of the head and **terminates reentry** - a signature electrophysiological feature of reentrant arrhythmias.

:::diagram cv82-wavelength-gap:::

## Where Reentry Circuits Live (Slide 17)

| Circuit | Size | Type | Example |
| --- | --- | --- | --- |
| Atria + AV node/His + accessory pathway + ventricles | **Macro-reentry** | Anatomic | WPW syndrome |
| Purkinje fiber-myocyte junction | Micro-reentry | Functional | Purkinje/myocardial reentry |
| Within a muscle bundle | Micro-reentry | Functional | Myocardial reentry |
| AV node dual pathways | Very small circuit | Functional | AVNRT |

- The recording calls the WPW circuit "micro" once, but the slide (and the anatomy - it spans atria and ventricles) make it **macro-reentry**.

## Clinical Bradyarrhythmias (Slide 18)

Slow rhythms map straight back onto the two brady mechanisms from Slide 4: either the impulse is not made, or it is made and not delivered.

- **Failure of impulse generation (decreased automaticity):** sinus bradycardia or sinus arrest, typically in **sick sinus syndrome**.
- **Failure of impulse propagation (conduction block):** sino-atrial block, AV block.

## Supraventricular Tachyarrhythmias (Slides 19-20)

Every tachyarrhythmia uses **one or more of three basic mechanisms: abnormal automaticity, triggered activity (TA), or reentry**. Supraventricular ones arise at the His bundle or above and give a narrow QRS (unless ventricular conduction was already abnormal).

| Clinical arrhythmia | Mechanism |
| --- | --- |
| Sinus tachycardia | Enhanced normal automaticity |
| Atrial premature contraction | Abnormal automaticity, TA, or reentry |
| Atrial tachycardia | Abnormal automaticity, TA, or reentry |
| **Atrial flutter** | **Reentry** (right atrium) |
| **Atrial fibrillation** | **Multiple reentries** (ectopic foci + substrate) |
| **AVNRT** | **Reentry** (AV node dual pathway) |
| **AVRT** | **Reentry** (accessory pathway) |
| AV junctional tachycardia | Enhanced normal automaticity, abnormal automaticity, or TA |

:::correlate
Atrial Flutter

- **Pathophysiology:** Macro-reentry in the **right atrium** running through the **cavotricuspid isthmus** - the narrow band between the inferior vena cava (IVC) and the tricuspid valve (TV) (Slide 21).
- **Treatment:** Catheter **ablation of the cavotricuspid isthmus** cures it, because cutting the isthmus breaks the only path of the circuit.
:::

:::correlate
Atrial Fibrillation

- **Pathophysiology:** **Multiple reentries in both atria** (Slide 22). Needs two ingredients: **triggers/ectopic foci** (abnormal automaticity, TA) to initiate, and a **substrate** - remodeled atria with **dilatation and fibrosis** - to support multiple reentries and maintain it.
- **Treatment:** Most triggers arise in the **pulmonary veins**, so catheter-based **pulmonary vein (PV) isolation** is used to cure AF.
- **Lecturer's Point:** AF is **the most common clinically significant arrhythmia**; in a normal, healthy atrium it is hard to induce and maintain because the substrate is missing.
:::

:::correlate
AVNRT (AV Nodal Reentrant Tachycardia)

- **Pathophysiology:** **AV node dual-pathway electrophysiology** - the AV nodal region is functionally split into a **fast pathway (FP, long ERP)** and a **slow pathway (SP, short ERP)** (Slide 23). Normal beats conduct through the FP. A **premature beat** finds the FP blocked (long ERP), goes **antegrade down the SP**, then **retrograde up the FP** -> micro-reentry. This is the Slide 12 model in miniature.
- **Treatment:** **Slow-pathway ablation** cures AVNRT.
- **Lecturer's Point:** The fast pathway is spared because **fast-pathway ablation carries a higher risk of AV block**.
:::

:::correlate
AVRT and Wolff-Parkinson-White Syndrome

- **Pathophysiology:** An **accessory pathway (bundle of Kent)** - sometimes several - links atria and ventricles alongside the AV node-His route, creating an anatomic **macro-reentry** through the whole heart (Slides 24-25). WPW is the most common ventricular pre-excitation syndrome.
- **Diagnosis:** In WPW the pathway is **visible on ECG**: early ventricular depolarization through the bypass gives a **delta wave, short PR interval and widened QRS** (details in the ECG lecture). A **concealed** pathway leaves a normal resting ECG.
- **QRS during tachycardia:** antegrade down the **AV node-His-Purkinje** system -> **narrow QRS**; circuit **reversed** (ventricles activated through the accessory pathway) -> **wide QRS**.
- **Treatment:** **Accessory pathway ablation** cures it.
- **Lecturer's Point:** "As a minimum" you must know WPW: the bundle of Kent bypasses the rate-slowing AV node, and the reentry circuit produces supraventricular tachycardia [Lecturer Emphasis].
:::

:::highyield
Match the reentrant SVT to its ablation target: atrial flutter -> cavotricuspid isthmus; AF -> pulmonary vein isolation; AVNRT -> slow pathway (not fast, to avoid AV block); AVRT/WPW -> accessory pathway. Each target is the one piece of the circuit whose loss stops the arrhythmia.
:::

## Ventricular Tachyarrhythmias: PVC and VT (Slides 27-29)

Because ventricular arrhythmias arise below the His bundle, the ventricles are activated abnormally and the **QRS is always widened**. The three to know are premature ventricular contraction (PVC), ventricular tachycardia (VT) and ventricular fibrillation (VF). For VT, the shape of the QRS points to the substrate: a fixed shape suggests a fixed circuit in a scarred or diseased heart, while a constantly changing shape suggests an electrically unstable but often structurally normal heart.

- **PVC (Slide 28):** abnormal automaticity, TA or reentry; wide QRS on ECG.
- **Monomorphic VT** - QRS shape more or less constant (Slide 29):
  - **Structural heart disease:** ischemic or non-ischemic cardiomyopathy, arrhythmogenic RV dysplasia -> **predominantly reentry**.
  - **Structurally normal heart (idiopathic VT):** **outflow tract VT -> triggered activity**; **fascicular VT -> reentry**.
- **Polymorphic VT** - QRS keeps changing shape:
  - A specific type is **torsades de pointes (TdP)**, "twisting of the points".
  - Typically seen with **long QT syndrome** or **cardiac channelopathies** - Brugada syndrome, short QT syndrome, CPVT.

## Long QT Syndrome (Slides 30-34)

Long QT is a disorder of **repolarization**: less outward K+ current, or more inward Na+/Ca2+ current, keeps the action potential open longer. A prolonged AP is exactly the substrate for **EADs** (Slide 9), so **triggered activity (EAD) is the major mechanism** of the torsades that kills these patients. Sympathetic excitation increases inward currents on top of the defective outward channels, prolonging QT further - which is why **beta-blockers are used to prevent TdP** in long QT.

- **Congenital LQTS (Slide 30):** ~three-quarters are the first three types:
  - **LQT1 - I Ks** (K+ current reduced)
  - **LQT2 - I Kr** (K+ current reduced)
  - **LQT3 - I Na** (gain of function of the Na+ channel)
- **Acquired LQTS (Slides 32-34):** apparently healthy people with a normal QT develop long QT when taking certain drugs or under certain conditions - they may carry **subtle genetic defects**.

:::correlate
Congenital Long QT Syndrome

- **Pathophysiology:** Inherited disorder of myocardial repolarization from ion channel defects -> EAD-triggered **torsades de pointes** -> risk of **sudden cardiac death (SCD)** (Slide 31).
- **Romano-Ward syndrome:** autosomal dominant, **pure cardiac phenotype (no deafness)**.
- **Jervell and Lange-Nielsen syndrome:** autosomal recessive, **sensorineural deafness** - the channel defect also affects sensory neurons.
- **Treatment:** Beta-blocker to prevent TdP.
- **Lecturer's Point:** Required "as a minimum" - and **ask every long QT patient about hearing loss** [Lecturer Emphasis].
:::

:::mnemonic
**Drugs that cause acquired long QT (Slide 34)**
**ABCDE**

- **A:** AntiArrhythmics (class IA, III)
- **B:** AntiBiotics (e.g., macrolides)
- **C:** Anti"C"ychotics (e.g., haloperidol)
- **D:** AntiDepressants (e.g., TCAs)
- **E:** AntiEmetics (e.g., ondansetron)
:::

:::correlate
Torsades de Pointes

- **Pathophysiology:** Polymorphic VT on a long QT background; caused by drugs (ABCDE), **hypokalemia, hypomagnesemia** and other abnormalities (Slide 34).
- **Diagnosis:** Shifting sinusoidal waveforms on ECG.
- **Treatment:** **Magnesium sulfate**.
- **Complications:** Can progress to **ventricular fibrillation**.
:::

## Short QT, Brugada and CPVT (Slides 35-38)

Each channelopathy reaches polymorphic VT by a different route from the earlier mechanism sections: short QT through **short wavelength -> reentry**, Brugada through **dispersion of repolarization -> local re-excitation**, and CPVT through **Ca2+ overload -> DAD**.

:::correlate
Short QT Syndrome

- **Pathophysiology:** **Gain of function of K+ channels** (increased I K) -> rapid repolarization, very short AP duration and **QT less than 0.3 s** (Slide 35). The short AP gives a **short ERP -> short wavelength -> multiple reentries** (the "short train" of Slide 15).
- **Lecturer's Point:** The mirror image of long QT - it is arrhythmogenic through reentry rather than EADs.
:::

:::correlate
Brugada Syndrome

- **Pathophysiology:** **Diminished inward Na+ current**, particularly in the **right ventricular outflow tract (RVOT) epicardium** -> **epicardial dispersion of repolarization**; areas that repolarize early can be re-excited by neighboring myocytes (Slide 36).
- **Diagnosis:** **Coved-type ST elevation in V1-V3** (the leads over the RVOT); pseudo-right bundle branch block pattern (Slide 37).
- **Risk Factors:** Autosomal dominant; most common in **Asian males**.
- **Complications:** Ventricular tachyarrhythmias and **sudden cardiac death**.
- **Treatment:** **Implantable cardioverter-defibrillator (ICD)** to prevent SCD.
- **Lecturer's Point:** "You are required to know Brugada syndrome" [Lecturer Emphasis].
:::

:::correlate
Catecholaminergic Polymorphic VT (CPVT)

- **Pathophysiology:** Genetic disorders of the SR Ca2+ release channel - **leaky cardiac ryanodine receptor (RyR2)** - or its controlling proteins (e.g., calsequestrin). A RyR2 that should close in diastole leaks like a faucet -> **diastolic Ca2+ rises -> Na+/Ca2+ exchanger -> DAD** triggered activity (Slide 38).
- **Presentation:** **Structurally normal heart**; triggered by sympathetic excitation such as **exercise or acute emotion**.
- **Treatment:** **Beta-blocker** to prevent CPVT.
:::

:::highyield
Beta-blockers appear twice for opposite-sounding reasons that share one root: in long QT, sympathetic drive adds inward current to an already prolonged AP (more EADs); in CPVT, sympathetic drive worsens diastolic Ca2+ leak (more DADs). Brugada is the one channelopathy here treated with an ICD.
:::

## Ventricular Fibrillation and Electrical Therapy (Slides 39-42)

VF is the ventricular twin of AF: it can be **initiated by any of the three mechanisms** (automaticity, TA, reentry) and is **maintained by multiple wavelets/reentries**. The ventricles lose coordinated contraction and fail to pump - the patient is dying - and **defibrillation is the only effective therapy**. Why a shock works comes straight from the excitable-gap concept: one large shock **excites every excitable gap in all the reentries at once**, so the whole heart becomes refractory, every circuit dies, and the sinus node can start a new beat (Slide 40, answering the Slide 39 question).

| | Defibrillation | Cardioversion |
| --- | --- | --- |
| Rhythm | **VF only** | Other tachyarrhythmias: AF, PSVT, VT (if sync possible) - never VF |
| Synchronizer | **Off** - shock delivered immediately | **On** - shock timed to the **R wave** |
| Energy | Higher | Lower |
| Reason | VF signal may be too small to trigger a synchronized shock, so a synced machine may never fire | Avoids the T wave |

:::highyield
Synchronize cardioversion to the R wave, never the T wave (Slides 41-42). At the R wave the ventricles are depolarized and refractory - the safest moment. From the **peak to the end of the T wave** the ventricles are in their **vulnerable period**, and a shock there can **induce ventricular fibrillation**.
:::

:::correlate
Ventricular Fibrillation

- **Pathophysiology:** Initiated by automaticity, TA or reentry; maintained by multiple wavelets, as in AF.
- **Presentation:** Loss of coordinated ventricular contraction -> no cardiac output.
- **Treatment:** Immediate unsynchronized **defibrillation** (e.g., automated external defibrillator, AED) at higher energy.
- **Lecturer's Point:** The recording says defibrillation is the only therapy to terminate "atrial" fibrillation - the slide and context make clear this means **ventricular** fibrillation; AF is cardioverted.
:::
`,

  "flashcards": [
    { "front": "Define arrhythmia and list the four features of a normal heartbeat.", "back": "Arrhythmia = not normal sinus rhythm. Normal: origin in the sinus (SA) node, rate 60-100 bpm, regular rhythm, and normal conduction sequence SN -> atria -> AVN -> His -> bundle branches -> Purkinje -> ventricular myocytes. Some arrhythmias (sinus tachycardia with exercise) are physiological.", "tag": "Glossary" },
    { "front": "Why is a supraventricular tachycardia usually narrow-QRS and a ventricular tachycardia wide-QRS?", "back": "SVT arises at or above the His bundle, so the ventricles are activated normally through the His-Purkinje system (narrow QRS) unless there is pre-existing abnormal conduction such as BBB. Ventricular arrhythmias arise below the His bundle and activate the ventricles abnormally (wide QRS).", "tag": "Concept" },
    { "front": "How does an injured non-pacemaker myocyte acquire abnormal automaticity?", "back": "Hypoxia, ischemia or inflammation injures the cell -> resting membrane potential rises (more positive) -> fast Na+ channels inactivate -> the cell is excited through L-type Ca2+ current and behaves like a slow-response (pacemaker-like) cell.", "tag": "Concept" },
    { "front": "Contrast EAD and DAD: timing, cause, and heart-rate dependence.", "back": "EAD: late phase 2/phase 3; prolonged AP (long QT, hypokalemia); re-opening of L-type Ca2+ channels; risk rises at slow heart rates. DAD: phase 4; Ca2+ overload (digitalis toxicity, reperfusion, CPVT); increased Na+/Ca2+ exchanger current; risk rises at fast heart rates.", "tag": "Concept" },
    { "front": "What are the three requirements for reentry?", "back": "(1) Unidirectional block, (2) slow conduction, (3) recovery of previously excited proximal tissue. Typically initiated by a premature beat that blocks in the long-ERP fast pathway and conducts down the short-ERP slow pathway.", "tag": "Concept" },
    { "front": "What is reentry wavelength, and how does changing it alter reentry risk?", "back": "Wavelength = conduction velocity x ERP - the length of tissue that is refractory. Reentry needs wavelength shorter than the circuit. Increasing wavelength (e.g., antiarrhythmics that prolong ERP) decreases reentry risk; shortening it (short QT) increases risk and allows multiple reentries.", "tag": "Concept" },
    { "front": "Why can pacing or a shock terminate a reentrant tachycardia?", "back": "A reentry circuit always contains an excitable gap. Capturing the gap by anti-tachycardia pacing or an electrical shock makes that tissue refractory ahead of the wavefront, so the reentry dies.", "tag": "Concept" },
    { "front": "What is the mechanism and ablation target of typical atrial flutter?", "back": "Macro-reentry in the right atrium through the cavotricuspid isthmus (between the IVC and tricuspid valve). Catheter ablation of the isthmus cures it.", "tag": "Clinical" },
    { "front": "What two ingredients does atrial fibrillation require, and why is PV isolation used?", "back": "Triggers/ectopic foci (abnormal automaticity, TA) to start it and a substrate (remodeled, dilated, fibrotic atria) to maintain multiple reentries. Most triggers come from the pulmonary veins, so PV isolation cures AF.", "tag": "Clinical" },
    { "front": "In AVNRT, which pathway is ablated and why?", "back": "The slow pathway. AVNRT uses AV node dual pathways (premature beat blocks in the long-ERP fast pathway, goes down the slow pathway and back up the fast one). Fast-pathway ablation carries a higher risk of AV block.", "tag": "Clinical" },
    { "front": "What are the ECG findings of WPW, and when is AVRT wide-QRS?", "back": "Delta wave, short PR interval, widened QRS from pre-excitation through the bundle of Kent. During AVRT, antegrade conduction down the AV node-His-Purkinje system gives a narrow QRS; the reversed circuit (down the accessory pathway) gives a wide QRS.", "tag": "Clinical" },
    { "front": "Name the ion currents in LQT1, LQT2 and LQT3 and the arrhythmia mechanism of long QT.", "back": "LQT1 - I Ks (reduced K+), LQT2 - I Kr (reduced K+), LQT3 - I Na (gain of function); together about three-quarters of congenital cases. Mechanism: EAD triggered activity -> torsades de pointes. Beta-blockers prevent TdP.", "tag": "Concept" },
    { "front": "Contrast Romano-Ward and Jervell and Lange-Nielsen syndromes.", "back": "Both congenital long QT. Romano-Ward: autosomal dominant, pure cardiac phenotype, no deafness. Jervell and Lange-Nielsen: autosomal recessive, sensorineural deafness. Always ask long QT patients about hearing.", "tag": "Clinical" },
    { "front": "Brugada syndrome vs CPVT: defect, mechanism and prevention.", "back": "Brugada: diminished inward Na+ current in the RVOT epicardium -> dispersion of repolarization; coved ST elevation V1-V3; autosomal dominant, Asian males; ICD prevents SCD. CPVT: leaky RyR2 (or calsequestrin) -> diastolic Ca2+ leak -> Na+/Ca2+ exchanger -> DADs; normal heart, triggered by exercise or emotion; beta-blocker.", "tag": "Clinical" },
    { "front": "Defibrillation vs cardioversion: indication, synchronizer, energy.", "back": "Defibrillation: VF only, synchronizer off, higher energy, shock delivered immediately. Cardioversion: other tachyarrhythmias (AF, PSVT, VT), synchronizer on (R wave, not T wave), lower energy. A shock on the T wave (vulnerable period) can induce VF.", "tag": "Clinical" }
  ],
  "questions": [
    {
      "question": "A premature atrial impulse reaches a region with two parallel pathways: pathway X conducts quickly but has a long effective refractory period, and pathway Y conducts slowly with a short one. Which sequence most likely establishes reentry?",
      "options": ["A. Conduction down both pathways with collision at the distal end", "B. Block in pathway X, slow conduction down Y, retrograde return up X", "C. Block in pathway Y, fast conduction down X, retrograde return up Y", "D. Block in both pathways followed by a junctional escape beat", "E. Conduction down X with retrograde invasion and extinction in Y"],
      "answer": "B",
      "rationale": "The early impulse finds the long-ERP fast pathway still refractory (unidirectional block) but the short-ERP slow pathway recovered. Slow conduction down Y gives X time to recover, so the impulse returns retrograde up X and re-excites the proximal tissue. Options A and E describe a normal (A1) beat, where the wavefronts collide and die.",
      "hidden": true
    },
    {
      "question": "A 17-year-old girl faints while running. ECG shows a prolonged QT interval, and she reports hearing loss since early childhood. What is the most likely diagnosis and inheritance?",
      "options": ["A. Romano-Ward syndrome, autosomal dominant", "B. Brugada syndrome, autosomal dominant", "C. Short QT syndrome, gain of K+ channel function", "D. Jervell and Lange-Nielsen syndrome, autosomal recessive", "E. Catecholaminergic polymorphic VT, leaky RyR2"],
      "answer": "D",
      "rationale": "Congenital long QT with sensorineural deafness is Jervell and Lange-Nielsen syndrome (autosomal recessive). Romano-Ward is autosomal dominant with a pure cardiac phenotype and no deafness. The syncope reflects EAD-triggered torsades de pointes, which beta-blockers help prevent.",
      "hidden": true
    },
    {
      "question": "A patient with recurrent narrow-complex tachycardia is found to have AV nodal dual-pathway physiology. Which ablation target is preferred, and why?",
      "options": ["A. Fast pathway, because it has the long refractory period", "B. Cavotricuspid isthmus, because it anchors the circuit", "C. Slow pathway, because fast-pathway ablation risks AV block", "D. Pulmonary veins, because they supply ectopic triggers", "E. Bundle of Kent, because it bypasses the AV node"],
      "answer": "C",
      "rationale": "AVNRT is a micro-reentry using the AV node's fast and slow pathways; slow-pathway ablation cures it, and the fast pathway is left alone because ablating it carries a higher risk of AV block. The cavotricuspid isthmus is the flutter target, PV isolation the AF target, and the bundle of Kent the AVRT target.",
      "hidden": true
    },
    {
      "question": "A 34-year-old man of Asian descent with a family history of sudden death has coved-type ST elevation in leads V1-V3. What is the best intervention to prevent sudden cardiac death?",
      "options": ["A. Beta-blocker therapy", "B. Intravenous magnesium sulfate", "C. Slow pathway catheter ablation", "D. Pulmonary vein isolation", "E. Implantable cardioverter-defibrillator"],
      "answer": "E",
      "rationale": "This is Brugada syndrome: diminished inward Na+ current in the RVOT epicardium causes dispersion of repolarization and risk of ventricular tachyarrhythmias and SCD. An ICD is the preventive therapy. Beta-blockers are used for long QT and CPVT; magnesium treats torsades.",
      "hidden": true
    },
    {
      "question": "A patient in atrial fibrillation with a rapid ventricular rate is scheduled for electrical cardioversion. Why must the shock be synchronized to the R wave?",
      "options": ["A. A shock on the T wave falls in the ventricular vulnerable period and can induce VF", "B. The R wave marks the moment of maximal atrial excitability", "C. Synchronization lowers the energy needed to depolarize the atria", "D. A shock during the P wave produces complete heart block", "E. Unsynchronized shocks cannot capture excitable gaps"],
      "answer": "A",
      "rationale": "At the R wave the ventricles are depolarized and refractory, the safest moment to shock. From the peak to the end of the T wave the ventricles are vulnerable, and a shock there can induce ventricular fibrillation. Defibrillation for VF is deliberately unsynchronized, because VF may not produce a signal large enough to trigger a synced shock.",
      "hidden": true
    }
  ],
  "anking": [
    { "match": "Arrhythmia mechanisms: automaticity, triggered activity, reentry", "resources": "Abnormal automaticity in injured myocytes, EAD vs DAD, reentry requirements (unidirectional block, slow conduction)" },
    { "match": "Early and delayed afterdepolarizations", "resources": "EAD with long QT and bradycardia (L-type Ca2+ reactivation); DAD with digoxin toxicity and Ca2+ overload (Na+/Ca2+ exchanger)" },
    { "match": "Atrial fibrillation and atrial flutter", "resources": "Pulmonary vein triggers, atrial remodeling, cavotricuspid isthmus ablation, multiple reentries" },
    { "match": "Wolff-Parkinson-White syndrome", "resources": "Bundle of Kent, delta wave, short PR, wide QRS, AVRT, accessory pathway ablation" },
    { "match": "AVNRT / paroxysmal supraventricular tachycardia", "resources": "AV nodal dual pathway, slow pathway ablation, synchronized cardioversion" },
    { "match": "Congenital long QT syndrome", "resources": "Romano-Ward (AD, no deafness) vs Jervell and Lange-Nielsen (AR, sensorineural deafness), torsades de pointes, beta-blockers" },
    { "match": "Drug-induced long QT and torsades de pointes", "resources": "ABCDE: antiarrhythmics IA/III, antibiotics (macrolides), antipsychotics (haloperidol), antidepressants (TCAs), antiemetics (ondansetron); hypokalemia, hypomagnesemia; magnesium sulfate" },
    { "match": "Brugada syndrome", "resources": "Pseudo-RBBB, ST elevation V1-V3, Asian males, autosomal dominant, ICD" },
    { "match": "Ventricular tachycardia and ventricular fibrillation", "resources": "Monomorphic vs polymorphic VT, defibrillation vs synchronized cardioversion" }
  ],
  "ankingResource": {
    "primarySource": "BandB",
    "chapter": "Cardiology > Arrhythmias > Arrhythmia Mechanisms (Reentry, Automaticity, Triggered Activity)",
    "alternatives": [
      { "resource": "FirstAid", "chapter": "Cardiovascular > Physiology > ECG, Congenital and Acquired Long QT, Brugada, WPW" },
      { "resource": "Pathoma", "chapter": "Cardiac Pathology > Ischemic Heart Disease > Sudden Cardiac Death and Arrhythmia" },
      { "resource": "SketchyPharm", "chapter": "Cardiovascular > Antiarrhythmics (Class IA, III and QT Prolongation)" },
      { "resource": "Bootcamp", "chapter": "Cardiology > Arrhythmias" },
      { "resource": "Physeo", "chapter": "Cardiovascular > Electrophysiology > Arrhythmias" }
    ]
  },
  "pearls": [
    { "title": "Reentry is the default answer", "content": "Among the three tachyarrhythmia mechanisms (automaticity, triggered activity, reentry), reentry is the most common. Atrial flutter, AF, AVNRT, AVRT and most structural monomorphic VT are all reentrant." },
    { "title": "Narrow is above, wide is below", "content": "At or above the His bundle -> normal ventricular activation -> narrow QRS. Below the His bundle -> abnormal activation -> wide QRS. Pre-existing BBB or a reversed AVRT circuit makes an SVT wide." },
    { "title": "Injury makes a myocyte nodal", "content": "Ischemia, hypoxia or inflammation raises the resting potential, inactivating fast Na+ channels; the myocyte then fires on L-type Ca2+ current like a slow-response cell - abnormal automaticity." },
    { "title": "EAD likes slow, DAD likes fast", "content": "EAD rides on a prolonged AP (long QT, hypokalemia) and L-type Ca2+ re-opening, so bradycardia worsens it. DAD rides on Ca2+ overload and the Na+/Ca2+ exchanger, so tachycardia worsens it." },
    { "title": "Three conditions for reentry", "content": "Unidirectional block, slow conduction, and recovery of the previously excited proximal tissue. A premature beat blocks in the long-ERP fast pathway and sneaks down the short-ERP slow one." },
    { "title": "Longer wavelength, less reentry", "content": "Wavelength = CV x ERP and must be shorter than the circuit. Prolonging ERP lengthens wavelength and suppresses reentry; a very short wavelength (short QT) lets several reentries coexist." },
    { "title": "The excitable gap is the off switch", "content": "Every reentry circuit has an excitable gap. Pacing or shocking into it terminates the circuit - the basis of anti-tachycardia pacing and of defibrillation, where one shock fills every gap at once." },
    { "title": "Ablate the one piece the circuit needs", "content": "Flutter -> cavotricuspid isthmus. AF -> pulmonary vein isolation. AVNRT -> slow pathway (fast-pathway ablation risks AV block). AVRT -> accessory pathway." },
    { "title": "AF needs trigger plus substrate", "content": "Ectopic triggers (mostly pulmonary veins) start it; remodeled, dilated, fibrotic atria keep multiple reentries going. A healthy atrium is hard to keep in AF." },
    { "title": "Monomorphic VT points to structure", "content": "Monomorphic VT is usually reentry in structural disease (ischemic or non-ischemic cardiomyopathy, ARVD). Idiopathic forms: outflow tract VT is triggered activity; fascicular VT is reentry." },
    { "title": "Long QT: EAD, torsades, beta-blocker", "content": "LQT1 I Ks, LQT2 I Kr, LQT3 I Na cover about three-quarters of congenital cases. EADs drive torsades; sympathetic drive prolongs QT further, so beta-blockers prevent it." },
    { "title": "Ask the long QT patient about hearing", "content": "Jervell and Lange-Nielsen is autosomal recessive with sensorineural deafness; Romano-Ward is autosomal dominant with no deafness." },
    { "title": "ABCDE prolong the QT", "content": "AntiArrhythmics (IA, III), AntiBiotics (macrolides), Anti-C-ychotics (haloperidol), AntiDepressants (TCAs), AntiEmetics (ondansetron). Add low K+ and low Mg2+. Torsades is treated with magnesium sulfate." },
    { "title": "Brugada gets an ICD", "content": "Reduced inward Na+ current in RVOT epicardium, coved ST elevation V1-V3, autosomal dominant, Asian males. The ICD, not a drug, prevents sudden death." },
    { "title": "CPVT is a leaky faucet", "content": "Leaky RyR2 spills Ca2+ in diastole -> Na+/Ca2+ exchanger -> DADs, in a structurally normal heart, triggered by exercise or emotion. Beta-blockers prevent it." },
    { "title": "Never shock on the T wave", "content": "Defibrillation is for VF only: unsynchronized, higher energy. Cardioversion (AF, PSVT, VT) is synchronized to the R wave at lower energy, because the peak-to-end of the T wave is the vulnerable period and a shock there can induce VF." }
  ],
  "mindmap": `
## Pathophysiology of Arrhythmias

### Definition and Classification

- **Arrhythmia**: Not normal sinus rhythm; some are physiological
- **Normal beat**: SA node origin, 60-100 bpm, regular, normal conduction sequence
- **Bradyarrhythmia**: Less than 60 bpm; conduction block or reduced automaticity
- **Tachyarrhythmia**: More than 100 bpm; automaticity, triggered activity, reentry (most common)
- **Supraventricular**: His bundle or above; narrow QRS unless pre-existing BBB
- **Ventricular**: Below His bundle; widened QRS

### Abnormal Impulse Initiation

- **Altered normal automaticity**: Sinus tachycardia (exercise, fever, thyrotoxicosis), inappropriate sinus tachycardia, sinus bradycardia (rest, sick sinus syndrome)
- **Abnormal automaticity**: Injured atrial/ventricular myocyte; raised resting potential inactivates fast Na+ channels; fires on I Ca-L like a slow-response cell
- **EAD**: Late phase 2/3; prolonged AP (long QT, hypokalemia); L-type Ca2+ re-opening; worse at slow rates
- **DAD**: Phase 4; Ca2+ overload (digitalis toxicity, reperfusion, CPVT); Na+/Ca2+ exchanger; worse at fast rates

### Abnormal Impulse Conduction

- **Conduction block**: Sino-atrial exit block, AV block, bundle branch block; causes bradyarrhythmias
- **Reentry**: Same impulse re-excites the heart; needs inhomogeneous tissue
- **Two-pathway model**: Fast pathway long ERP, slow pathway short ERP; premature beat A2 initiates
- **Requirements**: Unidirectional block, slow conduction, recovery of proximal tissue
- **Wavelength**: CV x ERP; must be shorter than circuit; longer wavelength lowers reentry risk
- **Excitable gap**: Recovered tissue in the circuit; pacing or shock into it terminates reentry (ATP)
- **Circuits**: Macro-reentry in WPW; micro-reentry at Purkinje-myocyte junctions, muscle bundles, AV node

### Clinical Bradyarrhythmias

- **Failure of generation**: Sinus bradycardia or arrest in sick sinus syndrome
- **Failure of propagation**: Sino-atrial block, AV block

### Supraventricular Tachyarrhythmias

- **Sinus tachycardia**: Enhanced normal automaticity
- **Atrial premature contraction and atrial tachycardia**: Automaticity, TA or reentry
- **Atrial flutter**: Right atrial reentry through cavotricuspid isthmus; isthmus ablation
- **Atrial fibrillation**: Multiple reentries; triggers plus substrate; pulmonary vein isolation; most common significant arrhythmia
- **AVNRT**: AV node dual pathway micro-reentry; slow pathway ablation (fast risks AV block)
- **AVRT / WPW**: Bundle of Kent macro-reentry; delta wave, short PR, wide QRS; narrow or wide depending on direction; pathway ablation
- **AV junctional tachycardia**: Enhanced or abnormal automaticity, or TA

### Ventricular Tachyarrhythmias

- **PVC**: Automaticity, TA or reentry; wide QRS
- **Monomorphic VT**: Structural disease reentry; idiopathic outflow tract VT (TA) and fascicular VT (reentry)
- **Polymorphic VT**: Torsades de pointes; long QT and channelopathies
- **VF**: Any mechanism initiates; multiple wavelets maintain; defibrillation

### Channelopathies

- **Congenital long QT**: LQT1 I Ks, LQT2 I Kr, LQT3 I Na; EAD; beta-blocker
- **Romano-Ward**: Autosomal dominant, no deafness
- **Jervell and Lange-Nielsen**: Autosomal recessive, sensorineural deafness
- **Acquired long QT**: ABCDE drugs, hypokalemia, hypomagnesemia; magnesium sulfate for torsades
- **Short QT**: K+ gain of function; QT less than 0.3 s; short wavelength; multiple reentries
- **Brugada**: Reduced Na+ current in RVOT epicardium; coved ST elevation V1-V3; ICD
- **CPVT**: Leaky RyR2; DAD; exercise or emotion; beta-blocker

### Electrical Therapy

- **Defibrillation**: VF only; synchronizer off; higher energy
- **Cardioversion**: AF, PSVT, VT; synchronized to R wave; lower energy
- **Vulnerable period**: Peak to end of T wave; shock here can induce VF
`
});
