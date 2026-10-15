import type { Metadata } from "next";
import EventContent from "@/components/EventContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "活動資訊",
  description: "FurFesta 2027 活動日程、入場時間、票務與會場資訊。",
  path: "/event",
});

export default function EventPage() {
  return <EventContent />;
}
