import { useRouter } from "next/router";

const Character = ({ character }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(character);

  return (
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <main>
        <h1>Character Profile</h1>
        <p>Height: </p>
        <p>Weight: </p>
        <p>Hair color: </p>
        <p>Species: </p>

        <p>Appears in: </p>
        <p>Has flown: </p>
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
export const getStaticPaths = () => {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
}

export default Character;
