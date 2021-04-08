import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Character = ({ character }) => {
  const router = useRouter();
  const { id } = router.query;

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
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <main>
        <h4>Character Profile</h4>
        <h1>{name}</h1>
        {gender !== "n/a" && <p>{gender}</p>}
        <p>Born: {birth_year}</p>
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
export const getServerSideProps = async ({ params }) => {
  const request = await fetch(`https://swapi.dev/api/people/${params.id}`);
  const data = await request.json();
  
  if (!data) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: { character: data },
  };
}
// export const getStaticProps = async ({ params }) => {
//   const request = await fetch(`https://swapi.dev/api/people/${params.id}`);
//   const data = await request.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { character: data },
//   };
// };

// export const getStaticPaths = async (next = 1) => {
//   const request = await fetch(`https://swapi.dev/api/people/?page=1`);
//   const data = await request.json();
//   const results = data.results;

//   const paths = results.map(char => {
//     const splitUrl = char.url.split("/");
//     const id = splitUrl[splitUrl.length - 2];
//     return { params: { id: id } };
//   });

//   console.log(paths);

//   return {
//     paths,
//     // TODO add fallback for error handling
//     fallback: false,
//   };
// };

export default Character;
