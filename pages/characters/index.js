import React, { useState, useEffect } from 'react';
import CharacterCard from "../../components/CharacterCard";
const API_URL = process.env.RESTURL_MYAPI;
import styles from "../../styles/Home.module.css";
import SearchBar from "../../components/SearchBar";

const CharacterList = ({ characters }) => {
  const [searchResults, setSearchResults] = useState([])
  const [noResults, setNoResults] = useState(null)


  const parseResults = (resultObject) => {
    setSearchResults(resultObject.results)
    resultObject.message ? setNoResults(resultObject.message) : setNoResults(null)
  }

  const makeCharacterList = () => {
    const getId = url => {
      const splitUrl = url.split("/");
      const id = splitUrl[splitUrl.length - 2];
      return id;
    };

    if (searchResults.length) {
      return searchResults.map(c => {
        const id = getId(c.url);
        const characterData = { ...c, id };
        return <CharacterCard key={Math.random()} character={characterData} />;
      });
    }
  };

  return (
    <>
      <SearchBar getResults={parseResults}/>
      <div className={styles.container}>
        <h1 className={styles.title}>{searchResults.length ? 'Results' : noResults ? noResults : "Search by name above"}</h1>
        {makeCharacterList()}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  // will load up a page of movies, can append more with 'load more'
  // search field will make api call and load SW card components with information/cancel previously typed letter

  const request = await fetch(`${API_URL}/characters/`);
  const data = await request.json();

  return {
    props: { characters: data },
  };
};

export default CharacterList;
