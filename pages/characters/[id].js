import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import CharacterBio from "../../components/CharacterBio";
const API_URL = process.env.RESTURL_MYAPI

const Character = ({ character }) => {
  console.log(character)

  return (
    <>
      <Head>
        <title>Bio | {character.name}</title>
      </Head>
      <main>
        <CharacterBio character={character} />
      </main>
    </>
  );
};

export const getServerSideProps = async ({params}) => {
  // this call to api to construct other proxy calls
  // const request = await fetch(`https://swapi.dev/api/people/${params.id}`);
  const request = await fetch(`${API_URL}/characters/${params.id}`)
  const response = await request.json();
  const data = response.data

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { character: data },
  };
};

export default Character;

// export const getStaticProps = async ({ params }) => {
//   const request = await fetch(`${API_URL}/characters/${params.id}`);
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

// export const getStaticPaths = async () => {
//   const request = await fetch(`${API_URL}/characters/`);
//   const response = await request.json();
//   const results = response.data;

//   const paths = results.map(char => {
//     const splitUrl = char.url.split("/");
//     const id = splitUrl[splitUrl.length - 2];
//     return { params: { id: id } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

