import Link from "next/link";

const CharacterCard = ({ character }) => {
  return (
    <Link key={character.name} href={`/characters/${character.id}`}>
      <section style={{ cursor: "pointer", border: "solid 1px black" }}>
        <h1>{character.name}</h1>
      </section>
    </Link>
  );
};

export default CharacterCard;
