import type { Metadata } from "next";
import EventContent from "@/components/EventContent";
import NotFound from "@/app/not-found";
import { showStoryPage } from "@/lib/nav";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = showStoryPage
  ? buildPageMetadata({
      title: "活動資訊",
      description: "歡迎，恩扎的遠客。FurFesta 活動故事。",
      path: "/event",
    })
  : {
      title: "找不到頁面",
      robots: { index: false, follow: false },
    };

export default function EventPage() {
  if (!showStoryPage) return <NotFound />;
  return <EventContent />;
}
