"""
Generate a complete lectures_data.js file that imports all lecture content files.
"""

import os
import re

# List all content files
# List all content files dynamically
base_dir = os.path.dirname(os.path.abspath(__file__))
content_dir = os.path.join(base_dir, "content")

# Find all _content.js files in the directory
content_files = [
    f for f in os.listdir(content_dir) 
    if f.endswith('_content.js') and f != 'lectures_data.js'
]
# Sort content files using natural sort (L3 before L10)
def natural_keys(text):
    return [int(c) if c.isdigit() else c.lower() for c in re.split(r'(\d+)', text)]

content_files.sort(key=natural_keys)

# Start building the lectures_data.js file
output = """// Lectures Data - Auto-generated
// This file contains all lecture data to keep the main HTML clean

const LECTURES_DATA = [
"""

for content_file in content_files:
    file_path = os.path.join(content_dir, content_file)
    
    if not os.path.exists(file_path):
        print(f"Warning: {content_file} not found, skipping...")
        continue
    
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Extract the data object by finding the first { and the last }; before the boilerplate
        start_match = re.search(r'(?:const|export const)\s+\w+\s*=\s*\{', content)
        
        if start_match:
            start_index = start_match.end() - 1 # Start at the opening brace
            
            # Find the start of the boilerplate code at the end of the file
            boilerplate_start = content.rfind('if (typeof window')
            if boilerplate_start == -1:
                boilerplate_start = len(content)
            
            # Find the last closing brace before the boilerplate
            end_index = content.rfind('}', 0, boilerplate_start) + 1
            
            if end_index > start_index:
                obj_content = content[start_index:end_index]
                # Add to output with proper indentation
                output += "    " + obj_content + ",\n"
                print(f"Added {content_file}")
            else:
                print(f"Warning: Could not find closing brace in {content_file}")
        else:
            print(f"Warning: Could not find object definition in {content_file}")
    
    except Exception as e:
        print(f"Error processing {content_file}: {e}")

# Close the array and add the global assignment
output += """];

// Make it available globally for the HTML to access
if (typeof window !== 'undefined') {
    window.LECTURES_DATA = LECTURES_DATA;
}
"""

# Write the output file
output_path = os.path.join(base_dir, "lectures_data.js")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(output)

print(f"\nSuccessfully generated lectures_data.js with {len([f for f in content_files if os.path.exists(os.path.join(content_dir, f))])} lectures!")
