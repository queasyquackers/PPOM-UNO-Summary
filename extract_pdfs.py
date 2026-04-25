import pdfplumber
import os
import glob

pdfs_dir = "pdfs"
output_dir = "content/pdf_extracts"
os.makedirs(output_dir, exist_ok=True)

# All heme + pharm lectures we need (149-192 range)
target_lectures = [
    "153", "154", "156", "157", "158", "159", 
    "161", "162", "164", "165",
    "172", "173", "178", "184", "185",
    "166", "167", "168", "169", "176", "177", 
    "180", "186", "187", "188", "189"
]

pdf_files = glob.glob(os.path.join(pdfs_dir, "*.pdf"))

for pdf_path in sorted(pdf_files):
    basename = os.path.basename(pdf_path)
    # Extract lecture number from filename
    for lec_num in target_lectures:
        # Match patterns like "Lecture # 153." or "Lecture #153."
        if f"# {lec_num}." in basename or f"#{lec_num}." in basename or f"# {lec_num} " in basename:
            print(f"Extracting L{lec_num}: {basename}")
            try:
                with pdfplumber.open(pdf_path) as pdf:
                    text = ""
                    for i, page in enumerate(pdf.pages):
                        page_text = page.extract_text() or ""
                        text += f"\n--- SLIDE {i+1} ---\n{page_text}"
                    
                    out_file = os.path.join(output_dir, f"L{lec_num}_extract.txt")
                    with open(out_file, "w", encoding="utf-8") as f:
                        f.write(f"SOURCE: {basename}\n")
                        f.write(text)
                    print(f"  -> Saved {out_file} ({len(text)} chars)")
            except Exception as e:
                print(f"  ERROR: {e}")
            break
