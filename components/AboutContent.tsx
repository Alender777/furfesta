"use client";

import PageBanner from "@/components/PageBanner";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./AboutContent.module.css";

function PunctuationLines({ text }: { text: string }) {
  const pieces = text.match(/[^，。、！？；：]+[，。、！？；：]?/g);
  if (!pieces || pieces.length <= 1) return text;

  return pieces.map((piece, index) => (
    <span className={styles.line} key={`${index}-${piece}`}>
      {piece}
    </span>
  ));
}

export default function AboutContent() {
  const { t } = useLocale();
  const banner = t.pageBanner.about;

  return (
    <>
      <PageBanner name="about" title={banner.title} subtitle={banner.subtitle} />
      <section className={styles.section}>
        <div className={styles.copy}>
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>
              <PunctuationLines text={paragraph} />
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
