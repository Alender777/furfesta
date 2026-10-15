"use client";

import { Fragment } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./VolunteerContent.module.css";

function Lines({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, lineIndex) => (
        <Fragment key={line}>
          {lineIndex > 0 && <br />}
          {line.split(/(\d{2}：\d{2})/g).map((part, partIndex) =>
            /^\d{2}：\d{2}$/.test(part) ? (
              <span className={styles.time} key={`${lineIndex}-${partIndex}`}>
                {part}
              </span>
            ) : (
              <Fragment key={`${lineIndex}-${partIndex}`}>{part}</Fragment>
            )
          )}
        </Fragment>
      ))}
    </>
  );
}

export default function VolunteerContent() {
  const { t } = useLocale();
  const page = t.volunteerPage;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{page.title}</h1>
          <p className={styles.period}>
            <span className={styles.periodLabel}>{page.periodLabel}</span>
            {page.period ? <span className={styles.periodValue}>{page.period}</span> : null}
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={`container ${styles.body}`}>
          <div className={styles.block}>
            <h2 className={styles.heading}>{page.noticeTitle}</h2>
            <ul className={styles.notices}>
              {page.notices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h2 className={styles.heading}>{page.benefitTitle}</h2>
            <ul className={styles.benefits}>
              {page.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h2 className={styles.heading}>{page.dutyTitle}</h2>
            <p className={styles.intro}>
              <Lines text={page.dutyIntro} />
            </p>
            <div className={styles.shifts}>
              {page.shifts.map((shift) => (
                <article className={styles.shift} key={shift.time}>
                  <h3>
                    <span className={styles.time}>{shift.time}</span>
                  </h3>
                  <p>
                    <Lines text={shift.detail} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
