import Button from "../components/Button/Button.jsx";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={`${styles.notFound} container`}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Страница не найдена</h1>
      <p className={styles.body}>
        Такой страницы не существует — возможно, ссылка устарела или в адресе опечатка.
      </p>
      <Button variant="primary" to="/">
        Вернуться на главную
      </Button>
    </section>
  );
}
