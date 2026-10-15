"use client";

import { LocaleProvider } from "@/contexts/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
