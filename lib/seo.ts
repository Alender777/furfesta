import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://furfesta.tw";

export const siteName = "FurFesta";
export const siteYear = "2027";
export const siteBrand = `${siteName} ${siteYear}`;

export const defaultDescription =
  "FurFesta 2027 活動日期、場地、社團與參加資訊。";

export const hrefLangMap = {
  "zh-Hant": siteUrl,
  en: siteUrl,
  ja: siteUrl,
  ko: siteUrl,
  "x-default": siteUrl,
} as const;

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/event", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/circles", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/booths", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/volunteer", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/venue", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/notes", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/register", changeFrequency: "weekly" as const, priority: 0.8 },
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function buildPageTitle(pageTitle: string): string {
  return `${siteBrand}｜${pageTitle}`;
}

export function buildPageMetadata({ title, description, path }: PageSeo): Metadata {
  const canonical = `${siteUrl}${path}`;
  const fullTitle = buildPageTitle(title);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        Object.entries(hrefLangMap).map(([locale, base]) => [locale, `${base}${path}`])
      ),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteBrand,
      locale: "zh_TW",
      alternateLocale: ["en_US", "ja_JP", "ko_KR"],
      type: "website",
      images: [
        {
          url: "/images/og.png",
          width: 1200,
          height: 630,
          alt: siteBrand,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/og.png"],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: buildPageTitle("首頁"),
    template: `%s`,
  },
  description: defaultDescription,
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: [{ url: "/images/apple-touch-icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: siteUrl,
    languages: hrefLangMap,
  },
  openGraph: {
    title: buildPageTitle("首頁"),
    description: defaultDescription,
    url: siteUrl,
    siteName: siteBrand,
    locale: "zh_TW",
    alternateLocale: ["en_US", "ja_JP", "ko_KR"],
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: siteBrand,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: buildPageTitle("首頁"),
    description: defaultDescription,
    images: ["/images/og.png"],
  },
};
