"use client";

import { useLocale } from "@/contexts/LocaleContext";
import styles from "./AboutContent.module.css";

export default function AboutContent() {
  const { t } = useLocale();

  return (
    <div className="page-hero">
      <div className="container">
        <p className="eyebrow">About</p>
        <h1>{t.about.pageTitle}</h1>
        <div className={styles.copy}>
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
