"use client";

import Countdown from "@/components/Countdown";
import { getEventBrand } from "@/lib/i18n";
import { publicAsset } from "@/lib/publicAsset";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLocale();
  const brand = getEventBrand(t);

  return (
    <section className={styles.hero}>
      <h1 className={styles.srOnly}>{brand}</h1>
      <div className={styles.frame}>
        <picture className={styles.bgPicture}>
          <source media="(max-width: 768px)" srcSet={publicAsset("/images/hero-mobile-bg.webp")} />
          <img
            src={publicAsset("/images/hero-desktop.jpg")}
            alt=""
            width={2400}
            height={838}
            className={styles.art}
            fetchPriority="high"
          />
        </picture>
        <picture className={styles.fgPicture}>
          <source media="(max-width: 768px)" srcSet={publicAsset("/images/hero-mobile-fg.webp")} />
          <img src={publicAsset("/images/pixel.gif")} alt="" className={styles.fg} />
        </picture>
      </div>

      <div className={styles.copy}>
        <p className={styles.date}>{t.event.dateShort}</p>
        <p className={styles.venue}>{t.event.venueShort}</p>
        <Countdown />
      </div>
    </section>
  );
}
