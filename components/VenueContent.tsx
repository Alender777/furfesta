"use client";

import { useLocale } from "@/contexts/LocaleContext";
import styles from "./VenueContent.module.css";

export default function VenueContent() {
  const { t } = useLocale();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.venuePage.label}</p>
          <h1>{t.venuePage.title}</h1>
          <p>{t.venuePage.subtitle}</p>
        </div>
      </div>
      <section className={styles.section}>
        <div className={`container ${styles.card}`}>
          <p className={styles.label}>{t.venuePage.label}</p>
          <p className={styles.name}>{t.venuePage.name}</p>
          <p className={styles.halls}>{t.venuePage.halls}</p>
        </div>
      </section>
    </>
  );
}
