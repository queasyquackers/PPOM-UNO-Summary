import json
import os

def create_l68_file():
    summary_md = """# Lecture #68: Psychopharmacology I (Drugs of Abuse)

**Lecturer:** G. Otazu, Ph.D.
**Session:** Lecture #68

## The Reward Pathway

**Mesolimbic Dopamine Pathway:**
-   **Origin:** Ventral Tegmental Area (**VTA**) in the Midbrain.
-   **Target:** Nucleus Accumbens (**NAc**) in the Limbic System (Basal Ganglia).
-   **Function:** **Reward Prediction Error**. release dopamine when a reward is *unexpected* or *better than expected*.
-   **Drugs of Abuse:** Hijack this system by causing a massive, non-adapting release of **Dopamine** in the NAc.

## Stimulants

### 1. Cocaine
-   **Mechanism:** **Blocks DAT** (Dopamine Transporter) -> Inhibits reuptake of DA, NE, and 5-HT.
-   **Clinical Effects:** Euphoria, Agitation, **Mydriasis** (Dilated pupils), Hypertension, Tachycardia.
-   **Toicity:**
    -   **Coronary Vasospasm:** Causes MI / Chest pain.
    -   **Nasal Septum Perforation:** Due to chronic vasoconstriction.
-   **Treatment of Cocaine Chest Pain:**
    -   Use **Benzodiazepines** and **Alpha-blockers** (Phentolamine).
    -   **NEVER use Beta-blockers alone**: Leads to "unopposed alpha stimulation" -> Worsens hypertension and vasoconstriction.

### 2. Amphetamines
-   **Mechanism:**
    1.  **Reverses DAT:** Pumps Dopamine *out* of the nerve terminal.
    2.  **Inhibits VMAT:** Displaces Dopamine from vesicles.
-   **Clinical:** Similar to cocaine but longer duration.

### 3. MDMA (Ecstasy)
-   **Mechanism:** **Reverses SERT** (Serotonin Transporter) -> Massive 5-HT release (and DA/NE).
-   **Toxicity:**
    -   **Hyperthermia** (Dance parties + dehydration).
    -   **Hyponatremia** (Due to excessive water intake + SIADH).
    -   **Serotonin Syndrome**.

### 4. Nicotine
-   **Mechanism:** Agonist at **Nicotinic ACh Receptors (nAChR)** on VTA neurons -> Depolarization -> DA release.

## Depressants

### 1. Alcohol (Ethanol)
-   **Mechanism:** Enhances **GABA-A** currents, Blocks **NMDA** (Glutamate) receptors.
-   **Kinetics:** Zero-order metabolism.
-   **Withdrawal (Life-Threatening):**
    -   **6-12h:** Tremors, Anxiety, Insomnia.
    -   **12-48h:** **Alcoholic Hallucinosis** (Visual, stable vitals).
    -   **2-4 days:** **Delirium Tremens (DTs):** Agitation, fever, tachycardia, hallucinations. **High Mortality**.
    -   **Treatment:** **Benzodiazepines** (Chlordiazepoxide, Lorazepam).

### 2. Benzodiazepines & Barbiturates
-   **Target:** Allosteric site on **GABA-A Receptor** (Cl- channel).
-   **Benzodiazepines:** Increase **Frequency** of opening. ("**F**renzodiazepines").
    -   *Safety:* Harder to overdose alone (unless mixed with alcohol). Treat OD with **Flumazenil**.
-   **Barbiturates:** Increase **Duration** of opening. ("**BarbiDURAT**es").
    -   *Safety:* Low therapeutic index (Linear dose-response). Can cause fatal respiratory depression directly.

### 3. Opioids
-   **Mechanism:** Mu agonists. Disinhibit VTA dopamine neurons by inhibiting GABAergic interneurons.

## Hallucinogens

### 1. Marijuana (Cannabinoids)
-   **Active Agent:** THC.
-   **Target:** **CB1 Receptor** (Gi coupled). Inhibits GABA release -> Disinhibits Dopamine.
-   **Clinical:** Conjunctival injection (Red eyes), Increased appetite ("Munchies"), Dry mouth.

### 2. PCP (Phencyclidine)
-   **Mechanism:** **NMDA Receptor Antagonist**.
-   **Clinical:** **Violence**, Agitation, **Nystagmus** (Vertical/Horizontal), Analgesia.
-   **Street Name:** Angel Dust.

### 3. LSD
-   **Mechanism:** **5-HT2A** Receptor Agonist.
"""

    l68_data = {
        "id": "l68",
        "title": "Lecture #68: Psychopharmacology I (Drugs of Abuse)",
        "lecturer": "G. Otazu, Ph.D.",
        "module": "Neuropharmacology",
        "session": "Lecture #68",
        "prev": "l67",
        "next": "l69",
        "pdf": "pdfs/Lecture #68. G. Otazu, Ph.D. (PPT).pdf",
        "highYieldPdf": "content/L68_HighYield_Render.pdf",
        "transcript": "content/L68_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A 24-year-old male is brought to the ED with severe agitation, chest pain, and dilated pupils. His BP is 180/110. He admits to using cocaine. Which medication is CONTRAINDICATED?**",
                "options": [
                    "Lorazepam",
                    "Nitroglycerin",
                    "Phentolamine",
                    "Metoprolol",
                    "Verapamil"
                ],
                "correctAnswer": 3,
                "rationale": "**Beta-blockers (Metoprolol)** are contraindicated in cocaine induced chest pain due to **unopposed alpha vasoconstriction**. Blocking beta-2 (vasodilation) leaves alpha-1 (vasoconstriction) unopposed, potentially worsening hypertension and coronary spasm."
            },
            {
                "question": "**2. Which agent works by increasing the FREQUENCY of GABA-A chloride channel opening?**",
                "options": [
                    "Phenobarbital",
                    "Diazepam",
                    "Ethanol",
                    "Baclofen",
                    "Zolpidem"
                ],
                "correctAnswer": 1,
                "rationale": "**Benzodiazepines (Diazepam)** increase the **Frequency** of channel opening. **Barbiturates (Phenobarbital)** increase the **Duration**."
            },
            {
                "question": "**3. A patient is brought in violent, agitated, and insensitive to pain. Physical exam reveals vertical and horizontal nystagmus. Which drug mechanism explains this presentation?**",
                "options": [
                    "NMDA Antagonist",
                    "CB1 Agonist",
                    "Mu Opioid Agonist",
                    "Dopamine Reuptake Inhibitor",
                    "5-HT2A Agonist"
                ],
                "correctAnswer": 0,
                "rationale": "This is classic **PCP** intoxication (Violence, Nystagmus, Analgesia). PCP is an **NMDA Receptor Antagonist**."
            },
            {
                "question": "**4. 72 hours after his last drink, a chronic alcoholic develops severe agitation, global confusion, fever (103°F), and tachycardia. What is the diagnosis?**",
                "options": [
                    "Alcoholic Hallucinosis",
                    "Delirium Tremens",
                    "Wernicke's Encephalopathy",
                    "Korsakoff's Psychosis",
                    "Hepatic Encephalopathy"
                ],
                "correctAnswer": 1,
                "rationale": "**Delirium Tremens (DTs)** is the most severe form of alcohol withdrawal, occurring 2-4 days after cessation. It is characterized by autonomic instability (fever, tachycardia) and delirium. It has a high mortality rate."
            },
            {
                "question": "**5. MDMA (Ecstasy) uniquely reverses the transporter for which neurotransmitter, leading to distinct risks of hyperthermia and hyponatremia?**",
                "options": [
                    "Dopamine",
                    "Norepinephrine",
                    "Serotonin",
                    "Acetylcholine",
                    "GABA"
                ],
                "correctAnswer": 2,
                "rationale": "While MDMA affects all monoamines, it has a high affinity for **SERT (Serotonin Transporter)**, causing massive serotonin release. This contributes to the risk of Serotonin Syndrome, hyperthermia, and SIADH (hyponatremia)."
            }
        ],
        "flashcards": [
            {
                "front": "What is the specific target of the reward pathway?",
                "back": "Nucleus Accumbens (NAc).",
                "tag": "Neuroanatomy"
            },
            {
                "front": "Why are Beta-blockers contraindicated in Cocaine toxicity?",
                "back": "Unopposed Alpha-adrenergic vasoconstriction.",
                "tag": "Clinical Pharmacology"
            },
            {
                "front": "Mechanism of Amphetamines?",
                "back": "1. Reverse DAT (Pump DA out).\n2. Inhibit VMAT (Displace DA from vesicles).",
                "tag": "Mechanism"
            },
            {
                "front": "Mechanism of Benzodiazepines vs Barbiturates?",
                "back": "Benzos: Increase **Frequency**.\nBarbs: Increase **Duration**.",
                "tag": "Mechanism"
            },
            {
                "front": "What is the drug of choice for Alcohol Withdrawal / DTs?",
                "back": "Benzodiazepines (e.g., Chlordiazepoxide, Lorazepam).",
                "tag": "Treatment"
            },
            {
                "front": "Drug associated with Vertical Nystagmus and Violence?",
                "back": "PCP (Phencyclidine).",
                "tag": "Clinical Signs"
            },
            {
                "front": "Which receptor does Marijuana (THC) bind to?",
                "back": "CB1 Receptor.",
                "tag": "Mechanism"
            },
            {
                "front": "Mechanism of MDMA (Ecstasy)?",
                "back": "Reverses SERT -> Massive Serotonin release.",
                "tag": "Mechanism"
            },
            {
                "front": "Severe complication of Alcohol Withdrawal (2-4 days)?",
                "back": "Delirium Tremens (DTs) - Autonomic instability, high mortality.",
                "tag": "Clinical Signs"
            },
            {
                "front": "Mechanism of Cocaine?",
                "back": "Blocks Dopamine Reuptake (DAT inhibitor).",
                "tag": "Mechanism"
            }
        ],
        "ankingResource": {
            "primarySource": "Physeo",
            "chapter": "Psychiatry > Substance Use Disorder",
            "alternatives": [
                {
                    "resource": "FirstAid",
                    "chapter": "Psychiatry > Substance Use"
                }
            ]
        },
        "pearls": [
            {
                "title": "Benzos vs Barbs",
                "content": "**Ben**-zodiaze-**pines** increase **Fre**-quency (**Ben** likes it **Fre**-quently).\n**Barbi**-turates increase **Dura**-tion (**Barbi** likes it to last a long **Dura**-tion)."
            },
            {
                "title": "Cocaine and Beta Blockers",
                "content": "Imagine a hose (blood vessel). Alpha constricts it, Beta-2 dilates it. Cocaine turns both on. If you block Beta (dilate), you are left with pure Alpha (constrict). The hose clamps shut. Hypertension crisis."
            },
            {
                "title": "The Alcoholic Timeline",
                "content": "6-12h: Shakes/Anxiety.\n12-48h: Bugs crawling (Hallucinosis - but they know it's not real/vitals stable).\n48-96h: DELIRIUM TREMENS (Confused, Fever, Tachycardia - They think it's real and they might die)."
            }
        ],
        "mindmap": """## Drugs of Abuse

### Stimulants
- **Mechanism**: Increase Dopamine (Reward Pathway: VTA -> Nucleus Accumbens).
- **Cocaine**: Blocks DAT. Chest Pain (No Beta Blockers).
- **Amphetamine**: Reverses DAT/VMAT.
- **MDMA**: Reverses SERT. Hyperthermia, Hyponatremia.

### Depressants
- **Alcohol**: GABA agonist, NMDA antag. DTs (Fatal withdrawal).
- **Benzos**: GABA-A Frequency.
- **Barbs**: GABA-A Duration.
- **Opioids**: Mu agonist. Disinhibit VTA.

### Hallucinogens
- **PCP**: NMDA Antagonist. Violence, Nystagmus.
- **LSD**: 5-HT2A Agonist.
- **Marijuana**: CB1 Agonist."""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l68_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l68.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l68" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l68",
    "title": "Lecture #68: Drugs of Abuse",
    "module": "Neuropharmacology",
    "tags": "Lecture #68",
    "path": "content/json/l68.file.js",
    "readingTime": 5
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l68")

if __name__ == "__main__":
    create_l68_file()
