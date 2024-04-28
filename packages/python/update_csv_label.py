import pandas as pd
import requests

# Load the CSV file
df = pd.read_csv("pdf_texts.csv")  # Update with your CSV file path

# Define the API endpoint URL
api_url = "http://localhost:8000/predict-labels"  # Update with the URL of your Flask app

# Define the column names
text_column = "Text"
label_column = "Label"

# Function to get predicted labels for texts using the API
def get_predicted_labels(texts):
    # Convert texts to strings
    text_strings = [str(text) for text in texts]
    # Prepare request payload
    payload = {"sentences": text_strings}
    # Send POST request to the API endpoint
    response = requests.post(api_url, json=payload)
    # Parse JSON response
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to get predicted labels. Status code: {response.status_code}")
        return None

# Get texts from the dataframe
texts = df[text_column].tolist()

# Get predicted labels for texts
predicted_labels = get_predicted_labels(texts)

# Check if predicted labels were retrieved successfully
if predicted_labels is not None:
    # Create a list to store predicted labels for each text
    labels = []
    # Iterate over texts and get corresponding predicted label from the API response
    for text in texts:
        label = predicted_labels.get(text, "Label not found")  # Get label from API response
        labels.append(label)
    
    # Add predicted labels to the DataFrame
    df[label_column] = labels
    
    # Update the existing CSV file with the predicted labels
    df.to_csv("pdf_texts.csv", index=False)  # Update with the existing CSV file path
    print("CSV file updated successfully.")
else:
    print("Failed to retrieve predicted labels.")
