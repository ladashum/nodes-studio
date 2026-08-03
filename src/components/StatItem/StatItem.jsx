import styles from "./StatItem.module.css";

export default function StatItem({ value, label }) {
  return (
    <div className={styles.stat}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
