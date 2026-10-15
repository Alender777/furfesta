import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeEntries from "@/components/HomeEntries";
import Announcements from "@/components/Announcements";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "首頁",
  description: "FurFesta 2027 活動日期、場地、社團與參加資訊。",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <HomeEntries />
      <Announcements />
    </div>
  );
}
