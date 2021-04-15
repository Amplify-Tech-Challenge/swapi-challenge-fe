import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {fetchLiveSearch} from '../../utils/apiCalls'

const SearchContainer = styled.div`
  background: red;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 3em;
  font-size: 2em;
  padding: 1em;
`;

const SearchBar = ({getResults}) => {
  const [inputString, setInputString] = useState("");
  const [state, setState] = useState({results:[]});

  useEffect(() => {
    getResults(state)
  }, [() => setInputString()])
  
  const handleChange = async (query) => {
    setInputString(query);
    setState({ loading: true, message: '', results: [] });

    if (query !== "") {
      const result = await fetchLiveSearch(query, "")
      setState(result)
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search characters by name"
        aria-label="Character Search Bar"
        name="input"
        value={inputString}
        onChange={event => handleChange(event.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;