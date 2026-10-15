"use client";

import Section from "@/components/Section";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./AboutContent.module.css";

function CommaLines({ text }: { text: string }) {
  const pieces = text.split("，");
  if (pieces.length === 1) return text;

  return pieces.map((piece, index) => (
    <span className={styles.line} key={`${piece}-${index}`}>
      {piece}
      {index < pieces.length - 1 ? "，" : ""}
    </span>
  ));
}

export default function AboutContent() {
  const { t } = useLocale();
  const [lead, ...rest] = t.about.paragraphs;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>{t.about.pageTitle}</h1>
          <p>
            <CommaLines text={lead} />
          </p>
        </div>
      </div>

      <Section>
        <div className="prose prose-center">
          {rest.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>
              <CommaLines text={paragraph} />
            </p>
          ))}
        </div>
      </Section>
    </>
  );
}
