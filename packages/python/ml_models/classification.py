import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense, Dropout
from keras.optimizers import Adam

# Define classes for custom training and testing epochs
class TrainEpoch:
    def __init__(self, model, X_train, y_train, batch_size):
        self.model = model
        self.X_train = X_train
        self.y_train = y_train
        self.batch_size = batch_size
        self.num_batches = X_train.shape[0] // self.batch_size

    def run(self):
        for batch_idx in range(self.num_batches):
            start_idx = batch_idx * self.batch_size
            end_idx = min(start_idx + self.batch_size, self.X_train.shape[0])
            X_batch = self.X_train[start_idx:end_idx]
            y_batch = self.y_train[start_idx:end_idx]
            loss, _ = self.model.train_on_batch(X_batch, y_batch)
            print(f"Batch {batch_idx + 1}/{self.num_batches}, Loss: {loss}")

class TestEpoch:
    def __init__(self, model, X_test, y_test):
        self.model = model
        self.X_test = X_test
        self.y_test = y_test

    def run(self):
        X_test_dense = self.X_test.toarray()  # Convert to dense array for immediate solution
        loss, accuracy = self.model.evaluate(X_test_dense, self.y_test)
        print(f"Test Loss: {loss}, Test Accuracy: {accuracy}")

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

# Function to preprocess text
def preprocess_text(text, label_names):
    words = text.split()
    filtered_words = [word for word in words if word.lower() not in label_names]
    return " ".join(filtered_words)

# Preprocess the 'texts' array before feature extraction
processed_texts = [preprocess_text(text, categories) for text in texts]

# Feature extraction (using the preprocessed texts)
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(processed_texts)

# Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1, random_state=42)

# Define neural network architecture
model = Sequential()
model.add(Dense(256, input_shape=(X_train.shape[1],), activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(128, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(64, activation='relu'))
model.add(Dense(len(categories), activation='softmax'))  # Output layer with softmax activation for multi-class classification

# Compile the model
model.compile(loss='sparse_categorical_crossentropy', optimizer=Adam(lr=0.001), metrics=['accuracy'])

# Train the model
batch_size = 32
num_epochs = 20
for epoch in range(num_epochs):
    print(f"Epoch {epoch + 1}/{num_epochs}")
    train_epoch = TrainEpoch(model, X_train, y_train, batch_size)
    train_epoch.run()
    test_epoch = TestEpoch(model, X_test, y_test)
    test_epoch.run()

# Prediction code
def predict_labels(model, vectorizer, sentences, label_mapping):
    # Preprocess the sentences
    processed_sentences = [preprocess_text(sentence, categories)
                           for sentence in sentences]
    X = vectorizer.transform(processed_sentences)

    # Handle sparse features (choose one of the methods):
    if hasattr(model.layers[0], 'get_weights') and not model.layers[0].get_weights()[0].shape[0]:
        # Model expects sparse features
        X_sparse = tf.sparse.reorder(tf.sparse.from_dense(X))
        predictions = model.predict(X_sparse)
    else:
        # Model expects dense features
        predictions = model.predict(X.toarray())

    # Get class indices with highest probability
    predicted_class_indices = np.argmax(predictions, axis=1)

    # Map indices back to original labels
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
predicted_labels = predict_labels(model, vectorizer, sentences, reverse_label_mapping)

for sentence, label in zip(sentences, predicted_labels):
    print(f"'{sentence}' - Predicted Label: {label}")