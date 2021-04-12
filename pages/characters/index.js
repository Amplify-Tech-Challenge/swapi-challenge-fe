import CharacterCard from "../../components/CharacterCard";
const API_URL = process.env.RESTURL_MYAPI;
import styles from "../../styles/Home.module.css";

const CharacterList = ({ characters }) => {
  console.log(characters);

  const makeCharacterList = () => {
    const getId = url => {
      const splitUrl = url.split("/");
      const id = splitUrl[splitUrl.length - 2];
      return id;
    };

    return characters.map(c => {
      const id = getId(c.url);
      const characterData = { ...c, id };
      return <CharacterCard key={Math.random()} character={characterData} />;
    });
  };

  return (
    <div className={styles.container}>
      <h1>CharacterList</h1>
      {makeCharacterList()}
    </div>
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
