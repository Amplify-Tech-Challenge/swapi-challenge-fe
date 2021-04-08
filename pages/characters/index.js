const CharacterList = ({characters}) => {
  
  console.log(characters)
  
  const makeCharacterList = () => {
    return characters.map(c => {
      return (
        <li key={Math.random()}>{c.name}</li>
      )
    })
  }
  

  return (
    <>
      <h1>CharacterList</h1>
      <ul>{makeCharacterList()}</ul>
    </>
  );
};

export const getServerSideProps = async () => {
  // will load up a random page of movies, can append more with 'load more'
  // search field will make api call and load SW card components with information
  // clicking through will take to statically loaded pages

  // will be able to sort by characters, planets, vehicles, etc. with fetchQuery params

  // const characters = await fetchQuery('characters')

  const request = await fetch(`http://localhost:3000/api/characters/`);
  const characters = await request.json();

  return {
    props: { characters: characters.data },
  };
};

export default CharacterList;
