
import os
import re
import subprocess

# Configuration: Map LID to PDF and Transcripts
LECTURES = {
    "l62": {
        "pdf": "pdfs/Lecture # 62. M. Mihlbachler, Ph.D. (PPT).pdf",
        "transcripts": [
            "transcripts/Lecture #62_ Brachial Plexus_ Lesions and Neuropathies - Part 1; Faculty_ M. Mihlbachler, Ph.D..dfxp",
            "transcripts/Lecture #62_ Brachial Plexus_ Lesions and Neuropathies - Part 2; Faculty_ M. Mihlbachler, Ph.D..dfxp",
            "transcripts/Lecture #62_ Brachial Plexus_ Lesions and Neuropathies - Part 3; Faculty_ M. Mihlbachler, Ph.D..dfxp",
            "transcripts/Lecture #62_ Brachial Plexus_ Lesions and Neuropathies - Part 4; Faculty_ M. Mihlbachler, Ph.D..dfxp",
            "transcripts/Lecture #62_ Brachial Plexus_ Lesions and Neuropathies - Part 5; Faculty_ M. Mihlbachler, Ph.D..dfxp"
        ]
    },
    "l63": {
        "pdf": "pdfs/Lecture #63. A. Reno, DO, MPH (PPT).pdf",
        "transcripts": ["transcripts/Lecture #63_ Headache Faculty_ A. Reno D.O..srt"]
    },
    "l64": {
        "pdf": "pdfs/Lecture #64. L. Goldstein, Pharm.D. (PPT).pdf",
        "transcripts": ["transcripts/Lecture #64_ Pharmacology_ General Anesthetics 1 Faculty_ L. Goldstein, Pharm.D. .srt"]
    },
    "l65": {
        "pdf": "pdfs/Lecture # 65. L. Goldstein, Pharm.D. (PPT).pdf",
        "transcripts": ["transcripts/Lecture #65_ Pharmacology Antiseizure Drugs, Part 2; Presenter_ L.Goldstein.srt"]
    },
    "l66": {
        "pdf": "pdfs/Lecture # 66. L. Goldstein, Pharm.D. (PPT).pdf",
        "transcripts": ["transcripts/Lecture #66_ Pharmacology_ Local Anesthetics; Presenter L.Goldstein.srt"]
    },
    "l67": {
        "pdf": "pdfs/Lecture # 67. M. Pino, Ph.D. (PPT).pdf",
        "transcripts": ["transcripts/Lecture #67_ Pharmacology_ Opioid Analgesics Faculty_ M. Pino, Ph.D..srt"]
    },
    "l68": {
        "pdf": "pdfs/Lecture # 68. G. Otazu, Ph.D. (PPT).pdf",
        "transcripts": ["transcripts/Lecture #68_ Physiology_ Drug Addiction_Faculty_ G. Otazu, Ph.D.dfxp"]
    },
    "l69": {
        "pdf": "pdfs/Lecture #69. A. Coladner, D.O. (PPT).pdf",
        "transcripts": ["transcripts/Lecture #69_ Substance Use Disorders Faculty_ A. Coladner, D.O..srt"]
    },
    "l70": {
        "pdf": "pdfs/Lecture # 70. A. Patel, D.O. (PPT).pdf",
        "transcripts": ["transcripts/Lecture #70_ DPR_ History and Physical Exam_ Pediatrics Part 1_ Birth to 5yo Faculty_ A. Patel, D.O..srt"]
    }
}

BASE_DIR = "e:/PPOM-UNO-Summary"

def clean_transcript(file_path):
    with open(os.path.join(BASE_DIR, file_path), 'r', encoding='utf-8') as f:
        content = f.read()

    text = ""
    if file_path.endswith('.srt'):
        # Remove timestamps and line numbers
        text = re.sub(r'\d+\n\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}\n', '', content)
    elif file_path.endswith('.dfxp') or file_path.endswith('.xml'):
        # Remove XML tags
        text = re.sub(r'<[^>]+>', ' ', content)
    else:
        text = content

    # General cleanup
    text = text.replace('\n', ' ')
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def process_lectures():
    for lid, data in LECTURES.items():
        print(f"Processing {lid}...")
        
        # 1. Combine and Clean Transcript
        full_transcript_text = ""
        for t_path in data['transcripts']:
            if os.path.exists(os.path.join(BASE_DIR, t_path)):
                print(f"  Reading {t_path}")
                cleaned = clean_transcript(t_path)
                full_transcript_text += cleaned + "\n\n"
            else:
                print(f"  WARNING: Transcript not found: {t_path}")

        # Save Clean Transcript
        transcript_out_path = os.path.join(BASE_DIR, f"content/{lid.upper()}_FullTranscript.txt")
        with open(transcript_out_path, 'w', encoding='utf-8') as f:
            f.write(full_transcript_text)
        print(f"  Saved transcript text to {transcript_out_path}")

        # 2. Run Generate High Yield
        pdf_path = os.path.join(BASE_DIR, data['pdf'])
        output_pdf_path = os.path.join(BASE_DIR, f"content/{lid.upper()}_HighYield_Render.pdf")
        
        if os.path.exists(pdf_path):
            cmd = [
                "python", 
                "generate_high_yield.py", 
                pdf_path, 
                output_pdf_path, 
                transcript_out_path
            ]
            print(f"  Running: {' '.join(cmd)}")
            result = subprocess.run(cmd, cwd=BASE_DIR, capture_output=True, text=True)
            if result.returncode != 0:
                 print(f"  Error running generate_high_yield.py for {lid}: {result.stderr}")
            else:
                 print(f"  High yield generation complete for {lid}")
        else:
            print(f"  ERROR: PDF not found: {pdf_path}")

if __name__ == "__main__":
    process_lectures()
