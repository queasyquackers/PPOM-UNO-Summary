
import os
import re

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    filename = os.path.basename(filepath)
    issues_found = False
    
    for i, line in enumerate(lines):
        # Check for table rows
        if line.strip().startswith('|'):
            # It's a table row. Check precursors.
            # We want to see if the table header is properly separated.
            # Usually the first row of a table is preceded by a blank line.
            
            # Check if it's the START of a table (prev line is not a table row)
            if i > 0 and not lines[i-1].strip().startswith('|'):
                prev_line = lines[i-1]
                prev_prev = lines[i-2] if i > 1 else ""
                
                # If prev line is NOT empty, that's a problem
                if prev_line.strip() != "":
                    print(f"[{filename}:{i+1}] Table start without blank line. Prev: {prev_line.strip()!r}")
                    issues_found = True
                else:
                    # Prev line IS empty.
                    # User says L30/L33 are broken even with 1 blank line.
                    # Let's flag cases where it follows a header directly with only 1 blank line,
                    # just to see if we can consistenly add more spacing.
                    if prev_prev.strip().startswith('#'):
                        print(f"[{filename}:{i+1}] Table start follows Header with 1 blank line. Header: {prev_prev.strip()!r}")
                        issues_found = True

        # Check for user reported "||" or "| " in front of words (outside of table context?)
        # A rough check for "||" anywhere
        if '||' in line:
            print(f"[{filename}:{i+1}] Found double pipe '||': {line.strip()!r}")
            issues_found = True
            
content_dir = r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\content"
for f in os.listdir(content_dir):
    if f.endswith("_content.js"):
        check_file(os.path.join(content_dir, f))
