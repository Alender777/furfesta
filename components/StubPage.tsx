"use client";

import ComingSoon from "@/components/ComingSoon";
import PageBanner from "@/components/PageBanner";
import { useLocale } from "@/contexts/LocaleContext";

type StubPageProps = {
  page: "volunteer" | "notes" | "register";
};

export default function StubPage({ page }: StubPageProps) {
  const { t } = useLocale();

  if (page === "notes" || page === "register") {
    const banner = t.pageBanner[page];
    return (
      <>
        <PageBanner name={page} title={banner.title} subtitle={banner.subtitle} />
        <ComingSoon embedded title={t.pages[page]} />
      </>
    );
  }

  return <ComingSoon title={t.pages[page]} />;
}
