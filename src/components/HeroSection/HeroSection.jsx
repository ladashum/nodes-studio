import { motion } from "motion/react";
import Button from "../Button/Button.jsx";
import styles from "./HeroSection.module.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <motion.section
      className={styles.hero}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className={`container ${styles.inner}`}>
        <motion.span variants={item} className={styles.kicker}>
          Веб-студия полного цикла
        </motion.span>
        <motion.h1 variants={item} className={styles.title}>
          Мы создаём цифровые продукты, которым доверяют
        </motion.h1>
        <motion.p variants={item} className={styles.subtitle}>
          Проектируем интерфейсы, разрабатываем сайты и веб-приложения — от идеи до запуска в
          продакшн.
        </motion.p>
        <motion.div variants={item} className={styles.actions}>
          <Button variant="primary" to="/contacts">
            Обсудить проект
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            О студии
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
