import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span className={styles.brand}>Nodes © {year}</span>
        <span className={styles.contact}>hello@nodes.studio · +7 (999) 123-45-67</span>
      </div>
    </footer>
  );
}
