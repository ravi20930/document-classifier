import os
import re
import csv
import easyocr
import fitz
from PIL import Image
import logging

logging.basicConfig(level=logging.INFO)

class PDFProcessor:
    def __init__(self, folder_path, csv_file_path):
        self.folder_path = folder_path
        self.csv_file_path = csv_file_path
        self.csv_data = [["PDF File Name", "Text"]]

    def process(self):
        print("Starting PDF processing")
        logging.info("Starting PDF processing")
        pdf_files = [file for file in os.listdir(self.folder_path) if file.endswith(".pdf")]
        for pdf_file in pdf_files:
            self.process_pdf(pdf_file)
        self.write_csv()
        print("PDF processing completed")
        logging.info("PDF processing completed")

    def process_pdf(self, pdf_file):
        print(f"Processing PDF: {pdf_file}")
        logging.info(f"Processing PDF: {pdf_file}")
        try:
            pdf_path = os.path.join(self.folder_path, pdf_file)
            text, has_images, page_count, total_char_count, images = PDFTextExtractor.extract_text_and_images(pdf_path)
            print(f"Pages iterated for {pdf_file}: {page_count}")
            logging.info(f"Pages iterated for {pdf_file}: {page_count}")
            print(f"Images found in {pdf_file}: {has_images}")
            logging.info(f"Images found in {pdf_file}: {has_images}")
            if has_images:
                print(f"Images found in {pdf_file}, processing images...")
                logging.info(f"Images found in {pdf_file}, processing images...")
                for image_path in images:
                    image_texts = ImageProcessor.process_images([image_path])
                    text += ' '.join(image_texts)
            text = TextFilter.filter_text(text)
            self.csv_data.append([pdf_file, text])
        except Exception as e:
            print(f"Error processing {pdf_file}: {e}")
            logging.error(f"Error processing {pdf_file}: {e}")

    def write_csv(self):
        print("Writing CSV file")
        logging.info("Writing CSV file")
        with open(self.csv_file_path, "w", newline="", encoding="utf-8") as csv_file:
            writer = csv.writer(csv_file)
            writer.writerows(self.csv_data)
        print(f"CSV file generated: {self.csv_file_path}")
        logging.info(f"CSV file generated: {self.csv_file_path}")


class PDFTextExtractor:
    @staticmethod
    def extract_text_and_images(pdf_path):
        print(f"Extracting text and images from PDF: {pdf_path}")
        logging.info(f"Extracting text and images from PDF: {pdf_path}")
        text = ""
        has_images = False
        page_count = 0
        total_char_count = 0
        images = []  # List to store paths of images to be extracted
        try:
            doc = fitz.open(pdf_path)
            for page_num, page in enumerate(doc):
                page_count += 1
                page_text = page.get_text()
                if page_text:
                    text += page_text
                    total_char_count += len(page_text)
                    print(f"Text count in page {page_num + 1}: {len(page_text)}")
                    if total_char_count > 2000:  # Stop processing if total character count exceeds 2000
                        print("Total character count exceeds 2000. Stopping processing.")
                        logging.info("Total character count exceeds 2000. Stopping processing.")
                        break
                    if len(page_text) < 500:  # Check if the page has less than 500 characters of text
                        pix = page.get_pixmap()
                        if pix.n > 0:
                            has_images = True
                            print(f"Image found")
                            logging.info(f"Image found")
                            output_folder = os.path.join(os.path.dirname(pdf_path), "images", os.path.splitext(os.path.basename(pdf_path))[0])
                            os.makedirs(output_folder, exist_ok=True)
                            image_path = os.path.join(output_folder, f"page_{page_num + 1}.jpg")
                            img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                            img.save(image_path)
                            images.append(image_path)
                else:
                    pix = page.get_pixmap()
                    if pix.n > 0:
                        has_images = True
                        print(f"Image found")
                        logging.info(f"Image found")
                        output_folder = os.path.join(os.path.dirname(pdf_path), "images", os.path.splitext(os.path.basename(pdf_path))[0])
                        os.makedirs(output_folder, exist_ok=True)
                        image_path = os.path.join(output_folder, f"page_{page_num + 1}.jpg")
                        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                        img.save(image_path)
                        images.append(image_path)
        except Exception as e:
            print(f"Error occurred while processing {pdf_path}: {e}")
            logging.error(f"Error occurred while processing {pdf_path}: {e}")
            return "", False, 0, 0, []  # Return empty text, False for has_images, and 0 for page_count and total_char_count in case of error
        return text.strip(), has_images, page_count, total_char_count, images


class ImageProcessor:
    @staticmethod
    def process_images(images):
        print("Processing images")
        logging.info("Processing images")
        image_texts = []
        for image in images:
            try:
                print(f"Processing image: {image}")
                logging.info(f"Processing image: {image}")
                reader = easyocr.Reader(['en'])
                result = reader.readtext(image)
                text = ' '.join([text[1] for text in result])
                image_texts.append(text.strip())
            except Exception as e:
                print(f"Error occurred while processing image {image}: {e}")
                logging.error(f"Error occurred while processing image {image}: {e}")
        return image_texts


class TextFilter:
    @staticmethod
    def filter_text(text):
        print("Filtering text")
        logging.info("Filtering text")
        text = text.lower()
        pattern = r'[^a-z\s]'
        filtered_text = re.sub(pattern, '', text)
        filtered_text = re.sub(r'\s+', ' ', filtered_text)
        return filtered_text.strip()


if __name__ == "__main__":
    folder_path = "../../docs"
    csv_file_path = "./pdf_texts.csv"
    processor = PDFProcessor(folder_path, csv_file_path)
    processor.process()
