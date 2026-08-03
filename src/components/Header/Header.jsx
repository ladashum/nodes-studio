import Logo from "../Logo/Logo.jsx";
import NavLinkItem from "../NavLinkItem/NavLinkItem.jsx";
import Button from "../Button/Button.jsx";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <Logo />
        <nav className={styles.nav} aria-label="Основная навигация">
          <NavLinkItem to="/" end>
            Главная
          </NavLinkItem>
          <NavLinkItem to="/contacts">Контакты</NavLinkItem>
        </nav>
        <Button variant="secondary" to="/contacts">
          Написать нам
        </Button>
      </div>
    </header>
  );
}
