import type { Metadata } from "next";
import StubPage from "@/components/StubPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "注意事項",
  description: "FurFesta 2027 參加注意事項籌備中。",
  path: "/notes",
});

export default function NotesPage() {
  return <StubPage page="notes" />;
}
