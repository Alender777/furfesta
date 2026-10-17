/** 故事頁完成後改回 true，導覽、公告連結與網站地圖會一起恢復。 */
export const showStoryPage = false;

const storyNavItem = { href: "/event", key: "event" } as const;

const visibleNavItems = [
  { href: "/", key: "home" },
  { href: "/venue", key: "venue" },
  { href: "/circles", key: "circles" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export const navItems = showStoryPage
  ? ([visibleNavItems[0], storyNavItem, ...visibleNavItems.slice(1)] as const)
  : visibleNavItems;

export type NavKey = (typeof navItems)[number]["key"];

export const comingSoonPages = new Set(["/event", "/circles"]);
