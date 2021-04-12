import React, { useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState("")

  const handleChange = (searchTerm) => {
    setInput(searchTerm.value)
  }

  return ( 
    <div>
      <input 
        type="text"
        placeholder="Search characters by name"
        aria-label="Character Search Bar"
        name="input"
        value={input}
        onChange={event => handleChange(event.target)}
      />
    </div>
   );
}
 
export default SearchBar;