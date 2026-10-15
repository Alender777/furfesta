"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./Announcements.module.css";

const announcementHrefs = ["/event", "/circles", "/about", "/contact"];

export default function Announcements() {
  const { t } = useLocale();

  return (
    <section className={styles.section} id="news">
      <div className="container">
        <h2 className={styles.title}>{t.home.announcements}</h2>
        <ul className={styles.list}>
          {t.announcements.map((item, index) => (
            <li key={item.title} className={styles.item}>
              <Link href={announcementHrefs[index]} className={styles.link}>
                <span className={styles.tag}>{item.tag}</span>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.date}>{item.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
