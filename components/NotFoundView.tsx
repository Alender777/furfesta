"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export default function NotFoundView() {
  const { t } = useLocale();

  return (
    <div className="page-hero" style={{ minHeight: "50vh" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1>{t.notFound.title}</h1>
        <p style={{ marginTop: "1.25rem" }}>{t.notFound.description}</p>
        <p style={{ marginTop: "2rem" }}>
          <Link href="/" className="btn btn-primary" prefetch={false}>
            {t.notFound.backHome}
          </Link>
        </p>
      </div>
    </div>
  );
}
