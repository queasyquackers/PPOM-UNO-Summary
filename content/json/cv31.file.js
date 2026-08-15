window.receiveLectureContent({
  "id": "cv31",
  "title": "Lecture #31: Pharmacology of Diuretic Agents, Part 2",
  "lecturer": "Leslie Goldstein, Pharm.D.",
  "pdf": "content/CV31_HighYield_Render.pdf",
  "content": `
# Lecture #31: Pharmacology of Diuretic Agents, Part 2

**Lecturer:** Leslie Goldstein, Pharm.D.
**Session:** Lecture #31

## Orientation: The Last Three Classes (Slides 1, 6-8)

Part 2 finishes a single lecture begun in [[CV30]], so the objectives are unchanged: find the transporter, then predict everything else - urinary electrolytes, acid-base shift, compensatory response, adverse effect. What changes is position along the nephron. Thiazides block the **NCC** in the distal convoluted tubule (DCT), where only **5-10%** of filtered sodium is still available. **ENaC inhibitors** and **mineralocorticoid receptor antagonists (MRAs)** act on principal cells, where only **2-5%** remains - which is exactly why both are called weak diuretics. **Osmotic diuretics** block nothing at all; they are inert solutes that hold water in the lumen. Natriuretic power falls as you move distally, but the ability to solve a specific problem rises: a thiazide can treat a disease of too much urine, and an ENaC blocker can treat a channel mutation.

## Thiazides: Two Structural Families, One Target (Slides 9-10, 13)

Every thiazide inhibits the **sodium-chloride cotransporter (NCC)** on the luminal membrane of the DCT; the split between them is structural, not functional. **Thiazide-type** drugs carry the original **benzothiadiazine ring** with its **sulfonamide moiety** - hydrochlorothiazide (HCTZ) is the prototype, and **chlorothiazide is the only IV thiazide**. **Thiazide-like** drugs arrived later, lack that ring, and act identically; **chlorthalidone** is the prototype and carries most of the outcome-trial data. Indapamide and metolazone are flagged as boards-relevant but not required by name [Lecturer Emphasis].

- **Pharmacokinetics (Slide 10):** well absorbed, good bioavailability, **moderate protein binding**, **not metabolized**, **excreted as intact drug**.
  - Protein binding means only free drug is filtered; the rest reaches the lumen by **OAT secretion** in the proximal tubule. That single fact explains the probenecid and NSAID interactions below.
- **Half-life is the only meaningful difference between the prototypes.**

| Drug | Duration | Half-life | Consequence |
|---|---|---|---|
| Hydrochlorothiazide | 6-12 h | 6-15 h | Most widely used; in many fixed-combination products |
| Chlorthalidone | 24-72 h | 40-60 h | Smoother 24-h BP control; higher hypokalemia risk |

- **Comparative outcomes (Slide 13):** large observational studies and randomized trials show **both drugs lower BP and reduce heart attack, stroke and heart failure at similar rates**. Longer action did not buy better outcomes; chlorthalidone may simply suit a given patient better [Lecturer Emphasis].

## NCC Blockade: Sodium Out, Calcium In (Slides 11-12)

Blocking NCC dumps sodium and chloride into the urine, and because only 5-10% of filtered sodium reaches the DCT, the natriuresis and diuresis are **moderate** - not the torrent a loop diuretic produces. The second half of the mechanism is the one worth real study time, because thiazides are the only diuretic class that **retains** calcium. Lowering intracellular sodium steepens the gradient that the **basolateral NCX1** exchanger runs on (**3 Na+ in, 1 Ca2+ out**), so NCX1 works harder, intracellular calcium falls, and calcium is pulled in from the lumen through apical **TRPV5** and exported to the blood. **PMCA1b** is only a fine-tuner.

:::diagram cv31-dct-calcium:::

| Class | Urine Na+ | Urine K+ | Urine Ca2+ | Body pH |
|---|---|---|---|---|
| Thiazide | ++ | ++ | decreased | alkalosis |
| Loop + thiazide | +++++ | ++++ | - | alkalosis |
| K+-sparing | + | retained | - | mild acidosis |

:::highyield
Thiazides impair the kidney's ability to **dilute** urine (the TAL and DCT are the diluting segments - impermeable to water) but leave **concentrating** ability intact, because they do nothing to the medullary gradient. Loop diuretics wreck both. That asymmetry is why thiazides, not loops, are the major cause of diuretic-induced hyponatremia.
:::

## Thiazides in Hypertension (Slide 13)

Thiazides are **guideline-directed first-line agents for primary hypertension**, alone or combined. The acute effect is volume: reduced extracellular fluid lowers plasma volume, cardiac output and therefore blood pressure. The **sustained** effect is different and is the one examiners want - **chronic sodium depletion in vascular smooth muscle decreases its responsiveness to vasoconstrictors**, producing a persistent fall in peripheral vascular resistance even after plasma volume has drifted back toward baseline.

## Thiazides for Too Much Urine, and for Stones (Slide 14)

:::correlate
Vasopressin Resistance (AVP-R / Nephrogenic Diabetes Insipidus), including Lithium-Induced

- **Pathophysiology:** The collecting duct cannot respond to ADH (vasopressin), so free water is lost and the patient has polyuria. Lithium is a major acquired cause.
- **Presentation:** Polyuria and polydipsia despite adequate or high ADH.
- **Treatment:** Discontinue lithium if possible, then **thiazide diuretic + low-sodium, low-protein diet (low solute load) + an NSAID**.
- **Mechanism (counterintuitive, must know):** NCC blockade shifts sodium reabsorption **upstream**. Thiazide-induced mild volume contraction activates RAAS and lowers GFR; the sodium still filtered is reclaimed proximally with water, so far less filtrate reaches the ADH-insensitive collecting duct. **Overall urine output falls by up to 30-50%**, and a new lower steady state persists as long as the drug is taken.
- **Lecturer's Point:** "Doesn't make sense, does it?" - the drug reduces polyuria by **overall conservation of water**. The NSAID is deliberate here despite the usual warning, because blocking prostaglandins **enhances ADH activity**. Works best with long-acting chlorthalidone [Lecturer Emphasis].
  :::

:::diagram cv31-thiazide-paradox:::

:::correlate
Calcium Nephrolithiasis from Idiopathic Hypercalciuria

- **Pathophysiology:** Excess urinary calcium supersaturates the urine with calcium oxalate and calcium phosphate, seeding recurrent stones.
- **Treatment:** A thiazide reduces urinary calcium by the DCT mechanism above, lowering supersaturation and **reducing recurrence in selected patients**. Never the only measure - combine with **increased fluid intake, dietary modification, weight loss** and drug therapy.
- **Lecturer's Point:** This is about **recurrence** in selected hypercalciuric patients, not primary prevention for everyone.
  :::

Thiazides are also used in **edematous states**, most usefully for **sequential nephron blockade**: a loop diuretic blocks NKCC2 in the thick ascending limb, some of the escaping sodium is reclaimed downstream at the NCC, and adding a thiazide blocks that second site for a **synergistic** natriuretic-diuretic effect.

## Thiazide Adverse Effects: Almost All Dose-Dependent (Slide 15)

| Adverse effect | Mechanism in one line |
|---|---|
| ECF depletion, hypotension | Expected volume effect |
| **Hyponatremia** | Dilution impaired, concentration intact; thirst adds water; NSAID worsens it |
| Hypokalemic metabolic alkalosis | Distal Na+ load + aldosterone raise ENaC, Na+/K+ ATPase, ROMK; H+ secreted; hypochloremia and HCO3- retention sustain it |
| Hypomagnesemia | Chronic use causes DCT remodeling and **TRPM6** downregulation |
| Hypercalcemia (uncommon) | DCT calcium retention; PTH keeps serum calcium tight |
| Hyperuricemia / gout | Hypovolemia raises urate reabsorption; secretion falls via URAT1 |
| Hyperglycemia / insulin resistance | Hypokalemia blocks the beta-cell ATP-sensitive K+ channel, impairing insulin release (primary); plus reduced tissue glucose utilization |
| Hyperlipidemia (mild) | Follows the impaired insulin sensitivity |
| GI intolerance (rare); pregnancy caution | May decrease placental perfusion - use only if maternal benefit outweighs fetal risk |

:::correlate
Thiazide-Induced Hyponatremia

- **Pathophysiology:** NCC inhibition leaves solute in the tubular fluid, so **solute-free water cannot be excreted**. Concentrating ability is preserved - the medullary gradient is untouched, the collecting duct still answers ADH, AQP2 is inserted, and free water is reabsorbed. **Water is retained in excess of sodium**: dilutional hyponatremia. Thirst and voluntary water intake add to it.
- **Risk Factors:** Concomitant **NSAID** (prostaglandins normally oppose ADH, so removing them enhances ADH effect); any impairment of water excretion; older patients.
- **Lecturer's Point:** "Please know that mechanism." Most patients do **not** become hyponatremic unless water excretion is already impaired [Lecturer Emphasis].
  :::

:::mnemonic
**Thiazide metabolic profile**
**HyperGLUC, hypo-NaKMg**

- **G:** Glycemia - hypokalemia impairs insulin release
- **L:** Lipidemia - mild, follows insulin resistance
- **U:** Uricemia - can trigger a gout attack
- **C:** Calcemia - uncommon, PTH buffers it
- **Low Na+, K+, Mg2+:** the three that fall
  :::

## Thiazide Drug Interactions (Slides 16-17, 20-21)

| Interacting agent | Result | Mechanism |
|---|---|---|
| Loop diuretic, other antihypertensives | Synergy (favorable) | Sequential nephron blockade; additive BP lowering |
| **NSAIDs** | Blunted BP effect, AKI risk, hyponatremia | Afferent constriction lowers renal blood flow, GFR and drug secretion, so less thiazide reaches the DCT; plus Na+/water reabsorption upstream of NCC and enhanced ADH |
| **Lithium** | Lithium toxicity | Volume contraction drives compensatory proximal reabsorption of Na+ **and Li+**; narrow therapeutic window, so a modest rise is dangerous |
| Digitalis glycosides | Arrhythmia | Hypokalemia means less K+ competing at the cardiomyocyte Na+/K+ ATPase, so more digoxin binds, cytosolic Ca2+ overloads, automaticity rises |
| Antidiabetic drugs | Hyperglycemia | Thiazide blunts the antidiabetic effect |
| Probenecid | Reduced efficacy | Potent OAT inhibitor - less drug reaches the nephron lumen |
| Amphotericin B, glucocorticoids | Hypokalemia | Additive potassium wasting |

The NSAID interaction is repeated deliberately throughout the lecture ("that is how important it is") and matters because **patients treat themselves with OTC naproxen or ibuprofen without telling anyone** [Lecturer Emphasis].

## ENaC Inhibitors: Amiloride and Triamterene (Slides 23-28)

**Amiloride** is the starred, widely used agent; triamterene is the second. They are orally absorbed and moderately protein bound, and - unlike the thiazides - reach the nephron through the **organic cation transporter (OCT)**, not the OAT. Amiloride is **not metabolized** and is renally excreted; triamterene is hepatically metabolized to an active metabolite. Half-lives support once- or twice-daily dosing.

- **Mechanism:** block the luminal **epithelial sodium channel (ENaC)** in principal cells. Less sodium enters, so the **lumen-negative transepithelial potential is neutralized**, the electrochemical gradient driving K+ out through ROMK collapses, and **potassium is retained** - the potassium-sparing effect, and the source of the hyperkalemia risk.
- **Clinical uses (Slide 27):** hypertension and edema, essentially always as an **adjunct to a potassium-wasting drug** - most often a thiazide, both to enhance diuresis and to counteract thiazide-induced hypokalemia.

:::diagram cv31-lithium-principal-cell:::

- **Lithium-induced AVP-R in a patient who must stay on lithium (Slide 27):** lithium enters principal cells **through ENaC** and is not pumped back out; accumulation downregulates **AQP2** expression and trafficking, so the duct is impermeable to water despite ADH. Amiloride prevents the entry - treating the root cause - and a thiazide is added for the volume-contraction effect that lowers distal delivery. Monitor lithium levels carefully; severe tubular injury may be irreversible.

:::correlate
Liddle Syndrome (Pseudoaldosteronism)

- **Pathophysiology:** Rare **autosomal dominant gain-of-function mutation** in the genes regulating ENaC, producing far more channels than normal. Unregulated sodium reabsorption creates a strong lumen-negative potential, driving **potassium and hydrogen secretion**. Plasma renin and aldosterone are **suppressed** by the sodium and fluid retention.
- **Presentation:** Hypertension with **hypokalemia** in a young patient.
- **Treatment:** **ENaC inhibitor plus sodium restriction**, which manages both the hypertension and the hypokalemia.
- **Lecturer's Point:** The lecturer corrected herself mid-slide - more ENaC means more sodium reabsorbed, a deeper lumen-negative potential, more potassium secreted, and therefore **hypokalemia**, not hyperkalemia [Lecturer Emphasis].
  :::

- **Hyperkalemia cautions (Slide 28):** the effect is **dose-dependent**. Patient risk factors are older age, high-dose therapy, **renal impairment**, hypoaldosteronism, and combination with anything else that impairs potassium excretion. The drug list to memorize: **RAS inhibitors (ACE inhibitors, ARBs, direct renin inhibitors), NSAIDs, potassium supplements, and calcineurin inhibitors (cyclosporine, tacrolimus)**. These agents are contraindicated in patients who are already hyperkalemic.

## Mineralocorticoid Receptor Antagonists (Slides 29-33)

**Spironolactone** is the prototype and is structurally a steroid, visibly similar to aldosterone; **eplerenone** is more MR-selective, and **finerenone** is a nonsteroidal MRA approved for chronic kidney disease. They are the other potassium-sparing class, but they get there by a completely different route: rather than plugging a luminal channel, they cross the **basolateral** membrane, bind the **cytosolic mineralocorticoid receptor**, and the drug-receptor complex translocates to the nucleus and blocks transcription of aldosterone's target genes - **ENaC, Na+/K+ ATPase, ROMK** and hydrogen secretion from type A intercalated cells. Net result is the opposite of aldosterone: **sodium and water excreted, potassium and hydrogen retained**.

- **The dependency rule:** the **higher the patient's aldosterone level, the greater the MRA effect** on urinary electrolytes. With aldosterone suppressed, there is little to block.
- **Why cortisol does not do this (Slide 31):** cortisol activates MRs, but wherever MRs live, **11-beta-hydroxysteroid dehydrogenase type 2** converts cortisol to inactive cortisone, leaving the receptor to aldosterone.
- **Pharmacokinetics (Slide 30):** well absorbed, **highly protein bound**, hepatic metabolism, renal and biliary excretion. Spironolactone itself has a short half-life, but **active metabolites - canrenone especially, with enterohepatic circulation - extend its duration**. Eplerenone is a **CYP3A4** substrate with **inactive** metabolites, yet still acts 7-9 hours despite a half-life under 2 hours, because it works intracellularly on the receptor.

- **Clinical uses (Slide 32):**
  - **Edema and hypertension:** combined with a thiazide or loop diuretic for the potassium-sparing plus additive diuretic effect.
  - **Primary aldosteronism:** goals are to raise serum potassium to **high-normal**, normalize blood pressure, and **reverse the effects of hyperaldosteronism on heart and kidneys**.
  - **Heart failure, both HFrEF and HFpEF**, in patients already on optimal therapy and at low hyperkalemia risk. The rationale is non-renal: **MR is overexpressed in blood vessels and heart**, contributing to **inflammation, myocardial remodeling and fibrosis** on top of sodium retention. Spironolactone added after stabilization improves outcomes in randomized trials.
  - **Acne and hirsutism in females, and transgender women:** the antiandrogenic effect used deliberately.

:::correlate
Ascites due to Hepatic Cirrhosis

- **Pathophysiology:** Portal hypertension raises hydrostatic pressure and transudes fluid into the peritoneum, lowering **effective circulating volume**. Nitric-oxide-mediated **splanchnic vasodilation** further drops systemic vascular resistance, activating the **SNS, RAAS and vasopressin** with sodium and water retention. **Hypoalbuminemia** from liver dysfunction lowers oncotic pressure and lets more fluid leak into the interstitium and peritoneal space.
- **Treatment:** **Spironolactone is first-line**, because the patient is in a state of **secondary hyperaldosteronism** and the drug attacks that directly. It may be given with furosemide, but **furosemide is not used alone** here.
- **Lecturer's Point:** Called out as important for boards and for practice - know the mechanism, not just the drug name [Lecturer Emphasis].
  :::

- **Adverse effects and interactions (Slide 33):** **hyperkalemia** for the class, with the same drug list as the ENaC inhibitors. **Spironolactone alone** causes **gynecomastia, impotence, loss of libido and feminizing effects**, because it antagonizes the **androgen receptor** and interferes with **testosterone biosynthesis**, shifting the estradiol-testosterone balance toward estradiol. **Eplerenone and finerenone do not.** Spironolactone also **interferes with serum digoxin assays (false results)**, and eplerenone is subject to **CYP3A4 interactions, including grapefruit juice**.

:::correlate
Triple Hit: Thiazide plus MRA plus NSAID

- **Presentation:** A 70-year-old woman on hydrochlorothiazide and spironolactone starts daily OTC naproxen for knee pain; labs show **rising creatinine and potassium 5.8 mEq/L** (Slide 37).
- **Pathophysiology:** (1) The thiazide reduces effective circulating volume and renal perfusion pressure, so GFR becomes **prostaglandin-dependent** on afferent dilation. (2) The NSAID blocks that dilation - afferent constriction, falling renal blood flow, **marked GFR reduction and AKI risk**. (3) Spironolactone removes the lumen-negative potential, so ROMK-mediated potassium secretion stops, and the NSAID adds further potassium retention by suppressing renin and aldosterone.
- **Lecturer's Point:** She would have bought the naproxen herself - it is OTC, advertised, and recommended by friends. Ask about it [Lecturer Emphasis].
  :::

## Osmotic Diuretics: Mannitol (Slides 38-43)

**Mannitol (IV)** is the one to know; urea (IV), glycerin and isosorbide (oral) round out the list. Osmotic diuretics are **pharmacologically inert** - no receptor, no transporter - so every effect follows from where the solute sits. They are **distributed only in extracellular fluid**, **freely filtered at the glomerulus** (so a functioning kidney is required) and **not reabsorbed by the nephron**. Mannitol is **not absorbed from the GI tract**, which is why it is IV, and must be given as **bolus injections, never continuous infusion**.

- **Kinetics:** terminal half-life about **5 hours**; **onset of diuresis 1-3 hours**; **ICP reduction begins in 15-30 minutes** and lasts **1.5-6 hours** depending on dose.
- **Renal action (Slide 40):** the greatest effect is in the **water-permeable segments - proximal tubule (major) and descending limb of the loop of Henle** - where mannitol holds water in the lumen. It also impairs water reabsorption in the collecting tubule. Urine volume rises, and **nearly all electrolytes are dragged along**.
- **Plasma action:** plasma osmolality rises, so **water is extracted from cells into the ECF**.
- **Uses (Slide 41):** acute reduction of **intracranial pressure with cerebral edema** and of **intraocular pressure**; an adjunct in some **cisplatin** regimens for forced diuresis, though this has faded because evidence of benefit is lacking - isotonic saline is preferred.

:::diagram cv31-mannitol-shift:::

:::correlate
Mannitol-Induced Pulmonary Edema

- **Presentation:** A 65-year-old man treated with IV mannitol for traumatic brain injury improves neurologically, then hours later develops **dyspnea, crackles, falling oxygen saturation and bilateral pulmonary edema** on imaging (Slide 46).
- **Pathophysiology:** Mannitol stays extracellular and raises plasma osmolality; water is pulled from the intracellular to the interstitial to the **intravascular** compartment, rapidly expanding plasma volume. Increased **venous return raises preload and pulmonary capillary pressure**, and that hydrostatic pressure pushes fluid into the alveolar spaces.
- **Risk Factors:** Heart failure (especially left-sided), renal impairment, existing volume overload - these patients cannot handle sudden volume expansion.
- **Complications:** Also **hyponatremia** when severe renal impairment prevents excretion and mannitol dilutes the plasma; **dehydration with hypernatremia and hyperkalemia** when diuresis outruns intake; **acute kidney injury** in patients already at risk.
- **Lecturer's Point:** Common effects are headache, dizziness, nausea and vomiting. Monitor closely; the drug should be handled by clinicians experienced with it [Lecturer Emphasis].
  :::

- **Contraindications (Slide 43):** allergy to the drug or formulation, **severe dehydration**, **severe renal disease (anuria)**, renal dysfunction appearing after a dose, **active cranial bleeding** (except during craniotomy), **progressive heart failure**, and existing severe pulmonary edema or congestion. In anuria the drug simply accumulates - volume overload, pulmonary edema, hypertensive crisis and encephalopathy.

:::highyield
**SGLT2 inhibitors (Slide 38)** are mentioned only for awareness and are explicitly **not examinable in this lecture**: by blocking proximal glucose reabsorption they raise urinary glucose, and that extra solute makes them behave like a mild osmotic diuretic.
:::
`,
  "flashcards": [
    { "front": "Which transporter do thiazides block, where, and what fraction of filtered sodium is available there?", "back": "The Na+-Cl- cotransporter (NCC) on the luminal membrane of the distal convoluted tubule. Only about 5-10% of filtered sodium reaches the DCT, so efficacy is moderate, not maximal.", "tag": "Concept" },
    { "front": "Chlorthalidone vs hydrochlorothiazide: what actually differs, and does it change outcomes?", "back": "Chlorthalidone has a much longer half-life (40-60 h) and duration (24-72 h), giving smoother 24-hour BP control but a higher risk of hypokalemia. Trials show both reduce heart attack, stroke and heart failure at similar rates; HCTZ is more widely used because it is in many fixed-combination products.", "tag": "Concept" },
    { "front": "Why do thiazides conserve calcium?", "back": "NCC blockade lowers intracellular Na+, which enhances basolateral NCX1 activity (3 Na+ in, 1 Ca2+ out). Low intracellular Ca2+ creates a stronger gradient for Ca2+ entry through apical TRPV5, and calcium is exported to blood via NCX1. PMCA1b is only a fine-tuner.", "tag": "Concept" },
    { "front": "Why are thiazides the leading cause of diuretic-induced hyponatremia, when loops are stronger?", "back": "Thiazides impair urine dilution (NCC block leaves solute in the tubular fluid, so free water cannot be excreted) but leave concentrating ability intact, because the medullary gradient is untouched and the collecting duct still responds to ADH. Water is retained in excess of sodium. Loops impair both diluting and concentrating ability.", "tag": "Concept" },
    { "front": "Give the sustained mechanism by which thiazides lower blood pressure.", "back": "Chronic sodium depletion in vascular smooth muscle decreases its responsiveness to vasoconstrictors, producing a persistent reduction in peripheral vascular resistance. The acute effect (reduced ECF, plasma volume and cardiac output) is different and earlier.", "tag": "Concept" },
    { "front": "How can a thiazide reduce urine output in vasopressin resistance?", "back": "Mild volume contraction activates RAAS and lowers GFR, so sodium and water are reabsorbed in the proximal tubule and far less filtrate reaches the ADH-insensitive collecting duct. Overall urine output falls by up to 30-50%. Combine with low-sodium, low-protein diet plus an NSAID.", "tag": "Clinical" },
    { "front": "Why is an NSAID deliberately added in vasopressin resistance despite the usual warning?", "back": "Prostaglandins normally counteract ADH. Blocking them enhances ADH activity and water reabsorption, which is the desired direction here - reducing polyuria.", "tag": "Clinical" },
    { "front": "What is the mechanism of thiazide-induced hyperglycemia?", "back": "Hypokalemia disrupts the ATP-sensitive K+ channel in pancreatic beta cells, impairing insulin release - the primary mechanism. Thiazides also reduce tissue glucose utilization (impaired insulin sensitivity). Mild dyslipidemia follows the same insulin-resistance effect.", "tag": "Concept" },
    { "front": "How do thiazides cause hypomagnesemia?", "back": "Chronic use leads to DCT remodeling and downregulation of the apical TRPM6 magnesium channel, decreasing magnesium reabsorption and increasing urinary wasting. Monitor magnesium.", "tag": "Concept" },
    { "front": "Why does a thiazide raise lithium levels, and why does that matter so much?", "back": "Lithium uses sodium transporters. Thiazide-induced sodium loss triggers compensatory proximal reabsorption of both Na+ and Li+, raising plasma lithium. Lithium has a narrow therapeutic window, so even a modest rise can cause toxicity.", "tag": "Clinical" },
    { "front": "Explain how hypokalemia precipitates digoxin toxicity.", "back": "Digoxin competes with K+ for the extracellular binding site on the cardiomyocyte Na+/K+ ATPase. When serum K+ is low, less K+ competes, more digoxin binds, inhibition is stronger, cytosolic calcium rises further, automaticity increases and arrhythmia results.", "tag": "Clinical" },
    { "front": "What is the mechanism of the potassium-sparing effect shared by ENaC inhibitors and MRAs?", "back": "Both reduce Na+ reabsorption in principal cells, which abolishes the lumen-negative transepithelial potential. That removes the electrochemical gradient driving K+ secretion through ROMK, so K+ is retained - and hyperkalemia becomes the class risk.", "tag": "Concept" },
    { "front": "How do the mechanisms of ENaC inhibitors and MRAs differ?", "back": "ENaC inhibitors block the luminal epithelial sodium channel directly. MRAs cross the basolateral membrane, bind the cytosolic mineralocorticoid receptor, and the complex translocates to the nucleus to block transcription of ENaC, Na+/K+ ATPase and ROMK.", "tag": "Concept" },
    { "front": "Why is lithium trapped in the principal cell, and how does amiloride help?", "back": "Lithium enters through ENaC but is not efficiently pumped out. Accumulation interferes with AQP2 expression and trafficking, so the collecting duct becomes impermeable to water despite ADH - polyuria. Amiloride blocks ENaC and prevents lithium entry, treating the root cause.", "tag": "Clinical" },
    { "front": "What is Liddle syndrome and how is it treated?", "back": "A rare autosomal dominant gain-of-function mutation in genes regulating ENaC, producing excess channels, excess sodium reabsorption, a deeper lumen-negative potential and increased K+/H+ secretion. Renin and aldosterone are suppressed. Treatment: ENaC inhibitor plus sodium restriction for the hypertension and hypokalemia.", "tag": "Clinical" },
    { "front": "Which MRA causes gynecomastia, and why?", "back": "Spironolactone - it antagonizes the androgen receptor and interferes with testosterone biosynthesis, shifting the estradiol-testosterone balance toward estradiol (gynecomastia, impotence, loss of libido). Eplerenone and finerenone are MR-selective and do not.", "tag": "Clinical" },
    { "front": "Why is spironolactone first-line for ascites in hepatic cirrhosis?", "back": "Portal hypertension plus splanchnic vasodilation and hypoalbuminemia lower effective circulating volume, driving SNS, RAAS and vasopressin activation - a state of secondary hyperaldosteronism. Spironolactone blocks aldosterone directly. It can be combined with furosemide, but furosemide is not used alone.", "tag": "Clinical" },
    { "front": "State the four defining properties of an osmotic diuretic.", "back": "Pharmacologically inert (no receptor target), distributed only in extracellular fluid, freely filtered at the glomerulus, and not reabsorbed by the nephron. A functioning kidney is therefore required.", "tag": "Concept" },
    { "front": "Where in the nephron does mannitol act, and what are its key time numbers?", "back": "Greatest effect in the water-permeable segments: proximal tubule (major) and descending limb of the loop of Henle; it also impairs collecting tubule water reabsorption. Terminal half-life about 5 hours, diuresis onset 1-3 hours, ICP reduction in 15-30 minutes lasting 1.5-6 hours. Given as IV boluses, not continuous infusion.", "tag": "Concept" },
    { "front": "Why does mannitol cause pulmonary edema, and in whom?", "back": "Water is drawn from cells into the intravascular compartment, expanding plasma volume; increased venous return raises preload and pulmonary capillary pressure, forcing fluid into alveolar spaces. Highest risk in left-sided heart failure, renal impairment and existing volume overload.", "tag": "Clinical" }
  ],
  "questions": [
    {
      "question": "A patient with recurrent calcium oxalate stones and idiopathic hypercalciuria is started on a diuretic that lowers urinary calcium. Which mechanism explains the calcium-sparing effect?",
      "options": ["A. Blockade of NKCC2 abolishes the lumen-positive potential in the thick ascending limb", "B. Lower intracellular sodium enhances basolateral NCX1, drawing calcium in through apical TRPV5", "C. Direct stimulation of the parathyroid hormone receptor on the distal tubule cell", "D. Inhibition of PMCA1b traps calcium inside the distal convoluted tubule cell", "E. Increased luminal flow rate reduces the time available for calcium secretion"],
      "answer": "B",
      "rationale": "Blocking luminal NCC lowers intracellular sodium, which steepens the gradient the basolateral Na+/Ca2+ exchanger NCX1 runs on (3 Na+ in, 1 Ca2+ out). NCX1 works harder, intracellular calcium falls, and calcium enters from the lumen through the apical TRPV5 channel and is exported to blood. PMCA1b is only a fine-tuner. Option A is the loop diuretic mechanism, which wastes calcium instead.",
      "hidden": true
    },
    {
      "question": "A 68-year-old woman on a thiazide for hypertension is found to have a serum sodium of 126 mEq/L. Which pairing of renal capacities explains this?",
      "options": ["A. Both diluting and concentrating ability are impaired", "B. Concentrating ability is impaired while diluting ability is preserved", "C. Both diluting and concentrating ability are preserved but ADH secretion is suppressed", "D. Diluting ability is impaired while concentrating ability is preserved", "E. Sodium is lost faster than water because the medullary gradient is destroyed"],
      "answer": "D",
      "rationale": "NCC blockade leaves solute in the tubular fluid of the diluting segment, so solute-free water cannot be excreted. The medullary gradient is untouched, so the collecting duct still answers ADH, inserts AQP2 and reabsorbs free water. Water retention therefore exceeds sodium retention, producing dilutional hyponatremia, made worse by thirst and by a concomitant NSAID. Option A describes loop diuretics, which is why their hyponatremia risk is lower.",
      "hidden": true
    },
    {
      "question": "A patient with lithium-induced vasopressin resistance is started on a thiazide, and urine output falls substantially. Which sequence explains this?",
      "options": ["A. Mild volume contraction activates RAAS and lowers GFR, so proximal reabsorption reduces filtrate delivered distally", "B. The thiazide restores AQP2 insertion in the collecting duct so ADH becomes effective again", "C. The thiazide directly inhibits the collecting duct water channel and reduces obligatory solute loss", "D. Chloride retention in the distal tubule raises medullary tonicity and improves urine concentration", "E. Increased distal sodium delivery raises aldosterone, which reabsorbs the excess water directly"],
      "answer": "A",
      "rationale": "The drug never acts on the collecting duct. Thiazide-induced mild volume contraction activates RAAS and lowers GFR; the sodium still filtered is reclaimed proximally along with water, so far less filtrate reaches the ADH-insensitive collecting duct. Overall urine output falls by up to 30-50% and a new lower steady state persists while the drug is taken. It is combined with a low-sodium, low-protein diet and an NSAID.",
      "hidden": true
    },
    {
      "question": "A patient stabilized on lithium develops polyuria and must remain on the drug. An ENaC inhibitor is added. What is the mechanistic rationale?",
      "options": ["A. It increases renal lithium clearance by inhibiting proximal tubule sodium reabsorption", "B. It antagonizes the mineralocorticoid receptor and reduces aldosterone-driven water retention", "C. It raises medullary tonicity and restores the osmotic driving force for water reabsorption", "D. It accelerates the hepatic elimination of lithium, lowering plasma concentrations quickly", "E. It blocks lithium entry into principal cells, preventing accumulation and AQP2 downregulation"],
      "answer": "E",
      "rationale": "Lithium enters principal cells through ENaC and is not pumped back out. Intracellular accumulation interferes with AQP2 expression and trafficking, so the collecting duct becomes impermeable to water despite adequate ADH. Blocking ENaC prevents the entry and therefore addresses the root cause. A thiazide is often added on top for the volume-contraction effect that reduces distal delivery.",
      "hidden": true
    },
    {
      "question": "A man with cirrhosis and tense ascites is treated with a diuretic that raises serum potassium. Why is that agent first-line here?",
      "options": ["A. It is the only diuretic that reaches its target without organic anion transporter secretion", "B. It produces the greatest natriuresis of any class because it acts in the collecting duct", "C. It counteracts the secondary hyperaldosteronism produced by low effective circulating volume", "D. It lowers portal pressure directly by dilating the splanchnic arterial circulation", "E. It corrects hypoalbuminemia by increasing hepatic protein synthesis over several weeks"],
      "answer": "C",
      "rationale": "Portal hypertension, splanchnic vasodilation and hypoalbuminemia together reduce effective circulating volume, which activates the SNS, RAAS and vasopressin. The patient is in secondary hyperaldosteronism, so an MR antagonist attacks the driver directly, and its potency scales with how much aldosterone is present. Spironolactone may be combined with furosemide, but furosemide is not used alone in this setting.",
      "hidden": true
    }
  ],
  "anking": [
    { "match": "Thiazide diuretics", "resources": "NCC in DCT, 5-10% filtered sodium, hydrochlorothiazide and chlorthalidone, first-line hypertension, calcium retention via NCX1 and TRPV5" },
    { "match": "Thiazide adverse effects and metabolic profile", "resources": "Hyponatremia, hypokalemic metabolic alkalosis, hypomagnesemia via TRPM6, hyperuricemia, hyperglycemia, hyperlipidemia, hypercalcemia" },
    { "match": "Nephrogenic diabetes insipidus / vasopressin resistance", "resources": "Lithium-induced AVP-R, thiazide paradox, low-sodium low-protein diet, NSAID, amiloride and AQP2 downregulation" },
    { "match": "Potassium-sparing diuretics", "resources": "Amiloride, triamterene, ENaC, lumen-negative potential, ROMK, hyperkalemia risk with ACE inhibitors, ARBs, NSAIDs, calcineurin inhibitors" },
    { "match": "Mineralocorticoid receptor antagonists", "resources": "Spironolactone, eplerenone, finerenone, aldosterone antagonism, HFrEF and HFpEF, cirrhotic ascites, gynecomastia, 11-beta-HSD type 2" },
    { "match": "Liddle syndrome", "resources": "Autosomal dominant ENaC gain of function, hypertension with hypokalemia, suppressed renin and aldosterone, amiloride plus sodium restriction" },
    { "match": "Osmotic diuretics - mannitol", "resources": "Inert solute, ECF distribution, proximal tubule and descending limb, intracranial and intraocular pressure, pulmonary edema, contraindicated in anuria" },
    { "match": "Diuretic drug interactions", "resources": "Thiazide plus lithium, digoxin toxicity with hypokalemia, probenecid and OAT, NSAID triple hit with AKI and hyperkalemia" }
  ],
  "ankingResource": {
    "primarySource": "BandB",
    "chapter": "Renal > Renal Pharmacology > Diuretics (Thiazides, Potassium-Sparing, Osmotic)",
    "alternatives": [
      { "resource": "SketchyPharm", "chapter": "Renal > Diuretics > Thiazides; Potassium-Sparing Diuretics; Mannitol" },
      { "resource": "FirstAid", "chapter": "Renal > Pharmacology > Diuretics: Electrolyte Changes and Toxicities" },
      { "resource": "Physeo", "chapter": "Renal > Pharmacology > Thiazide and Potassium-Sparing Diuretics" },
      { "resource": "Pixorize", "chapter": "Renal Pharmacology > Diuretics and Electrolytes" },
      { "resource": "Bootcamp", "chapter": "Pharmacology > Renal > Diuretics" }
    ]
  },
  "pearls": [
    { "title": "Position decides power", "content": "Thiazides work where only 5-10% of filtered sodium remains, and potassium-sparing agents where only 2-5% remains. That is the whole reason thiazides are moderate diuretics and ENaC inhibitors and MRAs are weak ones - and why the weak ones are used as adjuncts, not as monotherapy for edema." },
    { "title": "Dilute vs concentrate", "content": "Thiazides impair urine dilution but not concentration, so free water is retained in excess of sodium - the highest hyponatremia risk of any diuretic. Loop diuretics wreck both capacities, which is precisely why their hyponatremia risk is lower." },
    { "title": "The only calcium-sparing diuretic", "content": "Thiazides lower urinary calcium (NCC block, lower intracellular Na+, harder-working NCX1, TRPV5 entry) and are used to cut stone recurrence in hypercalciuric patients. Frank hypercalcemia is uncommon because PTH holds serum calcium tightly. Loop diuretics do the opposite." },
    { "title": "A diuretic that reduces urine output", "content": "In vasopressin resistance the thiazide works by volume contraction, not at the collecting duct: RAAS activation and a lower GFR mean more proximal reabsorption and up to 30-50% less urine. Chlorthalidone works best; add a low-solute diet and an NSAID." },
    { "title": "Sustained BP lowering is vascular, not volumetric", "content": "The acute fall in BP is from reduced ECF, plasma volume and cardiac output. The sustained fall is from chronic sodium depletion in vascular smooth muscle, which blunts responsiveness to vasoconstrictors and drops peripheral vascular resistance." },
    { "title": "Hypokalemia is the hinge of the interactions", "content": "Thiazide-induced hypokalemia impairs the beta-cell ATP-sensitive K+ channel (hyperglycemia) and frees the cardiomyocyte Na+/K+ ATPase binding site for digoxin (arrhythmia). Fixing the potassium fixes both risks." },
    { "title": "MRA potency tracks aldosterone", "content": "The higher the aldosterone level, the greater the effect of spironolactone or eplerenone on urinary electrolytes. That is why they shine in primary aldosteronism and cirrhotic ascites, and do little when aldosterone is already suppressed." },
    { "title": "Selectivity decides the side effects", "content": "Spironolactone antagonizes the androgen receptor and blocks testosterone synthesis - gynecomastia, impotence, loss of libido - and it fouls serum digoxin assays. Eplerenone and finerenone are MR-selective and spare all of that, but eplerenone brings CYP3A4 interactions including grapefruit juice." },
    { "title": "Mannitol's danger is in the middle", "content": "Every molecule of water mannitol moves passes through the plasma before it reaches the urine. Plasma volume expands first, so preload and pulmonary capillary pressure rise before the kidney can clear it - florid pulmonary edema in left-sided heart failure, renal impairment or anuria." }
  ],
  "mindmap": `
## Diuretic Pharmacology Part 2

### Thiazide Diuretics (NCC, DCT)

- **Target**: Na+-Cl- cotransporter, distal convoluted tubule, 5-10% of filtered Na+
- **Thiazide-type**: benzothiadiazine + sulfonamide; hydrochlorothiazide; chlorothiazide = only IV
- **Thiazide-like**: no benzothiadiazine ring; chlorthalidone prototype
- **PK**: well absorbed, moderate protein binding, not metabolized, excreted intact, OAT secretion
- **HCTZ vs chlorthalidone**: 6-12 h vs 24-72 h; equal cardiovascular outcomes; chlorthalidone = more hypokalemia
- **Calcium**: low intracellular Na+ to NCX1 (3 Na+ in / 1 Ca2+ out) to TRPV5 entry; PMCA1b fine-tunes

### Thiazide Clinical Uses

- **Hypertension**: first-line; acute = lower ECF and cardiac output; sustained = vascular smooth muscle Na+ depletion, less vasoconstrictor response
- **Edema**: sequential nephron blockade with a loop diuretic (NKCC2 + NCC synergy)
- **Vasopressin resistance**: volume contraction, RAAS, low GFR, proximal reabsorption, urine output down 30-50%; + low Na+/low protein diet + NSAID
- **Nephrolithiasis**: idiopathic hypercalciuria, reduces recurrence; plus fluids, diet, weight loss

### Thiazide Adverse Effects

- **Hyponatremia**: dilution impaired, concentration intact, thirst, NSAID enhances ADH
- **Hypokalemic metabolic alkalosis**: distal Na+ load + aldosterone, ENaC, ROMK, H+ secretion, hypochloremia
- **Hypomagnesemia**: DCT remodeling, TRPM6 downregulation
- **Hypercalcemia**: uncommon, PTH-buffered
- **Hyperuricemia**: hypovolemia and URAT1; gout flare
- **Hyperglycemia**: hypokalemia blocks beta-cell K-ATP channel; reduced glucose utilization
- **Other**: mild dyslipidemia, GI intolerance (rare), pregnancy - placental perfusion

### Thiazide Interactions

- **Loops / antihypertensives**: synergy
- **NSAIDs**: afferent constriction, less delivery, upstream Na+/water retention, enhanced ADH
- **Lithium**: proximal Na+/Li+ reabsorption, narrow window, toxicity
- **Digoxin**: hypokalemia, more digoxin binding, Ca2+ overload, arrhythmia
- **Probenecid**: OAT block, less drug in nephron
- **Amphotericin B, glucocorticoids, antidiabetics**: K+ loss, hyperglycemia

### ENaC Inhibitors (Amiloride, Triamterene)

- **Entry**: organic cation transporter (OCT), not OAT
- **Mechanism**: block luminal ENaC, neutralize lumen-negative potential, less ROMK K+ secretion
- **Uses**: adjunct to thiazide for hypertension/edema; counteract hypokalemia
- **Lithium AVP-R**: prevents Li+ entry, preserves AQP2; add thiazide
- **Liddle syndrome**: autosomal dominant ENaC gain of function, hypertension + hypokalemia, suppressed renin/aldosterone; ENaC inhibitor + sodium restriction
- **Hyperkalemia risk**: age, high dose, renal impairment, hypoaldosteronism; RAS inhibitors, NSAIDs, K+ supplements, calcineurin inhibitors

### Mineralocorticoid Receptor Antagonists

- **Drugs**: spironolactone (prototype), eplerenone (selective), finerenone (nonsteroidal, CKD)
- **Mechanism**: basolateral entry, cytosolic MR, nuclear transcription blockade of ENaC / Na+-K+ ATPase / ROMK
- **Dependency**: effect proportional to aldosterone level
- **Cortisol**: activates MR but inactivated by 11-beta-HSD type 2 to cortisone
- **PK**: spironolactone short t1/2 but active metabolites (canrenone, enterohepatic); eplerenone CYP3A4, inactive metabolites, 7-9 h duration
- **Uses**: edema, hypertension, primary aldosteronism, HFrEF and HFpEF, cirrhotic ascites, acne/hirsutism/transgender women
- **Adverse**: hyperkalemia; spironolactone - gynecomastia, impotence, loss of libido, false digoxin assays; eplerenone - CYP3A4 and grapefruit

### Osmotic Diuretics (Mannitol)

- **Properties**: inert, ECF distribution, freely filtered, not reabsorbed
- **Route**: IV bolus only, not absorbed from gut, not continuous infusion
- **Kinetics**: t1/2 ~5 h; diuresis onset 1-3 h; ICP drop 15-30 min, lasts 1.5-6 h
- **Site**: proximal tubule (major) and descending limb; impairs collecting tubule water reabsorption
- **Uses**: intracranial pressure with edema, intraocular pressure, cisplatin forced diuresis (evidence weak)
- **Adverse**: pulmonary edema via preload, hyponatremia in renal impairment, dehydration with hypernatremia/hyperkalemia, AKI, headache/nausea
- **Contraindications**: anuria/severe renal disease, severe dehydration, active cranial bleed (except craniotomy), progressive heart failure, pulmonary edema
- **FYI**: SGLT2 inhibitors act as mild osmotic diuretics - awareness only
`
});
