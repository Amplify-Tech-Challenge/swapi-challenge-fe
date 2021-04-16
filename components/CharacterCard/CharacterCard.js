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
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: #fff;
  text-decoration: none;
  border: 3px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.3s ease, border-color 0.3s ease, transform .3s ease;
  cursor: pointer;
    &:focus, &:hover, &:active {
      color: #0070f3;
      border-color: #0070f3;
      transform: translateY(-.3em);
    }
}
`;

const Image = styled.img`
  opacity: 0.5;
  height: 100%;
  // height: 50vh;
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
        <h3>{character.name}</h3>
        <Image src={character.image} alt={`a photo of ${character.name}`} />
      </Card>
    </Link>
  );
};

export default CharacterCard;
