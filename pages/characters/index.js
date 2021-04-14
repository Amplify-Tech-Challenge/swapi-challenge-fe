import React, { useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "../../styles/Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import styled from "styled-components";
const API_URL = process.env.RESTURL_MYAPI;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background: gray;
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
    console.log('list fire')
    const getId = url => {
      const splitUrl = url.split("/");
      const id = splitUrl[splitUrl.length - 2];
      return id;
    };

    // if (previousSearchResults.length && !searchResults) {
    //   return previousSearchResults.map(c => {
    //     const id = getId(c.url);
    //     const characterData = { ...c, id };
    //     return <CharacterCard key={Math.random()} character={characterData} />;
    //   });
    // } else
    if (searchResults.length) {
      return searchResults.map(c => {
        const id = getId(c.url);
        const characterData = { ...c, id };
        return <li><CharacterCard key={Math.random()} character={characterData} /></li>;
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
