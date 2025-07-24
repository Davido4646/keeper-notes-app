// src/components/SearchBar.jsx
import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
