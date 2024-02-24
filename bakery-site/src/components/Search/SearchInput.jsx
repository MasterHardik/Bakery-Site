import React from 'react';
import './SearchInput.css'

function SearchInput() {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Seach for cakes.." />
    </div>
  );
}

export default SearchInput;
