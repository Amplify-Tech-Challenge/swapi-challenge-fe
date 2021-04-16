import React, { useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "../../styles/Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import styled from "styled-components";
const API_IMG = process.env.RESTURL_IMAGEAPI

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background: gray;
  min-height: 100vh;
  height: 100%;
  background-image: url("${API_IMG}/bg.jpg");
  background-size: cover;
  backdrop-filter: blur(12px);
`;
const Results = styled.ul`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  justify-content: center !important;
`;
const Title = styled.span`
  margin: 2em 0;
`;

const CharacterList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [previousResults, setPreviousResults] = useState([]);
  const [noResults, setNoResults] = useState(null);
  const [newSearch, setNewSearch] = useState(false)

  const parseResults = resultObject => {
    setSearchResults(resultObject.results);
    resultObject.message ? setNoResults(resultObject.message) : setNoResults(null);
    if (resultObject.query !== "") setNewSearch(true)
  };

  const loadPreviousSearch = (data) => {
    setPreviousResults(data)
  }

  const makeCharacterList = () => {
    const buildList = (results) => results.map(c => {
      const id = c.id;
      const characterData = { ...c, id };
      return (
        <li
          onClick={localStorage.setItem("swapi-search", JSON.stringify(searchResults))}
          key={Math.random()}>
          <CharacterCard character={characterData} />
        </li>
      );
    });
    if (searchResults?.length) {
      return buildList(searchResults)
    } else if (!newSearch && previousResults.length) {
      return buildList(previousResults)
    }
  };

  const showSearchState = () => {
    if (noResults) {
      return <h1 className={styles.title}>{noResults}</h1>;
    } else if (previousResults.length && !searchResults.length && !newSearch) {
      return <h1 className={styles.title}>Previous Results</h1>;
    } else if (!searchResults.length) {
      return <h1 className={styles.title}>Search by name above</h1>;
    } else if (searchResults.length) {
      return <h1 className={styles.title}>Results</h1>;
    }
  };

  return (
    <Main>
      <SearchBar loadPreviousSearch={loadPreviousSearch} getResults={parseResults} />
      <Title>{showSearchState()}</Title>
      <Results>{makeCharacterList()}</Results>
    </Main>
  );
};

export default CharacterList;
