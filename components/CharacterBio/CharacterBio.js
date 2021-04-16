import styled, { keyframes } from "styled-components";

const Bio = styled.article`
  color: white;
  max-height: 100%;
  // padding: 0 4.5vw;
  display: flex;
  align-items: center;
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
  padding: 0 1em;
  &:p {
    font-weight: bold
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

  return (
    <Bio>
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
            <p>Species</p>
            <p>{species[0]?.name}</p>
          </Detail>
          <Detail>
            <p>Born</p>
            <p>{birth_year}</p>
          </Detail>
          <Detail>
            <p>Height</p>
            <p>{height} cm</p>
          </Detail>
          <Detail>
            <p>Weight</p>
            <p>{mass} kg</p>
          </Detail>
          <Detail>
            <p>Hair</p>
            <p>{hair_color}</p>
          </Detail>
          <Detail>
            <p>Homeworld</p>
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
