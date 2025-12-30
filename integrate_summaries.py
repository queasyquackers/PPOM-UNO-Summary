
import re
import os

def integrate_summaries():
    js_path = "lectures_data.js"
    
    # Mapping: Lecture ID -> Analysis File
    mapping = {
        "l102": "L102_Summary_Analysis.md",
        "l103": "L103_Summary_Analysis.md",
        "l104": "L104_Summary_Analysis.md",
        "l105": "L105_Summary_Analysis.md",
        "l106": "L106_Summary_Analysis.md",
        "l107_108": "L107_L108_Summary_Analysis.md",
        "l109-l110": "L109_L110_Summary_Analysis.md"
    }

    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()

    for lec_id, analysis_file in mapping.items():
        if not os.path.exists(analysis_file):
            print(f"Skipping {lec_id}: {analysis_file} not found.")
            continue
            
        print(f"Processing {lec_id} from {analysis_file}...")
        
        with open(analysis_file, "r", encoding="utf-8") as f:
            analysis_content = f.read()
            
        # Extract relevant sections
        # We want "High Yield Transcript Points" and "Potential Clinical Correlates"
        # We will skip "High Yield Slides" as the existing summary likely covers the slides well.
        
        new_content = "\n\n-----\n\n## High Yield Transcript Analysis\n\n"
        
        # Extract Transcript Points
        match_points = re.search(r"## 1\. High Yield Transcript Points\n(.*?)(?=\n## 2|$)", analysis_content, re.DOTALL)
        if match_points:
            points = match_points.group(1).strip()
            # Remove the quote block explanation if present
            points = re.sub(r">.*?\n", "", points).strip()
            if points and "No specific high-yield phrases found" not in points:
                 new_content += "### Key Verbal Emphasis\n" + points + "\n\n"

        # Extract Clinical Correlates (Transcript)
        match_correlates = re.search(r"## 2\. Potential Clinical Correlates \(Transcript\)\n(.*?)(?=\n## 3|$)", analysis_content, re.DOTALL)
        if match_correlates:
            correlates = match_correlates.group(1).strip()
            correlates = re.sub(r">.*?\n", "", correlates).strip()
            if correlates and "No specific clinical correlates found" not in correlates:
                new_content += "### Transcript-Mentioned Clinical Correlates\n" + correlates + "\n\n"

        # Find the lecture entry
        # Pattern: id: 'l102', ... summary: `...`
        # We need to find the end of the summary string (backtick) and insert before it.
        
        # Regex to find the summary block for this ID
        # Look for id: 'lec_id' then capture until summary: `
        pattern = re.compile(r"(id:\s*['\"]" + re.escape(lec_id) + r"['\"].*?summary:\s*`)(.*?)(`)", re.DOTALL)
        
        match = pattern.search(content)
        if match:
            print(f"Found entry for {lec_id}")
            current_summary = match.group(2)
            
            # Check if already integrated to avoid duplicates
            if "High Yield Transcript Analysis" in current_summary:
                print(f"  Already integrated. Skipping.")
                continue
                
            updated_summary = current_summary + new_content
            
            # Replace in content
            # We construct the new block using the captured groups
            # Group 1: Header (id... summary: `)
            # Group 2: Content (replaced)
            # Group 3: Closing backtick (`)
            
            # To do this safely with a large file and multiple replacements, we should use string replacement on the whole content
            # But regex replace is tricky with overlapping groups. 
            # Since IDs are unique, we can replace the specific match.
            
            content = content.replace(match.group(0), match.group(1) + updated_summary + match.group(3))
            print(f"  Updated summary.")
        else:
            print(f"  Could not find summary block for {lec_id}")

    with open(js_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Done.")

if __name__ == "__main__":
    integrate_summaries()
