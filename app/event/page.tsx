import type { Metadata } from "next";
import EventContent from "@/components/EventContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "活動資訊",
  description: "歡迎，恩扎的遠客。FurFesta 活動故事。",
  path: "/event",
});

export default function EventPage() {
  return <EventContent />;
}
