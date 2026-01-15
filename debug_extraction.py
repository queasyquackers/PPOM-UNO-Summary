
import re
import os

content = """export const L46_CONTENT = {
    id: "l46",
    summary: `
# Lecture 46: Sensory System & Special Techniques

**Lecturer:** R. Morgan, D.O.
**Session:** Lecture 46

## 1. Sensory Pathways Review
`,
    pearls: [
        {
            title: "Hoover Test Logic",
            content: "..."
        }
    ]
};"""

def extract_string_content(text, start_index, quote_char='`'):
    if start_index >= len(text) or text[start_index] != quote_char:
        return None
    
    for i in range(start_index + 1, len(text)):
        char = text[i]
        if char == quote_char and text[i-1] != '\\':
            return text[start_index+1 : i]
    return None

def test():
    js_str = content
    data = {}
    
    print("Testing extraction...")
    m = re.search(r"summary:\s*`", js_str)
    if m:
        print("Found summary start")
        start = m.end() - 1
        summary_block = extract_string_content(js_str, start, '`')
        if summary_block:
            print(f"Extracted summary block (len={len(summary_block)})")
            # print(summary_block)
            data['summary'] = summary_block.strip()
            
            title_match = re.search(r"^#\s*(.*?)$", data['summary'], re.MULTILINE)
            if title_match:
                print(f"MATCH: {title_match.group(1)}")
            else:
                print("NO MATCH for title regex")
        else:
            print("Failed to extract summary block")
    else:
        print("Summary start regex failed")

test()
