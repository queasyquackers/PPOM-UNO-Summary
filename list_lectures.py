
import os
import re

CONTENT_DIR = r"e:\PPOM-UNO-Summary\content"

def extract_metadata(content):
    id_match = re.search(r'id:\s*["\']([^"\']+)["\']', content)
    title_match = re.search(r'# Lecture.*?:(.*?)\n', content) # heuristic from summary markdown
    if not title_match:
         title_match = re.search(r'title:\s*["\']([^"\']+)["\']', content) # strictly from js object
         
    # Module is tricky, usually not in the JS object directly in previous files, but let's check.
    # L10 puts it in summary text: "**Session:** Lecture 10" or maybe inferred.
    # L2 had "module: 'Neuro'".
    module_match = re.search(r'module:\s*["\']([^"\']+)["\']', content)
    
    # If module is missing, guess from filename or title? 
    # The user said "ignore OMM and DPR lectures".
    # I can maybe detect OMM/DPR from the title or file text.
    
    is_omm_dpr = False
    if re.search(r'OMM|Osteopathic', content, re.IGNORECASE):
        is_omm_dpr = True
    if re.search(r'DPR|Doctoring', content, re.IGNORECASE): # DPR usually Doctoring/Patient...
        is_omm_dpr = True
        
    return {
        'id': id_match.group(1) if id_match else 'unknown',
        'title': title_match.group(1).strip() if title_match else 'Unknown',
        'module': module_match.group(1) if module_match else 'Unknown',
        'is_omm_dpr': is_omm_dpr
    }

def list_lectures():
    lectures = []
    for filename in os.listdir(CONTENT_DIR):
        if not filename.endswith('_content.js'):
            continue
            
        filepath = os.path.join(CONTENT_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        meta = extract_metadata(content)
        meta['filename'] = filename
        lectures.append(meta)
        
    # Sort
    lectures.sort(key=lambda x: x['id'])
    
    print(f"{'ID':<10} {'Module':<15} {'Excluded':<10} {'Title'}")
    print("-" * 80)
    for l in lectures:
        print(f"{l['id']:<10} {l['module']:<15} {str(l['is_omm_dpr']):<10} {l['title']}")

if __name__ == "__main__":
    list_lectures()
