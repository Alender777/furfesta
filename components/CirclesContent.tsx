"use client";

import ComingSoon from "@/components/ComingSoon";
import { useLocale } from "@/contexts/LocaleContext";

export default function CirclesContent() {
  const { t } = useLocale();
  return <ComingSoon title={t.circlesPage.title} />;
}
