"use client";

import ComingSoon from "@/components/ComingSoon";
import { useLocale } from "@/contexts/LocaleContext";

type StubPageProps = {
  page: "volunteer" | "notes" | "register";
};

export default function StubPage({ page }: StubPageProps) {
  const { t } = useLocale();
  return <ComingSoon title={t.pages[page]} />;
}
