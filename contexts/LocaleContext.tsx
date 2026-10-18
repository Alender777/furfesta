"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import {
  getMessages,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n";
import type { Messages } from "@/lib/i18n/types";
import { showStoryPage } from "@/lib/nav";
import { siteBrand } from "@/lib/seo";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function pageTitle(pathname: string, t: Messages): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  let path = pathname.split("?")[0].replace(/\/$/, "") || "/";
  if (base && path.startsWith(base)) path = path.slice(base.length) || "/";
  if (path === "/event" && !showStoryPage) return t.notFound.title;

  const titles: Record<string, string> = {
    "/": t.nav.home,
    "/about": t.nav.about,
    "/booths": t.booths.title,
    "/circles": t.nav.circles,
    "/contact": t.nav.contact,
    "/event": t.nav.event,
    "/notes": t.pages.notes,
    "/register": t.pages.register,
    "/venue": t.venuePage.title,
    "/volunteer": t.volunteerPage.title,
  };

  return titles[path] ?? t.notFound.title;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>("zh-TW");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isLocale(stored)) {
      setLocaleState(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang =
      locale === "zh-TW"
        ? "zh-Hant"
        : locale === "ja"
          ? "ja"
          : locale === "ko"
            ? "ko"
            : "en";
    document.title = `${siteBrand}｜${pageTitle(pathname, getMessages(locale))}`;
  }, [locale, pathname, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getMessages(locale),
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
