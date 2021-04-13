import styles from "../../styles/Home.module.css";

const CharacterBio = ({ character }) => {
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
    image,
  } = character;

  console.log(image);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Character Profile</h1>
      <h1 className={styles.title}>{name}</h1>
      <img src={image} alt={name} />
      <main className={styles.main}>
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
      </main>
    </div>
  );
};

export default CharacterBio;
