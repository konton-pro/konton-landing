import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = new URL("../i18n/locales/", import.meta.url).pathname;
const reference = "pt-BR";

const flatten = (value, prefix = "") =>
  value && typeof value === "object"
    ? Object.entries(value).flatMap(([key, child]) => flatten(child, prefix ? `${prefix}.${key}` : key))
    : [prefix];

const locales = readdirSync(dir).filter((file) => file.endsWith(".json")).map((file) => file.replace(/\.json$/, ""));
const keys = Object.fromEntries(locales.map((locale) => [locale, new Set(flatten(JSON.parse(readFileSync(join(dir, `${locale}.json`), "utf8"))))]));

let failed = false;
for (const locale of locales.filter((locale) => locale !== reference)) {
  const missing = [...keys[reference]].filter((key) => !keys[locale].has(key));
  const extra = [...keys[locale]].filter((key) => !keys[reference].has(key));
  if (missing.length || extra.length) {
    failed = true;
    console.error(`✗ ${locale}.json difere de ${reference}.json`);
    missing.forEach((key) => console.error(`  faltando: ${key}`));
    extra.forEach((key) => console.error(`  sobrando: ${key}`));
  }
}

if (failed) process.exit(1);
console.log(`✓ ${locales.length} idiomas com as mesmas ${keys[reference].size} chaves (${locales.join(", ")})`);
