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

## 1. CT Scan (Computed Tomography)
*   **Mechanism:** X-ray beams rotating around patient. Measures **Attenuation** (density) in **Hounsfield Units (HU)**.
    *   **Bone/Blood:** Hyperdense (White).
    *   **Air/Fat:** Hypodense (Black).
*   **Indications:**
    *   **Acute Hemorrhage (Trauma/Stroke):** First-line because it's FAST (<30s). Blood is white (hyperdense) in acute phase.
    *   **Bone pathology:** Fractures.
*   **Disadvantages:** ionizing Radiation (Avoid in pregnancy/children).
*   **Contrast (Iodine-based):**
    *   **Risks:**
        1.  **Allergy:** Pre-treat with Benadryl/Prednisone.
        2.  **Contrast-Induced Nephropathy (CIN):** Check Creatinine (>1.5 is risk).
        3.  **Metformin:** Stop 48hrs prior (Risk of Lactic Acidosis).

## 2. MRI (Magnetic Resonance Imaging)
*   **Mechanism:** Magnetic fields align protons. No radiation.
*   **Sequences:**
    *   **T1:** Fat is bright. Good for anatomy.
    *   **T2:** Water/CSF is bright. Good for **Pathology** (Edema/Inflammation).
    *   **Diffusion Weighted (DWI):** Gold standard for **Acute Ischemic Stroke** (detects cytotoxic edema within minutes).
*   **Indications:**
    *   Soft tissue pathology (Tumors, Multiple Sclerosis).
    *   Brainstem/Posterior Fossa lesions (CT has artifact here).
*   **Disadvantages:** Slow, Expensive, Claustrophobia, **Metal Implants** (Pacemakers contraindicated).
*   **Contrast (Gadolinium):**
    *   **Risk:** **Nephrogenic Systemic Fibrosis (NSF)** in patients with renal failure (GFR < 30).

## 3. Enhancement Patterns (Slide 14-15)
*   **Ring Enhancement:**
    *   **Abscess:** "Ring-enhancing lesion".
    *   **Glioblastoma Multiforme (GBM).**
    *   *Mnemonic: MAGIC DR* (Metastasis, Abscess, Glioblastoma, Infarct, Contusion, Demyelination, Radiation).
*   **Meningeal Enhancement:** Meningitis / Neurosarcoidosis.

## 4. Angiography & Ultrasound
*   **Carotid Duplex Ultrasound:**
    *   Screening for **Carotid Stenosis**.
    *   Non-invasive, no radiation.
*   **Conventional Angiography (Digital Subtraction Angiography - DSA):**
    *   **Gold Standard** for vascular pathology (AVM, Aneurysm).
    *   **Diagnostic AND Therapeutic:** Can coil aneurysms or retrieve clots (Thrombectomy).
    *   *Invasive:* Risk of stroke/bleeding at puncture site.

## Summary Table
| Modality | Best For | Contraindications/Risks |
| :--- | :--- | :--- |
| **CT Head** | Acute Hemorrhage, Trauma, Bone | Radiation, Dye Allergy |
| **MRI Brain** | Acute Ischemia (DWI), Tumors, MS | Pacemakers, Metal, Claustrophobia |
| **Angiography** | Aneurysms, AVMs (Intervention) | Invasive, Kidney failure (Dye) |
`,
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
