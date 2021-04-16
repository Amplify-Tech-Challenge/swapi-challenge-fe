import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";

const Bio = styled.article`
  color: white;
  max-height: 100%;
  margin-top: 2em;
`;
const Main = styled.main`
  display: flex;
`;
const CharacterDetails = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  flex: 1.5;
  width: clamp(140px, 40vw, 80em);
  // min-width: fit-content;
`;
const DetailBlock = styled.div`
  display: flex;
  border: solid 0.1px whitesmoke;
  border-radius: 6px;
  padding: 1.3em;
  justify-content: space-around;
  min-width: 350px;
  flex-flow: wrap;
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
    font-size: clamp(17px, 1.4vw, 1.6em);
  }
  p {
    font-style: italic;
    line-height: 1;
    font-size: clamp(13px, 1vw, 1.3em);
  }
`;
const ListItem = styled.li`
  font-style: italic;
  font-size: clamp(13px, 1vw, 1.3em);
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
  margin-top: 8vh;
`;

const Image = styled.img`
  // height: clamp(50px, 60vh, 73em);
  height: 85vh;
  border-radius: 5pc;
  border: solid 2px white;
`;

// const ImgTitle = styled.h1`
//   font-weight: bolder;
//   color: #fff;
// `;
const NameWrapper = styled.div`
  padding-right: 2vw;
  margin-bottom: 1em;
  h2 {
    // text-align: right;
    line-height: 1;
    margin: 0;
    font-size: clamp(35px, 3vw, 3em);
  }
`;
const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
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
    font-size: clamp(20px, 3.4vw, 4em);
    font-weight: bolder;
    padding-right: 1rem;
  }
  p:nth-child(2) {
    font-size: clamp(15px, 2vw, 3em);
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

  const router = useRouter();
  const mapStarships = () => {
    return starships.map(s => {
      return <ListItem key={s.name}>{s.name}</ListItem>;
    });
  };
  const mapVehicles = () => {
    return vehicles.map(v => {
      return <ListItem key={v.name}>{v.name}</ListItem>;
    });
  };
  const mapFilms = () => {
    return films.map(f => {
      return <ListItem key={f.title}>{f.title}</ListItem>;
    });
  };

  return (
    <Bio>
      <ArrowContainer onClick={() => router.back()}>
        <Arrow>
          <p>&#10094;</p>
          <p>back</p>
        </Arrow>
      </ArrowContainer>

      {/* <NameWrapper>
        <ImgTitle>{name}</ImgTitle>
      </NameWrapper> */}

      <Main>
        <ImgContainer>
          <Image src={image} alt={name} />
        </ImgContainer>
        <CharacterDetails>
          {/* <h2>Biological Details</h2> */}
          <NameWrapper>
            <h2>{name}</h2>
          </NameWrapper>
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
            <Detail>
              <h3>Starships</h3>
              <ul>{mapStarships()}</ul>
            </Detail>
            <Detail>
              <h3>Vehicles</h3>
              <ul>{mapVehicles()}</ul>
            </Detail>
            <Detail>
              <h3>Films</h3>
              <ul>{mapFilms()}</ul>
            </Detail>
          </DetailBlock>
        </CharacterDetails>
      </Main>
    </Bio>
  );
};

export default CharacterBio;
