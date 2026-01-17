
import os
import re
import json

CONTENT_DIR = r"e:\PPOM-UNO-Summary\content"

def parse_js_object(content):
    # improved regex to find questions array
    # This is a heuristic parser. 
    # It assumes questions: [ { ... }, { ... } ] structure.
    
    questions_match = re.search(r'questions:\s*\[(.*?)\]\s*,', content, re.DOTALL)
    if not questions_match:
        # try without trailing comma or at end of file
        questions_match = re.search(r'questions:\s*\[(.*?)\]', content, re.DOTALL)
    
    if not questions_match:
        return []

    questions_str = questions_match.group(1)
    
    # Split by objects. deeply nested braces might be an issue, but usually these are simple.
    # We'll assume each question object starts with { and ends with }, separated by ,
    
    questions = []
    depth = 0
    current_obj = ""
    
    for char in questions_str:
        if char == '{':
            if depth == 0:
                current_obj = ""
            depth += 1
            current_obj += char
        elif char == '}':
            depth -= 1
            current_obj += char
            if depth == 0:
                questions.append(current_obj)
        elif depth > 0:
            current_obj += char
            
    return questions

def analyze_question(q_str):
    issue = {}
    
    # Check for correct answer field
    has_correct_answer = 'correctAnswer:' in q_str
    has_answer = 'answer:' in q_str
    
    # Check for rationale field
    has_rationale = 'rationale:' in q_str
    has_explanation = 'explanation:' in q_str
    
    if has_answer and not has_correct_answer:
        issue['migration_needed'] = True
    
    if has_explanation and not has_rationale:
        issue['migration_needed'] = True
        
    if not has_correct_answer and not has_answer:
        issue['missing_answer'] = True
        
    if not has_rationale and not has_explanation:
        issue['missing_rationale'] = True
        
    return issue

def audit():
    issues_count = 0
    migration_count = 0
    
    for filename in os.listdir(CONTENT_DIR):
        if not filename.endswith('_content.js'):
            continue
            
        filepath = os.path.join(CONTENT_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        questions = parse_js_object(content)
        if not questions:
            # print(f"No questions found in {filename}")
            continue
            
        for i, q_str in enumerate(questions):
            issue = analyze_question(q_str)
            if issue:
                if issue.get('migration_needed'):
                    migration_count += 1
                    # print(f"[MIGRATE] {filename} Q{i+1}: Needs schema update (answer->correctAnswer, explanation->rationale)")
                
                if issue.get('missing_answer'):
                    print(f"[FAIL] {filename} Q{i+1}: Missing correct answer")
                    issues_count += 1
                    
                if issue.get('missing_rationale'):
                    print(f"[FAIL] {filename} Q{i+1}: Missing rationale")
                    issues_count += 1

    print(f"\nAudit Complete.")
    print(f"Questions needing migration: {migration_count}")
    print(f"Questions with missing data: {issues_count}")

if __name__ == "__main__":
    audit()
