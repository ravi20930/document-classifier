import os
import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
from ml_models.classification_bert import categories

saved_model_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ml_models', 'saved_model')
tokenizer_dir = os.path.join(saved_model_dir, 'tokenizer')

model = DistilBertForSequenceClassification.from_pretrained(saved_model_dir)
tokenizer = DistilBertTokenizer.from_pretrained(tokenizer_dir)

def predict_labels(sentences):
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
    # label_mapping = {category: i for i, category in enumerate(categories)}
    reverse_label_mapping = {v: k for k, v in {category: i for i, category in enumerate(categories)}.items()}
    predicted_labels = [reverse_label_mapping[index] for index in predicted_class_indices]

    return predicted_labels


if __name__ == "__main__":
    # Define sentences
    sentences = [
      # # // Personal & Lifestyle
      # "I just finished reading a fascinating novel. It's amazing how a good book can transport you to another world.",
      # "Spent the afternoon gardening and it was so therapeutic. Nature has a way of calming the mind.",
      # "Today I tried a new recipe for dinner and it turned out delicious! Cooking is such a fun and creative outlet.",
      # "Took some time to meditate this morning. It's important to prioritize mental health and mindfulness.",
      # "Binge-watched my favorite TV show all weekend. Sometimes you just need a little escapism.",

      # # // Work & Business
      # "Had a productive meeting with the team today. Excited about the new project we're working on.",
      # "Finished up a big presentation for tomorrow. Hoping it goes well!",
      # "Received positive feedback from a client today. It's always rewarding to know your work is appreciated.",
      # "Spent the day networking at a conference. Met some interesting people in the industry.",
      # "Working late tonight to meet a deadline. The hustle never stops!",

      # # // Education & Learning
      # "Started learning a new language today. It's challenging but exciting!",
      # "Attended a workshop on digital marketing strategies. Always eager to expand my skillset.",
      # "Reading up on quantum physics for fun. Always fascinated by the mysteries of the universe.",
      # "Took an online course on photography techniques. Can't wait to put my new skills into practice.",
      # "Volunteered to tutor students in math. It's fulfilling to help others learn and grow.",

      # # // Financial & Legal
      # "Met with a financial advisor to review my investment portfolio. Planning for the future is important.",
      # "Filed my taxes early this year. Feels good to have that task out of the way.",
      # "Consulted with a lawyer about a legal matter. It's always wise to seek professional advice.",
      # "Started a budgeting spreadsheet to track my expenses. Money management is key to financial stability.",
      # "Received a raise at work! Hard work pays off.",

      # // Health & Medical
      # "Went for a run this morning to kickstart the day. Exercise is essential for both physical and mental health.",
      # "Scheduled a check-up with my doctor. Regular health screenings are important for early detection.",
      # "Trying out a new diet plan to improve my eating habits. Health is wealth!",
      # "Practiced yoga before bed to unwind and relax. It's amazing how it helps me sleep better.",
      # "Cut out sugary drinks from my diet. Small changes can lead to big health improvements.",

      # // Travel & Leisure
      # "Planning a weekend getaway to the beach. Can't wait to soak up the sun and relax.",
      # "Booked a spontaneous trip to Paris! Sometimes you just have to seize the moment.",
      # "Hiking in the mountains is my favorite way to disconnect and recharge.",
      # "Visited a new museum in town. Always love exploring art and culture.",
      "Your offer letter for amazon has arrived ",

      # // Entertainment & Media
      "Battery low for system",
      "tarak mehta ka ulta chasma.",
      "world war 3 will be for water.",
      "AMAZON, FLIPKART EMAILS CAN BE FRAUD.",
      "Collect span email from my inbox.",

      # // Utilities & Miscellaneous
      "blood is everywhere.",
      "My blood sugar is low.",
      "Compromise is key for good marriage.",
      "doremon is my favorite show",
      "This is a gold coin from stone age.",
    ]

    # Perform prediction using loaded model and tokenizer
    predicted_labels = predict_labels(sentences)
    # print(f"{predicted_labels}")


    # Print predicted labels
    for sentence, label in zip(sentences, predicted_labels):
        print(f"'{sentence}' - Predicted Label: {label}")