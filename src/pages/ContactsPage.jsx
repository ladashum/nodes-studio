import ContactForm from "../components/ContactForm/ContactForm.jsx";
import styles from "./ContactsPage.module.css";

const INFO_ROWS = [
  { label: "Почта", value: "hello@nodes.studio" },
  { label: "Телефон", value: "+7 (999) 123-45-67" },
  { label: "Студия", value: "Москва, Пресненская наб., 6с2" },
];

export default function ContactsPage() {
  return (
    <section className={`${styles.contacts} container`}>
      <div className={styles.info}>
        <span className={styles.kicker}>Свяжитесь с нами</span>
        <h1 className={styles.title}>Расскажите о своей задаче</h1>
        <p className={styles.body}>
          Отвечаем в течение одного рабочего дня. Обсудим цели, сроки и бюджет, предложим формат
          сотрудничества.
        </p>
        <dl className={styles.rows}>
          {INFO_ROWS.map((row) => (
            <div className={styles.row} key={row.label}>
              <dt className={styles.rowLabel}>{row.label.toUpperCase()}</dt>
              <dd className={styles.rowValue}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <ContactForm />
    </section>
  );
}
