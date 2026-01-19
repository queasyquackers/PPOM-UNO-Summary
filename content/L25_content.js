export const L25_CONTENT = {
    id: "l25",
    summary: `
# Lecture 25: Visual System - Anatomy and Pathways

**Lecturer:** G. Otazu, Ph.D.
**Session:** Lecture 25

## 1. Eye Anatomy & Physiology
*   **Glaucoma:** Increased Intraocular Pressure (IOP).
    *   *Open-Angle:* Slow drainage (Trabecular meshwork). Chronic.
    *   *Closed-Angle:* Iris blocks drainage angle. **Emergency** (Pain, Red eye, Haloes).
*   **Accommodation:**
    *   **Near Vision:** Ciliary Muscle **Contracts** → Zonules **Relax** → Lens becomes **Rounder**.
*   **Photoreceptors:**
    *   *Rods:* High sensitivity (Night), Peripheral retina.
    *   *Cones:* Color, Acuity, Concentrated in **Fovea**.

## 2. Visual Pathway & Lesions (Slide 26-30)
1.  **Optic Nerve:** Monocular blindness.
2.  **Optic Chiasm:** Decussation of **Nasal** fibers (Temporal visual field).
    *   *Lesion:* **Bitemporal Hemianopsia** (Tunnel Vision).
    *   *Cause:* **Pituitary Adenoma**.
3.  **Optic Tract:** Contralateral Homonymous Hemianopsia.
4.  **Optic Radiations:**
    *   **Meyer's Loop (Temporal Lobe):** Carries Superior field information. *Lesion:* **"Pie in the Sky"** (Contralateral Superior Quadrantanopia).
    *   **Dorsal Radiation (Parietal Lobe):** Carries Inferior field information. *Lesion:* **"Pie on the Floor"** (Contralateral Inferior Quadrantanopia).
5.  **Visual Cortex (PCA Supply):**
    *   *Lesion:* **Contralateral Homonymous Hemianopsia with Macular Sparing**.
    *   *Why Sparing?* Macula has dual blood supply (PCA + MCA).

## 3. Higher Order Processing (Slide 37-44)
*   **Dorsal Stream ("Where?"):** Projects to **Parietal Lobe**.
    *   *Function:* Motion, Spatial relationships.
    *   *Lesion (Right Parietal):* **Hemispatial Neglect** (Ignores left side of world).
*   **Ventral Stream ("What?"):** Projects to **Temporal Lobe**.
    *   *Function:* Color, Form, Faces.
    *   *Lesion:* **Prosopagnosia** (Face blindness), **Achromatopsia** (No color).

## 4. Clinical Correlates
:::correlate
**Papilledema**
*   Swelling of the optic disc due to increased **Intracranial Pressure (ICP)**.
*   The optic nerve is surrounded by meninges/CSF, so ICP is transmitted directly to it.
:::

:::correlate
**Hemispatial Neglect**
*   **Lesion:** **Right Posterior Parietal Cortex**.
*   **Presentation:** Patient ignores the **Left** side of their body/world (e.g., eats only right half of plate, draws half a clock).
*   *Note:* Left parietal lesions rarely cause neglect because the Right hemisphere attends to *both* sides, while the Left only attends to the Right.
:::
`,
    pearls: [
        {
            title: "Pituitary Adenoma Defect",
            content: "**Bitemporal Hemianopsia** ('Tunnel Vision'). Compresses Optic Chiasm."
        },
        {
            title: "Meyer's Loop Lesion",
            content: "Temporal Lobe lesion → **'Pie in the Sky'** (Contralateral Superior Quadrantanopia)."
        },
        {
            title: "Macular Sparing",
            content: "Hallmark of **PCA Stroke** (Occipital cortex). Peripheral vision lost, central (macular) vision preserved due to MCA collaterals."
        },
        {
            title: "Accommodation Mechanism",
            content: "Ciliary Muscle **Contracts** → Zonules **Relax** → Lens **Rounds**."
        },
        {
            title: "Hemispatial Neglect",
            content: "Damage to **Right Parietal Lobe** (Dorsal Stream). Patient neglects **Left** side of world."
        }
    ],
    questions: [
        {
            question: "A patient presents with 'tunnel vision', bumping into objects on their periphery. MRI reveals a mass compressing the optic chiasm. What is the diagnosis?",
            options: [
                "Right Homonymous Hemianopsia",
                "Left Homonymous Hemianopsia",
                "Bitemporal Hemianopsia",
                "Superior Quadrantanopia",
                "Macular Degeneration"
            ],
            correctAnswer: 2,
            rationale: "Compression of the **Optic Chiasm** (e.g., Pituitary Adenoma) affects crossing nasal fibers, leading to loss of both temporal visual fields (**Bitemporal Hemianopsia**)."
        },
        {
            question: "A patient who suffered a stroke can see perfectly well but cannot recognize the faces of his family members. Where is the lesion located?",
            options: [
                "Primary Visual Cortex (V1)",
                "Parietal Lobe (Dorsal Stream)",
                "Temporal Lobe (Ventral Stream)",
                "Frontal Eye Fields",
                "Cerebellum"
            ],
            correctAnswer: 2,
            rationale: "**Prosopagnosia** (face blindness) results from damage to the **Ventral Stream ('What' pathway)** in the inferior temporal lobe (Fusiform Gyrus)."
        },
        {
            question: "To view a near object (accommodation), which of the following occurs?",
            options: [
                "Ciliary muscle relaxes, Zonules tighten, Lens flattens",
                "Ciliary muscle contracts, Zonules tighten, Lens rounds",
                "Ciliary muscle contracts, Zonules relax, Lens rounds",
                "Ciliary muscle relaxes, Zonules relax, Lens flattens",
                "Pupil dilates"
            ],
            correctAnswer: 2,
            rationale: "For near vision: Ciliary muscle **contracts** (moves closer to lens), causing zonule fibers to **relax** (slacken), allowing the lens to spring into a **rounder** shape."
        },
        {
            question: "A patient has a 'Pie in the Sky' visual field defect (Right Superior Quadrantanopia). Where is the lesion?",
            options: [
                "Right Parietal Lobe",
                "Left Parietal Lobe",
                "Right Temporal Lobe (Meyer's Loop)",
                "Left Temporal Lobe (Meyer's Loop)",
                "Optic Chiasm"
            ],
            correctAnswer: 3,
            rationale: "A **Right** visual field defect implies a **Left** sided lesion. 'Pie in the Sky' (Superior) implies **Meyer's Loop** (Temporal Lobe). So: **Left Temporal Lobe**."
        },
        {
            question: "Which finding distinguishes an Occipital Lobe stroke (PCA territory) from an Optic Tract lesion?",
            options: [
                "Homonymous Hemianopsia",
                "Macular Sparing",
                "Pupillary Light Reflex defect",
                "Color blindness",
                "Bitemporal loss"
            ],
            correctAnswer: 1,
            rationale: "**Macular Sparing** is characteristic of cortical (Occipital/PCA) strokes because the macula receives collateral blood supply from the MCA. Optic tract lesions do not spare the macula."
        }
    ],
    flashcards: [
        {
            front: "Visual Defect: Pituitary Adenoma",
            back: "Bitemporal Hemianopsia",
            tag: "Pathology"
        },
        {
            front: "Visual Defect: Right Optic Tract Lesion",
            back: "Left Homonymous Hemianopsia",
            tag: "Pathology"
        },
        {
            front: "Visual Defect: Left Temporal Lobe (Meyer's Loop)",
            back: "Right Superior Quadrantanopia ('Pie in the Sky')",
            tag: "Pathology"
        },
        {
            front: "Visual Defect: Right Parietal Lobe",
            back: "Left Inferior Quadrantanopia ('Pie on the Floor')",
            tag: "Pathology"
        },
        {
            front: "Dorsal Stream function",
            back: "'Where' pathway (Motion, Location) - Parietal Lobe",
            tag: "Physiology"
        },
        {
            front: "Ventral Stream function",
            back: "'What' pathway (Color, Faces, Form) - Temporal Lobe",
            tag: "Physiology"
        },
        {
            front: "Lesion causing Hemispatial Neglect",
            back: "Right Parietal Lobe",
            tag: "Pathology"
        },
        {
            front: "Lesion causing Prosopagnosia",
            back: "Inferior Temporal Lobe (Ventral Stream)",
            tag: "Pathology"
        },
        {
            front: "Papilledema indicates...",
            back: "Increased Intracranial Pressure (ICP)",
            tag: "Pathology"
        },
        {
            front: "Glaucoma type that is a medical emergency",
            back: "Closed-Angle Glaucoma",
            tag: "Pathology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Visual Pathways",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Ophthalmology" },
            { resource: "BandB", chapter: "Neurology > Vision" }
        ]
    },
    mindmap: `
## Visual System Pathology

### Visual Pathway Defects
*   **Chiasm**: Pituitary Adenoma -> Bitemporal Hemianopsia.
*   **Temporal Lobe (Meyer's Loop)**: Pie in the Sky (Sup. Quadrantanopia).
*   **Parietal Lobe**: Pie on the Floor (Inf. Quadrantanopia).
*   **Occipital Cortex (PCA)**: Homonymous Hemianopsia + **Macular Sparing**.

### Cortex Streams
*   **Dorsal (Parietal)**: "Where". Lesion: **Neglect** (Right side).
*   **Ventral (Temporal)**: "What". Lesion: **Prosopagnosia**.

### Eye Pathology
*   **Glaucoma**: High IOP. Open vs Closed (Emergency).
*   **Papilledema**: High ICP.
\`
};
