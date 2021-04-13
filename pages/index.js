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

        <div className={styles.grid}>
          <a href="/characters/" className={styles.card}>
            <h3>Character Search &rarr;</h3>
            <p>search for characters by name</p>
          </a>
        </div>
      </main>

      <p className={styles.description}>
        styles.description <code className={styles.code}>styles.code</code>
      </p>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          styles.footer
        </a>
      </footer>
    </div>
  );
}
