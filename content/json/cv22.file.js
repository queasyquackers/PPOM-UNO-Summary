window.receiveLectureContent({
  "id": "cv22",
  "title": "Lecture #22: Cardiac Action Potentials",
  "lecturer": "Y. Zhang, M.D., Ph.D.",
  "pdf": "content/CV22_HighYield_Render.pdf",
  "content": `
# Lecture #22: Cardiac Action Potentials

**Lecturer:** Y. Zhang, M.D., Ph.D.
**Session:** Lecture #22

## Why the Cardiac Action Potential Matters (Slides 3-4)

Every heartbeat begins as an electrical event. The coordinated squeeze of the four chambers is orchestrated by a specialized pacemaking and conduction system that generates and distributes **cardiac action potentials (APs)** — the electrical signals that are the foundation of all cardiac electrophysiology. Understanding the AP is not an academic exercise: it is the substrate on which the EKG is built, the framework for understanding how arrhythmias form, and the target of every antiarrhythmic drug. Grasp the ion currents that shape each phase and you can predict how electrolyte disturbances, ischemia, and medications will bend the waveform.

- **What the AP actually measures (Slide 4):** transmembrane voltage — the potential *inside* the myocyte relative to outside — recorded across a cardiac cycle.
  - Resting intracellular potential is **~ -90 mV** in atrial and ventricular myocytes.
  - Pacemaker cells (SA node, AV node) rest at a **less negative** value (~ -60 mV) [Lecturer Emphasis].

## Two Types of Action Potential (Slides 7-8)

The single most important organizing concept of the lecture is that cardiac myocytes generate one of **two** AP types, and knowing which cell makes which is the key that unlocks pharmacology and arrhythmia later.

- **Fast response AP** — atrial myocytes, ventricular myocytes, and the His-Purkinje system.
  - Phase 0 upstroke driven by the **fast Na⁺ channel**; rapid dV/dt (>100 V/s).
- **Slow response AP** — **only the SA node and AV node** [Lecturer Emphasis].
  - Phase 0 upstroke driven by the **L-type Ca²⁺ channel**; slow dV/dt (~10 V/s).

:::highyield
Only the SA node and AV node generate slow-response action potentials (phase 0 = L-type Ca²⁺ current). Every other cardiac cell — atria, ventricles, His-Purkinje — generates a fast-response AP (phase 0 = fast Na⁺ current). This one fact explains why calcium channel blockers act on nodal tissue while sodium channel blockers act on working myocardium and Purkinje fibers.
:::

## The Building Blocks: Ions, Channels, and Pumps (Slides 9-14)

Before dissecting the phases, the lecturer insists on three prerequisites. First, three ions do essentially all the work: **K⁺, Na⁺, and Ca²⁺**. Second, ions cannot cross the membrane freely — they require **specific channels/gates**; if a channel is closed, its ion cannot move. Third, three **pumps** restore homeostasis after each beat.

- **The three ions and their gradients:**
  - **K⁺:** high inside (~140-150 mM) vs low outside (~4 mM, equal to blood). When K⁺ channels open, K⁺ flows *out*.
  - **Na⁺:** high outside vs low inside. When Na⁺ channels open, Na⁺ rushes *in*.
  - **Ca²⁺:** far higher outside; cytosolic Ca²⁺ is ~10,000× lower. When Ca²⁺ channels open, Ca²⁺ moves *in*.
- **Equilibrium potential and the Nernst equation (Slide 10):** as K⁺ leaves, it carries positive charge out, building a negative interior that opposes further efflux. When the chemical gradient and the electrical gradient balance, net movement stops — the **equilibrium potential**.
  - E(K⁺) ≈ **-96 mV**; E(Na⁺) ≈ **+52 mV**; E(Ca²⁺) ≈ **+134 mV** (note z = 2 for calcium).
  - At rest only K⁺ channels are appreciably open, so resting Vm ≈ E(K⁺) (~ -90 mV in real cells due to leak).
- **The three pumps (Slide 14):**
  - **Na⁺/K⁺-ATPase:** exports 3 Na⁺ for 2 K⁺ in → net positive charge *out* → hyperpolarizing (makes Vm more negative).
  - **Na⁺/Ca²⁺ exchanger (NCX):** forward mode exports 1 Ca²⁺ for 3 Na⁺ in → net inward positive charge → **depolarizing** current that can trigger arrhythmias.
  - **Ca²⁺-ATPase (SERCA):** on the sarcoplasmic reticulum; pumps cytosolic Ca²⁺ back into the SR.

:::correlate
Digoxin (Digitalis) and Contractility
- **Pathophysiology:** Digoxin inhibits the Na⁺/K⁺-ATPase, raising intracellular Na⁺. The elevated intracellular Na⁺ drives the Na⁺/Ca²⁺ exchanger into **reverse mode** (pumps Na⁺ out, brings Ca²⁺ in), increasing intracellular Ca²⁺.
- **Presentation/Effect:** increased Ca²⁺ available for contraction → **positive inotropy** (increased cardiac contractility).
- **Lecturer's Point:** This is the mechanism explicitly connected to pharmacology — the NCX reverse mode under high intracellular Na⁺ is how digitalis strengthens contraction. [Lecturer Emphasis]
:::

## The Fast-Response Action Potential, Phase by Phase (Slides 15-23)

With the ingredients in hand, the fast-response AP tells a five-act story. Depolarization is explosive and Na⁺-driven; repolarization is a carefully staged handoff between calcium influx and potassium efflux that produces the plateau unique to cardiac muscle.

- **Phase 0 — Depolarization (Slides 16-17):** Vm rises from ~ -90 mV to ~ +20-30 mV via the **fast Na⁺ channel**. Fast cells don't self-excite; an incoming AP from the SA node raises Vm to **threshold (~ -55 mV)**, opening Na⁺ channels.
  - **The two gates:** the Na⁺ channel has an **activation (fast) gate** and an **inactivation (slow) gate**.
    - Rest: activation gate closed, inactivation gate open.
    - At threshold: activation gate snaps open while the inactivation gate begins to close slowly → brief window where both are open → Na⁺ influx.
    - **Inactivated state:** channel cannot reopen until Vm falls back below threshold at end of phase 3 (basis of refractoriness).
- **Phase 1 — Early repolarization (Slide 18):** transient outward K⁺ current (**I_to**) briefly opens; modest drop from the peak toward ~0 mV.
- **Phase 2 — Plateau (Slide 19):** unique to cardiac fast-response cells. Inward **L-type Ca²⁺ current** (opens slowly, lasts long) is nearly balanced by outward **delayed rectifier K⁺ current** (I_Kr rapid, I_Ks slow, I_Kur ultra-rapid). Slight net outward → gentle downslope.
- **Phase 3 — Rapid repolarization (Slide 20):** L-type Ca²⁺ channels close as delayed rectifier K⁺ current peaks; below -30 mV the **inward rectifier K⁺ current (I_K1)** opens and drives Vm to rest.
- **Phase 4 — Resting potential (Slide 21):** Na⁺ and Ca²⁺ channels closed; **I_K1 stays open**, holding Vm near E(K⁺). Pumps restore ion gradients.

:::mnemonic
**Fast-Response AP Phase Currents**
**"0 Na, 1 to, 2 Ca-plateau, 3 K-out, 4 K1"**

- **0:** Na⁺ in (fast Na⁺ channel)
- **1:** I_to (transient outward K⁺)
- **2:** Ca²⁺ in ≈ K⁺ out (plateau)
- **3:** delayed rectifier K⁺ out
- **4:** I_K1 holds resting potential
:::

## Potassium and the Heart: Hyper- and Hypokalemia (Slides 24-27)

The heart is exquisitely sensitive to serum K⁺, and the lecturer frames both derangements through the Nernst equation and channel behavior — a favorite testable link between a lab value and an EKG.

:::correlate
Hyperkalemia
- **Pathophysiology:** Elevated extracellular K⁺ raises (makes less negative) the resting membrane potential, shortening the distance to threshold — but sustained depolarization impairs **Na⁺ channel recovery** (recovery needs Vm below threshold). High K⁺ also opens more K⁺ channels, speeding repolarization.
- **Presentation (EKG):** **peaked T waves** (fast repolarization) → **widened QRS** (slowed phase 0/ventricular depolarization) → ventricular fibrillation / cardiac arrest as Na⁺ channels fail to recover.
- **Treatment/Clinical use:** Because severe hyperkalemia arrests the heart, **cardioplegia solution** (high K⁺) is used intentionally to stop the heart during open-heart surgery and transplantation.
- **Lecturer's Point:** K⁺ must **never** be given as a rapid IV bolus. Threshold-level arrest occurs around a (calculated) serum K⁺ of ~17-18 mM. [Lecturer Emphasis]
:::

:::correlate
Hypokalemia
- **Pathophysiology:** Low extracellular K⁺ makes Vm more negative (would lower excitability), but the dominant effect is **decreased K⁺ conductance** — fewer K⁺ channels open, slowing repolarization and prolonging AP duration.
- **Presentation (EKG):** **flattened T waves** and **long QT interval**, increasing risk of ventricular tachyarrhythmias.
- **Lecturer's Point:** This is why serum K⁺ is monitored closely and why both hyper- and hypokalemia can be diagnosed on EKG. [Lecturer Emphasis]
:::

## Excitation-Contraction Coupling (Slide 28)

Electrical excitation must be converted into mechanical force. The AP travels along the membrane and dives into the cell along **T-tubules**, where voltage-gated **L-type Ca²⁺ channels (dihydropyridine receptors)** open. This trigger Ca²⁺ binds the **ryanodine receptor (Ca²⁺ release channel)** on the SR, releasing a large store of Ca²⁺ — **calcium-induced calcium release (CICR)**.

- SR release is the **major** source of the systolic Ca²⁺ rise that triggers contraction.
- **Relaxation (diastole):** cytosolic Ca²⁺ is removed by **SERCA** (back into SR) and by the **Na⁺/Ca²⁺ exchanger** (out of the cell).

## The Slow-Response Action Potential (Slides 29-33)

Pacemaker tissue plays by different rules. Its AP is simpler (three phases), less negative, and — crucially — **never truly rests**, giving the heart its automaticity.

- **Three phases only:** phase 0, phase 3, phase 4 (no phases 1 or 2).
- **Less negative:** maximum diastolic potential ~ -60 mV; peak only ~0 mV.
- **Phase 0 (Slide 30):** driven by the **L-type Ca²⁺ channel** — slow cells lack functional fast Na⁺ channels.
- **Phase 3 (Slide 31):** delayed rectifier and inward rectifier K⁺ channels repolarize the cell.
- **Phase 4 — spontaneous depolarization (Slide 32):** not flat; drifts up toward threshold via the **pacemaker ("funny") current I_f** through the **HCN channel** (hyperpolarization-activated cyclic nucleotide-gated). Deactivation of I_K1 and activation of **T-type Ca²⁺ channels** also contribute.

## Refractory Periods and Why the Heart Cannot Tetanize (Slides 34-39)

The final theme ties AP duration to safety. A nerve AP lasts ~1 ms; a cardiac AP lasts **300-400 ms**, and that long duration guarantees a long refractory period that protects the heart from fusing beats together.

- **Effective (absolute) refractory period (ERP):** no stimulus, however strong, can evoke a new AP. In fast-response fibers it spans phase 0 through phase 3 and is set by **fast Na⁺ channel** status.
- **Relative refractory period:** begins once Vm falls below threshold (Na⁺ channels recovering) and ends at the start of phase 4; a stronger-than-normal stimulus yields a smaller AP.
- **Slow-response fibers:** ERP is set by the time for **Ca²⁺ channels** to recover, and the relative refractory period extends well into phase 4.
- **No tetanus:** the long plateau and ERP prevent a second AP during contraction and most of relaxation, so cardiac muscle cannot summate/tetanize the way skeletal muscle does — essential for the heart's pump function.

:::highyield
Class III antiarrhythmics (potassium channel blockers) prolong AP duration and therefore prolong the effective refractory period — a direct clinical application of the AP-duration/ERP relationship the lecturer emphasizes.
:::
`,
  "flashcards": [
    { "front": "Which cardiac cells generate slow-response action potentials?", "back": "Only the SA node and AV node (phase 0 driven by L-type Ca²⁺ channels). All other cells (atria, ventricles, His-Purkinje) are fast-response.", "tag": "Concept" },
    { "front": "What ion current drives phase 0 of a fast-response AP?", "back": "Fast Na⁺ channel influx (rapid dV/dt, >100 V/s).", "tag": "Concept" },
    { "front": "What ion current drives phase 0 of a slow-response (nodal) AP?", "back": "L-type Ca²⁺ channel influx (slow dV/dt, ~10 V/s).", "tag": "Concept" },
    { "front": "Approximate equilibrium potentials for K⁺, Na⁺, and Ca²⁺?", "back": "E(K⁺) ≈ -96 mV, E(Na⁺) ≈ +52 mV, E(Ca²⁺) ≈ +134 mV (z=2 for Ca²⁺).", "tag": "Glossary" },
    { "front": "What holds the resting membrane potential near E(K⁺) in phase 4?", "back": "The inward rectifier K⁺ current, I_K1, which stays open at rest.", "tag": "Concept" },
    { "front": "What is the ion basis of the plateau (phase 2)?", "back": "Balanced inward L-type Ca²⁺ current and outward delayed rectifier K⁺ current (I_Kr, I_Ks, I_Kur).", "tag": "Concept" },
    { "front": "Classic EKG progression of hyperkalemia?", "back": "Peaked T waves → widened QRS → sine wave / ventricular fibrillation / arrest.", "tag": "Clinical" },
    { "front": "EKG findings of hypokalemia?", "back": "Flattened T waves and long QT (from decreased K⁺ conductance and prolonged AP duration), raising risk of ventricular tachyarrhythmias.", "tag": "Clinical" },
    { "front": "Mechanism by which digoxin increases contractility?", "back": "Inhibits Na⁺/K⁺-ATPase → ↑ intracellular Na⁺ → Na⁺/Ca²⁺ exchanger reverses → ↑ intracellular Ca²⁺ → positive inotropy.", "tag": "Clinical" },
    { "front": "What is the funny current (I_f) and which channel carries it?", "back": "The pacemaker current driving phase 4 spontaneous depolarization, carried by the HCN (hyperpolarization-activated cyclic nucleotide-gated) channel.", "tag": "Concept" },
    { "front": "What is calcium-induced calcium release (CICR)?", "back": "Ca²⁺ entering via L-type channels on T-tubules binds ryanodine receptors on the SR, releasing SR Ca²⁺ — the major source of systolic Ca²⁺.", "tag": "Concept" },
    { "front": "Why can't cardiac muscle tetanize?", "back": "The long AP (300-400 ms) creates a long effective refractory period spanning contraction, preventing a second AP and summation.", "tag": "Concept" },
    { "front": "What sets the effective refractory period in fast-response fibers?", "back": "The recovery status of the fast Na⁺ channel (ERP spans phase 0 to phase 3).", "tag": "Concept" },
    { "front": "Two pumps that remove cytosolic Ca²⁺ during diastole?", "back": "SERCA (Ca²⁺ back into SR) and the Na⁺/Ca²⁺ exchanger (Ca²⁺ out of the cell).", "tag": "Glossary" }
  ],
  "questions": [
    {
      "question": "A researcher records action potentials from isolated cardiac cells. One population shows a phase 0 upstroke that is abolished by an L-type calcium channel blocker but unaffected by tetrodotoxin (a fast Na⁺ channel blocker). From which structures were these cells most likely obtained?",
      "options": ["A. Ventricular myocytes", "B. Atrial myocytes", "C. SA and AV nodes", "D. Purkinje fibers", "E. His bundle"],
      "answer": "C",
      "rationale": "Only the SA and AV nodes generate slow-response APs, whose phase 0 depends on L-type Ca²⁺ current rather than fast Na⁺ current. Atrial, ventricular, and His-Purkinje cells are fast-response (Na⁺-dependent) and would be sensitive to fast Na⁺ channel block.",
      "hidden": true
    },
    {
      "question": "During phase 2 of a ventricular action potential, the membrane potential remains nearly flat for a prolonged period. Which combination of currents best explains this plateau?",
      "options": ["A. Inward Na⁺ current balanced by outward Ca²⁺ current", "B. Inward L-type Ca²⁺ current balanced by outward delayed rectifier K⁺ current", "C. Inward funny current balanced by outward I_to", "D. Outward I_K1 balanced by inward Na⁺/K⁺-ATPase current", "E. Inward T-type Ca²⁺ current balanced by outward chloride current"],
      "answer": "B",
      "rationale": "The plateau reflects near-balance between slowly inactivating inward L-type Ca²⁺ current and outward delayed rectifier K⁺ current (I_Kr, I_Ks, I_Kur). The slight net outward current accounts for the gentle downslope.",
      "hidden": true
    },
    {
      "question": "A patient with renal failure has a serum potassium of 7.2 mM. Which set of changes in the ventricular myocyte best explains the widened QRS seen on the EKG?",
      "options": ["A. Less negative resting potential impairing fast Na⁺ channel recovery, slowing phase 0", "B. Increased K⁺ conductance accelerating phase 3", "C. Enhanced L-type Ca²⁺ current prolonging phase 2", "D. Increased funny current raising pacemaker rate", "E. Reversal of the Na⁺/Ca²⁺ exchanger increasing contractility"],
      "answer": "A",
      "rationale": "Hyperkalemia raises (makes less negative) the resting potential; because fast Na⁺ channels require repolarization below threshold to recover, sustained depolarization slows their recovery and thus phase 0 depolarization, widening the QRS. Increased K⁺ conductance also occurs but explains peaked T waves, not QRS widening.",
      "hidden": true
    },
    {
      "question": "A digoxin-toxic patient develops increased intracellular calcium. Which mechanism directly links the drug's action on the Na⁺/K⁺-ATPase to the rise in intracellular calcium?",
      "options": ["A. Direct opening of ryanodine receptors", "B. Inhibition of SERCA", "C. Elevated intracellular Na⁺ driving the Na⁺/Ca²⁺ exchanger into reverse mode", "D. Activation of L-type Ca²⁺ channels by hyperkalemia", "E. Increased funny current through HCN channels"],
      "answer": "C",
      "rationale": "Digoxin inhibits Na⁺/K⁺-ATPase, raising intracellular Na⁺. This reduces the gradient driving the Na⁺/Ca²⁺ exchanger's forward mode and can reverse it, so Ca²⁺ enters and Na⁺ exits, increasing intracellular Ca²⁺ and contractility.",
      "hidden": true
    },
    {
      "question": "Unlike skeletal muscle, cardiac muscle cannot be driven into tetanic (fused) contraction. Which property of the cardiac action potential is most responsible for this protection?",
      "options": ["A. A resting potential near the K⁺ equilibrium potential", "B. A rapid phase 0 upstroke", "C. A long plateau producing an effective refractory period spanning most of contraction", "D. Spontaneous phase 4 depolarization", "E. The presence of gap junctions between myocytes"],
      "answer": "C",
      "rationale": "The prolonged AP (300-400 ms) and its long effective refractory period prevent a second AP during contraction and most of relaxation, preventing summation/tetanus — essential for the heart to function as a pump.",
      "hidden": true
    }
  ],
  "anking": [
    { "match": "Cardiac action potential phases and currents", "resources": "Cardiac myocyte action potential: fast vs slow response, phases 0-4, Na/Ca/K currents" },
    { "match": "Pacemaker (nodal) action potential and funny current", "resources": "SA/AV node slow-response AP, HCN/funny current I_f, phase 4 automaticity" },
    { "match": "Hyperkalemia and hypokalemia EKG changes", "resources": "Peaked T waves, widened QRS, flattened T waves, long QT" },
    { "match": "Digoxin mechanism (Na/K ATPase, NCX)", "resources": "Digoxin positive inotropy via Na/K-ATPase inhibition and Na/Ca exchanger" },
    { "match": "Excitation-contraction coupling / CICR", "resources": "L-type Ca channel, ryanodine receptor, SERCA, calcium-induced calcium release" }
  ],
  "ankingResource": {
    "primarySource": "BandB",
    "chapter": "Cardiology > Cardiac Physiology > Myocyte Action Potentials",
    "alternatives": [
      { "resource": "Physeo", "chapter": "Cardiology > Cardiac Electrophysiology > Action Potentials" },
      { "resource": "Pathoma", "chapter": "Cardiac tissue physiology (background for ischemia/arrhythmia)" },
      { "resource": "FirstAid", "chapter": "Cardiovascular > Physiology > Cardiac & pacemaker action potentials" }
    ]
  },
  "pearls": [
    { "title": "Two AP types", "content": "Only the SA and AV nodes make slow-response APs (phase 0 = L-type Ca²⁺). All other cardiac cells make fast-response APs (phase 0 = fast Na⁺)." },
    { "title": "Resting potential = K⁺", "content": "At rest, mainly I_K1 K⁺ channels are open, so resting Vm (~ -90 mV) sits near E(K⁺) (~ -96 mV)." },
    { "title": "Hyperkalemia EKG", "content": "Peaked T waves → widened QRS → VF/arrest. Never give K⁺ as a rapid IV bolus." },
    { "title": "Hypokalemia EKG", "content": "Flattened T waves and long QT from decreased K⁺ conductance and prolonged AP duration → risk of ventricular tachyarrhythmia." },
    { "title": "Digoxin inotropy", "content": "Na⁺/K⁺-ATPase inhibition → ↑ intracellular Na⁺ → Na⁺/Ca²⁺ exchanger reverses → ↑ intracellular Ca²⁺ → stronger contraction." },
    { "title": "Funny current", "content": "Phase 4 pacemaker depolarization is driven by I_f through HCN channels; T-type Ca²⁺ and loss of I_K1 assist." },
    { "title": "No cardiac tetanus", "content": "The long AP and effective refractory period span contraction, preventing summation — unlike skeletal muscle." },
    { "title": "Cardioplegia", "content": "High-K⁺ cardioplegia solution intentionally arrests the heart for surgery by depolarizing myocytes and inactivating Na⁺ channels." }
  ],
  "mindmap": `
## Cardiac Action Potentials

### Two AP Types

- **Fast response**: atria, ventricles, His-Purkinje; phase 0 = fast Na⁺
- **Slow response**: SA node, AV node only; phase 0 = L-type Ca²⁺
- **Upstroke speed**: fast >100 V/s vs slow ~10 V/s

### Ions & Equilibrium Potentials

- **K⁺**: high inside; E ≈ -96 mV
- **Na⁺**: high outside; E ≈ +52 mV
- **Ca²⁺**: high outside; E ≈ +134 mV (z=2)
- **Resting Vm**: ~ -90 mV, set by I_K1

### Pumps

- **Na⁺/K⁺-ATPase**: 3 Na⁺ out / 2 K⁺ in; hyperpolarizing
- **Na⁺/Ca²⁺ exchanger**: 3 Na⁺ in / 1 Ca²⁺ out; depolarizing; reverses with high Na⁺
- **SERCA (Ca²⁺-ATPase)**: Ca²⁺ into SR

### Fast-Response Phases

- **Phase 0**: fast Na⁺ influx; threshold ~ -55 mV; two gates
- **Phase 1**: I_to (transient outward K⁺)
- **Phase 2**: plateau; L-type Ca²⁺ in ≈ delayed rectifier K⁺ out
- **Phase 3**: delayed rectifier + I_K1 K⁺ efflux
- **Phase 4**: resting; I_K1 open

### Slow-Response Phases

- **Phase 0**: L-type Ca²⁺
- **Phase 3**: K⁺ efflux
- **Phase 4**: spontaneous depolarization; I_f (HCN/funny), T-type Ca²⁺

### Potassium Disorders

- **Hyperkalemia**: peaked T → wide QRS → VF; cardioplegia use
- **Hypokalemia**: flat T, long QT → tachyarrhythmia

### Coupling & Refractoriness

- **CICR**: L-type Ca²⁺ → ryanodine receptor → SR Ca²⁺ release
- **Relaxation**: SERCA + Na⁺/Ca²⁺ exchanger
- **ERP**: fast fibers = Na⁺ channel recovery; long AP prevents tetanus
`
});
