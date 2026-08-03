import { NavLink } from "react-router-dom";
import styles from "./NavLinkItem.module.css";

export default function NavLinkItem({ to, children, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ""}`}
    >
      {children}
      <span className={styles.underline} />
    </NavLink>
  );
}
