import os
import json
import re

def finalize_l60():
    base_dir = "e:/PPOM-UNO-Summary"
    lectures_data_path = os.path.join(base_dir, "lectures_data.js")
    output_js_path = os.path.join(base_dir, "content", "json", "l60.file.js")
    index_path = os.path.join(base_dir, "lectures_index.js")

    # 1. Read lectures_data.js to get L60 object
    with open(lectures_data_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find L60 object. It should be the last one, or close to it.
    # We look for "id: 'l60'" and the surrounding braces.
    # Since I just wrote it, I know it starts with { and ends with },
    
    # Robust extraction: Find the object matching id: 'l60'
    # match = re.search(r"\{\s*id:\s*'l60'.*?^\s*\},", content, re.DOTALL | re.MULTILINE)
    # The regex in register_l60.py was simple string concatenation. 
    # The object structure in lectures_data.js:
    # {
    #    id: 'l60',
    #    ...
    # },
    
    start_marker = "id: 'l60'"
    start_pos = content.find(start_marker)
    if start_pos == -1:
        print("Error: Could not find L60 in lectures_data.js")
        return

    # Find the opening brace before the ID
    obj_start = content.rfind("{", 0, start_pos)
    
    # Find the closing brace. It needs to be the one balancing the opening brace.
    # Since the content inside contains nested objects (questions, etc), we need to balance them.
    # Quick hack: It's the last object added, so it's likely followed by ];
    # But let's be careful.
    
    # Actually, I can just construct the object again since I have the source in register_l60.py?
    # No, better to extract it to ensure consistency.
    
    # Let's count braces to find the end
    depth = 0
    obj_end = -1
    for i in range(obj_start, len(content)):
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
            if depth == 0:
                obj_end = i + 1
                break
    
    if obj_end == -1:
         print("Error: Could not parse L60 object bounds")
         return

    l60_js_obj = content[obj_start:obj_end]

    # 2. Write content/json/l60.file.js
    # The format is window.receiveLectureContent({...});
    # The extracted string is the JS object literal.
    
    file_content = f"window.receiveLectureContent({l60_js_obj});"
    
    with open(output_js_path, "w", encoding="utf-8") as f:
        f.write(file_content)
    print(f"Created {output_js_path}")

    # 3. Update lectures_index.js
    with open(index_path, "r", encoding="utf-8") as f:
        index_content = f.read()

    # Parse the existing index to append cleanly
    # index_content looks like: window.receiveLectureIndex([...]);
    # We want to insert before the last "]);"
    
    insertion_point = index_content.rfind("]);")
    if insertion_point == -1:
        print("Error: Could not find insertion point in lectures_index.js")
        return
    
    # Construct index entry
    # Need title, module, etc.
    # We can perform simple extract from the l60_js_obj string
    title_match = re.search(r"title:\s*'(.*?)'", l60_js_obj)
    module_match = re.search(r"module:\s*'(.*?)'", l60_js_obj)
    session_match = re.search(r"session:\s*'(.*?)'", l60_js_obj)
    summary_match = re.search(r"summary:\s*`([^`]*)`", l60_js_obj)
    
    title = title_match.group(1) if title_match else "Lecture #60: Sacral MET (Part 2)"
    module = module_match.group(1) if module_match else "OMM"
    session = session_match.group(1) if session_match else "Lecture #60"
    summary = summary_match.group(1) if summary_match else ""
    
    # Estimate reading time
    word_count = len(summary.split()) if summary else 0
    reading_time = max(1, word_count // 200)

    new_entry = {
        "id": "l60",
        "title": title,
        "module": module,
        "tags": session,
        "path": "content/json/l60.file.js",
        "readingTime": reading_time
    }
    
    # Format as JS object string, consistent with file style
    entry_str = "  {\n"
    entry_str += f'    "id": "{new_entry["id"]}",\n'
    entry_str += f'    "title": "{new_entry["title"]}",\n'
    entry_str += f'    "module": "{new_entry["module"]}",\n'
    entry_str += f'    "tags": "{new_entry["tags"]}",\n'
    entry_str += f'    "path": "{new_entry["path"]}",\n'
    entry_str += f'    "readingTime": {new_entry["readingTime"]}\n'
    entry_str += "  }"
    
    # Check if comma needed
    prefix = ""
    # Look backwards from insertion point for non-whitespace
    # If it's not a bracket [, we need a comma
    # Simplified: Index is a list, so yes we likely need a comma unless empty
    # But let's just assumes it's not empty given L1-L59
    prefix = ",\n"
    
    new_index_content = index_content[:insertion_point] + prefix + entry_str + "\n" + index_content[insertion_point:]
    
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(new_index_content)
    
    print("Updated lectures_index.js")

if __name__ == "__main__":
    finalize_l60()
