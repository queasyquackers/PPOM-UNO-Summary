
import os

def combine_files(output_name, input_patterns):
    print(f"Creating {output_name}...")
    base_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "transcripts")
    all_content = ""
    
    # Sort files to ensure Part 1 comes before Part 2, etc.
    files_to_merge = []
    for filename in os.listdir(base_dir):
        for pattern in input_patterns:
            if pattern in filename:
                files_to_merge.append(filename)
                break
    
    files_to_merge.sort()
    
    if not files_to_merge:
        print(f"WARNING: No files found for patterns {input_patterns}")
        return

    print(f"Merging: {files_to_merge}")

    for filename in files_to_merge:
        path = os.path.join(base_dir, filename)
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            all_content += f.read() + "\n\n"
            
    output_path = os.path.join(base_dir, output_name)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(all_content)
    print(f"Saved to {output_path}")

# L103
combine_files("L103_Combined.srt", ["Lecture #103"])
# L104
combine_files("L104_Combined.srt", ["Lecture #104"])
# L105
combine_files("L105_Combined.srt", ["Lecture #105"])
# L106
combine_files("L106_Combined.srt", ["Lecture #106"])
# L107/108
combine_files("L107_L108_Combined.srt", ["Lecture #107", "Lecture #108"])
# L109/110
combine_files("L109_L110_Combined.srt", ["Lecture #109", "Lecture #110"])
