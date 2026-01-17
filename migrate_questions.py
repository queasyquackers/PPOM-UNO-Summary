
import os
import re

CONTENT_DIR = r"e:\PPOM-UNO-Summary\content"

def migrate():
    count = 0
    files_modified = 0
    
    for filename in os.listdir(CONTENT_DIR):
        if not filename.endswith('_content.js'):
            continue
            
        filepath = os.path.join(CONTENT_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # We only want to replace keys inside the 'questions' array. 
        # Since these files are JS objects, a global replace of "answer:" -> "correctAnswer:" 
        # and "explanation:" -> "rationale:" is generally safe *provided* these keys aren't used elsewhere 
        # with different meanings. In this codebase, they seem specific to questions.
        
        # However, to be safer, we can check if "questions: [" exists and maybe only target that block?
        # Given the file size and structure (questions is a major block), global replace is acceptable risk 
        # if we verify. The keys are 'answer:' (followed by value) and 'explanation:' (followed by value).
        
        # Regex for 'answer:' ensuring it's a key (followed by space or value)
        # We replace 'answer:' with 'correctAnswer:'
        # We replace 'explanation:' with 'rationale:'
        
        # Note: L2_content.js already has correct keys. We should avoid double replacing if they overlap, 
        # but 'correctAnswer:' won't match 'answer:'.
        
        new_content = content
        
        # Replace answer: -> correctAnswer:
        # Look for " answer:" or "{answer:" or "\nanswer:" to avoid matching "correctAnswer:"
        # Actually "correctAnswer" contains "answer", so we must be careful.
        # simpler: Look for word boundary \banswer:
        
        if re.search(r'\banswer\s*:', new_content):
            new_content = re.sub(r'(\b)answer\s*:', r'\1correctAnswer:', new_content)
            
        if re.search(r'\bexplanation\s*:', new_content):
            new_content = re.sub(r'(\b)explanation\s*:', r'\1rationale:', new_content)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Migrated {filename}")
            files_modified += 1
        
    print(f"\nMigration Complete. Modified {files_modified} files.")

if __name__ == "__main__":
    migrate()
