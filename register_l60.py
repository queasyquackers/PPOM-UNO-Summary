import os
import re
import json

def get_summary_and_mindmap(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    summary_match = re.search(r'(# Lecture #60.*?)\n## Review Questions', content, re.DOTALL)
    summary_text = summary_match.group(1).strip() if summary_match else ""
    
    mindmap_match = re.search(r'## Mind Map Structure\n(.*?)$', content, re.DOTALL)
    mindmap = mindmap_match.group(1).strip() if mindmap_match else ""
    
    return summary_text, mindmap

def update_lectures_data():
    summary, mindmap = get_summary_and_mindmap('e:/PPOM-UNO-Summary/content/L60_Summary.md')
    
    questions = [
        {
            "question": "**1. A patient presents with low back pain. Structural exam reveals a positive Seated Flexion Test on the Right. The Right Sacral Sulcus is deep, and the Right ILA is posterior/inferior. The Spring test is negative. What is the diagnosis?**",
            "options": [
                "Right Unilateral Sacral Extension",
                "Left Unilateral Sacral Extension",
                "Right Unilateral Sacral Flexion",
                "Left Unilateral Sacral Flexion",
                "Right on Right Sacral Torsion"
            ],
            "correctAnswer": 2,
            "rationale": "The positive Seated Flexion Test lateralizes to the **Right**. Deep Sulcus + Posterior ILA on the **SAME side** indicates a **Unilateral (Shear)** dysfunction. Since the landmarks (Deep/Posterior) indicate the sacral base has moved anteriorly (Flexion), and the Spring test is Negative (confirms Flexion), it is a Right Unilateral Sacral Flexion."
        },
        {
            "question": "**2. In a patient with a Left Unilateral Sacral Extension, what are the expected findings for the L5 vertebra?**",
            "options": [
                "Rotated Left",
                "Rotated Right",
                "Neutral",
                "Flexed",
                "Sidebent Right"
            ],
            "correctAnswer": 1,
            "rationale": "In Left Unilateral Extension, the Left sacral base is Shallow (Posterior) and the Right is relatively Deep (Anterior). **L5 rotates toward the Deep Sulcus** (Right). Therefore, L5 is Rotated Right."
        },
        {
            "question": "**3. Which of the following findings is consistent with a Bilateral Sacral Flexion?**",
            "options": [
                "Positive Spring Test",
                "Bilateral Shallow Sulci",
                "Bilateral Posterior/Inferior ILAs",
                "Positive Sphinx Test",
                "Bilateral Anterior/Superior ILAs"
            ],
            "correctAnswer": 2,
            "rationale": "Bilateral Flexion = Nutated (Base Forward, Apex Back). Apex Back = Posterior ILAs. Base Forward = Deep Sulci. Spring Test should be Negative."
        },
        {
            "question": "**4. The Spring Test applies a force in which direction?**",
            "options": [
                "Anteriorly on the Sacral Base",
                "Posteriorly on the Sacral Apex",
                "Anteriorly on the L5 Spinous Process",
                "Superiorly on the Ischial Tuberosities",
                "Medially on the PSIS"
            ],
            "correctAnswer": 0,
            "rationale": "The Spring test involves applying a PA (Posterior-to-Anterior) force on the **lumbosacral junction/sacral base** to assess for resistance."
        },
        {
            "question": "**5. Which axis is associated with Unilateral Sacral Dysfunctions (Shears)?**",
            "options": [
                "Superior Transverse",
                "Middle Transverse",
                "Inferior Transverse",
                "Oblique Axis",
                "No Axis (Non-physiologic shift)"
            ],
            "correctAnswer": 4,
            "rationale": "Unilateral dysfunctions are often called **Shears** because they do not occur around a specific axis, unlike torsions (Oblique) or physiologic flexion/extension (Middle Transverse)."
        }
    ]
    
    flashcards = [
        { "front": "Positive Spring Test indicates what?", "back": "Sacral Extension (Resistance / Bad Dog)", "tag": "Diagnosis" },
        { "front": "Negative Spring Test indicates what?", "back": "Sacral Flexion (Good Spring / Good Dog)", "tag": "Diagnosis" },
        { "front": "Landmarks for Unilateral Sacral Flexion (Same Side)?", "back": "Deep Sulcus + Posterior ILA (Same Side)", "tag": "Clinical" },
        { "front": "Landmarks for Unilateral Sacral Extension (Same Side)?", "back": "Shallow Sulcus + Anterior ILA (Same Side)", "tag": "Clinical" },
        { "front": "Seated Flexion Test lateralizes what?", "back": "Sacroiliac Dysfunction (Sacral side)", "tag": "Concept" },
        { "front": "Bilateral Sacral Flexion findings?", "back": "Deep Sulci Bilaterally, Posterior ILAs Bilaterally, Negative Spring", "tag": "Diagnosis" },
        { "front": "L5 Rotates toward which sacral landmark?", "back": "The Deep Sulcus", "tag": "Concept" }
    ]
    
    anking = {
        "primarySource": "BandB",
        "chapter": "Osteopathic Medicine > Sacrum",
        "alternatives": [
            { "resource": "FirstAid", "chapter": "OMM > Sacrum" },
            { "resource": "Savarese", "chapter": "Sacrum" }
        ]
    }
    
    pearls = [
        { "title": "Spring Test Mnemonic", "content": "Springing is fun (Flexion) -> Negative is Flexion. Resistance is hard -> Positive is Extension." },
        { "title": "Shear Identification", "content": "If the Deep Sulcus and Posterior ILA are on the **SAME** side, it's a Shear (Unilateral). If they are on **OPPOSITE** sides, it's a Torsion." }
    ]

    file_path = 'e:/PPOM-UNO-Summary/lectures_data.js'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find insertion point (before last "];")
    insert_pos = content.rfind('];')
    
    new_lecture = {
        "id": "l60",
        "title": "Lecture #60: Sacral MET (Part 2)",
        "lecturer": "Deb Whitson, D.O.",
        "module": "OMM",
        "session": "Lecture #60",
        "prev": "l59",
        "next": "l61",
        "pdf": "pdfs/Lecture # 60. D. Whitson, D.O. (PPT).pdf",
        "transcript": "",
        "summary": summary,
        "questions": questions,
        "flashcards": flashcards,
        "ankingResource": anking,
        "pearls": pearls,
        "mindmap": mindmap
    }
    
    js_obj = "    {\n"
    js_obj += f"        id: '{new_lecture['id']}',\n"
    js_obj += f"        title: '{new_lecture['title']}',\n"
    js_obj += f"        lecturer: '{new_lecture['lecturer']}',\n"
    js_obj += f"        module: '{new_lecture['module']}',\n"
    js_obj += f"        session: '{new_lecture['session']}',\n"
    js_obj += f"        prev: '{new_lecture['prev']}',\n"
    js_obj += f"        next: '{new_lecture['next']}',\n"
    js_obj += f"        pdf: '{new_lecture['pdf']}',\n"
    js_obj += f"        transcript: '{new_lecture['transcript']}',\n"
    js_obj += "        summary: `" + new_lecture['summary'].replace('`', '\\`') + "`,\n"
    js_obj += "        questions: " + json.dumps(new_lecture['questions'], indent=12).replace('"', "'").replace("'question'", "question").replace("'options'", "options").replace("'correctAnswer'", "correctAnswer").replace("'rationale'", "rationale") + ",\n"
    js_obj += "        flashcards: " + json.dumps(new_lecture['flashcards'], indent=12) + ",\n"
    js_obj += "        ankingResource: " + json.dumps(new_lecture['ankingResource'], indent=12) + ",\n"
    js_obj += "        pearls: " + json.dumps(new_lecture['pearls'], indent=12) + ",\n"
    js_obj += "        mindmap: `" + new_lecture['mindmap'].replace('`', '\\`') + "`\n"
    js_obj += "    },\n"

    new_content = content[:insert_pos] + js_obj + content[insert_pos:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Successfully registered L60 in lectures_data.js")

if __name__ == "__main__":
    update_lectures_data()
