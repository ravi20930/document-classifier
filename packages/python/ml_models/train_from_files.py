import os
import torch
import numpy as np
import pandas as pd
import re
from string import punctuation
from sklearn.model_selection import train_test_split
from torch.utils.data import TensorDataset, DataLoader, RandomSampler
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
from torch.optim import AdamW as TorchAdamW
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from collections import Counter

# Download NLTK resources
nltk.download('stopwords')
nltk.download('punkt')

# Define categories
categories = [
    "Personal & Lifestyle",
    "Work & Business",
    "Education & Learning",
    "Financial & Legal",
    "Health & Medical",
    "Travel & Leisure",
    "Entertainment & Media",
    "Utilities & Miscellaneous",
]

# Define stopwords set
stopwords_set = set(stopwords.words('english'))

def filter_text(text):
    """Apply text filtering."""
    # Convert text to lowercase
    filtered_text = text.lower()
    
    # Keep only alphabets
    filtered_text = re.sub(r'[^a-zA-Z]', ' ', filtered_text)
    
    # Remove extra whitespaces
    filtered_text = re.sub(r'\s+', ' ', filtered_text)

    # Tokenize the text
    words = word_tokenize(filtered_text)
    
    # Remove stop words
    filtered_text = ' '.join(word for word in words if word not in stopwords_set)
    
    return filtered_text

def main():
    # Define main folder path
    main_folder_path = os.path.abspath('../../../docs')

    # Initialize lists to store texts and labels
    texts = []
    labels = []

    # Iterate through subfolders in the main folder
    for category in categories:
        subfolder_path = os.path.join(main_folder_path, category)
        if os.path.exists(subfolder_path):
            for file in os.listdir(subfolder_path):
                file_path = os.path.join(subfolder_path, file)
                if os.path.isfile(file_path):
                    # Read the file and extract text
                    with open(file_path, "r", encoding="latin-1") as f:
                        text = f.read()
                    # Apply text filtering
                    text = filter_text(text)
                    # Append text and label to the lists
                    texts.append(text)
                    labels.append(category)

    # Read data from CSV file
    csv_file_path = os.path.abspath('../../../datasets/8labels.csv')
    if os.path.exists(csv_file_path):
        csv_data = pd.read_csv(csv_file_path)
        csv_texts = csv_data['text'].tolist()
        csv_labels = csv_data['label'].tolist()
        texts.extend(csv_texts)
        labels.extend(csv_labels)

    # Define label mapping dynamically
    label_mapping = {category: i for i, category in enumerate(categories)}
    y = np.array([label_mapping.get(label, -1) for label in labels])

    # Data preprocessing
    # You may need additional preprocessing steps here such as stemming or lemmatization.

    # Check if there are enough samples for the split
    if len(texts) > 0:
        # Split data into train and test sets
        train_texts, test_texts, train_labels, test_labels = train_test_split(texts, y, test_size=0.1, random_state=42)
    else:
        print("Error: No samples available for training.")
        return

    # Tokenize and encode the text data using DistilBERT tokenizer
    tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
    train_encodings = tokenizer(train_texts, truncation=True, padding=True)
    test_encodings = tokenizer(test_texts, truncation=True, padding=True)

    # Create TensorDatasets
    train_dataset = TensorDataset(torch.tensor(train_encodings['input_ids']),
                                  torch.tensor(train_encodings['attention_mask']),
                                  torch.tensor(train_labels))

    test_dataset = TensorDataset(torch.tensor(test_encodings['input_ids']),
                                 torch.tensor(test_encodings['attention_mask']),
                                 torch.tensor(test_labels))

    # Define batch size
    batch_size = 32

    # Create DataLoaders
    train_dataloader = DataLoader(train_dataset, sampler=RandomSampler(train_dataset), batch_size=batch_size)
    test_dataloader = DataLoader(test_dataset, batch_size=batch_size)

    # Load pre-trained DistilBERT model for sequence classification
    model = DistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased', num_labels=len(categories))

    # Define optimizer and scheduler
    optimizer = TorchAdamW(model.parameters(), lr=2e-5)
    scheduler = torch.optim.lr_scheduler.StepLR(optimizer, step_size=1, gamma=0.9)

    # Define training parameters
    num_epochs = 4
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)

    # Train the model
    for epoch in range(num_epochs):
        print(f'Epoch {epoch + 1}/{num_epochs}')
        model.train()
        total_loss = 0
        for batch in train_dataloader:
            batch = tuple(t.to(device) for t in batch)
            inputs = {'input_ids': batch[0],
                      'attention_mask': batch[1],
                      'labels': batch[2]}
            optimizer.zero_grad()
            outputs = model(**inputs)
            loss = outputs.loss
            total_loss += loss.item()
            loss.backward()
            optimizer.step()
        print(f'Training loss: {total_loss/len(train_dataloader)}')

        # Optionally, apply learning rate scheduler
        scheduler.step()

    # Evaluate the model
    model.eval()
    predictions = []
    true_labels = []

    for batch in test_dataloader:
        batch = tuple(t.to(device) for t in batch)
        inputs = {'input_ids': batch[0],
                  'attention_mask': batch[1]}
        with torch.no_grad():
            outputs = model(**inputs)
        logits = outputs.logits
        batch_predictions = logits.argmax(dim=1).cpu().numpy()
        predictions.extend(batch_predictions)
        true_labels.extend(batch[2].cpu().numpy())

    # Calculate evaluation metrics
    accuracy = accuracy_score(true_labels, predictions)
    precision = precision_score(true_labels, predictions, average='macro')
    recall = recall_score(true_labels, predictions, average='macro')
    f1 = f1_score(true_labels, predictions, average='macro')

    print(f'Test Accuracy: {accuracy}')
    print(f'Precision: {precision}')
    print(f'Recall: {recall}')
    print(f'F1 Score: {f1}')

    # Save model
    tokenizer.save_pretrained("./saved_model2/tokenizer")
    model.save_pretrained("./saved_model2/")
    print("Model and tokenizer saved successfully.")

if __name__ == "__main__":
    main()
