import os
from hugchat import hugchat
from hugchat.login import Login
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), '../../.env'))

class ChatBotManager:
    def __init__(self):
        self.email = os.environ.get('EMAIL')
        self.password = os.environ.get('PASSWD')

        if self.email is None or self.password is None:
            raise ValueError("EMAIL or PASSWD environment variables are not set.")

    def login(self):
        # Login and cookies
        cookie_path_dir = "./cookies"
        sign = Login(self.email, self.password)
        cookies = sign.login(cookie_dir_path=cookie_path_dir, save_cookies=True)
        return cookies.get_dict()

    def run_chat_session(self, cookies):
        # Create the ChatBot instance
        chatbot = hugchat.ChatBot(cookies=cookies)

        # Start a new conversation for a fresh start
        chatbot.new_conversation(switch_to=True)

        # Intro message
        print('[[ Welcome to HugChat. Let\'s talk! ]]')
        print('\'q\' or \'quit\' to exit')
        print('\'c\' or \'change\' to change conversation')
        print('\'n\' or \'new\' to start a new conversation')

        while True:
            user_input = input('> ')
            if user_input.lower() == '':
                pass
            elif user_input.lower() in ['q', 'quit']:
                break
            elif user_input.lower() in ['c', 'change']:
                print('Choose a conversation to switch to:')
                print(chatbot.get_conversation_list())  # List conversations 
            elif user_input.lower() in ['n', 'new']:
                print('Clean slate!')
                id = chatbot.new_conversation()  # Create a new conversation
                chatbot.change_conversation(id)  # Switch conversations
            else:
                print("Chatbot: Thinking...")
                try:
                    print(f"type: {type(user_input)}")
                    response = chatbot.chat(user_input)
                    print(f"Chatbot: {response}")
                except Exception as e:
                    print(f"An error occurred: {e}")

    def chatbot(self):
        cookies = self.login()
        cb = hugchat.ChatBot(cookies=cookies)
        return cb

if __name__ == "__main__":
    # If this script is run directly, execute run_chat_session
    chatbot_manager = ChatBotManager()
    chatbot_manager.run_chat_session(chatbot_manager.login())
