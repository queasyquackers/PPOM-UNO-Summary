import pypdf
import os
import re

def clean_srt(text):
    # Remove BOM
    text = text.replace('\ufeff', '')
    # Remove timestamps and index numbers typical in SRT
    # Pattern: Digit(s) newline Timestamp --> Timestamp newline
    # But simple regex is often safer for variations
    lines = text.splitlines()
    cleaned_lines = []
    for line in lines:
        if '-->' in line:
            continue
        if line.strip().isdigit():
            continue
        if line.strip():
            cleaned_lines.append(line.strip())
    return " ".join(cleaned_lines)

def clean_dfxp(text):
    # Remove XML tags
    # Simple regex to strip <...>
    text = re.sub(r'<[^>]+>', ' ', text)
    # Collapse whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def main():
    base_dir = r"c:\Users\quazi\Downloads\PPOM-UNO-Summary"
    
    # Input files
    pdf_a = os.path.join(base_dir, "pdfs", "Lecture # 38a. M. Terzella, D.O. (PPT).pdf")
    pdf_b = os.path.join(base_dir, "pdfs", "Lecture # 38b. P. Noto, D.O. (PPT).pdf")
    
    trans_a = os.path.join(base_dir, "transcripts", "Lecture #38a_ OMM_ Basics of Diagnosis_ Sacrum Faculty_ M. Terzella, D.O..srt")
    trans_b = os.path.join(base_dir, "transcripts", "Lecture #38b_ OMM Lab 18 Prep Lecture_ Diagnosis of the Sacrum; Faculty_ P. Noto, D.O..dfxp")
    
    # Output files
    out_pdf = os.path.join(base_dir, "pdfs", "L38_Combined.pdf")
    out_trans = os.path.join(base_dir, "transcripts", "L38_Combined.txt")
    
    print("Merging PDFs...")
    merger = pypdf.PdfWriter()
    
    for pdf_path in [pdf_a, pdf_b]:
        if os.path.exists(pdf_path):
            print(f"Adding {pdf_path}")
            reader = pypdf.PdfReader(pdf_path)
            for page in reader.pages:
                merger.add_page(page)
        else:
            print(f"ERROR: Could not find {pdf_path}")
            return

    with open(out_pdf, "wb") as f:
        merger.write(f)
    print(f"Merged PDF saved to {out_pdf}")

    print("Merging Transcripts...")
    combined_text = ""
    
    # Process A (SRT)
    if os.path.exists(trans_a):
        print(f"Processing {trans_a}")
        with open(trans_a, "r", encoding="utf-8") as f:
            content = f.read()
            combined_text += clean_srt(content) + "\n\n"
    else:
        print(f"WARNING: Could not find {trans_a}")

    # Process B (DFXP)
    if os.path.exists(trans_b):
        print(f"Processing {trans_b}")
        with open(trans_b, "r", encoding="utf-8") as f:
            content = f.read()
            combined_text += clean_dfxp(content) + "\n\n"
    else:
        print(f"WARNING: Could not find {trans_b}")

    with open(out_trans, "w", encoding="utf-8") as f:
        f.write(combined_text)
    print(f"Merged Transcript saved to {out_trans}")

if __name__ == "__main__":
    main()
