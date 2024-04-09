import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from transformers import BertTokenizer, BertForSequenceClassification, AdamW
import torch
from torch.utils.data import TensorDataset, DataLoader, RandomSampler

# Read data from CSV file
data = pd.read_csv('/content/data.csv')

# Extract texts and labels
texts = data['text'].tolist()
labels = data['label'].tolist()

# Define categories
categories = ['education', 'religious', 'legal']

# Define label mapping dynamically
label_mapping = {category: i for i, category in enumerate(categories)}
y = np.array([label_mapping.get(label, -1) for label in labels])

# Tokenize and encode the text data using BERT tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased', do_lower_case=True)
encoded_data = tokenizer(texts, padding=True, truncation=True, max_length=128, return_tensors='pt')

# Create TensorDataset
dataset = TensorDataset(encoded_data['input_ids'], encoded_data['attention_mask'], torch.tensor(y))

# Split data into train and test sets
train_dataset, test_dataset = train_test_split(dataset, test_size=0.1, random_state=42)

# Define batch size
batch_size = 32

# Create DataLoader
train_dataloader = DataLoader(train_dataset, sampler=RandomSampler(train_dataset), batch_size=batch_size)
test_dataloader = DataLoader(test_dataset, batch_size=batch_size)

# Load pre-trained BERT model for sequence classification
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=len(categories))

# Define optimizer
optimizer = AdamW(model.parameters(), lr=2e-5)

# Train the model
num_epochs = 4
for epoch in range(num_epochs):
    print(f'Epoch {epoch + 1}/{num_epochs}')
    model.train()
    total_loss = 0
    for batch in train_dataloader:
        input_ids, attention_masks, labels = batch
        optimizer.zero_grad()
        outputs = model(input_ids, attention_mask=attention_masks, labels=labels)
        loss = outputs.loss
        total_loss += loss.item()
        loss.backward()
        optimizer.step()
    print(f'Training loss: {total_loss/len(train_dataloader)}')

# Evaluate the model
model.eval()
predictions = []
true_labels = []

for batch in test_dataloader:
    input_ids, attention_masks, labels = batch
    with torch.no_grad():
        outputs = model(input_ids, attention_mask=attention_masks)
    logits = outputs.logits
    batch_predictions = logits.argmax(dim=1).cpu().numpy()
    predictions.extend(batch_predictions)
    true_labels.extend(labels.cpu().numpy())

# Calculate accuracy
accuracy = np.mean(np.array(predictions) == np.array(true_labels))
print(f'Test Accuracy: {accuracy}')

# Prediction
def predict_labels(model, tokenizer, sentences, label_mapping):
    encoded_sentences = tokenizer(sentences, padding=True, truncation=True, max_length=128, return_tensors='pt')
    input_ids = encoded_sentences['input_ids']
    attention_masks = encoded_sentences['attention_mask']

    with torch.no_grad():
        outputs = model(input_ids, attention_mask=attention_masks)
    logits = outputs.logits
    predicted_class_indices = logits.argmax(dim=1).tolist()

    predicted_labels = [label_mapping[index] for index in predicted_class_indices]
    return predicted_labels

# Example usage
sentences = [
    # Educational
    "The periodic table organizes elements according to their atomic structure.",
    "The Renaissance was a period of artistic and intellectual flourishing in Europe.",
    "Climate change is a complex issue with global environmental consequences.",
    "Understanding basic programming concepts is valuable in many fields.",
    "The human brain is a remarkably complex organ responsible for thought and behavior.",
    "Scientific research has led to many groundbreaking medical advancements.",
    "Studying philosophy helps develop critical thinking and analytical skills.",
    "Knowledge of history provides context for understanding current events.",
    "Learning about different cultures promotes global awareness and understanding.",
    "The scientific method relies on experimentation and observation.",

    # Religious
    "The Bible is a sacred text for Christians.",
    "Many religions emphasize the importance of compassion and forgiveness.",
    "Religious beliefs often provide a sense of community and belonging.",
    "Meditation is a practice found in various spiritual traditions.",
    "Pilgrimages are journeys to places of religious significance.",
    "The Quran is the central religious text of Islam.",
    "Faith can be a source of strength and guidance in difficult times.",
    "Religious holidays and festivals are important in many cultures.",
    "Different religions have varying beliefs about the afterlife.",
    "The concept of karma is found in Hinduism and Buddhism.",

    # Legal
    "The Constitution is the supreme law of the United States.",
    "Laws are created by legislatures and interpreted by courts.",
    "Contracts are legally binding agreements between parties.",
    "A jury determines guilt or innocence in a criminal trial.",
    "Civil lawsuits resolve disputes between individuals or organizations.",
    "Traffic laws are designed to promote road safety.",
    "Laws protect intellectual property, such as patents and copyrights.",
    "It is important to understand your legal rights as a citizen.",
    "Lawyers provide legal advice and representation in court.",
    "Tax laws determine how much individuals and businesses owe in taxes."
]

reverse_label_mapping = {v: k for k, v in label_mapping.items()}
predicted_labels = predict_labels(model, tokenizer, sentences, reverse_label_mapping)

for sentence, label in zip(sentences, predicted_labels):
    print(f"'{sentence}' - Predicted Label: {label}")
