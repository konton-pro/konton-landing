import { localeCookieHeader, shouldRedirectToEn } from "../utils/detect-locale";

// Runs on the SSR "/" (never prerendered, or static assets would bypass this), so first-time English visitors land on "/en".
export default defineEventHandler((event) => {
  const headers = getRequestHeaders(event);
  const isRoot = (event.method === "GET" || event.method === "HEAD") && event.path.split("?")[0] === "/";
  // "/" varies by Accept-Language and cookie, so every response (200 included) must say so.
  if (isRoot) setResponseHeaders(event, { Vary: "Accept-Language, Cookie", "Cache-Control": "private, no-cache" });
  const shouldRedirect = shouldRedirectToEn({
    method: event.method,
    path: event.path,
    cookie: headers.cookie,
    userAgent: headers["user-agent"],
    acceptLanguage: headers["accept-language"],
  });
  if (!shouldRedirect) return;
  setResponseHeaders(event, { "Set-Cookie": localeCookieHeader("en"), "Cache-Control": "private, no-store" });
  return sendRedirect(event, `/en${getRequestURL(event).search}`, 302);
});
