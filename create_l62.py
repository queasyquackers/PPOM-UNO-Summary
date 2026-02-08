import json
import os

def create_l62_file():
    summary_md = """# Lecture #62: Brachial Plexus Lesions and Neuropathies

**Lecturer:** Matthew Mihlbachler, Ph.D.
**Session:** Lecture #62

## Introduction to Peripheral Nerve Injuries (Slide 2-3)

Understanding peripheral nerve injuries requires a solid grasp of the brachial plexus architecture and the relationship between spinal nerves, dermatomes, and myotomes. A "nerve" is a bundle of axons, and injury can be partial or complete. The clinical presentation—whether it's a motor deficit (weakness/paralysis) or sensory deficit (numbness/tingling)—depends entirely on the location of the lesion. We differentiate between injuries at the "Root/Trunk" level (affecting multiple nerves) and "Peripheral Nerve" level (affecting specific muscles/skin areas).

### Key Principles
- **Roots vs. Peripheral Nerves:** Lesions at the root level affect myotomes (groups of muscles) and dermatomes (skin strip). Peripheral nerve lesions affect the specific muscles and skin supplied by that nerve.
- **Variation:** Anatomical variations exist; not every patient presents with textbook symptoms.
- **Scope:** This lecture focuses on classic, well-documented neuropathies.

## Brachial Plexus Trunk Lesions

Injuries to the trunks of the brachial plexus cause widespread deficits because they affect fibers destined for multiple peripheral nerves. These are often associated with traumatic traction injuries during birth or severe trauma in adults.

### Superior Trunk Lesion (C5-C6): Erb-Duchenne Palsy (Slide 35-40)

Excessive separation of the neck and shoulder (e.g., shoulder dystocia during birth, motorcycle accident) tears the C5 and C6 roots of the Superior Trunk. This devastates the muscles of the shoulder and arm supplied by these roots.

- **Nerves Affected:**
    - **Musculocutaneous n.:** Loss of Biceps Brachii (Flexion, Supination).
    - **Axillary n.:** Loss of Deltoid (Abduction) and Teres Minor (Lateral Rotation).
    - **Suprascapular n.:** Loss of Supraspinatus (Abduction initiation) and Infraspinatus (Lateral Rotation).
- **Resulting Posture:** The "Waiter's Tip" position. The arm is adducted (loss of deltoid/supraspinatus), medially rotated (loss of lateral rotators), and extended/pronated (loss of biceps).

:::correlate
Erb-Duchenne Palsy (Erb's Palsy)

- **Pathophysiology:** Traction injury rupturing **Superior Trunk (C5-C6)**.
- **Presentation:** **"Waiter's Tip"** position:
    - **Adducted** (shoulder)
    - **Medially Rotated** (shoulder)
    - **Extended** (elbow)
    - **Pronated** (forearm)
- **Sensory Loss:** **Lateral** aspect of arm and forearm (C5-C6 dermatomes).
- **Risk Factors:** Shoulder dystocia (macrosomia), motorcycle accidents.
:::

:::mnemonic
**Erb-Duchenne Palsy**
**"Waiter's Tip"**

- Imagine a waiter subtly accepting a tip behind their back: Arm hangs by side, rotated internally, palm facing back.
:::

### Inferior Trunk Lesion (C8-T1): Klumpke's Palsy (Slide 43-49)

Hyper-abduction of the arm (e.g., catching a tree branch while falling, pulling an infant's arm during birth) tears the C8 and T1 roots. This primarily affects the intrinsic muscles of the hand.

- **Nerves Affected:**
    - **Ulnar n. (C8-T1):** All intrinsic hand muscles it supplies.
    - **Median n. (C8-T1 component):** Intrinsic hand muscles (Thumbnail, lateral lumbricals).
- **Key Deficit:** Loss of **ALL intrinsic hand muscles** (Lumbricals and Interossei).
    - **Function of Lumbricals:** Flex MCP, Extend PIP/DIP.
    - **Loss:** Extension of MCP (by unopposed extensor digitorum), Flexion of PIP/DIP (by unopposed flexors).
- **Result:** **Total Claw Hand**.

:::correlate
Klumpke's Palsy

- **Pathophysiology:** Traction injury rupturing **Inferior Trunk (C8-T1)**.
- **Presentation:** **"Total Claw Hand"** (Slide 49).
    - **Clawing:** Hyperextension of MCP + Flexion of PIP/DIP in **ALL** digits (2-5).
    - **Atrophy:** Wasting of intrinsic hand muscles (interossei guttering).
- **Sensory Loss:** **Medial** aspect of arm, forearm, and hand (C8-T1 dermatomes).
- **Lecturer's Point:** Distinguish from isolated Ulnar Claw (which spares digits 2-3). Klumpke affects **ALL** digits because C8-T1 feeds both Ulnar and Median intrinsic muscles.
:::

## Peripheral Nerve Injuries: The Scapula and Shoulder

Moving distally, isolated nerve injuries present with more specific functional losses.

### Long Thoracic Nerve (C5-C7) (Slide 52)
Lesion causes paralysis of the **Serratus Anterior**, which anchors the scapula to the thoracic wall.

:::correlate
Winged Scapula

- **Pathophysiology:** Damage to **Long Thoracic Nerve** (Saltatory/Stab wound, Radical Mastectomy).
- **Presentation:** Medial border of scapula protrudes posteriorly ("wings") when patient pushes against a wall.
- **Functional Deficit:** Inability to abduct arm above horizontal (loss of scapular rotation).
:::

### Axillary Nerve (C5-C6) (Slide 54-55)
Commonly injured in **Surgical Neck Fractures** of the humerus or **Anterior-Inferior Dislocation** of the shoulder.

:::highyield
**Axillary Nerve Injury**
- **Motor:** Loss of **Abduction** (>15 degrees) due to **Deltoid** paralysis (Slide 54).
- **Sensory:** Loss of sensation over the **"Regimental Badge"** area (Lateral shoulder).
:::

## Radial Nerve Injuries (Posterior Cord)

The Radial nerve supplies the **Extensors** of the arm, forearm, and hand. Presentation depends heavily on the level of injury.

### Axilla Level: "Saturday Night Palsy" (Slide 57-58)
Compression in the axilla (e.g., drunk arm over chair, crutches).
- **Deficits:**
    - **Triceps:** Loss of elbow extension (often spared if gravity assists).
    - **Wrist/Fingers:** Loss of extension -> **Wrist Drop**.
    - **Sensory:** Posterior arm, forearm, and dorsum of hand.

:::correlate
Saturday Night Palsy (Radial Neuropathy at Axilla)

- **Pathophysiology:** Compression of Radial Nerve in the axilla.
- **Presentation:** **Wrist Drop** (inability to extend wrist/fingers).
- **Sensory:** Numbness on posterior arm/forearm/hand.
- **Differentiation:** Triceps reflex may be diminished (unlike distal lesions).
:::

### Mid-Shaft Humerus Fracture: Radial Groove (Slide 60-61)
The radial nerve spirals around the humerus in the radial groove.
- **Deficits:**
    - **Triceps SPARED:** Branches to triceps arise *proximal* to the groove. Elbow extension is intact.
    - **Wrist/Fingers:** **Wrist Drop** persists (extensors of forearm are distal).
    - **Sensory:** **Posterior Arm sensory SPARED**. Numbness is limited to the dorsum of the hand.

:::highyield
**Radial Nerve: Axilla vs. Spiral Groove**
- **Axilla (Saturday Night):** Triceps weak/paralyzed + Wrist Drop + Posterior Arm Numbness.
- **Spiral Groove (Humerus Fracture):** Triceps **SPARED** + Wrist Drop + **NO** Posterior Arm Numbness.
:::

## Median Nerve Injuries (Lateral/Medial Cords)

The Median nerve supplies the **Flexors** of the forearm (except FCU and ulnar half of FDP) and the **Thenar** muscles (OAF: Oppose, Abduct, Flex thumb) and **Lateral 2 Lumbricals**.

### Lesion at Elbow: Supracondylar Fracture (Slide 65-68)
- **Motor Loss:**
    - **Forearm Flexors:** Loss of Pronation, Wrist Flexion (weak), Digit Flexion (Digits 1-3).
    - **Hand:** Loss of Thenar muscles (No opposition).
- **Presentation:**
    - **Hand of Benediction:** occurs when asked to **MAKE A FIST**. Digits 1, 2, 3 cannot flex. Digits 4, 5 flex (Ulnar nerve intact).
    - **Ape Hand:** Atrophy of Thenar eminence (thumb lies flat).

:::correlate
Hand of Benediction (Benediction Sign)

- **Pathophysiology:** High Median Nerve Injury (at Elbow/Proximal).
- **Presentation:** When asked to **MAKE A FIST**, index and middle fingers remain extended; thumb remains extended. Ring and little fingers flex.
- **Mechanism:** Loss of FDS (all) and FDP (lateral half). FDP (medial half) supplied by Ulnar n. remains intact.
- **Lecturer's Point:** Do not confuse with Ulnar Claw! Benediction is an ACTIVE sign (asking to make a fist).
:::

### Lesion at Wrist: Carpal Tunnel Syndrome / Slash (Slide 69-70)
- **Motor Loss:** **LOAF** muscles (Lateral 2 Lumbricals, Opponens, Abductor pollicis brevis, Flexor pollicis brevis).
    - **Forearm Flexors SPARED:** Patient CAN flex fingers (can make a fist). NO Hand of Benediction.
- **Sensory Loss:** Lateral 3.5 digits.
    - **Carpal Tunnel:** **Palmar cutaneous branch SPARED** (branches proximal to tunnel). Palm sensation intact.
    - **Suicide Slash:** Palmar cutaneous branch cut. Palm numb.

:::correlate
Carpal Tunnel Syndrome

- **Pathophysiology:** Compression of Median Nerve in carpal tunnel.
- **Presentation:** Paresthesia in lateral 3.5 digits. Thenar atrophy (late).
- **Spare:** **Palmar Cutaneous Branch** (sensation over thenar eminence is INTACT).
- **Risk Factors:** Repetitive use, pregnancy, hypothyroidism.
:::

## Ulnar Nerve Injuries (Medial Cord)

The Ulnar nerve supplies **FCU**, **Medial half of FDP**, and most **Intrinsic Hand Muscles** (Hypothenar, Interossei, Medial 2 Lumbricals, Adductor Pollicis).

### Lesion at Elbow: Cubital Tunnel Syndrome (Slide 72)
- **Motor Loss:**
    - **FCU & Medial FDP:** Weak wrist flexion, Loss of DIP flexion in digits 4-5.
    - **Intrinsics:** Loss of abduction/adduction (Interossei), Loss of lumbricals 3-4.
- **Presentation:** **Ulnar Claw** (when opening hand).
- **Ulnar Paradox:** Clawing is **LESS** severe at the elbow than at the wrist. Why? Because the FDP (flexor) to digits 4-5 is ALSO paralyzed, so the fingers aren't pulled into as much flexion.

:::correlate
Cubital Tunnel Syndrome

- **Pathophysiology:** Compression of Ulnar Nerve at medial epicondyle (funny bone).
- **Presentation:** Numbness in medial 1.5 digits. Weak grasp. Mild Clawing.
- **Ulnar Paradox:** High lesion = Less Clawing. Low lesion = More Clawing.
:::

### Lesion at Wrist: Guyon's Canal Syndrome (Slide 76-78)
- **Motor Loss:** Intrinsic muscles ONLY. Forearm flexors (FDP) are SPARED.
- **Presentation:** **Severe Ulnar Claw**.
    - Since FDP is working, it pulls the DIP joints of digits 4-5 into flexion against the paralyzed lumbricals/interossei.

:::correlate
Guyon's Canal Syndrome (Ulnar Tunnel)

- **Pathophysiology:** Compression at wrist (e.g., cyclist handlebars).
- **Presentation:** **Ulnar Claw** (Severe).
    - **Claw:** Hyperextension of MCP + Flexion of PIP/DIP (Digits 4-5).
- **Sensory:** Medial 1.5 digits. **Dorsal cutaneous branch SPARED** (branches proximal to wrist) -> Dorsal hand sensation intact.
:::

:::highyield
**The "Hand" Signs Summary** (Slide 80)

| Sign | Nerve | Level | Action/Context | Feature |
| :--- | :--- | :--- | :--- | :--- |
| **Wrist Drop** | Radial | Axilla/Humerus | Resting/Extension | Cannot extend wrist |
| **Hand of Benediction** | Median | Elbow (High) | Making a Fist | Digits 1-3 won't flex |
| **Ape Hand** | Median | Any | Resting | Thenar atrophy |
| **Ulnar Claw** | Ulnar | Wrist (Low) | Extending Fingers | Digits 4-5 clawed |
| **Total Claw** | C8-T1 (Klumpke) | Trunk | Resting | All digits clawed |
:::
"""

    l62_data = {
        "id": "l62",
        "title": "Lecture #62: Brachial Plexus Lesions and Neuropathies",
        "lecturer": "Matthew Mihlbachler, Ph.D.",
        "module": "Neurology",
        "session": "Lecture #62",
        "prev": "l61",
        "next": "l63",
        "pdf": "pdfs/Lecture # 62. M. Mihlbachler, Ph.D. (PPT).pdf",
        "highYieldPdf": "content/L62_HighYield_Render.pdf",
        "transcript": "content/L62_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A 21-year-old wrestler complains of weakness in his hand and tingling in his 5th digit. Examination reveals weakness in finger adduction and abduction. He has tenderness at the medial epicondyle. Which diagnosis is most likely?**",
                "options": [
                    "Carpal Tunnel Syndrome",
                    "Cubital Tunnel Syndrome",
                    "Guyon's Canal Syndrome",
                    "Erb-Duchenne Palsy",
                    "Pronator Teres Syndrome"
                ],
                "correctAnswer": 1,
                "rationale": "**Cubital Tunnel Syndrome** is compression of the ulnar nerve at the medial epicondyle. It causes paresthesia in the ulnar distribution and weakness of intrinsic hand muscles (interossei), leading to difficulty holding a piece of paper (adduction)."
            },
            {
                "question": "**2. A newborn presents with the right arm adducted, medially rotated, elbow extended, and forearm pronated (Waiter's Tip position). Where is the lesion?**",
                "options": [
                    "C8-T1 Roots (Inferior Trunk)",
                    "C5-C6 Roots (Superior Trunk)",
                    "Posterior Cord",
                    "Axillary Nerve",
                    "Long Thoracic Nerve"
                ],
                "correctAnswer": 1,
                "rationale": "**Erb-Duchenne Palsy** involves the **Superior Trunk (C5-C6)**. Loss of abductors (C5), lateral rotators (C5), and flexors/supinators (C5-C6) leads to the classic posture."
            },
            {
                "question": "**3. A patient with a mid-shaft humeral fracture presents with wrist drop. Detailed sensation testing reveals numbness on the dorsum of the hand, but sensation on the posterior arm is INT. Which nerve structure is spared?**",
                "options": [
                    "Deep branch of Radial Nerve",
                    "Posterior Brachial Cutaneous Nerve",
                    "Superficial branch of Radial Nerve",
                    "Axillary Nerve",
                    "Musculocutaneous Nerve"
                ],
                "correctAnswer": 1,
                "rationale": "In a **Spiral Groove** lesion (mid-shaft fracture), the **Posterior Brachial Cutaneous Nerve** (supplying posterior arm skin) is spared because it branches off the Radial nerve *proximal* to the groove."
            },
            {
                "question": "**4. When asked to make a fist, a patient's index and middle fingers remain extended, while the ring and little fingers flex normally. The thumb also fails to flex. This presentation is best described as:**",
                "options": [
                    "Ulnar Claw",
                    "Total Claw Hand",
                    "Hand of Benediction",
                    "Wrist Drop",
                    "Dupuytren's Contracture"
                ],
                "correctAnswer": 2,
                "rationale": "**Hand of Benediction** is a sign of **High Median Nerve Injury** (at the elbow). It is an *active* sign seen when attempting to make a fist, due to paralysis of FDS and lateral FDP."
            },
            {
                "question": "**5. A patient presents with 'winging' of the right scapula when pushing against a wall. The injured nerve originates from which spinal levels?**",
                "options": [
                    "C3, C4, C5",
                    "C5, C6, C7",
                    "C8, T1",
                    "C5, C6",
                    "C6, C7, C8"
                ],
                "correctAnswer": 1,
                "rationale": "The **Long Thoracic Nerve**, which innervates the **Serratus Anterior**, originates from roots **C5, C6, C7** ('C5-6-7 wings your heaven')."
            }
        ],
        "flashcards": [
            {
                "front": "What is the classic posture of Erb-Duchenne Palsy?",
                "back": "Waiter's Tip: Adducted, Medially Rotated, Extended, Pronated",
                "tag": "Clinical"
            },
            {
                "front": "Which nerve roots are damaged in Klumpke's Palsy?",
                "back": "C8-T1 (Inferior Trunk)",
                "tag": "Anatomy"
            },
            {
                "front": "What physical exam finding is characteristic of Long Thoracic Nerve injury?",
                "back": "Winged Scapula (medial border protrudes)",
                "tag": "Diagnosis"
            },
            {
                "front": "What area of sensation is lost in Axillary Nerve injury?",
                "back": "Lateral shoulder ('Regimental Badge' area)",
                "tag": "Clinical"
            },
            {
                "front": "Distinguish Radial Nerve injury at Axilla vs. Mid-Humerus regarding Triceps function.",
                "back": "Axilla: Triceps weak/paralyzed. Mid-Humerus: Triceps SPARED.",
                "tag": "Diagnosis"
            },
            {
                "front": "What nerve injury causes 'Hand of Benediction'?",
                "back": "High Median Nerve injury (at elbow)",
                "tag": "Clinical"
            },
            {
                "front": "Why is sensation over the thenar eminence spared in Carpal Tunnel Syndrome?",
                "back": "The Palmar Cutaneous branch of the Median nerves branches PROXIMAL to the carpal tunnel.",
                "tag": "Anatomy"
            },
            {
                "front": "What is the 'Ulnar Paradox'?",
                "back": "High ulnar lesions cause LESS clawing than low lesions (because FDP to digits 4-5 is also paralyzed).",
                "tag": "Concept"
            },
            {
                "front": "Which deformity results from combined Combined Median and Ulnar intrinsic paralysis (e.g. Klumpke's)?",
                "back": "Total Claw Hand (Clawing of all digits)",
                "tag": "Clinical"
            },
            {
                "front": "What is the common cause of 'Saturday Night Palsy'?",
                "back": "Compression of the Radial Nerve in the axilla (e.g., arm over chair).",
                "tag": "Etiology"
            }
        ],
        "ankingResource": {
            "primarySource": "BandB",
            "chapter": "Neurology > Peripheral Nervous System > Brachial Plexus",
            "alternatives": [
                {
                    "resource": "FirstAid",
                    "chapter": "Neurology > Pathology > Brachial Plexus Lesions"
                },
                {
                    "resource": "Pathoma",
                    "chapter": "N/A"
                }
            ]
        },
        "pearls": [
            {
                "title": "Benediction vs. Claw",
                "content": "Benediction is an ACTIVE sign (High Median injury, asked to make fist). Ulnar Claw is a PASSIVE resting deformity (Low Ulnar injury)."
            },
            {
                "title": "C5-6-7 Wings Back to Heaven",
                "content": "Mnemonic for Long Thoracic Nerve (C5-C6-C7) -> Serratus Anterior -> Winged Scapula."
            },
            {
                "title": "The Palmar Cutaneous Exception",
                "content": "Both Median and Ulnar nerves have palmar cutaneous branches that arise PROXIMAL to the wrist tunnels. If the PALM is numb, the lesion is NOT in the tunnel (Carpal/Guyon)."
            }
        ],
        "mindmap": """## Brachial Plexus Injuries

### Trunk Lesions
- **Superior Trunk (C5-C6)**: Erb-Duchenne (Waiter's Tip)
- **Inferior Trunk (C8-T1)**: Klumpke's (Total Claw)

### Peripheral Nerves
- **Long Thoracic**: Winged Scapula (C5-7)
- **Axillary**: Deltoid paralysis (Surgical neck #)
- **Radial**: Wrist Drop (Saturday Night Palsy)
- **Median**: 
    - High: Hand of Benediction
    - Low: Ape Hand / Carpal Tunnel
- **Ulnar**:
    - High: Cubital Tunnel
    - Low: Ulnar Claw (Guyon's Canal)"""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l62_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l62.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l62" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l62",
    "title": "Lecture #62: Brachial Plexus Lesions and Neuropathies",
    "module": "Neurology",
    "tags": "Lecture #62",
    "path": "content/json/l62.file.js",
    "readingTime": 5
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l62")

if __name__ == "__main__":
    create_l62_file()
