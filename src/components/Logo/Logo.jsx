import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Nodes — на главную">
      <span className={styles.dot} />
      Nodes
    </Link>
  );
}
