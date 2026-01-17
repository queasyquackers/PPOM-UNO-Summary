export const L44_CONTENT = {
    id: "l44",
    summary: `
# Lecture 44: Introduction to Ophthalmology

**Lecturer:** A. Nattis, D.O.
**Session:** Lecture 44

## 1. The Red Eye
*   **Conjunctivitis:**
    *   *Viral (Pink Eye):* **Watery** discharge. Adenovirus. Highly contagious.
    *   *Bacterial:* **Purulent** (pus) discharge. "Glued shut" in AM.
    *   *Allergic:* **Itching** (Pruritus). Bilateral.
*   **Acute Angle Closure Glaucoma:**
    *   *Presentation:* Severe eye pain, Headache, Nausea/Vomiting, **Haloes around lights**.
    *   *Exam:* **Mid-dilated, fixed pupil**. Cloudy cornea. High IOP. **Emergency**.
*   **Uveitis (Iritis):**
    *   *Presentation:* Deep pain, **Photophobia** (Light sensitivity), Redness.
    *   *Exam:* **Cells and Flare** in anterior chamber. Irregular pupil (Synechiae).
    *   *Association:* Autoimmune (HLA-B27, Sarcoidosis).
*   **Scleritis:**
    *   *Presentation:* Deep, "boring" pain. Wakes patient at night.
    *   *Association:* Rheumatoid Arthritis.

## 2. Neuro-Ophthalmology (Pupils)
*   **Horner's Syndrome:**
    *   *Triad:* **Ptosis** (Droopy lid), **Miosis** (Small pupil), **Anhidrosis** (No sweat).
    *   *Cause:* Sympathetic pathway lesion (Pancoast tumor, Carotid dissection).
*   **CN III Palsy:**
    *   *Presentation:* Eye is **"Down and Out"**. Ptosis.
    *   *Pupil:* If **Dilated** ("Blown"), it's a **PCom Aneurysm** (Surgical Emergency). If pupil spared, it's Ischemic (Diabetes).
*   **Relative Afferent Pupillary Defect (RAPD) / Marcus Gunn Pupil:**
    *   *Test:* Swinging Flashlight Test.
    *   *Result:* Pupil appears to **Dilate** when light is swung to the bad eye (because it senses *less* light than the good eye).
    *   *Cause:* Optic Nerve lesion (Optic Neuritis).
*   **Argyll Robertson Pupil:**
    *   *Sign:* Accommodates but does **not** react to light ("Prostitute's Pupil").
    *   *Cause:* Neurosyphilis.

## 3. Retina & Optic Nerve
*   **Retinal Detachment:**
    *   *Symptoms:* **Flashes and Floaters**. "Curtain coming down" over vision.
    *   *Tx:* Surgical Emergency.
*   **Central Retinal Artery Occlusion (CRAO):**
    *   *Sign:* **Cherry Red Spot** on macula. Pale retina. Sudden painless vision loss.
    *   *Cause:* Embolus (Stroke of the eye).
*   **Central Retinal Vein Occlusion (CRVO):**
    *   *Sign:* **"Blood and Thunder"** (Diffuse hemorrhages).
*   **Optic Neuritis:**
    *   *Sign:* **Painful** vision loss. RAPD (+). Associated with **MS**.
*   **Giant Cell Arteritis (Temporal Arteritis):**
    *   *Sign:* Ischemic Optic Neuropathy (AION). Jaw claudication. Scalp tenderness. high ESR.
    *   *Tx:* **High Dose Steroids** immediately to save the other eye.

`,
    pearls: [
        {
            title: "Horner's vs CN3 Palsy",
            content: "**Horner's:** Pupil is **Small** (Miosis). Ptosis is mild.\\n**CN3 Palsy:** Pupil is **Large** (Dilated). Ptosis is severe (Eye shut)."
        },
        {
            title: "The Painful Red Eye",
            content: "Sudden pain + Haloes + Hard eye = **Acute Glaucoma**.\\nPhotophobia + Autoimmune Hx = **Uveitis**.\\nContact Lens + Sleeping in them = **Corneal Ulcer** (Pseudomonas)."
        },
        {
            title: "Retinal Detachment Warning",
            content: "New onset **Flashes** and **Floaters** is a Retinal Detachment until proven otherwise."
        },
        {
            title: "Papilledema",
            content: "Bilateral Optic Disc Swelling due to increased Intracranial Pressure. In an obese young female, think **Pseudotumor Cerebri** (IIH)."
        },
        {
            title: "Hutchinson's Sign",
            content: "Shingles vesicle on the **tip of the nose** predicts ocular involvement (Herpes Zoster Ophthalmicus)."
        }
    ],
    questions: [
        {
            question: "A 65-year-old male presents with sudden, painless loss of vision in his right eye. Fundoscopy reveals a pale retina with a cherry-red spot at the fovea. What is the most likely diagnosis?",
            options: [
                "Central Retinal Vein Occlusion",
                "Retinal Detachment",
                "Central Retinal Artery Occlusion",
                "Acute Angle Closure Glaucoma",
                "Optic Neuritis"
            ],
            correctAnswer: 2,
            rationale: "**Central Retinal Artery Occlusion (CRAO)** presents with a pale retina (edema) and a **Cherry Red Spot** (thin fovea showing choroid). It is an embolic event."
        },
        {
            question: "A patient presents with a painful red eye, nausea, and halos around lights. The pupil is mid-dilated and non-reactive. What is the immediate concern?",
            options: [
                "Viral Conjunctivitis",
                "Acute Angle Closure Glaucoma",
                "Uveitis",
                "Scleritis",
                "Corneal Abrasion"
            ],
            correctAnswer: 1,
            rationale: "**Acute Angle Closure Glaucoma** is an ocular emergency characterized by high pressure, pain, halos, and a fixed mid-dilated pupil."
        },
        {
            question: "Which finding is part of the classic triad of Horner's Syndrome?",
            options: [
                "Mydriasis (Dilated Pupil)",
                "Exophthalmos (Bulging Eye)",
                "Anhidrosis (Lack of sweating)",
                "Diplopia (Double vision)",
                "Hyperhidrosis (Excess sweating)"
            ],
            correctAnswer: 2,
            rationale: "**Horner's Triad:** Ptosis, Miosis, **Anhidrosis** (on the ipsilateral face)."
        },
        {
            question: "Does the pupil in a CN III palsy due to a PCom aneurysm typically present as dilated or constricted?",
            options: [
                "Constricted (Miotic)",
                "Dilated (Mydriatic)",
                "Normal",
                "Irregular",
                "Pear-shaped"
            ],
            correctAnswer: 1,
            rationale: "Parasympathetic fibers run on the *outside* of CN III. Compressive lesions (like an **PCom Aneurysm**) compress these fibers first, causing a **Dilated** pupil."
        },
        {
            question: "A patient with MS presents with pain on eye movement and decreased color vision. Swinging flashlight test shows a Relative Afferent Pupillary Defect (RAPD). Diagnosis?",
            options: [
                "Papilledema",
                "Optic Neuritis",
                "Glaucoma",
                "Cataract",
                "Macular Degeneration"
            ],
            correctAnswer: 1,
            rationale: "**Optic Neuritis** is inflammation of the optic nerve, common in MS. It causes painful vision loss and an **RAPD**."
        }
    ],
    flashcards: [
        {
            front: "Horner's Syndrome Triad",
            back: "Ptosis, Miosis, Anhidrosis",
            tag: "Ophthalmology"
        },
        {
            front: "Acute Angle Closure Glaucoma Symptoms",
            back: "Pain, Haloes, Nausea, Fixed Mid-dilated Pupil",
            tag: "Ophthalmology"
        },
        {
            front: "Cherry Red Spot Diagnosis",
            back: "Central Retinal Artery Occlusion (CRAO)",
            tag: "Ophthalmology"
        },
        {
            front: "Blood and Thunder Fundus",
            back: "Central Retinal Vein Occlusion (CRVO)",
            tag: "Ophthalmology"
        },
        {
            front: "Retinal Detachment Symptoms",
            back: "Flashes, Floaters, Curtain falling",
            tag: "Ophthalmology"
        },
        {
            front: "CN3 Palsy Appearance",
            back: "Down and Out",
            tag: "Ophthalmology"
        },
        {
            front: "Painful Vision Loss + MS",
            back: "Optic Neuritis",
            tag: "Ophthalmology"
        },
        {
            front: "Painless Vision Loss + Jaw Claudication",
            back: "Giant Cell Arteritis (AION)",
            tag: "Ophthalmology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Ophthalmology > Red Eye",
        alternatives: [
            { resource: "FirstAid", chapter: "Ophthalmology" }
        ]
    },
    mindmap: `
## Ophthalmology

### Red Eye
*   **Conjunctivitis**: Viral (Watery), Bacterial (Pus), Allergic (Itch).
*   **Glaucoma**: Pain, Haloes, Fixed Pupil. EMERGENCY.
*   **Uveitis**: Photophobia, Autoimmune.

### Vision Loss
*   **Painful**: Optic Neuritis (MS).
*   **Painless**:
    *   **CRAO**: Cherry Red Spot.
    *   **CRVO**: Blood & Thunder.
    *   **Detachment**: Flashes/Floaters.
    *   **AION**: Giant Cell Arteritis.

### Pupils
*   **Horner's**: Ptosis, Miosis, No sweat.
*   **CN3 Palsy**: Down & Out, Dilated (Aneurysm).
*   **RAPD**: Optic Nerve lesion.
\`
};
