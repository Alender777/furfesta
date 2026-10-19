"use client";

import { Fragment } from "react";
import PageBanner from "@/components/PageBanner";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./EventContent.module.css";

export default function EventContent() {
  const { t } = useLocale();

  return (
    <>
      <PageBanner
        name="event"
        title={t.pageBanner.event.title}
        subtitle={t.pageBanner.event.subtitle}
      />

      <section className={styles.story}>
        <div className={`container ${styles.body}`}>
          <h2 className={styles.storyTitle}>{t.eventPage.storyTitle}</h2>
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
