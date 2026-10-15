"use client";

import ComingSoon from "@/components/ComingSoon";
import { useLocale } from "@/contexts/LocaleContext";

export default function EventContent() {
  const { t } = useLocale();
  return <ComingSoon title={t.eventPage.title} />;
}
