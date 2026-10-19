"use client";

import { useLocale } from "@/contexts/LocaleContext";
import styles from "./ComingSoon.module.css";

type ComingSoonProps = {
  title: string;
  embedded?: boolean;
};

export default function ComingSoon({ title, embedded = false }: ComingSoonProps) {
  const { t } = useLocale();

  return (
    <div className={embedded ? styles.embedded : styles.page}>
      <div className={styles.inner}>
        {!embedded && <p className="eyebrow">{title}</p>}
        <h1 className={styles.title}>{t.common.comingSoon}</h1>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.desc}>{t.common.comingSoonDesc}</p>
      </div>
    </div>
  );
}
