import re
import json

def parse_markdown_to_mindmap(markdown_text):
    """
    Parses hierarchical markdown (##, ###, bullets) into a JSON tree structure
    compatible with the visualization in app.js.
    """
    root = {"name": "Root", "children": []}
    current_l1 = None
    current_l2 = None
    
    lines = markdown_text.split('\n')
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        if line.startswith('## '):
            current_l1 = {"name": line.replace('## ', '').strip(), "children": []}
            root['children'].append(current_l1)
            current_l2 = None
        elif line.startswith('### ') and current_l1:
            current_l2 = {"name": line.replace('### ', '').strip(), "children": []}
            current_l1['children'].append(current_l2)
        elif line.startswith('*') and current_l2:
            # Parse Node
            clean_line = line.replace('*', '').strip()
            # Extract bold term
            match = re.match(r'\*\*(.*?)\*\*(.*)', clean_line)
            if match:
                term = match.group(1).replace(':', '').strip()
                def_text = match.group(2).replace(':', '', 1).strip()
                current_l2['children'].append({"name": term, "definition": def_text})
            else:
                 current_l2['children'].append({"name": clean_line})
                 
    return root

# Example usage to demonstrate parsing logic
if __name__ == "__main__":
    example_md = """
    ## Nervous System
    ### CNS
    * **Brain**: Processor
    * **Spinal Cord**: Relay
    """
    print(json.dumps(parse_markdown_to_mindmap(example_md), indent=2))
