window.receiveLectureContent({
  "id": "cv16",
  "title": "Lecture #16: Hemodynamics and Circulation",
  "lecturer": "M.A. Carrillo-Sepulveda, Ph.D.",
  "pdf": "content/CV16_HighYield_Render.pdf",
  "content": `
# Lecture #16: Hemodynamics and Circulation

**Lecturer:** M.A. Carrillo-Sepulveda, Ph.D.
**Session:** Lecture #16

## The Big Picture: What Hemodynamics Means (Slides 2-3)

The body's single overriding goal in the circulation is to keep blood flow constant, and this lecture builds the physics toolkit that explains how it does so. Hemodynamics refers to the principles that govern — that drive — blood flow in the cardiovascular system: velocity, pressure, cross-sectional area, resistance, and capacitance (compliance). In other words, hemodynamics is fluid dynamics applied to blood. The lecturer flagged the two laws at the end — Poiseuille's law and the Laplace law — as the key concepts of the lecture and heavily tested on boards, and deliberately deferred detailed blood pressure regulation to its own dedicated lecture.

- **Hemodynamics (Slide 3):** the principles that govern blood flow in the cardiovascular system.
  - Parameters: **velocity, pressure, cross-sectional area, resistance, capacitance/compliance** (capacity to hold blood).
- **Fluid:** a substance that flows and has no specific shape — water, oil, honey, and, for our purposes, **blood**.
- **Learning objective emphasis [Lecturer Emphasis]:** understanding the relationship between blood flow and resistance (Poiseuille + Laplace) is "very important" and "highly asked" on boards.

## Physical Characteristics of the Circulation (Slides 4-5)

Before the math, we need the model. The circulation is a set of closed vessels — a "network of pipes" — with a pressure pump (the heart) driving a circulating fluid (the blood). The lecturer's favorite analogy is an electrical circuit: the heart is the battery, the blood is the current, and the blood vessels are the wires. Because the left heart and right heart operate in series, whatever leaves the heart must come back to it: cardiac output equals venous return.

- **Stroke volume (SV) (Slide 4):** the volume of blood pumped out of the heart with **each beat**.
- **Cardiac output (CO):** the volume of blood pumped by the heart **per minute**.
  - **CO = SV x HR**
  - Normal CO is approximately **5 L/min**.
  - First Aid has a nice summary of these concepts [Lecturer Emphasis].
- **Series circuit (Slide 5):** left and right hearts operate in series, so venous return to the left heart equals venous return to the right heart.
  - Therefore **cardiac output from the heart = venous return to the heart** — the amount of blood that leaves the heart equals the amount that returns.

## The Vasculature: A Network of Different Pipes (Slide 6)

The pipes are not uniform: they differ in length, diameter, and wall composition, and that variety is exactly why velocity must change from segment to segment to keep flow constant. Every vessel — from aorta to capillary to vein — is lined by endothelium, but the muscle content varies enormously.

- **Endothelium:** present in **100% of blood vessels** — every vessel type.
- **Vascular smooth muscle:** abundant in the **aorta and arterioles**; **essentially absent in capillaries** (capillaries are pretty much endothelium only).
- **Veins:** contain **all the layers** of the vessel wall (endothelium, smooth muscle, adventitia) but in much **smaller amounts** than arteries.
  - Classic comparison: the **ascending aorta** (very elastic, muscle-rich) vs. the **saphenous vein** (endothelium present, far less muscle).
- **Why it matters:** as blood passes vessels of different diameters, **velocity changes** so that **flow stays constant**.

## Basic Terminology in Circulation (Slide 7)

- **Blood flow (Q):** the volume of blood that passes a given point in the circulation in a given period of time — **volume/time** (mL/sec).
- **Velocity:** the distance blood moves in a given amount of time — **distance/time** (cm/sec).
- **Compliance (= capacitance = distensibility):** the ability of a vessel to **distend and increase volume with increasing transmural pressure** — how much blood a vessel can hold.

## Velocity and Cross-Sectional Area (Slides 8-11)

Here is the first quantitative rule of the lecture. Flow through the system is constant, so when the pipe narrows, the blood must move faster; when the total pipe area widens, it slows down. This is why the same 5 liters per minute races through the aorta and crawls through the capillary beds — perfect for exchange.

- **Velocity equation (Slides 8-10):** **v = Q / A**, where A = pi x r squared.
  - **The narrower the vessel, the faster the velocity of flow** (Slide 8).
  - Velocity is **inversely proportional to vascular cross-sectional area**, so changes in vessel diameter alter velocity through a vessel (Slide 9).
- **Total cross-sectional area is what counts (Slide 10):**
  - **Capillaries** have the **highest total cross-sectional area** and therefore the **lowest velocity**.
  - The **aorta** has the **smallest total cross-sectional area** and therefore the **highest velocity**.
  - Velocity increases again from capillaries to venules to veins to vena cava as total cross-sectional area decreases.
  - Flow rate remains constant because velocity changes with vessel radius.
- **Practice calculation (Slide 11):** CO = 5.5 L/min; aortic diameter 20 mm; total capillary cross-sectional area 2,500 cm2.
  - Aorta: radius = 10 mm = 1 cm, so A = 3.14 x (1 cm) squared = **3.14 cm2**; v = 5.5 L/min / 3.14 cm2 = **~1,752 cm/min**.
  - Capillaries: v = 5.5 L/min / 2,500 cm2 = **2.2 cm/min**.
  - Same flow, wildly different velocities — driven entirely by cross-sectional area.

:::diagram cv16-velocity-vs-total-area:::

:::highyield
Velocity of blood flow is inversely proportional to TOTAL cross-sectional area (v = Q/A). Capillaries have the highest total cross-sectional area and the lowest velocity; the aorta has the smallest total cross-sectional area and the highest velocity. Flow stays constant throughout — only velocity changes.
:::

## Ohm's Law: Flow, Pressure, and Resistance (Slides 13-16)

Velocity was the first player; pressure and resistance are the next two. The governing equation comes straight from Ohm's law of electricity — current equals voltage difference divided by resistance. Translated to the circulation, the voltage difference becomes the pressure difference and the current becomes blood flow. This one relationship explains everything from why blood moves at all to why a blocked coronary artery starves the myocardium.

- **Ohm's law applied to blood (Slide 13):** **Q = (P1 - P2) / R = delta P / R** (mL/min).
  - **Delta P** may also be called the **driving pressure, perfusion pressure, or pressure gradient** depending on the textbook.
  - P1 is always higher than P2 — **flow always runs from higher to lower pressure**, from arteries to veins (Slide 14).
- **Vascular resistance (Slide 14):** results from **friction between the flowing blood and the intravascular endothelium** along the inside of the vessel.
- **The key sentence of the lecture [Lecturer Emphasis] (Slide 13):** the **major mechanism for changing blood flow in the cardiovascular system is changing the resistance of blood vessels, particularly the arterioles** (the very small arteries).
- **Worked comparisons (Slide 15):** flow is directly proportional to delta P and inversely proportional to R.
  - Vessel with delta P of 80 vs. vessel with delta P of 40: the **flow doubles** when the pressure difference doubles.
  - Two vessels with delta P of 80 each (90 to 10 vs. 180 to 100): **identical flows** — only the difference matters, not the absolute pressures.

:::correlate
Coronary Artery Blockage (Myocardial Ischemia)

- **Pathophysiology:** A 95% blockage of a coronary artery dramatically increases resistance in that segment. By Ohm's law (Q = delta P / R), increased resistance decreases blood flow — flow is inversely proportional to resistance.
- **Presentation:** Ischemia — a decrease in blood flow to the myocardium; can progress to heart infarct.
- **Diagnosis:** Contrast angiography identified the 95% blocked coronary artery.
- **Treatment:** Stent implantation restored the vessel diameter and thereby the flow.
- **Lecturer's Point:** Every time resistance increases, flow decreases, and vice versa — this real angiogram is Ohm's law in action.
:::

## Calculating Vascular Resistance (Slide 17)

Rearranging Ohm's law lets you compute resistance from a flow and two pressures — a skill the lecturer tied into renal physiology on purpose, since it recurs there.

- **Renal practice question:** renal blood flow 500 mL/min; renal arterial pressure 100 mmHg; renal venous pressure 10 mmHg.
  - R = delta P / Q = (100 - 10) / 500 = 90 / 500 = **0.18 mmHg/mL/min**.

## Decompensated Heart Failure: Hemodynamics in Action (Slide 18)

:::diagram cv16-cardiorenal-loop:::

:::correlate
Decompensated Heart Failure

- **Pathophysiology:** The pump (heart) fails, so **cardiac output decreases**. Less blood reaches the tissues; **renal artery perfusion falls**, which **decreases GFR** and **activates the renin-angiotensin system**, causing **vasoconstriction** as a compensatory response. Decreased baroreceptor stretch also results in vasoconstriction. There is **volume overload** with reduced cardiac output.
- **Presentation:** Shortness of breath, chest discomfort or pain, and swelling of the legs (when decompensated).
- **Lecturer's Point:** Heart failure is the classic pathological example of decreased cardiac output; it gets its own lecture later, and the cardiorenal syndrome connects it to renal physiology. Baroreceptor stretch will be discussed in depth in the blood pressure regulation lectures.
:::

## Poiseuille's Equation: Resistance Dissected (Slides 19-23)

Now the concept the lecturer called the key of the lecture and "highly asked in the boards." Resistance is not a black box — it is built from three things: how long the vessel is, how thick (viscous) the blood is, and, above all, how wide the vessel is. Because radius enters the equation raised to the fourth power, tiny changes in vessel caliber produce huge changes in flow — the physiologic basis for arteriolar control of flow, and the reason a wider IV catheter beats a pressure bag every time.

- **Resistance (Slide 20):** **R = (8 x L x viscosity) / (pi x r to the 4th power)**.
  - L = vessel length; viscosity = thickness of the blood; r = radius.
- **Combined with Ohm's law:** **Q = (delta P x pi x r to the 4th) / (8 x L x viscosity)**.
  - **Viscosity increases → flow decreases.**
  - **Vessel length increases → flow decreases.**
  - **Delta P increases → flow increases.**
  - **Radius increases → flow increases — to the FOURTH power.**
- **The r to the 4th consequence:** doubling the radius (1 → 2) increases flow **16-fold** (2 x 2 x 2 x 2).
- **Anemia as the classic viscosity example [Lecturer Emphasis] (Slide 23):** in anemia the number of red cells decreases, so **viscosity decreases**, so **flow increases**. (The lecturer corrected a momentary slip: in anemia viscosity goes DOWN and flow goes UP.)
- The USMLE First Aid table summarizing resistance, pressure, and flow is recommended for board studiers [Lecturer Emphasis].

:::diagram cv16-poiseuille-r4:::

:::highyield
Poiseuille's equation: Q = (delta P x pi x r^4) / (8 x L x viscosity). Radius is raised to the FOURTH power — doubling the radius of a vessel (or an IV catheter) increases flow 16-fold. This is the single most board-tested relationship of the lecture, and it is why arterioles (adjustable radius) are the body's flow-control valves.
:::

:::correlate
Hypovolemic Hemorrhagic Shock (Bleeding Peptic Ulcer)

- **Pathophysiology:** A 65-year-old man with peptic ulcer disease presents with nausea, melena (blood in feces), and faintness — GI blood loss causing hypovolemia.
- **Presentation:** BP 90/40 (low), pulse elevated, respirations 28/min, lethargy, cold extremities; remains hypotensive despite a slow blood transfusion.
- **Treatment (the Poiseuille application):** To improve transfusion flow rate, **double the diameter of the intravenous catheter** — flow increases 16 times. Increasing the driving pressure is a poor choice because excessive pressure can break (hemolyze) the red cells; changing blood viscosity or catheter length is impractical.
- **Lecturer's Point:** This is the boards' favorite way to test r to the 4th power: radius beats pressure, length, and viscosity as the lever on flow.
:::

:::correlate
Anemia (High-Output State)

- **Pathophysiology:** Fewer red cells → **decreased blood viscosity** → **increased blood flow** (Poiseuille). With fewer red cells carrying oxygen, the body compensates with **increased heart rate and increased cardiac output**.
- **Presentation:** A 22-year-old medical student with 3 months of fatigue and sleepiness, a **mid-systolic murmur**, and **higher-than-normal cardiac output**. The murmur is generated by the increased heart rate and cardiac output.
- **Diagnosis:** On the differential for a high cardiac output with a mid-systolic murmur, anemia is the answer (vs. cardiac tamponade, mitral regurgitation, third-degree heart block).
- **Lecturer's Point:** Anemia is the go-to example for the viscosity term of Poiseuille's equation — and an example of increased CO driven by increased heart rate.
:::

## The Laplace Law: Wall Tension (Slide 24)

The last physical law of the lecture answers a deceptively simple question: why does wall tension increase as a vessel dilates? The formula makes the danger of aneurysms obvious — the bigger the radius, the greater the tension in the wall at the same pressure, which is why dilated vessels keep dilating.

- **Laplace law:** **Wall tension = (transmural pressure x radius) / (2 x wall thickness)**.
  - **If the radius increases, wall tension increases** at a given pressure.
- **Three look-alike terms that are NOT the same [Lecturer Emphasis]:**
  - **Arterial compliance (distensibility):** the elastic property of the artery — how much blood it can accommodate.
  - **Arterial stiffness:** loss of the elastic property; happens to everyone with **aging** (stiff muscles, stiff arteries).
  - **Arterial thickness:** how thick the vessel wall is — you can have thickness without stiffness; they are different concepts.

:::correlate
Abdominal Aortic Aneurysm

- **Pathophysiology:** In an aneurysm the radius of the aorta increases; by the Laplace law (T = P x r / 2 x wall thickness), **wall tension rises** compared with the normal-caliber vessel at the same transmural pressure.
- **Presentation:** Focal dilation of the abdominal aorta compared with the normal aorta.
- **Lecturer's Point:** The aneurysm is THE classic example for understanding why wall tension increases with radius.
:::

## Blood Pressure and Its Components (Slides 25-28)

Blood pressure gets its own lecture later, but the vocabulary starts here. Every cuff reading hands you two numbers, and from them you can immediately derive two more clinically rich parameters: the mean arterial pressure that drives perfusion, and the pulse pressure that reports on stroke volume and arterial compliance.

- **Definitions (Slide 25):**
  - **Systolic pressure:** highest arterial pressure during a cardiac cycle.
  - **Diastolic pressure:** lowest arterial pressure during a cardiac cycle.
  - **Mean arterial pressure (MAP):** the running average of arterial pressure.
  - **Pulse pressure:** systolic minus diastolic; its magnitude **reflects the volume of blood ejected on a single beat** (stroke volume).
- **Pressure profile in the vasculature (Slide 26):** pressure is very high in the aorta and large arteries and falls to very low values in the capillaries, venules, and veins — the high-pressure side is arterial.
- **The formulas (Slides 27-28):**
  - **Pulse pressure = systolic - diastolic** (e.g., 120 - 80 = **40 mmHg**); **normal pulse pressure is 30-40 mmHg**.
  - **MAP = diastolic + 1/3 pulse pressure** (80 + 1/3 x 40 = 93 mmHg).
  - **MAP = (2 x diastolic + systolic) / 3** (2 x 80 + 120, over 3 = 93 mmHg) — both formulas must give the same answer.
  - **BP = CO x TPR** (blood pressure = cardiac output x total peripheral resistance).
  - **CO = (aortic pressure - vena cava pressure) / TPR**.
  - **Total peripheral resistance (TPR) = systemic vascular resistance (SVR)** — same thing, two names.

## Total Peripheral Resistance (Slides 29-30)

- **TPR:** the resistance of the **entire systemic vasculature**.
- **Formula chain:** R = delta P / Q, so **TPR = delta P / CO**, and for the whole systemic circuit **TPR = (MAP - CVP) / CO** (mean arterial pressure minus central venous pressure, divided by cardiac output).
- **Primary determinant of TPR: the adjustable arteriolar radius** (Slide 29).
- **Two categories of factors control arteriolar radius:**
  - **Local (intrinsic) control:** e.g., **heat and cold**.
  - **Extrinsic control:** **sympathetic activity and hormones**.
  - Details deferred to the blood pressure regulation lecture.

## Pulse Pressure in Disease and Daily Life (Slides 31-32)

Pulse pressure is free information: every blood pressure measurement gives it to you instantly, and deviations from the normal 30-40 mmHg window point to specific physiology. The factors that set its magnitude are stroke volume, the speed of ejection of the stroke volume (ventricular contraction rate), and arterial compliance — so diseases that change any of those change the pulse pressure.

| Condition | Mechanism (as taught) | Pulse Pressure |
| --- | --- | --- |
| Aortic valve stenosis | Stenotic valve → stroke volume decreases | Decreased |
| Atherosclerosis / arterial calcification | Calcified, inflamed artery → arterial compliance decreases | Decreased |
| Hyperthyroidism | Blood pressure increases | Increased |
| Lying down (supine) | Central venous pressure increases → end-diastolic volume (preload) increases → stroke volume increases | Increased |

:::correlate
Aortic Valve Stenosis

- **Pathophysiology:** Stenosis of the aortic valve **decreases stroke volume**; because pulse pressure tracks stroke volume, **pulse pressure decreases**. Aortic stenosis is also the lecture's example of an **increased afterload** state that decreases stroke volume (Slide 40).
- **Presentation:** Low (narrow) pulse pressure on blood pressure measurement.
- **Lecturer's Point:** One of the classic low-pulse-pressure conditions.
:::

:::correlate
Atherosclerosis / Arterial Calcification

- **Pathophysiology:** An artery undergoing calcification and inflammation has **low compliance** — its distensibility is compromised. As taught in this lecture, the decreased arterial compliance produces a **drop in pulse pressure**.
- **Presentation:** Low pulse pressure on measurement.
- **Lecturer's Point:** Presented alongside aortic stenosis as an example of low pulse pressure.
:::

:::correlate
Hyperthyroidism

- **Pathophysiology:** Hyperthyroidism **increases blood pressure**, which leads to an **increase in pulse pressure**.
- **Presentation:** High (wide) pulse pressure.
- **Lecturer's Point:** The lecture's example of an increased pulse pressure condition — pulse pressure changes are not always pathological, but this one is.
:::

- **Physiological pulse pressure change (Slide 32):** simply **lying down increases pulse pressure**: supine posture **raises central venous pressure** (venous return no longer fights gravity), which raises **end-diastolic volume — the preload**, which raises **stroke volume**, which raises pulse pressure. No disease required.

## Central Venous Pressure (Slide 34)

- **Central venous pressure (CVP):** the blood pressure in the **thoracic vena cava, near the right atrium**.
- **Measurement:** usually **invasive** — requires placing a catheter.
- **Normal CVP: 0-7 mmHg** — very low.
- Venous pressures fall progressively as blood approaches the heart, reaching about zero near the right atrium; when standing, venous return from the feet must work against gravity.

## Two Ways to Get Cardiac Output (Slides 36-38)

Learning objective 4 is about determining cardiac output from the data in front of you — and there are two routes, depending on what you are given. If you have stroke volume and heart rate, multiply. If you do not, the Fick principle rescues you using oxygen data from the labs. The lecturer stressed that knowing both, and when to use each, is very highly asked on boards.

- **Physical (mechanical) calculation (Slide 37):** **CO = SV x HR** — the pump/engine view; requires testing that yields stroke volume.
- **Fick principle (Slide 37):** **CO = O2 consumption / (arterial O2 - venous O2)** — a physiologic, cardio-pulmonary-metabolic approximation; **requires lab results**.
- **Practice question (Slide 38):** HR 50/min; pulmonary vein O2 21 mL O2/100 mL; pulmonary artery O2 6 mL O2/100 mL; VO2 300 mL/min; SV 40 mL.
  - Physical: CO = 40 x 50 = **2,000 mL/min = 2 L/min**.
  - Fick: CO = 300 / (21 - 6 per 100 mL) = 300 / 0.15 = **2,000 mL/min** — both methods must agree.
  - Note the sampling logic: the **pulmonary vein carries arterial (oxygenated) blood** and the **pulmonary artery carries venous blood** — a favorite trap.
- **Student self-test (Slide 36):** HR 75, BP 110/70, SV 65 mL/beat → calculate CO (75 x 65 = 4,875 mL/min, about 4.9 L/min), MAP ((2 x 70 + 110)/3 = about 83 mmHg), and pulse pressure (110 - 70 = 40 mmHg). Left as homework along with the Slide 42 summary question (Fick CO + SVR).

:::highyield
Two ways to calculate cardiac output — CO = SV x HR (physical calculation, needs stroke volume) and the Fick principle, CO = O2 consumption / (arterial O2 - venous O2) (needs labs). Both give the same number. Remember: pulmonary vein O2 = the arterial value; pulmonary artery O2 = the venous value.
:::

## What Changes Cardiac Output (Slides 39-40)

The last stretch of the lecture assembles the CO = HR x SV family tree: what moves heart rate, what moves stroke volume, and the three scenarios the lecturer used to make it stick — exercise, the transplanted heart, and anemia.

- **Heart rate** is changed by **hormones, nerves, and physical activity**; exercise raises heart rate and therefore cardiac output.
- **Alterations in the pump (Slide 39):**
  - **Exercise:** increased HR → increased CO.
  - **Cardiac transplantation:** the transplanted heart's **nervous supply is modified during surgery** (denervated), so with exercise CO still increases — but **because stroke volume increases, NOT heart rate**.
  - **Anemia:** decreased viscosity, with compensatory **increased heart rate → increased cardiac output**.
- **Stroke volume determinants (Slide 40):**
  - **Stroke volume (SV):** volume of blood ejected by the ventricle in one contraction (mL/beat) — most commonly the LV.
  - **Preload:** the degree of stretch on the myocardium at the **end of diastole** (mL) — set by the blood returning to the heart.
  - **Afterload:** the **resistance against which blood is ejected** from the heart (mmHg).
  - **Stroke volume DECREASES with:** a **decrease in preload** (less blood returns to the heart), an **increase in afterload** (e.g., **aortic stenosis** — less blood leaves the heart), and a **decrease in cardiac contractility**.

:::correlate
Cardiac Transplantation (Denervated Heart)

- **Pathophysiology:** During transplant surgery the nervous supply to the heart is modified, so the usual nerve-mediated heart rate rise with exercise is unavailable.
- **Presentation:** With exercise, cardiac output still increases — driven by an **increase in stroke volume** rather than heart rate.
- **Lecturer's Point:** A favorite contrast case: exercise normally raises CO via heart rate, but the transplanted heart raises CO via stroke volume.
:::

:::mnemonic
**Stroke Volume Falls — "PAC"**
**PAC**

- **P:** Preload decreased (less venous return, less end-diastolic stretch)
- **A:** Afterload increased (e.g., aortic stenosis — more resistance to ejection)
- **C:** Contractility decreased (weaker squeeze)
:::

## Wrap-Up and Homework (Slides 36, 42)

The lecture closes with a summary question integrating everything: a patient with vitals, right atrial pressure, arterial and venous O2 contents, and O2 consumption — from which you compute cardiac output by the Fick principle and then systemic vascular resistance from (MAP - CVP)/CO. The lecturer left it (and the Slide 36 calculations) as homework and invited questions by email.
`,
  "flashcards": [
    { "front": "What is hemodynamics, and which parameters does it include?", "back": "The principles that govern (drive) blood flow in the cardiovascular system: velocity, pressure, cross-sectional area, resistance, and capacitance/compliance.", "tag": "Glossary" },
    { "front": "Give the formula and normal value for cardiac output.", "back": "CO = stroke volume x heart rate; normal is about 5 L/min. Stroke volume is the volume pumped out with each beat.", "tag": "Concept" },
    { "front": "In the electrical circuit analogy of the circulation, what are the battery, current, and wires — and what does the series arrangement imply?", "back": "Heart = battery, blood = current, blood vessels = wires. Because the left and right hearts operate in series, cardiac output from the heart equals venous return to the heart.", "tag": "Concept" },
    { "front": "Which vessel wall component is present in 100% of blood vessels, and which vessels essentially lack smooth muscle?", "back": "Endothelium is present in every vessel. Capillaries essentially lack smooth muscle — they are pretty much endothelium only. Veins have all the wall layers but much less muscle than arteries.", "tag": "Concept" },
    { "front": "Define compliance (capacitance/distensibility) of a vessel.", "back": "The ability of a vessel to distend and increase volume with increasing transmural pressure — how much blood it can hold.", "tag": "Glossary" },
    { "front": "How is velocity of blood flow related to cross-sectional area, and where is velocity highest and lowest?", "back": "v = Q/A — inversely proportional to TOTAL cross-sectional area. Highest velocity in the aorta (smallest total area); lowest in the capillaries (highest total area). Flow itself stays constant.", "tag": "Concept" },
    { "front": "State Ohm's law as applied to blood flow, and name the major mechanism the body uses to change flow.", "back": "Q = delta P / R (pressure difference divided by resistance). The major mechanism for changing blood flow is changing the resistance of the blood vessels, particularly the arterioles.", "tag": "Concept" },
    { "front": "What generates vascular resistance to blood flow?", "back": "Friction between the flowing blood and the intravascular endothelium along the inside of the vessel.", "tag": "Concept" },
    { "front": "Write Poiseuille's equation for flow. What happens to flow if the radius of a catheter doubles?", "back": "Q = (delta P x pi x r^4) / (8 x L x viscosity). Doubling the radius increases flow 16-fold (r to the 4th power).", "tag": "Concept" },
    { "front": "How does anemia change viscosity, flow, and cardiac output?", "back": "Fewer red cells → decreased viscosity → increased flow. With less O2-carrying capacity, compensatory increases in heart rate raise cardiac output — producing a mid-systolic murmur and a high-output state.", "tag": "Clinical" },
    { "front": "State the Laplace law and its classic clinical example.", "back": "Wall tension = (transmural pressure x radius) / (2 x wall thickness). As radius increases, wall tension increases — the abdominal aortic aneurysm is the classic example.", "tag": "Clinical" },
    { "front": "Give both formulas for mean arterial pressure and the normal pulse pressure range.", "back": "MAP = diastolic + 1/3 pulse pressure, or MAP = (2 x diastolic + systolic)/3. Pulse pressure = systolic - diastolic; normal is 30-40 mmHg.", "tag": "Concept" },
    { "front": "Name conditions with decreased and increased pulse pressure from this lecture.", "back": "Decreased: aortic valve stenosis (low stroke volume) and atherosclerosis/arterial calcification (low compliance, as taught). Increased: hyperthyroidism (high blood pressure) and lying supine (increased CVP → preload → stroke volume).", "tag": "Clinical" },
    { "front": "What is central venous pressure, where is it measured, and what is normal?", "back": "The blood pressure in the thoracic vena cava near the right atrium; usually measured invasively with a catheter; normal is 0-7 mmHg.", "tag": "Glossary" },
    { "front": "State the Fick principle formula for cardiac output and the key sampling trap.", "back": "CO = O2 consumption / (arterial O2 - venous O2); requires labs. Trap: the pulmonary VEIN carries the arterial (oxygenated) value and the pulmonary ARTERY carries the venous value.", "tag": "Concept" },
    { "front": "How does a cardiac transplant patient increase cardiac output during exercise?", "back": "Through an increase in STROKE VOLUME, not heart rate — the nervous supply is modified during surgery, so the nerve-mediated heart rate response is unavailable.", "tag": "Clinical" }
  ],
  "questions": [
    {
      "question": "A physiologist measures blood velocity at several points in the systemic circulation of a healthy adult with a cardiac output of 5 L/min. Velocity is found to be lowest in the capillaries. Which of the following best explains this finding?",
      "options": ["A. Capillaries offer the highest resistance, which reduces flow through each capillary bed", "B. The total cross-sectional area of the capillaries is the highest in the circulation", "C. Blood viscosity rises sharply as red cells enter narrow capillaries", "D. The volume of blood flowing through the capillaries per minute is lower than in the aorta", "E. Capillary smooth muscle contracts to slow the passage of blood for exchange"],
      "answer": "B",
      "rationale": "Velocity = flow divided by total cross-sectional area (v = Q/A). Because total flow is constant throughout the circulation, velocity is inversely proportional to total cross-sectional area: capillaries collectively have the largest area and therefore the lowest velocity, while the aorta has the smallest area and the highest velocity. Total flow per minute is the same at every level of the circulation, and capillaries essentially lack smooth muscle.",
      "hidden": true
    },
    {
      "question": "A 65-year-old man with a bleeding peptic ulcer is hypotensive despite an ongoing blood transfusion that is running very slowly. Which of the following changes will produce the greatest improvement in the transfusion flow rate?",
      "options": ["A. Doubling the length of the intravenous catheter", "B. Doubling the driving pressure of the infusion", "C. Adding a second catheter of identical diameter and length", "D. Halving the viscosity of the transfused blood", "E. Doubling the diameter of the intravenous catheter"],
      "answer": "E",
      "rationale": "By Poiseuille's equation, Q = (delta P x pi x r^4)/(8 x L x viscosity). Radius enters at the fourth power, so doubling the catheter diameter increases flow 16-fold. Doubling pressure only doubles flow and risks breaking the red cells; a second identical catheter also only doubles total flow; doubling length would cut flow in half; and viscosity changes are impractical and give at most a 2-fold gain.",
      "hidden": true
    },
    {
      "question": "A 70-year-old man has the following data: heart rate 50/min, pulmonary vein O2 content 21 mL O2/100 mL, pulmonary artery O2 content 6 mL O2/100 mL, and oxygen consumption 300 mL/min. Using the Fick principle, what is his cardiac output?",
      "options": ["A. 2 L/min", "B. 5 L/min", "C. 4.5 L/min", "D. 1.5 L/min", "E. 3 L/min"],
      "answer": "A",
      "rationale": "Fick: CO = O2 consumption / (arterial O2 - venous O2). The pulmonary vein carries arterial (oxygenated) blood and the pulmonary artery carries venous blood, so CO = 300 / (21 - 6 mL O2 per 100 mL) = 300 / 0.15 = 2,000 mL/min = 2 L/min. This matches the physical calculation if stroke volume (40 mL) were provided: 40 x 50 = 2,000 mL/min.",
      "hidden": true
    },
    {
      "question": "A 78-year-old woman is found to have severe narrowing of her aortic valve on echocardiography. Which change in her blood pressure profile is most consistent with this lesion, based on the hemodynamic principles of this lecture?",
      "options": ["A. Increased pulse pressure due to increased stroke volume", "B. Unchanged pulse pressure because the valve does not affect ejection", "C. Decreased pulse pressure due to decreased stroke volume", "D. Increased diastolic pressure with a widened pulse pressure", "E. Decreased mean arterial pressure with an unchanged pulse pressure"],
      "answer": "C",
      "rationale": "Pulse pressure reflects the volume of blood ejected on a single beat. Aortic valve stenosis impedes ejection, decreasing stroke volume — and when stroke volume decreases, pulse pressure drops. Aortic stenosis is also the lecture's example of increased afterload, another reason stroke volume falls.",
      "hidden": true
    },
    {
      "question": "A 54-year-old man who received a cardiac transplant one year ago undergoes exercise stress testing. His cardiac output rises appropriately with exercise. Which mechanism best explains this increase?",
      "options": ["A. Sympathetic nerve-mediated increase in heart rate", "B. Decreased blood viscosity during exercise", "C. Vagally mediated increase in ventricular filling time", "D. An increase in stroke volume", "E. Increased total peripheral resistance"],
      "answer": "D",
      "rationale": "During transplant surgery the nervous supply to the heart is modified, so the usual nerve-mediated rise in heart rate is not available. The transplanted heart still increases cardiac output with exercise, but it does so through an increase in stroke volume rather than heart rate.",
      "hidden": true
    }
  ],
  "anking": [
    { "match": "Blood flow, velocity, and cross-sectional area", "resources": "Velocity = Q/A; capillaries highest total cross-sectional area, lowest velocity; aorta highest velocity" },
    { "match": "Ohm's law of the circulation (Q = deltaP/R)", "resources": "Flow proportional to pressure gradient, inversely proportional to resistance; arterioles as main site of resistance" },
    { "match": "Poiseuille equation and resistance", "resources": "R = 8(viscosity)(length)/pi r^4; radius to 4th power; doubling radius = 16x flow; viscosity and anemia" },
    { "match": "Laplace law and wall tension", "resources": "Wall tension = pressure x radius / (2 x wall thickness); aneurysm wall tension" },
    { "match": "Mean arterial pressure and pulse pressure", "resources": "MAP = DBP + 1/3 PP; PP = SBP - DBP; normal PP 30-40; aortic stenosis and hyperthyroidism pulse pressure changes" },
    { "match": "Cardiac output and the Fick principle", "resources": "CO = SV x HR (~5 L/min); Fick CO = VO2/(arterial O2 - venous O2); pulmonary vein = arterial sample" },
    { "match": "Preload, afterload, and stroke volume determinants", "resources": "SV decreases with decreased preload, increased afterload (aortic stenosis), decreased contractility" }
  ],
  "ankingResource": {
    "primarySource": "BandB",
    "chapter": "Cardiology > Pressure-Volume Loops & Cardiac Output / Blood Pressure Basics",
    "alternatives": [
      { "resource": "FirstAid", "chapter": "Cardiovascular > Physiology > Cardiac output, Resistance/pressure/flow, Mean arterial pressure" },
      { "resource": "Physeo", "chapter": "Cardiovascular Physiology > Hemodynamics" },
      { "resource": "Bootcamp", "chapter": "Cardiology > Cardiac Physiology > Hemodynamics & Blood Flow" },
      { "resource": "Pathoma", "chapter": "Cardiac Pathology > Ischemic Heart Disease (context for flow and resistance)" }
    ]
  },
  "pearls": [
    { "title": "CO = venous return", "content": "The left and right hearts operate in series like an electrical circuit (heart = battery, blood = current, vessels = wires), so cardiac output from the heart must equal venous return to the heart. Normal CO = SV x HR, about 5 L/min." },
    { "title": "Velocity follows total area, not flow", "content": "v = Q/A. Flow is constant everywhere in the circulation; velocity is inversely proportional to TOTAL cross-sectional area — highest in the aorta (3.14 cm2 in the worked example, ~1,752 cm/min) and lowest in the capillaries (2,500 cm2, 2.2 cm/min)." },
    { "title": "Only the pressure DIFFERENCE drives flow", "content": "Q = delta P / R. Two vessels with delta P of 80 mmHg (90 to 10 vs. 180 to 100) have identical flows — absolute pressures do not matter, only the gradient. Flow always runs from higher to lower pressure." },
    { "title": "Arterioles are the control valves", "content": "The major mechanism for changing blood flow in the cardiovascular system is changing vascular resistance, particularly in the arterioles — and the adjustable arteriolar radius is the primary determinant of total peripheral resistance." },
    { "title": "Resistance is friction", "content": "Vascular resistance arises from friction between the flowing blood and the intravascular endothelium. Calculate it as R = delta P / Q — e.g., renal R = (100 - 10)/500 = 0.18 mmHg/mL/min." },
    { "title": "r to the 4th power", "content": "Poiseuille: Q = (delta P x pi x r^4)/(8 x L x viscosity). Doubling a catheter's diameter increases flow 16-fold — better than doubling pressure (2x, risks hemolysis), adding a second line (2x), or altering length/viscosity." },
    { "title": "Anemia = low viscosity, high output", "content": "Fewer red cells lower blood viscosity, increasing flow; compensatory tachycardia raises cardiac output, producing a mid-systolic murmur — the classic high-output differential in a fatigued young patient." },
    { "title": "Laplace and the aneurysm", "content": "Wall tension = (transmural pressure x radius)/(2 x wall thickness). A dilated aorta bears more wall tension at the same pressure — the physics behind abdominal aortic aneurysm risk. Compliance, stiffness, and thickness are three different concepts." },
    { "title": "Pulse pressure is free clinical data", "content": "PP = SBP - DBP (normal 30-40 mmHg) and reflects stroke volume. Low PP: aortic stenosis (low SV) and atherosclerosis (low compliance, as taught). High PP: hyperthyroidism (high BP) — and simply lying down (higher CVP → preload → SV)." },
    { "title": "Fick when you have labs", "content": "CO = SV x HR when stroke volume is known; otherwise use Fick: CO = O2 consumption/(arterial O2 - venous O2). Pulmonary vein O2 is the ARTERIAL value; pulmonary artery O2 is the VENOUS value. Both methods must agree." },
    { "title": "The transplanted heart raises SV, not HR", "content": "Exercise normally raises CO via nerve-driven heart rate increases; after cardiac transplantation the nervous supply is modified, so CO rises through increased stroke volume instead." },
    { "title": "What drops stroke volume (PAC)", "content": "Decreased Preload, increased Afterload (e.g., aortic stenosis), and decreased Contractility all decrease stroke volume. CVP (normal 0-7 mmHg, thoracic vena cava near the right atrium) sets the preload side." }
  ],
  "mindmap": `
## Hemodynamics & Circulation

### Core Definitions

- **Hemodynamics**: principles governing blood flow — velocity, pressure, cross-sectional area, resistance, compliance
- **Fluid**: flows, no fixed shape (water, oil, honey, blood)
- **Blood flow (Q)**: volume/time (mL/sec)
- **Velocity**: distance/time (cm/sec)
- **Compliance (capacitance/distensibility)**: ability to distend and hold volume with rising transmural pressure

### Circulation Design

- **Model**: closed vessels (pipes) + pressure pump (heart) + fluid (blood)
- **Circuit analogy**: heart = battery, blood = current, vessels = wires
- **Series operation**: CO = venous return
- **Stroke volume**: volume per beat
- **Cardiac output**: CO = SV x HR, ~5 L/min

### Vessel Walls

- **Endothelium**: in 100% of vessels
- **Smooth muscle**: abundant in aorta/arterioles; essentially absent in capillaries
- **Veins**: all layers present, much less muscle (saphenous vein vs ascending aorta)

### Velocity & Cross-Sectional Area

- **Formula**: v = Q/A; A = pi x r squared
- **Rule**: narrower vessel → faster velocity; v inversely proportional to TOTAL area
- **Capillaries**: highest total area, lowest velocity (2.2 cm/min in example)
- **Aorta**: smallest total area, highest velocity (~1,752 cm/min; A = 3.14 cm2)
- **Flow**: constant throughout circulation

### Ohm's Law of Flow

- **Q = delta P / R**: flow from high to low pressure
- **Delta P names**: driving pressure, perfusion pressure, pressure gradient
- **Resistance source**: friction between blood and intravascular endothelium
- **Key mechanism**: flow changed via arteriolar resistance
- **Equal delta P**: equal flow regardless of absolute pressures
- **Ischemia**: 95% coronary blockage → increased R → decreased flow → infarct risk; stent restores diameter
- **Resistance calc**: R = delta P/Q (renal: 90/500 = 0.18 mmHg/mL/min)

### Decompensated Heart Failure

- **Pump failure**: decreased CO
- **Cascade**: decreased renal perfusion → decreased GFR → renin-angiotensin activation → vasoconstriction
- **Also**: decreased baroreceptor stretch → vasoconstriction; volume overload
- **Symptoms**: dyspnea, chest discomfort, leg swelling

### Poiseuille Equation

- **Resistance**: R = 8 x L x viscosity / (pi x r^4)
- **Flow**: Q = delta P x pi x r^4 / (8 x L x viscosity)
- **Radius**: 4th power — doubling radius = 16x flow
- **Viscosity up**: flow down; **Length up**: flow down
- **Anemia**: fewer RBCs → viscosity down → flow up → compensatory HR and CO up → mid-systolic murmur
- **Transfusion pearl**: double catheter diameter (16x) beats doubling pressure (hemolysis risk)
- **Shock context**: hypovolemic hemorrhagic shock from GI bleed

### Laplace Law

- **Formula**: wall tension = transmural pressure x radius / (2 x wall thickness)
- **Rule**: radius up → wall tension up
- **Example**: abdominal aortic aneurysm
- **Distinctions**: arterial compliance vs stiffness (aging) vs thickness — different concepts

### Blood Pressure Components

- **Systolic**: highest pressure of cycle; **Diastolic**: lowest
- **Pulse pressure**: SBP - DBP; normal 30-40 mmHg; reflects stroke volume
- **MAP**: DBP + 1/3 PP = (2 x DBP + SBP)/3 (120/80 → 93 mmHg)
- **BP**: CO x TPR
- **CO**: (aortic P - vena cava P)/TPR
- **Pressure profile**: high in aorta/arteries, very low in capillaries/veins

### Total Peripheral Resistance

- **TPR = SVR**: resistance of entire systemic vasculature
- **Formula**: TPR = (MAP - CVP)/CO
- **Primary determinant**: adjustable arteriolar radius
- **Local (intrinsic) control**: heat, cold
- **Extrinsic control**: sympathetic activity, hormones

### Pulse Pressure Changes

- **Aortic stenosis**: SV down → PP down; also increased afterload
- **Atherosclerosis/calcification**: compliance down → PP down (as taught)
- **Hyperthyroidism**: BP up → PP up
- **Supine position**: CVP up → preload (EDV) up → SV up → PP up

### Central Venous Pressure

- **Definition**: pressure in thoracic vena cava near right atrium
- **Measurement**: invasive (catheter)
- **Normal**: 0-7 mmHg

### Cardiac Output Determination

- **Physical**: CO = SV x HR (needs SV; mechanical, requires testing)
- **Fick**: CO = O2 consumption/(arterial O2 - venous O2) (needs labs)
- **Trap**: pulmonary vein O2 = arterial value; pulmonary artery O2 = venous value
- **Worked example**: 300/(21-6 per 100 mL) = 2 L/min = 40 mL x 50 bpm

### Altering Cardiac Output

- **HR modifiers**: hormones, nerves, physical activity
- **Exercise**: HR up → CO up
- **Cardiac transplant**: denervated → CO rises via SV, not HR
- **Anemia**: viscosity down → HR up → CO up
- **Preload**: end-diastolic stretch (mL)
- **Afterload**: resistance against ejection (mmHg)
- **SV falls with**: preload down, afterload up (aortic stenosis), contractility down
`
});
