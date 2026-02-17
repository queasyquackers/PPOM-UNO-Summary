
import os
import re
import subprocess

# Configuration for L65
LID = "l65"
PDF_PATH = "pdfs/Lecture # 65. L. Goldstein, Pharm.D. (PPT) 2.12.26.pdf"
TRANSCRIPT_PATH = "transcripts/Lecture #65_ Pharmacology of General Anesthetics Part 2; Faculty_ L. Goldstein, Pharm.D..srt"

BASE_DIR = "e:/PPOM-UNO-Summary"

def clean_transcript(file_path):
    full_path = os.path.join(BASE_DIR, file_path)
    if not os.path.exists(full_path):
        print(f"Transcript not found: {full_path}")
        return ""

    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    text = ""
    # Remove timestamps and line numbers
    text = re.sub(r'\d+\n\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}\n', '', content)

    # General cleanup
    text = text.replace('\n', ' ')
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def process_lecture():
    print(f"Processing {LID}...")
    
    # 1. Clean Transcript
    cleaned_text = clean_transcript(TRANSCRIPT_PATH)
    
    if not cleaned_text:
        print("Failed to process transcript.")
        return

    # Save Clean Transcript
    transcript_out_path = os.path.join(BASE_DIR, f"content/{LID.upper()}_FullTranscript.txt")
    with open(transcript_out_path, 'w', encoding='utf-8') as f:
        f.write(cleaned_text)
    print(f"  Saved transcript text to {transcript_out_path}")

    # 2. Run Generate High Yield
    pdf_full_path = os.path.join(BASE_DIR, PDF_PATH)
    output_pdf_path = os.path.join(BASE_DIR, f"content/{LID.upper()}_HighYield_Render.pdf")
    
    if os.path.exists(pdf_full_path):
        cmd = [
            "python", 
            "generate_high_yield.py", 
            pdf_full_path, 
            output_pdf_path, 
            transcript_out_path
        ]
        print(f"  Running: {' '.join(cmd)}")
        result = subprocess.run(cmd, cwd=BASE_DIR, capture_output=True, text=True)
        if result.returncode != 0:
                print(f"  Error running generate_high_yield.py: {result.stderr}")
                print(f"  Stdout: {result.stdout}")
        else:
                print(f"  High yield generation complete for {LID}")
                print(result.stdout)
    else:
        print(f"  ERROR: PDF not found: {pdf_full_path}")

if __name__ == "__main__":
    process_lecture()
