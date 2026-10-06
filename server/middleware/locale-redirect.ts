import { localeCookieHeader, shouldRedirectToEn } from "../utils/detect-locale";

// Runs before the prerendered "/" is served, so first-time English visitors land on "/en".
export default defineEventHandler((event) => {
  const headers = getRequestHeaders(event);
  const shouldRedirect = shouldRedirectToEn({
    method: event.method,
    path: event.path,
    cookie: headers.cookie,
    userAgent: headers["user-agent"],
    acceptLanguage: headers["accept-language"],
  });
  if (!shouldRedirect) return;
  setResponseHeaders(event, { "Set-Cookie": localeCookieHeader("en"), Vary: "Accept-Language, Cookie", "Cache-Control": "private, no-store" });
  return sendRedirect(event, "/en", 302);
});
