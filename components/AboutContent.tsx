"use client";

import Section from "@/components/Section";
import { useLocale } from "@/contexts/LocaleContext";

export default function AboutContent() {
  const { t } = useLocale();
  const [lead, ...rest] = t.about.paragraphs;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>{t.about.pageTitle}</h1>
          <p>{lead}</p>
        </div>
      </div>

      <Section>
        <div className="prose prose-center">
          {rest.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
