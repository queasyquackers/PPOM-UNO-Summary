import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(BASE_DIR, "content")
JSON_DIR = os.path.join(CONTENT_DIR, "json")

def sync_anking_resources():
    # Lectures to process
    lectures = [f"L{i}" for i in range(39, 47)] # L39-L46

    for lecture_id in lectures: 
        content_file = f"{lecture_id}_content.js"
        json_file = f"{lecture_id.lower()}.file.js"
        
        content_path = os.path.join(CONTENT_DIR, content_file)
        json_path = os.path.join(JSON_DIR, json_file)
        
        if not os.path.exists(content_path):
            print(f"Skipping {lecture_id}: Content file not found.")
            continue
            
        if not os.path.exists(json_path):
            print(f"Skipping {lecture_id}: JSON file not found.")
            continue
            
        print(f"Syncing {lecture_id}...")
        
        # Read Content File
        with open(content_path, "r", encoding="utf-8") as f:
            content_data = f.read()
            
        # Extract ankingResource block
        # Look for `ankingResource: { ... }` handling nested braces if simpler regex fails
        # Since we know the indentation is likely standard (4 spaces), we can try a specific regex
        # or just find the start and balance braces.
        
        match = re.search(r'ankingResource:\s*(\{[\s\S]*?\n\s{4}\}),', content_data)
        if not match:
            # Try matching end without comma if it's the last item (rare)
            match = re.search(r'ankingResource:\s*(\{[\s\S]*?\n\s{4}\})', content_data)
        
        if not match:
            print(f"  No ankingResource found in {content_file}")
            continue
            
        anking_block = match.group(1)
        
        # Read JSON File
        with open(json_path, "r", encoding="utf-8") as f:
            json_data = f.read()
            
        # Check if ankingResource exists in JSON
        if '"ankingResource":' in json_data:
            # Replace it
            # JSON keys are quoted.
            # Regex to find `"ankingResource": { ... }`
            # Note: The JSON file might be minified or pretty printed.
            # Based on view logic, it looks pretty printed with 2 spaces? Or 4?
            # Step 138 showed 2 spaces for keys but maybe 4 for indentation?
            # "ankingResource": {
            #     "primarySource": "SketchyPharm",
            
            # Use regex to find and replace.
            # pattern = r'"ankingResource":\s*\{[\s\S]*?\}(\s*,)?'
            # Be careful not to eat too much.
            
            # Let's count braces to handle nested 'alternatives' array
            start_idx = json_data.find('"ankingResource":')
            if start_idx == -1:
                print("  Could not locate start of ankingResource in JSON")
                continue
                
            open_brace = json_data.find('{', start_idx)
            if open_brace == -1: continue
            
            balance = 1
            curr = open_brace + 1
            while balance > 0 and curr < len(json_data):
                if json_data[curr] == '{': balance += 1
                elif json_data[curr] == '}': balance -= 1
                curr += 1
            
            end_idx = curr
            
            # Construct new block
            # The Content file uses unquoted keys (JS object), JSON file uses quoted keys.
            # We need to format the extracted JS object as JSON-compatible or at least valid JS for the file.
            # The JSON file is `window.receiveLectureContent({...})` so it's technically JS, but keys are quoted.
            # While JS allows unquoted keys, consistency is good. 
            # However, `window.receiveLectureContent` accepts an object, so unquoted keys are VALID JS.
            # So we can just paste the extract from Lxx_content.js directly, 
            # changing `ankingResource:` to `"ankingResource":` 
            
            new_block = f'"ankingResource": {anking_block}'
            
            # Replace
            new_json_data = json_data[:start_idx] + new_block + json_data[end_idx:]
            
        else:
            # Insert content
            # Look for last brace of main object
            last_brace = json_data.rfind('}')
            last_brace = json_data.rfind('}', 0, last_brace) # One before the function close `});`
            
            new_block = f',\n  "ankingResource": {anking_block}'
            new_json_data = json_data[:last_brace] + new_block + json_data[last_brace:]

        # Write back
        with open(json_path, "w", encoding="utf-8") as f:
            f.write(new_json_data)
            
        print(f"  Updated {json_file}")

if __name__ == "__main__":
    sync_anking_resources()
