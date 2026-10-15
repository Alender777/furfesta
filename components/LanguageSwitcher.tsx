"use client";

import { useEffect, useRef, useState } from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { locales, localeLabels, type Locale } from "@/lib/i18n";
import { useLocale } from "@/contexts/LocaleContext";
import styles from "./LanguageSwitcher.module.css";

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
};

export default function LanguageSwitcher({
  variant = "dark",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={`${styles.wrapper} ${styles[variant]}`}
    >
      <button
        type="button"
        className={styles.globeBtn}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <IoGlobeOutline size={22} />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox" aria-label="Language">
          {locales.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                className={`${styles.menuItem} ${
                  locale === code ? styles.menuItemActive : ""
                }`}
                onClick={() => handleSelect(code)}
              >
                {localeLabels[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
