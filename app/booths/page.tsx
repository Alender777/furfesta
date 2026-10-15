import type { Metadata } from "next";
import BoothsContent from "@/components/BoothsContent";
import { siteData } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "攤位配置",
  description: siteData.booths.disclaimer,
  path: "/booths",
});

export default function BoothsPage() {
  return <BoothsContent />;
}
