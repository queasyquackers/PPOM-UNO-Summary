window.receiveLectureContent({
  "id": "cv50",
  "title": "Lecture #50: Transport of Gases in Blood and Tissue Fluids",
  "lecturer": "Joerg R. Leheste, Ph.D., M.Sc.",
  "pdf": "content/CV50_HighYield_Render.pdf",
  "content": `
# Lecture #50: Transport of Gases in Blood and Tissue Fluids

**Lecturer:** Joerg R. Leheste, Ph.D., M.Sc.
**Session:** Lecture #50

## Why Hemoglobin Has To Exist (Slides 2-3)

This is the fourth respiratory physiology lecture, and it answers the question the first three set up: once oxygen has crossed the alveolus, how does it actually reach a mitochondrion? Gases are only sparingly soluble in water, so plasma by itself is a hopeless carrier — the lecturer opens by doing the arithmetic that proves it. Oxygen therefore travels almost entirely bound to hemoglobin, while carbon dioxide, which is far more water-soluble, travels mostly as bicarbonate dissolved in plasma. Every other topic in the lecture is a consequence of those two carriage strategies.

- **Oxygen carriage:** about **98.5% bound to hemoglobin**, about **1.5% freely dissolved** in plasma (Costanzo's values; other texts round to 98% / 2%).
- **Henry's Law arithmetic [Lecturer Emphasis]:** at **PO2 100 mmHg** — the partial pressure of freshly oxygenated blood leaving the lungs, and the most there ever is — dissolved O2 = 100 x 0.003 = **0.3 mL O2 per 100 mL blood**. Scaled to a **6 L (6,000 mL)** blood volume, dissolved oxygen alone supplies only **15 mL O2/min**.
  - Resting demand is **250 mL O2/min**: a **13-fold** shortfall. Dissolved oxygen by itself is **not consistent with life** — that is the entire reason for red blood cells.
- **Carbon dioxide carriage:** mostly as **bicarbonate**, a portion **bound to hemoglobin at a site different from the oxygen site**, and a small portion **freely dissolved**. Dissolved CO2 carries roughly **6.7x** what dissolved O2 does, because **CO2 is much more soluble in water**.

:::highyield
Only freely dissolved gas contributes to a partial pressure. Oxygen bound to hemoglobin is invisible to PO2. For CO2 the rule is subtler: CO2 bound directly to hemoglobin is excluded, but both freely dissolved CO2 and the CO2 carried in the bicarbonate buffer system DO count toward PCO2, because both are in solution in plasma. The only component of that buffer system actually attached to the red cell is the enzyme carbonic anhydrase (Slide 3).
:::

## Four Hemoglobins (Slides 4-7)

Adult hemoglobin is a tetramer built for one job, and the three variants the lecturer contrasts each break that job in a different way — one changes affinity, one destroys the iron, one deforms the cell.

- **HbA (adult, Slide 4):** four protein chains — **2 alpha + 2 beta** — each carrying a **heme group** with an **iron atom**. The heme is what binds oxygen.
  - Loaded = **oxyhemoglobin**; unloaded = **deoxyhemoglobin**. The two forms have **different spectral patterns** under certain wavelengths of light — hold onto this, it is the entire basis of pulse oximetry later in the lecture [Lecturer Emphasis].
- **HbF (fetal, Slide 5):** **2 alpha + 2 gamma**. **Higher O2 affinity**, and it **does not interact with 2,3-BPG**.
  - Why it must: the fetus does not breathe. It has to strip oxygen off the maternal circulation, which requires higher affinity than the mother's own hemoglobin.

| Hemoglobin | Structural change | Consequence for O2 |
| --- | --- | --- |
| HbA | 2 alpha, 2 beta; heme Fe2+ | Normal loading and unloading |
| HbF | 2 alpha, 2 gamma | Higher affinity; no 2,3-BPG effect |
| Methemoglobin | Heme iron oxidized Fe2+ to Fe3+ | Cannot bind O2 at all; reversible |
| HbS | Beta chain glutamic acid to valine | Lower affinity; cell sickles |

:::correlate
Methemoglobinemia (Slide 6)

- **Pathophysiology:** The central iron atom of heme is oxidized from the normal **Fe2+** to **Fe3+**. Ferric heme is **unable to bind oxygen**.
- **Risk Factors:** **Congenital** forms, plus **acquired** causes — **oxidative stress** and certain **medications, notably some anti-malarial drugs**.
- **Presentation:** **Fatigue** and a **bluish tint to the skin**.
- **Lecturer's Point:** The slide draws the reaction with two arrows on purpose — this condition is **reversible**.
:::

:::correlate
Sickle Cell Hemoglobin, HbS (Slide 7)

- **Pathophysiology:** A point mutation in the **hemoglobin beta chain** substitutes **valine for glutamic acid**, slightly changing the conformation of the molecule.
- **Presentation:** A red cell packed with HbS has a **lower oxygen-carrying capacity** and **destabilizes in shape, especially under oxygen-poor conditions**, which wears the hemoglobin out much faster and causes a whole host of downstream problems.
- **Risk Factors:** The mutation is **prevalent in parts of the world where malaria is prevalent**. Because the malarial pathogen hides inside red cells, being **heterozygous is a genetic advantage**.
- **Lecturer's Point:** The price of that advantage, as far as this lecture is concerned, is **lower oxygen affinity** — malaria protection bought with a worse oxygen transporter.
:::

## Binding Capacity vs. Content vs. Delivery (Slides 8-9)

Three quantities that sound alike and are constantly confused. Capacity is a ceiling, content is reality, delivery is reality multiplied by the pump.

- **O2-binding capacity** = the **maximum** O2 that hemoglobin can hold per volume of blood.
  - **1 g of HbA binds 1.34 mL O2**; normal blood carries **15 g Hb per 100 mL**, so **15 x 1.34 = 20.1 mL O2 per 100 mL blood**. This counts **only** hemoglobin-bound oxygen.
- **O2 content** = the **actual** amount of oxygen per volume of blood, so the dissolved fraction is added back:
  - **O2 content = (O2-binding capacity x % saturation) + dissolved O2.** At 95% saturation that is 20.1 x 0.95, then add dissolved.
- **O2 delivery = cardiac output x O2 content** = cardiac output x (dissolved O2 + O2-hemoglobin), where content runs roughly **2% dissolved and 98% hemoglobin-bound** (Slide 9).
  - Delivery therefore fails if **any one** term drops: the pump, the amount of hemoglobin, or the saturation.

## The Sigmoid Curve and Positive Cooperativity (Slides 10-11)

Plot hemoglobin saturation against PO2 and the line is **sigmoidal, not linear**. That shape is the physiologic point of the whole molecule: hemoglobin's affinity for oxygen depends on how much oxygen it is already carrying — **positive cooperativity**. Largely saturated hemoglobin holds on very tightly; largely unsaturated hemoglobin gives its oxygen up comparatively easily.

- **The plateau protects loading:** letting PO2 fall from 100 to **50 mmHg** — giving up half the driving pressure — still leaves about **85% saturation**. Most hemoglobin molecules in that zone still carry **three or four** oxygens.
- **P50 = the PO2 at which hemoglobin is 50% saturated**, i.e. it has released two of its four oxygens. On the **unshifted** curve that requires a PO2 of only **25 mmHg**.
- **That is deliberately lower than real life:** the lowest PO2 normally seen in the body is about **40 mmHg**, and blood leaving the lungs sits at **100 mmHg**, out on the flat top where there is no reason to unload.
- **Pulse oximetry (Slide 11):** **dual-wavelength spectrophotometry** exploits the different light absorbance of **oxyhemoglobin vs. deoxyhemoglobin**. From the ratio of the two the device computes **% saturation**, which is used to **estimate the arterial PO2** in the finger.

## Shifting the Curve: The Bohr Effect (Slide 12)

The curve is not fixed in place. A tissue that needs oxygen advertises that need chemically, and hemoglobin reads the advertisement — which is what makes the system efficient rather than merely adequate.

- **Right shift = easier unloading.** After a right shift, **P50 occurs at about 40 mmHg** instead of 25, so muscle can extract its oxygen at a pressure it actually reaches. Without the shift, that same tissue would have to fall to **25 mmHg or below** to pull off the same amount.
- **Left shift = harder unloading.** P50 drops to about **12.5 mmHg**; the identical release only happens at a far lower PO2.
- **Right-shift triggers, all of them markers of a working tissue:** high **PCO2** and low **pH** (together, the **Bohr effect**), **increased temperature** (active muscle heats up), and **2,3-DPG**, a glycolytic intermediate that flags a tissue running glycolysis hard.
- **Left shift is the mirror image:** lung tissue where blood has just been re-oxygenated, and tissue that is metabolically quiet.
- **Caution [Lecturer Emphasis]:** all of this describes **adult** hemoglobin. **Fetal hemoglobin does not use 2,3-DPG** — which is exactly why it sits left-shifted relative to maternal blood.

:::mnemonic
**Causes of a Right Shift**
**CADET, face Right!**

- **C:** CO2 — increased PCO2
- **A:** Acid — decreased pH
- **D:** 2,3-DPG — increased
- **E:** Exercise — active tissue
- **T:** Temperature — increased
:::

:::diagram cv50-bohr-shift:::

## Carbon Monoxide (Slide 13)

CO is the one competitor that occupies the same site oxygen does, and it wins that competition badly: **210-250x higher affinity for heme than oxygen** (the lecturer's phrasing is "more than 200 times tighter, and really, really difficult to get off"). The product is **carboxyhemoglobin**.

:::correlate
Carbon Monoxide Poisoning

- **Pathophysiology:** CO **competitively binds the same heme site as oxygen** with **210-250x** the affinity, forming **carboxyhemoglobin** and taking those binding sites out of service.
- **Presentation:** The lecture's example patient was **lucky** — the exposure lasted only long enough to saturate about **50%** of hemoglobin with CO. Anything more would produce a state **not consistent with survival**.
- **Treatment:** **Regular air, about 5 hours**; **air saturated with O2, about 1.5 hours** (raising the concentration gradient to drive CO off the binding sites); **hyperbaric chamber at 3 atmospheres, about 20 minutes** in extreme cases.
- **Lecturer's Point:** A direct plea to the class — **install a carbon monoxide alarm where you live, especially where you sleep**. It is a poisonous gas, and it kills people every year.
:::

## Erythropoietin: The Long-Term Answer (Slide 14)

Curve shifts work in seconds. When the shortage lasts — altitude, chronic hypoxia — the body stops adjusting the carriers it has and builds more of them.

- **EPO is a glycoprotein hormone**, produced **mainly in the kidneys** and to a **much lesser degree in the liver**.
- **Trigger: hypoxia.** The lecturer's example is **high altitude**, where the oxygen concentration of air is much lower.
- **Action:** EPO travels to the **bone marrow**, binds **proerythroblasts**, **increases their number**, and **facilitates their differentiation into mature erythrocytes** — more red cells, more carrying capacity.
- **Why the kidney [Lecturer Emphasis]:** it has the sensing capability to **distinguish a true oxygen shortage from merely reduced blood flow** (and from decreased arterial O2 content), so it does not launch erythropoiesis to solve a hemodynamic problem.

## Carbon Dioxide: Three Ways To Travel (Slide 15)

CO2 leaves metabolism as a gas and has to be carried back to the lung without acidifying the blood on the way. Three routes share the load, and the biggest one is chemical rather than protein-bound.

- **More than 80% as bicarbonate (HCO3-)** — the bicarbonate buffer system.
- **5-10% as carbaminohemoglobin**, bound to hemoglobin at a site **distinct from the oxygen site**. The two are **not competitive** — but, as the Haldane effect shows, they sense each other.
- **5-10% freely dissolved in plasma; this lecture uses about 5%** — **2.8 mL CO2 per 100 mL blood**, from **PCO2 40 mmHg x 0.07 mL/100 mL per mmHg**.
- **Slide caution [Lecturer Emphasis]:** the percentages differ between textbooks, so **stick with the values on this slide**. (Slide 3 quoted a looser set earlier in the lecture; Slide 15 is the one to memorize.)

## The Haldane Effect (Slide 16)

Slide 16 plots CO2 content against PCO2 for oxygenated versus deoxygenated hemoglobin, and the two curves separate. That is surprising until you remember the sites are conformationally coupled: **when either oxygen or CO2 predominates on hemoglobin, the conformation of the entire molecule changes.**

- **Haldane effect: deoxyhemoglobin binds CO2 (and H+) more readily than oxyhemoglobin does.**
- **In active tissue:** hemoglobin has just delivered its oxygen, so it is **deoxygenated** — primed to pick up the CO2 that metabolism just produced.
- **In the lung:** hemoglobin has just picked up oxygen, so it is **oxyhemoglobin** — it does not want more CO2; it wants to shed CO2 so it can be blown off.
- **The symmetry worth memorizing:** **Bohr** = CO2 and H+ change how hemoglobin handles **oxygen**; **Haldane** = oxygen changes how hemoglobin handles **CO2**.

## Bicarbonate, the Chloride Shift, and H+ Buffering (Slide 17)

Follow one CO2 molecule out of an exercising muscle and every component of the system appears in order.

- **1.** CO2 diffuses out of the muscle into the bloodstream and then **into the red blood cell**. It does **not bind** the cell, which is why it **still counts toward PCO2**.
- **2.** Inside the red cell, **carbonic anhydrase** — the red-cell-associated enzyme — combines **CO2 + H2O into carbonic acid (H2CO3)**, then drives the same reaction onward from **H2CO3 to HCO3- + H+**.
- **3.** **HCO3- is released into the plasma.** To preserve electrical neutrality a negatively charged **Cl-** is taken up into the red cell — the **chloride shift**, an **anion exchange** carried out by the **band 3 protein**.
- **4.** The leftover **H+** is buffered by **deoxyhemoglobin**, whose conformation **binds H+ much more tightly than oxyhemoglobin does**. In a metabolically active tissue hemoglobin has conveniently just become deoxyhemoglobin — the lecturer calls it "a magnet thing" [Lecturer Emphasis].
- **5.** **Every arrow is double-headed.** In lung tissue the whole sequence **runs backwards**, regenerating CO2 and H2O so the CO2 can be exhaled.

:::diagram cv50-co2-carriage:::

:::highyield
Three things happen in the same place at the same time in an exercising muscle, and each reinforces the others: the curve right-shifts (Bohr) so oxygen comes off; the resulting deoxyhemoglobin becomes a better CO2 carrier (Haldane); and that same deoxyhemoglobin is the better H+ buffer, mopping up the acid the bicarbonate reaction just generated. In the lung, all three reverse.
:::

## The Lecturer's Board Question (Slide 18)

A 19-year-old college track athlete is midway through a high-intensity 400-meter sprint. His actively contracting skeletal muscle is producing large quantities of **CO2** and **lactic acid** (lowering pH) while generating **local heat**. Which shift occurs, and what is its functional benefit?

- **Answer: B — a rightward shift, which decreases hemoglobin's affinity for oxygen, facilitating its unloading to the oxygen-starved muscle.**
- **The reasoning chain:** the muscle is in a state of high oxygen demand, so it should become **easier** to unload; easier unloading means a **rightward** shift. That kills A and C (both leftward) immediately, leaving B and D.
- **D fails on its second half:** a rightward shift does not bind oxygen more tightly, it releases oxygen more easily. **E fails** because baroreceptor control of cardiac output is unrelated to the biochemistry of hemoglobin.
- **The vignette hands you three of the CADET factors** — high CO2, low pH from lactic acid, and heat — with **2,3-DPG** as the fourth.
- **Conformation note [Lecturer Emphasis]:** the rightward shift goes with the **taut (T) state** of hemoglobin. Tightening up means less room for things to stay bound, so oxygen is released more readily; in the **relaxed (R) state** hemoglobin holds oxygen more tightly. The formal structural treatment comes in a later course.

**Study advice [Lecturer Emphasis]:** this lecture tracks **Costanzo's Physiology** very closely. The chapter summary is excellent, and the self-quizzing questions at the end of the chapter, although not board-style, hit every concept you need.
`,
  "flashcards": [
    { "front": "How is oxygen carried in blood, and in what proportions?", "back": "About 98.5% bound to hemoglobin and about 1.5% freely dissolved in plasma (Costanzo values; other texts use 98% / 2%). Only the dissolved fraction contributes to PO2.", "tag": "Concept" },
    { "front": "Use Henry's Law to show why dissolved oxygen alone cannot support life.", "back": "At PO2 100 mmHg, dissolved O2 = 100 x 0.003 = 0.3 mL O2/100 mL blood. Across a 6 L blood volume that supplies only 15 mL O2/min, against a resting demand of 250 mL O2/min — a 13-fold shortfall.", "tag": "Concept" },
    { "front": "Which forms of CO2 count toward the partial pressure of CO2?", "back": "Freely dissolved CO2 AND the CO2 carried in the bicarbonate buffer system (both are in solution in plasma). CO2 bound directly to hemoglobin does not count. The only buffer-system component attached to the red cell is carbonic anhydrase.", "tag": "Concept" },
    { "front": "Contrast the chain composition of adult and fetal hemoglobin.", "back": "HbA = 2 alpha + 2 beta. HbF = 2 alpha + 2 gamma. HbF has a higher O2 affinity and does not interact with 2,3-BPG, which it needs because the fetus must strip oxygen off the maternal circulation.", "tag": "Concept" },
    { "front": "What is the defect in methemoglobin, and is it reversible?", "back": "The central heme iron is oxidized from Fe2+ to Fe3+, so it cannot bind oxygen. Causes are congenital or acquired (oxidative stress, certain medications such as some anti-malarial drugs). Patients appear fatigued with a bluish skin tint. It IS reversible.", "tag": "Clinical" },
    { "front": "What is the mutation in sickle cell hemoglobin, and why is it prevalent?", "back": "A point mutation in the beta chain swaps valine for glutamic acid. HbS-packed red cells have lower O2-carrying capacity and destabilize in shape under oxygen-poor conditions. It is prevalent where malaria is prevalent — the pathogen hides in red cells, so heterozygosity is a genetic advantage.", "tag": "Clinical" },
    { "front": "Calculate the oxygen-binding capacity of normal blood.", "back": "1 g of HbA binds 1.34 mL O2; normal blood holds 15 g Hb/100 mL. 15 x 1.34 = 20.1 mL O2 per 100 mL blood maximally bound to hemoglobin.", "tag": "Concept" },
    { "front": "How do O2 content and O2 delivery differ from O2-binding capacity?", "back": "O2 content = (O2-binding capacity x % saturation) + dissolved O2 — the actual amount present. O2 delivery = cardiac output x O2 content. Binding capacity is only the ceiling for hemoglobin-bound oxygen.", "tag": "Concept" },
    { "front": "What is P50 on the unshifted curve, and how low does PO2 normally go?", "back": "P50 is the PO2 at 50% saturation — hemoglobin has released two of its four oxygens. Unshifted, that requires PO2 of only 25 mmHg. The lowest PO2 normally reached in the body is about 40 mmHg, so the unshifted curve is deliberately hard to unload from.", "tag": "Concept" },
    { "front": "Why is the dissociation curve sigmoidal, and what does the plateau buy you?", "back": "Positive cooperativity: saturated hemoglobin holds oxygen tightly, unsaturated hemoglobin releases it easily. On the plateau, dropping PO2 from 100 to 50 mmHg still leaves ~85% saturation — most molecules still carry three or four oxygens.", "tag": "Concept" },
    { "front": "How does pulse oximetry work?", "back": "Dual-wavelength spectrophotometry. Oxyhemoglobin and deoxyhemoglobin absorb light differently, so the ratio of the two gives % saturation, which is used to estimate the arterial PO2 in the finger.", "tag": "Concept" },
    { "front": "List the causes of a rightward shift and the P50 values in this lecture.", "back": "Increased PCO2, decreased pH (together the Bohr effect), increased temperature, and increased 2,3-DPG — CADET, face Right. P50: 25 mmHg unshifted, about 40 mmHg right-shifted, about 12.5 mmHg left-shifted.", "tag": "Concept" },
    { "front": "How does carbon monoxide impair oxygen transport, and how is it treated?", "back": "CO competitively binds the same heme site as O2 with 210-250x the affinity, forming carboxyhemoglobin. Therapy: regular air ~5 h; air saturated with O2 ~1.5 h; hyperbaric chamber at 3 ATM ~20 min. About 50% saturation was survivable in the lecture's example; much more is not.", "tag": "Clinical" },
    { "front": "Where is EPO made, what triggers it, and what does it do?", "back": "A glycoprotein made mainly in the kidneys (lesser degree the liver), triggered by hypoxia such as high altitude. It travels to bone marrow, binds proerythroblasts, increases their number, and drives differentiation into mature erythrocytes. The kidney is the sensor because it can distinguish true oxygen shortage from reduced blood flow.", "tag": "Concept" },
    { "front": "Describe the chloride shift.", "back": "Carbonic anhydrase in the red cell converts CO2 + H2O to H2CO3 and then to HCO3- + H+. HCO3- exits into plasma and Cl- enters to preserve electroneutrality — an anion exchange run by the band 3 protein. The H+ is buffered by deoxyhemoglobin. All of it reverses in the lung.", "tag": "Concept" },
    { "front": "State the Haldane effect and contrast it with the Bohr effect.", "back": "Haldane: deoxyhemoglobin binds CO2 (and H+) more readily than oxyhemoglobin, because binding either gas changes the conformation of the whole molecule. Bohr: CO2 and H+ change how hemoglobin handles oxygen. Haldane favors CO2 pickup in tissue and CO2 release in the lung.", "tag": "Concept" }
  ],
  "questions": [
    {
      "question": "A physiologist calculates that at a PO2 of 100 mmHg, plasma carries 0.3 mL of dissolved oxygen per 100 mL of blood. Extrapolated across a 6-liter blood volume, this supplies roughly 15 mL O2/min. Resting whole-body oxygen consumption is 250 mL O2/min. What does this calculation demonstrate?",
      "options": ["A. Henry's Law does not apply to oxygen at physiologic temperatures", "B. Cardiac output must increase 13-fold at rest to compensate", "C. Dissolved oxygen supplies roughly 13 times less than the body requires, so hemoglobin is obligatory", "D. Oxygen consumption at rest has been historically overestimated", "E. Tissue extraction of dissolved oxygen approaches 100% at rest"],
      "answer": "C",
      "rationale": "Dissolved oxygen obeys Henry's Law and is limited by the low solubility of O2 in water: 15 mL/min supplied against 250 mL/min needed is a roughly 13-fold shortfall. That gap is why oxygen transport is delegated almost entirely to hemoglobin (about 98.5% of blood oxygen), and why a system relying on dissolved oxygen alone would not be consistent with life.",
      "hidden": true
    },
    {
      "question": "An arterial blood gas reports a PO2 of 95 mmHg in a patient whose hemoglobin is heavily saturated with oxygen. Which statement about what that PO2 actually measures is correct?",
      "options": ["A. It reflects only the oxygen freely dissolved in plasma, not the oxygen bound to hemoglobin", "B. It reflects the sum of dissolved oxygen and oxygen bound to hemoglobin in the sample", "C. It reflects the maximum oxygen the hemoglobin present could bind at full saturation", "D. It reflects the oxygen bound to hemoglobin divided by the total oxygen content of the blood", "E. It reflects the total oxygen content multiplied by the measured cardiac output"],
      "answer": "A",
      "rationale": "Partial pressure is generated only by gas molecules in free solution. Oxygen bound to hemoglobin exerts no partial pressure and is invisible to a PO2 measurement. For CO2 the analogous rule has an important extension: CO2 bound directly to hemoglobin is excluded, but dissolved CO2 and the CO2 in the bicarbonate buffer system both count, because both are in solution in plasma.",
      "hidden": true
    },
    {
      "question": "A newborn's hemoglobin is composed predominantly of two alpha and two gamma chains. Compared with maternal hemoglobin, which combination of properties does this molecule display, and why is it necessary?",
      "options": ["A. Lower O2 affinity with strong 2,3-BPG binding, allowing rapid release to fetal tissue", "B. Identical O2 affinity, with differences confined to the heme iron oxidation state", "C. Lower O2 affinity because gamma chains reduce the number of functional heme groups available", "D. Higher O2 affinity, with no interaction with 2,3-BPG, allowing extraction of oxygen from maternal blood", "E. Higher O2 affinity produced entirely by an increased red cell 2,3-BPG concentration in the fetus"],
      "answer": "D",
      "rationale": "Fetal hemoglobin substitutes two gamma chains for the two beta chains of HbA. It has a higher oxygen affinity and does not interact with 2,3-BPG, so the usual right-shifting signal has no effect on it. The fetus does not breathe, so its hemoglobin must be able to pull oxygen off the maternal supply — which requires a higher affinity than the mother's hemoglobin has.",
      "hidden": true
    },
    {
      "question": "Blood from a patient contains 15 g of hemoglobin A per 100 mL and is 95% saturated. Which expression gives the actual oxygen content of that blood?",
      "options": ["A. 15 x 1.34, with no further adjustment required for saturation or dissolved gas", "B. (15 x 1.34 x 0.95) + dissolved O2", "C. (15 x 1.34) + 0.95, expressed per 100 mL of whole blood at 100 mmHg", "D. (15 x 1.34 x 0.95) x cardiac output measured in liters per minute", "E. (15 x 1.34) / 0.95, corrected afterward for the dissolved oxygen fraction"],
      "answer": "B",
      "rationale": "The O2-binding capacity is the ceiling for hemoglobin-bound oxygen: 1 g HbA binds 1.34 mL O2, and at 15 g/100 mL that is 20.1 mL O2/100 mL blood. Content is the actual amount present, so the capacity is multiplied by the percent saturation and the dissolved oxygen is then added back. Multiplying content by cardiac output gives O2 delivery, a separate quantity.",
      "hidden": true
    },
    {
      "question": "During a sprint, an athlete's contracting muscle generates CO2, lactic acid, and local heat. Which change occurs in the local oxygen-hemoglobin dissociation curve, and what does it accomplish?",
      "options": ["A. A leftward shift that raises affinity so the muscle can absorb oxygen faster from the plasma pool", "B. A leftward shift that stabilizes the relaxed state and prevents premature oxygen release in the capillary", "C. No shift, because baroreceptor-driven changes in cardiac output hold local tissue curves constant", "D. A rightward shift that binds oxygen more tightly and protects the red cell from acidic denaturation", "E. A rightward shift that lowers affinity and facilitates oxygen unloading"],
      "answer": "E",
      "rationale": "High PCO2, low pH, and increased temperature all shift the curve to the right, which is the Bohr shift. A right shift moves P50 from 25 mmHg out to about 40 mmHg, so hemoglobin releases half its oxygen at a partial pressure the tissue actually reaches. The shift lowers affinity — it does not bind oxygen more tightly — and it corresponds to the taut state of hemoglobin.",
      "hidden": true
    }
  ],
  "anking": [
    { "match": "Oxygen-hemoglobin dissociation curve", "resources": "Sigmoidal curve, positive cooperativity, P50, right and left shift causes (CADET)" },
    { "match": "Bohr and Haldane effects", "resources": "Bohr effect CO2/H+/temperature/2,3-BPG; Haldane effect deoxyhemoglobin CO2 carriage" },
    { "match": "CO2 transport in blood", "resources": "Bicarbonate, carbaminohemoglobin, carbonic anhydrase, chloride shift band 3" },
    { "match": "Carbon monoxide poisoning", "resources": "Carboxyhemoglobin, CO affinity for heme, hyperbaric oxygen therapy" },
    { "match": "Methemoglobinemia", "resources": "Fe3+ heme, oxidizing drugs, cyanosis, reversible" },
    { "match": "Fetal hemoglobin", "resources": "HbF 2 alpha 2 gamma, 2,3-BPG, left shift, oxygen transfer across placenta" },
    { "match": "Erythropoietin", "resources": "EPO kidney production, hypoxia trigger, proerythroblast, high altitude" }
  ],
  "ankingResource": {
    "primarySource": "BandB",
    "chapter": "Pulmonary > Oxygen and CO2 Transport (Hemoglobin, Dissociation Curve, Bohr/Haldane)",
    "alternatives": [
      { "resource": "Physeo", "chapter": "Physiology > Respiratory > Gas Transport and the Hemoglobin Dissociation Curve" },
      { "resource": "FirstAid", "chapter": "Respiratory > Physiology > Oxygen-Hb Dissociation Curve, CO2 Transport, Hemoglobin Variants" },
      { "resource": "Pixorize", "chapter": "Biochemistry > Hemoglobin, Methemoglobinemia, Carbon Monoxide" },
      { "resource": "Bootcamp", "chapter": "Physiology > Respiratory > Gas Transport in Blood" }
    ]
  },
  "pearls": [
    { "title": "Only dissolved gas makes pressure", "content": "Oxygen bound to hemoglobin contributes nothing to PO2. For CO2 the exception matters: dissolved CO2 AND bicarbonate both count toward PCO2, because both sit in solution in plasma. Only carbonic anhydrase is actually attached to the red cell." },
    { "title": "15 versus 250", "content": "Dissolved oxygen supplies about 15 mL O2/min against a resting demand of 250 mL O2/min — a 13-fold shortfall. That single comparison is the reason hemoglobin and red blood cells exist." },
    { "title": "20.1 is the ceiling", "content": "1 g HbA binds 1.34 mL O2, and normal blood holds 15 g/100 mL, so the O2-binding capacity is 20.1 mL O2/100 mL blood. Content = capacity x saturation + dissolved. Delivery = cardiac output x content." },
    { "title": "P50 is 25, but the body only reaches 40", "content": "The unshifted curve gives up half its oxygen only at PO2 25 mmHg, and the lowest PO2 the body normally sees is about 40. Without a right shift the tissue simply cannot get there — which is why the Bohr shift is not a refinement but a requirement." },
    { "title": "CADET, face Right", "content": "CO2, Acid, 2,3-DPG, Exercise, Temperature all shift the curve right and make unloading easier (P50 out to ~40 mmHg). The reverse conditions shift it left (P50 in to ~12.5 mmHg). Right shift goes with the taut state; the relaxed state holds oxygen more tightly." },
    { "title": "Fetal hemoglobin ignores 2,3-DPG", "content": "HbF is 2 alpha + 2 gamma, has higher O2 affinity, and does not interact with 2,3-BPG. Every statement about DPG-driven right shifting applies to adult hemoglobin only — the fetus needs a left-shifted curve to strip oxygen from maternal blood." },
    { "title": "Two ways to break a hemoglobin", "content": "Methemoglobin oxidizes the heme iron to Fe3+ so it cannot bind oxygen at all (congenital, oxidative stress, some anti-malarial drugs; fatigue plus bluish skin; reversible). HbS swaps valine for glutamic acid in the beta chain, lowering affinity and destabilizing cell shape under low oxygen." },
    { "title": "CO wins by 200-fold", "content": "Carbon monoxide competes for the same heme site as oxygen with 210-250 times the affinity, and it is very hard to displace. 50% carboxyhemoglobin was survivable in the lecture's case; much beyond that is not. Treat with regular air ~5 h, 100% O2 ~1.5 h, or hyperbaric 3 ATM ~20 min." },
    { "title": "The kidney is a smart oxygen sensor", "content": "EPO comes mainly from the kidney because the kidney can tell a true oxygen shortage from mere hypoperfusion. Hypoxia (for example altitude) triggers EPO, which expands the proerythroblast pool and pushes it toward mature erythrocytes." },
    { "title": "CO2 travels mostly as bicarbonate", "content": "More than 80% as HCO3-, 5-10% as carbaminohemoglobin, 5-10% (this lecture: ~5%) dissolved — 2.8 mL CO2/100 mL blood from PCO2 40 x 0.07. Textbooks disagree on these percentages; use the lecture's slide values." },
    { "title": "Bohr and Haldane are two directions of the same coupling", "content": "Bohr: CO2 and H+ change how hemoglobin handles oxygen. Haldane: oxygen changes how hemoglobin handles CO2. Deoxyhemoglobin is simultaneously the better CO2 carrier and the better H+ buffer, which is exactly what an exercising muscle needs." },
    { "title": "Chloride shift keeps the charge honest", "content": "For every HCO3- that leaves the red cell, a Cl- enters through the band 3 anion exchanger. Without it the cell would build up positive charge and the reaction would stall. All of it reverses in the lung so CO2 can be exhaled." }
  ],
  "mindmap": `
## Transport of Gases in Blood and Tissue Fluids

### O2 Carriage & Henry's Law (Slide 3)

- **Bound to Hb**: ~98.5% (other texts 98%)
- **Dissolved**: ~1.5% (other texts 2%)
- **Henry's Law**: 100 mmHg x 0.003 = 0.3 mL O2/100 mL blood
- **Supply vs demand**: 15 mL O2/min dissolved vs 250 mL O2/min needed = 13x shortfall
- **Partial pressure rule**: only dissolved gas counts; Hb-bound O2 invisible to PO2
- **CO2 exception**: dissolved CO2 + bicarbonate count toward PCO2; carbonic anhydrase is the only RBC-bound piece

### Hemoglobin Variants (Slides 4-7)

- **HbA**: 2 alpha + 2 beta; heme with Fe2+ binds O2
- **Oxy vs deoxyhemoglobin**: different spectral pattern - basis of pulse oximetry
- **HbF**: 2 alpha + 2 gamma; higher O2 affinity; no 2,3-BPG interaction; fetus does not breathe
- **Methemoglobin**: heme Fe2+ oxidized to Fe3+; cannot bind O2; congenital or acquired (oxidative stress, anti-malarials); fatigue, bluish skin; reversible
- **HbS**: beta chain glutamic acid to valine; lower O2 affinity; sickles under low O2; malaria-endemic prevalence; heterozygote advantage

### Capacity, Content, Delivery (Slides 8-9)

- **O2-binding capacity**: maximum bound to Hb; 1 g HbA x 1.34 mL O2; 15 g/100 mL = 20.1 mL O2/100 mL
- **O2 content**: (capacity x % saturation) + dissolved O2
- **O2 delivery**: cardiac output x O2 content
- **Content split**: ~2% dissolved, ~98% Hb-bound

### Dissociation Curve (Slides 10-11)

- **Shape**: sigmoidal, not linear
- **Positive cooperativity**: saturated Hb holds tightly; unsaturated releases easily
- **Plateau**: PO2 50 mmHg still ~85% saturated (3-4 O2 per molecule)
- **P50**: 50% saturation = 2 of 4 O2 released; unshifted at PO2 25 mmHg
- **Physiologic floor**: lowest PO2 normally ~40 mmHg; lung blood at 100 mmHg
- **Pulse oximetry**: dual-wavelength spectrophotometry; oxy vs deoxy absorbance; % saturation estimates arterial PO2

### Curve Shifts (Slide 12)

- **Right shift**: P50 out to ~40 mmHg; easier unloading
- **Right shift causes**: high PCO2, low pH (Bohr effect), increased temperature, increased 2,3-DPG
- **Left shift**: P50 in to ~12.5 mmHg; harder unloading
- **Left shift settings**: lung after re-oxygenation; metabolically quiet tissue
- **Caveat**: applies to adult Hb only; HbF does not use 2,3-DPG
- **Conformation**: right shift = taut state; relaxed state holds O2 tightly

### Carbon Monoxide (Slide 13)

- **Mechanism**: competitive at the heme O2 site; 210-250x affinity; carboxyhemoglobin
- **Severity**: ~50% saturation survivable in lecture case; more is not
- **Therapy**: regular air ~5 h; O2-saturated air ~1.5 h; hyperbaric 3 ATM ~20 min
- **Prevention**: CO alarm where you live and sleep

### Erythropoietin (Slide 14)

- **Nature**: glycoprotein hormone
- **Source**: mainly kidneys; lesser degree liver
- **Trigger**: hypoxia, e.g. high altitude
- **Action**: bone marrow, binds proerythroblasts, increases number, drives differentiation to erythrocytes
- **Why kidney**: distinguishes true O2 shortage from reduced blood flow

### CO2 Transport (Slides 15-17)

- **Bicarbonate**: more than 80%
- **Carbaminohemoglobin**: 5-10%; site distinct from O2 site; not competitive
- **Dissolved**: 5-10%, lecture uses ~5%; 2.8 mL CO2/100 mL = 40 mmHg x 0.07
- **Haldane effect**: deoxyhemoglobin binds CO2 and H+ more readily; O2 binding changes whole-molecule conformation
- **In tissue**: deoxyHb picks up CO2; **in lung**: oxyHb sheds CO2
- **RBC sequence**: CO2 in (unbound, still counts to PCO2) - carbonic anhydrase - H2CO3 - HCO3- + H+
- **Chloride shift**: HCO3- out, Cl- in via band 3 anion exchanger, for electroneutrality
- **H+ buffering**: deoxyhemoglobin binds H+ more tightly than oxyhemoglobin
- **Reversibility**: all reactions reverse in lung tissue to blow off CO2

### Board Question (Slide 18)

- **Vignette**: 400 m sprinter; high CO2, lactic acid, local heat
- **Answer B**: rightward shift, decreased affinity, facilitates unloading
- **Eliminations**: A and C leftward; D wrong benefit; E cardiac output irrelevant to Hb biochemistry
`
});
