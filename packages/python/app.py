import os
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), '../../.env'))

# Import necessary functions from ml_models other files
from ocr import with_easyocr, with_pytesseract
from chat import ChatBotManager
from text_cleaner import remove_meaningless_words
from ml_models.classification_bert import predict_labels


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

if __name__ == "__main__":
    port = int(os.environ.get("FLASK_PORT", 8000))
    app.run(port=port, debug=True)
