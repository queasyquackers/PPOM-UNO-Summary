
import os
import re
import json

CONTENT_DIR = r"e:\PPOM-UNO-Summary\content\json"
OUTPUT_FILE = r"e:\PPOM-UNO-Summary\lectures_search_index.js"

def extract_js_content(content):
    # Extracts the content object from the JS file
    # Handles: window.receiveLectureContent({ ... });
    
    data = {}
    
    # Extract ID
    id_match = re.search(r'"id":\s*["\']([^"\']+)["\']', content)
    data['id'] = id_match.group(1) if id_match else "unknown"
    
    # Extract Title
    title_match = re.search(r'"title":\s*["\']([^"\']+)["\']', content)
    data['title'] = title_match.group(1).strip() if title_match else "Untitled"
    if "**" in data['title']: 
        data['title'] = data['title'].replace("**", "")

    # Extract Module
    module_match = re.search(r'"module":\s*["\']([^"\']+)["\']', content)
    data['module'] = module_match.group(1).strip() if module_match else "Unknown"

    # Extract Full Text
    # Since it's inside window.receiveLectureContent({...}), it's basically a JSON object (but loose JS).
    # We can try to extract the specific text fields or just clean the whole blob.
    
    # Let's extract everything inside the function call
    block_match = re.search(r'window\.receiveLectureContent\(\s*(\{[\s\S]*\})\s*\);', content)
    
    if block_match:
        raw_block = block_match.group(1)
        
        # Remove common keys to reduce noise in index
        cleaned = re.sub(r'"(question|options|correctAnswer|rationale|explanation|answer|pearls|flashcards|front|back|tag|content|summary|mindmap|id|title|module|readingTime|ankingResource|primarySource|chapter|alternatives|resource)":', ' ', raw_block)
        
        # Remove markdown chars
        cleaned = re.sub(r'[*#_`\[\]()]+', ' ', cleaned)
        
        # Remove JSON syntax
        cleaned = re.sub(r'[{}:,"\'\\]', ' ', cleaned)
        
        # Remove excess whitespace
        cleaned = re.sub(r'\s+', ' ', cleaned).strip()
        
        data['content'] = cleaned
    else:
        # Fallback if regex fails (maybe simple object?)
        data['content'] = ""
    
    return data

def generate_index():
    search_index = []
    if not os.path.exists(CONTENT_DIR):
        print(f"Error: {CONTENT_DIR} does not exist.")
        return

    files = os.listdir(CONTENT_DIR)
    
    print(f"Scanning {len(files)} files in {CONTENT_DIR}...")
    
    for filename in files:
        if not filename.endswith('.file.js'):
            continue
            
        filepath = os.path.join(CONTENT_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        entry = extract_js_content(content)
        if entry['id'] != 'unknown':
            search_index.append(entry)
            
    print(f"Generated index with {len(search_index)} entries.")
    
    # Output to JS file
    json_str = json.dumps(search_index, ensure_ascii=False)
    js_content = f"window.SEARCH_INDEX = {json_str};"
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"Wrote index to {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_index()
