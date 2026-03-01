import re

with open("Make it stop.txt", "r", encoding="utf-8", errors="ignore") as f:
    data = f.read()

keywords = [
    "Sexual Dysfunction", "Genito-Pelvic Pain", "Vaginismus", "Dyspareunia", 
    "Erectile Dysfunction", "Delayed Ejaculation", "Premature Ejaculation", 
    "Priapism", "Paraphili", "Pedophili", "Sadism"
]

cards = data.split("\n")
matches = {k: [] for k in keywords}

for card in cards:
    for k in keywords:
        if k.lower() in card.lower():
            matches[k].append(card)

# Print a few examples for each personality disorder
for k, v in matches.items():
    if v:
        tags = re.findall(r'#(?:B&B|Sketchy|Pathoma|FirstAid|Bootcamp|OME)[^\s"]+', " ".join(v))
        unique_tags = list(set(tags))
        print(f"--- Matches for {k}: {len(v)} ---")
        for t in unique_tags[:5]:
            print(t)

