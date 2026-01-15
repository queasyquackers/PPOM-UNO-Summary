const L5_CONTENT = {
    id: 'l5',
    title: 'Lecture #5: Clinical Applications of Neuroimaging',
    lecturer: 'S. Zakhary, D.O.',
    module: 'Neuroanatomy',
    session: 'Lecture #5',
    ankingResource: {
        primarySource: 'FirstAid',
        chapter: 'Neurology > Radiology'
    },
    prev: 'l4',
    next: 'l6',
    pdf: 'pdfs/Lecture # 5. S. Zakhary, D.O. (PPT).pdf',
    transcript: 'transcripts/Lecture #5_ Clinical Applications of Neuroimaging Faculty_ S. Zakhary, D.O..srt',
    summary: `
# Lecture #5: Clinical Applications of Neuroimaging

**Lecturer:** S. Zakhary, D.O.
**Session:** Neuroanatomy

## 1. Computed Tomography (CT) (Slides 5-18)
### Mechanism
*   Uses **Helical X-ray beams** to measure the **attenuation** (density) of tissues.
*   **Hounsfield Units (HU):** The scale of density.
    *   **Hyperdense (White):** Bone (+1000 HU), **Acute Hemorrhage**, Calcifications.
    *   **Isodense (Gray):** Brain parenchyma.
    *   **Hypodense (Black):** Air (-1000 HU), Fat, CSF, Water.
*   **Windows:** Different software settings to highlight specific tissues (e.g., Bone Window for fractures, Brain Window for strokes).

### Clinical Indications
*   **Neurologic Emergencies:** The "workhorse" of the ER.
    *   **Acute Hemorrhage (Stroke/Trauma):** First-line test. Fast (<30s).
    *   **Trauma:** Skull fractures.
    *   **Initial Stroke:** To rule out hemorrhage before giving tPA.

### CT Contrast (Iodinated)
*   **Uses:** Infection (Abscess), Tumors, Vascular pathology (CTA).
*   **Contraindications/Risks:**
    1.  **Contrast-Induced Nephropathy (CIN):** Check Creatinine/GFR. Hydrate.
    2.  **Allergy:** Mild (hives) to Anaphylaxis. Pre-medicate with Steroids/Benadryl.
    3.  **Metformin:** Risk of **Lactic Acidosis**. Discontinue for 48 hours.

---

## 2. Magnetic Resonance Imaging (MRI) (Slides 19-27)
### Mechanism
*   Uses strong magnetic fields to align protons. **No Ionizing Radiation.**
*   **Sequences:**
    *   **T1:** Fat is bright (Anatomy). Good for structure.
    *   **T2:** Water/CSF is bright (Pathology). Good for Edema.
    *   **Diffusion Weighted Imaging (DWI):** Most sensitive for **Acute Ischemic Stroke** (shows cytotoxic edema within minutes).

### Clinical Indications
*   **Soft Tissue Pathology:** Superior resolution for brain parenchyma.
*   **Tumors, Multiple Sclerosis (Plaques), Infections.**
*   **Posterior Fossa/Brainstem:** CT has bone artifact here; MRI does not.

### MRI Contrast (Gadolinium)
*   **Risk:** **Nephrogenic Systemic Fibrosis (NSF)**.
    *   Rare but serious fibrosis of skin/organs.
    *   **Contraindicated** if GFR < 30 (Severe Renal Failure).

### Summary: CT vs. MRI

| Feature | CT | MRI |
| :--- | :--- | :--- |
| **Speed** | Fast (< 1 min) | Slow (30-45 mins) |
| **Cost** | Cheaper | Expensive |
| **Radiation** | Yes (X-ray) | No |
| **Bone** | Excellent | Poor |
| **Soft Tissue** | Fair | Excellent |
| **Contraindications** | Pregnancy (relative) | **Metal Implants** (Pacemakers) |

---

## 3. Vascular Imaging (Slides 28-38)
### Carotid Duplex Ultrasound
*   **Indication:** Screening for **Carotid Artery Stenosis** (bruit, TIA).
*   **Pros:** Non-invasive, No radiation, Portable.
*   **Cons:** Operator dependent.

### Conventional Angiography (Digital Subtraction Angiography - DSA)
*   **Gold Standard** for vascular pathology.
*   **Procedure:** Catheter inserted (femoral/radial) -> dye injected directly into vessels.
*   **Usage:**
    *   **Diagnostic:** Aneurysms, AVMs, Vasculitis.
    *   **Therapeutic:** Coiling aneurysms, Thrombectomy (clot removal).
*   **Risks:** Invasive stroke risk (1%), access site bleeding.

---

## 4. Clinical Correlates: Intracranial Hemorrhages (Slides 47-53)

:::correlate
**Epidural Hematoma**
*   **Vessel:** Rupture of **Middle Meningeal Artery (MMA)** (branch of Maxillary).
*   **Cause:** Trauma to **Pterion** (Temple). Rarely crosses sutures.
*   ** CT Appearance:** **Lens-shaped (Biconvex)** hyperdensity.
*   **Clinical:** "Lucid Interval" (Knocked out -> Fine -> Rapid Decline/Death).
:::

:::correlate
**Subdural Hematoma**
*   **Vessel:** Rupture of **Bridging Veins**.
*   **Cause:** Shearing forces (falls in elderly, alcoholics, shaken baby).
*   **CT Appearance:** **Crescent-shaped** hyperdensity. Crosses sutures.
*   **Clinical:** Gradual onset (Chronic) or Acute.
:::

:::correlate
**Subarachnoid Hemorrhage (SAH)**
*   **Vessel:** Ruptured **Berry Aneurysm** (Circle of Willis) or Trauma.
*   **CT Appearance:** Hyperdensity in **Sulci and Cisterns** (Starburst).
*   **Clinical:** **"Thunderclap Headache"** ("Worst headache of my life"), Meningismus.
:::

---

## 5. Enhancement Patterns (Slide 15)
*   **Ring-Enhancing Lesion:** Central necrosis with peripheral enhancement.
    *   **Differential:** **M.A.G.I.C. D.R.**
    *   **R**adiation necrosis
`,
    pearls: [
        {
            "title": "Code Stroke Imaging",
            "content": "**Non-contrast CT** is the first-line radiologic intervention for suspected stroke to rule out hemorrhage."
        },
        {
            "title": "CT Density Rule",
            "content": "**Hyperdense (White)** = Bone, **Acute Blood**, Calcification.\n**Hypodense (Black)** = Air, Fat, Water, CSF."
        },
        {
            "title": "Metformin & Contrast",
            "content": "Metformin must be withheld for **48 hours** after iodinated contrast administration to prevent **Lactic Acidosis**."
        },
        {
            "title": "MRI Safety",
            "content": "Strong magnetic fields can dislodge ferromagnetic objects. **Pacemakers** and metallic implants are absolute contraindications."
        },
        {
            "title": "Gadolinium & Renal Failure",
            "content": "Avoid Gadolinium in patients with GFR < 30 due to the risk of **Nephrogenic Systemic Fibrosis (NSF)**."
        },
        {
            "title": "Ring-Enhancing Lesion",
            "content": "Classic Differential (MAGIC DR): **Metastasis**, **Abscess**, Glioblastoma, Infarct, Contusion, Demyelination, Radiation."
        }
    ],
    questions: [
        {
            question: "**1. A 65-year-old male presents to the ER with sudden onset right-sided weakness and aphasia starting 30 minutes ago. What is the most appropriate INITIAL imaging modality?**",
            options: [
                "Non-contrast CT Head",
                "MRI Brain with Gadolinium",
                "Carotid Ultrasound",
                "Conventional Angiography",
                "Lumbar Puncture"
            ],
            correctAnswer: 0,
            rationale: "From Slide 48: **Non-contrast CT** is the first-line study for suspected stroke ('Code Stroke'). It is fast (<30s) and rules out **Hemorrhage**. If no blood is seen, the patient may be a candidate for tPA. MRI takes too long for the initial decision."
        },
        {
            question: "**2. A diabetic patient taking Metformin is scheduled for a CT scan with IV contrast. What is the recommended management regarding their medication?**",
            options: [
                "Take Metformin as usual",
                "Discontinue Metformin for 48 hours BEFORE the scan",
                "Discontinue Metformin for 48 hours AFTER the scan",
                "Double the dose of Metformin",
                "Replace Metformin with Insulin permanently"
            ],
            correctAnswer: 2,
            rationale: "From Slide 46/Slide 134: Metformin must be discontinued for **48 hours (after)** contrast administration (or before in elective cases) to prevent the risk of **Lactic Acidosis** if contrast-induced nephropathy occurs."
        },
        {
            question: "**3. Which of the following is an absolute contraindication for an MRI of the brain?**",
            options: [
                "Pregnancy (1st trimester)",
                "Shellfish Allergy",
                "Cardiac Pacemaker (Non-compatible)",
                "Renal Failure (GFR < 60)",
                "Claustrophobia"
            ],
            correctAnswer: 2,
            rationale: "From Slide 23/Slide 57: **Metallic Implants** like older Pacemakers are an absolute contraindication due to the strong magnetic field. Allergy is an issue for Contrast, not the MRI itself. Renal failure is an issue for Gadolinium, not the MRI itself."
        },
        {
            question: "**4. A patient with severe renal failure (GFR < 30) requires neuroimaging. You specifically avoid Gadolinium-based contrast due to the risk of which condition?**",
            options: [
                "Anaphylaxis",
                "Lactic Acidosis",
                "Nephrogenic Systemic Fibrosis (NSF)",
                "Acute Tubular Necrosis",
                "Stevens-Johnson Syndrome"
            ],
            correctAnswer: 2,
            rationale: "From Slide 27: Gadolinium in patients with GFR < 30 is associated with **Nephrogenic Systemic Fibrosis (NSF)**, a rare but serious scleroderma-like fibrosing disease."
        },
        {
            question: "**5. 'Ring- Enhancing Lesion' on a contrast CT or MRI is classically associated with which of the following pathologies?**",
            options: [
                "Multiple Sclerosis",
                "Brain Abscess",
                "Ischemic Stroke (Acute)",
                "Meningioma",
                "Subdural Hematoma"
            ],
            correctAnswer: 1,
            rationale: "From Slide 15: The classic differential for a Ring-Enhancing Lesion is **Abscess** (or Glioblastoma/Metastasis). Meningiomas typically show diffuse, homogeneous enhancement (dural tail)."
        }
    ],
    flashcards: [
        { "front": "First-line imaging for acute stroke?", "back": "Non-contrast CT Head", "tag": "Radiology" },
        { "front": "What does hyperdense (white) material on CT usually represent?", "back": "Bone or Acute Blood", "tag": "Radiology" },
        { "front": "Risk of Gadolinium in renal failure?", "back": "Nephrogenic Systemic Fibrosis (NSF)", "tag": "Pathology" },
        { "front": "Classic appearance of Abscess on contrast MRI?", "back": "Ring-Enhancing Lesion", "tag": "Radiology" },
        { "front": "Contraindication for MRI?", "back": "Metal Implants (Pacemaker)", "tag": "Safety" },
        { "front": "Best modality for Acute Ischemic Stroke (most sensitive)?", "back": "Diffusion Weighted MRI (DWI)", "tag": "Radiology" },
        { "front": "Metformin management with Contrast?", "back": "Hold for 48 hours (Risk of Lactic Acidosis)", "tag": "Pharm" },
        { "front": "Appearance of Meningioma with contrast?", "back": "Diffuse enhancement + Dural Tail", "tag": "Radiology" },
        { "front": "Gold standard for Aneurysm/AVM?", "back": "Conventional Angiography (DSA)", "tag": "Radiology" },
        { "front": "Mechanism of CT?", "back": "X-ray attenuation (Hounsfield Units)", "tag": "Physics" }
    ],
    mindmap: `
## Neuroimaging
### CT Scan
*   **Physics**: X-ray (Attenuation)
*   **Uses**: **Acute Hemorrhage**, Bone, Trauma
*   **Contrast**: Iodine (Risk: Allergy, Kidney)
### MRI
*   **Physics**: Magnets (T1/T2)
*   **Uses**: **Ischemia (DWI)**, Tumors, MS
*   **Contrast**: Gadolinium (Risk: NSF)
*   **Contra**: Metal (Pacemaker)
### Angiography
*   **DSA**: Gold Standard (Vascular)
    *   Therapeutic (Coiling)
*   **Ultrasound**: Carotid Stenosis screening
### Pathology Signs
*   **Ring Enhancement**: Abscess, GBM
*   **Hyperdense CT**: Acute Blood
`
};

if (typeof window !== 'undefined') {
    window.L5_CONTENT = L5_CONTENT;
}
