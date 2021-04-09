const CharacterBio = ({character}) => {
  const {
    name,
    birth_year,
    eye_color,
    hair_color,
    height,
    mass,
    films,
    gender,
    homeworld,
    skin_color,
    species,
    starships,
    vehicles,
    url,
  } = character;
  
  return (
    <section>
      <h4>Character Profile</h4>
      <h1>{name}</h1>
      {gender !== "n/a" && <p>{gender}</p>}
      <p>Born: {birth_year}</p>
      <p>Height: {height} cm</p>
      <p>Weight: {mass} kg</p>
      <p>Hair color: {hair_color}</p>
      <p>Eye color: {eye_color}</p>
      <p>Species: LOGIC IN API GATEWAY</p>
      <p>Homeworld: {homeworld.name}</p>

      <p>Appears in: LOGIC IN API GATEWAY</p>
      <p>Starships: LOGIC IN API GATEWAY</p>
      <p>Vehicles: LOGIC IN API GATEWAY</p>
    </section>
  );
}
 
export default CharacterBio;



