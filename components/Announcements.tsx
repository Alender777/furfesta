"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { showStoryPage } from "@/lib/nav";
import styles from "./Announcements.module.css";

const announcementHrefs = ["/event", "/circles", "/about", "/contact"];

export default function Announcements() {
  const { t } = useLocale();

  return (
    <section className={styles.section} id="news">
      <div className="container">
        <h2 className={styles.title}>{t.home.announcements}</h2>
        <ul className={styles.list}>
          {t.announcements.map((item, index) => {
            const href = announcementHrefs[index];
            const hidden = !showStoryPage && href === "/event";
            const body = (
              <>
                <span className={styles.tag}>{item.tag}</span>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.date}>{item.date}</span>
              </>
            );

            return (
              <li key={item.title} className={styles.item}>
                {hidden ? (
                  <div className={styles.link}>{body}</div>
                ) : (
                  <Link href={href} className={styles.link}>
                    {body}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
