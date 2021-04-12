import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  background: red;
`
const SearchInput = styled.input`
  width: 100%;
  height: 3em;
`

const SearchBar = () => {
  const [input, setInput] = useState("")

  const handleChange = (searchTerm) => {
    setInput(searchTerm)
    console.log(searchTerm)
  }

  return ( 
    <SearchContainer>
      <SearchInput 
        type="text"
        placeholder="Search characters by name"
        aria-label="Character Search Bar"
        name="input"
        value={input}
        onChange={event => handleChange(event.target.value)}
      />
    </SearchContainer>
   );
}
 
export default SearchBar;