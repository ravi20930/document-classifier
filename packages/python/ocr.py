from PIL import Image
import numpy as np
import easyocr
import re
import pytesseract

def filter_text(text):
    # Convert text to lowercase
    text = text.lower()

    # Define regex pattern to remove non-alphabetic characters
    pattern = r'[^a-z\s]'

    # Apply regex pattern to remove unwanted elements from text
    filtered_text = re.sub(pattern, '', text)

    # Replace multiple spaces with single space
    filtered_text = re.sub(r'\s+', ' ', filtered_text)

    return filtered_text.strip()

def with_easyocr(image_file):
    # Open image file
    image = Image.open(image_file)
    image_np = np.array(image)

    # Initialize EasyOCR reader
    reader = easyocr.Reader(['en'])

    # Read text from image using EasyOCR
    result = reader.readtext(image_np)

    # Extract text from result
    extracted_text = ' '.join([text[1] for text in result])

    return filter_text(extracted_text)

def with_pytesseract(image_file):
    # Open image file
    image = Image.open(image_file)

    # Convert image to grayscale
    image_gray = image.convert('L')

    # Perform OCR using Pytesseract
    extracted_text = pytesseract.image_to_string(image_gray, config='--psm 6')

    return filter_text(extracted_text)

# Example usage:
# text_from_easyocr = with_easyocr('image.jpg')
# text_from_pytesseract = with_pytesseract('image.jpg')
