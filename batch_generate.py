import os
import glob
import subprocess
import re
import pypdf

# Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PDF_DIR = os.path.join(BASE_DIR, "pdfs")
OUTPUT_DIR = BASE_DIR
SCRIPT_PATH = os.path.join(BASE_DIR, "generate_high_yield.py")
REPORT_PATH = os.path.join(BASE_DIR, "High_Yield_Report.md")

def get_pdf_page_count(path):
    try:
        reader = pypdf.PdfReader(path)
        return len(reader.pages)
    except:
        return "N/A"

def main():
    # Get all PDF files
    pdf_files = glob.glob(os.path.join(PDF_DIR, "*.pdf"))
    
    # Group files by Lecture ID
    # Map: "L131" -> ["path/to/L131_1.pdf", "path/to/L131_2.pdf"]
    lecture_groups = {}
    
    print(f"Found {len(pdf_files)} PDFs to process.")

    for pdf_file in pdf_files:
        filename = os.path.basename(pdf_file)
        # Extract base lecture number (e.g., L131, L1a, L1b)
        match = re.search(r'(?:Lecture\s*#\s*|L)(\d+[a-zA-Z]?)', filename, re.IGNORECASE)
        
        if match:
            raw_lecture_id_part = match.group(1)
            # Extract the numeric part to check the range
            numeric_part_match = re.search(r'^\d+', raw_lecture_id_part)
            
            if numeric_part_match:
                lecture_num = int(numeric_part_match.group(0))
                # Apply the filter for lectures L1-L46
                if 1 <= lecture_num <= 46:
                    lecture_id = f"L{raw_lecture_id_part.lower()}" # Normalize to lowercase (l1a)
                    if lecture_id not in lecture_groups:
                        lecture_groups[lecture_id] = []
                    lecture_groups[lecture_id].append(pdf_file)
                else:
                    print(f"Skipping {filename} (Lecture number {lecture_num} not in range L1-L46)")
            else:
                print(f"Skipping {filename} (Could not parse numeric lecture number from '{raw_lecture_id_part}')")
        else:
            print(f"Skipping {filename} (Could not parse lecture number)")

    results = []
    
    # Process each group
    for lecture_id, files in lecture_groups.items():
        files.sort() # Ensure order (L131_1 before L131_2)
        
        final_output_filename = f"{lecture_id}_HighYield_Render.pdf"
        final_output_path = os.path.join(OUTPUT_DIR, final_output_filename)
        
        # Check for OLD file stats
        old_count = "N/A"
        if os.path.exists(final_output_path):
            old_count = get_pdf_page_count(final_output_path)
            
        print(f"Processing Group {lecture_id} ({len(files)} files) -> {final_output_filename}...")
        
        temp_pdfs = []
        total_slides = 0
        weighted_mean_sum = 0
        total_mean_count = 0
        
        group_status = "Success"
        
        for i, pdf_file in enumerate(files):
            # Temp output for this part
            temp_output = os.path.join(OUTPUT_DIR, f"temp_{lecture_id}_{i}.pdf")
            
            try:
                result = subprocess.run(
                    ["python", SCRIPT_PATH, pdf_file, temp_output],
                    capture_output=True, text=True, check=True
                )
                output = result.stdout
                
                # Parse Stats
                mean_match = re.search(r'Mean: ([\d.]+)', output)
                count_match = re.search(r'Selected (\d+) pages', output)
                
                if mean_match and count_match:
                    count = int(count_match.group(1))
                    mean = float(mean_match.group(1))
                    
                    if count > 0:
                        temp_pdfs.append(temp_output)
                        total_slides += count
                        weighted_mean_sum += (mean * count)
                        total_mean_count += count
                
            except subprocess.CalledProcessError as e:
                print(f"Error processing {os.path.basename(pdf_file)}: {e}")
                group_status = "Partial Error"
        
        # Merge Temp PDFs
        if temp_pdfs:
            merger = pypdf.PdfWriter()
            for temp_pdf in temp_pdfs:
                merger.append(temp_pdf)
            
            with open(final_output_path, "wb") as f:
                merger.write(f)
            
            # Cleanup Temp Files
            for temp_pdf in temp_pdfs:
                try: os.remove(temp_pdf)
                except: pass
                
            final_mean = weighted_mean_sum / total_mean_count if total_mean_count > 0 else 0
            
            results.append({
                "lecture": lecture_id,
                "old_count": old_count,
                "new_count": total_slides,
                "mean": f"{final_mean:.2f}",
                "status": group_status
            })
        else:
            print(f"No content generated for {lecture_id}")
            results.append({
                "lecture": lecture_id,
                "old_count": old_count,
                "new_count": 0,
                "mean": "0.00",
                "status": "No Content"
            })

    # Generate Report
    with open(REPORT_PATH, "w") as f:
        f.write("# High Yield Generation Report\n\n")
        f.write("| Lecture | Old Slides | New Slides | Mean Score | Status |\n")
        f.write("|---------|------------|------------|------------|--------|\n")
        
        # Sort by lecture number logic
        def sort_key(x):
            try: return int(re.search(r'\d+', x["lecture"]).group(0))
            except: return 0
            
        results.sort(key=sort_key)
        
        for r in results:
            f.write(f"| {r['lecture']} | {r['old_count']} | {r['new_count']} | {r['mean']} | {r['status']} |\n")
            
    print(f"\nBatch processing complete. Report saved to {REPORT_PATH}")

if __name__ == "__main__":
    main()
