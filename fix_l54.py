import json
import os

l54_data = {
    "id": "l54",
    "title": "Lecture 54: Aphasia and Common Strokes",
    "module": "Neurology",
    "summary": r"""# Lecture 54: Aphasia and Common Strokes

**Lecturer:** A. Leder, D.O.
**Session:** Lecture 54

## 1. Aphasia Syndromes
**Story Mode:**
Aphasia is a disorder of language, not speech (interruption of the "mind-to-mouth" connection). To diagnose the type, you simply need to check three boxes: **Fluency** (Is speech smooth or broken?), **Comprehension** (Do they understand you?), and **Repetition** (Can they say "No ifs, ands, or buts"?).

### 1.1 The "Perisylvian" Aphasias (Repetition is Impaired)
These occur around the Sylvian fissure, where the main language arc resides.
*   **Broca's Aphasia (Expressive):**
    *   **Lesion:** Left **Inferior Frontal Gyrus**. usually superior division of **Left MCA**.
    *   **Features:**
        *   **Non-Fluent:** Speech is broken, effortful, telegraphic ("Car... go... store").
        *   **Comprehension:** **Intact** (They know what they want to say and get frustrated).
        *   **Repetition:** Impaired.
    *   **Associated:** Contralateral (Right) face/arm weakness.
*   **Wernicke's Aphasia (Receptive):**
    *   **Lesion:** Left **Superior Temporal Gyrus**. Inferior division of **Left MCA**.
    *   **Features:**
        *   **Fluent:** Speech is voluminous but meaningless ("Word Salad").
        *   **Comprehension:** **Impaired** (They don't realize they aren't making sense).
        *   **Repetition:** Impaired.
    *   **Associated:** Right Superior Quadrantanopia ("Pie in the sky").
*   **Global Aphasia:**
    *   **Lesion:** Large Left MCA infarct knocking out **both** Broca's and Wernicke's areas.
    *   **Features:** **All Imapired** (Non-fluent, No comprehension, No repetition).
*   **Conduction Aphasia:**
    *   **Lesion:** **Arcuate Fasciculus** (The bridge between Broca and Wernicke).
    *   **Features:**
        *   **Fluent** speech, **Intact** comprehension.
        *   **Repetition:** **IMPAIRED** (The connection is broken). They act like Wernicke's but *know* they are making mistakes and try to correct them.

### 1.2 The "Transcortical" Aphasias (Repetition is SPARED)
These lesions are "around" the language centers (watershed zones) but spare the core Arcuate Fasciculus loop.
*   **Transcortical Motor:** Like Broca's (Non-fluent, Good Comp) but **Repetition is Intact**. (ACA/MCA Watershed).
*   **Transcortical Sensory:** Like Wernicke's (Fluent, Poor Comp) but **Repetition is Intact**. (MCA/PCA Watershed). They may exhibit **Echolalia** (parroting back words).

---

## 2. Ischemic Stroke Syndromes by Territory

### 2.1 Anterior Cerebral Artery (ACA)
*   **Territory:** Medial surface of the brain (Leg homunculus area).
*   **Presentation:**
    *   **Contralateral Lower Extremity Weakness** (Leg > Arm).
    *   **Abulia / Akinetic Mutism:** Lack of will to move or speak (Frontal lobe damage).
    *   **Urinary Incontinence.**

### 2.2 Middle Cerebral Artery (MCA)
*   **Territory:** Lateral surface of the brain (Face/Arm homunculus area).
*   **Presentation:**
    *   **Contralateral Face and Arm Weakness** (Face/Arm > Leg).
    *   **Gaze Preference:** Eyes look **Toward** the lesion (away from the weakness).
    *   **Dominant (Left) Hemi:** Aphasia.
    *   **Non-Dominant (Right) Hemi:** **Hemineflect** (ignoring the left side of the world).

### 2.3 Posterior Cerebral Artery (PCA)
*   **Territory:** Occipital lobe and Inferior Temporal lobe.
*   **Presentation:**
    *   **Contralateral Homonymous Hemianopsia** (Visual field cut) with **Macular Sparing**.
    *   **Alexia without Agraphia:** (Left PCA + Splenium of Corpus Callosum). Patient can **write** but cannot **read** (even what they just wrote).
    *   **Gerstmann Syndrome:** (Dominant Angular Gyrus).
        1.  Agraphia (Can't write).
        2.  Acalculia (Can't do math).
        3.  Finger Agnosia (Can't identify fingers).
        4.  Left-Right Disorientation.

### 2.4 Internal Carotid Artery (ICA)
*   **Mechanism:** Occlusion of the source pipe for both ACA and MCA.
*   **Presentation:** Combination of ACA + MCA symptoms (Dense hemiplegia face/arm/leg).
*   **Clinical Pearl:** **Amaurosis Fugax** ("Curtain coming down"). Transient monocular blindness due to embolus to the Ophthalmic artery (first branch of ICA).

### 2.5 Watershed Infarcts
*   **Mechanism:** Systemic hypoperfusion (e.g., Cardiac Arrest or severe hypotension). The areas between vascular territories (ACA-MCA or MCA-PCA borders) die first.
*   **Presentation:** **"Man-in-a-Barrel" Syndrome**.
    *   Bilateral proximal arm and weakness (Shoulders/Thighs).
    *    spares the hands and feet and face.

---

## 3. Lacunar Strokes
**Story Mode:**
These are small vessel strokes (lenticulostriate arteries) caused by **Hypertension** (lipohyalinosis). They affect deep structures (Internal Capsule, Thalamus, Pons) and have very specific, "Pure" presentations.
*   **Pure Motor:** Posterior Limb of Internal Capsule. (Contralateral weakness only).
*   **Pure Sensory:** VPL of Thalamus. (Contralateral numbness only).
*   **Dysarthria-Clumsy Hand:** Genu of Internal Capsule or Pons.
*   **Ataxic Hemiparesis:** Pons or Internal Capsule.

---

## 4. Brainstem Syndromes
**Story Mode:**
The brainstem is high-value real estate. A small stroke here causes massive problems. The rule of thumb: **Crossed Signs** (Ipsilateral Cranial Nerve deficit + Contralateral Body deficit).

### 4.1 Lateral Medullary (Wallenberg) Syndrome
*   **Vessel:** **PICA** (Posterior Inferior Cerebellar Artery) [Remember: "Don't **Pica** a horse (hoarseness)"].
*   **Key Features:**
    *   **Dysphagia / Hoarseness:** Nucleus Ambiguus (CN IX, X). Loss of Gag reflex.
    *   **Vertigo / Nystagmus:** Vestibular Nuclei.
    *   **Ipsilateral Horner's Syndrome:** Sympathetic fibers.
    *   **Ipsilateral Facial Numbness / Contralateral Body Numbness** (Pain/Temp).
    *   **Ipsilateral Ataxia.**

### 4.2 Locked-In Syndrome
*   **Vessel:** **Basilar Artery** thrombosis.
*   **Lesion:** Bilateral Ventral Pons.
*   **Presentation:**
    *   **Quadriplegia** (all motor tracts cut).
    *   **Anarthria** (cannot speak).
    *   **Consciousness is Preserved** (Reticular formation is spared).
    *   **Communication:** Vertical Eye Movements and Blinking (spared midbrain centers).

---

## 5. Hemorrhagic Strokes

| Type | Etiology | CT Appearance | Clinical Pearl |
| :--- | :--- | :--- | :--- |
| **Epidural Hematoma** | Trauma (Temporal bone fx) $\rightarrow$ **Middle Meningeal Artery** rupture. | **Lens-shaped** (Biconvex). Does **NOT** cross suture lines. | **"Talk and Die"**: Lucid interval followed by rapid deterioration. |
| **Subdural Hematoma** | Trauma (Falls/Elderly/Alcoholics) $\rightarrow$ **Bridging Veins** rupture. | **Crescent-shaped**. Crosses suture lines. | Slow onset. associated with cerebral atrophy. |
| **Subarachnoid Hemorrhage** | **Aneurysm Rupture** (Berry Aneurysm) or Trauma. | Blood in cisterns/sulci ("Starfish" pattern). | **"Worst Headache of my Life"** (Thunderclap). Risk of vasospasm days later. |

:::correlate
**Cerebral Venous Sinus Thrombosis (CVST)**
**The Story:**
A stroke that doesn't follow arterial rules. Think of this in a **Hypercoagulable** patient (Pregnancy, OCP use, Cancer, Factor V Leiden).
*   **Mechanism:** Clot in the Dural Venous Sinuses (e.g., Sagittal Sinus) prevents blood drainage $\rightarrow$ Congestion $\rightarrow$ Hemorrhage.
*   **Presentation:** Headache (High ICP), Seizures, Papilledema.
*   **Diagnosis:** **MR Venogram (MRV)** or CT Venogram.
*   **Treatment:** Anticoagulation (even if there is some hemorrhage, you must clear the clot).
:::

:::highyield
**Arterial Dissection**
*   **Patient:** Young patient with neck trauma, chiropractic manipulation, or spontaneous.
*   **Presentation:**
    *   **Neck Pain** + Headache.
    *   **Horner's Syndrome** (Ipsilateral): The sympathetic fibers run along the carotid artery. Enlargement of the artery compresses them.
    *   **TIA/Stroke symptoms** from emboli.
:::""",
    "questions": [
        {
            "question": "A 72-year-old male presents with right-sided face and arm weakness, but with relative sparing of the leg. He is also found to have gaze deviation to the left. Which vascular territory is most likely affected?",
            "options": [
                "Left Anterior Cerebral Artery (ACA)",
                "Left Middle Cerebral Artery (MCA)",
                "Right Middle Cerebral Artery (MCA)",
                "Left Posterior Cerebral Artery (PCA)",
                "Basilar Artery"
            ],
            "correctAnswer": 1,
            "rationale": "**Left MCA Stroke**. The MCA supplies the lateral surface of the cortex (Face/Arm area). Weakness is contralateral (Right). Gaze deviation is **toward** the lesion (Left), away from the hemiparesis."
        },
        {
            "question": "A patient presents with 'word salad' speech. They speak fluently and with normal rhythm, but the content is meaningless. They cannot repeat phrases or follow commands. Where is the most likely lesion?",
            "options": [
                "Left Inferior Frontal Gyrus",
                "Left Superior Temporal Gyrus",
                "Arcuate Fasciculus",
                "Left ACA Territory",
                "Bilateral Ventral Pons"
            ],
            "correctAnswer": 1,
            "rationale": "This is **Wernicke's Aphasia** (Fluent, Impaired Comprehension, Impaired Repetition). The lesion is in the **Left Superior Temporal Gyrus** (inferior division of MCA)."
        },
        {
            "question": "A patient presents with vertigo, hoarseness, and loss of gag reflex. On exam, they have left-sided facial numbness and right-sided body numbers (pain/temp). They also have a left-sided Horner's syndrome. Which vessel is occluded?",
            "options": [
                "Anterior Inferior Cerebellar Artery (AICA)",
                "Posterior Inferior Cerebellar Artery (PICA)",
                "Basilar Artery",
                "Posterior Cerebral Artery (PCA)",
                "Middle Cerebral Artery (MCA)"
            ],
            "correctAnswer": 1,
            "rationale": "This is the classic **Lateral Medullary (Wallenberg) Syndrome**. The key feature differentiating it from lateral pontine syndrome is **Hoarseness/Dysphagia** (Nucleus Ambiguus) which is supplied by the **PICA**."
        },
        {
            "question": "A 22-year-old female on oral contraceptives presents with a severe headache and seizure. CT head shows a hemorrhage in the parietal lobe, but it does not fit a typical arterial territory. What is the most appropriate next diagnostic step?",
            "options": [
                "Lumbar Puncture",
                "MR Angiogram (MRA)",
                "MR Venogram (MRV)",
                "Carotid Ultrasound",
                "Echocardiogram"
            ],
            "correctAnswer": 2,
            "rationale": "In a young, hypercoagulable patient with a headache, seizure, and atypical hemorrhage, suspect **Cerebral Venous Sinus Thrombosis (CVST)**. The diagnostic test of choice is **MR Venogram (MRV)**."
        },
        {
            "question": "A patient has a stroke that results in paralysis of the right leg with relative sparing of the face and arm. They also exhibit abulia (lack of will to move). Which artery is involved?",
            "options": [
                "Left Middle Cerebral Artery",
                "Left Anterior Cerebral Artery",
                "Right Anterior Cerebral Artery",
                "Left Posterior Cerebral Artery",
                "Anterior Choroidal Artery"
            ],
            "correctAnswer": 1,
            "rationale": "The **Anterior Cerebral Artery (ACA)** supplies the medial surface of the brain, corresponding to the **Leg** area of the motor homunculus. Damage to the **Left** ACA causes right leg weakness."
        }
    ]
}

js_content = f"window.receiveLectureContent({json.dumps(l54_data, indent=4)});"

with open("content/json/l54.file.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully generated content/json/l54.file.js")
