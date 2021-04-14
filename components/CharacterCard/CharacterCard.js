import Link from "next/link";
import styles from "../../styles/Home.module.css";
const API_IMG_URL = process.env.RESTURL_IMAGEAPI

const CharacterCard = ({ character }) => {
  return (
    <Link key={character.name} href={`/characters/${character.id}`}>
      <div className={styles.grid}>
        <a data-testid={`charactercard-${character.id}`} href="" className={styles.card}>
          <h3>{character.name}</h3>
          <img src={`${API_IMG_URL}/${character.id}.jpg`} alt={`a photo of ${character.name}`} />
        </a>
      </div>
    </Link>
  );
};

export default CharacterCard;
