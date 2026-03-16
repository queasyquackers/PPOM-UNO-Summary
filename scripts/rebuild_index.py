import os
import re
import json

# Use dynamic current working directory paths
base_dir = os.getcwd()
content_dir = os.path.join(base_dir, 'content', 'json')
output_file = os.path.join(base_dir, 'lectures_search_index.js')

def extract_content(file_content):
    data = {}
    
    # Extract ID
    id_match = re.search(r'["\']id["\']:\s*["\']([^"\']+)["\']', file_content)
    data['id'] = id_match.group(1) if id_match else "unknown"
    
    # Extract Title
    title_match = re.search(r'["\']title["\']:\s*["\']([^"\']+)["\']', file_content)
    data['title'] = title_match.group(1).strip() if title_match else "Untitled"
    data['title'] = data['title'].replace("**", "")

    # Extract Module
    module_match = re.search(r'["\']module["\']:\s*["\']([^"\']+)["\']', file_content)
    data['module'] = module_match.group(1).strip() if module_match else "Unknown"

    # Minimal cleaner for text content
    # We want everything inside the function call
    match = re.search(r'receiveLectureContent\(\s*(\{[\s\S]*\})\s*\);', file_content)
    if match:
        raw_block = match.group(1)
        # Strip structural JSON markers to get the raw text
        cleaned = re.sub(r'["\'](question|options|correctAnswer|rationale|explanation|answer|pearls|flashcards|front|back|tag|content|summary|id|title|module|ankingResource|primarySource|chapter|alternatives|resource|anking)["\']:\s*', ' ', raw_block)
        cleaned = re.sub(r'[*#_`\[\]()]+', ' ', cleaned)
        cleaned = re.sub(r'[{}:,"\'\n\r\t]', ' ', cleaned)
        cleaned = re.sub(r'\s+', ' ', cleaned).strip()
        data['content'] = cleaned
    else:
        data['content'] = ""

    return data

def generate():
    if not os.path.exists(content_dir):
        print(f"Error: {content_dir} not found.")
        return

    files = [f for f in os.listdir(content_dir) if f.endswith('.file.js') or f.endswith('_content.js')]
    search_index = []

    print(f"Scanning {len(files)} files in {content_dir}...")

    for filename in files:
        filepath = os.path.join(content_dir, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            entry = extract_content(content)
            if entry['id'] != 'unknown':
                search_index.append(entry)
        except Exception as e:
            print(f"Error processing {filename}: {e}")

    # Natural sort by numeric ID
    def get_id_num(item):
        nums = re.findall(r'\d+', item['id'])
        return int(nums[0]) if nums else 0

    search_index.sort(key=get_id_num)

    # Output to JS
    output_js = f"window.SEARCH_INDEX = {json.dumps(search_index, ensure_ascii=False)};"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(output_js)
    
    print(f"Successfully generated index with {len(search_index)} entries at {output_file}")

if __name__ == "__main__":
    generate()
