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
    image
  } = character;

  console.log(image)
  
  return (
    <section>
      <h4>Character Profile</h4>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      {gender !== "n/a" && <p>{gender}</p>}
      <p>Born: {birth_year}</p>
      <p>Height: {height} cm</p>
      <p>Weight: {mass} kg</p>
      <p>Hair: {hair_color}</p>
      <p>Skin: {skin_color}</p>
      <p>Eyes: {eye_color}</p>
      <p>Species: {species[0]?.name}</p>
      <p>Homeworld: {homeworld.name}</p>

      <p>Appears in: 1st {films[0]?.title}</p>
      <p>Starships: {starships[0]?.name}</p>
      <p>Vehicles: {vehicles[0]?.name}</p>
    </section>
  );
}
 
export default CharacterBio;



