"use client";

import { LocaleProvider } from "@/contexts/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleFonts from "@/components/LocaleFonts";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <LocaleFonts />
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
