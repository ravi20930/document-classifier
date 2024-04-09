from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import logging
import os
from hugchat import hugchat
from hugchat.login import Login

app = Flask(__name__)
CORS(app, origins="*")

# Initialize logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Retrieve EMAIL, PASSWD, NODEJS_SERVICE_URL, and FLASK_PORT from environment variables
EMAIL = os.environ.get('EMAIL')
PASSWD = os.environ.get('PASSWD')
NODEJS_SERVICE_URL = os.environ.get('NODEJS_SERVICE_URL')
FLASK_PORT = os.environ.get('FLASK_PORT', 8000)  # Default port is 8000 if FLASK_PORT is not set

if EMAIL is None or PASSWD is None or NODEJS_SERVICE_URL is None:
    raise ValueError("EMAIL, PASSWD, or NODEJS_SERVICE_URL environment variables are not set.")

# Initialize HugChat
cookie_path_dir = "./cookies"
sign = Login(EMAIL, PASSWD)
cookies = sign.login(cookie_dir_path=cookie_path_dir, save_cookies=True)
chatbot = hugchat.ChatBot(cookies=cookies.get_dict())

@app.route('/')
def home():
    return 'Hello, World!'

# Endpoint to process prompts
@app.route("/process-prompt", methods=["POST"])
def process_prompt():
    try:
        data = request.json
        prompt = data['prompt']
        prompt_id = data['id']

        # Process prompt with HugChat
        response = chatbot.chat(prompt)

        # Trigger Node.js API with response and prompt ID
        payload = {"promptId": prompt_id, "response": str(response).strip()}
        expResponse = requests.post(NODEJS_SERVICE_URL+"/api/response", json=payload)
        expResponse.raise_for_status()

        return jsonify({"message": "Prompt response updated successfully", "data": str(response).strip()}), 200
    except Exception as e:
        logging.error(f"Error processing prompt: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == "__main__":
    app.run(port=int(FLASK_PORT), debug=True)
