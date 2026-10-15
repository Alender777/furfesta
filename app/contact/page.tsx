import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { siteData } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "聯絡",
  description: siteData.contact.message,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
