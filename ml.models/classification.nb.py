import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

# Function to preprocess text
def preprocess_text(text, label_names):
    words = text.split()
    filtered_words = [word for word in words if word.lower() not in label_names]
    return " ".join(filtered_words)

# Read data from CSV file
data = pd.read_csv('/content/new-train.csv')

# Extract texts and labels
texts = data['text'].tolist()
labels = data['label'].tolist()

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

# Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.1, random_state=42)

# Convert text data into numerical features using TF-IDF
vectorizer = TfidfVectorizer(max_features=10000)  # Limit to 10,000 features
X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

# Train Naive Bayes classifier
nb_classifier = MultinomialNB()
nb_classifier.fit(X_train_tfidf, y_train)

# Predict labels for test data
y_pred = nb_classifier.predict(X_test_tfidf)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Test Accuracy: {accuracy}")

# Prediction code
def predict_labels(model, vectorizer, sentences, label_mapping):
    # Preprocess the sentences
    processed_sentences = [preprocess_text(sentence, label_mapping.values())
                           for sentence in sentences]
    X = vectorizer.transform(processed_sentences)

    # Predict probabilities for each class
    probabilities = model.predict_proba(X)

    # Get the predicted class indices
    predicted_class_indices = np.argmax(probabilities, axis=1)

    # Map the predicted class indices to the corresponding labels
    predicted_labels = [label_mapping[index] for index in predicted_class_indices]

    return predicted_labels

# Generate label mapping dynamically
label_mapping = {i: category for i, category in enumerate(categories)}

# Example usage
sentences = [
  # // Personal & Lifestyle
  "I just finished reading a fascinating novel. It's amazing how a good book can transport you to another world.",
  "Spent the afternoon gardening and it was so therapeutic. Nature has a way of calming the mind.",
  "Today I tried a new recipe for dinner and it turned out delicious! Cooking is such a fun and creative outlet.",
  "Took some time to meditate this morning. It's important to prioritize mental health and mindfulness.",
  "Binge-watched my favorite TV show all weekend. Sometimes you just need a little escapism.",
  
  # // Work & Business
  "Had a productive meeting with the team today. Excited about the new project we're working on.",
  "Finished up a big presentation for tomorrow. Hoping it goes well!",
  "Received positive feedback from a client today. It's always rewarding to know your work is appreciated.",
  "Spent the day networking at a conference. Met some interesting people in the industry.",
  "Working late tonight to meet a deadline. The hustle never stops!",
  
  # // Education & Learning
  "Started learning a new language today. It's challenging but exciting!",
  "Attended a workshop on digital marketing strategies. Always eager to expand my skillset.",
  "Reading up on quantum physics for fun. Always fascinated by the mysteries of the universe.",
  "Took an online course on photography techniques. Can't wait to put my new skills into practice.",
  "Volunteered to tutor students in math. It's fulfilling to help others learn and grow.",
  
  # // Financial & Legal
  "Met with a financial advisor to review my investment portfolio. Planning for the future is important.",
  "Filed my taxes early this year. Feels good to have that task out of the way.",
  "Consulted with a lawyer about a legal matter. It's always wise to seek professional advice.",
  "Started a budgeting spreadsheet to track my expenses. Money management is key to financial stability.",
  "Received a raise at work! Hard work pays off.",
  
  # // Health & Medical
  "Went for a run this morning to kickstart the day. Exercise is essential for both physical and mental health.",
  "Scheduled a check-up with my doctor. Regular health screenings are important for early detection.",
  "Trying out a new diet plan to improve my eating habits. Health is wealth!",
  "Practiced yoga before bed to unwind and relax. It's amazing how it helps me sleep better.",
  "Cut out sugary drinks from my diet. Small changes can lead to big health improvements.",
  
  # // Travel & Leisure
  "Planning a weekend getaway to the beach. Can't wait to soak up the sun and relax.",
  "Booked a spontaneous trip to Paris! Sometimes you just have to seize the moment.",
  "Hiking in the mountains is my favorite way to disconnect and recharge.",
  "Visited a new museum in town. Always love exploring art and culture.",
  "Camping under the stars tonight. Nature is the ultimate therapy.",
  
  # // Entertainment & Media
  "Watched the latest blockbuster movie and it was incredible! The special effects were mind-blowing.",
  "Attended a live concert last night. There's something magical about live music.",
  "Started a new TV series and I'm already hooked. Can't wait to see what happens next!",
  "Listening to my favorite podcast on the way to work. It's a great way to start the day.",
  "Played board games with friends over the weekend. Nothing beats good old-fashioned fun.",
  
  # // Utilities & Miscellaneous
  "Installed a smart thermostat to save energy and reduce utility bills. Technology can be so convenient!",
  "Organized my closet and donated clothes I no longer wear. Decluttering feels liberating.",
  "Invested in a good quality mattress for better sleep. Quality sleep is essential for overall well-being.",
  "Subscribed to a meal delivery service to save time on cooking. Convenience at its finest!",
  "Started journaling as a way to reflect on my thoughts and emotions. It's been surprisingly therapeutic.",
];

predicted_labels = predict_labels(nb_classifier, vectorizer, sentences, label_mapping)

for sentence, label in zip(sentences, predicted_labels):
    print(f"'{sentence}' - Predicted Label: {label}")