
import streamlit as st
from datetime import datetime

# Constants
USER_CREDENTIALS = {"admin": "password", "user1": "pass123", "user2": "pass456"}

class AuthManager:
    """Handles user authentication."""
    def __init__(self):
        if "authenticated" not in st.session_state:
            st.session_state.authenticated = False
            st.session_state.username = None

    def login(self, username, password):
        if username in USER_CREDENTIALS and USER_CREDENTIALS[username] == password:
            st.session_state.authenticated = True
            st.session_state.username = username
            st.session_state.current_page = "Home"
            if username not in st.session_state:
                st.session_state[username] = {"chat_sessions": {}}
            if "current_session" not in st.session_state:
                st.session_state.current_session = None
            st.rerun()
        else:
            st.error("Invalid Username or Password")
    
    def logout(self):
        st.session_state.authenticated = False
        st.session_state.username = None
        st.session_state.current_session = None
        st.session_state.current_page = "Login"
        st.rerun()

class Navbar:
    """Handles the top navigation menu within a navigation bar."""
    def display(self, auth_manager):
        st.markdown("""
        <style>
            .navbar {
                background-color: #2c3e50;
                padding: 10px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
            }
        </style>
        """, unsafe_allow_html=True)

        nav_options = ["Home", "Chatbot", "Upload", "Logout"]
        selected_page = st.selectbox("Navigation", nav_options, index=nav_options.index(st.session_state.get("current_page", "Home")))

        if selected_page != st.session_state.get("current_page"):
            if selected_page == "Logout":
                auth_manager.logout()
            else:
                st.session_state.current_page = selected_page
                st.rerun()

class Sidebar:
    """Handles chat history in the sidebar."""
    def display(self):
        username = st.session_state.username
        if not username:
            return
        
        st.sidebar.title("Chat History")
        today = datetime.today().strftime('%Y-%m-%d')
        
        user_sessions = st.session_state[username]["chat_sessions"]
        if today not in user_sessions:
            user_sessions[today] = {}
        
        if "current_session" not in st.session_state or st.session_state.current_session is None:
            st.session_state.current_session = None

        if st.sidebar.button("New Chat"):
            new_chat_title = f"Chat {len(user_sessions[today]) + 1}"
            user_sessions[today][new_chat_title] = []
            st.session_state.current_session = new_chat_title
            st.session_state.input_key = st.session_state.get("input_key", 0) + 1
            st.rerun()
        
        for day in sorted(user_sessions.keys(), reverse=True):
            with st.sidebar.expander(day, expanded=(day == today)):
                for session_id in reversed(list(user_sessions[day].keys())):
                    if st.sidebar.button(session_id):
                        st.session_state.current_session = session_id
                        st.session_state.input_key = st.session_state.get("input_key", 0) + 1
                        st.rerun()

class PageRenderer:
    """Handles different page renderings."""
    @staticmethod
    def login_page(auth_manager):
        st.title("Login to Chatbot")
        username = st.text_input("Username")
        password = st.text_input("Password", type="password")
        if st.button("Login"):
            auth_manager.login(username, password)

    @staticmethod
    def home_page():
        st.title("Welcome to the Home Page!")
        st.write("This is the landing page of the application.")

    @staticmethod
    def chatbot_page():
        st.title("Chatbot")
        username = st.session_state.username
        today = datetime.today().strftime('%Y-%m-%d')
        
        user_sessions = st.session_state[username]["chat_sessions"]
        if st.session_state.current_session is None:
            st.session_state.current_session = "Chat 1"
            if "Chat 1" not in user_sessions[today]:
                user_sessions[today]["Chat 1"] = []
        
        current_chat = user_sessions[today][st.session_state.current_session]
        unique_key = f"user_input_{st.session_state.get('input_key', 0)}"
        user_input = st.text_input("Ask something:", key=unique_key)
        
        if st.button("Send"):
            if user_input.strip():
                response = f"Response to: {user_input}"
                current_chat.append(("info", user_input))
                current_chat.append(("success", response))
                st.session_state.input_key = st.session_state.get("input_key", 0) + 1
                st.rerun()
        
        for msg_type, message in reversed(current_chat):
            if msg_type == "info":
                st.info(message)
            elif msg_type == "success":
                st.success(message)
    
    @staticmethod
    def upload_page():
        st.title("Upload Files")
        uploaded_file = st.file_uploader("Upload a file")
        if uploaded_file:
            st.success(f"File '{uploaded_file.name}' uploaded successfully!")

class ChatbotApp:
    """Main application class."""
    def __init__(self):
        self.auth_manager = AuthManager()
        self.navbar = Navbar()
        self.sidebar = Sidebar()
        self.page_renderer = PageRenderer()
    
    def run(self):
        if not st.session_state.authenticated:
            self.page_renderer.login_page(self.auth_manager)
        else:
            self.navbar.display(self.auth_manager)
            self.sidebar.display()
            
            if st.session_state.current_page == "Upload":
                self.page_renderer.upload_page()
            elif st.session_state.current_page == "Chatbot":
                self.page_renderer.chatbot_page()
            else:
                self.page_renderer.home_page()

if __name__ == "__main__":
    app = ChatbotApp()
    app.run()
