import os
import glob
import subprocess
import re

PDF_DIR = "pdfs"
TRANSCRIPT_DIR = "transcripts"
OUTPUT_DIR = "content"

# Get all PDFs
pdf_files = glob.glob(os.path.join(PDF_DIR, "*.pdf"))

for pdf in pdf_files:
    filename = os.path.basename(pdf)
    # Match L number
    match = re.search(r'(?:Lecture\s*#\s*)(\d+)', filename, re.IGNORECASE)
    if not match:
        continue
    
    lecture_num = match.group(1)
    if int(lecture_num) < 27 or int(lecture_num) > 46:
        continue

    print(f"Processing L{lecture_num}...")
    
    # Find matching transcript
    transcript_pattern = f"Lecture #{lecture_num}[_ ]"
    transcript_file = None
    for t in os.listdir(TRANSCRIPT_DIR):
        if t.startswith(f"Lecture #{lecture_num}_") or t.startswith(f"Lecture #{lecture_num} "):
             transcript_file = os.path.join(TRANSCRIPT_DIR, t)
             break
    
    output_md = os.path.join(OUTPUT_DIR, f"L{lecture_num}_Analysis.md")
    
    cmd = ["python", "generate_summary_content.py", pdf, output_md]
    if transcript_file:
        cmd.extend(["--transcript", transcript_file])
    
    print(f"Running: {' '.join(cmd)}")
    subprocess.run(cmd)

print("Batch analysis complete.")
