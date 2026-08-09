window.receiveLectureContent({
  "id": "cv23",
  "title": "Lecture #23: Cardiac Impulse Initiation, Propagation, and Autonomic Regulation",
  "lecturer": "Youhua Zhang, M.D., Ph.D.",
  "pdf": "content/CV23_HighYield_Render.pdf",
  "content": `
# Lecture #23: Cardiac Impulse Initiation, Propagation, and Autonomic Regulation

**Lecturer:** Youhua Zhang, M.D., Ph.D.
**Session:** Lecture #23

## Orientation: How One Spark Becomes a Coordinated Heartbeat (Slides 1-3)

Every normal heartbeat begins as a single slow-response action potential inside a cluster of unremarkable-looking cells at the top of the right atrium, and everything that follows - the P wave, the QRS complex, the T wave, atrial contraction, ventricular ejection - is downstream of that one event. This lecture answers three linked questions: where does the beat come from (impulse initiation), how does it get to the rest of the heart (impulse propagation), and how does the nervous system dial the whole system up or down (autonomic regulation). The organizing insight is that the heart is not electrically homogeneous: different regions have different action potential types, different cell sizes, and different gap-junction proteins, and those three variables explain essentially every conduction speed and every drug effect in this lecture. Keep that trio in mind and the material collapses from a list of facts into one mechanism applied repeatedly.

- **Normal heartbeat origin (Slide 3):** the **sinoatrial (sinus) node**, in the form of **slow response action potentials**.
- **Propagation determines two things (Slide 11):** the **ECG waveforms** you will interpret in the EKG lecture, and **cardiac mechanical function** (which chamber contracts when, and in which direction).

## Mechanism of Pacemaker Activity: Phase 4 Spontaneous Depolarization (Slides 4-6)

Automaticity exists because slow-response cells refuse to sit still. Unlike a ventricular myocyte, a nodal cell has **no stable resting membrane potential**; after it repolarizes, the membrane immediately begins drifting back up toward threshold. That drift is **phase 4 spontaneous depolarization**, and it is the single reason the heart beats without any input from the brain. The trigger is counterintuitive: repolarization carries the membrane below the expected -60 to -65 mV floor (**hyperpolarization**), and that hyperpolarization is precisely what opens the channel responsible for climbing back up.

- **The pacemaker channel (Slide 4):** the dominant contributor to phase 4.
  - Full name: **hyperpolarization-activated cyclic nucleotide-gated (HCN) channel**; nickname the **funny channel**.
  - Its current is the **pacemaker current / funny current (If)**, formally the **hyperpolarization-activated non-selective cation current**.
  - It conducts **both Na+ and K+** - it is non-selective, and it is **not** the fast Na+ channel of fast-response fibers [Lecturer Emphasis].
  - It opens on **hyperpolarization**, the opposite of the voltage-gated behavior students expect.
- **Two supporting mechanisms (Slide 4):** pacemaking is **multifactorial**.
  - **Decaying IK1:** progressive closing of the potassium channel removes the outward current holding the cell down.
  - **T-type Ca2+ channels:** open in **later phase 4** and add inward current just before threshold.
- **The membrane clock and the calcium clock (Slide 5):** real pacemaking is more complex than three channels.
  - The three sarcolemmal channels (If, ICa-T, IK) are collectively the **membrane clock (M-clock)** because they sit on the cell membrane.
  - **Periodic Ca2+ release from the sarcoplasmic reticulum** also drives pacemaking - the **calcium clock (Ca clock)**.
  - Lecturer framing: know the terminology because it appears in the literature; the M-clock/Ca-clock distinction is "good to know," not the core testable point.
- **Minimum requirement (Slide 6):** at bare minimum, know that the **pacemaker current is the major force for pacemaker activity**.

:::highyield
Phase 4 spontaneous depolarization is generated primarily by the pacemaker (funny/HCN) current, If - a hyperpolarization-activated, NON-selective cation current carrying Na+ and K+. Hyperpolarization below about -65 mV opens it. It is not the fast Na+ channel. T-type Ca2+ channels and decaying IK1 are contributors, not the main driver.
:::

:::mnemonic
**Why the Funny Current Is Funny**
**F-U-N-N-Y**

- **F:** Fires on hyperpolarization (backwards from every other voltage-gated channel)
- **U:** Un-selective - carries Na+ AND K+
- **N:** Not the fast Na+ channel
- **N:** Nucleotide-gated - cAMP binds it directly (this is how autonomics work)
- **Y:** Yields phase 4 spontaneous depolarization
:::

## The Three Determinants of Pacemaker Rate (Slides 7-9)

To fire an action potential, the membrane must travel from its most negative point up to threshold. The lecturer's model is deliberately simple: this is a **distance-and-speed problem**. The maximum diastolic potential and the threshold level together set the **distance** to be covered; the slope of phase 4 sets the **speed**. Any intervention - a drug, a neurotransmitter, an electrolyte disturbance - changes heart rate by changing one of these three variables, and you can predict the direction of the change without memorizing anything.

- **1. Rate (slope) of spontaneous depolarization (Slide 7):**
  - **Slower slope = slower speed = longer time to threshold = slower heart rate.** Steeper slope = faster heart rate.
- **2. Maximum diastolic potential level (Slide 8):**
  - For a slow-response cell the correct term is the **maximum diastolic potential**, not "resting" potential, because the cell never truly rests [Lecturer Emphasis].
  - **More negative (lower) maximum diastolic potential = greater distance = slower heart rate.** Less negative = faster heart rate.
- **3. Threshold level (Slide 9):**
  - **Raising (making less negative) the threshold = greater distance = slower heart rate.** Lowering the threshold = shorter distance = faster heart rate.

:::highyield
Heart rate = distance / speed. Distance is set by the maximum diastolic potential and the threshold; speed is the slope of phase 4. Vagal stimulation attacks all three levers (hyperpolarizes via IKACh, reduces If and ICa, flattening the slope) - which is why acetylcholine is such a powerful brake.
:::

## The Pacemaker Hierarchy (Slide 10)

Automaticity is not unique to the sinus node - it is simply fastest there. Every potential pacemaker is competing to fire first, and the fastest one wins and **overdrive-suppresses** the rest. This is why a healthy person has a sinus rhythm and why failure of the fastest site does not stop the heart: a slower site takes over.

| Level | Structure | Intrinsic rate | Role |
| --- | --- | --- | --- |
| 1 | Sinus (SA) node | 60-100 bpm (adults) | Primary pacemaker |
| 2 | Atrioventricular (AV) node | 40-60 bpm | Secondary / backup pacemaker |
| 3 | His-Purkinje system | 20-40 bpm | Ventricular escape beats |

- **Why the His-Purkinje system can pace at all:** it contains a **small amount of pacemaker channels** [Lecturer Emphasis].
- **Why it normally never does:** it is **overdriven** by impulses arriving from the sinus node.
- **When it does:** when **both the SA node and the AV node fail** to generate beats - the resulting rhythm is a **ventricular escape rhythm**.

:::correlate
Ventricular Escape Rhythm (Escape Beats)

- **Pathophysiology:** Failure of both the sinus node and the AV node to generate impulses removes overdrive suppression, unmasking the latent pacemaker channels in the His-Purkinje system. Strong vagal stimulation can produce the same picture by simultaneously inhibiting the SA and AV nodes, both of which are densely innervated by vagal fibers.
- **Presentation:** A very slow rhythm, in the range of 20-40 bpm from His-Purkinje tissue; under strong vagal stimulation the lecturer specifies a rate under 40 bpm.
- **Lecturer's Point:** The His-Purkinje system is the third tier of the pacemaker hierarchy and is a life-saving backup, not a normal rhythm. Remember the descending ladder 60-100, 40-60, 20-40 bpm.
:::

## Impulse Propagation I: The Sinus Node and the Atria (Slides 11-17)

Once the sinus node fires, the wavefront follows a fixed anatomic sequence: **atria, AV node, His bundle, bundle branches, Purkinje fibers, ventricles**. The details of the atrial portion of that sequence are what generate the P wave and its axis, and they follow directly from where the sinus node sits.

- **Sinus node anatomy (Slide 12):**
  - **Location:** junction of the **superior vena cava (SVC) and the right atrium** - clinically the **"high RA."**
  - **Center:** **nodal cells / pacemaker (P) cells**. **Periphery:** **transitional cells** bridging nodal cells to atrial myocytes.
  - **Conduction inside the node is slow** because it uses **low-conductance connexin Cx45**.
  - **Normal sinus rate:** 60-100 bpm, averaging about **72 bpm**.
- **Atrial spread (Slide 13):**
  - Starts at the **high RA**, travels **downward** to the AV node and **leftward** to the left atrium.
  - **Three internodal pathways** (anterior, lateral, posterior) carry activation down the right atrium.
  - **Bachmann's bundle**, on the **roof of both atria**, carries activation from RA to LA - therefore the **RA is activated before the LA**.
  - **Critical nuance [Lecturer Emphasis]:** the internodal pathways and Bachmann's bundle are made of **ordinary atrial myocytes** arranged as preferential muscle bundles - they are **NOT specialized conducting fibers** like the His-Purkinje system.
- **Direction and the P wave (Slides 13, 16):**
  - Overall atrial depolarization vector: **top to bottom, right to left** - i.e., **downward and leftward**.
  - This vector sets the **P wave axis**, which is why the P wave is upright in some leads and inverted in others.
  - On simultaneous recordings, the **high-RA intracardiac electrogram** occurs at the **beginning of the surface P wave**; the **His-position catheter** records distal atrial (A), His (H), and ventricular (V) signals.
- **Functional payoff (Slide 17):** because atrial excitation and contraction run **top to bottom**, blood is pushed **downward from the atria into the ventricles**.
- **Anisotropic conduction (Slides 14-15):**
  - Conduction **along** fiber orientation (**longitudinal**) is **faster** than **across** fibers (**transverse**).
  - Two reasons: **more gap junctions** at end-to-end connections than at side-to-side connections, and **fewer cells to cross** per unit distance longitudinally.
  - **Gap junctions** are clusters of intercellular channels allowing **direct diffusion of ions and small molecules** between adjacent cells; they are built from **connexins (Cx40, Cx43, Cx45)** with **different conductances**.

:::correlate
Sinus Tachycardia and Sinus Bradycardia

- **Pathophysiology:** Both are disorders of the rate of sinus node phase 4 depolarization (or of the distance to threshold). Sympathetic drive steepens phase 4 and speeds the rate; vagal drive hyperpolarizes and flattens phase 4 and slows it.
- **Presentation/Diagnosis:** Normal adult sinus rate is 60-100 bpm (average about 72 bpm). A sinus rate **above 100 bpm is sinus tachycardia**; **below 60 bpm is sinus bradycardia**.
- **Lecturer's Point:** These definitions are pure numbers off the sinus node slide and are the baseline against which every arrhythmia in the block is judged.
:::

## Impulse Propagation II: The AV Node (Slides 18-20)

The AV node is where the electrical story becomes a mechanical one. It is the **only normal electrical connection between the atria and the ventricles**, and it is deliberately, usefully slow. That slowness is not a design flaw - it is the mechanism that lets the atria finish emptying before the ventricles squeeze, and it is the mechanism that keeps a chaotic atrium from killing the patient.

- **Location and anatomy (Slides 18-19):**
  - **Lower interatrial septum**; clinically described within the **triangle of Koch**.
  - The triangle is bounded by the **tricuspid annulus**, the **tendon of Todaro**, and the **ostium of the coronary sinus**; the AV node sits at the **apex** of the triangle.
  - **Histology:** central **N (nodal) cells** flanked by two transitional zones - **AN (atrio-nodal)** cells on the atrial side and **NH (nodal-His)** cells on the His side.
- **The three roles of the AV node (Slide 18):**
  - **1. Physiological AV delay (~0.1 s):** allows the atria to complete contraction and **optimize ventricular filling** before ventricular contraction begins. **About 20% of ventricular filling comes from atrial contraction.**
  - **2. Backup (secondary) pacemaker:** 40-60 bpm when the sinus node fails.
  - **3. Filter during atrial tachyarrhythmias:** blocks most impulses when atrial rates are extremely high.
- **AV nodal activation is NOT visible on the ECG** [Lecturer Emphasis] - it is buried in the PR segment; only an intracardiac catheter reveals it.
- **Why AV nodal conduction is slow (Slide 20) - four reasons:**
  - **Slow response action potential** driven by **L-type Ca2+ current** rather than fast INa: **lower dV/dt** (maximal upstroke velocity) and **lower amplitude**.
  - **Low-conductance connexin (Cx45).**
  - **Small cell size.**
  - **Dense connective tissue** within the node.
- **Lecturer's sample question (Slide 20):** to inhibit AV conduction, would you choose an **L-type calcium channel blocker** or a **sodium channel blocker**? Answer: the **L-type calcium channel blocker**, because the AV nodal upstroke depends on ICa-L, not on INa.

:::correlate
Atrial Fibrillation (and the AV Node as a Protective Filter)

- **Pathophysiology:** During atrial fibrillation the atrial rate is **400-600 bpm**. Because the AV node conducts slowly and has a long refractory period, **many atrial impulses are blocked within the node**.
- **Presentation:** The resulting ventricular rate is far slower than the atrial rate, **typically 100-150 bpm** during AF.
- **Complications:** **If every atrial impulse were conducted to the ventricles, ventricular fibrillation would occur** - the AV node is what prevents this.
- **Treatment (mechanistic corollary):** Slowing AV nodal conduction pharmacologically requires targeting the **L-type Ca2+ current** that generates the nodal upstroke, not the fast Na+ current.
- **Lecturer's Point:** The filtering role is the reason atrial flutter and AF are survivable rhythms. This is the AV node's third job and the one with the most immediate clinical consequence.
:::

## Impulse Propagation III: The His-Purkinje System (Slides 21-23)

After clearing the AV node, the impulse enters the fastest tissue in the heart. The architecture here is deliberately insulated: the His bundle and the bundle branches are wrapped in fibrous tissue and **make no direct contact with ventricular myocytes**, so the impulse is carried at high speed to the apex before it is released. Only the Purkinje fibers, distributed sub-endocardially, actually touch myocardium - and that single anatomic fact explains why the endocardium depolarizes before the epicardium.

- **Anatomy (Slide 21):**
  - **His bundle:** in the **central fibrous body and upper interventricular septum**; bifurcates into **right and left bundle branches**.
  - **Right bundle branch:** travels down the septum, supplying Purkinje fibers to the right ventricle.
  - **Left bundle branch:** bifurcates into the **left anterior fascicle** and **left posterior fascicle**, and also gives off a small **septal fascicle** - remember this one for the EKG lecture.
  - **Insulation:** His bundle and both bundle branches are **insulated in fibrous tissue**, with **no direct contact with ventricular myocytes**.
  - **Purkinje fibers:** given off **sub-endocardially** once the bundle branches reach the **apex**; they **directly excite ventricular myocytes**, so **endocardial myocytes are activated first**.
  - Purkinje fibers have the **highest conduction velocity in the heart** and are responsible for **synchronized ventricular activation and contraction**.
- **Why Purkinje conduction is fastest (Slide 23) - three reasons, the exact mirror image of the AV node:**
  - **Fast response action potential** (fast INa) with **high dV/dt and high amplitude**.
  - **Largest cell size** in the heart.
  - **High-conductance connexin (Cx43).**
- **On the ECG (Slide 22):** His bundle and bundle branch activation are **not visible on the surface ECG**; the His electrogram requires an intracardiac catheter.

:::correlate
Bundle Branch Block (Left or Right)

- **Pathophysiology:** Loss of conduction down one bundle branch forces the affected ventricle to be activated late, by slow cell-to-cell muscle conduction from the contralateral ventricle rather than by the fast Purkinje network.
- **Diagnosis:** Although normal His and bundle branch activation is invisible on the ECG, **bundle branch block CAN be diagnosed on the ECG - because it alters the ventricular activation sequence**, and the ventricular activation sequence is what the QRS displays.
- **Lecturer's Point:** This is the key logical distinction on this slide: you cannot see the conduction system itself, but you can see what it does to ventricular activation. Details are deferred to the EKG lecture.
:::

## Ventricular Activation, Repolarization, and Their Mechanical Payoffs (Slides 24-31)

The ventricles are activated in a very specific order, and each element of that order shows up as a specific piece of the ECG and a specific direction of wall motion. The rule to internalize: **depolarization and repolarization travel in opposite directions across the wall but in the same direction from apex to base** - which is exactly why the T wave normally points the same way as the QRS.

- **Earliest ventricular site (Slide 24):** the **upper interventricular septum on the LEFT side**, activated by the **septal fascicle** of the left bundle branch.
  - This creates a **rightward vector**, responsible for the initial portion of the QRS - the **septal q wave** seen in left-sided leads.
- **General depolarization sequence (Slides 24, 26):** **apex to base** and **endocardium to epicardium**, dictated by the sub-endocardial location of the Purkinje fibers.
  - Ventricular depolarization produces the **QRS complex**.
- **Mechanical payoff of depolarization (Slide 28):** contraction begins at the **apex** and moves toward the **base**, **pumping blood up into the aorta**; it also starts at the **endocardial layer** and spreads to the **epicardial layer**. The lecturer's logic: if contraction began on the outside while the inner wall was still relaxed, it would be counterproductive.
- **Repolarization (Slides 29-30):** **epicardium repolarizes FIRST**.
  - Reason: **epicardial myocytes have a shorter action potential duration** than mid-myocardial and endocardial myocytes, so they repolarize earlier.
  - Underlying cause: **differences in the density and kinetics of repolarizing potassium channels** - epicardial myocytes have a **higher density of Ito (transient outward K+ current)**.
  - Sequence: **epicardium to endocardium** (opposite to depolarization) and **apex to base** (same as depolarization).
  - Net effect: depolarization and repolarization vectors point in **generally the same direction**, so the **T wave normally follows QRS polarity** - upright QRS, upright T wave.
- **Mechanical payoff of repolarization (Slide 31):** relaxation starts at the **apex, epicardially**, to **optimize ventricular relaxation** - the ventricle cannot dilate until the outer wall relaxes.
- **The three ECG waveforms (Slide 30):** atrial depolarization = **P wave**; ventricular depolarization = **QRS complex**; ventricular repolarization = **T wave**. AV nodal and His-Purkinje activation appear on neither.
- **Lecturer's sample question (Slide 27):** which medication slows **ventricular** conduction - an L-type calcium channel blocker or a **sodium channel blocker**? Answer: the **sodium channel blocker**, because ventricular and Purkinje fibers generate **fast response** action potentials dependent on INa.

## Conduction Velocity Across the Heart (Slides 32-33)

Conduction velocity (CV) is simply the **speed at which action potentials propagate through cardiac tissue**, measured in m/sec. Propagation depends on the spread of local currents generated by the action potential, which correlates with the size of the inward current during the upstroke - the **dV/dt**. Everything else on this slide is a modifier of that principle.

| Sequence | Structure | CV (m/sec) |
| --- | --- | --- |
| 1 | SA node | 0.01 |
| 2 | Atria | 0.5-1 |
| 3 | AV node | 0.01-0.05 |
| 4 | His bundle | 2 |
| 5 | Bundle branches | 2 |
| 6 | Purkinje fibers | 2-4 |
| 7 | Ventricles | 0.5-1 |

- **Extremes to memorize:** **Purkinje fibers are fastest; the AV node is slowest**, with atria and ventricles in between.
- **Determinants of CV [Lecturer Emphasis]:** **action potential type** (fast vs. slow response, i.e., dV/dt and amplitude), **cell size**, **gap junction type** (high- vs. low-conductance connexins), and **fibrosis content**.
- **Minimum requirement (Slide 33):** the First Aid ordering is **Purkinje > atria > ventricles > AV node**, and pacemaker dominance is **SA > AV > bundle of His/Purkinje/ventricles**.
  - **Lecturer's nuance:** First Aid lists atrial CV as faster than ventricular; the lecturer notes the table values are comparable and the discrepancy "is probably due to different sources." Do not lose sleep over atria-versus-ventricles; know that Purkinje is fastest and the AV node is slowest.

:::mnemonic
**Why the AV Node Is Slow and Purkinje Is Fast - Same Three Variables, Opposite Values**
**A-C-S (AP type, Connexin, Size)**

- **AP type:** AV node = slow response, low dV/dt | Purkinje = fast response, high dV/dt
- **Connexin:** AV node = Cx45 (low conductance) | Purkinje = Cx43 (high conductance)
- **Size:** AV node = smallest cells (plus dense connective tissue) | Purkinje = largest cells
:::

## Autonomic Regulation of the Heart (Slides 34-38)

The autonomic nervous system does not create the heartbeat - it modulates a rhythm that already exists. Both branches converge on the same molecular endpoints, the **pacemaker current (If) and the L-type calcium current (ICa-L)**, and push them in opposite directions through opposing G proteins. Learn one pathway thoroughly and the other is its mirror image.

| Target | Parasympathetic (vagal) | Sympathetic | Term |
| --- | --- | --- | --- |
| Sinus rate | Decrease | Increase | Chronotropic |
| AV conduction | Decrease | Increase | Dromotropic |
| Contractility | Decrease | Increase | Inotropic |

- **Vagal (parasympathetic) mechanism (Slides 35-36):**
  - Neurotransmitter **acetylcholine (ACh)** binds the **muscarinic (M) receptor**, activating the **inhibitory G protein (Gi)**.
  - **The beta-gamma subunits dissociate from the alpha subunit and are themselves the activating agent** - they bind and open the **acetylcholine-sensitive K+ channel** [Lecturer Emphasis].
  - That channel is **ligand-gated**, distinct from the voltage-gated K+ channels discussed previously. Its outward current (**IKACh**) drives the membrane **more negative (hyperpolarization)**, increasing the distance to threshold.
  - The **inhibitory alpha subunit decreases adenylyl cyclase**, lowering **cAMP**, which **inhibits the pacemaker channel and the L-type Ca2+ channel** - flattening the phase 4 slope.
  - Both nodes are **densely innervated by vagal fibers**; **strong vagal stimulation can inhibit both the SA and AV nodes**, unmasking a **ventricular escape beat at under 40 bpm**.
  - Net effects: **negative chronotropic** (slower HR, via decreased If), **negative dromotropic** (slower AV conduction, via increased IKACh and decreased ICa-L), and **negative inotropic** (decreased contractility, via decreased ICa-L).
- **Sympathetic mechanism (Slides 37-38):**
  - Triggered during **exercise** and the **fight-or-flight response**.
  - Neurotransmitter **norepinephrine** binds the **adrenergic beta-1 receptor**, activating the **stimulatory Gs protein**; here **alpha-GTP is the active agent**.
  - Alpha-GTP activates **adenylyl cyclase**, converting **ATP to cAMP**. cAMP **directly activates the pacemaker channel** (recall: HCN is *cyclic nucleotide-gated*) and activates **protein kinase A**, which phosphorylates the **L-type Ca2+ channel** and the **calcium release channel (ryanodine receptor)**.
  - Net effects: **positive chronotropic, dromotropic, and inotropic**.
- **Maximum heart rate (Slide 37):** the rate achievable under **maximal sympathetic stimulation** (e.g., exercise stress testing).
  - **Estimated as 220 bpm minus age in years**; it is **age-dependent and declines with age**. A 20-year-old peaks near 200 bpm.

## Intrinsic Heart Rate and Resting Autonomic Balance (Slide 39)

The final concept closes the loop between the cellular pacemaker and the whole patient. **Intrinsic heart rate (IHR)** is the heart rate observed when **both vagal and sympathetic influences are pharmacologically blocked** - the naked output of the sinus node. In adults IHR is about **100 bpm**, and like maximum heart rate it **declines with age**. Since the typical resting heart rate is about **70 bpm**, something must be actively holding the sinus node below its own intrinsic rate.

- **The lecturer's question:** at rest, which limb is dominant - sympathetic or parasympathetic?
- **The answer: the vagus.** **Vagal tone is dominant at rest**, bringing the heart rate down from an intrinsic ~100 bpm to a resting ~70 bpm [Lecturer Emphasis].
- **Corollary:** the initial heart rate rise at the very start of exercise is largely **vagal withdrawal**, not sympathetic activation - which is why an abrupt vagal maneuver has such a dramatic effect on a resting patient.

:::highyield
Intrinsic heart rate (both limbs blocked) is about 100 bpm in adults, but resting heart rate is about 70 bpm. Therefore PARASYMPATHETIC (vagal) tone is dominant at rest. Both IHR and maximum heart rate (220 - age) decline with age.
:::

## Session Summary (Slide 40)

The seven items the lecturer expects you to master: **pacemaker hierarchy**, **atrial propagation**, **AV node conduction**, **the His-Purkinje system**, **ventricular activation**, the **vagal effect** on heart rate/AV conduction/contractility, and the **sympathetic effect** on the same three targets.
`,
  "flashcards": [
    { "front": "What generates phase 4 spontaneous depolarization, and what is the channel's full name?", "back": "The pacemaker (funny) current If, carried by the hyperpolarization-activated cyclic nucleotide-gated (HCN) channel. It is a non-selective cation current conducting both Na+ and K+, and it opens in response to hyperpolarization below about -65 mV. It is NOT the fast Na+ channel.", "tag": "Concept" },
    { "front": "Besides the pacemaker current, what two mechanisms contribute to phase 4?", "back": "Decaying (progressive closing) of the IK1 potassium channel, and opening of T-type Ca2+ channels in late phase 4. Pacemaking is multifactorial, but If is the major force.", "tag": "Concept" },
    { "front": "What are the membrane clock and the calcium clock?", "back": "M-clock = the sarcolemmal channels driving pacemaking (If, ICa-T, IK). Ca clock = periodic Ca2+ release from the sarcoplasmic reticulum that also contributes to pacemaker activity.", "tag": "Glossary" },
    { "front": "What are the three determinants of pacemaker firing rate?", "back": "(1) Maximum diastolic potential level, (2) threshold level - these two set the distance; and (3) the rate/slope of phase 4 spontaneous depolarization - the speed. More negative maximum diastolic potential, higher threshold, or a flatter slope all slow the heart rate.", "tag": "Concept" },
    { "front": "State the cardiac pacemaker hierarchy with rates.", "back": "Sinus node 60-100 bpm (primary), AV node 40-60 bpm (secondary/backup), His-Purkinje system 20-40 bpm (ventricular escape beats). His-Purkinje has a small amount of pacemaker channels but is normally overdriven by the sinus node.", "tag": "Concept" },
    { "front": "Where is the sinus node, and why is conduction inside it slow?", "back": "At the junction of the SVC and right atrium (clinically 'high RA'), with nodal/P cells centrally and transitional cells at the periphery. Conduction is slow because the node uses low-conductance connexin Cx45.", "tag": "Glossary" },
    { "front": "Are the internodal pathways and Bachmann's bundle specialized conducting fibers?", "back": "No. They are preferential muscle bundles made of ordinary atrial myocytes. The three internodal pathways (anterior, lateral, posterior) carry activation down the RA; Bachmann's bundle on the roof of the atria carries it RA to LA, so the RA is activated before the LA.", "tag": "Concept" },
    { "front": "Why is longitudinal conduction faster than transverse conduction?", "back": "More gap junctions exist at end-to-end (longitudinal) connections than at side-to-side connections, and there are fewer cells to cross per unit distance along the fiber axis.", "tag": "Concept" },
    { "front": "What are the three roles of the AV node?", "back": "(1) Create the physiological AV delay (~0.1 s) to optimize ventricular filling - atrial contraction contributes about 20% of filling; (2) serve as the secondary/backup pacemaker at 40-60 bpm; (3) filter atrial impulses during atrial tachyarrhythmias.", "tag": "Concept" },
    { "front": "During atrial fibrillation, what would happen without AV nodal filtering?", "back": "Atrial rates of 400-600 bpm would all be conducted and ventricular fibrillation would occur. Because most impulses block in the AV node, the ventricular rate is typically 100-150 bpm.", "tag": "Clinical" },
    { "front": "List the four reasons AV nodal conduction is slow.", "back": "(1) Slow response action potential driven by L-type Ca2+ current, with low dV/dt and low amplitude; (2) low-conductance connexin Cx45; (3) small cell size; (4) dense connective tissue within the node.", "tag": "Concept" },
    { "front": "What are the boundaries of the triangle of Koch, and what sits at its apex?", "back": "The tricuspid annulus, the tendon of Todaro, and the ostium of the coronary sinus. The AV node sits at the apex of the triangle, in the lower interatrial septum.", "tag": "Glossary" },
    { "front": "Why do Purkinje fibers have the highest conduction velocity?", "back": "(1) Fast response action potential (fast INa) with high dV/dt and high amplitude; (2) largest cell size in the heart; (3) high-conductance connexin Cx43. They are responsible for synchronized ventricular activation.", "tag": "Concept" },
    { "front": "Which drug class slows AV nodal conduction, and which slows ventricular conduction? Why?", "back": "L-type calcium channel blockers slow the AV node, whose slow-response upstroke depends on ICa-L. Sodium channel blockers slow ventricular/Purkinje conduction, whose fast-response upstroke depends on INa.", "tag": "Clinical" },
    { "front": "Which part of the ventricle is activated earliest, and what does it create on the ECG?", "back": "The upper interventricular septum on the LEFT side, via the septal fascicle of the left bundle branch. It generates a rightward vector responsible for the septal q wave in left-sided leads.", "tag": "Concept" },
    { "front": "Compare the direction of ventricular depolarization and repolarization.", "back": "Depolarization: endocardium to epicardium, apex to base. Repolarization: epicardium to endocardium (opposite) but still apex to base (same). Because the vectors end up pointing similarly, the T wave normally follows QRS polarity.", "tag": "Concept" },
    { "front": "Why does the epicardium repolarize first?", "back": "Epicardial myocytes have a shorter action potential duration than mid-myocardial and endocardial myocytes, due to differences in the density and kinetics of repolarizing K+ channels - notably a higher density of Ito (transient outward K+ current).", "tag": "Concept" },
    { "front": "Which parts of the conduction system are invisible on the surface ECG?", "back": "AV nodal activation and His-Purkinje (His bundle and bundle branch) activation. They require intracardiac catheter electrograms. However, bundle branch block IS diagnosable on ECG because it alters the ventricular activation sequence.", "tag": "Clinical" },
    { "front": "Trace the vagal signaling pathway that slows the heart.", "back": "ACh binds the muscarinic receptor and activates inhibitory Gi. The beta-gamma subunits dissociate and open the ACh-sensitive (ligand-gated) K+ channel, producing outward IKACh and hyperpolarization. The inhibitory alpha subunit decreases adenylyl cyclase and cAMP, inhibiting the pacemaker channel and the L-type Ca2+ channel.", "tag": "Concept" },
    { "front": "Trace the sympathetic signaling pathway that speeds the heart.", "back": "Norepinephrine binds beta-1 receptors and activates stimulatory Gs; alpha-GTP is the active agent. It activates adenylyl cyclase, raising cAMP, which directly activates the HCN pacemaker channel and activates PKA, which phosphorylates the L-type Ca2+ channel and the ryanodine receptor.", "tag": "Concept" },
    { "front": "Define maximum heart rate and intrinsic heart rate.", "back": "Maximum HR = the rate under maximal sympathetic stimulation, estimated as 220 minus age in years. Intrinsic HR = the rate with BOTH vagal and sympathetic influences blocked, about 100 bpm in adults. Both decline with age.", "tag": "Glossary" },
    { "front": "At rest, which autonomic limb is dominant, and how do you know?", "back": "The vagus (parasympathetic). Intrinsic heart rate is about 100 bpm but resting heart rate is about 70 bpm, so vagal tone must be actively holding the sinus node below its intrinsic rate.", "tag": "Concept" }
  ],
  "questions": [
    {
      "question": "A researcher isolates sinoatrial nodal cells and records their membrane potential. After each repolarization the membrane drifts below -65 mV and then spontaneously climbs back toward threshold. Blocking which current would most reduce the slope of this spontaneous climb?",
      "options": ["A. The fast inward sodium current responsible for phase 0 of ventricular myocytes", "B. The hyperpolarization-activated non-selective cation current carried by HCN channels", "C. The delayed rectifier potassium current active during phase 3", "D. The L-type calcium current responsible for the plateau phase", "E. The sodium-calcium exchanger operating in reverse mode"],
      "answer": "B",
      "rationale": "Phase 4 spontaneous depolarization is generated primarily by the pacemaker (funny) current If, carried by hyperpolarization-activated cyclic nucleotide-gated (HCN) channels that conduct both Na+ and K+. Hyperpolarization below about -65 mV is what opens them. T-type Ca2+ channels and decaying IK1 are contributors, but If is the major force.",
      "hidden": true
    },
    {
      "question": "A drug shifts the threshold potential of sinoatrial nodal cells to a less negative value while leaving the maximum diastolic potential and the slope of phase 4 unchanged. What is the expected effect on heart rate, and why?",
      "options": ["A. Heart rate increases because less charge is required to reach threshold", "B. Heart rate is unchanged because only the phase 4 slope determines rate", "C. Heart rate decreases because the distance to threshold is greater", "D. Heart rate decreases because the cell can no longer hyperpolarize", "E. Heart rate increases because the pacemaker channel opens sooner"],
      "answer": "C",
      "rationale": "Pacemaker rate is a distance-and-speed problem. The maximum diastolic potential and the threshold set the distance; the phase 4 slope sets the speed. Raising the threshold (making it less negative) increases the distance to be traveled at unchanged speed, so more time is required and the heart rate falls.",
      "hidden": true
    },
    {
      "question": "A patient in atrial fibrillation has an atrial rate of roughly 500 impulses per minute but a ventricular rate of 130 bpm. Which property of the atrioventricular node best explains the discrepancy?",
      "options": ["A. Its high-conductance Cx43 gap junctions accelerate impulse transmission", "B. Its rapid fast-sodium-dependent upstroke resets after each impulse", "C. Its dense sympathetic innervation limits impulse entry", "D. Its slow conduction blocks the majority of atrial impulses, acting as a filter", "E. Its position at the apex of the triangle of Koch mechanically insulates it"],
      "answer": "D",
      "rationale": "The AV node's third role is filtering during atrial tachyarrhythmias. Its slow, calcium-dependent conduction and long refractoriness block most of the 400-600 bpm atrial impulses, producing a ventricular rate typically of 100-150 bpm. Without this filter, conduction of every atrial impulse would produce ventricular fibrillation.",
      "hidden": true
    },
    {
      "question": "During an electrophysiology study, catheter mapping shows that the first ventricular myocardium to depolarize lies on the left side of the upper interventricular septum. Which structure is responsible, and what ECG feature results?",
      "options": ["A. The right bundle branch, producing the terminal R wave", "B. Bachmann's bundle, producing the P wave axis", "C. The left posterior fascicle, producing a leftward initial vector", "D. The AV nodal NH cells, producing the PR segment", "E. The septal fascicle of the left bundle branch, producing the septal q wave"],
      "answer": "E",
      "rationale": "The left bundle branch gives off a small septal fascicle, which makes the left side of the upper interventricular septum the earliest ventricular site activated. This generates a rightward vector that inscribes the initial portion of the QRS, seen as the septal q wave in left-sided leads. The remaining ventricles then activate apex to base and endocardium to epicardium.",
      "hidden": true
    },
    {
      "question": "A healthy adult is given full pharmacologic blockade of both sympathetic and parasympathetic input to the heart. The heart rate rises from 70 bpm to approximately 100 bpm. What does this experiment demonstrate?",
      "options": ["A. Parasympathetic (vagal) tone is dominant at rest", "B. Sympathetic tone is dominant at rest", "C. The sinus node has been replaced by an AV nodal escape rhythm", "D. The intrinsic heart rate increases with age", "E. The maximum heart rate has been reached"],
      "answer": "A",
      "rationale": "Intrinsic heart rate is the rate observed with both autonomic limbs blocked, about 100 bpm in adults. Because the resting rate of 70 bpm is well below the intrinsic rate, vagal tone must be actively restraining the sinus node - vagal dominance at rest. Both intrinsic heart rate and maximum heart rate (220 minus age) decline with age.",
      "hidden": true
    }
  ],
  "anking": [
    { "match": "Cardiac pacemaker hierarchy and automaticity", "resources": "SA node 60-100, AV node 40-60, His-Purkinje 20-40; overdrive suppression; escape rhythms" },
    { "match": "Funny current (If) and phase 4 depolarization", "resources": "HCN channel, pacemaker current, slow response action potential, T-type calcium, IK1 decay" },
    { "match": "Cardiac conduction pathway and conduction velocity", "resources": "SA node to atria to AV node to bundle of His to bundle branches to Purkinje to ventricles; Purkinje fastest, AV node slowest" },
    { "match": "AV nodal delay and ventricular filling", "resources": "100 msec AV delay, atrial kick contributes about 20% of ventricular filling, triangle of Koch" },
    { "match": "Autonomic control of heart rate and contractility", "resources": "Muscarinic M2 Gi beta-gamma IKACh; beta-1 Gs cAMP PKA; chronotropy, dromotropy, inotropy" },
    { "match": "Ventricular activation and repolarization sequence", "resources": "Endocardium to epicardium depolarization, epicardium to endocardium repolarization, T wave follows QRS polarity" }
  ],
  "ankingResource": {
    "primarySource": "BandB",
    "chapter": "Cardiology > Cardiac Electrophysiology > Conduction System & Pacemaker Cells",
    "alternatives": [
      { "resource": "Physeo", "chapter": "Cardiology > Cardiac Physiology > Action Potentials & Conduction" },
      { "resource": "FirstAid", "chapter": "Cardiovascular > Physiology > Pacemaker Action Potential; Conduction Pathway; Autonomic Effects" },
      { "resource": "Bootcamp", "chapter": "Physiology > Cardiovascular > Cardiac Conduction & Autonomic Regulation" },
      { "resource": "Pixorize", "chapter": "Cardiology > Cardiac Conduction System" }
    ]
  },
  "pearls": [
    { "title": "If is the main pacemaker force", "content": "Phase 4 spontaneous depolarization is driven mainly by the pacemaker (funny) current If through HCN channels - a hyperpolarization-activated, NON-selective cation current carrying Na+ and K+. It is not the fast Na+ channel. T-type Ca2+ channels and decaying IK1 are secondary contributors." },
    { "title": "Rate = distance / speed", "content": "Three determinants of pacemaker rate: maximum diastolic potential and threshold (which set the distance) and the phase 4 slope (the speed). A more negative maximum diastolic potential, a higher threshold, or a flatter slope all slow the heart." },
    { "title": "The 60-40-20 ladder", "content": "Sinus node 60-100 bpm (primary), AV node 40-60 bpm (backup), His-Purkinje 20-40 bpm (ventricular escape). His-Purkinje pacemaker channels exist but are normally overdriven by the sinus node." },
    { "title": "Internodal tracts are just muscle", "content": "The three internodal pathways and Bachmann's bundle are preferential bundles of ORDINARY atrial myocytes, not specialized conducting fibers. Bachmann's bundle runs on the roof of the atria, so the RA is activated before the LA." },
    { "title": "Atrial vector sets the P wave axis", "content": "Atrial depolarization proceeds top to bottom and right to left, giving a downward-and-leftward mean vector. This is why the P wave is upright in some leads and inverted in others." },
    { "title": "The AV node's three jobs", "content": "Physiological AV delay of about 0.1 s (atrial contraction supplies roughly 20% of ventricular filling), backup pacemaker at 40-60 bpm, and filter during atrial tachyarrhythmias. Without the filter, atrial fibrillation at 400-600 bpm would cause ventricular fibrillation." },
    { "title": "Same three variables, opposite values", "content": "AV node is slow because of slow-response AP (low dV/dt), Cx45 (low conductance), small cells, plus dense connective tissue. Purkinje is fast because of fast-response AP (high dV/dt), Cx43 (high conductance), and the largest cells in the heart." },
    { "title": "Match the blocker to the upstroke", "content": "To slow AV nodal conduction use an L-type calcium channel blocker (nodal upstroke is ICa-L). To slow ventricular/Purkinje conduction use a sodium channel blocker (fast-response upstroke is INa)." },
    { "title": "Endo in, epi out", "content": "Ventricular DEPOLARIZATION goes endocardium to epicardium (Purkinje fibers are sub-endocardial); REPOLARIZATION goes epicardium to endocardium because epicardial myocytes have a shorter action potential duration (higher Ito density). Both run apex to base, which is why the T wave normally follows QRS polarity." },
    { "title": "Mechanics follow electrics", "content": "Contraction starts at the apex and endocardium, pumping blood up into the aorta. Relaxation starts at the apex and epicardium, because the ventricle cannot dilate until the outer wall relaxes." },
    { "title": "What the ECG cannot show", "content": "AV nodal activation and His-Purkinje activation are invisible on the surface ECG and require intracardiac catheters. Bundle branch block IS diagnosable on ECG - not because you see the bundle, but because block alters the ventricular activation sequence." },
    { "title": "Beta-gamma is the vagal actor", "content": "In vagal signaling the beta-gamma subunits of Gi - not the alpha subunit - bind and open the ligand-gated ACh-sensitive K+ channel (IKACh), hyperpolarizing the cell. The inhibitory alpha subunit separately lowers cAMP, inhibiting If and ICa-L." },
    { "title": "cAMP gates the funny channel directly", "content": "HCN is cyclic nucleotide-gated, so sympathetic beta-1 to Gs to adenylyl cyclase to cAMP speeds phase 4 without needing PKA. PKA is still needed for the L-type Ca2+ channel and the ryanodine receptor, giving positive inotropy." },
    { "title": "Two age-dependent rates", "content": "Maximum heart rate (maximal sympathetic drive) is about 220 minus age. Intrinsic heart rate (both limbs blocked) is about 100 bpm in adults. Both fall with age, and the gap between intrinsic 100 and resting 70 proves vagal dominance at rest." }
  ],
  "mindmap": `
## Cardiac Impulse Initiation, Propagation & Autonomic Regulation

### Pacemaker Activity (Impulse Initiation)

- **Origin**: sinoatrial (sinus) node, slow response action potentials
- **No stable resting potential**: term is maximum diastolic potential
- **Phase 4 spontaneous depolarization**: the basis of automaticity
- **Pacemaker (funny) channel**: HCN, hyperpolarization-activated cyclic nucleotide-gated
- **If**: hyperpolarization-activated NON-selective cation current (Na+ and K+)
- **Not the fast Na+ channel**: opens on hyperpolarization below about -65 mV
- **T-type Ca2+ channel**: contributes in late phase 4
- **Decaying IK1**: progressive potassium channel closure
- **M-clock**: membrane channels (If, ICa-T, IK)
- **Ca clock**: periodic SR calcium release
- **Minimum requirement**: If is the major force

### Determinants of Pacemaker Rate

- **Distance**: maximum diastolic potential level + threshold level
- **Speed**: slope/rate of phase 4 depolarization
- **Flatter slope**: slower heart rate
- **More negative maximum diastolic potential**: greater distance, slower rate
- **Higher (less negative) threshold**: greater distance, slower rate

### Pacemaker Hierarchy

- **Sinus node**: 60-100 bpm, primary pacemaker
- **AV node**: 40-60 bpm, secondary/backup pacemaker
- **His-Purkinje**: 20-40 bpm, ventricular escape beats
- **Overdrive suppression**: faster site suppresses slower sites
- **Escape rhythm**: appears when SA and AV both fail, or with strong vagal stimulation

### Sinus Node

- **Location**: SVC-RA junction, clinically high RA
- **Center**: nodal or P cells
- **Periphery**: transitional cells to atrial myocytes
- **Connexin**: Cx45, low conductance, slow intranodal conduction
- **Normal rate**: 60-100 bpm, average 72 bpm
- **Sinus tachycardia**: above 100 bpm
- **Sinus bradycardia**: below 60 bpm

### Atrial Propagation

- **Sequence**: sinus node to atria to AV node to His to bundle branches to Purkinje to ventricles
- **Internodal pathways**: anterior, lateral, posterior
- **Bachmann's bundle**: roof of atria, RA to LA
- **Not specialized fibers**: ordinary atrial myocytes as preferential bundles
- **Direction**: top to bottom, right to left
- **Mean vector**: downward and leftward, sets P wave axis
- **RA before LA**: consequence of Bachmann's bundle geometry
- **ECG**: atrial depolarization creates the P wave
- **Function**: top-to-bottom contraction moves blood into ventricles

### Gap Junctions & Anisotropy

- **Gap junction**: clusters of intercellular channels for ions and small molecules
- **Connexins**: Cx40, Cx43, Cx45, differing conductance
- **Longitudinal conduction**: faster, more gap junctions, fewer cells to cross
- **Transverse conduction**: slower, fewer gap junctions, more cells to cross

### AV Node

- **Location**: lower interatrial septum
- **Triangle of Koch**: tricuspid annulus, tendon of Todaro, coronary sinus ostium
- **Node position**: apex of the triangle
- **Histology**: AN (atrio-nodal), N (nodal), NH (nodal-His) cells
- **Only normal AV connection**: atria to ventricles
- **Role 1 - AV delay**: about 0.1 s, optimizes ventricular filling
- **Atrial kick**: about 20% of ventricular filling
- **Role 2 - backup pacemaker**: 40-60 bpm
- **Role 3 - filter**: blocks impulses during atrial tachyarrhythmias
- **Atrial fibrillation**: atrial rate 400-600 bpm, ventricular rate 100-150 bpm
- **Without filtering**: ventricular fibrillation would occur
- **Not on ECG**: AV nodal activation is invisible on the surface tracing
- **Slow conduction causes**: slow response AP (low dV/dt, low amplitude), Cx45, small cells, dense connective tissue
- **Drug corollary**: L-type calcium channel blocker inhibits AV conduction

### His-Purkinje System

- **His bundle**: central fibrous body and upper interventricular septum
- **Right bundle branch**: down septum to right ventricle
- **Left bundle branch**: anterior fascicle, posterior fascicle, septal fascicle
- **Insulation**: His and bundle branches wrapped in fibrous tissue, no myocyte contact
- **Purkinje fibers**: sub-endocardial, given off at the apex, directly excite myocytes
- **Endocardium first**: consequence of sub-endocardial Purkinje distribution
- **Highest conduction velocity**: enables synchronized ventricular activation
- **Fast because**: fast response AP (high dV/dt), largest cells, Cx43 high conductance
- **Not on ECG**: His and bundle branch activation invisible; His electrogram needs a catheter
- **Bundle branch block**: diagnosable on ECG because it alters ventricular activation sequence

### Ventricular Activation

- **Earliest site**: upper interventricular septum, left side
- **Cause**: septal fascicle from the left bundle branch
- **Vector**: rightward, creates the septal q wave
- **General sequence**: apex to base, endocardium to epicardium
- **ECG**: ventricular depolarization creates the QRS complex
- **Mechanical payoff**: contraction apex to base pumps blood up into the aorta
- **Inside out**: contraction starts endocardially and spreads epicardially
- **Drug corollary**: sodium channel blocker slows ventricular conduction

### Ventricular Repolarization

- **Starts epicardially**: shorter action potential duration in epicardial myocytes
- **Ion basis**: higher density of Ito (transient outward K+ current) in epicardium
- **Sequence 1**: epicardium to endocardium, opposite to depolarization
- **Sequence 2**: apex to base, same as depolarization
- **ECG**: creates the T wave
- **T wave polarity**: normally follows QRS polarity
- **Mechanical payoff**: relaxation starts apex and epicardium to optimize ventricular relaxation
- **Three waveforms**: P (atrial depolarization), QRS (ventricular depolarization), T (ventricular repolarization)

### Conduction Velocity

- **Definition**: speed of AP propagation in cardiac tissue, m/sec
- **SA node**: 0.01 m/sec
- **Atria**: 0.5-1 m/sec
- **AV node**: 0.01-0.05 m/sec, slowest
- **His bundle and bundle branches**: 2 m/sec
- **Purkinje fibers**: 2-4 m/sec, fastest
- **Ventricles**: 0.5-1 m/sec
- **Determinants**: AP type (dV/dt, amplitude), cell size, connexin conductance, fibrosis
- **First Aid ordering**: Purkinje > atria > ventricles > AV node
- **Lecturer nuance**: atria-versus-ventricles discrepancy reflects different sources

### Autonomic Regulation

- **Sympathetic**: increases sinus rate, AV conduction, contractility
- **Parasympathetic (vagal)**: decreases sinus rate, AV conduction, contractility
- **Chronotropic**: heart rate effect
- **Dromotropic**: AV conduction effect
- **Inotropic**: contractility effect

### Vagal Pathway

- **Neurotransmitter**: acetylcholine
- **Receptor**: muscarinic (M) receptor
- **G protein**: inhibitory Gi
- **Active agent**: beta-gamma subunits
- **Target channel**: ACh-sensitive K+ channel, ligand-gated (not voltage-gated)
- **IKACh**: outward K+ current, hyperpolarization
- **Alpha subunit**: decreases adenylyl cyclase and cAMP, inhibits If and ICa-L
- **Innervation**: SA and AV nodes densely innervated by vagal fibers
- **Strong vagal stimulation**: inhibits both nodes, ventricular escape beat under 40 bpm

### Sympathetic Pathway

- **Trigger**: exercise, fight-or-flight
- **Neurotransmitter**: norepinephrine
- **Receptor**: adrenergic beta-1 receptor
- **G protein**: stimulatory Gs, alpha-GTP is the active agent
- **Adenylyl cyclase**: ATP to cAMP
- **cAMP**: directly activates the HCN pacemaker channel
- **PKA**: activates L-type Ca2+ channel and ryanodine receptor
- **Result**: positive chronotropic, dromotropic, inotropic effects
- **Maximum heart rate**: about 220 minus age in years, declines with age

### Intrinsic Heart Rate

- **Definition**: heart rate with both vagal and sympathetic effects blocked
- **Adult value**: about 100 bpm
- **Age dependence**: decreases with age
- **Resting heart rate**: about 70 bpm
- **Conclusion**: vagal tone is dominant at rest
`
});
