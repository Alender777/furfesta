import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import { siteData } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "關於",
  description: siteData.about.paragraphs[0],
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
