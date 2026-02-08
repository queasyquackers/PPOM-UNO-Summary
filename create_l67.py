import json
import os

def create_l67_file():
    summary_md = """# Lecture #67: Pharmacology of Opioids

**Lecturer:** M. Pino, Ph.D.
**Session:** Lecture #67

## Mechanism and Receptors

Opioids bind to G-protein coupled receptors (**Gi/o**) to inhibit neuronal transmission.
1.  **Presynaptic:** Close voltage-gated **Ca2+ channels** -> Decreased neurotransmitter release (Glutamate, Substance P).
2.  **Postsynaptic:** Open **K+ channels** -> K+ efflux -> **Hyperpolarization**.

### Receptor Subtypes
-   **Mu (µ):** **Analgesia**, **Respiratory Depression**, **Constipation**, Euphoria, Sedation, Miosis. (Most clinically used opioids target this).
-   **Kappa (κ):** Analgesia, Sedation, **Dysphoria/Hallucinations** (Psychotomimetic effects).
-   **Delta (δ):** Analgesia.

## Classification and Key Drugs

### 1. Strong Agonists (Full Mu Agonists)
-   **Morphine:** The prototype.
    -   **Metabolism:** Glucuronidated to **Morphine-6-Glucuronide (M6G)** (Active/Potent) and M3G (Neuroexcitatory). **M6G accumulates in renal failure** -> Toxicity.
    -   **Histamine Release:** Causes pruritus, hypotension, bronchoconstriction (Pretreat with antihistamines).
-   **Fentanyl:** Highly lipophilic, **100x more potent** than morphine. Used in anesthesia and chronic pain (Patch). **No histamine release** (Cardiac stable).
-   **Meperidine:**
    -   **Antimuscarinic:** Causes **Mydriasis** (dilated pupils) and **Tachycardia** (unlike other opioids).
    -   **Metabolite:** **Normeperidine** accumulates (esp. in renal failure) -> **Seizures**.
    -   **Interaction:** **Serotonin Syndrome** if mixed with MAOIs/SSRIs (blocks 5-HT reuptake).
-   **Methadone:**
    -   **Long t1/2:** Used for maintenance/withdrawal (prevents cravings without high).
    -   **Pharmacology:** Mu agonist + **NMDA Antagonist** + 5-HT/NE reuptake inhibitor.
    -   **Toxicity:** **QT Prolongation** (Torsades).

### 2. Weak/Moderate Agonists
-   **Codeine:** Prodrug. Converted to Morphine by **CYP2D6**.
    -   **Pharmacogenetics:**
        -   **Poor Metabolizers:** No pain relief.
        -   **Ultrarapid Metabolizers:** Rapid conversion -> **Respiratory Depression** (Danger in children/breastfeeding).
-   **Tramadol:** Weak Mu agonist + **Inhibits 5-HT/NE reuptake** (SNRI-like).
    -   **Toxicity:** **Seizures** (lowers threshold), **Serotonin Syndrome**.
-   **Loperamide / Diphenoxylate:** Antidiarrheals. Low abuse potential (Loperamide doesn't cross BBB; Diphenoxylate mixed with Atropine).

### 3. Mixed Agonist-Antagonists
-   **Buprenorphine:** **Partial Mu Agonist** / Kappa Antagonist. High affinity.
    -   **Use:** Opioid Use Disorder (Suboxone = Buprenorphine + Naloxone). Precipitates withdrawal if full agonist is present.
-   **Pentazocine, Nalbuphine, Butorphanol:** **Kappa Agonist** / Mu Antagonist (or partial).
    -   **Effect:** Ceiling effect on respiration. **Dysphoria** (Kappa).

### 4. Antagonists
-   **Naloxone:**
    -   **IV/Intranasal.** Rapid onset. Short duration.
    -   **Use:** **Acute Overdose**. May need repeat dosing.
-   **Naltrexone:** Oral. Long duration. Used for **Relapse Prevention** (Opioid and Alcohol).
-   **Methylnaltrexone:** Peripheral Mu antagonist (Does not cross BBB).
    -   **Use:** **Opioid-Induced Constipation**.

## Adverse Effects & Toxicity

### Acute Toxicity (Overdose Triad)
1.  **Coma**
2.  **Miosis** (Pinpoint Pupils)
3.  **Respiratory Depression** (Cause of death)

### Tolerance
-   **Develops to:** Analgesia, Euphoria, Sedation, Respiratory Depression.
-   **NO TOLERANCE to:** **Constipation** and **Miosis**. (Patients on chronic opioids *always* need a bowel regimen).

### Withdrawal
-   Not life-threatening (unlike Alcohol/Benzo withdrawal), but miserable.
-   **Symptoms:** Autonomic Hyperactivity -> Rhinorrhea, Lacrimation, Yawning, Piloerection ("Cold Turkey"), Dilated Pupils, Diarrhea, Nausea/Vomiting.
-   **Neonatal Abstinence Syndrome (NAS):** High-pitched cry, seizures, diarrhea. Treat with Morphine/Methadone.

:::mnemonic
**Opioids "LOCK" everything down:**
- Miosis (Pinpoint pupils)
- Constipation (Locked bowels)
- Respiratory Depression

**Withdrawal "UNLOCKS" the floodgates:**
- Mydriasis (Dilated pupils)
- Diarrhea
- Rhinorrhea / Lacrimation (Runny nose/eyes)
:::
"""

    l67_data = {
        "id": "l67",
        "title": "Lecture #67: Opioids",
        "lecturer": "M. Pino, Ph.D.",
        "module": "Neuropharmacology",
        "session": "Lecture #67",
        "prev": "l66",
        "next": "l68",
        "pdf": "pdfs/Lecture #67. M. Pino, Ph.D. (PPT).pdf",
        "highYieldPdf": "content/L67_HighYield_Render.pdf",
        "transcript": "content/L67_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A patient with end-stage renal disease requires severe pain management. Which opioid metabolite is most likely to accumulate and cause neurotoxicity (seizures) in this patient?**",
                "options": [
                    "Morphine-6-Glucuronide",
                    "Normeperidine",
                    "6-Monoacetylmorphine",
                    "Codeine-6-Glucuronide",
                    "Noroxycodone"
                ],
                "correctAnswer": 1,
                "rationale": "While Morphine-6-Glucuronide accumulates, **Normeperidine** (metabolite of Meperidine) is famously associated with causing **seizures** in patients with renal failure. Morphine-6-Glucuronide causes respiratory depression/sedation. The question asks for neurotoxicity/seizures, making Normeperidine the classic answer (Meperidine is contraindicated in renal failure)."
            },
            {
                "question": "**2. A breastfeeding mother is prescribed Codeine for pain. Her infant becomes lethargic and develops respiratory depression. Genetic testing would likely reveal the mother has which phenotype?**",
                "options": [
                    "CYP2D6 Poor Metabolizer",
                    "CYP2D6 Ultrarapid Metabolizer",
                    "CYP3A4 Poor Metabolizer",
                    "CYP2C19 Extensive Metabolizer",
                    "P-glycoprotein deficiency"
                ],
                "correctAnswer": 1,
                "rationale": "Codeine is a prodrug converted to Morphine by **CYP2D6**. An **Ultrarapid Metabolizer** converts codeine to levels of morphine much higher than expected, which is then passed in breast milk, causing toxicity in the infant."
            },
            {
                "question": "**3. Which opioid lacks the characteristic miosis (pinpoint pupils) in overdose and may instead cause mydriasis and tachycardia?**",
                "options": [
                    "Morphine",
                    "Fentanyl",
                    "Methadone",
                    "Meperidine",
                    "Heroin"
                ],
                "correctAnswer": 3,
                "rationale": "**Meperidine** has **antimuscarinic** (atropine-like) effects. Therefore, it can cause mydriasis (dilated pupils) and tachycardia, distinguishing its toxidrome from other opioids."
            },
            {
                "question": "**4. A patient on chronic opioid therapy for cancer pain complains of severe constipation. Which agent treats this specifically without reversing analgesia?**",
                "options": [
                    "Naloxone",
                    "Naltrexone",
                    "Methylnaltrexone",
                    "Buprenorphine",
                    "Methadone"
                ],
                "correctAnswer": 2,
                "rationale": "**Methylnaltrexone** is a peripherally acting mu-opioid antagonist. It has a quaternary amine structure that prevents it from crossing the blood-brain barrier, so it relieves constipation (peripheral) without affecting analgesia (central)."
            },
            {
                "question": "**5. A patient taking an MAO Inhibitor for depression is given an opioid for shivering and develops hyperthermia, muscle rigidity, and confusion (Serotonin Syndrome). Which opioid was likely administered?**",
                "options": [
                    "Morphine",
                    "Codeine",
                    "Meperidine",
                    "Hydromorphone",
                    "Oxymorphone"
                ],
                "correctAnswer": 2,
                "rationale": "**Meperidine** (and Tramadol, Dextromethorphan) has weak serotonin reuptake inhibitory effects. When combined with MAOIs, it can precipitate life-threatening **Serotonin Syndrome**."
            }
        ],
        "flashcards": [
            {
                "front": "What is the classic triad of Opioid Overdose?",
                "back": "1. Coma\n2. Respiratory Depression\n3. Miosis (Pinpoint Pupils)",
                "tag": "Clinical Signs"
            },
            {
                "front": "To which two opioid effects does tolerance NOT develop?",
                "back": "1. Constipation\n2. Miosis",
                "tag": "Adverse Effects"
            },
            {
                "front": "Which opioid metabolite causes seizures?",
                "back": "Normeperidine (metabolite of Meperidine).",
                "tag": "Toxicology"
            },
            {
                "front": "Which opioid has antimuscarinic effects (tachycardia, mydriasis)?",
                "back": "Meperidine.",
                "tag": "Pharmacology"
            },
            {
                "front": "What is the mechanism of Methylnaltrexone?",
                "back": "Peripheral Mu Antagonist (Block GI receptors, spares CNS analgesia).",
                "tag": "Mechanism"
            },
            {
                "front": "Which enzyme converts Codeine to Morphine?",
                "back": "CYP2D6.",
                "tag": "Metabolism"
            },
            {
                "front": "What is the mechanism of Opioid receptors (cellular)?",
                "back": "Close Presynaptic Ca2+ channels; Open Postsynaptic K+ channels.",
                "tag": "Mechanism"
            },
            {
                "front": "Which mixed agonist acts as a Kappa agonist and Mu antagonist?",
                "back": "Pentazocine (can cause dysphoria/hallucinations).",
                "tag": "Pharmacology"
            },
            {
                "front": "Why is Methadone used for opioid withdrawal?",
                "back": "Long half-life allows for tapering and suppression of withdrawal symptoms.",
                "tag": "Treatment"
            },
            {
                "front": "What drug combination is used for maintenance to prevent misuse by injection?",
                "back": "Buprenorphine + Naloxone (Suboxone). Naloxone is inactive orally but active if injected.",
                "tag": "Treatment"
            }
        ],
        "ankingResource": {
            "primarySource": "Physeo",
            "chapter": "Pharmacology > Neuro > Opioids",
            "alternatives": [
                {
                    "resource": "FirstAid",
                    "chapter": "Pharmacology > Opioids"
                }
            ]
        },
        "pearls": [
            {
                "title": "No Tolerance",
                "content": "You never get used to the constipation or the pinpoint pupils. You can be on heroin for 20 years and you will still be constipated and have miosis."
            },
            {
                "title": "Gallbladder Attacks",
                "content": "Opioids cause contraction of the **Sphincter of Oddi**. This can worsen biliary colic. Meperidine was traditionally said to have less of this effect, but that's debated. Morphine is definitely a culprit."
            },
            {
                "title": "The Meperidine Exception",
                "content": "Meperidine is the weird opioid. It breaks the rules: 1. Causes **Mydriasis** (not miosis). 2. Causes **Tachycardia** (not bradycardia). 3. Causes **Seizures** (Normeperidine). 4. Causes **Serotonin Syndrome**."
            }
        ],
        "mindmap": """## Opioids

### Receptors (Gi coupled)
- **Mu**: Analgesia, Resp Depression, Constipation, Euphoria.
- **Kappa**: Dysphoria, Sedation.

### Full Agonists
- **Morphine**: Histamine release, M6G accumulation.
- **Meperidine**: Seizures, Serotonin Syndrome, Mydriasis.
- **Methadone**: Long acting, QT prolong.
- **Fentanyl**: High potency, Lipid soluble.

### Partial/Weak
- **Codeine**: CYP2D6 -> Morphine.
- **Tramadol**: SNRI + Mu. Seizures.

### Antagonists
- **Naloxone**: Acute overdose.
- **Naltrexone**: Maintenance (Anti-craving).
- **Methylnaltrexone**: Constipation (Peripheral).

### Toxicity
- **Overdose**: Coma, Miosis, Resp Depression.
- **Side Effects**: Constipation (No tolerance)."""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l67_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l67.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l67" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l67",
    "title": "Lecture #67: Opioids",
    "module": "Neuropharmacology",
    "tags": "Lecture #67",
    "path": "content/json/l67.file.js",
    "readingTime": 6
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l67")

if __name__ == "__main__":
    create_l67_file()
