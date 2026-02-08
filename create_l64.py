import json
import os

def create_l64_file():
    summary_md = """# Lecture #64: Introduction to Neuropharmacology (General Anesthetics)

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture #64

## Inhaled Anesthetics: Pharmacokinetics

The goal of inhaled anesthesia is to achieve **equilibrium** between the partial pressure of the gas in the alveoli (FA) and the brain (FCNS). The speed of induction depends on the rate at which FA approaches the inspired concentration (FI).

### Key Factors Affecting Uptake (Slide 10, 28-36)

1.  **Solubility (Blood:Gas Partition Coefficient):**
    - **Low Solubility (e.g., Nitrous Oxide, Desflurane):** The gas does *not* want to dissolve in blood. It quickly saturates the blood and raises partial pressure -> **Rapid Induction** and **Rapid Recovery**.
    - **High Solubility (e.g., Halothane, Isoflurane):** The gas dissolves readily in blood (like sugar in tea). It takes a lot of gas to saturate the blood before partial pressure rises -> **Slow Induction** and **Slow Recovery**.

2.  **Cardiac Output:**
    - **Increased CO:** Removes gas from alveoli faster -> Slows the rise of FA -> **Slower Induction**. (Counter-intuitive but high yield).
    - **Decreased CO:** Speeds induction (especially for soluble agents).

3.  **Alveolar Ventilation:** Hyperventilation speeds induction.

:::highyield
**Solubility & Induction Speed**
- **Low** Blood:Gas Coefficient (N2O, Desflurane) = **FAST** Onset.
- **High** Blood:Gas Coefficient (Halothane) = **SLOW** Onset.
:::

### MAC (Minimum Alveolar Concentration) (Slide 52)
- **Definition:** The alveolar concentration that prevents movement in 50% of patients in response to surgical incision (Standardized Stimulus).
- **Potency:** MAC is inversely related to potency. **Low MAC = High Potency**.
    - **Halothane (MAC 0.75%):** Very Potent.
    - **Nitrous Oxide (MAC >100%):** Weak anesthetic (cannot achieve surgical anesthesia alone).
- **Additivity:** MAC values are additive (0.5 MAC N2O + 0.5 MAC Isoflurane = 1 MAC).

## Inhaled Anesthetics: Agents & Toxicity

### Nitrous Oxide (N2O)
- **Properties:** Gas at room temp. Low solubility (Fast onset). Weak potency. Good Analgesia.
- **Side Effects:**
    - **Diffusion Hypoxia:** On discontinuation, N2O rushes into alveoli, displacing O2. **Prevention:** Administer 100% O2 for minutes after stopping N2O.
    - **Expansion of Air-Filled Spaces:** Contraindicated in Pneumothorax, Bowel Obstruction, Middle Ear surgery.
    - **Vitamin B12 Inhibition:** Inhibits Methionine Synthase -> Megaloblastic Anemia, Neuropathy.

### Halogenated Agents (Isoflurane, Desflurane, Sevoflurane, Halothane)
- **Mechanism:** GABA-A agonism, NMDA antagonism.
- **Organ Effects:**
    - **CV:** Vasodilation -> Hypotension. Desflurane causes transient **Tachycardia** (Sympathetic stim).
    - **Resp:** Respiratory Depression, Bronchodilation (Sevoflurane is best for asthmatics). Desflurane is **Pungent** (airway irritation).
    - **CNS:** Increased Cerebral Blood Flow -> **Increased Intracranial Pressure (ICP)**.
- **Toxicities:**
    - **Malignant Hyperthermia:** Genetic disorder (Ryanodine receptor). Triggered by Halogenated agents + Succinylcholine. Tx: **Dantrolene**.
    - **Halothane Hepatitis:** Immune-mediated liver necrosis (Rare).
    - **Nephrotoxicity:** **Sevoflurane** -> "Compound A" (but rare in humans).

:::correlate
Malignant Hyperthermia

- **Trigger:** Volatile Anesthetics (Isoflurane, Sevoflurane, etc.) + Succinylcholine.
- **Pathophysiology:** Uncontrolled Ca2+ release from Sarcoplasmic Reticulum.
- **Signs:** Muscle Rigidity (Masseter spasm), Hyperthermia, Hypercapnia (High CO2), Tachycardia, Acidosis.
- **Treatment:** Stop agent, Give **Dantrolene**.
:::

## Intravenous Anesthetics (Slide 62-70)

Used for Induction (Rapid onset due to high lipophilicity). Action is terminated by **Redistribution** (Blood -> Brain -> Muscle/Fat), NOT metabolism.

### Propofol
- **Mechanism:** GABA-A agonist.
- **Clinical Use:** Induction, Maintenance (TIVA), ICU Sedation. **"Milk of Amnesia"**.
- **Pros:** **Anti-emetic** (prevents nausea), Rapid recovery.
- **Cons:** **Hypotension** (Vasodilation), Respiratory Depression, **Pain on Injection** described as burning.
- **Notes:** Formulated in egg/soybean emulsion (bacterial growth risk, allergy).

### Etomidate
- **Mechanism:** GABA-A agonist.
- **Clinical Use:** Induction in patients with **Cardiovascular Instability**.
- **Pros:** **Hemodynamic Stability** (Minimal change in BP/HR).
- **Cons:** **Adrenocortical Suppression** (inhibits 11-beta-hydroxylase), Nausea/Vomiting.

### Ketamine
- **Mechanism:** **NMDA Receptor Antagonist**.
- **Clinical Use:** Dissociative Anesthesia (eyes open but unresponsive), Trauma/Shock.
- **Pros:** **Sympathomimetic** (Increases BP, HR, Cardiac Output), **Bronchodilation** (Good for Asthmatics).
- **Cons:** **Emergence Delirium** (Hallucinations, Nightmares).

### Dexmedetomidine
- **Mechanism:** **Alpha-2 Agonist** (central).
- **Clinical Use:** ICU Sedation, Adjunct.
- **Effects:** Sedation usually without respiratory depression. Causes Bradycardia/Hypotension.

:::highyield
**IV Anesthetic Choice High Yields**
- **Patient with Hypotension/Trauma:** Use **Ketamine** (Boosts BP) or **Etomidate** (Stable BP). Avoid Propofol.
- **Patient with Asthma:** Use **Ketamine** or **Sevoflurane** (Bronchodilators). Avoid Desflurane (Pungent).
- **Patient with Head Injury (High ICP):** Avoid Ketamine (increases ICP) and Volatile agents (increase ICP). Propofol/Barbiturates are preferred (decrease metabolic rate).
- **Post-Op Nausea:** Use **Propofol** (Anti-emetic). Avoid N2O and Opioids.
:::
"""

    l64_data = {
        "id": "l64",
        "title": "Lecture #64: Introduction to Neuropharmacology",
        "lecturer": "L. Goldstein, Pharm.D.",
        "module": "Neuropharmacology",
        "session": "Lecture #64",
        "prev": "l63",
        "next": "l65",
        "pdf": "pdfs/Lecture #64. L. Goldstein, Pharm.D. (PPT).pdf",
        "highYieldPdf": "content/L64_HighYield_Render.pdf",
        "transcript": "content/L64_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. An anesthesiologist wishes to speed up the induction of anesthesia with a highly soluble volatile agent. Which maneuver would be most effective?**",
                "options": [
                    "Decreasing Alveolar Ventilation",
                    "Increasing Cardiac Output",
                    "Increasing Alveolar Ventilation",
                    "Using an agent with a higher Blood:Gas partition coefficient",
                    "Administering a beta-blocker"
                ],
                "correctAnswer": 2,
                "rationale": "Increasing **Alveolar Ventilation** delivers more gas to the alveoli, speeding the rise of partial pressure (FA) and thus speeding induction. Conversely, increasing Cardiac Output *slows* induction by removing gas from the alveoli too quickly."
            },
            {
                "question": "**2. A trauma patient with severe hypotension requires emergency intubation. Which induction agent is preferred due to its ability to increase blood pressure and heart rate?**",
                "options": [
                    "Propofol",
                    "Etomidate",
                    "Ketamine",
                    "Thiopental",
                    "Sevoflurane"
                ],
                "correctAnswer": 2,
                "rationale": "**Ketamine** is a sympathomimetic that increases BP, HR, and cardiac output, making it ideal for hemodynamically unstable patients (shock). Propofol causes hypotension."
            },
            {
                "question": "**3. Following a surgery using Nitrous Oxide, the patient is extubated and allowed to breathe room air. Minutes later, she becomes hypoxic. What is the cause?**",
                "options": [
                    "Malignant Hyperthermia",
                    "Diffusion Hypoxia",
                    "Laryngospasm",
                    "Pneumothorax expansion",
                    "Opioid overdose"
                ],
                "correctAnswer": 1,
                "rationale": "**Diffusion Hypoxia** occurs when N2O is stopped abruptly; the gas rushes from the blood into the alveoli, displacing oxygen. It is prevented by administering 100% O2 for several minutes post-anesthesia."
            },
            {
                "question": "**4. Which anesthetic agent is associated with adrenocortical suppression via inhibition of 11-beta-hydroxylase?**",
                "options": [
                    "Ketamine",
                    "Propofol",
                    "Midazolam",
                    "Etomidate",
                    "Dexmedetomidine"
                ],
                "correctAnswer": 3,
                "rationale": "**Etomidate** inhibits 11-beta-hydroxylase, preventing cortisol synthesis. It is generally safe for single-dose induction but typically avoided for long-term infusions in septic patients."
            },
            {
                "question": "**5. Comparing two inhaled anesthetics: Drug A has a Blood:Gas partition coefficient of 0.42. Drug B has a coefficient of 2.30. Which statement is true?**",
                "options": [
                    "Drug A has a slower onset of action than Drug B",
                    "Drug B has a faster recovery time than Drug A",
                    "Drug A is more soluble in blood than Drug B",
                    "Drug A has a faster onset of action than Drug B",
                    "Drug B is less potent than Drug A"
                ],
                "correctAnswer": 3,
                "rationale": "Typically, **Low Solubility (Low Blood:Gas coefficient)** correlates with **Fast Onset**. Drug A (0.42) is less soluble than Drug B (2.30), so Drug A will have a **faster onset**."
            }
        ],
        "flashcards": [
            {
                "front": "What does a LOW Blood:Gas partition coefficient indicate about induction speed?",
                "back": "Fast Induction (and Fast Recovery).",
                "tag": "Pharmacokinetics"
            },
            {
                "front": "What is the measure of Potency for inhaled anesthetics?",
                "back": "MAC (Minimum Alveolar Concentration). Low MAC = High Potency.",
                "tag": "Pharmacokinetics"
            },
            {
                "front": "Which induction agent causes Adrenocortical Suppression?",
                "back": "Etomidate.",
                "tag": "Pharmacology"
            },
            {
                "front": "Which induction agent is 'Dissociative' and increases Cardiac Output?",
                "back": "Ketamine.",
                "tag": "Pharmacology"
            },
            {
                "front": "What terminates the action of a single bolus of Propofol?",
                "back": "Redistribution (not metabolism).",
                "tag": "Pharmacokinetics"
            },
            {
                "front": "What is the trigger for Malignant Hyperthermia?",
                "back": "Halogenated Anesthetics + Succinylcholine.",
                "tag": "Pathology"
            },
            {
                "front": "What is the antidote for Malignant Hyperthermia?",
                "back": "Dantrolene.",
                "tag": "Pharmacology"
            },
            {
                "front": "Why is Nitrous Oxide contraindicated in Pneumothorax?",
                "back": "It expands air-filled spaces.",
                "tag": "Safety"
            },
            {
                "front": "Which volatile anesthetic is associated with Nephrotoxicity (Compound A)?",
                "back": "Sevoflurane.",
                "tag": "Pharmacology"
            },
            {
                "front": "Which IV anesthetic is known as an Anti-emetic?",
                "back": "Propofol.",
                "tag": "Pharmacology"
            }
        ],
        "ankingResource": {
            "primarySource": "Physeo",
            "chapter": "Pharmacology > Neuro > General Anesthetics",
            "alternatives": [
                {
                    "resource": "FirstAid",
                    "chapter": "Pharmacology > Anesthetics"
                }
            ]
        },
        "pearls": [
            {
                "title": "Solubility and Speed",
                "content": "Think of Solubility like a 'sink'. If the blood (sink) is huge (high solubility), it takes forever to fill up (rise in partial pressure) before it spills over into the brain. Low solubility = tiny sink = fills fast = fast anesthesia."
            },
            {
                "title": "Ketamine & Asthma",
                "content": "Ketamine is a bronchodilator. It's an excellent choice for induction in an asthmatic patient who is actively wheezing."
            },
            {
                "title": "Propofol Burn",
                "content": "Propofol hurts on injection (vascular irritation). Lidocaine is often mixed with it to blunt the pain."
            }
        ],
        "mindmap": """## General Anesthetics

### Inhaled
- **Pharmacokinetics**: 
    - Low Solubility -> Fast Onset (Desflurane, N2O)
    - High Solubility -> Slow Onset (Halothane, Isoflurane)
    - Increased CO -> Slower Onset
- **Agents**:
    - **N2O**: Weak, Fast, Diffusion Hypoxia.
    - **Halogenated**: Potent, MH risk, Hypotension.
        - **Sevoflurane**: Bronchodilation.
        - **Desflurane**: Pungent, Tachycardia.

### Intravenous
- **Propofol**: Anti-emetic, Hypotension, Standard induction.
- **Etomidate**: Cardiac Stability, Adrenal suppression.
- **Ketamine**: Sympathomimetic (High BP), Dissociative, Bronchodilator.
- **Dexmedetomidine**: Alpha-2 agonist (Sedation w/o Resp Depression).
- **Thiopental**: Barbiturate (High ICP control)."""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l64_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l64.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l64" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l64",
    "title": "Lecture #64: Introduction to Neuropharmacology",
    "module": "Neuropharmacology",
    "tags": "Lecture #64",
    "path": "content/json/l64.file.js",
    "readingTime": 5
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l64")

if __name__ == "__main__":
    create_l64_file()
