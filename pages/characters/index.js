import React, { useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "../../styles/Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background: gray;
  height: 100vh;
  `;
const Results = styled.ul`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  margin: 0;
  padding: 0;
  background: gray;
  list-style-type: none;
  justify-content: center !important;
  `;
const Title = styled.span`
  background: inherit;
`

const CharacterList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [previousSearchResults, setPreviousSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(null);

  const parseResults = resultObject => {
    setPreviousSearchResults(searchResults);
    setSearchResults(resultObject.results);
    resultObject.message
      ? setNoResults(resultObject.message)
      : setNoResults(null);
  };

  const makeCharacterList = () => {
    if (searchResults?.length) {
      return searchResults.map(c => {
        const id = c.id;
        const characterData = { ...c, id };
        return <li key={Math.random()}><CharacterCard character={characterData} /></li>;
      });
    }
  };

  const showSearchState = () => {
    if (noResults) {
      return <h1 className={styles.title}>{noResults}</h1>;
    } else if (previousSearchResults.length && !searchResults.length) {
      return <h1 className={styles.title}>Results</h1>;
    } else if (!previousSearchResults.length && !searchResults.length) {
      return <h1 className={styles.title}>Search by name above</h1>;
    } else {
      return <h1 className={styles.title}>Results</h1>;
    }
  };

  return (
    <Main>
      <SearchBar getResults={parseResults} />
      <Title>{showSearchState()}</Title>
      <Results >     
        {makeCharacterList()}
      </Results>
    </Main>
  );
};

export default CharacterList;
