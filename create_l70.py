import json
import os

def create_l70_file():
    summary_md = """# Lecture #70: Pediatric History & Physical Exam I (Newborn - 5 Years)

**Lecturer:** A. Patel, D.O.
**Session:** Lecture #70

## The Newborn Exam

### 1. Vital Signs & Growth
-   **APGAR Score:** At 1 and 5 minutes. (Appearance, Pulse (>100=2), Grimace, Activity, Respiration).
    -   *Score 7-10:* Excellent.
-   **Weight:**
    -   Lose up to 10% in first few days. Regain birth weight by **2 weeks**.
    -   **Double** birth weight by **4 months**.
    -   **Triple** birth weight by **1 year**.
-   **Head Circumference:** Anterior Fontanelle closes by **12-18 months**. Posterior by 1-2 months.

### 2. HEENT
-   **Head Swellings:**
    -   **Caput Succedaneum:** Crosses suture lines ("Cap" wears like a hat). Resolves days.
    -   **Cephalohematoma:** Does **NOT** cross suture lines (Blood under periosteum). Resolves weeks. Risk of Jaundice.
    -   **Subgaleal Hemorrhage:** Crosses sutures, massive blood loss. **Dangerous**.
-   **Eyes:**
    -   **Red Reflex:** White reflex (Leukocoria) = Cataracts or **Retinoblastoma**.
    -   **Conjunctivitis:**
        -   **Gonococcal:** Day 2-5. Purulent. Risk of blindness. Tx: IM Ceftriaxone. Prevention: Erythromycin ointment.
        -   **Chlamydial:** Day 5-14. Watery/Mucopurulent. Tx: Oral Macrolide (Risk of Pyloric Stenosis).
-   **Ears:** Low set = Down Syndrome.
-   **Mouth:** Epstein Pearls (Benign cysts).

### 3. Chest & Abdomen
-   **Clavicles:** Check for fx (crepitus/step-off) from birth trauma.
-   **Umbilical Cord:** Should have **2 Arteries, 1 Vein**. (Single artery -> Renal/Cardiac anomalies).
    -   *Granuloma:* Treat with Silver Nitrate.
-   **Hernias:** Umbilical (Observe until age 4-5).

### 4. Genitourinary (GU)
-   **Hydrocele:** Fluid in scrotum. **Transilluminates**.
-   **Cryptorchidism:** Undescended testes.
-   **Hypospadias:** Urethra on ventral surface. **Contraindication to Circumcision** (Foreskin needed for repair).

### 5. Musculoskeletal (Hips)
-   **Developmental Dysplasia of the Hip (DDH):** Risk factors: Breech, Female, Family Hx.
-   **Barlow:** **B**ack and In (Adduct & push Posterior) -> **Dislocates**.
-   **Ortolani:** **O**ut and Anterior (Abduct & pull Anterior) -> **Reduces** (Clunk).

### 6. Skin
-   **Milia:** Tiny white cysts on nose (Benign).
-   **Erythema Toxicum:** blotchy red rash with central papule/pustule. "Flea-bitten" appearance. Benign. Eosinophils.
-   **Mongolian Spots (Congenital Dermal Melanocytosis):** Blue-grey macules on back/buttocks. Benign.
-   **Hemangioma:** Vascular tumor. Grows then regresses. Tx (**Propranolol**) only if visual axis or airway compromised.

## Development & Screening
-   **Screening:**
    -   **Metabolic:** Newborn screen (PKU, Hypothyroid, etc).
    -   **Autism:** M-CHAT at **18 and 24 months**.
    -   **Lead:** 12 and 24 months.
-   **Milestones (Rule of Thumb):**
    -   2 mo: Lift head.
    -   4 mo: Roll over.
    -   6 mo: Sit unassisted.
    -   9 mo: Crawl, Pincer grasp.
    -   12 mo: Walk, First words.
"""

    l70_data = {
        "id": "l70",
        "title": "Lecture #70: Pediatric H&P I",
        "lecturer": "A. Patel, D.O.",
        "module": "Pediatrics",
        "session": "Lecture #70",
        "prev": "l69",
        "next": "l71",
        "pdf": "pdfs/Lecture # 70. A. Patel, D.O. (PPT).pdf",
        "highYieldPdf": "content/L70_HighYield_Render.pdf",
        "transcript": "content/L70_FullTranscript.txt",
        "summary": summary_md,
        "questions": [
            {
                "question": "**1. A newborn has a scalp swelling that does NOT cross suture lines. What is the most likely diagnosis?**",
                "options": [
                    "Caput Succedaneum",
                    "Cephalohematoma",
                    "Subgaleal Hemorrhage",
                    "Hydrocephalus",
                    "Meningocele"
                ],
                "correctAnswer": 1,
                "rationale": "**Cephalohematoma** is a subperiosteal hemorrhage that is limited by the suture lines of the skull bones. **Caput** crosses sutures (edema)."
            },
            {
                "question": "**2. During a newborn exam, you note a 'clunk' when abducting the infant's hip while lifting the trochanter anteriorly. Which maneuver is this?**",
                "options": [
                    "Barlow",
                    "Ortolani",
                    "Galeazzi",
                    "Moro",
                    "Babinski"
                ],
                "correctAnswer": 1,
                "rationale": "**Ortolani** maneuver reduces a dislocated hip. You abduct (**O**ut) and lift, feeling a clunk as the head returns to the acetabulum. Barlow dislocates an unstable hip."
            },
            {
                "question": "**3. A 4-day-old infant presents with copious purulent eye discharge and eyelid swelling. Gram stain shows gram-negative diplococci. What is the treatment?**",
                "options": [
                    "Oral Erythromycin",
                    "Topical Gentamicin",
                    "IM Ceftriaxone",
                    "Oral Acyclovir",
                    "Observation"
                ],
                "correctAnswer": 2,
                "rationale": "This is **Gonococcal Conjunctivitis** (Onset 2-5 days, Purulent). It requires systemic treatment with **IM Ceftriaxone** to prevent corneal perforation and blindness."
            },
            {
                "question": "**4. By what age should an infant expect to double their birth weight?**",
                "options": [
                    "2 weeks",
                    "2 months",
                    "4 months",
                    "6 months",
                    "1 year"
                ],
                "correctAnswer": 2,
                "rationale": "Infants typically **double** their birth weight by **4 months** and **triple** it by **1 year**."
            },
            {
                "question": "**5. You notice a scrotal mass in a male newborn. It is painless and transilluminates brightly with a flashlight. What is the diagnosis?**",
                "options": [
                    "Inguinal Hernia",
                    "Hydrocele",
                    "Testicular Torsion",
                    "Varicocele",
                    "Cryptorchidism"
                ],
                "correctAnswer": 1,
                "rationale": "**Hydrocele** is a fluid collection in the tunica vaginalis. The hallmark finding is **Transillumination**. Hernias usually do not transilluminate (unless fluid-filled, but usually bowel)."
            }
        ],
        "flashcards": [
            {
                "front": "What is the difference between Caput Succedaneum and Cephalohematoma regarding suture lines?",
                "back": "Caput **Crosses** sutures. Cephalohematoma does **NOT**.",
                "tag": "Clinical Signs"
            },
            {
                "front": "When does birth weight double and triple?",
                "back": "Double: 4 months.\nTriple: 1 year.",
                "tag": "Growth"
            },
            {
                "front": "Maneuver to REDUCE a dislocated hip?",
                "back": "Ortolani (Abduct/Out + Lift).",
                "tag": "Physical Exam"
            },
            {
                "front": "Maneuver to DISLOCATE an unstable hip?",
                "back": "Barlow (Adduct/Back + Push).",
                "tag": "Physical Exam"
            },
            {
                "front": "Timing of Gonococcal vs Chlamydial Conjunctivitis?",
                "back": "Gonococcal: 2-5 Days.\nChlamydial: 5-14 Days.",
                "tag": "Infectious Disease"
            },
            {
                "front": "How many vessels in a normal umbilical cord?",
                "back": "3 Vessels: **2 Arteries, 1 Vein**.",
                "tag": "Anatomy"
            },
            {
                "front": "Diagnosis of scrotal mass that transilluminates?",
                "back": "Hydrocele.",
                "tag": "Diagnosis"
            },
            {
                "front": "Rash with 'flea-bitten' appearance (red blotch with central pustule) in newborn?",
                "back": "Erythema Toxicum Neonatorum (Benign).",
                "tag": "Dermatology"
            },
            {
                "front": "White reflex (Leukocoria) suggests?",
                "back": "Retinoblastoma or Congenital Cataracts.",
                "tag": "Diagnosis"
            },
            {
                "front": "When does the Anterior Fontanelle close?",
                "back": "12-18 Months.",
                "tag": "Growth"
            }
        ],
        "ankingResource": {
            "primarySource": "Physeo",
            "chapter": "Pediatrics > Newborn",
            "alternatives": [
                {
                    "resource": "FirstAid",
                    "chapter": "Public Health > Pediatrics"
                }
            ]
        },
        "pearls": [
            {
                "title": "Caput vs Cephalo",
                "content": "**Caput** wears a **Cap** (Caps cover the whole head, crossing sutures).\n**Cephalo**-hematoma is clearly defined by the bone (Does not cross)."
            },
            {
                "title": "Barlow vs Ortolani",
                "content": "**B**arlow goes **B**ack (Posterior) to dislocate.\n**O**rtolani goes **O**ut (Abduct) to reduce."
            },
            {
                "title": "Conjunctivitis Timing",
                "content": "**C**hemical (24h)\n**G**onococcal (2-5d)\n**C**hlamydial (5-14d)\n**H**erpes (2-4w)"
            }
        ],
        "mindmap": """## Pediatric H&P I

### Newborn
- **APGAR**: 1 & 5 min. Appearance, Pulse, Grimace, Activity, Resp.
- **Growth**: Double 4mo, Triple 1yr.
- **Head**: Caput (Crosses) vs Cephalo (No).
- **Eyes**: Leukocoria (Retinoblastoma). Gono (2-5d) vs Chlam (5-14d).

### Exam
- **Hips**: Barlow (Dislocate), Ortolani (Reduce).
- **GU**: Hydrocele (Transilluminate). Hypospadias (No circ).
- **Reflexes**: Moro, Rooting (Gone by 4-6mo).

### Skin
- **Benign**: Milia, E-Tox, Mongolian Spots.
- **Hemangioma**: Tx Prop if visual axis."""
    }

    # Write JS File
    js_content = f"window.receiveLectureContent({json.dumps(l70_data, indent=4)});"
    output_path = os.path.join("e:/PPOM-UNO-Summary/content/json/l70.file.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

    # Update Index
    index_path = os.path.join("e:/PPOM-UNO-Summary/lectures_index.js")
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    if "l70" not in index_content:
        insertion_point = index_content.rfind("]);")
        new_entry = """
  {
    "id": "l70",
    "title": "Lecture #70: Pediatric H&P I",
    "module": "Pediatrics",
    "tags": "Lecture #70",
    "path": "content/json/l70.file.js",
    "readingTime": 5
  }"""
        prefix = "," if not index_content[:insertion_point].strip().endswith(",") else ""
        new_index_content = index_content[:insertion_point] + prefix + new_entry + "\n" + index_content[insertion_point:]
        
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_index_content)
        print("Updated lectures_index.js")
    else:
        print("Index already contains l70")

if __name__ == "__main__":
    create_l70_file()
