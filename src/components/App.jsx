import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import defaultNotes from "../notes";
import NoteForm from "./NoteForm";
import SearchBar from "./SearchBar";
import { useEffect } from "react"; 
import DarkModeToggle from "./DarkModeToggle";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [notes, setNotes] = useState(() => {
  
  const storedNotes = localStorage.getItem("keeper-notes");
    return storedNotes ? JSON.parse(storedNotes) : defaultNotes;
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
  const storedMode = localStorage.getItem("keeper-dark-mode");
  return storedMode ? JSON.parse(storedMode) : false;
});

  // 🔄 Save to localStorage when notes change
  useEffect(() => {
    localStorage.setItem("keeper-notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
  document.body.className = darkMode ? "dark" : "";
  localStorage.setItem("keeper-dark-mode", JSON.stringify(darkMode));
}, [darkMode]);

  function addNote(newNote) {
  const noteWithTimestamp = {
    ...newNote,
    id: Date.now(),
    createdAt: Date.now(), // add timestamp
    pinned: false
  };
  setNotes(prevNotes => [noteWithTimestamp, ...prevNotes]);
}


  function deleteNote(id) {
  setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
}


  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  function togglePin(id) {
  setNotes(prevNotes =>
    prevNotes.map(note =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    )
  );
}

function handleEdit(id, updatedFields) {
  setNotes(prevNotes =>
    prevNotes.map(note =>
      note.id === id ? { ...note, ...updatedFields } : note
    )
  );
}

const filteredNotes = notes
  .slice()
  .filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) => {
    // Pinned first
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    // Then sort by newest
    return b.createdAt - a.createdAt;
  });


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header />
      <div className="above-title">
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /></div>
      <NoteForm onAdd={addNote} />

      <div className="notes-container">
        <AnimatePresence>
          {filteredNotes.map((note, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                pinned={note.pinned}
                onTogglePin={togglePin}
                onDelete={deleteNote}
                onEdit={handleEdit}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
