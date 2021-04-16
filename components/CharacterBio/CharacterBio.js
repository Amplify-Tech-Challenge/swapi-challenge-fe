import styled, { keyframes } from "styled-components";
import { useRouter } from 'next/router'

const Bio = styled.article`
  color: white;
  max-height: 100%;
  // padding: 0 4.5vw;
  display: flex;
  align-items: center;
  margin-top: 2em;
`;
const CharacterDetails = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const DetailBlock = styled.div`
  display: flex;
  border: solid 0.1px whitesmoke;
  border-radius: 6px;
  padding: 1.3em;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  h3 {
    font-weight: bold;
    text-decoration: underline;
    line-height: 1;
  }
  p {
    font-style: italic;
    line-height: 1;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 73vh;
  border-radius: 5pc;
  border: solid 2px white;
`;

const ImgTitle = styled.h1`
  font-weight: bolder;
  color: #fff;
`;
const NameWrapper = styled.div`
  position: absolute;
  z-index: 5;
  background-color: black;
`;
const ArrowContainer = styled.div`
  position: absolute;
  top: 1em;
  display: flex;
  width: fit-content;
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;
const Arrow = styled.div`
  margin: 0.5em 0;
  line-height: 0;
  display: flex;
  align-items: center;
  p:nth-child(1) {
    font-size: 3em;
    font-weight: bolder;
    padding-right: 1rem;
  }
  p:nth-child(2) {
    font-size: 2em;
    font-weight: bolder;
  }
`;

const CharacterBio = ({ character }) => {
  const {
    name,
    birth_year,
    hair_color,
    height,
    mass,
    films,
    homeworld,
    species,
    starships,
    vehicles,
    image,
  } = character;

  const router = useRouter()

  return (
    <Bio>
      <ArrowContainer onClick={() => router.back()}>
        <Arrow>
          <p>&#10094;</p>
          <p>back</p>
        </Arrow>
      </ArrowContainer>
      <ImgContainer>
        <NameWrapper>
          <ImgTitle>{name}</ImgTitle>
        </NameWrapper>
        <Image src={image} alt={name} />
      </ImgContainer>
      <CharacterDetails>
        <h2>Biological Details</h2>
        <DetailBlock>
          <Detail>
            <h3>Species</h3>
            <p>{species[0]?.name}</p>
          </Detail>
          <Detail>
            <h3>Born</h3>
            <p>{birth_year}</p>
          </Detail>
          <Detail>
            <h3>Height</h3>
            <p>{height} cm</p>
          </Detail>
          <Detail>
            <h3>Weight</h3>
            <p>{mass} kg</p>
          </Detail>
          <Detail>
            <h3>Hair</h3>
            <p>{hair_color}</p>
          </Detail>
          <Detail>
            <h3>Homeworld</h3>
            <p>{homeworld.name}</p>
          </Detail>
        </DetailBlock>
        <br />
        <h2>Tactical Details</h2>
        <DetailBlock>
          <p>Starships {starships[0]?.name}</p>
          <p>Vehicles {vehicles[0]?.name}</p>
          <p>Appears in 1st {films[0]?.title}</p>
        </DetailBlock>
      </CharacterDetails>
    </Bio>
  );
};

export default CharacterBio;
