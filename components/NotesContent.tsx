"use client";

import PageBanner from "@/components/PageBanner";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./NotesContent.module.css";

function RuleText({ text }: { text: string }) {
  const [body, ...notes] = text.split("※");

  return (
    <>
      {body}
      {notes.map((note) => (
        <span className={styles.aside} key={note}>
          ※{note}
        </span>
      ))}
    </>
  );
}

export default function NotesContent() {
  const { t } = useLocale();
  const page = t.notesPage;
  const banner = t.pageBanner.notes;

  return (
    <>
      <PageBanner name="notes" title={banner.title} subtitle={banner.subtitle} />
      <section className={styles.section}>
        <div className={`container ${styles.wrap}`}>
          <h2>{page.title}</h2>
          <ul className={styles.leads}>
            {page.leads.map((lead) => (
              <li key={lead}>
                <span className={styles.mark} aria-hidden="true">
                  ※
                </span>
                {lead}
              </li>
            ))}
          </ul>
          <ol className={styles.rules}>
            {page.rules.map((rule, index) => (
              <li key={rule}>
                <span className={styles.index}>{index + 1}.</span>
                <p>
                  <RuleText text={rule} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
