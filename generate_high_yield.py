
import pypdf
import sys
import os
import re
import json
import statistics
from collections import Counter

# Default config in case file is missing
DEFAULT_CONFIG = {
    "pos_keywords": ["high yield", "important", "summary", "key points", "remember", "take home", "exam", "test", "clinical correlate", "mechanism", "black box", "warning", "adverse effect", "treatment", "management", "objectives"],
    "neg_keywords": ["references", "thank you", "disclosure", "agenda", "overview", "bibliography", "works cited", "sources", "citations"],
    "feedback_indicators": ["feedback form", "evaluation", "qr code", "survey", "scan the code"],
    "practice_indicators": ["practice question", "review question", "self-assessment", "question 1", "question 2", "q:"],
    "patterns": {
        "email": r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
        "formula": r'[A-Za-z]+\s*=\s*[A-Za-z0-9]+',
        "threshold": r'(>|<|≥|≤)\s*\d+|\d+\s*(mg|kg|mcg|g/dl|mmhg)',
        "example": r'\be\.g\.|for example|such as',
        "clinical": r'\b(patient|presentation|case|symptoms|diagnosis)\b',
        "url": r'https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+|www\.[-\w.]+'
    },
    "weights": {
        "bold_ratio": 20, "color_ratio": 30, "keyword_hit": 5, "neg_keyword_hit": -20, "repetition": 2,
        "formula": 10, "threshold": 10, "example": 5, "clinical": 5, "practice_q": 15,
        "image_bonus": 15, "visual_diagram_bonus": 10, "low_text_penalty": -5,
        "adjacency_next": 5, "adjacency_prev": 2,
        "url_penalty": -50
    }
}

def load_config():
    config_path = os.path.join(os.path.dirname(__file__), 'high_yield_config.json')
    if os.path.exists(config_path):
        try:
            with open(config_path, 'r') as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading config: {e}. Using defaults.")
    return DEFAULT_CONFIG

CONFIG = load_config()

def get_page_score(page, page_num, dynamic_keywords=None, recurring_images=None):
    text = ""
    bold_text = ""
    colored_text = "" 
    current_color = (0, 0, 0) 
    
    def visitor_operand(op, operands, cm, tm):
        nonlocal current_color
        if op == b'rg' or op == b'RG':
            if len(operands) >= 3:
                try:
                    r, g, b = float(operands[0]), float(operands[1]), float(operands[2])
                    current_color = (r, g, b)
                except: pass
        elif op == b'k' or op == b'K':
            if len(operands) >= 4:
                try:
                    c, m, y, k = float(operands[0]), float(operands[1]), float(operands[2]), float(operands[3])
                    r = (1 - c) * (1 - k)
                    g = (1 - m) * (1 - k)
                    b = (1 - y) * (1 - k)
                    current_color = (r, g, b)
                except: pass
        elif op == b'g' or op == b'G':
            if len(operands) >= 1:
                try:
                    gray = float(operands[0])
                    current_color = (gray, gray, gray)
                except: pass

    def visitor_body(text_chunk, cm, tm, fontDict, fontSize):
        nonlocal text, bold_text, colored_text, current_color
        if text_chunk:
            text += text_chunk
        return 0, {}

    page.extract_text(visitor_text=visitor_body)
    
    clean_text = text.strip()
    lower_text = clean_text.lower()
    total_chars = len(re.sub(r'\s+', '', clean_text))
    bold_chars = len(re.sub(r'\s+', '', bold_text))
    colored_chars = len(re.sub(r'\s+', '', colored_text))
    
    # Image Detection
    num_images = 0
    try:
        if '/Resources' in page and '/XObject' in page['/Resources']:
            xObject = page['/Resources']['/XObject'].get_object()
            for obj in xObject:
                if xObject[obj]['/Subtype'] == '/Image':
                    # Skip if recurring (template/background)
                    if recurring_images and obj in recurring_images:
                        continue
                        
                    width = xObject[obj]['/Width']
                    height = xObject[obj]['/Height']
                    # Filter out small images (logos, icons)
                    # Threshold: > 150px in BOTH dimensions (avoid banners/sidebars)
                    if width > 150 and height > 150:
                        num_images += 1
    except:
        pass # Some PDFs might fail image extraction

    if total_chars == 0 and num_images == 0:
        return 0, {"reason": "no content"}

    bold_ratio = bold_chars / total_chars if total_chars > 0 else 0
    color_ratio = colored_chars / total_chars if total_chars > 0 else 0
    
    pos_keywords = CONFIG["pos_keywords"].copy()
    if dynamic_keywords:
        pos_keywords.extend(dynamic_keywords)
        
    keyword_hits = [k for k in pos_keywords if k in lower_text]
    neg_hits = [k for k in CONFIG["neg_keywords"] if k in lower_text]
    
    has_formula = bool(re.search(CONFIG["patterns"]["formula"], clean_text))
    has_threshold = bool(re.search(CONFIG["patterns"]["threshold"], lower_text))
    has_example = bool(re.search(CONFIG["patterns"]["example"], lower_text))
    has_clinical = bool(re.search(CONFIG["patterns"]["clinical"], lower_text))
    has_practice_q = any(pi in lower_text for pi in CONFIG["practice_indicators"])
    has_practice_q = any(pi in lower_text for pi in CONFIG["practice_indicators"])
    url_count = len(re.findall(CONFIG["patterns"]["url"], lower_text))
    
    # Check for PDF Link Annotations
    link_annot_count = 0
    if "/Annots" in page:
        try:
            annots = page["/Annots"]
            for annot in annots:
                annot_obj = annot.get_object()
                if annot_obj.get("/Subtype") == "/Link":
                    link_annot_count += 1
        except: pass

    words = re.findall(r'\b[a-zA-Z]{5,}\b', lower_text)
    word_counts = Counter(words)
    top_words = word_counts.most_common(3)
    repeated_score = 0
    if top_words and top_words[0][1] > 3:
        repeated_score = 1

    # --- Scoring Calculation ---
    w = CONFIG["weights"]
    score = bold_ratio * w["bold_ratio"]
    score += color_ratio * w["color_ratio"]
    
    if keyword_hits: score += w["keyword_hit"] * len(keyword_hits)
    if neg_hits: score += w["neg_keyword_hit"] * len(neg_hits)
    if repeated_score: score += w["repetition"]
    
    if has_formula: score += w["formula"]
    if has_threshold: score += w["threshold"]
    if has_example: score += w["example"]
    if has_clinical: score += w["clinical"]
    if has_practice_q: score += w["practice_q"]
    
    # Cumulative penalty for every link found
    total_links = url_count + link_annot_count
    score += total_links * w["url_penalty"]
    
    # Image Logic
    if num_images > 0:
        score += w["image_bonus"]
        # If low text but has images, it's likely a diagram -> Boost instead of penalty
        if total_chars < 50:
            score += w["visual_diagram_bonus"]
    elif total_chars < 50 and not has_formula:
        score += w["low_text_penalty"]
    
    details = {
        "bold_ratio": f"{bold_ratio:.2f}",
        "color_ratio": f"{color_ratio:.2f}",
        "keywords": keyword_hits,
        "images": num_images,
        "patterns": {
            "formula": has_formula, "threshold": has_threshold,
            "example": has_example, "clinical": has_clinical, "practice_q": has_practice_q,
            "url_count": url_count, "link_annot_count": link_annot_count
        },
        "score": f"{score:.2f}"
    }
    
    return score, details

def find_summary_and_objectives(reader):
    keywords = []
    force_include_pages = []
    
    summary_indicators = ["summary", "key points", "take home points", "conclusion", "wrap up"]
    objective_indicators = ["objectives", "learning objectives", "goals"]
    
    for i, page in enumerate(reader.pages):
        page_num = i + 1
        text = page.extract_text()
        if not text: continue
            
        lower_text = text.lower()
        lines = lower_text.split('\n')
        first_lines = " ".join(lines[:3])
        
        is_summary = any(ind in first_lines for ind in summary_indicators)
        is_objective = any(ind in first_lines for ind in objective_indicators)
        
        if is_summary or is_objective:
            words = re.findall(r'\b[a-zA-Z]{5,}\b', lower_text)
            keywords.extend(words)
            if is_objective:
                force_include_pages.append(page_num)
            
    if keywords:
        counts = Counter(keywords)
        return [word for word, count in counts.most_common(15)], force_include_pages
    
    return [], force_include_pages

def get_image_hashes(reader):
    # Map: image_name -> count
    image_counts = Counter()
    total_pages = len(reader.pages)
    
    # Sample first 20 pages to find recurring images
    sample_pages = reader.pages[:20]
    
    for page in sample_pages:
        try:
            if '/Resources' in page and '/XObject' in page['/Resources']:
                xObject = page['/Resources']['/XObject'].get_object()
                for obj in xObject:
                    if xObject[obj]['/Subtype'] == '/Image':
                        # Use object name as proxy for hash (simple & fast)
                        image_counts[obj] += 1
        except:
            pass
            
    # Filter images that appear in > 50% of sampled pages
    recurring_images = {img for img, count in image_counts.items() if count > (len(sample_pages) * 0.5)}
    return recurring_images


def analyze_transcript(transcript_path):
    """
    Analyzes transcript for high yield concepts based on:
    1. Repetition
    2. Explicit emphasis ("need to know", "important")
    3. Clinical correlates
    4. Examples
    """
    if not os.path.exists(transcript_path):
        return [], []

    try:
        with open(transcript_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return [], []

    # Remove timestamps and line numbers (simple SRT parsing)
    text_content = re.sub(r'\d+\n\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}\n', '', content)
    text_content = text_content.replace('\n', ' ')
    lower_content = text_content.lower()

    # 1. Repetition (Bigrams/Trigrams)
    words = re.findall(r'\b[a-zA-Z]{4,}\b', lower_content)
    # Filter common stop words (basic list)
    stop_words = {"this", "that", "with", "from", "have", "what", "your", "will", "they", "there", "about", "which", "when", "then", "some", "just", "like", "these", "those", "because", "actually", "basically", "really", "right", "okay", "going", "think", "know", "here", "very", "much", "well", "make", "look", "where", "kind", "sort", "mean", "does", "done", "used", "using", "into", "onto", "also", "even", "most", "more", "less", "least", "good", "bad", "high", "low", "first", "last", "next", "back", "front", "side", "part", "whole", "show", "seen", "said", "says", "tell", "told", "talk", "call", "called", "name", "named", "want", "need", "take", "give", "get", "got", "put", "set", "let", "see", "saw", "come", "came", "go", "went", "do", "did", "be", "is", "are", "was", "were", "has", "had", "can", "could", "would", "should", "may", "might", "must", "and", "or", "but", "so", "if", "as", "of", "at", "by", "for", "in", "on", "to", "up", "out", "off", "over", "under", "again", "then", "than", "now", "how", "why", "who", "whom", "whose"}
    
    filtered_words = [w for w in words if w not in stop_words]
    word_counts = Counter(filtered_words)
    
    # Get top repeated concepts (top 20)
    repeated_concepts = [word for word, count in word_counts.most_common(20)]

    # 2. Explicit Emphasis
    emphasis_patterns = [
        r"need to know", r"must know", r"important to remember", r"key point", 
        r"exam question", r"test question", r"high yield", r"don't forget",
        r"pay attention", r"critical"
    ]
    
    emphasis_hits = []
    for pattern in emphasis_patterns:
        matches = re.finditer(pattern, lower_content)
        for match in matches:
            # Extract context (surrounding text)
            start = max(0, match.start() - 50)
            end = min(len(lower_content), match.end() + 100)
            emphasis_hits.append(lower_content[start:end])

    # 3. Clinical Correlates
    clinical_patterns = [
        r"clinical correlate", r"syndrome", r"disease", r"disorder", r"patient",
        r"symptoms", r"diagnosis", r"treatment", r"pathology"
    ]
    clinical_hits = []
    for pattern in clinical_patterns:
         matches = re.finditer(pattern, lower_content)
         for match in matches:
             start = max(0, match.start() - 50)
             end = min(len(lower_content), match.end() + 100)
             clinical_hits.append(lower_content[start:end])

    # Extract keywords from hits to use for slide boosting
    boost_keywords = set(repeated_concepts)
    
    # Extract nouns/key terms from emphasis and clinical hits (simple heuristic)
    for hit in emphasis_hits + clinical_hits:
        hit_words = re.findall(r'\b[a-zA-Z]{5,}\b', hit)
        for w in hit_words:
            if w not in stop_words:
                boost_keywords.add(w)

    return list(boost_keywords), emphasis_hits + clinical_hits

def generate_high_yield(pdf_path, output_path, transcript_path=None, dry_run=False):
    print(f"Processing {pdf_path}...")
    reader = pypdf.PdfReader(pdf_path)
    writer = pypdf.PdfWriter()
    
    dynamic_keywords, force_include_pages = find_summary_and_objectives(reader)
    recurring_images = get_image_hashes(reader)
    
    transcript_keywords = []
    transcript_hits = []
    if transcript_path:
        print(f"Analyzing transcript: {transcript_path}")
        transcript_keywords, transcript_hits = analyze_transcript(transcript_path)
        print(f"Found {len(transcript_keywords)} transcript keywords and {len(transcript_hits)} high-yield segments.")
        if dynamic_keywords:
            dynamic_keywords.extend(transcript_keywords)
        else:
            dynamic_keywords = transcript_keywords

    if dynamic_keywords: print(f"Found dynamic keywords (Total): {len(dynamic_keywords)}")
    if force_include_pages: print(f"Force including pages: {force_include_pages}")
    if recurring_images: print(f"Ignoring recurring images: {recurring_images}")
    
    page_data = [] # List of dicts: {page_num, score, page, details}
    scores_only = []
    
    # Pass 2: Score Pages
    for i, page in enumerate(reader.pages):
        page_num = i + 1
        if page_num == 1:
            if dry_run: print(f"Page {page_num}: Skipped (Title Slide)")
            continue
            
        score, details = get_page_score(page, page_num, dynamic_keywords, recurring_images)
        
        if page_num in force_include_pages:
            score = max(score, 999)
            details["note"] = "Force Included (Objectives)"
        
        page_data.append({"page_num": page_num, "score": score, "page": page, "details": details})
        
        if score > -100 and score < 500:
            scores_only.append(score)
            
    if not scores_only:
        print("No content found to score.")
        return

    mean_score = statistics.mean(scores_only)
    try: stdev_score = statistics.stdev(scores_only)
    except: stdev_score = 0
    
    # Relaxed Threshold: Mean
    threshold = mean_score 
    
    # Pass 3: Contextual Flow (Adjacency Bonus)
    # Convert list to dict for easy access
    page_map = {p["page_num"]: p for p in page_data}
    w = CONFIG["weights"]
    
    for p in page_data:
        # If a page is very high scoring (High Confidence)
        if p["score"] > (threshold + 10) and p["score"] < 500: # Ignore forced pages for flow source
            p_num = p["page_num"]
            
            # Boost Next
            if (p_num + 1) in page_map:
                page_map[p_num + 1]["score"] += w["adjacency_next"]
                if dry_run: print(f"  -> Adjacency Bonus (+{w['adjacency_next']}) to Page {p_num + 1} from Page {p_num}")
                
            # Boost Prev
            if (p_num - 1) in page_map:
                page_map[p_num - 1]["score"] += w["adjacency_prev"]
                if dry_run: print(f"  -> Adjacency Bonus (+{w['adjacency_prev']}) to Page {p_num - 1} from Page {p_num}")

    # Re-evaluate selection after bonuses
    selected_pages = []
    
    # Iterative Relaxation: Ensure at least ~15 slides (or 50% of content) if possible
    # But don't go below a hard floor score (e.g. 5)
    current_threshold = threshold
    min_slides = 15
    max_retries = 3
    
    for attempt in range(max_retries + 1):
        selected_pages = [p for p in page_data if p["score"] >= current_threshold]
        
        # If we have enough slides, or if we have > 50% of total pages, stop
        if len(selected_pages) >= min_slides or len(selected_pages) >= (len(scores_only) * 0.5):
            break
            
        # If we are already quite low, stop
        if current_threshold < 5:
            break
            
        # Relax threshold
        if dry_run: print(f"  Selection count {len(selected_pages)} is low. Relaxing threshold ({current_threshold:.2f} -> {current_threshold * 0.9:.2f})...")
        current_threshold *= 0.9
        
    selected_pages.sort(key=lambda x: x["page_num"])
    
    if dry_run:
        print(f"\nScore Stats - Mean: {mean_score:.2f}, StdDev: {stdev_score:.2f}, Final Threshold: {current_threshold:.2f}")
        for p in page_data:
             print(f"Page {p['page_num']}: Score {p['score']:.2f} | Images: {p['details'].get('images')} | Patterns: {p['details'].get('patterns')}")
    else:
        print(f"Score Stats - Mean: {mean_score:.2f}, StdDev: {stdev_score:.2f}, Threshold: {threshold:.2f}")
        for p in page_data:
             print(f"Page {p['page_num']}: Score {p['score']:.2f} | Images: {p['details'].get('images')} | Patterns: {p['details'].get('patterns')}")

    selected_page_nums = [p["page_num"] for p in selected_pages]
    print(f"\nSelected {len(selected_page_nums)} pages: {selected_page_nums}")
    
    if not dry_run and selected_pages:
        for p in selected_pages:
            writer.add_page(p["page"])
        with open(output_path, "wb") as f:
            writer.write(f)
        print(f"Saved to {output_path}")
    elif not selected_pages:
        print("No pages selected.")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python generate_high_yield.py <input_pdf> <output_pdf> [transcript_path]")
        sys.exit(1)
    input_pdf = sys.argv[1]
    output_pdf = sys.argv[2]
    transcript_path = sys.argv[3] if len(sys.argv) > 3 else None
    dry_run = output_pdf == "dry_run"
    generate_high_yield(input_pdf, output_pdf, transcript_path, dry_run)

