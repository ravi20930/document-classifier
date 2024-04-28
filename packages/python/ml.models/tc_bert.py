import torch
from transformers import AutoConfig, DistilBertForSequenceClassification, DistilBertTokenizer

# Define label mapping and reverse label mapping
label_mapping = {
    0: "Personal & Lifestyle",
    1: "Work & Business",
    2: "Education & Learning",
    3: "Financial & Legal",
    4: "Health & Medical",
    5: "Travel & Leisure",
    6: "Entertainment & Media",
    7: "Utilities & Miscellaneous",
}

reverse_label_mapping = {v: k for k, v in label_mapping.items()}

# Define the number of labels
num_labels = len(label_mapping)

# Define function to predict labels
def predict_labels(model, tokenizer, sentences, label_mapping):
    # Move model to appropriate device (CPU or GPU)
    device = next(model.parameters()).device  # Get device of the model
    model.to(device)

    # Encode sentences and move tensors to the same device as the model
    encoded_sentences = tokenizer(sentences, padding=True, truncation=True, max_length=128, return_tensors='pt')
    input_ids = encoded_sentences['input_ids'].to(device)
    attention_masks = encoded_sentences['attention_mask'].to(device)

    # Perform inference on the model
    with torch.no_grad():
        outputs = model(input_ids, attention_mask=attention_masks)
    logits = outputs.logits

    # Move logits to CPU for post-processing
    logits = logits.cpu()

    # Obtain predicted class indices and map them to labels
    predicted_class_indices = logits.argmax(dim=1).tolist()
    predicted_labels = [label_mapping[index] for index in predicted_class_indices]

    return predicted_labels

# Load the model configuration from the saved model file
config = AutoConfig.from_pretrained("tc_bert.pth", num_labels=num_labels)

# Load the model weights onto the CPU
model_state_dict = torch.load("tc_bert.pth", map_location=torch.device('cpu'))

# Instantiate the model using the loaded configuration
model = DistilBertForSequenceClassification(config)

# Load the model weights
model.load_state_dict(model_state_dict)

# Set the model to evaluation mode
model.eval()

tokenizer = DistilBertTokenizer.from_pretrained("tc_bert_tokenizer")

# Define sentences
sentences = [
    "Your offer letter for Amazon has arrived.",
    "Battery low for system.",
    "Tarak Mehta Ka Ulta Chasma.",
    "World War 3 will be for water.",
    "Amazon, Flipkart emails can be fraud.",
    "Collect spam email from my inbox.",
    "Blood is everywhere.",
    "My blood sugar is low.",
    "Compromise is key for a good marriage.",
    "Doraemon is my favorite show.",
    "This is a gold coin from the Stone Age."
]

# Run prediction
predicted_labels = predict_labels(model, tokenizer, sentences, reverse_label_mapping)

# Print predicted labels
for sentence, label in zip(sentences, predicted_labels):
    print(f"'{sentence}' - Predicted Label: {label}")
