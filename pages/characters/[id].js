import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import CharacterBio from "../../components/CharacterBio/CharacterBio";
const API_URL = process.env.RESTURL_MYAPI

const Character = ({ character }) => {
  // console.log(character)

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

export const getStaticProps = async ({ params }) => {
  const request = await fetch(`${API_URL}/characters/${params.id}`)
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
export const getStaticPaths = async () => {
  const request = await fetch(`${API_URL}/characters/ssg-paths`);
  const data = await request.json();

  const paths = data.map(id => {
    return { params: { id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Character;
