import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "找不到頁面",
  description: "您所尋找的頁面不存在，請返回 FurFesta 2027 首頁。",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="page-hero" style={{ minHeight: "50vh" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1>找不到頁面</h1>
        <p style={{ marginTop: "1.25rem" }}>
          您所尋找的頁面不存在，或已被移除。
        </p>
        <p style={{ marginTop: "2rem" }}>
          <Link href="/" className="btn btn-primary">
            返回首頁
          </Link>
        </p>
      </div>
    </div>
  );
}
