import type { Locale, Messages } from "./types";
import { locales, localeLabels } from "./types";
import { zhTW } from "./zh-TW";
import { en } from "./en";
import { ja } from "./ja";
import { ko } from "./ko";

export type { Locale, Messages };
export { locales, localeLabels };

const messages: Record<Locale, Messages> = {
  "zh-TW": zhTW,
  en,
  ja,
  ko,
};

export function getEventBrand(t: Messages): string {
  return t.event.subtitle
    ? `${t.event.name} ${t.event.subtitle}`
    : t.event.name;
}

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages["zh-TW"];
}

export const LOCALE_STORAGE_KEY = "furfesta-locale";

export function isLocale(value: string): value is Locale {
  return value === "zh-TW" || value === "en" || value === "ja" || value === "ko";
}
