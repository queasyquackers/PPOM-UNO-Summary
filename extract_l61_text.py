import pypdf
import os

def extract_text(pdf_path, output_path):
    print(f"Extracting text from {pdf_path}...")
    try:
        reader = pypdf.PdfReader(pdf_path)
        with open(output_path, "w", encoding="utf-8") as f:
            for i, page in enumerate(reader.pages):
                text = page.extract_text()
                f.write(f"--- Page {i+1} ---\n")
                f.write(text)
                f.write("\n\n")
        print(f"Text extracted to {output_path}")
    except Exception as e:
        print(f"Error extracting text: {e}")

if __name__ == "__main__":
    pdf_path = "pdfs/Lecture # 61. A. Leder, D.O. (PPT - updated 1.29.26).pdf"
    output_path = "L61_text.txt"
    if os.path.exists(pdf_path):
        extract_text(pdf_path, output_path)
    else:
        # Try full path if relative fails
        pdf_path = "e:/PPOM-UNO-Summary/pdfs/Lecture # 61. A. Leder, D.O. (PPT - updated 1.29.26).pdf"
        if os.path.exists(pdf_path):
             extract_text(pdf_path, output_path)
        else:
             print(f"PDF not found at {pdf_path}")
