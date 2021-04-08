import CharacterCard from "../../components/CharacterCard";

const CharacterList = ({ characters }) => {
  console.log(characters);

  const makeCharacterList = () => {
    const getId = (url) => {
      const splitUrl = url.split("/");
      const id = splitUrl[splitUrl.length - 2];
      return id;
    };

    return characters.map(c => {
      const id = getId(c.url)
      const characterData = {...c, id}
      return (
        <li key={Math.random()}>
          <CharacterCard character={characterData}/>
        </li>
      );
    });
  };

  return (
    <>
      <h1>CharacterList</h1>
      <ul>{makeCharacterList()}</ul>
    </>
  );
};

export const getServerSideProps = async () => {
  // will load up a page of movies, can append more with 'load more'
  // search field will make api call and load SW card components with information/cancel previously typed letter

  const request = await fetch(`http://localhost:3000/api/characters/`);
  const response = await request.json()
  const data = response.data

  return {
    props: { characters: data },
  };
};

export default CharacterList;
