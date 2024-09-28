import React from 'react';

function SearchBar({ searchValue, onSearchChange }) {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search tasks"
      className="input-field search-field"
    />
  );
}

export default SearchBar;
