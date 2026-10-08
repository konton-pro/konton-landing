import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from "../../shared/utils/locale-cookie.ts";

const BOT_RE =
  /googlebot|bingbot|duckduckbot|yandex|baiduspider|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|applebot|bot|crawler|spider|preview/i;

export function isBot(userAgent?: string | null) {
  return !!userAgent && BOT_RE.test(userAgent);
}

/** Resolve the Accept-Language header to a locale code: "en" for English and any non-Portuguese top preference, otherwise "pt-BR". */
export function resolveLocale(header?: string | null): "pt-BR" | "en" {
  if (!header) return "pt-BR";
  const langs = header
    .split(",")
    .map((part, index) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const quality = q ? Number.parseFloat(q.slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 0 : quality, index };
    })
    .filter((l) => l.tag && l.tag !== "*" && l.quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);
  const top = langs[0];
  if (!top) return "pt-BR";
  return top.tag.startsWith("pt") ? "pt-BR" : "en";
}

export interface RootRedirectInput {
  method: string;
  path: string;
  cookie?: string | null;
  userAgent?: string | null;
  acceptLanguage?: string | null;
}

/** True when a first-time, non-bot visitor to "/" should be sent to "/en". */
export function shouldRedirectToEn({ method, path, cookie, userAgent, acceptLanguage }: RootRedirectInput) {
  if (method !== "GET" && method !== "HEAD") return false;
  if (path.split("?")[0] !== "/") return false;
  if (cookie && new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=`).test(cookie)) return false;
  if (isBot(userAgent)) return false;
  return resolveLocale(acceptLanguage) === "en";
}

/** Set-Cookie value that records the visitor's locale choice for one year. */
export function localeCookieHeader(locale: string) {
  return `${LOCALE_COOKIE}=${encodeURIComponent(locale)}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
}
