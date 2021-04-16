import Head from "next/head";
import CharacterBio from "../../components/CharacterBio/CharacterBio";
import styled, { keyframes } from "styled-components";
const API_URL = process.env.RESTURL_MYAPI;
const API_IMG = process.env.RESTURL_IMAGEAPI;

const Kenburns = keyframes`
  0% {
    -webkit-transform: scale(1) translate(0, 0);
    transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 84%;
    transform-origin: 16% 84%;
  }
  100% {
    -webkit-transform: scale(1.1) translate(-20px, 15px);
    transform: scale(1.1) translate(-20px, 15px);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
  }
`;

const Fade = keyframes`
  from {
    opacity: .3;
  }
  to {
    opacity: 1;
  }
`;

const Blur = keyframes`
  from {
    filter: blur(15px);
  }
  to {
    filter: blur(0px);
  }
`;

const PageWrapper = styled.div`
  display: flex;
  height: max-content;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: black;
`;
const BgWrapper = styled.div`
  overflow: hidden;
  width: -webkit-fill-available;
  animation: ${Blur} 2s ease;
  min-height: 100vh;
  height: 100%;
`;
const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  background-size: 100%;
  animation: ${Kenburns} 10s ease-out both;
  background-image: url("${API_IMG}/biobg.jpg");
  filter: blur(3px);
  -webkit-filter: blur(3px);
`;

const Gradient = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  width: -webkit-fill-available;
  height: fit-content;
  background-image: linear-gradient(
    to left,
    rgba(7, 0, 84, 0.289),
    rgba(255, 111, 0, 0.211)
  );
`;
const Content = styled.section`
  animation: ${Fade} 5s ease;
  width: 100%;
  padding: 0vh 8vw;
  align-self: center;
  min-height: 100vh;
  height: 100%;
`;

const Character = ({ character }) => {
  return (
    <PageWrapper>
      <Head>
        <title>Bio | {character.name}</title>
      </Head>
      <BgWrapper>
        <Background />
      </BgWrapper>
      <Gradient>
        <Content>
          <CharacterBio character={character} />
        </Content>
      </Gradient>
    </PageWrapper>
  );
};

export const getStaticProps = async ({ params }) => {
  const request = await fetch(`${API_URL}/characters/${params.id}`);
  const data = await request.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { character: data },
  };
};
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
