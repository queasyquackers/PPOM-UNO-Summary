import sys
import os
import pypdf
import re
from generate_high_yield import analyze_transcript, get_page_score, find_summary_and_objectives, get_image_hashes

def generate_summary_content(pdf_path, transcript_path, output_path):
    print(f"Generating summary content for {pdf_path}...")
    
    # 1. Analyze Transcript
    transcript_keywords = []
    transcript_hits = []
    if transcript_path and os.path.exists(transcript_path):
        print(f"Analyzing transcript: {transcript_path}")
        transcript_keywords, transcript_hits = analyze_transcript(transcript_path)
    
    # 2. Analyze PDF
    reader = pypdf.PdfReader(pdf_path)
    dynamic_keywords, force_include_pages = find_summary_and_objectives(reader)
    recurring_images = get_image_hashes(reader)
    
    # Merge keywords
    all_keywords = dynamic_keywords + transcript_keywords
    
    high_yield_slides = []
    
    for i, page in enumerate(reader.pages):
        page_num = i + 1
        score, details = get_page_score(page, page_num, all_keywords, recurring_images)
        
        # Threshold for "High Yield" in summary context might be lower or different
        # Let's just take top scoring slides or those with specific patterns
        if score > 20 or page_num in force_include_pages:
            text = page.extract_text()
            high_yield_slides.append({
                "page": page_num,
                "score": score,
                "text": text.strip(),
                "details": details
            })
            
    # Sort by page number
    high_yield_slides.sort(key=lambda x: x["page"])
    
    # 3. Generate Markdown Report
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(f"# High Yield Content Analysis\n\n")
        f.write(f"**Source PDF:** {os.path.basename(pdf_path)}\n")
        f.write(f"**Source Transcript:** {os.path.basename(transcript_path) if transcript_path else 'None'}\n\n")
        
        f.write("## 1. High Yield Transcript Points\n")
        f.write("> Segments emphasizing 'need to know', 'important', or clinical correlates.\n\n")
        if transcript_hits:
            for hit in transcript_hits:
                # Clean up hit text
                clean_hit = hit.replace('\n', ' ').strip()
                f.write(f"- ...{clean_hit}...\n")
        else:
            f.write("No specific high-yield phrases found in transcript.\n")
            
        f.write("\n## 2. Potential Clinical Correlates (Transcript)\n")
        f.write("> Terms found: Syndrome, Disease, Disorder, Patient, Symptoms\n\n")
        # Filter hits for clinical terms
        clinical_terms = [h for h in transcript_hits if any(x in h.lower() for x in ['syndrome', 'disease', 'disorder', 'patient', 'symptom'])]
        if clinical_terms:
             for term in clinical_terms:
                 f.write(f"- ...{term.replace('\n', ' ').strip()}...\n")
        else:
             f.write("No specific clinical correlates found in transcript text segments.\n")

        f.write("\n## 3. High Yield Slides\n")
        f.write("> Slides with high scores based on keywords, bold text, and visual elements.\n\n")
        
        for slide in high_yield_slides:
            f.write(f"### Slide {slide['page']} (Score: {slide['score']:.2f})\n")
            if slide['details'].get('note'):
                f.write(f"**Note:** {slide['details']['note']}\n")
            
            # Format text content
            content = slide['text']
            # Simple cleanup
            content = re.sub(r'\n+', '\n', content)
            f.write("```text\n")
            f.write(content)
            f.write("\n```\n\n")
            
    print(f"Summary content saved to {output_path}")

import argparse

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate a Markdown summary from a PDF and optional transcript.")
    parser.add_argument("pdf_path", help="Path to the input PDF file.")
    parser.add_argument("output_md_path", help="Path for the output Markdown summary file.")
    parser.add_argument("--transcript", help="Path to the input SRT transcript file (optional).", default=None)
    
    args = parser.parse_args()
    
    generate_summary_content(args.pdf_path, args.transcript, args.output_md_path)
