const L4_CONTENT = {
    id: 'l4',
    title: 'Lecture #4: Blood Supply of the CNS',
    lecturer: 'J. Xie, Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #4',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Spinal Cord Anatomy'
    },
    prev: 'l3',
    next: 'l5',
    pdf: 'pdfs/Lecture # 4. J. Xie, Ph.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #4_ Overview_ Blood Supply of the CNS Faculty_ J. Xie, Ph.D. & Vincy Mathew, Academic Medicine Scholar.srt',
    summary: `
# Lecture #4: Blood Supply of the CNS

**Lecturer:** J. Xie, Ph.D.
**Session:** Neuroanatomy

## 1. Overview of Blood Supply
*   **Brain Mass vs. Blood Flow:** Brain is 2% of body weight but uses **20% of O2/Glucose**.
*   **Two Major Systems:**
    1.  **Anterior Circulation (80%):** Internal Carotid Arteries (ICA). Supplies Telencephalon/Diencephalon.
    2.  **Posterior Circulation (20%):** Vertebral Arteries (VA). Supplies Brainstem, Cerebellum, Occipital Lobe.

---

## 2. Internal Carotid Artery (Anterior Circulation) (OPAM)
Enters skull via **Carotid Canal**, passes through **Cavernous Sinus**.
Branches (**OPAM**):
1.  **Ophthalmic Artery:** First branch. Supplies eye. Blockage -> *Amaurosis Fugax* (Transient painless vision loss - "Curtain coming down").
2.  **Posterior Communicating Artery (PCom):** Connects Anterior to Posterior circulation. Common site for **Berry Aneurysms** (CN III palsy).
3.  **Anterior Cerebral Artery (ACA):**
    *   Supplies **Medial** Frontal/Parietal lobes.
    *   **Homunculus:** **Leg/Foot**.
    *   **Stroke:** Contralateral **Leg weakness/sensory loss**.
4.  **Middle Cerebral Artery (MCA):**
    *   Supplies **Lateral** Frontal/Temporal/Parietal lobes.
    *   **Homunculus:** **Face/Arm**.
    *   **Stroke:** Contralateral **Face/Arm weakness**, **Aphasia** (if dominant hemisphere - Broca's/Wernicke's).
    *   **Lenticulostriate Arteries:** Deep branches to Basal Ganglia. Prone to **Charcot-Bouchard Aneurysms** (Hypertension) -> Lacunar Strokes.

---

## 3. Vertebrobasilar System (Posterior Circulation)
**Vertebral Arteries** fuse to form the **Basilar Artery**.
*   **PICA (Posterior Inferior Cerebellar Artery):** From Vertebral. Supplies Lateral Medulla. (Wallenberg Syndrome).
*   **AICA (Anterior Inferior Cerebellar Artery):** From Basilar. Supplies Lateral Pons.
*   **SCA (Superior Cerebellar Artery):** From Basilar.
*   **PCA (Posterior Cerebral Artery):** Terminal branch of Basilar.
    *   Supplies **Occipital Lobe**.
    *   **Stroke:** Contralateral **Homonymous Hemianopsia** (Visual field cut) with *Macular Sparing*.
    *   **CN III Rule:** CN III passes between SCA and PCA. Aneurysm here -> CN III Palsy ("Down and Out" eye).

---

## 4. Circle of Willis & Watershed Zones (Slide 29)
*   **Circle of Willis:** Anastomotic ring providing collateral flow. Complete in only ~30-50% of people.
    *   Components: Ant. Communicating (ACom), ACAs, ICAs, PComs, PCAs.
*   **Watershed Zones:** Border zones between vascular territories (e.g., ACA-MCA border). Prone to ischemia during **Global Hypoperfusion** (Sepsis, Cardiac Arrest) -> "Man in a Barrel" syndrome.

---

## 5. Venous Drainage (Slide 33-42)
*   **Dural Venous Sinuses:** Valveless channels between dural layers.
    *   **Superior Sagittal Sinus:** Drains superficial veins. Absorption of CSF via Arachnoid Granulations.
    *   **Cavernous Sinus:** Contains ICA and CN III, IV, V1, V2, VI. Infection here causes multiple nerve palsies.
*   **Cerebral Venous Thrombosis (CVT):**
    *   **Risk Factors:** Pregnancy, OCPs, Hypercoagulability ("Virchow's Triad").
    *   **Signs:** Headache, Seizures, Papilledema.

`,
    questions: [
        {
            question: "**1. A 65-year-old man presents with sudden difficulty understanding language. He speaks fluently but uses nonsensical words ('Word Salad'). MRI shows an ischemic stroke. Which artery is most likely involved and which area is affected?**",
            options: [
                "ACA - Broca's Area",
                "MCA - Broca's Area",
                "MCA - Wernicke's Area",
                "PCA - Occipital Lobe",
                "PICA - Lateral Medulla"
            ],
            correctAnswer: 2,
            rationale: "From Slide 46: **Wernicke's Area** (comprehension) is in the Superior Temporal Gyrus, supplied by the **MCA**. Damage leads to Receptive Aphasia (Fluent but meaningless). Broca's (Expressive) is also MCA but frontal."
        },
        {
            question: "**2. A patient experiences a 'curtain coming down' over their right eye, which resolves after a few minutes (Amaurosis Fugax). This symptom is a warning sign for a blockage in which artery?**",
            options: [
                "Ophthalmic Artery (Branch of ICA)",
                "Middle Cerebral Artery",
                "Posterior Cerebral Artery",
                "Basilar Artery",
                "External Carotid Artery"
            ],
            correctAnswer: 0,
            rationale: "From Slide 14: The **Ophthalmic Artery** is the first branch of the Intradural ICA. Transient occlusion causes temporary monocular blindness (Amaurosis Fugax), a TIA warning sign."
        },
        {
            question: "**3. A patient with chronic hypertension presents with a pure motor stroke. MRI reveals a small 'lacunar' infarct in the internal capsule. Which small arteries are likely responsible?**",
            options: [
                "Callosomarginal Arteries",
                "Lenticulostriate Arteries",
                "Anterior Choroidal Arteries",
                "Posterior Communicating Arteries",
                "Pontine Arteries"
            ],
            correctAnswer: 1,
            rationale: "From Slide 19: **Lenticulostriate Arteries** (deep branches of MCA) supply the Basal Ganglia and Internal Capsule. They are prone to lipohyalinosis and Charcot-Bouchard aneurysms in hypertension."
        },
        {
            question: "**4. In the Circle of Willis, which artery connects the Anterior Circulation (ICA system) to the Posterior Circulation (Vertebrobasilar system)?**",
            options: [
                "Anterior Communicating Artery (ACom)",
                "Posterior Communicating Artery (PCom)",
                "Anterior Choroidal Artery",
                "Posterior Inferior Cerebellar Artery",
                "Basilar Artery"
            ],
            correctAnswer: 1,
            rationale: "The **Posterior Communicating Artery (PCom)** connects the ICA to the PCA, linking the two major circulatory systems."
        },
        {
            question: "**5. Contralateral leg weakness and sensory loss is most characteristic of a stroke in which vascular territory?**",
            options: [
                "MCA",
                "ACA",
                "PCA",
                "PICA",
                "AICA"
            ],
            correctAnswer: 1,
            rationale: "From Slide 20: The **Anterior Cerebral Artery (ACA)** supplies the medial surface of the cortex, where the **Leg/Foot** area of the motor/sensory homunculus is located."
        }
    ],
    flashcards: [
        { "front": "Branches of Intradural ICA?", "back": "OPAM: Ophthalmic, PCom, ACA, MCA", "tag": "Anatomy" },
        { "front": "Which artery supplies the visual cortex?", "back": "Posterior Cerebral Artery (PCA)", "tag": "Anatomy" },
        { "front": "Clinical sign of ACA stroke?", "back": "Contralateral Leg Weakness", "tag": "Clinical" },
        { "front": "Clinical sign of MCA stroke?", "back": "Contralateral Face/Arm Weakness + Aphasia", "tag": "Clinical" },
        { "front": "Artery passing through Cavernous Sinus?", "back": "Internal Carotid Artery (ICA)", "tag": "Anatomy" },
        { "front": "Transient monocular vision loss ('Curtain')?", "back": "Amaurosis Fugax (Ophthalmic Artery ischemia)", "tag": "Clinical" },
        { "front": "Common site for Berry Aneurysm causing CN III palsy?", "back": "Posterior Communicating Artery (PCom)", "tag": "Pathology" },
        { "front": "Vessels prone to rupture in hypertension (Basal Ganglia)?", "back": "Lenticulostriate Arteries (Charcot-Bouchard)", "tag": "Pathology" },
        { "front": "What nerve passes between SCA and PCA?", "back": "CN III (Oculomotor)", "tag": "Anatomy" },
        { "front": "Risk factors for Cerebral Venous Thrombosis (CVT)?", "back": "Pregnancy, OCPs, Hypercoagulability", "tag": "Clinical" }
    ],
    mindmap: `
## CNS Blood Supply
### Anterior Circ (ICA)
*   **Ophthalmic**: Eye (Amaurosis Fugax)
*   **ACA**: Medial Brain (Legs)
*   **MCA**: Lateral Brain (Face/Arms + Speech)
    *   Lenticulostriate (Lacunar stroke)
*   **PCom**: Connects to Posterior
### Posterior Circ (Vert-Basilar)
*   Vertebral A. -> **PICA**
*   Basilar A. -> **AICA**, **SCA**, **PCA**
*   **PCA**: Occipital (Vision)
### Circle of Willis
*   ACom (Connects ACAs)
*   PCom (Connects ICA-PCA)
### Venous
*   Sup. Sagittal Sinus
*   Cavernous Sinus (CN III, IV, V, VI)
*   Transverse/Sigmoid -> IJV
`
};

if (typeof window !== 'undefined') {
    window.L4_CONTENT = L4_CONTENT;
}
