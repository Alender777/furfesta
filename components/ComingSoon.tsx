"use client";

import { useLocale } from "@/contexts/LocaleContext";
import styles from "./ComingSoon.module.css";

type ComingSoonProps = {
  title: string;
};

export default function ComingSoon({ title }: ComingSoonProps) {
  const { t } = useLocale();

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className="eyebrow">{title}</p>
        <h1 className={styles.title}>{t.common.comingSoon}</h1>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.desc}>{t.common.comingSoonDesc}</p>
      </div>
    </div>
  );
}
