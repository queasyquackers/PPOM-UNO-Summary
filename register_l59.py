import os
import re
import json

def get_summary_and_mindmap(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract Summary (from start of text after header to before Review Questions)
    # The header usually ends with "Session: ..."
    # Let's find "## Introduction" and start there?
    # Or just take everything after the preamble.
    
    # Based on file viewing:
    # # Lecture #59...
    # ...
    # **Session:** Lecture #59
    #
    # ## Introduction...
    
    # We want to capture from "# Lecture #59" down to just before "## Review Questions"
    summary_match = re.search(r'(# Lecture #59.*?)\n## Review Questions', content, re.DOTALL)
    summary_text = summary_match.group(1).strip() if summary_match else ""
    
    # Extract Mind Map
    mindmap_match = re.search(r'## Mind Map Structure\n(.*?)$', content, re.DOTALL)
    mindmap = mindmap_match.group(1).strip() if mindmap_match else ""
    
    return summary_text, mindmap

def update_lectures_data():
    summary, mindmap = get_summary_and_mindmap('e:/PPOM-UNO-Summary/content/L59_Summary.md')
    
    # Hardcoded Data
    questions = [
        {
            "question": "**1. A 75-year-old male presents with a history of falls. The Timed Up and Go (TUG) test is performed, and the patient takes 16 seconds to complete it. What is the clinical interpretation?**",
            "options": [
                "Normal mobility (Low risk)",
                "Indicates high risk of falls (> 12 seconds)",
                "Indicates severe dementia",
                "Indicates need for immediate hospitalization",
                "Indicates orthostatic hypotension"
            ],
            "correctAnswer": 1,
            "rationale": "A **TUG score > 12 seconds** indicates an increased risk of falling. Scores > 20 seconds indicate high risk. Under 10 seconds is considered normal."
        },
        {
            "question": "**2. Which of the following is an example of an Instrumental Activity of Daily Living (IADL)?**",
            "options": [
                "Bathing",
                "Dressing",
                "Managing Finances",
                "Toileting",
                "Feeding"
            ],
            "correctAnswer": 2,
            "rationale": "**Managing finances** is an IADL (requires higher cognitive function). Bathing, Dressing, Toileting, and Feeding are basic ADLs (DEATH mnemonic)."
        },
        {
            "question": "**3. According to the Beers Criteria, which class of medications should be avoided in the elderly due to the risk of confusion, urinary retention, and constipation?**",
            "options": [
                "ACE Inhibitors",
                "Anticholinergics (e.g., Diphenhydramine)",
                "Statins",
                "Calcium Channel Blockers",
                "SSRIs"
            ],
            "correctAnswer": 1,
            "rationale": "**Anticholinergics** (like Benadryl/Diphenhydramine) have strong side effects in the elderly (confusion, retention, constipation, dry mouth) and are on the Beers Criteria 'Do Not Use' list."
        },
        {
            "question": "**4. What is the primary difference between Dementia and Delirium?**",
            "options": [
                "Dementia is acute; Delirium is chronic",
                "Dementia affects attention first; Delirium affects memory first",
                "Delirium has an acute onset and fluctuating course; Dementia is chronic and progressive",
                "Delirium is irreversible; Dementia is reversible",
                "There is no difference"
            ],
            "correctAnswer": 2,
            "rationale": "**Delirium** is acute, fluctuating, and affects attention/consciousness (often reversible). **Dementia** is chronic, progressive, and initially affects memory (consciousness is intact until late stages)."
        },
        {
            "question": "**5. A 67-year-old female has a DEXA scan T-score of -2.7. What is the diagnosis?**",
            "options": [
                "Normal Bone Density",
                "Osteopenia",
                "Osteoporosis",
                "Severe Osteoporosis (with fracture)",
                "Osteomalacia"
            ],
            "correctAnswer": 2,
            "rationale": "A **T-score < -2.5** defines **Osteoporosis**. Osteopenia is between -1.0 and -2.5. Normal is > -1.0."
        }
    ]
    
    flashcards = [
        { "front": "What is the cutoff score for a positive Mini-Cog?", "back": "< 3/5 (Recall < 3 or Abnormal Clock)", "tag": "Diagnosis" },
        { "front": "Which screening tool is best for Mild Cognitive Impairment (MCI)?", "back": "MoCA (Montreal Cognitive Assessment)", "tag": "Diagnosis" },
        { "front": "Which vaccines are recommended specifically for adults > 65?", "back": "High-dose Flu, Pneumococcal (PCV20 or PCV15+PPSV23), Zoster (Shingrix)", "tag": "Prevention" },
        { "front": "What condition presents with high-frequency hearing loss in the elderly?", "back": "Presbycusis", "tag": "Clinical" },
        { "front": "What is the FRAX score used for?", "back": "Calculating 10-year fracture risk to guide treatment in Osteopenia", "tag": "Management" },
        { "front": "What is the most common cause of elder abuse?", "back": "Family members (90%)", "tag": "Clinical" }
    ]
    
    anking = {
        "primarySource": "BandB",
        "chapter": "Geriatrics > General",
        "alternatives": [
            { "resource": "FirstAid", "chapter": "Public Health Sciences > Geriatrics" },
            { "resource": "SketchyPath", "chapter": "Bone > Osteoporosis" }
        ]
    }
    
    pearls = [
         { "title": "S4 in Elderly", "content": "An S4 heart sound is often a normal finding in the elderly due to decreased ventricular compliance (stiff ventricle)." },
        { "title": "Atypical Presentation", "content": "Geriatric patients often present with 'confusion' or 'falls' for serious conditions like pneumonia, UTI, or MI, rather than typical fever or chest pain." },
        { "title": "IADLs vs ADLs", "content": "IADL impairment (Managing finances, driving) often precedes ADL impairment (Bathing, Eating). IADLs require higher-level executive function." },
        { "title": "Osteoporosis Cutoffs", "content": "Normal: > -1.0\nOsteopenia: -1.0 to -2.5\nOsteoporosis: < -2.5" },
        { "title": "Fall Risk Cutoff", "content": "A Timed Up and Go (TUG) test > 12 seconds indicates fall risk (>20s is high risk)." }
    ]

    file_path = 'e:/PPOM-UNO-Summary/lectures_data.js'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find insertion point (before last "];")
    insert_pos = content.rfind('];')
    
    # Construct new object
    new_lecture = {
        "id": "l59",
        "title": "Lecture #59: History and Physical Exam of the Aging Patient",
        "lecturer": "P. Ryo, D.O.",
        "module": "Clinical Medicine", # Adjusted to likely module name
        "session": "Lecture #59",
        "prev": "l58",
        "next": "",
        "pdf": "pdfs/Lecture # 59. P. Ryo, D.O. (PPT - with notes).pdf",
        "transcript": "transcripts/Lecture #59_ DPR_ History and Physical Exam of the Aging Patient Faculty_ P. Ryo, D.O..srt",
        "summary": summary,
        "questions": questions,
        "flashcards": flashcards,
        "ankingResource": anking,
        "pearls": pearls,
        "mindmap": mindmap
    }
    
    # Convert to JS string format manually to ensure backticks for summary/mindmap allow multiline
    
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
    
    # Summary with backticks, escaping existing backticks
    js_obj += "        summary: `" + new_lecture['summary'].replace('`', '\\`') + "`,\n"
    
    # Questions
    js_obj += "        questions: " + json.dumps(new_lecture['questions'], indent=12).replace('"', "'").replace("'question'", "question").replace("'options'", "options").replace("'correctAnswer'", "correctAnswer").replace("'rationale'", "rationale") + ",\n"
    
    # Flashcards
    js_obj += "        flashcards: " + json.dumps(new_lecture['flashcards'], indent=12) + ",\n"
    
    # Anking
    if new_lecture['ankingResource']:
        js_obj += "        ankingResource: " + json.dumps(new_lecture['ankingResource'], indent=12) + ",\n"
        
    # Pearls
    js_obj += "        pearls: " + json.dumps(new_lecture['pearls'], indent=12) + ",\n"
    
    # Mindmap
    js_obj += "        mindmap: `" + new_lecture['mindmap'].replace('`', '\\`') + "`\n"
    
    js_obj += "    },\n"

    # Insert
    new_content = content[:insert_pos] + js_obj + content[insert_pos:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Successfully registered L59 in lectures_data.js")

if __name__ == "__main__":
    update_lectures_data()
