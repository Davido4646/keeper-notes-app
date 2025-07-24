# 📝 Keeper Notes App

A modern, responsive note-taking web app built with **React (Vite)**, featuring:

- 🌓 Dark Mode toggle (with persistence)
- 🧠 Add/Delete Notes
- 📌 Pin/Unpin Notes
- 🔎 Real-time Search Filtering
- 💾 LocalStorage support
- ⚡ Framer Motion animations
- 📱 Fully Responsive UI
- ✏️ Edit feature (WIP)

---

## 🚀 Live Demo

👉 [Visit Live Site](https://your-deployed-link.com)  
*(Replace with your actual Vercel or Netlify URL)*

---

## 🛠️ Tech Stack

- **React (Vite)**
- **CSS / Custom Styling**
- **Framer Motion** for animations
- **LocalStorage** for data persistence
- **Responsive Design**

---

## 📂 Features

### ✅ Add Notes
- Enter a title and content to create a new note.
- Notes appear instantly on top.

### ✅ Delete Notes
- Click the 🗑 button to remove a note.

### ✅ Pin/Unpin Notes
- Keep important notes at the top by pinning them.
- Pinned notes are sorted above others.

### ✅ Dark Mode
- Toggle between light and dark themes.
- Stored using `localStorage`.

### ✅ Search Notes
- Real-time search filtering by title or content.

### ✅ Animations
- Smooth animations for note entry/exit using `framer-motion`.

### 🧪 Edit Notes (Coming Soon)
- Edit existing notes inline.

---

## 📁 File Structure

src/
├── components/
│ ├── App.jsx
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Note.jsx
│ ├── NoteForm.jsx
│ ├── SearchBar.jsx
│ └── DarkModeToggle.jsx
├── assets/
│ └── styles.css
├── notes.js # default demo notes
├── main.jsx
└── index.html


---

## 🧠 How It Works

- Notes are stored in a `useState` array and synced to `localStorage`.
- On reload, notes load from localStorage or from a predefined `notes.js` file.
- Notes are sorted by:
  - Pinned status (first)
  - Then by most recent (`createdAt`)
- Dark mode is saved and retrieved from `localStorage`.
- The app is animated using `framer-motion`.

---

## 🔧 Getting Started

### 1. Clone the repo

```bash

git clone https://github.com/your-username/keeper-notes-app.git

cd keeper-notes-app

npm install (To install all dependencies)

npm run dev (To run the app)

npm run build (To build for production)

🌐 Deployment
This project can be deployed to:

Vercel

Netlify

No config needed — just import from GitHub and deploy!

📌 Todo
 Dark mode with persistence

 LocalStorage for notes

 Note search

 Note pinning

 Edit note feature

 User authentication (future)

 Firebase/Backend sync (optional)

💻 Screenshots
public/keeper-snapshot.png

📄 License
MIT License. Free to use and modify.

👨‍💻 Author
Built with ❤️ by David Kunnuji
