import Link from "next/link";
import styled, { keyframes } from "styled-components";

const Fade = keyframes`
  from {
    background: white;
    transform: translateY(-.3em);
    opacity: 0;
  }
  to {
    transform: translateY(0em);
    opacity: 1;
  }
`;
const FadePic = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .5;
  }
`;

const Card = styled.article`
  animation: ${Fade} 1s ease;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 45%;
  padding: 1.5rem;
  color: #fff;
  text-decoration: none;
  border: 3px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.3s ease, border-color 0.3s ease, transform .3s ease;
  h2 {
    line-height: 1;
    margin-top: 0;
  }
  cursor: pointer;
    &:focus, &:hover, &:active {
      color: gold;
      border-color: gold;
      transform: translateY(-.3em);
    }
}
`;

const Image = styled.img`
  opacity: 0.5;
  // height: 100%;
  height: 65vh;
  border-radius: 5pc;
  animation: ${FadePic} 1.5s ease;
  transition: all .3s ease;
  will-change: opacity;
  ${Card}:focus &,
  ${Card}:hover &,
  ${Card}:active & {
    opacity: 1;
  }
`;

const CharacterCard = ({ character }) => {
  return (
    <Link key={character.id} href={`/characters/${character.id}`}>
      <Card>
        <h2>{character.name}</h2>
        <Image src={character.image} alt={`a photo of ${character.name}`} />
      </Card>
    </Link>
  );
};

export default CharacterCard;
