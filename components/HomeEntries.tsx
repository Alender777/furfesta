"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./HomeEntries.module.css";

const entries = [
  { href: "/volunteer", title: "volunteer", hint: "volunteerHint" },
  { href: "/venue", title: "venue", hint: "venueHint" },
  { href: "/notes", title: "notes", hint: "notesHint" },
  { href: "/register", title: "register", hint: "registerHint" },
] as const;

export default function HomeEntries() {
  const { t } = useLocale();

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t.home.entriesTitle}</h2>
        <ul className={styles.grid}>
          {entries.map((entry) => (
            <li key={entry.href}>
              <Link href={entry.href} className={styles.card}>
                <span className={styles.cardTitle}>{t.home[entry.title]}</span>
                <span className={styles.cardHint}>{t.home[entry.hint]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
