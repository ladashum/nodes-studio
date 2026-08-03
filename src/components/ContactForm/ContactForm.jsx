import { useState } from "react";
import Button from "../Button/Button.jsx";
import styles from "./ContactForm.module.css";

const SUBJECT_OPTIONS = [
  "Разработка сайта",
  "Веб-приложение",
  "Поддержка и доработка",
  "Другое",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Укажите, как к вам обращаться";
  }

  if (!values.email.trim()) {
    errors.email = "Электронная почта обязательна";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Проверьте формат почты, например name@example.com";
  }

  if (!values.subject) {
    errors.subject = "Выберите тему обращения";
  }

  if (!values.message.trim()) {
    errors.message = "Расскажите о задаче в сообщении";
  } else if (values.message.trim().length < 10) {
    errors.message = "Сообщение должно содержать не менее 10 символов";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return (event) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      if (submitted) setSubmitted(false);
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  }

  const fieldClass = (field) => `${styles.input} ${errors[field] ? styles.inputError : ""}`;

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Имя
        </label>
        <input
          id="name"
          type="text"
          className={fieldClass("name")}
          placeholder="Как к вам обращаться"
          value={values.name}
          onChange={handleChange("name")}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Электронная почта
        </label>
        <input
          id="email"
          type="email"
          className={fieldClass("email")}
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange("email")}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="subject">
          Тема обращения
        </label>
        <select
          id="subject"
          className={fieldClass("subject")}
          value={values.subject}
          onChange={handleChange("subject")}
        >
          <option value="" disabled>
            Выберите тему
          </option>
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.subject && <span className={styles.error}>{errors.subject}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Сообщение
        </label>
        <textarea
          id="message"
          rows={5}
          className={fieldClass("message")}
          placeholder="Расскажите подробнее о задаче (минимум 10 символов)"
          value={values.message}
          onChange={handleChange("message")}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <Button type="submit" variant="primary" fullWidth>
        Отправить сообщение
      </Button>

      {submitted && (
        <p className={styles.success} role="status">
          ✓ Сообщение отправлено — мы скоро свяжемся с вами
        </p>
      )}
    </form>
  );
}
