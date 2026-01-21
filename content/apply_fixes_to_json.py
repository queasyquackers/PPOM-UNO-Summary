
import os
import re
import glob

def fix_json_files():
    # Target the json directory where the actual app content lives
    content_dir = r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\content\json" 
    files = glob.glob(os.path.join(content_dir, "l*.file.js"))
    
    print(f"Found {len(files)} JSON-JS files to fix.")
    
    # Regex for table layout fix: Header immediately followed by table boundary
    # Case 1: Real newlines (Template literals)
    # Matches: ## Header [newline] |
    table_regex_real = re.compile(r"(## [^\n\r]+)(\r?\n)(\|)")
    
    # Case 2: Escaped newlines (JSON strings context)
    # Matches: ## Header \n |
    # We use a negative lookahead (?!\\n) to ensure we don't consume across lines
    table_regex_escaped = re.compile(r'(## (?:(?!\\n).)*)(\\n)(\|)')
    
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        new_content = content
        
        # 1. Fix Table Layout
        # Case 1: Real newlines
        new_content = table_regex_real.sub(r"\1\2\2\3", new_content)
        
        # Case 2: Escaped newlines
        # We replace \n with \n\n (which is \\n\\n in the regex replacement string)
        new_content = table_regex_escaped.sub(r"\1\2\2\3", new_content)

        # 2. Fix Arrows (Standardize to Unicode →)
        # Previous mess cleanup
        new_content = new_content.replace(r"$\→$", "→")
        new_content = new_content.replace(r"$→$", "→")
        new_content = new_content.replace(r"$\\to$", "→")
        new_content = new_content.replace(r"$\to$", "→")
        
        # User specific complaints
        new_content = re.sub(r'\|+to\b', '→', new_content)
        new_content = new_content.replace(r"->", "→")
        new_content = new_content.replace(r"\to", "→")
        new_content = new_content.replace(r"\\to", "→")
        new_content = new_content.replace(r"$\rightarrow$", "→")
        new_content = new_content.replace(r"$\\rightarrow$", "→")

        if new_content != original_content:
            print(f"Applying fixes to {os.path.basename(file_path)}")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)

if __name__ == "__main__":
    fix_json_files()
