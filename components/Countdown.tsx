"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { getCountdown } from "@/lib/eventDate";
import styles from "./Countdown.module.css";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function padDays(value: number) {
  return String(value).padStart(3, "0");
}

export default function Countdown() {
  const { t } = useLocale();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const countdown = now === null ? null : getCountdown(now);

  return (
    <div className={styles.countdown} aria-live="polite">
      <p className={styles.srOnly}>{t.home.countdownLabel}</p>
      {countdown?.status === "today" ? (
        <p className={styles.message}>{t.home.countdownToday}</p>
      ) : countdown?.status === "ended" ? (
        <p className={styles.message}>{t.home.countdownEnded}</p>
      ) : (
        <>
          <p className={styles.daysRow}>
            <span className={styles.days}>{countdown ? padDays(countdown.days) : "---"}</span>
            <span className={styles.daysLabel}>{t.home.days}</span>
          </p>
          <p className={styles.clock}>
            <span>{countdown ? pad(countdown.hours) : "--"}</span>
            <span className={styles.unit}>{t.home.hours}</span>
            <span>{countdown ? pad(countdown.minutes) : "--"}</span>
            <span className={styles.unit}>{t.home.minutes}</span>
            <span>{countdown ? pad(countdown.seconds) : "--"}</span>
            <span className={styles.unit}>{t.home.seconds}</span>
          </p>
        </>
      )}
    </div>
  );
}
