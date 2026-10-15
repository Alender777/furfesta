"use client";

import { useEffect, useRef } from "react";
import Countdown from "@/components/Countdown";
import { getEventBrand } from "@/lib/i18n";
import { publicAsset } from "@/lib/publicAsset";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLocale();
  const brand = getEventBrand(t);
  const frameRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLPictureElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const characters = fgRef.current;
    if (!frame || !characters) return;

    const mobile = window.matchMedia("(max-width: 768px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!mobile.matches || reduceMotion.matches) {
        characters.style.opacity = "";
        return;
      }

      const rect = frame.getBoundingClientRect();
      const header = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
      ) || 80;
      const scrolled = Math.max(0, header - rect.top);
      const progress = Math.min(1, scrolled / (rect.height * 0.68));
      characters.style.opacity = (1 - progress).toFixed(3);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mobile.addEventListener("change", onScroll);
    reduceMotion.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mobile.removeEventListener("change", onScroll);
      reduceMotion.removeEventListener("change", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      characters.style.opacity = "";
    };
  }, []);

  return (
    <section className={styles.hero}>
      <h1 className={styles.srOnly}>{brand}</h1>
      <div className={styles.frame} ref={frameRef}>
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
        <picture className={styles.fgPicture} ref={fgRef}>
          <source media="(max-width: 768px)" srcSet={publicAsset("/images/hero-mobile-fg.webp")} />
          <img src={publicAsset("/images/pixel.gif")} alt="" className={styles.fg} />
        </picture>
        <div className={styles.fade} aria-hidden="true" />
      </div>

      <div className={styles.copy}>
        <p className={styles.date}>{t.event.dateShort}</p>
        <p className={styles.venue}>{t.event.venueShort}</p>
        <Countdown />
      </div>
    </section>
  );
}
