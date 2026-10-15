import type { Metadata } from "next";
import CirclesContent from "@/components/CirclesContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "社團",
  description: "FurFesta 2027 社團報名、攤位規範與參加須知。",
  path: "/circles",
});

export default function CirclesPage() {
  return <CirclesContent />;
}
