// Images from public folder (paths URL-encoded for spaces/special chars)
const rawNames = [
  "WhatsApp Image 2026-02-23 at 9.38.29 AM (1).jpeg",
  "WhatsApp Image 2026-02-23 at 9.38.29 AM.jpeg",
  "WhatsApp Image 2026-02-23 at 9.38.30 AM (1).jpeg",
  "WhatsApp Image 2026-02-23 at 9.38.30 AM (2).jpeg",
  "WhatsApp Image 2026-02-23 at 9.38.30 AM.jpeg",
];
export const PUBLIC_IMAGES = rawNames.map((name) => `/${encodeURIComponent(name)}`) as readonly string[];
