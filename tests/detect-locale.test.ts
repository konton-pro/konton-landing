import assert from "node:assert/strict";
import { test } from "node:test";
import { isBot, resolveLocale, shouldRedirectToEn } from "../server/utils/detect-locale.ts";

const base = { method: "GET", path: "/", acceptLanguage: "en-US,en;q=0.9" };

test("resolveLocale", () => {
  assert.equal(resolveLocale("en-US,en;q=0.9"), "en");
  assert.equal(resolveLocale("pt-BR,pt;q=0.9,en;q=0.8"), "pt-BR");
  assert.equal(resolveLocale("pt-PT"), "pt-BR");
  assert.equal(resolveLocale("es-ES"), "en");
  assert.equal(resolveLocale("en;q=0.5,pt;q=0.9"), "pt-BR");
  assert.equal(resolveLocale("*"), "pt-BR");
  assert.equal(resolveLocale(""), "pt-BR");
  assert.equal(resolveLocale(undefined), "pt-BR");
});

test("isBot", () => {
  assert.ok(isBot("Mozilla/5.0 (compatible; Googlebot/2.1)"));
  assert.ok(isBot("Slackbot-LinkExpanding 1.0"));
  assert.ok(!isBot("Mozilla/5.0 (Macintosh) AppleWebKit/605 Safari/605"));
});

test("shouldRedirectToEn", () => {
  assert.ok(shouldRedirectToEn(base));
  assert.ok(shouldRedirectToEn({ ...base, method: "HEAD", path: "/?x=1" }));
  assert.ok(!shouldRedirectToEn({ ...base, method: "POST" }));
  assert.ok(!shouldRedirectToEn({ ...base, path: "/en" }));
  assert.ok(!shouldRedirectToEn({ ...base, cookie: "a=1; i18n_redirected=pt-BR" }));
  assert.ok(!shouldRedirectToEn({ ...base, userAgent: "Googlebot/2.1" }));
  assert.ok(!shouldRedirectToEn({ ...base, acceptLanguage: undefined }));
});
