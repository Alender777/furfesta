import type { Metadata } from "next";
import NotesContent from "@/components/NotesContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "注意事項",
  description: "FurFesta 2027 參加者規範與注意事項。",
  path: "/notes",
});

export default function NotesPage() {
  return <NotesContent />;
}
