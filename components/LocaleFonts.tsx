"use client";

import { useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import type { Locale } from "@/lib/i18n";

const fontStylesheet: Record<Locale, string> = {
  "zh-TW":
    "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap",
  en: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap",
  ja: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap",
  ko: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap",
};

export default function LocaleFonts() {
  const { locale } = useLocale();

  useEffect(() => {
    const href = fontStylesheet[locale];
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.media = "print";
    const enable = () => {
      link.media = "all";
    };
    link.addEventListener("load", enable);
    document.head.appendChild(link);
    return () => {
      link.removeEventListener("load", enable);
      link.remove();
    };
  }, [locale]);

  return null;
}
