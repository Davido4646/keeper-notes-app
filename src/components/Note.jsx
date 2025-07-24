import React, { useState } from "react";

function Note({ id, title, content, pinned, onDelete, onTogglePin, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  function handleSave() {
    onEdit(id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  }

  function handleCancel() {
    setEditedTitle(title);
    setEditedContent(content);
    setIsEditing(false);
  }

  return (
    <div className={`note ${pinned ? "pinned" : ""}`}>
      {isEditing ? (
        <> 
         <div className="edit-form"><input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            rows="3"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)} 
          /> </div>
          <div className="note-actions">
            <button onClick={handleSave} className="edit-btn">💾 Save</button>
            <button onClick={handleCancel} className="pin-btn">❌ Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <div className="note-actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">✏️ Edit</button>
            <button onClick={() => onTogglePin(id)} className="pin-btn">
              {pinned ? "📌 Unpin" : "📌 Pin"}
            </button>
            <button onClick={() => onDelete(id)} className="delete-btn">🗑</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
