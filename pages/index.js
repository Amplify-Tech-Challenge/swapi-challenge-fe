import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>An Ample Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>Welcome to Make Love not Star Wars</p>
        </h1>
        <Link href={`/characters/`}>
          <h2 style={{ cursor: "pointer" }}>Characters screen</h2>
        </Link>

        <p className={styles.description}>
          styles.description <code className={styles.code}>styles.code</code>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>h3 styles.card in a grid &rarr;</h3>
            <p>p styles.card</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          styles.footer
        </a>
      </footer>
    </div>
  );
}
