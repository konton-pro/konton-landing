<template>
  <nav class="lang-switch" :aria-label="t('a11y.language')">
    <template v-for="(item, index) in items" :key="item.code">
      <span v-if="index" class="lang-switch-sep" aria-hidden="true">·</span>
      <NuxtLink :to="item.path" :lang="item.language" :hreflang="item.language" :aria-label="item.name" :title="item.name" :aria-current="item.code === locale ? 'true' : undefined" :class="{ 'is-active': item.code === locale }" @click="rememberLocale(item.code)">{{ item.short }}</NuxtLink>
    </template>
  </nav>
</template>

<script setup lang="ts">
const { t, locale, locales } = useI18n();
// detectBrowserLanguage is off, so setLocaleCookie is a no-op: persist the explicit choice ourselves.
const localeCookie = useCookie("i18n_redirected", { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24 * 365 });
const rememberLocale = (code: string) => { localeCookie.value = code; };
const switchLocalePath = useSwitchLocalePath();

const items = computed(() => locales.value.map((item) => {
  const code = typeof item === "string" ? item : item.code;
  return {
    code,
    name: typeof item === "string" ? item : (item.name ?? code),
    language: typeof item === "string" ? item : (item.language ?? code),
    short: code.split("-")[0]!.toUpperCase(),
    path: switchLocalePath(code),
  };
}));
</script>
