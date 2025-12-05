Realtime Chat • Firebase • React • Works on Mobile + Desktop

This project is a personal private chat application built using React + Firebase Firestore.
Only two people can access this chat by logging in with a shared secret key, making it a secure and private conversation room — similar to Telegram style UI, responsive on both phone and desktop.

🚀 Features
Feature	Status
🔐 Private chat with shared key login	✔
🔥 Realtime messages using Firestore	✔
💬 Clean UI with chat bubbles	✔
📱 Responsive for Android + Desktop	✔
⏳ Auto scroll to latest message	✔
❌ No third-user access	✔
🛠 Tech Stack
Technology	Purpose
React (Vite)	UI Application
Firebase Firestore	Realtime chat database
JavaScript ES6	Logic implementation
CSS inline styles	UI Design
Vercel	Hosting (recommended)
📂 Project Structure
📁 my-chat-app
 ├─ src/
 │  ├─ firebase.js        # Firebase config + Firestore init
 │  ├─ App.jsx            # App login + session control
 │  ├─ Login.jsx          # Secret key + username input
 │  └─ Chat.jsx           # Main realtime chat UI
 ├─ index.css
 ├─ package.json
 └─ vite.config.js
