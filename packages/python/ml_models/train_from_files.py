import os
import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from torch.utils.data import TensorDataset, DataLoader, RandomSampler
from torch.optim import AdamW as TorchAdamW
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import pdfplumber
import docx

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

from pdfminer.pdfparser import PDFSyntaxError

def extract_text_from_file(file_path):
    if os.path.isfile(file_path):
        if file_path.endswith('.DS_Store'):
            # Skip .DS_Store files
            return ""
        try:
            if file_path.endswith('.pdf'):
                with pdfplumber.open(file_path) as pdf:
                    text = ''.join(page.extract_text() for page in pdf.pages)
            elif file_path.endswith(('.docx', '.doc')):
                doc = docx.Document(file_path)
                text = ''.join(para.text for para in doc.paragraphs)
            else:
                raise ValueError(f"Unsupported file type: {file_path}")
            return text
        except PDFSyntaxError:
            print(f"Skipping invalid PDF file: {file_path}")
        except docx.opc.exceptions.InvalidFileException:
            print(f"Skipping invalid DOCX file: {file_path}")
    else:
        print(f"File not found: {file_path}")
    return ""

def main():
    # Absolute path to the CSV file
    csv_file = os.path.abspath('../../../datasets/8labels.csv')
    print(f"CSV file path: {csv_file}")

    # Absolute path to the train_docs directory
    train_docs_dir = os.path.abspath('../../../train_docs')
    print(f"Train docs directory: {train_docs_dir}")

    # Read data from CSV file
    data = pd.read_csv(csv_file)
    print("CSV data loaded successfully")

    # Extract texts and labels from CSV
    csv_texts = data['text'].tolist()
    csv_labels = data['label'].tolist()
    print(f"Extracted {len(csv_texts)} texts and {len(csv_labels)} labels from CSV")

    # Extract texts and labels from document files
    doc_texts = []
    doc_labels = []
    for category in categories:
        category_dir = os.path.join(train_docs_dir, category)
        if os.path.isdir(category_dir):
            for file_name in os.listdir(category_dir):
                file_path = os.path.join(category_dir, file_name)
                try:
                    text = extract_text_from_file(file_path)
                    if text:
                        doc_texts.append(text)
                        doc_labels.append(category)
                        print(f"Processed file: {file_path}, Extracted text length: {len(text)}")
                except ValueError:
                    print(f"Skipping unsupported file: {file_path}")

    print(f"Extracted {len(doc_texts)} texts and {len(doc_labels)} labels from document files")

    # Combine texts and labels from CSV and document files
    texts = csv_texts + doc_texts
    labels = csv_labels + doc_labels
    print(f"Total texts: {len(texts)}, Total labels: {len(labels)}")

    # Define label mapping dynamically
    label_mapping = {category: i for i, category in enumerate(categories)}
    y = np.array([label_mapping.get(label, -1) for label in labels])

    # Data preprocessing
    # You may need additional preprocessing steps here such as removing stop words, stemming, or lemmatization.
    print("Skipping data preprocessing")

    # Split data into train and test sets
    train_texts, test_texts, train_labels, test_labels = train_test_split(texts, y, test_size=0.1, random_state=42)
    print(f"Train data: {len(train_texts)} texts, {len(train_labels)} labels")
    print(f"Test data: {len(test_texts)} texts, {len(test_labels)} labels")

    # Tokenize and encode the text data using DistilBERT tokenizer
    tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
    print("DistilBERT tokenizer loaded")
    train_encodings = tokenizer(train_texts, truncation=True, padding=True)
    test_encodings = tokenizer(test_texts, truncation=True, padding=True)
    print("Text data tokenized and encoded")

    # Create TensorDatasets
    train_dataset = TensorDataset(torch.tensor(train_encodings['input_ids']),
                                  torch.tensor(train_encodings['attention_mask']),
                                  torch.tensor(train_labels))

    test_dataset = TensorDataset(torch.tensor(test_encodings['input_ids']),
                                 torch.tensor(test_encodings['attention_mask']),
                                 torch.tensor(test_labels))

    print("TensorDatasets created")

    # Define batch size
    batch_size = 32
    print(f"Batch size: {batch_size}")

    # Create DataLoaders
    train_dataloader = DataLoader(train_dataset, sampler=RandomSampler(train_dataset), batch_size=batch_size)
    test_dataloader = DataLoader(test_dataset, batch_size=batch_size)
    print("DataLoaders created")

    # Load pre-trained DistilBERT model for sequence classification
    model = DistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased', num_labels=len(categories))
    print("DistilBERT model loaded")

    # Define optimizer and scheduler
    optimizer = TorchAdamW(model.parameters(), lr=2e-5)
    scheduler = torch.optim.lr_scheduler.StepLR(optimizer, step_size=1, gamma=0.9)
    print("Optimizer and scheduler defined")

    # Define training parameters
    num_epochs = 4
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)
    print(f"Training device: {device}")
    print(f"Number of epochs: {num_epochs}")

    # Train the model
    for epoch in range(num_epochs):
        print(f'Epoch {epoch + 1}/{num_epochs}')
        model.train()
        total_loss = 0
        for batch_idx, batch in enumerate(train_dataloader):
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
            if batch_idx % 10 == 0:
                print(f'Batch {batch_idx}/{len(train_dataloader)}, Loss: {loss.item()}')
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
    tokenizer.save_pretrained("./saved_model_2/tokenizer")
    model.save_pretrained("./saved_model_2/")
    print("Model and tokenizer saved successfully.")

if __name__ == "__main__":
    main()