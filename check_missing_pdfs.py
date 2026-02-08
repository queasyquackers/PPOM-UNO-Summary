
import json
import os
import re

# Load lectures index
with open('lectures_index.js', 'r', encoding='utf-8') as f:
    content = f.read()
    # Strip function call to get valid JSON
    json_str = content.replace('window.receiveLectureIndex(', '').replace(');', '')
    lectures = json.loads(json_str)

missing = []
content_dir = 'content'

for lec in lectures:
    lec_id = lec['id']
    # Normalized ID for file naming (remove 'l' prefix usually, but let's check config in app.js)
    # App.js logic: `content/L${selectedLecture.id.replace(/^l/i, "")}_HighYield_Render.pdf`
    
    id_clean = re.sub(r'^l', '', lec_id, flags=re.IGNORECASE)
    expected_filename = f"L{id_clean}_HighYield_Render.pdf"
    expected_path = os.path.join(content_dir, expected_filename)
    
    # Check if file exists
    if not os.path.exists(expected_path):
        # Check if explicitly defined in metadata (override)
        if 'highYieldPdf' in lec and lec['highYieldPdf']:
             if not os.path.exists(os.path.join(content_dir, lec['highYieldPdf'])):
                 missing.append(f"{lec_id} (Override: {lec['highYieldPdf']})")
        else:
             missing.append(lec_id)

if missing:
    print(f"Missing High Yield PDFs for: {', '.join(missing)}")
else:
    print("All High Yield PDFs match lectures index.")
