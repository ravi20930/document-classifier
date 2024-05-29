import os
from os import walk
import logging
from threading import Thread
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
executor = ThreadPoolExecutor(max_workers=1)

load_dotenv(os.path.join(os.path.dirname(__file__), '../../.env'))

# Import necessary functions from ml_models other files
from ocr import with_easyocr, with_pytesseract
from chat import ChatBotManager
from text_cleaner import remove_meaningless_words
from prediction import predict_labels
from process_pdf import PDFProcessor


# Initialize Flask app
app = Flask(__name__)
CORS(app, origins="*")

# Initialize logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route("/process-prompt", methods=["POST"])
def process_prompt():
    try:
        data = request.json
        prompt = data.get('prompt')

        if not prompt:
            return jsonify({"error": "Prompt not provided"}), 400

        chatbot_manager = ChatBotManager()
        chatbot = chatbot_manager.chatbot()

        response = chatbot.chat(prompt)

        return jsonify({"message": "Prompt processed successfully", "response": str(response).strip()}), 200
    except Exception as e:
        logging.error(f"Error processing prompt: {e}")
        return jsonify({"error": "Internal Server Error"}), 500
    
@app.route("/process-image", methods=["POST"])
def process_image():
    try:
        image_file = request.files['image']
        category = request.form.get('category')
        model = request.form.get('model', 'easyocr')

        if model == 'easyocr':
            extracted_text = with_easyocr(image_file)
        elif model == 'pytesseract':
            extracted_text = with_pytesseract(image_file)
        else:
            return jsonify({"error": "Invalid model choice"}), 400

        return jsonify({"text": extracted_text.strip(), "label": category}), 200
    except Exception as e:
        logging.error(f"Error processing image: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

@app.route("/predict-labels", methods=["POST"])
def predict_labels_api():
    try:
        data = request.json
        sentences = data.get("sentences", [])

        if not sentences:
            return jsonify({"error": "No sentences provided"}), 400

        sentences = remove_meaningless_words(sentences)
        predicted_labels = predict_labels(sentences)

        response = {sentence: label for sentence, label in zip(sentences, predicted_labels)}
        
        return jsonify(response), 200
    except Exception as e:
        logging.error(f"Error predicting labels: {e}")
        return jsonify({"error": "Internal Server Error"}), 500
    

ALLOWED_EXTENSIONS = {'pdf'}
UPLOAD_FOLDER = '../../docs'
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
@app.route('/upload', methods=['POST'])
def upload_files():
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

    uploaded_files = request.files.getlist('files')

    for file in uploaded_files:
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        if not file or not allowed_file(file.filename):
            return jsonify({'error': f'File {file.filename} has an invalid extension or is not a PDF'}), 400
        filename = file.filename
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)

    # thread = Thread(target=process_pdfs, args=(UPLOAD_FOLDER, "pdf_texts.csv"))
    # thread.start()
    executor.submit(process_pdfs, UPLOAD_FOLDER, "pdf_texts.csv")


    return jsonify({'message': 'All files uploaded and queued for processing successfully!'}), 200

def process_pdfs(folder_path, csv_file_path):
    processor = PDFProcessor(folder_path, csv_file_path)
    processor.process()
    # emit socket event
    print(f"PDF processing completed (asynchronously) for {folder_path}")

@app.route('/list-pdfs', methods=['GET'])
def list_pdfs():
    # Initialize a defaultdict with list as the default_factory
    pdf_files_by_folder = defaultdict(list)
    total_pdfs = 0

    # Iterate over the files
    for root, _, files in os.walk(UPLOAD_FOLDER):
        for filename in files:
            if filename.lower().endswith('.pdf'):
                # Extract folder name
                folder_name = "root" if root.endswith("docs") else os.path.basename(root)
                # Append filename to the corresponding folder
                pdf_files_by_folder[folder_name].append(filename)
                total_pdfs += 1

    # If no PDFs are found, return a message
    if not pdf_files_by_folder:
        return jsonify({'message': 'No PDF files found in the docs folder'}), 200
    else:
        # Return the total count and PDFs grouped by folder
        return jsonify({'total_count': total_pdfs, 'pdf_files_by_folder': pdf_files_by_folder}), 200


@app.route('/download/<folder>/<filename>', methods=['GET'])
def download_pdf(folder, filename):
    # Validate folder and filename to prevent unauthorized access
    if not allowed_file(filename):
        return jsonify({'error': 'Invalid file format'}), 400

    filepath = os.path.join(UPLOAD_FOLDER, folder, filename)
    if not os.path.exists(filepath):
        return jsonify({'error': 'File not found'}), 404

    return send_from_directory(UPLOAD_FOLDER, os.path.join(folder, filename), as_attachment=True)

if __name__ == "__main__":
    port = int(os.environ.get("FLASK_PORT", 8000))
    app.run(port=port, debug=True)
