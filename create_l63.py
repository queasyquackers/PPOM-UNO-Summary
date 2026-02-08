import json
import os

def create_l63_file():
    summary_md = """# Lecture #63: Headache

**Lecturer:** Adam Reno, D.O.
**Session:** Lecture #63

## Introduction and Assessment (Slide 2-16)

Headaches are a massive burden on patients, leading to lost work, social isolation, and suffering. The primary goal of assessment is to **exclude urgent/emergent causes** (Secondary Headaches) and accurately diagnose benign recurrent ones (Primary Headaches). Diagnosis relies heavily on **History**—imaging is often unnecessary unless "Red Flags" are present.

### Primary vs. Secondary
- **Primary:** Benign, recurrent, the headache *is* the disease (Migraine, Tension, Cluster).
- **Secondary:** Symptom of underlying pathology (Tumor, Bleed, Infection, Giant Cell Arteritis).

### Red Flags: "SNOOP" Equivalents (Slide 55-59)
The lecturer emphasizes several "Red Flags" that demand immediate imaging/workup:
- **Sudden Onset:** "Thunderclap" or "Worst headache of my life" (Subarachnoid Hemorrhage).
- **New Onset > 50:** Giant Cell Arteritis or Tumor.
- **Systemic Signs:** Fever, Weight Loss, HIV, Cancer history.
- **Neurological Deficits:** Altered mental status, focal signs.
- **Positional:** Worse when standing (Low pressure) or laying/bending (High pressure).

## Primary Headaches

### Migraine Headache (Slide 23-35)
Migraine is a neuronal dysfunction (not just vascular). It involves **Cortical Spreading Depression** and activation of the Trigeminal-Vascular system.

#### Phases
1.  **Prodrome:** Irritability, food cravings, frequent urination (hours/days before).
2.  **Aura (20-30%):** Transient neurological deficits (Visual > Sensory > Motor). Lasts 5-60 mins.
3.  **Headache:** Unilateral, throbbing, nausea, photophobia.
4.  **Postdrome:** "Migraine Hangover" (tired, washed out).

:::correlate
Migraine Headache

- **Pathophysiology:** Cortical Spreading Depression + Trigeminal activation + CGRP release.
- **Presentation:**
    - **Unilateral** (60-70%)
    - **Throbbing/Pulsating**
    - **Aggravated by activity**
    - **Nausea/Vomiting**
    - **Photophobia/Phonophobia**
- **Diagnosis:** Clinical (5 attacks lasting 4-72h).
- **Triggers:** Stress, **Estrogen** (Menses/OCPs), Chocolate, Cheese, Sleep changes.
- **Acute Treatment:** NSAIDs, Triptans (5-HT agonists), Antiemetics (Metoclopramide).
- **Prophylaxis:** Beta-blockers (Propranolol), Topiramate, Amitriptyline, CGRP antagonists.
:::

:::highyield
**Migraine Diagnostic Criteria (Visual Mnemonic)**
**"POUND"**
- **P**ulsating
- **O**ne-day duration (4-72 hours)
- **U**nilateral
- **N**ausea/Vomiting
- **D**isabling intensity
:::

### Tension-Type Headache (Slide 37-41)
The **most common** headache type. Often associated with stress, anxiety, and depression.

:::correlate
Tension-Type Headache

- **Pathophysiology:** Pericranial muscle tenderness/sensitization.
- **Presentation:**
    - **Bilateral** ("Band-like" squeezing).
    - **Non-pulsating** (Pressing/Tightening).
    - **Mild-Moderate** intensity.
    - **NO** Nausea/Vomiting.
    - **NO** aggravation by activity.
- **Treatment:**
    - ** Episodic:** NSAIDs, Acetaminophen, OMT.
    - **Chronic (>15 days/mo):** Amitriptyline (TCA), Stress management.
:::

### Cluster Headache (Slide 42)
A Trigeminal Autonomic Cephalalgia. Severe, suicide-inducing pain.

:::correlate
Cluster Headache

- **Pathophysiology:** Hypothalamic activation.
- **Presentation:**
    - **Male > Female** (20-50s).
    - **Strictly Unilateral**, Peri-orbital ("Ice pick in eye").
    - **Autonomic Signs:** Ipsilateral Tearing, Rhinorrhea, Ptosis, Miosis, Conjunctival injection.
    - **Behavior:** Agitated, pacing (unlike Migraineurs who lie still).
    - **Timing:** Attacks occur in "clusters" (daily for weeks), often at night.
- **Acute Treatment:** **100% Oxygen** (Non-rebreather), Sumatriptan (Subcutaneous).
- **Prophylaxis:** Verapamil.
:::

## Secondary Headaches (Slide 55-59)

These encompass life-threatening conditions requiring urgent intervention.

### Subarachnoid Hemorrhage (SAH)
- **Cause:** Rupture of Saccular (Berry) Aneurysm (Circle of Willis).
- **Presentation:** **"Thunderclap Headache"** (Maximum intensity in seconds), "Worst headache of my life".
- **Workup:** **Non-contrast CT Head** (first line). If negative but suspicion high -> Lumbar Puncture (Xanthochromia).

### Meningitis / Encephalitis
- **Triad:** Headache + **Fever** + **Nuchal Rigidity** (Stiff Neck).
- **Encephalitis:** Add **Altered Mental Status** and Seizures.

### Giant Cell (Temporal) Arteritis
- **Pathophysiology:** Vasculitis of medium/large arteries (branches of External Carotid).
- **Demographics:** age > 50, Female > Male.
- **Presentation:** Unilateral temporal headache, **Jaw Claudication**, Scalp tenderness.
- **Complication:** **Blindness** (Ophthalmic artery occlusion). This is a medical emergency.
- **Workup/Tx:** Elevated **ESR/CRP**. Start **High-Dose Steroids** immediately (before biopsy confirms).

:::correlate
Giant Cell Arteritis (Temporal Arteritis)

- **Presentation:** Elderly patient (>50) with new unilateral headache, jaw pain when chewing, and tender temporal artery.
- **Risk:** Irreversible **Blindness**.
- **Management:** Start Steroids (Prednisone) **IMMEDIATELY**. Do not wait for temporal artery biopsy.
:::

### Intracranial Mass (Tumor)
- **Red Flag:** Headache that is **worse in the morning** (due to hypoventilation/increased CO2/vasodilation during sleep) or worse with **Valsalva** (coughing, bending).

### Post-Dural Puncture Headache (Lumbar Puncture Headache)
- **Cause:** CSF leak after LP or Epidural (e.g., C-section).
- **Presentation:** **Positional Headache** (Worse when standing/sitting, RELIEVED by lying flat).
- **Treatment:** Blood Patch, Caffeine.

:::highyield
**Headache Comparison Table**

| Type | Location | Quality | Duration | Associated Sx |
| :--- | :--- | :--- | :--- | :--- |
| **Migraine** | Unilateral | Throbbing | 4-72 hrs | Nausea, Photo/Phonophobia, Aura |
| **Tension** | Bilateral | Tight Band | 30m - 7d | Muscle tenderness, No Nausea |
| **Cluster** | Unilateral (Eye) | Boring/Stabbing | 15-180 min | Tearing, Rhinorrhea, Ptosis (Autonomic) |
:::

"""

    l63_data = {
        "id": "l63",
        "title": "Lecture #63: Headache",
        "lecturer": "Adam Reno, D.O.",
        "module": "Neurology",
        "session": "Lecture #63",
        "prev": "l62",
        "next": "l64",
        "pdf": "pdfs/Lecture #63. A. Reno, DO, MPH (PPT).pdf",
        "highYieldPdf": "content/L63_HighYield_Render.pdf",
        "transcript": "content/L63_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A 30-year-old male presents with severe, lancinating pain behind his right eye. He is pacing around the room and appears agitated. Exam reveals right-sided ptosis, miosis, and rhinorrhea. Treatment with 100% Oxygen provides relief. What is the diagnosis?**",
                "options": [
                    "Migraine with Aura",
                    "Tension-Type Headache",
                    "Cluster Headache",
                    "Trigeminal Neuralgia",
                    "Giant Cell Arteritis"
                ],
                "correctAnswer": 2,
                "rationale": "**Cluster Headache** presents in males with severe unilateral periorbital pain and **autonomic symptoms** (tearing, rhinorrhea, Horner's syndrome). Patients are agitated (pacing). **100% Oxygen** is the first-line abortive therapy."
            },
            {
                "question": "**2. A 72-year-old female presents with a new onset right-sided headache and pain in her jaw when chewing steak. She reports some blurring of vision in her right eye. What is the most appropriate immediate next step?**",
                "options": [
                    "Temporal Artery Biopsy",
                    "Start High-Dose Corticosteroids",
                    "Non-contrast CT Head",
                    "Prescribe Sumatriptan",
                    "Lumbar Puncture"
                ],
                "correctAnswer": 1,
                "rationale": "This patient has symptoms of **Giant Cell (Temporal) Arteritis** (Age >50, Headache, Jaw Claudication, Visual changes). The risk of permanent blindness is high. You must **Start Corticosteroids immediately** to prevent vision loss; do not delay treatment for the biopsy."
            },
            {
                "question": "**3. A 25-year-old female complains of a 'tight band' squeezing her head bilaterally. The pain is mild-moderate and does not worsen with routine physical activity. She denies nausea or vomiting. What is the most likely diagnosis?**",
                "options": [
                    "Migraine without Aura",
                    "Tension-Type Headache",
                    "Cluster Headache",
                    "Pseudotumor Cerebri",
                    "Sinusitis"
                ],
                "correctAnswer": 1,
                "rationale": "**Tension-Type Headache** is bilateral, non-pulsating (band-like), and notably lacks the nausea/vomiting and aggravation by activity seen in migraines."
            },
            {
                "question": "**4. A 45-year-old male presents to the ER screaming 'This is the worst headache of my life!' It started instantly like a thunderclap while he was lifting weights. He has no fever but has some nuchal rigidity. The most urgent diagnostic test is:**",
                "options": [
                    "MRI Brain",
                    "Non-contrast CT Head",
                    "Lumbar Puncture",
                    "EEG",
                    "Erythrocyte Sedimentation Rate (ESR)"
                ],
                "correctAnswer": 1,
                "rationale": "**Subarachnoid Hemorrhage** presents as a 'Thunderclap' headache. The initial test of choice is a **Non-contrast CT Head** to look for blood in the subarachnoid space."
            },
            {
                "question": "**5. A patient who recently underwent a C-section with epidural anesthesia complains of a severe headache that is relieved when lying flat but returns immediately upon standing. What is the mechanism?**",
                "options": [
                    "Corebral Venous Thrombosis",
                    "CSF Leak (Low Pressure)",
                    "Meningitis",
                    "Preeclampsia",
                    "Postpartum Migraine"
                ],
                "correctAnswer": 1,
                "rationale": "**Post-Dural Puncture Headache** is caused by a persistent **CSF leak** lowering intracranial pressure. The hallmark is the **postural** nature (worse standing, better lying down)."
            }
        ],
        "flashcards": [
            {
                "front": "What are the 'POUND' criteria for Migraine?",
                "back": "Pulsating, One-day (4-72h), Unilateral, Nausea/Vomiting, Disabling.",
                "tag": "Diagnosis"
            },
            {
                "front": "What are the autonomic features of Cluster Headache?",
                "back": "Ptosis, Miosis, Lacrimation, Rhinorrhea, Conjunctival Injection (all ipsilateral).",
                "tag": "Clinical"
            },
            {
                "front": "What is the first-line ABORTIVE treatment for Cluster Headache?",
                "back": "100% Oxygen (and Sumatriptan).",
                "tag": "Pharmacology"
            },
            {
                "front": "How do you distinguish Tension Headache from Migraine?",
                "back": "Tension is Bilateral, Non-pulsating, and has NO Nausea/Vomiting or Aura.",
                "tag": "Diagnosis"
            },
            {
                "front": "What is the most feared complication of Giant Cell Arteritis?",
                "back": "Permanent Blindness (need immediate steroids).",
                "tag": "Clinical"
            },
            {
                "front": "Describe the headache of a Brain Tumor.",
                "back": "Worse in the morning (awakening) or with Valsalva (coughing/bending).",
                "tag": "Clinical"
            },
            {
                "front": "What is a 'Thunderclap' headache suggestive of?",
                "back": "Subarachnoid Hemorrhage (Ruptured Aneurysm).",
                "tag": "Clinical"
            },
            {
                "front": "What characteristic defines a Post-Dural Puncture Headache?",
                "back": "Positional: Worse standing, Improved lying flat.",
                "tag": "Diagnosis"
            },
            {
                "front": "Which population is most affected by Cluster Headaches?",
                "back": "Males (20-50s), often smokers.",
                "tag": "Epidemiology"
            },
            {
                "front": "What is the classic presentation of Temporal Arteritis?",
                "back": "Elderly (>50), Unilateral Temporal Headache, Jaw Claudication, Elevated ESR.",
                "tag": "Clinical"
            }
        ],
        "ankingResource": {
            "primarySource": "BandB",
            "chapter": "Neurology > Headache",
            "alternatives": [
                {
                    "resource": "FirstAid",
                    "chapter": "Neurology > Pathology > Headache"
                },
                {
                    "resource": "Pathoma",
                    "chapter": "N/A"
                }
            ]
        },
        "pearls": [
            {
                "title": "Migraine vs. Cluster Behavior",
                "content": "A Migraine patient wants to lie still in a dark, quiet room. A Cluster Headache patient is agitated, restless, and paces around the room."
            },
            {
                "title": "Treat First, Biopsy Later",
                "content": "If you suspect Giant Cell Arteritis, start Steroids immediately to save vision. Do not wait for the temporal artery biopsy results."
            },
            {
                "title": "SNOOP for Red Flags",
                "content": "Systemic Ssx (Fever/Weight Loss), Neurologic Ssx, Onset (Sudden/Thunderclap), Older age (>50 new onset), Pattern change (Positional/Valsalva)."
            }
        ],
        "mindmap": """## Headaches

### Primary (Benign, Recurrent)
- **Migraine**: Unilateral, Pulsating, Nausea, Aura. (Tx: Triptans)
- **Tension**: Bilateral, Band-like, No Nausea. (Tx: NSAIDs)
- **Cluster**: Unilateral Eye, Autonomic Ssx, Restless. (Tx: 100% O2)

### Secondary (Red Flags)
- **Vascular**:
    - SAH (Thunderclap)
    - Temporal Arteritis (Jaw Claudication, Blindness risk)
- **Infection**: Meningitis (Fever, Stiff Neck)
- **Structural**:
    - Tumor (Morning headache)
    - Low Pressure (Post-LP, Positional)"""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l63_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l63.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l63" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l63",
    "title": "Lecture #63: Headache",
    "module": "Neurology",
    "tags": "Lecture #63",
    "path": "content/json/l63.file.js",
    "readingTime": 5
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l63")

if __name__ == "__main__":
    create_l63_file()
