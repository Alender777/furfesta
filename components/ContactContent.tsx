"use client";

import Link from "next/link";
import Section from "@/components/Section";
import SymmetricGrid from "@/components/SymmetricGrid";
import SocialIconLink from "@/components/SocialIconLink";
import socialStyles from "@/components/SocialIconLink.module.css";
import {
  EmailIcon,
  FacebookIcon,
  PlurkIcon,
} from "@/components/icons/SocialIcons";
import { useLocale } from "@/contexts/LocaleContext";
import { siteData } from "@/data/site";

export default function ContactContent() {
  const { t } = useLocale();
  const { contact } = siteData;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>{t.contact.title}</h1>
          <p>{t.contact.pageSubtitle}</p>
        </div>
      </div>

      <Section>
        <SymmetricGrid columns={3} variant="highlight">
          <div className="contact-card">
            <h3>{t.contact.emailTitle}</h3>
            <p>{t.contact.emailDesc}</p>
            <SocialIconLink
              href={`mailto:${contact.email}`}
              label={t.contact.emailAria}
              variant="contact"
              iconClassName={socialStyles.contactEmail}
            >
              <EmailIcon size={26} />
            </SocialIconLink>
          </div>

          <div className="contact-card">
            <h3>{t.contact.plurkTitle}</h3>
            <p>{t.contact.plurkDesc}</p>
            <SocialIconLink
              href={contact.plurk}
              label={t.contact.plurkAria}
              variant="contact"
              iconClassName={socialStyles.contactPlurk}
            >
              <PlurkIcon size={26} />
            </SocialIconLink>
          </div>

          <div className="contact-card">
            <h3>{t.contact.facebookTitle}</h3>
            <p>{t.contact.facebookDesc}</p>
            <SocialIconLink
              href={contact.facebook}
              label={t.contact.facebookAria}
              variant="contact"
              iconClassName={socialStyles.contactFacebook}
            >
              <FacebookIcon size={26} />
            </SocialIconLink>
          </div>
        </SymmetricGrid>
      </Section>

      <Section alt>
        <div className="contact-more">
          <h2>{t.contact.moreTitle}</h2>
          <p>{t.contact.moreDesc}</p>
          <Link href="/circles" className="btn btn-ghost">
            {t.contact.moreLink}
          </Link>
        </div>
      </Section>
    </>
  );
}
