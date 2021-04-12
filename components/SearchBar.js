import useSWR from 'swr';
import React, { useState } from 'react';
import styled from 'styled-components';



const SearchContainer = styled.div`
  background: red;
`
const SearchInput = styled.input`
  width: 100%;
  height: 3em;
  font-size: 2em;
  padding: 1em;
`

const SearchBar = () => {
  const [input, setInput] = useState("")

  const handleChange = (searchTerm) => {
    setInput(searchTerm)
    if (searchTerm !== "") findCharacter(searchTerm)
  }

  const findCharacter = async (term) => {
    const apiEndpoint = `https://swapi.py4e.com/api/people/?search=${term}`
    const response = await fetch(apiEndpoint)
    const parsed = await response.json()
    const results = parsed.results
    console.log(results)
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