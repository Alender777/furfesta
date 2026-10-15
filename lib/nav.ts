export const navItems = [
  { href: "/", key: "home" },
  { href: "/event", key: "event" },
  { href: "/circles", key: "circles" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];

export const comingSoonPages = new Set(["/event", "/circles"]);
