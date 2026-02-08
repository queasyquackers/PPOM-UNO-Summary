import json
import os

def create_l66_file():
    summary_md = """# Lecture #66: Pharmacology of Local Anesthetics

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture #66

## Structure and Classification

Local Anesthetics (LAs) consist of a **Lipophilic Aromatic Ring** linked to a **Hydrophilic Amine**. The linkage determines the class:

-   **Esters (One 'i'):** Procaine, Cocaine, Tetracaine, Benzocaine, Chloroprocaine.
    -   **Metabolism:** Rapidly hydrolyzed by plasma **Pseudocholinesterase**.
    -   **Allergy:** Metabolized to **PABA** (Para-aminobenzoic acid) -> High risk of hypersensitivity.
-   **Amides (Two 'i's):** L**i**doca**i**ne, Bupivacaine, Mepivacaine, Ropivacaine, Prilocaine.
    -   **Metabolism:** Hepatic **CYP450** enzymes.
    -   **Allergy:** Rare.

:::mnemonic
**Esters vs. Amides**
-   **Esters:** Have **one 'i'** in their name (e.g., Procaine, Cocaine).
-   **Amides:** Have **two 'i's** in their name (e.g., L**i**doca**i**ne, Bup**i**vaca**i**ne).
-   *Exception: Proparacaine is an ester (used in eyes).*
:::

## Pharmacokinetics & Mechanism

### Mechanism of Action (Slide 22)
-   **Target:** Voltage-Gated **Na+ Channels** (Intracellular side).
-   **State-Dependent:** Binds mainly to **Open** and **Inactivated** states (not Resting).
-   **Use-Dependent:** More effective in rapidly firing neurons (pain fibers).

### Determinants of Action (Slide 23-24)
1.  **pKa (Onset):** LAs are weak bases. They must be **uncharged** to cross the membrane, then **ionized** intracellularly to bind the channel.
    -   **Lower pKa** (closer to 7.4) -> More uncharged form -> Faster penetration -> **Faster Onset**.
    -   **Infection/Inflammation:** Acidic tissue pH -> Drug becomes protonated (ionized) outside -> Cannot cross membrane -> **Reduced Effect**.
2.  **Lipid Solubility (Potency):** More lipid soluble = More potent.
3.  **Protein Binding (Duration):** High protein binding = Longer duration (Bupivacaine).
4.  **Vasoconstrictors (Epinephrine):**
    -   Decreases systemic absorption (Safety).
    -   Prolongs duration of action.
    -   Reduces bleeding.
    -   *Avoid in end-arteries (fingers, toes, penis, nose).*

## Specific Agents

### Ester Agents
-   **Benzocaine:**
    -   **Topical Only.** Low pKa (3.5).
    -   **Toxicity:** **Methemoglobinemia**. Avoid in teething infants.
-   **Cocaine:**
    -   **Intrinsic Vasoconstrictor** (blocks NE reuptake). Good for ENT surgery.
    -   **Toxicity:** CVS (HTN, Arrhythmias).
-   **Tetracaine:** Potent, Long-acting. Used for spinal anesthesia.

### Amide Agents
-   **Lidocaine:** The "Standard". Rapid onset, medium duration.
    -   **Toxicity:** **TNS (Transient Neurologic Symptoms)** with spinal anesthesia (pain/burning in buttocks/legs).
-   **Bupivacaine:** Potent, Long-acting.
    -   **Toxicity:** **Severe Cardiotoxicity** (refractory arrhythmias). "Fast in, Slow out" of Na+ channels.
-   **Ropivacaine:** Similar to Bupivacaine but **less cardiotoxic** (easier to resuscitate).
-   **Prilocaine:**
    -   **Toxicity:** Metabolite (*o-toluidine*) causes **Methemoglobinemia** (Chocolate brown blood, Cyanosis).

## Systemic Toxicity (LAST) (Slide 27-28)

**Local Anesthetic Systemic Toxicity (LAST)** occurs with inadvertent intravascular injection or overdose.

1.  **CNS (Early):** **Perioral Numbness**, **Metallic Taste**, Tinnitus, Dizziness -> Muscle Twitching -> Seizures -> Coma.
2.  **Cardiovascular (Late):** Hypotension, Bradycardia, Arrhythmias, Collapse.
    -   *Exception:* Bupivacaine cardiotoxicity can occur simultaneously with CNS effects.

:::highyield
**Treatment of LAST**
-   **Lipid Rescue:** IV **20% Intralipid Emulsion**.
-   Acts as a "Lipid Sink" to soak up the lipophilic drug from the plasma.
:::
"""

    l66_data = {
        "id": "l66",
        "title": "Lecture #66: Local Anesthetics",
        "lecturer": "L. Goldstein, Pharm.D.",
        "module": "Neuropharmacology",
        "session": "Lecture #66",
        "prev": "l65",
        "next": "l67",
        "pdf": "pdfs/Lecture #66. L. Goldstein, Pharm.D. (PPT).pdf",
        "highYieldPdf": "content/L66_HighYield_Render.pdf",
        "transcript": "content/L66_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A dentist injects a local anesthetic into an inflamed, infected abscess, but the patient continues to feel pain. What is the pharmacological explanation?**",
                "options": [
                    "Increased blood flow washes the drug away too slowly",
                    "Acidic pH protonates the drug, preventing membrane penetration",
                    "Basic pH precipitates the drug",
                    "Inflammation causes upregulation of sodium channels",
                    "The drug is rapidly metabolized by bacteria"
                ],
                "correctAnswer": 1,
                "rationale": "Infected tissue is **acidic**. Local anesthetics are weak bases (pKa ~8). In an acidic environment, they accept a proton and become **ionized (charged)**. The charged form cannot cross the lipid membrane to reach the intracellular binding site."
            },
            {
                "question": "**2. Which local anesthetic is an ester that is naturally occurring and possesses intrinsic vasoconstrictive properties?**",
                "options": [
                    "Lidocaine",
                    "Procaine",
                    "Cocaine",
                    "Bupivacaine",
                    "Benzocaine"
                ],
                "correctAnswer": 2,
                "rationale": "**Cocaine** blocks the reuptake of norepinephrine, causing vasoconstriction. This makes it unique and useful for ENT procedures to control bleeding."
            },
            {
                "question": "**3. A patient undergoing spinal anesthesia with Lidocaine later reports severe pain and burning in the buttocks and legs, without motor weakness. What is the most likely diagnosis?**",
                "options": [
                    "Cauda Equina Syndrome",
                    "Epidural Hematoma",
                    "Transient Neurologic Symptoms (TNS)",
                    "Meningitis",
                    "Allergic Reaction"
                ],
                "correctAnswer": 2,
                "rationale": "**TNS (Transient Neurologic Symptoms)** is a known complication of **Lidocaine spinal anesthesia**. It presents as pain/dysesthesia in the lower back/legs but notably **lacks** sensory/motor/bowel/bladder deficits (distinguishing it from Cauda Equina Syndrome)."
            },
            {
                "question": "**4. A child treated with a topical teething gel develops cyanosis and 'chocolate-colored' blood. Supplemental oxygen does not improve the saturation. Which agent is implicated?**",
                "options": [
                    "Lidocaine",
                    "Benzocaine",
                    "Bupivacaine",
                    "Procaine",
                    "Ropivacaine"
                ],
                "correctAnswer": 1,
                "rationale": "**Benzocaine** (and Prilocaine) causes **Methemoglobinemia** by oxidizing hemoglobin to methemoglobin (Fe3+), which cannot bind oxygen. This is a medical emergency treated with Methylene Blue."
            },
            {
                "question": "**5. In a case of severe Local Anesthetic Systemic Toxicity (LAST) with cardiovascular collapse, what is the critical antidotal therapy?**",
                "options": [
                    "IV Sodium Bicarbonate",
                    "IV Epinephrine",
                    "IV Lipid Emulsion (Intralipid)",
                    "IV Flumazenil",
                    "IV Calcium Gluconate"
                ],
                "correctAnswer": 2,
                "rationale": "**IV Lipid Emulsion (Intralipid)** is the antidote. It creates a 'lipid sink' that extracts the lipophilic local anesthetic from the plasma, reversing toxicity."
            }
        ],
        "flashcards": [
            {
                "front": "How do you distinguish Amides from Esters by name?",
                "back": "Amides have **Two 'i's** (Lidocaine). Esters have **One 'i'** (Procaine).",
                "tag": "Pharmacology"
            },
            {
                "front": "What is the intracellular target of Local Anesthetics?",
                "back": "Voltage-Gated Sodium Channels (Open/Inactivated states).",
                "tag": "Mechanism"
            },
            {
                "front": "Which local anesthetic causes Methemoglobinemia?",
                "back": "Benzocaine (and Prilocaine).",
                "tag": "Toxicology"
            },
            {
                "front": "Which local anesthetic is most cardiotoxic?",
                "back": "Bupivacaine.",
                "tag": "Toxicology"
            },
            {
                "front": "Why is epinephrine added to local anesthetics?",
                "back": "To cause vasoconstriction, decrease absorption (less toxicity), and prolong duration.",
                "tag": "Pharmacology"
            },
            {
                "front": "What are the early signs of Local Anesthetic Toxicity?",
                "back": "Perioral numbness, metallic taste, tinnitus.",
                "tag": "Clinical Signs"
            },
            {
                "front": "What is the antidote for Local Anesthetic Systemic Toxicity?",
                "back": "IV Lipid Emulsion (Intralipid).",
                "tag": "Treatment"
            },
            {
                "front": "Which class of Local Anesthetics has a high risk of allergy?",
                "back": "Esters (due to PABA metabolite).",
                "tag": "Adverse Effects"
            },
            {
                "front": "Does a lower pKa mean faster or slower onset?",
                "back": "Faster onset (closer to physiologic pH = more uncharged form).",
                "tag": "Pharmacokinetics"
            },
            {
                "front": "What complication is specific to Lidocaine spinal anesthesia?",
                "back": "Transient Neurologic Symptoms (TNS).",
                "tag": "Adverse Effects"
            }
        ],
        "ankingResource": {
            "primarySource": "Physeo",
            "chapter": "Pharmacology > Neuro > Local Anesthetics",
            "alternatives": [
                {
                    "resource": "FirstAid",
                    "chapter": "Pharmacology > Local Anesthetics"
                }
            ]
        },
        "pearls": [
            {
                "title": "Two I's",
                "content": "Amides have **two I's** in their name (L**i**doca**i**ne). Esters only have one. This rule always works for the boards."
            },
            {
                "title": "Infection and Failure",
                "content": "You can't numb an abscess. The bacteria make the tissue acidic. The drug gets protonated (ionized) outside the nerve and bounces off the membrane like a tennis ball."
            },
            {
                "title": "Chocolate Blood",
                "content": "Benzocaine (Baby Orajel) turns blood chocolate brown (Methemoglobinemia). The pulse ox will read 85% and won't budge with oxygen. Treat with Methylene Blue (which turns urine blue/green)."
            }
        ],
        "mindmap": """## Local Anesthetics

### Classification
- **Esters (1 'i')**: Procaine, Cocaine, Benzocaine. PABA Allergy.
- **Amides (2 'i's)**: Lidocaine, Bupivacaine. Hepatic metabolism.

### Mechanism
- **Block Na+ Channels**: Intracellular binding.
- **pH Dependence**: Acidic tissue (infection) = Poor effect.

### Specific Drugs
- **Cocaine**: Vasoconstrictor.
- **Benzocaine**: Methemoglobinemia.
- **Bupivacaine**: Cardiotoxic.
- **Lidocaine**: TNS (Spinal).

### Toxicity (LAST)
- **CNS**: Numbness -> Seizures.
- **CV**: Collapse.
- **Rx**: Intralipid."""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l66_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l66.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l66" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l66",
    "title": "Lecture #66: Local Anesthetics",
    "module": "Neuropharmacology",
    "tags": "Lecture #66",
    "path": "content/json/l66.file.js",
    "readingTime": 5
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l66")

if __name__ == "__main__":
    create_l66_file()
