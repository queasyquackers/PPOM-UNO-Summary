import json
import os

def create_l61_file():
    summary_md = """# Lecture #61: Gait and Movement
    
**Lecturer:** Adena Leder, D.O.
**Session:** Lecture #61

## Introduction to Movement Disorders (Slide 2)

Movement disorders represent a complex interplay between the basal ganglia, cerebellum, and motor cortex. The approach to a patient with a suspected movement disorder, such as Parkinson's Disease (PD), requires a systematic evaluation of their history, observation ("Look"), passive tone ("Feel"), and active strength/gait ("Move"). Understanding the distinction between hyperkinetic and hypokinetic states is fundamental to narrowing the differential diagnosis.

### Core Assessement Objectives
- **History:** Establish onset, progression, and risk factors.
- **Observation:** "Look" for tremors, posture, and involuntary movements.
- **Tone:** "Feel" for rigidity (lead-pipe vs. cogwheel).
- **Function:** "Assess" strength and observed gait mechanics.

## History Taking: The Foundations (Slide 3-8)

A detailed history is the cornerstone of diagnosis, as many movement disorders are clinical diagnoses without definitive biomarkers.

### Demographics and Onset (Slide 3)
- **Age:** Early vs. Late onset changes the differential.
- **Handedness:** Asymmetry is a hallmark of idiopathic PD (symptoms often start on the dominant side).
- **Timeline:** Establishing the "Year 0" of symptom onset.
- **Prodromal Phase:** Non-motor symptoms often precede motor symptoms by years (e.g., loss of smell, constipation).

### Medical and Medication History (Slide 4-5)
- **Secondary Parkinsonism:** Rule out drug-induced causes.
    - **Anti-emetics:** Metoclopramide (Reglan) used long-term.
    - **Anti-psychotics:** Dopamine blockers (Haloperidol, Risperidone).
    - **Other Offenders:** Lithium and Valproic Acid (Depakote) can cause tremor.
- **Comorbidities:** Cardiovascular disease, Diabetes, Cancer history.

:::correlate
Drug-Induced Parkinsonism

- **Pathophysiology:** Blockade of dopamine D2 receptors in the nigrostriatal pathway.
- **Presentation:** Symmetric parkinsonism (unlike asymmetric idiopathic PD), often without resting tremor.
- **Diagnosis:** Temporal relationship with offending agent; lack of response to Levodopa.
- **Treatment:** Stop the offending agent.
- **Risk Factors:** Elderly, high potency antipsychotics, anti-emetics.
:::

### Environmental Exposures (Slide 8)
Certain toxins are selectively toxic to dopaminergic neurons in the Substantia Nigra.

| Exposure | Context | Mechanism/Notes |
| :--- | :--- | :--- |
| **Pesticides** | Farm/Vineyard work | Rotenone, Paraquat, Glyphosate (Roundup) |
| **Well Water** | Rural living | Heavy metals/Pesticide runoff |
| **Agent Orange** | Vietnam Veterans | Increased risk of PD |
| **MPTP** | Synthetic Heroin | Acute, permanent destruction of Substantia Nigra |
| **Head Trauma** | Boxers/Football | Chronic Traumatic Encephalopathy (CTE) overlap |

### Genetics (Slide 6-7)
While most PD is sporadic (idiopathic), genetics play a role, especially in young-onset cases.
- **Prevalence:** 15% of patients have a family history.
- **Risk Group:** Ashkenazi Jewish descent (Higher carrier rate).
- **Major Genes:**
    - **LRRK2:** Common autosomal dominant.
    - **GBA1:** Associated with Gaucher's carrier state.
    - **PRKN (Parkin):** Early onset, recessive.

## Review of Systems: The "Hidden" Signs (Slide 11-12)

Parkinson's Disease is a whole-body synucleinopathy, not just a brain disease. Autonomic and sensory dysfunction often constitute the "Prodrome."

:::highyield
**The Parkinson's Prodrome**
Symptoms that can precede motor signs by 10-20 years:
1.  **Anosmia:** Loss of smell.
2.  **REM Sleep Behavior Disorder (RBD):** Acting out vivid dreams (injuring bed partner) due to loss of REM atonia.
3.  **Constipation:** Slow colonic transit.
4.  **Autonomic Dysfunction:** Orthostatic hypotension, urinary frequency/urgency.
:::

:::correlate
Seborrheic Dermatitis

- **Pathophysiology:** Dysregulation of autonomic control of sebaceous glands (sebum production).
- **Presentation:** "Greasy," scaly, erythematous rash, typically on the face (brow, nasolabial folds) and scalp.
- **Lecturer's Point:** A common dermatologic finding in PD patients.
:::

## The Physical Examination (Slide 14-17)

### Cranial Nerves and face
- **Hypomimia:** "Masked Facies" – reduction in facial expressivity and blinking.
- **Vertical Gaze:** Limitation suggests **Progressive Supranuclear Palsy (PSP)**, an atypical parkinsonism.
- **Glabellar Tap:** Persistent blinking when tapping the forehead (Myerson's sign).

### Motor Tone Assessment
Examination of tone differentiates spasticity (corticospinal) from rigidity (extrapyramidal).
- **Lead-Pipe Rigidity:** Uniform, constant resistance throughout range of motion.
- **Cogwheel Rigidity:** Ratchet-like resistance (Rigidity + Tremor).
- **Asymmetry:** Idiopathic PD typically starts **unilaterally**.

### Tremor Analysis
- **Resting Tremor:** "Pill-rolling" (4-6 Hz). Suppressed with movement. Classic for PD.
- **Postural/Action Tremor:** Occurs when holding a pose against gravity. Classic for **Essential Tremor**.

:::correlate
Essential Tremor

- **Pathophysiology:** Cerebellar-thalamic circuit oscillation.
- **Presentation:** Bilateral, symmetric action tremor (hands, voice, head). improves with alcohol.
- **Diagnosis:** Clinical. Spiral drawing test shows shaky axis.
- **Treatment:** Propranolol (Beta-blocker) or Primidone.
- **Differentiation:** PD is Resting; ET is Action.
:::

### Gait Assessment (Slide 18)
The "Get Up and Go" or observable gait provides high-yield diagnostic clues.
- **Shuffling:** Short steps (marche à petits pas).
- **Fenestration:** Accelerating steps to keep balance.
- **Freezing:** Feet feel "stuck to the floor," especially in doorways/turning.
- **En Bloc Turning:** Turning like a statue/log rather than pivoting segments.
- **Reduced Arm Swing:** Often the **first** motor sign (early, asymmetric).

## Diagnosis and Management (Slide 19)

Diagnosis remains primarily **clinical**, requiring **Bradykinesia** plus either Rigidity or Resting Tremor.

### Diagnostic Tests
- **DaTscan:** Dopamine transporter SPECT scan. Shows loss of uptake in striatum (comma shape becomes a period).
- **Levodopa Challenge:** Significant improvement in symptoms confirms Dopaminergic deficiency (responsive in PD, non-responsive in Parkinson-Plus syndromes).
- **Skin Biopsy:** For Alpha-synuclein deposits.

:::mnemonic
**The "S" Signs of Parkinson's Disease**
**S-WORDS** (Slide 20)

- **S**hake (Resting Tremor)
- **S**tiffness (Rigidity)
- **S**low (Bradykinesia)
- **S**tate (Masked Facies)
- **S**huffle (Gait)
- **S**mall writing (Micrographia)
- **S**mell loss (Anosmia)
- **S**leep (REM behavior disorder)
- **S**oft speech (Hypophonia)
- **S**eborrhea (Dermatitis)
- **S**adness (Depression)
:::
"""

    l61_data = {
        "id": "l61",
        "title": "Lecture #61: Gait and Movement",
        "lecturer": "Adena Leder, D.O.",
        "module": "Neurology",
        "session": "Lecture #61",
        "prev": "l60",
        "next": "l62",
        "pdf": "pdfs/Lecture # 61. A. Leder, D.O. (PPT - updated 1.29.26).pdf",
        "highYieldPdf": "content/L61_HighYield_Render.pdf",
        "transcript": "",  # Missing
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A 62-year-old male presents with a resting tremor in his right hand and general slowness of movement. His wife notes that he has been acting out violent dreams and shouting in his sleep for the past 5 years. Which of the following is the most likely diagnosis?**",
                "options": [
                    "Essential Tremor",
                    "Parkinson's Disease",
                    "Drug-Induced Parkinsonism",
                    "Huntington's Disease",
                    "Vascular Dementia"
                ],
                "correctAnswer": 1,
                "rationale": "**Parkinson's Disease** is characterized by the triad of resting tremor, bradykinesia, and rigidity. **REM Sleep Behavior Disorder (RBD)** is a strong prodromal sign that can precede motor symptoms by years."
            },
            {
                "question": "**2. Which of the following clinical findings is REQUIRED for a diagnosis of Parkinson's Disease?**",
                "options": [
                    "Resting Tremor",
                    "Bradykinesia",
                    "Postural Instability",
                    "Cogwheel Rigidity",
                    "Anosmia"
                ],
                "correctAnswer": 1,
                "rationale": "**Bradykinesia** (slowness of movement) is the central and required feature for the diagnosis of parkinsonism. While tremor is common, some patients present with the akinetic-rigid variant without tremor."
            },
            {
                "question": "**3. A 25-year-old male presents with new-onset resting tremor and rigidity. He has a history of Schizophrenia and recently started a new medication. Which mechanism explains his motor symptoms?**",
                "options": [
                    "Loss of dopaminergic neurons in the Substantia Nigra",
                    "Blockade of Dopamine D2 receptors",
                    "Depletion of Acetylcholine in the Striatum",
                    "Cerebellar atrophy",
                    "Autoimmune attack on the neuromuscular junction"
                ],
                "correctAnswer": 1,
                "rationale": "**Blockade of D2 receptors** by antipsychotic medications (e.g., Haloperidol) causes **Drug-Induced Parkinsonism**. This is a functional blockade, not the structural cell death seen in idiopathic PD."
            },
            {
                "question": "**4. During a gait examination, a patient takes multiple small, shuffling steps and turns his body as a single rigid unit. This turning pattern is best described as:**",
                "options": [
                    "Ataxic turning",
                    "En bloc turning",
                    "Magnetic gait",
                    "Scissoring gait",
                    "Steppage gait"
                ],
                "correctAnswer": 1,
                "rationale": "**En bloc turning** is the classic description of a PD patient turning like a statue or log, requiring multiple small steps to reorient, due to axial rigidity and bradykinesia."
            },
            {
                "question": "**5. Which environmental exposure is historically linked to the rapid destruction of the Substantia Nigra and acute parkinsonism?**",
                "options": [
                    "Lead paint",
                    "MPTP",
                    "Asbestos",
                    "Silica dust",
                    "Radon"
                ],
                "correctAnswer": 1,
                "rationale": "**MPTP** is a neurotoxin (found in synthetic heroin contaminants) that selectively destroys dopaminergic neurons in the Substantia Nigra, serving as a model for MPTP-induced parkinsonism."
            }
        ],
        "flashcards": [
            {
                "front": "What is the cardinal motor feature required for a diagnosis of Parkinson's Disease?",
                "back": "Bradykinesia (plus Rigidity OR Tremor)",
                "tag": "Diagnosis"
            },
            {
                "front": "What type of tremor is characteristic of Parkinson's Disease?",
                "back": "Resting Tremor (4-6 Hz, Pill-rolling)",
                "tag": "Clinical"
            },
            {
                "front": "What dermatologic condition is commonly associated with Parkinson's Disease?",
                "back": "Seborrheic Dermatitis",
                "tag": "Clinical"
            },
            {
                "front": "What sleep disorder is a strong prodromal sign of synucleinopathies like PD?",
                "back": "REM Sleep Behavior Disorder (RBD)",
                "tag": "Clinical"
            },
            {
                "front": "What is the mechanism of Drug-Induced Parkinsonism?",
                "back": "Dopamine D2 receptor blockade (e.g., Antipsychotics, Metoclopramide)",
                "tag": "Pathology"
            },
            {
                "front": "What genetic mutation is most common in Ashkenazi Jewish patients with PD?",
                "back": "LRRK2 or GBA1",
                "tag": "Genetics"
            },
            {
                "front": "What physical exam finding suggests Progressive Supranuclear Palsy (PSP) rather than PD?",
                "back": "Vertical Gaze Palsy (Inability to look up/down)",
                "tag": "Diagnosis"
            },
            {
                "front": "What is 'En bloc' turning?",
                "back": "Turning the body as a single rigid unit/log, requiring multiple steps",
                "tag": "Clinical"
            },
            {
                "front": "What effect does Cigarette Smoking have on Parkinson's risk?",
                "back": "It is associated with a DECREASED risk (protective)",
                "tag": "Epidemiology"
            },
            {
                "front": "What differentiates Essential Tremor from Parkinson's Tremor?",
                "back": "Essential Tremor is Action/Postural and symmetric; PD is Resting and asymmetric",
                "tag": "Diagnosis"
            }
        ],
        "ankingResource": {
            "primarySource": "BandB",
            "chapter": "Neurology > Movement Disorders",
            "alternatives": [
                {
                    "resource": "Pathoma",
                    "chapter": "CNS > Degenerative Disorders > Parkinson Disease"
                },
                {
                    "resource": "SketchyPath",
                    "chapter": "Neuro > Degenerative > Parkinson"
                },
                {
                    "resource": "FirstAid",
                    "chapter": "Neurology > Pathology > Parkinson Disease"
                }
            ]
        },
        "pearls": [
            {
                "title": "The Parkinson's Prodrome",
                "content": "Non-motor symptoms like Anosmia, Constipation, and REM Sleep Behavior Disorder can appear 10-20 years before the first tremor."
            },
            {
                "title": "Asymmetry is Key",
                "content": "Idiopathic PD almost always starts asymmetrically (one hand/side). Symmetric onset should raise suspicion for Drug-Induced Parkinsonism or Atypical syndromes."
            },
            {
                "title": "Tremor vs. Bradykinesia",
                "content": "Bradykinesia is the disability-causing symptom. Tremor is the cosmetic symptom. Some patients are 'Akinetic-Rigid' and never develop a tremor."
            },
            {
                "title": "Arm Swing",
                "content": "Reduced arm swing on one side is often the earliest detectable motor sign of PD during gait analysis."
            }
        ],
        "mindmap": """### Gait and Movement Disorders
        
#### Parkinson's Disease (TRAP)
- **T**remor: Resting, Pill-rolling, Asymmetric
- **R**igidity: Cogwheel vs Lead-pipe
- **A**kinesia/Bradykinesia: Slow movement, Masked facies, Decreased blink
- **P**ostural Instability: Late finding, Pull test

#### Etiology
- **Idiopathic**: Most common, Age > 60
- **Genetic**: LRRK2, GBA1 (Ashkenazi Jewish)
- **Environmental**: Pesticides, MPTP, Agent Orange
- **Drug-Induced**: Antipsychotics, Metoclopramide (D2 Blockers)

#### Prodromal Signs
- **Sensory**: Anosmia (Smell loss)
- **Sleep**: REM Sleep Behavior Disorder
- **Autonomic**: Constipation, Orthostasis

#### Differential Diagnosis
- **Essential Tremor**: Action tremor, Improves w/ Alcohol, Bilateral
- **PSP**: Vertical Gaze Palsy, Early Falls
- **MSA**: Severe Autonomic Dysfunction"""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l61_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l61.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l61" not in index_content:
        # Insert before the closing ]);
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l61",
    "title": "Lecture #61: Gait and Movement",
    "module": "Neurology",
    "tags": "Lecture #61",
    "path": "content/json/l61.file.js",
    "readingTime": 5
  }"""
        # Ensure comma if needed
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l61")

if __name__ == "__main__":
    create_l61_file()
