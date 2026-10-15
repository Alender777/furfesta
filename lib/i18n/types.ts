export type Locale = "zh-TW" | "en" | "ja" | "ko";

export const locales: Locale[] = ["zh-TW", "en", "ja", "ko"];

export const localeLabels: Record<Locale, string> = {
  "zh-TW": "中文",
  en: "EN",
  ja: "日本語",
  ko: "한국어",
};

export type Messages = {
  nav: {
    home: string;
    event: string;
    circles: string;
    about: string;
    contact: string;
    login: string;
  };
  event: {
    name: string;
    subtitle: string;
    tagline: string;
    heroDescription: string;
    venue: string;
    venueShort: string;
    dateLabel: string;
    dateShort: string;
  };
  home: {
    announcements: string;
    dateLabel: string;
    venueLabel: string;
    countdownLabel: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    countdownToday: string;
    countdownEnded: string;
    entriesTitle: string;
    volunteer: string;
    venue: string;
    notes: string;
    register: string;
    volunteerHint: string;
    venueHint: string;
    notesHint: string;
    registerHint: string;
  };
  about: {
    title: string;
    pageTitle: string;
    pageSubtitle: string;
    highlightsTitle: string;
    scheduleTitle: string;
    scheduleSubtitle: string;
    ticketsTitle: string;
    ticketsSubtitle: string;
    historyTitle: string;
    history1Label: string;
    history1Note: string;
    history2Label: string;
    history2Note: string;
    galleryTitle: string;
    gallerySubtitle: string;
    paragraphs: string[];
    highlights: { title: string; description: string }[];
    schedule: { label: string; value: string; note?: string }[];
    tickets: { label: string; value: string; note?: string }[];
  };
  circles: {
    title: string;
    pageSubtitle: string;
    statusPending: string;
    statusOpen: string;
    statusClosed: string;
    statusBanner: string;
    intro: string;
    regStart: string;
    regEnd: string;
    boothSpec: string;
    boothFee: string;
    boothFeeDouble: string;
    catalogSpec: string;
    rulesTitle: string;
    notesTitle: string;
    rules: string[];
    notes: string[];
    periodStart: string;
    periodEnd: string;
    boothSpecValue: string;
    boothFeeValue: string;
    boothFeeDoubleValue: string;
    catalogSpecValue: string;
  };
  booths: {
    title: string;
    pageSubtitle: string;
    disclaimer: string;
    searchPlaceholder: string;
    searchLabel: string;
    results: string;
    zone: string;
    noResults: string;
  };
  contact: {
    title: string;
    pageSubtitle: string;
    emailTitle: string;
    emailDesc: string;
    plurkTitle: string;
    plurkDesc: string;
    facebookTitle: string;
    facebookDesc: string;
    moreTitle: string;
    moreDesc: string;
    moreLink: string;
    emailAria: string;
    plurkAria: string;
    facebookAria: string;
  };
  footer: {
    copyright: string;
    emailAria: string;
    plurkAria: string;
  };
  announcements: { tag: string; title: string; date: string }[];
  common: { tbd: string; refNote: string; comingSoon: string; comingSoonDesc: string };
  eventPage: {
    title: string;
  };
  circlesPage: {
    title: string;
  };
  pages: {
    volunteer: string;
    venue: string;
    notes: string;
    register: string;
  };
  venuePage: {
    title: string;
    subtitle: string;
    label: string;
    name: string;
    halls: string;
  };
};
