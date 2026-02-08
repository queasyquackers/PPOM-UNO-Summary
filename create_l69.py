import json
import os

def create_l69_file():
    summary_md = """# Lecture #69: Psychopharmacology II (Substance Use Disorders)

**Lecturer:** A. Coladner, D.O.
**Session:** Lecture #69

## Substance Use Disorder (SUD)
**Definition:** Recurrent use causes clinical impairment.
**Severity:** Mild (2-3 criteria), Moderate (4-5), Severe (6+).

**The 11 Criteria (Grouped):**
1.  **Impaired Control:** Taking more than intended, inability to cut down, time spent seeking/using, cravings.
2.  **Social Impairment:** Failure to fulfill obligations (work/school), giving up activities, interpersonal problems.
3.  **Risky Use:** Hazardous situations (driving), continued use despite physical/psychological problems.
4.  **Pharmacological:** **Tolerance** and **Withdrawal**.
    *   *Note: Tolerance/Withdrawal do NOT count for diagnosis if taking medications as prescribed under medical supervision.*

## Specific Substances: Intoxication & Withdrawal

### 1. Alcohol
-   **Intoxication:** Slurred speech, Incoordination, Nystagmus, Impaired judgment.
    -   *Poisoning:* Respiratory depression, Coma.
-   **Withdrawal:**
    -   **Minor (6-12h):** Tremors, Anxiety, Insomnia.
    -   **Severe (48-96h):** **Delirium Tremens (DTs)** -> Agitation, Hallucinations, **Autonomic Instability** (Fever, Tachycardia). **Life-Threatening.**
-   **Treatment:**
    -   **Benzodiazepines** (Diazepam/Chlordiazepoxide) for withdrawal.
    -   **Thiamine** (before glucose) to prevent Wernicke's Encephalopathy.

### 2. Opioids
-   **Intoxication:** **Miosis (Pinpoint pupils)**, Respiratory Depression, Coma, Constipation.
-   **Withdrawal:** **Flu-like illness.**
    -   **Rhinorrhea** (Runny nose), **Lacrimation** (Tearing).
    -   **Yawning**.
    -   **Piloerection** ("Gooseflesh" -> "Cold Turkey").
    -   **Mydriasis** (Dilated pupils).
    -   *Not life-threatening.*

### 3. Stimulants (Cocaine/Amphetamines)
-   **Intoxication:** **Mydriasis (Dilated pupils)**, Tachycardia, Agitation, **Chest Pain**.
-   **Withdrawal ("The Crash"):**
    -   **Dysphoria** / Depression.
    -   **Fatigue / Hypersomnia** (Vivid unpleasant dreams).
    -   **Increased Appetite**.

### 4. Cannabis
-   **Intoxication:** **Conjunctival Injection (Red eyes)**, Increased Appetite ("Munchies"), Dry mouth, Tachycardia.
-   **Withdrawal:** Irritability, Anxiety, Decreased appetite, Insomnia.

### 5. Nicotine
-   **Withdrawal:** Irritability, Anxiety, **Increased Appetite** (Weight gain), Difficulty concentrating.
-   **Treatment:**
    -   **Varenicline (Chantix):** Partial Agonist at a4b2 nicotinic receptor. Reduces craving AND reduces reward from smoking. **Most effective.**
    -   **Bupropion:** DA/NE reuptake inhibitor.
    -   **NRT:** Patch/Gum.

### 6. Hallucinogens (PCP)
-   **Intoxication:**
    -   **Violent behavior**.
    -   **Nystagmus** (Vertical or Horizontal).
    -   **Analgesia** (Superhuman strength feeling).

### 7. Sedative-Hypnotics (Benzos/Barbs)
-   **Withdrawal:** Similar to **Alcohol**. Can cause **Seizures** and **Death**.
"""

    l69_data = {
        "id": "l69",
        "title": "Lecture #69: Substance Use Disorders",
        "lecturer": "A. Coladner, D.O.",
        "module": "Neuropharmacology",
        "session": "Lecture #69",
        "prev": "l68",
        "next": "l70",
        "pdf": "pdfs/Lecture #69. A. Coladner, D.O. (PPT).pdf",
        "highYieldPdf": "content/L69_HighYield_Render.pdf",
        "transcript": "content/L69_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A patient presents with agitation, violent behavior, and decreased sensitivity to pain. Physical exam reveals vertical nystagmus. Which substance is most likely involved?**",
                "options": [
                    "Cocaine",
                    "Heroin",
                    "Phencyclidine (PCP)",
                    "LSD",
                    "Marijuana"
                ],
                "correctAnswer": 2,
                "rationale": "**PCP** intoxication is characterized by **aggression/violence**, **medical/physical nystagmus** (vertical is specific), and **analgesia**."
            },
            {
                "question": "**2. Which set of symptoms best characterizes Opioid Withdrawal?**",
                "options": [
                    "Seizures, Tremors, Tachycardia",
                    "Rhinorrhea, Lacrimation, Yawning, Dilated Pupils",
                    "Increased Appetite, Hypersomnia, Depression",
                    "Red eyes, Dry mouth, Euphoria",
                    "Nystagmus, Ataxia, Slurred Speech"
                ],
                "correctAnswer": 1,
                "rationale": "Opioid withdrawal is a **'Flu-like'** illness: Runny nose (**Rhinorrhea**), Tearing (**Lacrimation**), **Yawning**, loose stools. Sympathetic rebound causes **Dilated Pupils** (Mydriasis) and Piloerection."
            },
            {
                "question": "**3. A heavy smoker wants to quit. Which medication is a partial agonist at the nicotinic receptor and is considered the most effective pharmacotherapy?**",
                "options": [
                    "Bupropion",
                    "Nicotine Patch",
                    "Varenicline",
                    "Clonidine",
                    "Nortriptyline"
                ],
                "correctAnswer": 2,
                "rationale": "**Varenicline** is a **partial agonist** at the alpha-4-beta-2 nicotinic receptor. It reduces cravings (agonist effect) while blocking the rewarding effects of nicotine if the patient smokes (antagonist effect)."
            },
            {
                "question": "**4. 48 hours after hospital admission for a surgery, a patient develops confusion, severe tremors, diaphoresis, hypertension (170/100), and tachycardia (120 bpm). He claims he 'sees spiders'. What is the treatment of choice?**",
                "options": [
                    "Haloperidol",
                    "Benzodiazepines",
                    "Thiamine alone",
                    "Propofol",
                    "Carbamazepine"
                ],
                "correctAnswer": 1,
                "rationale": "This patient is in **Delirium Tremens (DTs)** (Alcohol Withdrawal Delirium). The first-line treatment is **Benzodiazepines** (e.g., Diazepam, Lorazepam) to bind GABA-A receptors and calm the autonomic hyperactivity."
            },
            {
                "question": "**5. What is the characteristic sign of Cannabis intoxication?**",
                "options": [
                    "Miosis",
                    "Nystagmus",
                    "Conjunctival Injection",
                    "Hypersalivation",
                    "Bradycardia"
                ],
                "correctAnswer": 2,
                "rationale": "**Conjunctival Injection** (Red eyes) is the hallmark sign of Cannabis use. Other signs include dry mouth (cotton mouth), tachycardia, and increased appetite."
            }
        ],
        "flashcards": [
            {
                "front": "What is the hallmark physical exam finding of PCP intoxication?",
                "back": "Nystagmus (Vertical or Horizontal).",
                "tag": "Clinical Signs"
            },
            {
                "front": "What are the classic signs of Opioid Withdrawal?",
                "back": "Rhinorrhea, Lacrimation, Yawning, Piloerection, Dilated Pupils.",
                "tag": "Clinical Signs"
            },
            {
                "front": "Which withdrawal syndrome is life-threatening?",
                "back": "Alcohol (and Sedative-Hypnotic) withdrawal (Risk of Seizures/DTs).",
                "tag": "Clinical Signs"
            },
            {
                "front": "What characterizes Stimulant Withdrawal?",
                "back": "\"The Crash\": Depression, Fatigue/Sleep, Increased Appetite.",
                "tag": "Clinical Signs"
            },
            {
                "front": "Mechanism of Varenicline?",
                "back": "Partial Agonist at Nicotinic Receptors.",
                "tag": "Mechanism"
            },
            {
                "front": "Sign of Cannabis Intoxication?",
                "back": "Conjunctival Injection (Red Eyes).",
                "tag": "Clinical Signs"
            },
            {
                "front": "Pupil size in Opioid Intoxication vs Withdrawal?",
                "back": "Intoxication: Constricted (Miosis).\nWithdrawal: Dilated (Mydriasis).",
                "tag": "Clinical Signs"
            },
            {
                "front": "Pupil size in Stimulant Intoxication?",
                "back": "Dilated (Mydriasis).",
                "tag": "Clinical Signs"
            },
            {
                "front": "Treatment for Delirium Tremens?",
                "back": "Benzodiazepines.",
                "tag": "Treatment"
            },
            {
                "front": "Why is Thiamine given in alcoholics?",
                "back": "To prevent Wernicke's Encephalopathy (Ataxia, Confusion, Ophthalmoplegia).",
                "tag": "Treatment"
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
                "title": "Pupils Don't Lie",
                "content": "**Pinpoint** = Opioid Overdose (or Cholinergics).\n**Dilated** = Stimulants (Cocaine/Amphetamines) OR Opioid Withdrawal OR Anticholinergics."
            },
            {
                "title": "Wet vs Dry",
                "content": "Opioid Withdrawal makes you **Wet** (Tears, Runny nose, Diarrhea, Sweat).\nAnticholinergic Toxicity makes you **Dry** (Bone dry)."
            },
            {
                "title": "The Yawn",
                "content": "If a patient on the wards is complaining of 10/10 pain and they are **yawning** excessively... check for opioid withdrawal. Yawning is a very specific sign."
            }
        ],
        "mindmap": """## Substance Use Disorders

### Alcohol/Depressants
- **Intoxication**: Slurred speech, Ataxia.
- **Withdrawal**: Tremors -> Seizures -> DTs (Fatal).
- **Rx**: Benzos.

### Opioids
- **Intoxication**: Miosis, Resp Depression.
- **Withdrawal**: Flu-like, Mydriasis, Yawning, Rhino/Lacrinnorrhea.

### Stimulants
- **Intoxication**: Mydriasis, Tachycardia, Chest Pain.
- **Withdrawal**: Sleep, Hunger, Depression.

### Hallucinogens
- **PCP**: Violence, Nystagmus.
- **Cannabis**: Red eyes, Munchies."""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l69_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l69.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l69" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l69",
    "title": "Lecture #69: Substance Use Disorders",
    "module": "Neuropharmacology",
    "tags": "Lecture #69",
    "path": "content/json/l69.file.js",
    "readingTime": 5
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l69")

if __name__ == "__main__":
    create_l69_file()
