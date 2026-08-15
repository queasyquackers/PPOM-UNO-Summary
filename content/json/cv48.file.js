window.receiveLectureContent({
  "id": "cv48",
  "title": "Lecture #48: Diffusion of Gases Through the Respiratory Membrane",
  "lecturer": "J. Leheste, Ph.D., M.Sc.",
  "pdf": "content/CV48_HighYield_Render.pdf",
  "content": `
# Lecture #48: Diffusion of Gases Through the Respiratory Membrane

**Lecturer:** J. Leheste, Ph.D., M.Sc.
**Session:** Lecture #48

## Five Laws, One Question (Slides 2-3)

Gas exchange is physics happening inside a warm, wet bag of tissue, so this lecture builds respiratory physiology out of gas laws rather than anatomy. Each law answers one link in a single chain: how much gas sits in a container (General Gas Law), how that gas is driven in and out during a breath (Boyle), how much of a mixture is the gas you actually care about (Dalton), how much of it dissolves in blood (Henry), and how fast it crosses the respiratory membrane (Fick). Lung diffusion capacity then bundles Fick's terms into one measurable number. Every pathology in this lecture — fibrosis, emphysema, edema, anemia, carbon monoxide, altitude — is one of those terms going wrong, which is why the laws are worth learning as a set rather than as five isolated formulas.

| Law | Equation | Core statement | Physiologic use |
| --- | --- | --- | --- |
| General Gas (Slide 3) | PV = nRT | P depends on molecule number and temperature | BTPS vs STPD conditions |
| Boyle (Slide 4) | P1V1 = P2V2 | P and V inversely proportional at fixed T | Inspiration / expiration |
| Dalton (Slide 5) | Px = (PB − PH2O) × F | Partial pressure = total × fraction | Tracheal and alveolar PO2 |
| Henry (Slide 6) | Cx = Px × solubility | Converts pressure to dissolved concentration | ABG, dissolved O2 and CO2 |
| Fick (Slide 7) | Vx = D·A·ΔP / Δx | Rate of diffusion across a membrane | Fibrosis, emphysema, edema |

- **General Gas Law, PV = nRT (Slide 3):** P = pressure (mmHg), V = volume (L), n = moles, R = a gas constant specific for each gas, T = temperature in Kelvin.
  - Pressure exists because Brownian motion keeps molecules colliding with each other and with the container wall.
  - **Propane-tank model [Lecturer Emphasis]:** hold volume constant and the equation collapses to P = nRT. Only two things can raise the pressure — add molecules at the refilling station, or move the tank out of its cool dry space into the sun.
- **Declare your conditions before any number means anything (Slide 3):**
  - **BTPS** — Body Temperature (37°C = 310 K), ambient Pressure, Saturated with water vapor. This is precisely the state of the gas sitting in the lungs, so it is the physiologic default.
  - **STPD** — Standard Temperature (0°C = 273 K), standard Pressure (760 mmHg at sea level), Dry gas. Used when measurements must be standardized for comparison.

:::mnemonic
**What each law is for**
**"Boyle Blows, Dalton Divides, Henry Dissolves, Fick Crosses"**

- **Boyle:** moves air in and out of the chest
- **Dalton:** splits a mixture into partial pressures
- **Henry:** turns partial pressure into dissolved concentration
- **Fick:** sets the rate across the membrane
:::

## Boyle's Law: Why a Breath Happens (Slide 4)

At a fixed temperature the product of pressure and volume is constant, so pressure and volume are inversely proportional — two containers with completely different pressures and volumes can share an identical product. Breathing is rhythmic only because the thorax can manipulate that product on demand.

- **Inspiration:** the rib cage expands → thoracic volume rises → intrapulmonary pressure falls → outside air flows in.
- **Expiration:** volume falls → pressure rises → air flows out.
- **Why:** in a larger volume the molecules collide far less often, and fewer collisions means lower pressure.

## Dalton's Law: Carving Up the Mixture (Slide 5)

Air is a mixture, and only the oxygen fraction of it can be exchanged, so the total pressure of a gas mixture must be split into the share belonging to each gas. That share is the partial pressure, and it is what drives diffusion — not the total.

- **Px = PB × F** for dry gas; F is the fractional concentration of the gas (no units).
- **Corrected for water vapor: Px = (PB − PH2O) × F**, where **PH2O = 47 mmHg at 37°C**.
- The **sum of all partial pressures equals the total pressure** of the mixture.
- Worked example the lecturer uses (Slide 11): humidified tracheal air = (760 − 47) × 0.21 = **150 mmHg**.
  - Humidification barely touches tracheal PCO2, because ambient air contains essentially no CO2 to begin with.

## Henry's Law: Pressure Becomes Concentration (Slide 6)

Partial pressure is awkward to work with in a diagnostic context; what a clinician wants is how much gas is actually *in* the blood. Henry's law makes that conversion, and its restriction is the most quietly powerful sentence in the lecture.

- **Cx = Px × solubility**, reported as a percentage or as **mL gas / 100 mL blood**.
- **Only gas free in solution counts.** Gas bound to protein — hemoglobin or albumin — exerts no partial pressure at all.
  - **O2:** most is bound to hemoglobin, so only a small dissolved fraction generates the PO2 you measure.
  - **CO2:** the majority travels in soluble form — dissolved CO2 plus the bicarbonate buffer system — and both of those contribute to partial pressure.

:::highyield
Partial pressure reports **dissolved gas only**. A gas that binds hemoglobin the instant it arrives never accumulates a partial pressure in blood — this one sentence is the whole explanation for why carbon monoxide is diffusion-limited, and why a normal-looking PO2 does not guarantee normal oxygen content.
:::

## Fick's Law: The Rate of Diffusion (Slide 7)

Boyle, Dalton and Henry all describe gas at rest; Fick describes gas in motion. His law gives the rate at which a gas crosses a membrane, and every one of its four terms is something a disease can attack. Read it carefully once and the rest of the lecture becomes a catalogue of ways to break it.

- **Vx = (D × A × ΔP) / Δx** — the volume of gas transferred per unit time.
  - **D** = diffusion coefficient (gas-specific); **A** = surface area; **ΔP** = partial pressure gradient; **Δx** = membrane thickness.
- Every term maps directly onto an alveolus: the surface area of the alveolar sheet, the thickness of the alveolar–capillary barrier, and the gradient between alveolar gas and capillary blood.
- **D for CO2 is far larger than for O2 — roughly 50× [Lecturer Emphasis].** CO2 is much more soluble in blood and water, so it gets into solution far more easily than oxygen does. Oxygen is the poor diffuser, and it is therefore the gas that fails first whenever the membrane is abnormal.

## Lung Diffusion Capacity, DL (Slides 7-8)

Fick's law has a blind spot: ΔP only sees dissolved gas, yet most oxygen and a share of CO2 are carried bound to hemoglobin. Lung diffusion capacity (DL, written DI on the slide) fixes this — it combines D, A and Δx *and* additionally accounts for gas that binds protein, which makes it the more accurate physiologic description of how easily gas crosses from alveolar space into capillary or back.

- **Determinants the lecturer lists:**
  - **Red blood cell number** — in anemia the alveolus may be full of oxygen, but with fewer cells to pick it up, DL falls.
  - **Alveolar and capillary condition** — cell density and cell number.
  - **Membrane thickness** — fibrosis and pulmonary edema both increase the distance between the alveolar and capillary compartments, making gas transfer harder.

:::diagram cv48-fick-barrier:::

:::correlate
Pulmonary Fibrosis
- **Pathophysiology:** thickening of the epithelium and basal membrane separating the alveolar space from the capillary raises Δx. Since Δx is the denominator of Fick's equation, Vx falls and DL falls. **Pulmonary edema** does the same thing by inserting fluid into the path.
- **Presentation:** hypoxemia and exertional dyspnea; oxygen, already the poorer diffuser, suffers before CO2 does.
- **Diagnosis:** reduced DL; on the equilibration curve, capillary PO2 never catches up to alveolar PO2 (Slide 13).
- **Complications:** depending on the degree of fibrosis, the patient may never reach 100 mmHg even at sea level; at altitude the reduced gradient stacks on top of the barrier and oxygen transport can become insufficient to survive.
- **Lecturer's Point:** fibrosis converts oxygen transfer from normally perfusion-limited to diffusion-limited. [Lecturer Emphasis]
:::

:::correlate
Emphysema
- **Pathophysiology:** destruction of cells rather than fibrotic thickening. The alveolar surface area A shrinks, so gases have "less opportunity" to cross; Vx and DL fall.
- **Presentation:** the same functional endpoint as fibrosis — a diffusion-limited exchange with hypoxemia.
- **Lecturer's Point:** fibrosis attacks Δx in the denominator, emphysema attacks A in the numerator. Different lesion, same equation, same result. [Lecturer Emphasis]
:::

## What an Arterial Blood Gas Actually Reports (Slide 9)

This is where the physics becomes a number on a chart. Because a gas can exist in blood in more than one form, a single panel has to report several values that are not interchangeable, and treating them as the same quantity is a classic exam trap.

- **Three forms of gas in blood:** dissolved, protein-bound, and chemically modified.
  - **O2 content** = the total across all forms. **O2 saturation** = the oxygenated-hemoglobin (bound) fraction. **PO2** = the dissolved fraction only.
  - The chemically modified form of CO2 is **bicarbonate**.
- A standard ABG reports **pH, PCO2, PO2 and HCO3−**, which together cover all three forms.

## The Oxygen Cascade Through the Lung (Slides 10-11)

Venous blood arrives from the right heart through the pulmonary circuit, exchanges at the alveolus — oxygen in, CO2 out — and returns freshly oxygenated to the left heart for the systemic circuit. What makes this testable is that PO2 falls in discrete, explainable steps along that path, and each step has a named cause.

- **Ambient air: PO2 ≈ 160 mmHg**, with essentially no CO2 in it.
- **Humidified tracheal air: PO2 = 150 mmHg** = (760 − 47) × 0.21. Water vapor dilutes the oxygen; mixing with dead-space gas also contributes (covered in the preceding respiratory lecture).
- **Alveolar gas: PO2 ≈ 100 mmHg and PCO2 ≈ 40 mmHg** — the air has given up oxygen and picked up carbon dioxide.
- **End-pulmonary-capillary blood:** some textbooks quote a slightly higher value, **105–108 mmHg**.
- **Systemic arterial blood: PO2 is still ≈ 100 mmHg.** The reason is **shunting** — bronchial blood flow plus a small portion of coronary venous blood empties deoxygenated blood into the freshly oxygenated stream, pulling 105–108 back down to 100 (Slide 11).
- **A/a difference:** the ventilation–perfusion defect widens with certain pathologies (Slide 11).

:::diagram cv48-po2-cascade:::

## Diffusion-Limited vs Perfusion-Limited Exchange (Slide 12)

This is the concept the lecturer calls the most challenging of the lecture, and it is read off a single graph: partial pressure on the y-axis, distance travelled along the pulmonary capillary on the x-axis, with the alveolar level drawn as a horizontal line. The only question is whether the capillary curve ever reaches that line before the blood leaves the capillary.

- **Perfusion-limited — the curve meets the alveolar line early.** Once equilibrated, no additional gas can move no matter how long the blood lingers; the only way to transfer more is to deliver more blood, so **flow is the ceiling**.
  - **O2 and CO2 under normal physiologic conditions**, with equilibration complete after about **one third** of the capillary transit — a large built-in safety margin.
  - The pulmonary circuit is a low-pressure system, and its flow rate is the limiting factor.
  - Nitrous oxide is the classic tracer that behaves this way, equilibrating almost immediately. [Transcript says "nitric oxide"; the standard perfusion-limited tracer on this curve is N2O.]
- **Diffusion-limited — the curve never meets the alveolar line**, so a gradient persists the entire length and transfer depends only on the properties of the barrier.
  - **Carbon monoxide** — the prototype (Slide 12).
  - **O2 during strenuous exercise, in fibrosis, and in emphysema.**

| Gas / condition | Limitation | Why |
| --- | --- | --- |
| CO | Diffusion | Binds Hb instantly; no dissolved fraction, so gradient never closes |
| O2 and CO2, normal | Perfusion | Equilibrate at ~1/3 of transit; flow sets the ceiling |
| N2O | Perfusion | Equilibrates almost immediately |
| O2 in fibrosis / edema | Diffusion | Δx increased |
| O2 in emphysema | Diffusion | A decreased |
| O2 in strenuous exercise | Diffusion | Extraction outruns transfer |

:::diagram cv48-diffusion-vs-perfusion:::

:::correlate
Carbon Monoxide Uptake
- **Pathophysiology:** CO dissolves well in blood, but as it enters the bloodstream it is taken up by hemoglobin "like a magnet," immediately and essentially completely. Bound gas exerts no partial pressure, so dissolved CO stays negligible and the alveolar-to-capillary gradient can never be abolished.
- **Consequence:** CO uptake is the textbook diffusion-limited transfer, which is exactly why CO is the gas used to measure lung diffusion capacity.
- **Lecturer's Point:** the very feature that makes CO dangerous — instantaneous, avid hemoglobin binding — is the feature that keeps it invisible to a partial-pressure measurement. [Lecturer Emphasis]
:::

:::mnemonic
**Diffusion-limited situations**
**CO FEE**

- **CO:** Carbon monoxide (always)
- **F:** Fibrosis
- **E:** Emphysema
- **E:** Exercise, strenuous (O2)
:::

## Pathology and Altitude on the Same Graph (Slide 13)

Slide 13 puts oxygen through two different insults and shows that they fail for different reasons. Fibrosis attacks the barrier, altitude attacks the gradient — and only one of the two defeats a healthy lung.

- **Normal at sea level:** mixed venous blood entering the pulmonary capillary carries a PO2 of about **45 mmHg** (never oxygen-free), and equilibrates fully with the alveolar 100 mmHg within roughly **one third** of the capillary length.
- **Fibrosis:** the extra diffusion barrier means equilibration is slower and, depending on severity, may never complete; the patient may never reach 100 mmHg.
- **High altitude:** alveolar PO2 may be only about **50 mmHg** at the highest points on the planet. The gradient is smaller, so equilibration takes longer — but in a normal lung it still finishes before the blood leaves the capillary.
- **The two together:** a patient who already struggles at sea level with fibrosis may, under altitude conditions, be unable to survive because oxygen transport from alveolar air into the pulmonary bloodstream is simply deficient.

:::correlate
High-Altitude Hypoxemia
- **Pathophysiology:** barometric pressure falls with altitude, so by Dalton's law inspired and alveolar PO2 fall with it — down to roughly 50 mmHg at extreme altitude. ΔP in Fick's equation shrinks, slowing equilibration.
- **Presentation:** a healthy lung compensates, since equilibration merely takes longer and still completes within the available transit time.
- **Lecturer's Point:** altitude is the one setting where oxygen uptake can become an issue even in a healthy person, and it is where an already-fibrotic lung fails outright. [Lecturer Emphasis]
:::

## The Lecturer's Own Board Question (Slide 14)

The lecture closes with the lecturer's own board-style item, and he then walks through every distractor aloud. That makes this slide the single best guide to how he expects the concept to be tested.

- **Scenario:** a healthy 25-year-old at maximum-intensity treadmill exercise; erythrocyte transit time through the alveolar capillary drops from **0.75 s at rest to 0.25 s**.
- **Answer: oxygen transport is perfusion-limited, because partial pressure equilibration is reached well within the shortened 0.25-second window.**
- **Why each distractor fails, in his words:**
  - "Becomes diffusion-limited" — no; a healthy lung at sea level has no added barrier, and equilibration normally takes about a quarter of a second anyway.
  - "CO2 competes for the same capillary surface area" — no; O2 and CO2 bind different sites on hemoglobin and do not compete in that way.
  - "High blood velocity prevents any diffusion" — no; faster pulmonary flow actually *increases* oxygen pickup.
  - "The blood–air barrier thickens during exercise" — no; thickening is the fibrosis scenario, not the exercise scenario.
- **His correction to his own stem:** "becomes" is imprecise. In a healthy person at sea level, oxygen transport **is always** perfusion-limited. [Lecturer Emphasis]

:::highyield
Reconcile the two statements this lecture makes about exercise. Slide 12 lists strenuous exercise among the diffusion-limited situations, because extraction can be fast enough that a gradient persists. The Slide 14 vignette nonetheless scores a healthy athlete at sea level as perfusion-limited, because 0.25 s is still enough time to equilibrate. Exam position: in health, oxygen is perfusion-limited; a gradient only persists when the barrier is abnormal or the demand is extreme.
:::
`,
  "flashcards": [
    { "front": "State the General Gas Law and name every term.", "back": "PV = nRT. P = pressure (mmHg), V = volume (L), n = moles, R = gas constant specific for each gas, T = temperature in Kelvin.", "tag": "Glossary" },
    { "front": "What does BTPS stand for, and what are its values?", "back": "Body Temperature (37°C = 310 K), ambient Pressure, Saturated with water vapor — the condition of gas inside the lungs.", "tag": "Glossary" },
    { "front": "What does STPD stand for, and what are its values?", "back": "Standard Temperature (0°C = 273 K), standard Pressure (760 mmHg at sea level), Dry gas.", "tag": "Glossary" },
    { "front": "How does Boyle's law explain inspiration?", "back": "The rib cage expands, raising thoracic volume; since P and V are inversely proportional at fixed T, intrapulmonary pressure falls and air flows in.", "tag": "Concept" },
    { "front": "Write Dalton's law corrected for water vapor.", "back": "Px = (PB − PH2O) × F, with PH2O = 47 mmHg at 37°C. The sum of all partial pressures equals the total pressure.", "tag": "Glossary" },
    { "front": "Calculate the PO2 of humidified tracheal air.", "back": "(760 − 47) × 0.21 = 150 mmHg.", "tag": "Concept" },
    { "front": "What is Henry's law and what is its key restriction?", "back": "Cx = Px × solubility (mL gas/100 mL blood or %). It applies ONLY to gas free in solution — protein-bound gas (hemoglobin, albumin) exerts no partial pressure.", "tag": "Concept" },
    { "front": "Write Fick's law of diffusion and identify which term fibrosis changes.", "back": "Vx = D·A·ΔP/Δx. Fibrosis increases Δx (membrane thickness), the denominator, so Vx falls.", "tag": "Concept" },
    { "front": "How do the diffusion coefficients of CO2 and O2 compare?", "back": "D for CO2 is about 50× that of O2 — CO2 is far more soluble in blood and water, so O2 is the gas that fails first.", "tag": "Concept" },
    { "front": "What does lung diffusion capacity (DL) add to Fick's law?", "back": "It combines D, A and Δx and additionally accounts for gases bound to protein, not just gas free in solution.", "tag": "Concept" },
    { "front": "Why does anemia reduce lung diffusion capacity?", "back": "Fewer red blood cells means fewer molecules available to pick up oxygen, even if alveolar oxygen is plentiful.", "tag": "Clinical" },
    { "front": "List the PO2 at each step of the oxygen cascade.", "back": "Ambient air 160 → humidified trachea 150 → alveolar gas 100 (PCO2 40) → end-capillary 105–108 in some texts → systemic artery 100.", "tag": "Concept" },
    { "front": "Why is systemic arterial PO2 only 100 mmHg if end-capillary blood may be 105–108?", "back": "Shunting: bronchial blood flow and a small portion of coronary venous blood mix deoxygenated blood into the freshly oxygenated stream.", "tag": "Concept" },
    { "front": "Why is carbon monoxide uptake diffusion-limited?", "back": "CO binds hemoglobin immediately, so it never exists free in solution, never exerts a partial pressure, and the alveolar–capillary gradient never closes.", "tag": "Clinical" },
    { "front": "Which gases/conditions are perfusion-limited vs diffusion-limited?", "back": "Perfusion-limited: O2 and CO2 under normal conditions (equilibrate at ~1/3 of transit), N2O. Diffusion-limited: CO, and O2 in fibrosis, emphysema, and strenuous exercise.", "tag": "Concept" },
    { "front": "Transit-time numbers from the lecture's board question?", "back": "Capillary transit is ~0.75 s at rest and falls to ~0.25 s at maximal exercise; equilibration normally needs about 0.25 s, so healthy exchange stays perfusion-limited.", "tag": "Clinical" }
  ],
  "questions": [
    {
      "question": "A physiologist measures the partial pressure of oxygen in a blood sample and finds it far lower than the total oxygen content would suggest. Which principle best explains this discrepancy?",
      "options": ["A. Boyle's law: pressure and volume are inversely proportional", "B. Dalton's law: partial pressures sum to the total pressure", "C. Henry's law: only gas free in solution exerts a partial pressure", "D. Fick's law: transfer rate depends on membrane thickness", "E. The General Gas Law: pressure varies with temperature and moles"],
      "answer": "C",
      "rationale": "Henry's law applies only to dissolved gas. Most oxygen is bound to hemoglobin, and protein-bound gas exerts no partial pressure, so PO2 reflects only the small dissolved fraction while content reflects the total.",
      "hidden": true
    },
    {
      "question": "Humidified air in the trachea at sea level has a PO2 of 150 mmHg rather than the 160 mmHg of ambient air. Which calculation accounts for this drop?",
      "options": ["A. (760 − 47) × 0.21", "B. 760 × 0.21 − 40", "C. (760 − 40) × 0.21", "D. 760 × 0.21 × 0.47", "E. (760 + 47) × 0.21"],
      "answer": "A",
      "rationale": "Water vapor at 37°C exerts 47 mmHg, which must be subtracted from barometric pressure before applying the fractional concentration of oxygen: (760 − 47) × 0.21 = 150 mmHg.",
      "hidden": true
    },
    {
      "question": "A patient with idiopathic pulmonary fibrosis has a markedly reduced lung diffusion capacity. Which variable in Fick's equation is primarily deranged?",
      "options": ["A. Surface area (A)", "B. Diffusion coefficient (D)", "C. Partial pressure gradient (ΔP)", "D. Membrane thickness (Δx)", "E. Barometric pressure (PB)"],
      "answer": "D",
      "rationale": "Fibrosis thickens the epithelium and basal membrane separating alveolus from capillary, increasing Δx. Because Δx sits in the denominator of Vx = D·A·ΔP/Δx, transfer falls. Emphysema, by contrast, reduces A.",
      "hidden": true
    },
    {
      "question": "In a healthy person at sea level, capillary blood equilibrates with alveolar oxygen after roughly one third of its transit through the pulmonary capillary. What does this imply about oxygen transfer?",
      "options": ["A. It is diffusion-limited, since a gradient persists along the capillary", "B. It is perfusion-limited, since transfer is capped by blood flow", "C. It is limited by the diffusion coefficient of oxygen", "D. It is limited by alveolar surface area", "E. It is limited by hemoglobin binding kinetics"],
      "answer": "B",
      "rationale": "Once capillary PO2 matches alveolar PO2, no further transfer can occur regardless of additional contact time. The only way to move more oxygen is to deliver more blood, so flow through the low-pressure pulmonary circuit is the ceiling — the definition of perfusion limitation.",
      "hidden": true
    },
    {
      "question": "During a diffusion capacity test, carbon monoxide is used as the test gas because its uptake never saturates the capillary blood. What property of CO explains this?",
      "options": ["A. Its diffusion coefficient is roughly 50 times that of oxygen", "B. It is chemically converted to bicarbonate in the erythrocyte", "C. It lowers alveolar surface area available for exchange", "D. It reduces the barometric pressure of inspired gas", "E. It binds hemoglobin immediately and so never dissolves"],
      "answer": "E",
      "rationale": "CO is bound by hemoglobin the moment it enters blood, so it never accumulates a free dissolved fraction and never exerts a partial pressure. The alveolar-to-capillary gradient therefore persists along the entire capillary, making CO uptake purely diffusion-limited — ideal for measuring the membrane itself.",
      "hidden": true
    }
  ],
  "anking": [
    { "match": "Gas laws in respiratory physiology", "resources": "Boyle, Dalton, Henry, Fick — partial pressure, solubility, diffusion" },
    { "match": "Diffusion-limited vs perfusion-limited gas exchange", "resources": "CO diffusion-limited, N2O and normal O2/CO2 perfusion-limited, exercise and fibrosis" },
    { "match": "DLCO / lung diffusing capacity", "resources": "Diffusing capacity for carbon monoxide, determinants and causes of a low DLCO" },
    { "match": "Oxygen cascade and alveolar gas partial pressures", "resources": "PO2 160 ambient, 150 humidified trachea, 100 alveolar, PCO2 40" },
    { "match": "Physiologic shunt and A-a gradient", "resources": "Bronchial and coronary venous drainage lowering arterial PO2; A-a difference" }
  ],
  "ankingResource": {
    "primarySource": "BandB",
    "chapter": "Pulmonary > Respiratory Physiology > Gas Exchange and Diffusion",
    "alternatives": [
      { "resource": "Physeo", "chapter": "Pulmonary > Gas Exchange > Diffusion and DLCO" },
      { "resource": "FirstAid", "chapter": "Respiratory > Physiology > Diffusion, oxygen content, A-a gradient" },
      { "resource": "Bootcamp", "chapter": "Physiology > Respiratory > Alveolar gas equation and gas transport" },
      { "resource": "Pathoma", "chapter": "Obstructive and restrictive lung disease (emphysema, fibrosis) as DL lesions" }
    ]
  },
  "pearls": [
    { "title": "Only dissolved gas has a pressure", "content": "Partial pressure reflects dissolved gas only. Gas bound to hemoglobin or albumin exerts no partial pressure — the key to CO, and to why PO2 and O2 content can diverge." },
    { "title": "BTPS vs STPD", "content": "BTPS = 37°C (310 K), ambient pressure, saturated with water vapor — the lung's own condition. STPD = 0°C (273 K), 760 mmHg, dry gas — for standardizing measurements." },
    { "title": "Water vapor costs 47 mmHg", "content": "At 37°C, PH2O = 47 mmHg. Humidified tracheal PO2 = (760 − 47) × 0.21 = 150 mmHg. Tracheal PCO2 is barely affected because ambient air has almost no CO2." },
    { "title": "CO2 diffuses ~50× better than O2", "content": "The diffusion coefficient for CO2 is about 50 times that of O2, so oxygen is the gas that fails first when the alveolar-capillary membrane is diseased." },
    { "title": "Fibrosis vs emphysema in one equation", "content": "Vx = D·A·ΔP/Δx. Fibrosis and edema raise Δx (denominator); emphysema lowers A (numerator). Both lower DL and both cause diffusion limitation." },
    { "title": "The one-third rule", "content": "Under normal conditions O2 and CO2 fully equilibrate within about one third of the pulmonary capillary transit — a built-in reserve that keeps healthy exchange perfusion-limited." },
    { "title": "0.75 to 0.25 seconds", "content": "Capillary transit falls from ~0.75 s at rest to ~0.25 s at maximal exercise. Since equilibration needs about 0.25 s, a healthy athlete still equilibrates — transport stays perfusion-limited." },
    { "title": "Why arterial PO2 is only 100", "content": "End-capillary blood may run 105–108 mmHg, but bronchial blood flow and a small portion of coronary venous blood shunt deoxygenated blood in, returning systemic arterial PO2 to about 100." },
    { "title": "Altitude shrinks ΔP, not Δx", "content": "At extreme altitude alveolar PO2 may be ~50 mmHg. A normal lung still equilibrates, just more slowly; a fibrotic lung, already failing at sea level, may not survive." }
  ],
  "mindmap": `
## Diffusion of Gases Through the Respiratory Membrane

### General Gas Law (Slide 3)

- **PV = nRT**: P mmHg, V litres, n moles, R gas-specific constant, T Kelvin
- **Pressure origin**: Brownian motion, molecular collisions
- **Constant volume**: P = nRT — add gas or add heat to raise P
- **BTPS**: 37°C / 310 K, ambient pressure, saturated with water vapor (lung condition)
- **STPD**: 0°C / 273 K, 760 mmHg, dry gas (standardization)

### Boyle's Law (Slide 4)

- **P1V1 = P2V2**: constant temperature
- **Inverse relationship**: volume up, pressure down
- **Inspiration**: rib cage expands, pressure falls, air enters
- **Expiration**: volume falls, pressure rises, air exits

### Dalton's Law (Slide 5)

- **Px = PB × F**: dry gas
- **Px = (PB − PH2O) × F**: corrected, PH2O = 47 mmHg at 37°C
- **Sum rule**: all partial pressures add to total pressure
- **Tracheal PO2**: (760 − 47) × 0.21 = 150 mmHg

### Henry's Law (Slide 6)

- **Cx = Px × solubility**: mL gas/100 mL blood or %
- **Restriction**: only gas free in solution; protein-bound gas exerts no partial pressure
- **O2**: mostly hemoglobin-bound, small dissolved fraction
- **CO2**: majority soluble — dissolved CO2 and bicarbonate, both count

### Fick's Law (Slide 7)

- **Vx = D·A·ΔP/Δx**: volume transferred per unit time
- **D**: gas-specific; D CO2 about 50× D O2
- **A**: alveolar surface area
- **ΔP**: alveolar-to-capillary gradient
- **Δx**: membrane thickness

### Lung Diffusion Capacity DL (Slides 7-8)

- **Combines**: D, A, Δx
- **Adds**: protein-bound gases, unlike Fick alone
- **Red cells**: anemia lowers DL
- **Alveolar/capillary condition**: cell number and density
- **Fibrosis and edema**: increase alveolar-capillary distance

### Forms of Gas in Blood / ABG (Slide 9)

- **Three forms**: dissolved, bound, chemically modified
- **O2 content**: all forms; **O2 sat**: bound fraction; **PO2**: dissolved
- **ABG reports**: pH, PCO2, PO2, bicarbonate

### Oxygen Cascade (Slides 10-11)

- **Ambient air**: PO2 160, PCO2 ~0
- **Humidified trachea**: PO2 150
- **Alveolar gas**: PO2 100, PCO2 40
- **End capillary**: 105–108 in some texts
- **Systemic artery**: 100, lowered by bronchial and coronary venous shunt
- **A/a difference**: widens with pathology

### Diffusion vs Perfusion Limitation (Slide 12)

- **Perfusion-limited**: curve meets alveolar line; O2 and CO2 normally, N2O
- **One-third rule**: equilibration within 1/3 of transit
- **Flow ceiling**: low-pressure pulmonary circuit
- **Diffusion-limited**: gradient persists; CO always
- **CO mechanism**: instant hemoglobin binding, never dissolved, no partial pressure
- **Also diffusion-limited**: O2 in strenuous exercise, fibrosis, emphysema

### Pathology and Altitude (Slides 13-14)

- **Mixed venous PO2**: about 45 mmHg entering the capillary
- **Fibrosis**: extra barrier, equilibration may never complete
- **High altitude**: alveolar PO2 about 50 mmHg, gradient reduced, healthy lung still equilibrates
- **Combined**: fibrosis at altitude may be non-survivable
- **Board question**: transit 0.75 s to 0.25 s at max exercise; O2 stays perfusion-limited
`
});
