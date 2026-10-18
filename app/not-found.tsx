import type { Metadata } from "next";
import NotFoundView from "@/components/NotFoundView";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "找不到頁面",
  description: "您所尋找的頁面不存在，請返回 FurFesta 2027 首頁。",
  path: "/404",
});

export default function NotFound() {
  return <NotFoundView />;
}
