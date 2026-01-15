import pdfplumber
import sys

pdf_path = r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\pdfs\Lecture # 6. J. Xie, Ph.D. (PPT).pdf"
output_path = r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\temp_l6_pdf_text.txt"

try:
    text_content = []
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if text:
                text_content.append(f"--- Page {i+1} ---")
                text_content.append(text)
                text_content.append("\n")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(text_content))
    print(f"Successfully extracted text to {output_path}")
except Exception as e:
    print(f"Error extracting text: {e}")
