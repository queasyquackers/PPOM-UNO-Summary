"""
Generate individual JSON files for each lecture and a master index.
This enables lazy loading in the frontend.
"""

import os
import re
import json
import ast

# Directories
base_dir = os.path.dirname(os.path.abspath(__file__))
content_dir = os.path.join(base_dir, "content")
output_dir = os.path.join(base_dir, "content", "json")

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# List all content files
content_files = [
    f for f in os.listdir(content_dir) 
    if f.endswith('_content.js') and f != 'lectures_data.js'
]

def natural_keys(text):
    return [int(c) if c.isdigit() else c.lower() for c in re.split(r'(\d+)', text)]

content_files.sort(key=natural_keys)

lectures_index = []

print(f"Found {len(content_files)} content files. Processing...")

def extract_string_content(text, start_index, quote_char='`'):
    """
    Extracts content inside a string defined by quote_char, handling escapes.
    """
    if start_index >= len(text) or text[start_index] != quote_char:
        return None
    
    for i in range(start_index + 1, len(text)):
        char = text[i]
        if char == quote_char and text[i-1] != '\\':
            return text[start_index+1 : i] # Return content inside quotes (without the quotes)
            
    return None

def extract_balanced_block(text, start_index, open_char='[', close_char=']'):
    """
    Extracts a balanced block (e.g., [...]) starting from start_index.
    """
    stack = 0
    in_string = False
    string_char = None
    
    # Verify start
    if text[start_index] != open_char:
        return None
        
    for i in range(start_index, len(text)):
        char = text[i]
        
        # Handle strings to ignore brackets inside them
        if char in ["'", '"', '`'] and (i == 0 or text[i-1] != '\\'):
            if not in_string:
                in_string = True
                string_char = char
            elif char == string_char:
                in_string = False
                string_char = None
        
        if not in_string:
            if char == open_char:
                stack += 1
            elif char == close_char:
                stack -= 1
                if stack == 0:
                    return text[start_index:i+1]
    return None

def parse_js_object_str(obj_str):
    """
    Parses a JS object/array string into a Python dict/list.
    Handles unquoted keys and basic types.
    """
    # 1. Quote keys: { key: value } -> { "key": value }
    # Look for word characters followed by colon, not in string
    # This regex is still a bit simpler but better than before
    # We replace keys at the start of lines or after { or , 
    # Be careful not to replace inside headers or strings.
    
    # Simplify: convert to something ast.literal_eval can handle if possible, 
    # but infinite variants exist.
    # Evaluating strict JS subset.
    
    try:
        # Quote keys: word followed by colon
        # We assume keys are alphanumeric
        quoted = re.sub(r'([{,]\s*)(\w+):', r'\1"\2":', obj_str)
        # Handle initial key if not preceded by {,
        if quoted.strip().startswith('{') and ':' in quoted: 
             # The first key might be missed if strictly looking for {,
             pass 
             
        # Also need to quote keys at start of string if it's an object 'key: val'
        # But we pass the whole structure {...} usually.
        
        # Convert JS strings to replace unescaped chars if needed?
        # JS allows single quotes, Python does too.
        # JS keywords: true, false -> True, False
        quoted = quoted.replace("true", "True").replace("false", "False")
        
        # Eval using ast.literal_eval is safest but strictly supports Python syntax
        # eval() allows slightly more flexibility but 'null' -> None must be handled
        
        # Define context for eval
        ctx = {"true": True, "false": False, "null": None}
        return eval(quoted, {"__builtins__": {}}, ctx)
    except Exception as e:
        # print(f"Parse error: {e}")
        return None

def js_obj_to_dict(js_str):
    data = {}
    
    # Extract ID
    m = re.search(r"id:\s*['\"](.*?)['\"]", js_str)
    if m: data['id'] = m.group(1)
    
    # Extract Summary (multiline backtick string) - DO THIS EARLY to use for Title/Module
    m = re.search(r"summary:\s*`", js_str)
    if m: 
        start = m.end() - 1 # include backtick
        summary_block = extract_string_content(js_str, start, '`')
        if summary_block:
            data['summary'] = summary_block.strip()

    # Extract Title
    # Strategy: 1. Try to find a top-level title property (hard with regex).
    #           2. If summary exists, extract from '# Header'
    m = re.search(r"title:\s*['\"](.*?)['\"]", js_str)
    if m: 
        data['title'] = m.group(1)
    
    # Override Title from Summary if available (More reliable for generated files)
    if data.get('summary'):
        # Match # Lecture X: Title or # Title
        title_match = re.search(r"^#\s*(.*?)$", data['summary'], re.MULTILINE)
        if title_match:
            data['title'] = title_match.group(1).strip()

    # Extract Lecturer
    m = re.search(r"lecturer:\s*['\"](.*?)['\"]", js_str)
    if m: data['lecturer'] = m.group(1)
    
    # Extract Module
    m = re.search(r"module:\s*['\"](.*?)['\"]", js_str)
    if m: 
        data['module'] = m.group(1)
    else:
        # Fallback Module logic
        if data.get('id', '').startswith('l'):
            # Simple heuristic for this specific user corpus
            lid = data['id'].replace('l', '')
            if lid.isdigit():
                num = int(lid)
                if num <= 7:
                    data['module'] = 'Neuroanatomy'
                elif num >= 30: # Assuming later lectures are Neurology
                    data['module'] = 'Neurology'
                else: 
                     data['module'] = 'Neuroscience' # Middle ground
            else:
                if 'a' in lid or 'b' in lid:
                     data['module'] = 'OMM' # L1a, L1b

    
    # Extract Session
    m = re.search(r"session:\s*['\"](.*?)['\"]", js_str)
    if m: data['session'] = m.group(1)
    
    # Extract Prev/Next
    m = re.search(r"prev:\s*['\"](.*?)['\"]", js_str)
    if m: data['prev'] = m.group(1)
    
    m = re.search(r"next:\s*['\"](.*?)['\"]", js_str)
    if m: data['next'] = m.group(1)
    
    # Extract PDF
    m = re.search(r"pdf:\s*['\"](.*?)['\"]", js_str)
    if m: data['pdf'] = m.group(1)
    
    # Extract High Yield PDF
    m = re.search(r"highYieldPdf:\s*['\"](.*?)['\"]", js_str)
    if m: data['highYieldPdf'] = m.group(1)

    # Extract Mindmap
    m = re.search(r"mindmap:\s*`", js_str)
    if m: 
        start = m.end() - 1
        mindmap_block = extract_string_content(js_str, start, '`')
        if mindmap_block:
            data['mindmap'] = mindmap_block.strip()
        
    # Extract Questions using balanced bracket extraction
    m = re.search(r"questions:\s*\[", js_str)
    if m:
        start = m.end() - 1
        q_block = extract_balanced_block(js_str, start, '[', ']')
        if q_block:
            questions = parse_js_object_str(q_block)
            if questions is not None:
                data['questions'] = questions
            else:
                data['questions'] = []
    else:
        data['questions'] = []

    # Extract Flashcards
    m = re.search(r"flashcards:\s*\[", js_str)
    if m:
        start = m.end() - 1
        fc_block = extract_balanced_block(js_str, start, '[', ']')
        if fc_block:
            flashcards = parse_js_object_str(fc_block)
            data['flashcards'] = flashcards if flashcards else []
    
    # Extract Anking
    m = re.search(r"ankingResource:\s*\{", js_str)
    if m:
        start = m.end() - 1
        ak_block = extract_balanced_block(js_str, start, '{', '}')
        if ak_block:
            anking = parse_js_object_str(ak_block)
            data['ankingResource'] = anking
    
    # Extract Pearls
    m = re.search(r"pearls:\s*\[", js_str)
    if m:
        start = m.end() - 1
        pb_block = extract_balanced_block(js_str, start, '[', ']')
        if pb_block:
            pearls = parse_js_object_str(pb_block)
            data['pearls'] = pearls if pearls else []

    return data

for content_file in content_files:
    file_path = os.path.join(content_dir, content_file)
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    try:
        data = js_obj_to_dict(content)
        
        if not data.get('id'):
            print(f"Skipping {content_file}: No ID found.")
            continue
            
        js_filename = f"{data['id']}.file.js"
        
        # Save Metadata to Index
        lectures_index.append({
            "id": data['id'],
            "title": data.get('title', 'Untitled'),
            "module": data.get('module', 'General'),
            "tags": data.get('session', ''),
            "path": f"content/json/{js_filename}",
            "readingTime": len(data.get('summary', '').split()) // 200 if data.get('summary') else 0
        })
        
        # Save individual JS file
        json_str = json.dumps(data, indent=2)
        js_content = f"window.receiveLectureContent({json_str});"
        
        with open(os.path.join(output_dir, js_filename), "w", encoding="utf-8") as out:
            out.write(js_content)
            
        print(f"Generated {js_filename}")
        
    except Exception as e:
        print(f"Error processing {content_file}: {e}")

# Save Index
with open(os.path.join(base_dir, "lectures_index.js"), "w", encoding="utf-8") as f:
    json_str = json.dumps(lectures_index, indent=2)
    f.write(f"window.receiveLectureIndex({json_str});")

print(f"\nSuccessfully generated index with {len(lectures_index)} lectures.")
