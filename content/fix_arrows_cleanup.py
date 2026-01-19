import os

directories = [
    r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\content",
    r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\content\json"
]

def fix_content(content):
    original_content = content
    
    if "$→$" in content:
        content = content.replace("$→$", "→")
        
    return content if content != original_content else None

for directory in directories:
    if not os.path.exists(directory):
        continue
        
    print(f"Processing {directory}...")
    for filename in os.listdir(directory):
        if filename.endswith(".js") or filename.endswith(".json"):
            filepath = os.path.join(directory, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = fix_content(content)
                
                if new_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")
