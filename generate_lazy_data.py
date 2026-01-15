"""
Generate individual JSON files for each lecture and a master index.
This enables lazy loading in the frontend.
"""

import os
import re
import json
import codecs

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

# Helper to safely evauluate JS object string to Python Dict
# We simply regex common JS patterns to valid JSON
def js_obj_to_dict(js_str):
    # 1. Quote keys (id: -> "id":)
    # Be careful not to quote inside strings
    # This is a bit fragile but works for the known format
    
    # Simple strategy: manually parse the known fields since the format is strict
    
    data = {}
    
    # Extract ID
    m = re.search(r"id:\s*['\"](.*?)['\"]", js_str)
    if m: data['id'] = m.group(1)
    
    # Extract Title
    m = re.search(r"title:\s*['\"](.*?)['\"]", js_str)
    if m: data['title'] = m.group(1)
    
    # Extract Lecturer
    m = re.search(r"lecturer:\s*['\"](.*?)['\"]", js_str)
    if m: data['lecturer'] = m.group(1)
    
    # Extract Module
    m = re.search(r"module:\s*['\"](.*?)['\"]", js_str)
    if m: data['module'] = m.group(1)
    
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

    # Extract Summary (multiline backtick string)
    # Using dotall to capture newlines
    m = re.search(r"summary:\s*`(.*?)`", js_str, re.DOTALL)
    if m: 
        data['summary'] = m.group(1).strip()
    
    # Extract Mindmap (multiline backtick string)
    m = re.search(r"mindmap:\s*`(.*?)`", js_str, re.DOTALL)
    if m: 
        data['mindmap'] = m.group(1).strip()
        
    # Extract Questions (this is the hardest part to regex, so we cheat:
    # we just pass the raw JS array string and let the frontend handle it? 
    # No, we want valid JSON. We will parse it simply.)
    
    # Find questions array block
    q_match = re.search(r"questions:\s*(\[.*?\]),\s*\w+:", js_str, re.DOTALL)
    if not q_match:
         # Try match at end of object
         q_match = re.search(r"questions:\s*(\[.*\])\s*};", js_str, re.DOTALL)
         
    if q_match:
        q_str = q_match.group(1)
        # Convert JS array to Python list
        # We need to quote keys: question:, options:, correctAnswer:, rationale:
        q_str = re.sub(r'(question|options|correctAnswer|rationale):\s', r'"\1": ', q_str)
        # Ensure strings use double quotes? Python's json.loads requires double quotes
        # But the source has double quotes for content usually.
        # This is risky. Let's do a trick: use `exec` in a safe dict.
        try:
            # We need to make the string valid python
            # 1. true/false -> True/False (already handled if we use ast.literal_eval but eval is easier for "true")
            q_python = q_str.replace("true", "True").replace("false", "False")
            questions = eval(q_python)
            data['questions'] = questions
        except:
             # Fallback: keep string (legacy support)
             data['questions'] = []
             print("Warning: Failed to parse questions array, using empty.")
    
    # Extract Anking Resource (Similar eval trick)
    ak_match = re.search(r"ankingResource:\s*(\{.*?\})", js_str, re.DOTALL)
    if ak_match:
        ak_str = ak_match.group(1)
        ak_str = re.sub(r'(primarySource|chapter|alternatives|resource):\s', r'"\1": ', ak_str)
        try:
            anking = eval(ak_str)
            data['ankingResource'] = anking
        except:
            pass

    # Extract Flashcards
    fc_match = re.search(r"flashcards:\s*(\[.*?\])", js_str, re.DOTALL)
    if fc_match:
        fc_str = fc_match.group(1)
        fc_str = re.sub(r'(front|back|tag):\s', r'"\1": ', fc_str)
        try:
             flashcards = eval(fc_str)
             data['flashcards'] = flashcards
        except:
            data['flashcards'] = []

    # Extract Glossary (if exists)
    gl_match = re.search(r"glossary:\s*(\[.*?\])", js_str, re.DOTALL)
    if gl_match:
        gl_str = gl_match.group(1)
        gl_str = re.sub(r'(term|definition):\s', r'"\1": ', gl_str)
        try:
             glossary = eval(gl_str)
             data['glossary'] = glossary
        except:
            data['glossary'] = []
            
    return data

for content_file in content_files:
    file_path = os.path.join(content_dir, content_file)
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    try:
        # Simplistic parsing logic
        data = js_obj_to_dict(content)
        
        if not data.get('id'):
            print(f"Skipping {content_file}: No ID found.")
            continue
            
        # JS Filename (JSONP style)
        js_filename = f"{data['id']}.file.js"
        
        # Save Metadata to Index
        lectures_index.append({
            "id": data['id'],
            "title": data.get('title', 'Untitled'),
            "module": data.get('module', 'General'),
            "tags": data.get('session', ''),
            "path": f"content/json/{js_filename}",
            # Estimate reading time (words / 200)
            "readingTime": len(data.get('summary', '').split()) // 200 if data.get('summary') else 0
        })
        
        # Save individual JS file with callback
        # We start with a global callback that app.js will define
        json_str = json.dumps(data, indent=2)
        js_content = f"window.receiveLectureContent({json_str});"
        
        with open(os.path.join(output_dir, js_filename), "w", encoding="utf-8") as out:
            out.write(js_content)
            
        print(f"Generated {js_filename}")
        
    except Exception as e:
        print(f"Error processing {content_file}: {e}")

# Save Index as JS too
with open(os.path.join(base_dir, "lectures_index.js"), "w", encoding="utf-8") as f:
    json_str = json.dumps(lectures_index, indent=2)
    f.write(f"window.receiveLectureIndex({json_str});")

print(f"\nSuccessfully generated index with {len(lectures_index)} lectures.")
