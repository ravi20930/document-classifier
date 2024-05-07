import nltk
from nltk.corpus import words

nltk.download('words')
nltk.download('punkt')

def remove_meaningless_words(sentences):
    meaningful_words = set(words.words())
    cleaned_sentences = []
    for sentence in sentences:
        tokens = nltk.word_tokenize(sentence)
        cleaned_tokens = [word for word in tokens if word.lower() in meaningful_words]
        cleaned_sentence = ' '.join(cleaned_tokens)
        cleaned_sentences.append(cleaned_sentence)
    return cleaned_sentences

if __name__ == "__main__":
    # Example usage:
    input_string = [
            "AMAZON, FLIPKART EMAILS CAN BE FRAUD.",
            "lec introduction to dbms what is data a data is a collection of raw",
            "Battery low for system",
            "tarak mehta ka ulta chasma.",
            "world war 3 will be for water.",
            "Collect span email from my inbox.",
            "blood is everywhere.",
            "My blood sugar is low.",
            "Compromise is key for good marriage.",
            "doremon is my favorite show",
            "This is a gold coin from stone age."
        ]
    cleaned_string = remove_meaningless_words(input_string)
    print(cleaned_string)
