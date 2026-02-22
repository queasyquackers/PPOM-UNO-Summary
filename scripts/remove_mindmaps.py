import os

files_to_check = [f"l{i}.file.js" for i in range(71, 82)]
dir_path = r"e:\PPOM-UNO-Summary\content\json"

for file_name in files_to_check:
    path = os.path.join(dir_path, file_name)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        
        if "## Mind Map" in content:
            idx = content.find("## Mind Map")
            end_idx = content.find("`", idx)
            
            if end_idx != -1:
                content_before = content[:idx].rstrip()
                content_after = content[end_idx:]
                new_content = content_before + "\n" + content_after
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Fixed {file_name}")
            else:
                print(f"Could not find closing backtick in {file_name}")
        else:
            print(f"No Mind Map found in {file_name}")
    else:
        print(f"{file_name} not found")
