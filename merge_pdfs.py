#!/usr/bin/env python3
"""
PDF Merger Tool
Merges multiple PDF files into a single PDF file.
"""

import sys
import os
from PyPDF2 import PdfMerger
from pathlib import Path

def merge_pdfs(input_files, output_file):
    """
    Merge multiple PDF files into a single PDF.
    
    Args:
        input_files (list): List of paths to input PDF files
        output_file (str): Path for the output merged PDF file
    """
    merger = PdfMerger()
    
    try:
        print("Starting PDF merge process...")
        
        for i, pdf_file in enumerate(input_files, 1):
            if not os.path.exists(pdf_file):
                print(f"❌ Error: File '{pdf_file}' not found!")
                return False
            
            print(f"📄 Adding file {i}/{len(input_files)}: {pdf_file}")
            merger.append(pdf_file)
        
        print(f"💾 Writing merged PDF to: {output_file}")
        merger.write(output_file)
        merger.close()
        
        print(f"✅ Successfully merged {len(input_files)} PDFs into '{output_file}'")
        
        # Show file size
        size = os.path.getsize(output_file)
        size_mb = size / (1024 * 1024)
        print(f"📊 Output file size: {size_mb:.2f} MB")
        
        return True
        
    except Exception as e:
        print(f"❌ Error during merge: {str(e)}")
        return False
    finally:
        merger.close()

def main():
    """Main function to handle command line arguments."""
    
    if len(sys.argv) < 4:
        print("""
📚 PDF Merger Tool

Usage:
    python merge_pdfs.py <output_file.pdf> <input1.pdf> <input2.pdf> [input3.pdf] ...

Examples:
    python merge_pdfs.py merged_book.pdf chapter1.pdf chapter2.pdf chapter3.pdf
    python merge_pdfs.py combined.pdf file1.pdf file2.pdf

Arguments:
    output_file.pdf  - Name of the merged PDF file to create
    input*.pdf       - PDF files to merge (in order)

Note: Files will be merged in the order you specify them.
        """)
        return
    
    output_file = sys.argv[1]
    input_files = sys.argv[2:]
    
    # Validate that output file has .pdf extension
    if not output_file.lower().endswith('.pdf'):
        output_file += '.pdf'
    
    # Validate that all input files have .pdf extension
    valid_inputs = []
    for file in input_files:
        if not file.lower().endswith('.pdf'):
            print(f"⚠️  Warning: '{file}' doesn't have .pdf extension, skipping...")
            continue
        valid_inputs.append(file)
    
    if len(valid_inputs) < 2:
        print("❌ Error: Need at least 2 PDF files to merge!")
        return
    
    print(f"🔄 Merging {len(valid_inputs)} PDF files...")
    print(f"📂 Output: {output_file}")
    print("📋 Input files:")
    for i, file in enumerate(valid_inputs, 1):
        print(f"   {i}. {file}")
    print()
    
    success = merge_pdfs(valid_inputs, output_file)
    
    if success:
        print(f"\n🎉 Merge completed successfully!")
        print(f"Your merged PDF is ready: {output_file}")
        
        # If output directory is public/pdfs, mention the PDF reader
        if 'public/pdfs' in str(Path(output_file).parent):
            filename = Path(output_file).stem
            print(f"\n💡 Tip: You can now view this in your PDF reader at:")
            print(f"   http://localhost:3000/pdf/{filename}")
    else:
        print(f"\n💥 Merge failed. Please check the error messages above.")

if __name__ == "__main__":
    main() 