export function publicAsset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  return `${base}${normalized}`;
}
