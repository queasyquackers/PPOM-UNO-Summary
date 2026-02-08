import json
import os

def create_l65_file():
    summary_md = """# Lecture #65: Pharmacology of Antiseizure Drugs II

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture #65

## Broad Spectrum Antiseizure Drugs

These agents are effective against multiple seizure types (Focal and Generalized), including Absence seizures.

### Valproate (Valproic Acid, Divalproex) (Slide 8-12)
- **Mechanisms:** "Broad Spectrum" = Multiple Mechanisms.
    1.  Blocks Voltage-Gated **Na+ channels**.
    2.  Inhibits **T-Type Ca2+ channels** (Thalamic neurons -> effective for Absence).
    3.  Increases **GABA** concentrations (inhibits GABA transaminase).
- **Therapeutic Uses:** First-line for many seizure types (Focal, Generalized Tonic-Clonic, Absence, Myoclonic).
    - **Non-Seizure Uses:** **Bipolar Disorder** (Acute Mania), **Migraine Prophylaxis**.
- **Pharmacokinetics:** Inhibits CYPs (CYP2C9).
- **Adverse Effects:**
    - **Hepatotoxicity:** Can be fatal (Boxed Warning). Risk highest in infants <2 yrs on polytherapy.
    - **Pancreatitis:** Rare but fatal.
    - **Hyperammonemia:** Inhibits urea cycle -> Encephalopathy.
    - **Teratogenicity:** **Neural Tube Defects** (Spina Bifida). CI in pregnancy if possible.
    - **Common:** GI upset, Tremor, **Weight Gain**, Hair Loss (Alopecia).

:::correlate
Valproate Side Effects Mnemonic: **VALPROATE**
- **V**omiting/Nausea
- **A**lopecia
- **L**iver Toxicity
- **P**ancreatitis
- **R**etention of Fat (Weight Gain)
- **O**edema
- **A**ppetite Increase
- **T**remor
- **E**nzyme Inhibitor
:::

### Topiramate (Slide 14-17)
- **Mechanisms:**
    1.  Blocks Na+ channels.
    2.  Potentiates GABA-A.
    3.  Inhibits AMPA/Kainate Glutamate receptors.
- **Therapeutic Uses:** Focal, Generalized, Lennox-Gastaut.
    - **Non-Seizure:** **Migraine Prophylaxis**, Weight Loss (with Phentermine).
- **Adverse Effects:**
    - **Cognitive Slowing:** "Dopamax" (confusion, word-finding difficulty).
    - **Kidney Stones:** Weak Carbonic Anhydrase Inhibitor.
    - **Metabolic Acidosis:** Due to bicarbonate loss (CA inhibition).
    - **Hypohidrosis:** Reduced sweating -> Hyperthermia (risk in children/hot weather).
    - **Weight Loss.**

### Lamotrigine (Slide 26 - Mentioned in Transcript context)
- **Boxed Warning:** **Stevens-Johnson Syndrome (SJS)** / Toxic Epidermal Necrolysis (TEN).
- **Titration:** Must act **"Lame"** (slow titration) to avoid rash.
- **Interaction:** Valproate **inhibits** Lamotrigine metabolism -> Increases Lamotrigine levels -> High risk of Rash. Dose must be reduced by 50% if added to Valproate.

### Levetiracetam (Slide 25)
- **Mechanism:** Binds **SV2A** (Synaptic Vesicle Protein 2A) -> Prevents vesicle fusion/neurotransmitter release.
- **PK:** Excellent! 100% Bioavailability, Renal excretion (no CYP interactions).
- **Therapeutic Uses:** Focal, Generalized, Myoclonic.
- **Adverse Effects:** **Neuropsychiatric** (Irritability, Agitation, "Keppra Rage").

## Narrow Spectrum Agents & Specials

### Ethosuximide (Slide 28-30)
- **Mechanism:** Blocks **T-Type Ca2+ channels** in Thalamic neurons.
- **Clinical Use:** **Absence Seizures ONLY**.
- **Adverse Effects:** GI distress (Nausea/Vomiting), SJS.
- **Note:** Does NOT work for Tonic-Clonic seizures.

### Felbamate (Slide 21)
- **Mechanism:** NMDA Receptor Antagonist.
- **Use:** Refractory Lennox-Gastaut (Last resort).
- **Toxicity:** **Aplastic Anemia** and **Hepatic Failure** (Requires informed consent).

### Gabapentin & Pregabalin (Slide 23)
- **Mechanism:** Binds **alpha-2-delta** subunit of Voltage-Gated Ca2+ channels -> Decreases Glutamate release.
- **Use:** Primarily for **Neuropathic Pain**, Post-herpetic neuralgia, Fibromyalgia. Adjunct for focal seizures.
- **AE:** Sedation, Peripheral Edema.

## GABA Modulators (Slide 33-41)

### Barbiturates (Phenobarbital)
- **Mechanism:** Binds GABA-A allosteric site -> Increases **DURATION** of Cl- channel opening.
    - "Barbi**dur**ates increase **Dur**ation".
- **PK:** Potent **Inducer** of CYP450 enzymes.
- **AE:** Sedation, Respiratory Depression, Hyperactivity in children (Paradoxical).

### Benzodiazepines (Diazepam, Lorazepam, Midazolam)
- **Mechanism:** Binds GABA-A allosteric site -> Increases **FREQUENCY** of Cl- channel opening.
    - "Ben**z**os increase Fre-**z**-quency".
- **Clinical Uses:**
    - **Status Epilepticus:** **Lorazepam** (IV) or **Diazepam** (IV/Rectal) denotes 1st Line.
    - **Eclampsia Seizures:** MgSO4 (First line), Benzos (Second line).
- **Adverse Effects:** Sedation, Tolerance, Dependence.
- **Overdose Reversal:** **Flumazenil** (Competitve antagonist). Caution: Can precipitate seizures in chronic users.

:::highyield
**Status Epilepticus Pharmacology**
1.  **Stop the Seizure:** IV **Lorazepam** (Benzo).
2.  **Prevent Recurrence (Maintenance):** IV **Fosphenytoin** or **Valproate** or **Levetiracetam**.
3.  **Refractory:** **Phenobarbital** or **Propofol** (General Anesthesia).
:::

## Cannabidiol (CBD) (Slide 43)
- **Use:** Dravet Syndrome, Lennox-Gastaut Syndrome.
- **Mechanism:** Unknown (Not CB1/CB2).
- **AE:** Hepatotoxicity (elevated transaminases).
"""

    l65_data = {
        "id": "l65",
        "title": "Lecture #65: Antiseizure Drugs II",
        "lecturer": "L. Goldstein, Pharm.D.",
        "module": "Neuropharmacology",
        "session": "Lecture #65",
        "prev": "l64",
        "next": "l66",
        "pdf": "pdfs/Lecture #65. L. Goldstein, Pharm.D. (PPT).pdf",
        "highYieldPdf": "content/L65_HighYield_Render.pdf",
        "transcript": "content/L65_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A 6-year-old child presents with 'staring spells' where they lose consciousness for a few seconds. The EEG shows a 3-Hz spike-and-wave pattern. Which drug is the first-line treatment for this specific condition?**",
                "options": [
                    "Carbamazepine",
                    "Phenytoin",
                    "Ethosuximide",
                    "Phenobarbital",
                    "Gabapentin"
                ],
                "correctAnswer": 2,
                "rationale": "**Ethosuximide** is the drug of choice for **Absence Seizures** (3-Hz spike and wave). It works by blocking T-type calcium channels in the thalamus. Valproate is also effective but has more side effects."
            },
            {
                "question": "**2. Which antiseizure medication works by binding to the SV2A protein on synaptic vesicles?**",
                "options": [
                    "Topiramate",
                    "Lamotrigine",
                    "Levetiracetam",
                    "Tiagabine",
                    "Vigabatrin"
                ],
                "correctAnswer": 2,
                "rationale": "**Levetiracetam** has a unique mechanism: it binds to **SV2A** (Synaptic Vesicle Protein 2A), inhibiting neurotransmitter release. It is known for its excellent pharmacokinetic profile."
            },
            {
                "question": "**3. A patient with bipolar disorder and epilepsy is treated with a drug that causes hair loss, weight gain, and tremor. What is the most likely mechanism of this drug?**",
                "options": [
                    "Sodium channel blockade + GABA enhancement + T-type Calcium block",
                    "Pure Sodium channel blockade",
                    "Pure T-type Calcium channel blockade",
                    "NMDA receptor inhibition",
                    "Alpha-2-delta calcium channel subunit inhibition"
                ],
                "correctAnswer": 0,
                "rationale": "The symptoms (Alopecia, Weight Gain, Tremor) point to **Valproate**. Valproate is a broad-spectrum agent with **multiple mechanisms**: Na+ block, GABA enhancement, and T-type Ca2+ block."
            },
            {
                "question": "**4. What is the primary difference in mechanism between Benzodiazepines and Barbiturates on the GABA-A receptor?**",
                "options": [
                    "Benzodiazepines increase duration; Barbiturates increase frequency",
                    "Benzodiazepines increase frequency; Barbiturates increase duration",
                    "Benzodiazepines bind the GABA site; Barbiturates bind an allosteric site",
                    "Benzodiazepines open K+ channels; Barbiturates open Cl- channels",
                    "Benzodiazepines are direct agonists; Barbiturates require GABA"
                ],
                "correctAnswer": 1,
                "rationale": "**BenZos** increase **Frequency** of channel opening. **BarbiDurates** increase **Duration** of channel opening."
            },
            {
                "question": "**5. A patient taking Valproate develops a rash after a new medication is added. The new medication requires very slow titration to prevent Stevens-Johnson Syndrome. What drug was likely added?**",
                "options": [
                    "Levetiracetam",
                    "Lamotrigine",
                    "Gabapentin",
                    "Topiramate",
                    "Ethosuximide"
                ],
                "correctAnswer": 1,
                "rationale": "**Lamotrigine** has a risk of **SJS**. Valproate inhibits Lamotrigine metabolism (glucuronidation), significantly raising Lamotrigine levels and the risk of severe rash. The dose of Lamotrigine must be reduced."
            }
        ],
        "flashcards": [
            {
                "front": "What is the mechanism of Ethosuximide?",
                "back": "Blocks T-Type Calcium Channels in the Thalamus.",
                "tag": "Pharmacology"
            },
            {
                "front": "Which drug causes 'Keppra Rage' (Agitation/Irritability)?",
                "back": "Levetiracetam.",
                "tag": "Adverse Effects"
            },
            {
                "front": "What is the mnemonic for Valproate side effects?",
                "back": "VALPROATE (Vomiting, Alopecia, Liver, Pancreatitis, Retention of fat, Oedema, Appetite, Tremor, Enzyme inhibitor).",
                "tag": "Mnemonic"
            },
            {
                "front": "Benzodiazepines increase the ______ of GABA channel opening.",
                "back": "Frequency.",
                "tag": "Pharmacodynamics"
            },
            {
                "front": "Barbiturates increase the ______ of GABA channel opening.",
                "back": "Duration.",
                "tag": "Pharmacodynamics"
            },
            {
                "front": "Which antiseizure drug causes Gingival Hyperplasia?",
                "back": "Phenytoin.",
                "tag": "Adverse Effects"
            },
            {
                "front": "Which antiseizure drug is associated with Aplastic Anemia?",
                "back": "Felbamate.",
                "tag": "Adverse Effects"
            },
            {
                "front": "Which antiseizure drug is a CYP Inducer?",
                "back": "Phenobarbital (also Carbamazepine, Phenytoin).",
                "tag": "Pharmacokinetics"
            },
            {
                "front": "What is the unique target of Levetiracetam?",
                "back": "SV2A (Synaptic Vesicle Protein 2A).",
                "tag": "Pharmacology"
            },
            {
                "front": "What is the drug of choice for Status Epilepticus?",
                "back": "Lorazepam (IV).",
                "tag": "Clinical"
            }
        ],
        "ankingResource": {
            "primarySource": "Physeo",
            "chapter": "Pharmacology > Neuro > Antiepileptics",
            "alternatives": [
                {
                    "resource": "FirstAid",
                    "chapter": "Pharmacology > Epilepsy"
                }
            ]
        },
        "pearls": [
            {
                "title": "Frequency vs Duration",
                "content": "Ben**z**os = Fre**z**quency. Barbi**dur**ates = **Dur**ation. This is classic board fodder."
            },
            {
                "title": "The SJS Risk",
                "content": "Lamotrigine + Valproate is a dangerous combo. Valproate doubles the half-life of Lamotrigine. Start Lamotrigine low and go slow ('Lame-otrigine')."
            },
            {
                "title": "Absence Seizures",
                "content": "These are thalamic 'glitches'. Ethosuximide fixes the glitch by blocking T-Type Calcium channels. If the patient also has tonic-clonic seizures, use Valproate (Broad spectrum) instead."
            }
        ],
        "mindmap": """## Antiseizure Drugs II

### Broad Spectrum
- **Valproate**: Na+, GABA, T-type Ca2+. Hepatotoxic, Teratogen.
- **Topiramate**: Na+, GABA. Kidney stones, Cognitive slowing.
- **Lamotrigine**: Na+. SJS Risk.
- **Levetiracetam**: SV2A. Clean PK, Neuropsychiatric AE.

### Narrow Spectrum
- **Ethosuximide**: T-type Ca2+. Absence only.
- **Gabapentinoids**: Ca2+ channel alpha-2-delta. Pain > Seizures.

### GABA Modulators
- **Benzodiazepines**: Freqency. Status Epilepticus (Acute).
- **Barbiturates**: Duration. CYP Inducer."""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l65_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l65.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l65" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l65",
    "title": "Lecture #65: Antiseizure Drugs II",
    "module": "Neuropharmacology",
    "tags": "Lecture #65",
    "path": "content/json/l65.file.js",
    "readingTime": 5
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l65")

if __name__ == "__main__":
    create_l65_file()
