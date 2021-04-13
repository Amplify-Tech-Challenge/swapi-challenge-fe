import Link from "next/link";
import styles from "../styles/Home.module.css";

const CharacterCard = ({ character }) => {
  return (
    <Link key={character.name} href={`/characters/${character.id}`}>
      <div className={styles.grid}>
        <a href="" className={styles.card}>
          <h3>{character.name}</h3>
        </a>
      </div>
    </Link>
  );
};

export default CharacterCard;
