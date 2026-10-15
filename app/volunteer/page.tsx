import type { Metadata } from "next";
import VolunteerContent from "@/components/VolunteerContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "志工招募",
  description: "FurFesta 志工申請須知、福利與當日工作內容。招募時間待公布。",
  path: "/volunteer",
});

export default function VolunteerPage() {
  return <VolunteerContent />;
}
