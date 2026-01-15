
import os
import re

content_dir = "content"

files = [f for f in os.listdir(content_dir) if f.endswith("_content.js")]
count = 0

for filename in files:
    path = os.path.join(content_dir, filename)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Fix summary: \` -> summary: `
    new_content = content.replace("summary: \`", "summary: `")
    new_content = new_content.replace("mindmap: \`", "mindmap: `")
    
    # Also fix closing backtick if it was escaped?
    # Usually I wrote \`, so closing might be \` too?
    # Let's check regex for \` at end of lines or blocks
    # Actually, my view_file showed `\`,`, so closing was likely `\`,`.
    # Let's replace `\`, ` with ``, `
    # Be careful not to break valid escapes.
    # But in this specific context (summary start/end), it's likely the artifact of my tool usage.
    
    new_content = new_content.replace("\\`,", "`,")

    if content != new_content:
        print(f"Fixing {filename}")
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        count += 1

print(f"Fixed {count} files.")
