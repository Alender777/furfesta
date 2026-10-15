import type { Metadata } from "next";
import StubPage from "@/components/StubPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "活動報名",
  description: "FurFesta 2027 活動報名資訊籌備中。",
  path: "/register",
});

export default function RegisterPage() {
  return <StubPage page="register" />;
}
