import React, { useState } from "react";

function NoteForm({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      const newNote = {
        ...note,
        id: crypto.randomUUID(), // generate a unique ID
      };
      onAdd(newNote);
      setNote({ title: "", content: "" });
    }
  }

  return (
    <form className="note-form" onSubmit={submitNote}>
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Take a note..."
        rows="3"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm;
