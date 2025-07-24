// src/components/DarkModeToggle.jsx
import React from "react";

function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <div className="dark-mode-toggle">
      <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
      <label className="switch">
        <input className="dk-input" type="checkbox" checked={darkMode} onChange={onToggle} />
      </label>
    </div>
  );
}

export default DarkModeToggle;
