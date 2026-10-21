"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { getEventBrand } from "@/lib/i18n";
import { publicAsset } from "@/lib/publicAsset";
import { siteData } from "@/data/site";
import SocialIconLink from "@/components/SocialIconLink";
import socialStyles from "@/components/SocialIconLink.module.css";
import { EmailIcon, PlurkIcon } from "@/components/icons/SocialIcons";
import { navItems, type NavKey } from "@/lib/nav";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLocale();

  const brand = getEventBrand(t);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
          <Link href="/" className={styles.brand} prefetch={false}>
            <Image
              src={publicAsset("/images/logo-lockup-footer.jpg")}
              alt={brand}
              width={360}
              height={428}
              className={styles.logo}
            />
          </Link>

          <p className={styles.tagline}>{t.event.tagline}</p>

          <nav className={styles.links}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link} prefetch={false}>
                {t.nav[item.key as NavKey]}
              </Link>
            ))}
          </nav>

          <div className={styles.social}>
            <SocialIconLink
              href={siteData.contact.plurk}
              label={t.footer.plurkAria}
              variant="footer"
              iconClassName={socialStyles.footerPlurk}
            >
              <PlurkIcon size={22} />
            </SocialIconLink>
            <SocialIconLink
              href={`mailto:${siteData.contact.email}`}
              label={t.footer.emailAria}
              variant="footer"
              iconClassName={socialStyles.footerEmail}
            >
              <EmailIcon size={22} />
            </SocialIconLink>
          </div>
        <p className={styles.copyright}>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
