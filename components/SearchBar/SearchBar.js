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

  useEffect(async () => {
    const lastSearched = await JSON.parse(localStorage.getItem("swapi-search"));
    if (lastSearched?.length) handleChange(lastSearched);
  }, [])
  
  const handleChange = async (query) => {
    setInputString(query);
    setState({ loading: true, message: '', results: [] });
    localStorage.setItem("swapi-search", JSON.stringify(query));

    if (query !== "") {
      const result = await fetchLiveSearch(query, "")
      setState(result)
    }
  };

  // const fetchLiveSearch = async (query, updatedPageNo = "") => {
  //   const pageNo = updatedPageNo ? updatedPageNo : "";
  //   const apiEndpoint = `https://swapi.py4e.com/api/people/?search=${query}&page=${pageNo}`;

  //   try {
  //     const response = await fetch(apiEndpoint);
  //     const data = await response.json();
  //     const results = data.results;

  //     if (results) {
  //       setState({
  //         results,
  //         message: !results.length ? `No matching results for "${query}"` : "",
  //         loading: false,
  //       });
  //     }

  //   } catch (error) {
  //     setState({
  //       loading: false,
  //       message:
  //         "Failed to fetch results. Please check network. Error: " + error,
  //     });
  //   }
  // };

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