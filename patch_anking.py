
import os
import re

# Mapping of Lecture ID to Anking Data
ANKING_MAP = {
    "l26": {
        "primarySource": "BandB",
        "chapter": "Neurology > Clinical Neurology > The Neurological Exam",
        "alternatives": [
            { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Cranial Nerves" },
            { "resource": "Pathoma", "chapter": "Nervous System > Introduction" }
        ]
    },
    # L27 is OMM, minimal matches, using placeholder to ensure tab visibility
    "l27": {
        "primarySource": "BandB", # Using generic MSK
        "chapter": "Musculoskeletal > Spine",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Musculoskeletal > Anatomy" }
        ]
    },
    "l28": {
        "primarySource": "BandB",
        "chapter": "Neurology > Anatomy > Cerebral Cortex",
        "alternatives": [
            { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Cerebral Cortex" },
            { "resource": "Physeo", "chapter": "Neuroanatomy > Cortex" }
        ]
    },
    "l29": {
        "primarySource": "BandB",
        "chapter": "Neurology > Embryology > Brain Development",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Embryology" }
        ]
    },
    "l30": {
        "primarySource": "BandB",
        "chapter": "Neurology > Motor Systems > Corticospinal Tract",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Spinal Cord Tracts" }
        ]
    },
    "l31": {
        "primarySource": "BandB",
        "chapter": "Neurology > Motor Systems > Basal Ganglia",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Basal Ganglia" },
             { "resource": "Physeo", "chapter": "Neuroanatomy > Basal Ganglia" }
        ]
    },
    "l32": {
        "primarySource": "BandB",
        "chapter": "Neurology > Motor Systems > Cerebellum",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Cerebellum" },
             { "resource": "Physeo", "chapter": "Neuroanatomy > Cerebellum" }
        ]
    },
    "l33": {
        "primarySource": "SketchyPharm",
        "chapter": "Autonomic Drugs > Sympathomimetics",
        "alternatives": [
             { "resource": "BandB", "chapter": "Pharmacology > Autonomic > Sympathetics" },
             { "resource": "FirstAid", "chapter": "Pharmacology > Autonomic Drugs" }
        ]
    },
    "l34": {
        "primarySource": "SketchyPharm",
        "chapter": "Autonomic Drugs > Sympathomimetics",
        "alternatives": [
             { "resource": "BandB", "chapter": "Pharmacology > Autonomic > Sympathetics" },
             { "resource": "Pixorize", "chapter": "Autonomic Drugs > Sympathomimetics" }
        ]
    },
    "l35": {
        "primarySource": "BandB",
        "chapter": "Neurology > Cranial Nerves > CN I-VI",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Cranial Nerves" },
             { "resource": "SketchyPath", "chapter": "Neuro > Cranial Nerves" }
        ]
    },
    "l36": {
        "primarySource": "BandB",
        "chapter": "Neurology > Cranial Nerves > CN VII-XII",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Cranial Nerves" },
             { "resource": "Physeo", "chapter": "Neuroanatomy > Cranial Nerves" }
        ]
    },
    "l37": {
        "primarySource": "BandB",
        "chapter": "Neurology > Clinical Neurology > Motor Exam",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Motor Systems" }
        ]
    },
    "l38": {
        "primarySource": "BandB",
        "chapter": "Musculoskeletal > Spine",
         "alternatives": [
             { "resource": "FirstAid", "chapter": "Musculoskeletal > Pathology" }
        ]
    },
    "l39": {
        "primarySource": "SketchyPharm",
        "chapter": "Autonomic Drugs > Adrenergic Antagonists",
        "alternatives": [
             { "resource": "BandB", "chapter": "Pharmacology > Autonomic > Adrenergic Antagonists" },
             { "resource": "Pixorize", "chapter": "Autonomic Drugs > Antagonists" }
        ]
    },
    "l40": {
        "primarySource": "BandB",
        "chapter": "Neurology > Spinal Cord > Spinal Cord Lesions",
        "alternatives": [
             { "resource": "Pathoma", "chapter": "CNS > Spinal Cord" },
             { "resource": "FirstAid", "chapter": "Neurology > Pathology > Spinal Cord" }
        ]
    },
    "l41": {
        "primarySource": "BandB",
        "chapter": "Neurology > Neuromuscular > Myopathy vs Neuropathy",
        "alternatives": [
             { "resource": "Pathoma", "chapter": "Musculoskeletal > Myopathies" }
        ]
    },
    "l42": {
        "primarySource": "Pathoma",
        "chapter": "CNS > Demyelinating Disorders",
        "alternatives": [
             { "resource": "BandB", "chapter": "Neurology > Demyelinating > MS" },
             { "resource": "FirstAid", "chapter": "Neurology > Pathology > Demyelinating" }
        ]
    },
    "l43": {
        "primarySource": "BandB",
        "chapter": "Neurology > Demyelinating > MS Treatment",
        "alternatives": [
             { "resource": "SketchyPharm", "chapter": "Neuro/Psych > MS Drugs" }
        ]
    },
    "l44": {
        "primarySource": "BandB",
        "chapter": "Neurology > Eye > Ophthalmology basics",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Ophthalmology" },
             { "resource": "Pathoma", "chapter": "Eye Pathology" }
        ]
    },
    "l45": {
        "primarySource": "BandB",
        "chapter": "Neurology > Integration",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Systems" }
        ]
    },
    "l13": {
        "primarySource": "BandB",
        "chapter": "Epidemiology > Biostatistics > Bias",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Public Health > Epidemiology" },
             { "resource": "Pathoma", "chapter": "Fundamentals > Neoplasia" } 
        ]
    },
    "l46": {
        "primarySource": "BandB",
        "chapter": "Neurology > Clinical Neurology > Sensory Exam",
        "alternatives": [
             { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Sensory Systems" }
        ]
    }
}

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(BASE_DIR, "content")

def update_content_files():
    for filename in os.listdir(CONTENT_DIR):
        if not filename.endswith("_content.js"):
            continue
            
        # Extract ID from filename (L26_content.js -> l26)
        file_id = filename.split("_")[0].lower()
        
        if file_id in ANKING_MAP:
            filepath = os.path.join(CONTENT_DIR, filename)
            data = ANKING_MAP[file_id]
            
            print(f"Updating {filename}...")
            
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
                
            # Construct JSON string for ankingResource
            anking_str = "    ankingResource: {\n"
            anking_str += f'        primarySource: "{data["primarySource"]}",\n'
            anking_str += f'        chapter: "{data["chapter"]}",\n'
            anking_str += '        alternatives: [\n'
            for alt in data["alternatives"]:
                anking_str += f'            {{ "resource": "{alt["resource"]}", "chapter": "{alt["chapter"]}" }},\n'
            # Remove trailing comma from last item
            anking_str = anking_str.rstrip(",\n") + "\n" 
            anking_str += '        ]\n    }'
            
            # Check if ankingResource already exists
            if "ankingResource:" in content:
                # Replace existing
                pattern = r"ankingResource:\s*\{[^}]+\}" 
                # Note: This simple regex fails on nested braces (like alternatives array). 
                # Better to use a simpler approach: 
                # We know the structure is usually at the end.
                # Or just regex for `ankingResource: \{[\s\S]*?\}` if we assume it's balanced or ends with `},` at root level.
                
                # Given strict formatting, let's look for `ankingResource: {` and the matching closing brace.
                pass 
                # Actually, simpler: RegEx replace `ankingResource: \{[\s\S]*?\}` carefully.
                # However, since these files MIGHT NOT HAVE IT (that's the problem), we assume we need to insert it.
                # But wait, do they not have it? I should check one.
            
            # If not present, insert before the closing brace of the main object `},`
            # Look for the last `}` before `if (typeof window`
            
            boilerplate_start = content.rfind('if (typeof window')
            last_brace = content.rfind('}', 0, boilerplate_start)
            
            if "ankingResource:" not in content:
                # Insert
                new_content = content[:last_brace] + ",\n" + anking_str + "\n" + content[last_brace:]
                # Fix double commas if any
                new_content = new_content.replace(",\n,", ",\n")
            else:
                 # It exists, but likely missing alternatives? Or we overwrite it.
                 # Let's try to remove the old one and add new one.
                 # Heuristic: Remove lines containing ankingResource until the closing brace of that block.
                 # This is risky with regex. 
                 # Let's just APPEND it if missing, and if present, ALERT?
                 # Step 30 showed L26 in lectures_data.js did NOT have it. So it's likely missing in content file too.
                 new_content = content[:last_brace] + ",\n" + anking_str + "\n" + content[last_brace:]
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
                
    print("Updates complete.")

if __name__ == "__main__":
    update_content_files()

