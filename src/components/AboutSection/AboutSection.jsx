import StatItem from "../StatItem/StatItem.jsx";
import statistics from "../../data/statistics.js";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.inner} container`}>
        <div className={styles.text}>
          <h2 className={styles.title}>О студии</h2>
          <p className={styles.body}>
            Nodes — команда разработчиков и дизайнеров, которая уже пять лет создаёт сайты и
            веб-сервисы для стартапов и растущих компаний. Мы работаем на стыке дизайна и
            инженерии: каждый проект проходит путь от исследования и прототипа до чистого,
            поддерживаемого кода.
          </p>
          <p className={styles.body}>
            Используем современный стек — React, TypeScript, Node.js — и уделяем особое внимание
            производительности, доступности и деталям интерфейса.
          </p>
        </div>
        <div className={styles.stats}>
          {statistics.map((stat) => (
            <StatItem key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
