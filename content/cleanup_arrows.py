
import os
import re
import glob

def cleanup_arrows():
    content_dir = r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\content"
    files = glob.glob(os.path.join(content_dir, "L*_content.js"))
    
    print(f"Scanning {len(files)} files for cleanup...")
    
    # Replacement map: from pattern to replacement
    # We want to end up with unicode arrow →
    
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        new_content = content
        
        # 1. Clean up my previous mess ($→$)
        new_content = new_content.replace(r"$\→$", "→")
        new_content = new_content.replace(r"$→$", "→")
        new_content = new_content.replace(r"$\to$", "→") # In case I missed it
        new_content = new_content.replace(r"$\\to$", "→") # In case it's escaped
        
        # 2. Fix the original issues (redundant but safe)
        new_content = re.sub(r'\|+to\b', '→', new_content)
        new_content = new_content.replace("->", "→")
        
        # 3. Handle remaining LaTeX arrows if any
        # replace \to with → if it's not inside a math block we want to keep?
        # Assuming most are simple arrows
        new_content = new_content.replace(r"\to", "→")
        new_content = new_content.replace(r"\\to", "→")
        
        # 4. Clean up any $\rightarrow$
        new_content = new_content.replace(r"$\rightarrow$", "→")
        new_content = new_content.replace(r"$\\rightarrow$", "→")
        
        # 5. Clean up any double arrows created by mistake
        # e.g. →→ or $→$
        pass 
        
        if new_content != original_content:
            print(f"Fixing arrows in {os.path.basename(file_path)}")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)

if __name__ == "__main__":
    cleanup_arrows()
