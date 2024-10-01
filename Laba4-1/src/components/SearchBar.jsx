import React from 'react';

function SearchBar({ searchValue, onSearchChange }) {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={onSearchChange}
      placeholder="Search tasks"
      className="input-field search-field"
    />
  );
}

export default SearchBar;
