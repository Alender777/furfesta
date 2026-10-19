"use client";

import ComingSoon from "@/components/ComingSoon";
import PageBanner from "@/components/PageBanner";
import { useLocale } from "@/contexts/LocaleContext";

export default function CirclesContent() {
  const { t } = useLocale();
  const banner = t.pageBanner.circles;

  return (
    <>
      <PageBanner name="circles" title={banner.title} subtitle={banner.subtitle} />
      <ComingSoon embedded title={t.circlesPage.title} />
    </>
  );
}
