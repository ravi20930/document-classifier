import os
import re
import csv
import shutil
import easyocr
import fitz
from PIL import Image
import logging
from text_cleaner import remove_meaningless_words
from prediction import predict_labels

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
        self.move_documents_to_folders()
        self.delete_images_folder()
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

        texts = [row[1] for row in self.csv_data[1:]]
        print("Removing meaningless words...")
        logging.info("Removing meaningless words...")
        filtered_texts = remove_meaningless_words(texts)
        print("Now predicting labels...")
        logging.info("Now predicting labels...")
        labels = predict_labels(filtered_texts)
        
        print("All set writing final csv...")
        logging.info("All set writing final csv...")
        for i, (filtered_text, label) in enumerate(zip(filtered_texts, labels)):
            if filtered_text:
                self.csv_data[i + 1][1] = filtered_text
                self.csv_data[i + 1].append(label)
            else:
                self.csv_data[i + 1].append("")
        
        with open(self.csv_file_path, "w", newline="", encoding="utf-8") as csv_file:
            writer = csv.writer(csv_file)
            writer.writerows(self.csv_data)
        print(f"CSV file generated: {self.csv_file_path}")
        logging.info(f"CSV file generated: {self.csv_file_path}")

    def move_documents_to_folders(self):
        print("Moving documents to respective folders...")
        logging.info("Moving documents to respective folders...")
        
        processed_files = set()  # Maintain a set of processed file names
        
        # Read the CSV file and move documents to respective folders based on labels
        with open(self.csv_file_path, newline="", encoding="utf-8") as csv_file:
            reader = csv.reader(csv_file)
            next(reader)  # Skip the header row
            for row in reader:
                pdf_file_name, _, label = row
                if pdf_file_name not in processed_files:  # Check if the file has already been processed
                    label_folder = os.path.join(self.folder_path, label)
                    os.makedirs(label_folder, exist_ok=True)
                    source_path = os.path.join(self.folder_path, pdf_file_name)
                    destination_path = os.path.join(label_folder, pdf_file_name)
                    try:
                        shutil.move(source_path, destination_path)
                        processed_files.add(pdf_file_name)  # Add the file to the set of processed files
                        print(f"Moved {pdf_file_name} to {label_folder}")
                        logging.info(f"Moved {pdf_file_name} to {label_folder}")
                    except FileNotFoundError:
                        print(f"File not found: {pdf_file_name}")
                        logging.warning(f"File not found: {pdf_file_name}")
    
        print("Documents moved to respective folders.")
        logging.info("Documents moved to respective folders.")


    def delete_images_folder(self):
        print("Deleting images folder...")
        logging.info("Deleting images folder...")
        images_folder = os.path.join(self.folder_path, "images")
        shutil.rmtree(images_folder, ignore_errors=True)
        print("Images folder deleted.")
        logging.info("Images folder deleted.")


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
                            output_folder = os.path.join(os.path.dirname(pdf_path), "images", os.path.splitext(os.path.basename(pdf_path))[0])
                            os.makedirs(output_folder, exist_ok=True)
                            image_path = os.path.join(output_folder, f"page_{page_num + 1}.jpg")
                            img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                            img.save(image_path)
                            images.append(image_path)
                            image_texts = ImageProcessor.process_images([image_path])
                            text += ' '.join(image_texts)
                            total_char_count += len(' '.join(image_texts))
                            if total_char_count > 2000:  # Stop processing if total character count exceeds 2000
                                print("Total character count exceeds 2000. Stopping processing.")
                                logging.info("Total character count exceeds 2000. Stopping processing.")
                                break
                else:
                    pix = page.get_pixmap()
                    if pix.n > 0:
                        has_images = True
                        output_folder = os.path.join(os.path.dirname(pdf_path), "images", os.path.splitext(os.path.basename(pdf_path))[0])
                        os.makedirs(output_folder, exist_ok=True)
                        image_path = os.path.join(output_folder, f"page_{page_num + 1}.jpg")
                        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                        img.save(image_path)
                        images.append(image_path)
                        image_texts = ImageProcessor.process_images([image_path])
                        text += ' '.join(image_texts)
                        total_char_count += len(' '.join(image_texts))
                        if total_char_count > 2000:  # Stop processing if total character count exceeds 2000
                            print("Total character count exceeds 2000. Stopping processing.")
                            logging.info("Total character count exceeds 2000. Stopping processing.")
                            break
        except Exception as e:
            print(f"Error occurred while processing {pdf_path}: {e}")
            logging.error(f"Error occurred while processing {pdf_path}: {e}")
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
