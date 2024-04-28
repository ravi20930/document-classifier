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

# # Example usage:
# input_string = [
#         "lec introduction to dbms what is data a data is a collection of raw unorganized facts and details like text observations figures symbols and descriptions of things etc in other words data does not carry any specific purpose and has no significance by itself moreover data is measured in terms of bits and bytes which are basic units of information in the context of computer storage and processing b data can be recorded and doesnt have any meaning unless processed types of data a quantitative i numerical form ii weight volume cost of an item b qualitative i descriptive but not numerical ii name gender hair color of a person what is information a info is processed organized and structured data b it provides context of the data and enables decision making c processed data that make sense to us d information is extracted from the data by analyzing and interpreting pieces of data e eg you have data of all the people living in your locality its data when you analyze and interpret the data and come to some conclusion that i there are senior citizens ii the sex ratio is iii newborn babies are these are information data vs information a data is a collection of facts while information puts those facts into context b while data is raw and unorganized information is organized c data points are individual and sometimes unrelated information maps out that data to provide a bigpicture view of how it all fits together d data on its own is meaningless when its analyzed and interpreted it becomes meaningful information e data does not depend on information however information depends on data f data typically comes in the form of graphs numbers figures or statistics information is typically presented through words language thoughts and ideas g data isnt sufficient for decisionmaking but you can make decisions based on information what is database a database is an electronic placesystem where data is stored in a way that it can be easily accessed managed and updated b to make real use data we need database management systems dbms what is dbms a a databasemanagement system dbms is a collection of interrelated data and a set of programs to access those data the collection of data usually referred to as the database contains information relevant to an enterprise the primary goal of a dbms is to provide a way to store and retrieve database information that is both convenient and efficient b a dbms is the database itself along with all the software and functionality it is used to perform different operations like addition access updating and deletion of the data codehelp",
#         "Battery low for system",
#         "tarak mehta ka ulta chasma.",
#         "world war 3 will be for water.",
#         "AMAZON, FLIPKART EMAILS CAN BE FRAUD.",
#         "Collect span email from my inbox.",
#         "blood is everywhere.",
#         "My blood sugar is low.",
#         "Compromise is key for good marriage.",
#         "doremon is my favorite show",
#         "This is a gold coin from stone age."
#     ]
# cleaned_string = remove_meaningless_words(input_string)
# print(cleaned_string)
