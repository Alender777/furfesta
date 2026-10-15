import type { Metadata } from "next";
import VenueContent from "@/components/VenueContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "會場",
  description: "FurFesta 2027 活動場館：南港瓶蓋工廠台北製造所 A2棟 + F棟。",
  path: "/venue",
});

export default function VenuePage() {
  return <VenueContent />;
}
