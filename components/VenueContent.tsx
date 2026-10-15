"use client";

import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";
import type { Locale } from "@/lib/i18n";
import { publicAsset } from "@/lib/publicAsset";
import styles from "./VenueContent.module.css";

const PLACE_QUERY = "台北市南港區南港路二段13號 瓶蓋工廠台北製造所";

function mapLanguage(locale: Locale) {
  if (locale === "zh-TW") return "zh-TW";
  if (locale === "ja") return "ja";
  if (locale === "ko") return "ko";
  return "en";
}

export default function VenueContent() {
  const { t, locale } = useLocale();
  const page = t.venuePage;
  const mapQuery = encodeURIComponent(PLACE_QUERY);
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&hl=${mapLanguage(locale)}&z=16&output=embed`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">{page.label}</p>
          <h1>{page.title}</h1>
          <p>{page.subtitle}</p>
        </div>
      </div>
      <section className={styles.section}>
        <div className={`container ${styles.wrap}`}>
          <div className={styles.card}>
            <p className={styles.label}>{page.label}</p>
            <p className={styles.name}>{page.name}</p>
            <p className={styles.halls}>{page.halls}</p>
            <p className={styles.address}>
              <span>{page.addressLabel}</span>
              {page.address}
            </p>
          </div>

          <div className={styles.transit}>
            <h2>{page.transitTitle}</h2>
            <p>{page.transit}</p>
          </div>

          <figure className={styles.mapBlock}>
            <Image
              src={publicAsset("/images/venue-map-zh.jpg")}
              alt={page.mapAlt}
              width={956}
              height={673}
              className={styles.mapImage}
            />
          </figure>

          <div className={styles.google}>
            <h2>{page.googleMapTitle}</h2>
            <div className={styles.frame}>
              <iframe
                title={page.googleMapTitle}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a href={mapHref} target="_blank" rel="noopener noreferrer">
              {page.openMap}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
