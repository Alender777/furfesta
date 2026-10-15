import type { Metadata } from "next";
import StubPage from "@/components/StubPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "志工招募",
  description: "FurFesta 2027 志工招募資訊籌備中。",
  path: "/volunteer",
});

export default function VolunteerPage() {
  return <StubPage page="volunteer" />;
}
