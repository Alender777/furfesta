"use client";

import { Fragment } from "react";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";
import { publicAsset } from "@/lib/publicAsset";
import styles from "./VolunteerContent.module.css";

function Lines({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, lineIndex) => (
        <Fragment key={line}>
          {lineIndex > 0 && <br />}
          {line.split(/(\d{2}[：:]\d{2})/g).map((part, partIndex) =>
            /^\d{2}[：:]\d{2}$/.test(part) ? (
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
  const { locale, t } = useLocale();
  const page = t.volunteerPage;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <h1>{page.title}</h1>
            {locale !== "en" ? <p className={styles.kicker}>VOLUNTEER RECRUITMENT</p> : null}
          </div>
          <div className={styles.artWrap}>
            <Image
              src={publicAsset("/images/volunteer-characters.png")}
              alt=""
              width={2200}
              height={1010}
              priority
              className={styles.art}
            />
            <div className={styles.fade} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.body}`}>
          <div className={styles.periodBox}>
            <p className={styles.periodLabel}>{page.periodLabel}</p>
            <p className={styles.periodValue}>
              <a href={page.formUrl} target="_blank" rel="noopener noreferrer">
                {page.formUrl}
              </a>
            </p>
          </div>

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
