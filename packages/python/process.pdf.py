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
        logging.info("Starting PDF processing")
        pdf_files = [file for file in os.listdir(self.folder_path) if file.endswith(".pdf")]
        for pdf_file in pdf_files:
            self.process_pdf(pdf_file)
        self.write_csv()
        logging.info("PDF processing completed")

    def process_pdf(self, pdf_file):
        logging.info(f"Processing PDF: {pdf_file}")
        try:
            pdf_path = os.path.join(self.folder_path, pdf_file)
            text, has_images, page_count = PDFTextExtractor.extract_text_and_images(pdf_path)
            logging.info(f"Pages iterated for {pdf_file}: {page_count}")
            logging.info(f"Images found in {pdf_file}: {has_images}")
            if has_images:
                logging.info(f"Images found in {pdf_file}, processing images...")
                output_folder = os.path.join(self.folder_path, "images", pdf_file.split('.')[0])
                os.makedirs(output_folder, exist_ok=True)
                images = PDFImageConverter.convert_to_images(pdf_path, output_folder=output_folder)
                image_texts = ImageProcessor.process_images(images)
                text += ' '.join(image_texts)
            text = TextFilter.filter_text(text)
            self.csv_data.append([pdf_file, text])
        except Exception as e:
            logging.error(f"Error processing {pdf_file}: {e}")

    def write_csv(self):
        logging.info("Writing CSV file")
        with open(self.csv_file_path, "w", newline="", encoding="utf-8") as csv_file:
            writer = csv.writer(csv_file)
            writer.writerows(self.csv_data)
        logging.info(f"CSV file generated: {self.csv_file_path}")


class PDFTextExtractor:
    @staticmethod
    def extract_text_and_images(pdf_path):
        logging.info(f"Extracting text and images from PDF: {pdf_path}")
        text = ""
        has_images = False
        page_count = 0
        try:
            doc = fitz.open(pdf_path)
            for page_num, page in enumerate(doc):
                page_count += 1
                page_text = page.get_text()
                if page_text:
                    text += page_text
                pix = page.get_pixmap()
                if pix.n > 0:
                    has_images = True
        except Exception as e:
            logging.error(f"Error occurred while processing {pdf_path}: {e}")
        return text.strip(), has_images, page_count


class PDFImageConverter:
    @staticmethod
    def convert_to_images(pdf_path, output_folder, dpi=150, quality=50):
        logging.info(f"Converting PDF to images: {pdf_path}")
        try:
            doc = fitz.open(pdf_path)
            images = []
            for page_num, page in enumerate(doc):
                image_path = os.path.join(output_folder, f"page_{page_num + 1}.jpg")
                pix = page.get_pixmap(matrix=fitz.Identity, dpi=dpi,
                                       colorspace=fitz.csRGB, clip=None, alpha=False, annots=True)
                with Image.frombytes("RGB", [pix.width, pix.height], pix.samples) as img:
                    img.save(image_path, "JPEG", quality=quality)
                images.append(image_path)
                logging.info(f"Page {page_num + 1} saved as image: {image_path}")
            return images
        except Exception as e:
            logging.error(f"Error occurred while converting PDF to images: {e}")


class ImageProcessor:
    @staticmethod
    def process_images(images):
        logging.info("Processing images")
        image_texts = []
        for image in images:
            try:
                logging.info(f"Processing image: {image}")
                reader = easyocr.Reader(['en'])
                result = reader.readtext(image)
                text = ' '.join([text[1] for text in result])
                image_texts.append(text.strip())
            except Exception as e:
                logging.error(f"Error occurred while processing image {image}: {e}")
        return image_texts


class TextFilter:
    @staticmethod
    def filter_text(text):
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
