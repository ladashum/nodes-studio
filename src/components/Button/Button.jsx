import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/**
 * Кнопка студии. Поддерживает два визуальных стиля (primary/secondary),
 * рендерится как внутренняя ссылка (to), внешняя ссылка (href) или обычная кнопка (onClick).
 */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  onClick,
  fullWidth = false,
  className = "",
}) {
  const classes = [styles.button, styles[variant], fullWidth ? styles.fullWidth : "", className]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
