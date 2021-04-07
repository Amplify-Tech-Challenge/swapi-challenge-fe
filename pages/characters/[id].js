import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Character = ({ character }) => {
  const router = useRouter();
  const { id } = router.query;
  
  const {name, birth_year, eye_color, films, gender, hair_color, height, homeworld, mass, skin_color, species, starships, vehicles, url} = character

  console.log(character);

  return (
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <main>
        <h4>Character Profile</h4>
        <h1>{name}</h1>
        <p>Height: {height} cm</p>
        <p>Weight: {mass} kg</p>
        <p>Hair color: {hair_color}</p>
        <p>Eye color: {eye_color}</p>
        <p>Species: LOGIC IN API GATEWAY</p>
        <p>Homeworld: LOGIC IN API GATEWAY</p>

        <p>Appears in: LOGIC IN API GATEWAY</p>
        <p>Starships: LOGIC IN API GATEWAY</p>
        <p>Vehicles: LOGIC IN API GATEWAY</p>
      </main>
    </>
  );
};

// static gen method
export const getStaticProps = async ({ params }) => {
  const request = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await request.json();

  return {
    props: { character: data },
  };
};

// needs to know the ids in advance, or number of routes
export const getStaticPaths = async () => {
  const request = await fetch(`http://localhost:3000/characters.json`);
  const data = await request.json();

  console.log(data);

  const paths = data.map(name => {
    return { params: { id: name } };
  });

  return {
    paths,
    // TODO add fallback for error handling
    fallback: false,
  };
};

export default Character;
