"use client";

import { Fragment } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./EventContent.module.css";

export default function EventContent() {
  const { t } = useLocale();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.eventPage.title}</p>
          <h1>{t.eventPage.storyTitle}</h1>
        </div>
      </div>

      <section className={styles.story}>
        <div className={`container ${styles.body}`}>
          {t.eventPage.story.map((paragraph) => (
            <p className={styles.paragraph} key={paragraph.slice(0, 24)}>
              {paragraph.split("\n").map((line, index) => (
                <Fragment key={line}>
                  {index > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
