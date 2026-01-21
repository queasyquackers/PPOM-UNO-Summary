
import os
import re
import glob

def fix_files():
    content_dir = r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\content"
    # content_dir = "./content" # For testing locally if needed, but using absolute path
    
    files = glob.glob(os.path.join(content_dir, "L*_content.js"))
    
    print(f"Found {len(files)} files.")
    
    table_regex = re.compile(r"(## [^\n\r]+)(\r?\n)(\|)")
    
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # 1. Fix Table Layout
        # Logic: If a header line is followed immediately by a pipe (table start), insert an extra newline.
        # Note: We need to loop or use substitute until no changes, but usually one pass is enough for simple cases.
        # But regex sub matches all occurrences.
        
        new_content = table_regex.sub(r"\1\2\2\3", content)
        
        if new_content != content:
            print(f"Fixed table layout in {os.path.basename(file_path)}")
        
        # 2. Fix Window Assignment (The "Red 1" Error)
        # Find the exported variable name
        match = re.search(r"export const (L\w+_CONTENT)\s*=", new_content)
        if match:
            var_name = match.group(1)
            
            # Check if window assignment exists
            if f"window.{var_name} =" not in new_content:
                print(f"Adding window assignment to {os.path.basename(file_path)}")
                
                # Append the block
                # Ensure we have a newline before if it doesn't end with one
                if not new_content.endswith("\n"):
                    new_content += "\n"
                
                block = f"\nif (typeof window !== 'undefined') {{\n    window.{var_name} = {var_name};\n}}\n"
                new_content += block
        
        # 3. Fix Arrows
        # User reported ||to and |to. Also fixing -> and \to for consistency.
        # We need to be careful not to break valid code or regex, but these are mostly markdown content.
        
        # Replace ||to and |to
        if "||to" in new_content:
            print(f"Found ||to in {os.path.basename(file_path)}")
            new_content = new_content.replace("||to", "→")
        
        if "|to" in new_content: # Careful if this matches ||to (it won't if we did ||to first)
             # But construct like |to| in a table? "| to |" is valid.
             # We should look for |to without a leading space or something?
             # User said "|to" indicates a right arrow.
             # RegEx might be safer: \|+to
             pass
             
        # Regex for specific user complaints
        # Replace ||to or |to (assuming they are not part of table structure)
        # Table structure is | col | col |. " |to " would be weird.
        # But "|to" meaning arrow?
        
        # Let's use regex for these specifically
        new_content = re.sub(r'\|+to\b', '→', new_content)
        
        # Replace -> (common arrow)
        new_content = new_content.replace("->", "→")
        
        # Replace $\to$ or \to (LaTeX) with Unicode for better compatibility if requested
        # Replacing $\to$ with →
        new_content = new_content.replace("$\\to$", "→")
        # Replacing \to with → (escaped backslash in string is \\)
        new_content = new_content.replace("\\to", "→")
        
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)

if __name__ == "__main__":
    fix_files()
