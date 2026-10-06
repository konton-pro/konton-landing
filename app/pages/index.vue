<template>
  <div class="site-shell">
    <header class="site-header container">
      <a class="wordmark" href="#top" :aria-label="t('a11y.home')"><img src="/logo-mark.svg" alt="" aria-hidden="true" /><span>konton<span class="wordmark-dot">.</span><small>pro</small></span></a>
      <nav class="main-nav" :aria-label="t('a11y.mainNav')"><a href="#sobre">{{ t("nav.about") }}</a><a href="#metodo">{{ t("nav.method") }}</a><a href="#produtos">{{ t("nav.products") }}</a><a href="#eventos">{{ t("nav.events") }}</a></nav>
      <a class="header-cta" href="#contato">{{ t("nav.cta") }} <span aria-hidden="true">↗</span></a>
    </header>

    <main id="top">
      <section class="hero container">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span class="eyebrow-dot"></span> {{ t("hero.eyebrow") }}</p>
          <i18n-t keypath="hero.title" tag="h1"><template #br><br /></template><template #em><em>{{ t("hero.titleEm") }}</em></template></i18n-t>
          <p class="hero-lead">{{ t("hero.lead") }}</p>
          <div class="hero-actions"><a class="button button-primary" href="#produtos">{{ t("hero.primaryCta") }} <span aria-hidden="true">↗</span></a><a class="text-link" href="#metodo">{{ t("hero.secondaryCta") }} <span aria-hidden="true">↓</span></a></div>
        </div>
        <figure class="hero-art reveal reveal-late">
          <img src="/images/brand-ink/konton-sistema-caminhos.png" :alt="t('hero.imageAlt')" />
        </figure>
      </section>

      <section id="sobre" class="about-section container section-grid">
        <i18n-t keypath="about.number" tag="p" class="section-number"><template #slash><span>/</span></template></i18n-t>
        <div class="about-content">
          <p class="section-kicker">{{ t("about.kicker") }}</p>
          <i18n-t keypath="about.title" tag="h2"><template #em><em>{{ t("about.titleEm") }}</em></template></i18n-t>
          <p>{{ t("about.text") }}</p>
          <div class="principles" :aria-label="t('a11y.principles')"><div v-for="(_, i) in 3" :key="i"><strong>{{ pad(i + 1) }}</strong><span>{{ t(`about.principles[${i}]`) }}</span></div></div>
        </div>
      </section>

      <section id="metodo" class="method-section">
        <div class="container method-frame">
          <div class="method-heading"><i18n-t keypath="method.number" tag="p" class="section-number section-number-light"><template #slash><span>/</span></template></i18n-t><p>{{ t("method.intro") }}</p></div>
          <ol class="method-steps">
            <li v-for="(step, i) in methodSteps" :key="step"><span>{{ pad(i + 1) }}</span><h2>{{ t(`method.steps.${step}.title`) }}</h2><p>{{ t(`method.steps.${step}.text`) }}</p></li>
          </ol>
        </div>
      </section>

      <section id="produtos" class="products-section container">
        <div class="section-heading"><i18n-t keypath="products.number" tag="p" class="section-number"><template #slash><span>/</span></template></i18n-t><p class="section-caption">{{ t("products.caption") }}</p></div>
        <div class="product-grid">
          <a class="product-card product-nave" href="https://nave.konton.pro" target="_blank" rel="noreferrer"><div class="product-topline"><span>01</span><span class="product-arrow" aria-hidden="true">↗</span></div><div class="product-copy"><p class="product-kicker">{{ t("products.nave.kicker") }}</p><h3>Nave</h3><p>{{ t("products.nave.text") }}</p></div><span class="product-link">{{ t("products.nave.link") }} <span aria-hidden="true">→</span></span><img class="product-art" src="/images/brand-ink/konton-nave-jornada.png" :alt="t('products.nave.imageAlt')" /></a>
          <a class="product-card product-lockroom" href="https://lockroom.konton.pro" target="_blank" rel="noreferrer"><div class="product-topline"><span>02</span><span class="product-arrow" aria-hidden="true">↗</span></div><div class="product-copy"><p class="product-kicker">{{ t("products.lockroom.kicker") }}</p><h3>Lock-Room</h3><p>{{ t("products.lockroom.text") }}</p></div><span class="product-link">{{ t("products.lockroom.link") }} <span aria-hidden="true">→</span></span><img class="product-art" src="/images/brand-ink/konton-lock-room-privacidade.png" :alt="t('products.lockroom.imageAlt')" /></a>
        </div>
      </section>

      <section class="exploration-section container">
        <div class="section-heading"><i18n-t keypath="exploration.number" tag="p" class="section-number"><template #slash><span>/</span></template></i18n-t><p class="section-caption">{{ t("exploration.caption") }}</p></div>
        <div class="exploration-grid">
          <div class="exploration-copy"><p class="product-kicker">{{ t("exploration.kicker") }}</p><i18n-t keypath="exploration.title" tag="h2"><template #em><em>{{ t("exploration.titleEm") }}</em></template></i18n-t><p>{{ t("exploration.text") }}</p></div>
          <div class="exploration-mark" :aria-label="t('a11y.explorationMark')" role="img"><span class="exploration-label">{{ t("exploration.label") }}</span><span class="exploration-dot dot-one"></span><span class="exploration-dot dot-two"></span><span class="exploration-path path-one"></span><span class="exploration-path path-two"></span></div>
        </div>
      </section>

      <section id="eventos" class="events-section container">
        <div class="section-heading"><i18n-t keypath="events.number" tag="p" class="section-number"><template #slash><span>/</span></template></i18n-t><p class="section-caption">{{ t("events.caption") }}</p></div>
        <div class="event-list"><article v-for="event in events" :key="event.id" class="event-card"><div class="event-date-wrap"><p class="event-date">{{ formatDate(event.startsAt) }}</p><p class="event-time">{{ formatTime(event.startsAt) }}</p></div><div class="event-copy"><p class="product-kicker">{{ t("events.kicker") }}</p><h3>{{ t(`events.items.${event.id}.title`) }}</h3><p>{{ t(`events.items.${event.id}.description`) }}</p><a :href="event.discordUrl" class="text-link" target="_blank" rel="noreferrer">{{ t("events.discord") }} <span aria-hidden="true">↗</span></a></div><div class="event-mark" aria-hidden="true"><img src="/logo-mark.svg" alt="" /><span>{{ event.index }}</span></div></article></div>
      </section>

      <section class="next-event-section container">
        <div class="next-event-copy"><i18n-t keypath="nextEvent.number" tag="p" class="section-number"><template #slash><span>/</span></template></i18n-t><p class="product-kicker">{{ t("nextEvent.kicker") }}</p><h2>{{ t("nextEvent.title") }}</h2><p>{{ t("nextEvent.text") }}</p></div>
        <div class="next-event-mark" aria-hidden="true"><img src="/logo-mark.svg" alt="" /><i18n-t keypath="nextEvent.mark" tag="span"><template #br><br /></template></i18n-t></div>
      </section>

      <section id="contato" class="contact-section container"><div class="contact-mark" aria-hidden="true"><img src="/logo-mark.svg" alt="" /></div><div><i18n-t keypath="contact.number" tag="p" class="section-number"><template #slash><span>/</span></template></i18n-t><i18n-t keypath="contact.title" tag="h2"><template #br><br /></template><template #em><em>{{ t("contact.titleEm") }}</em></template></i18n-t></div><a class="button button-dark" href="mailto:hello@konton.pro">{{ t("contact.cta") }} <span aria-hidden="true">↗</span></a></section>
    </main>

    <footer class="site-footer container"><a class="wordmark" href="#top" :aria-label="t('a11y.backToTop')"><img src="/logo-mark.svg" alt="" aria-hidden="true" /><span>konton<span class="wordmark-dot">.</span><small>pro</small></span></a><p>{{ t("footer.tagline") }}</p><p>{{ t("footer.copyright", { year: new Date().getFullYear() }) }}</p></footer>
  </div>
</template>

<script setup lang="ts">
const { t, d, locale, locales, localeProperties } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { public: { siteUrl } } = useRuntimeConfig();

const pad = (n: number) => String(n).padStart(2, "0");
const methodSteps = ["observe", "build", "evolve"] as const;

const events = [
  { id: "1547959674090029076", index: "01", startsAt: "2026-10-09T12:00:00-03:00", discordUrl: "https://discord.com/events/1547667617806946327/1547959674090029076" },
  { id: "1547959147125932202", index: "02", startsAt: "2026-11-13T12:00:00-03:00", discordUrl: "https://discord.com/events/1547667617806946327/1547959147125932202" },
];

const formatDate = (startsAt: string) => t("events.date", { day: d(startsAt, "eventDay"), month: d(startsAt, "eventMonth"), year: d(startsAt, "eventYear") });
const formatTime = (startsAt: string) => t("events.time", { time: d(startsAt, "eventTime") });

const toOgLocale = (language?: string) => (language ?? "pt-BR").replace("-", "_");

if (import.meta.server) {
  const alternates = locales.value.filter((l) => l.code !== locale.value);
  const pageUrl = new URL(localePath("/"), siteUrl).href;
  const title = t("seo.title");
  const description = t("seo.description");
  const socialDescription = t("seo.socialDescription");

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: socialDescription,
    ogType: "website",
    ogSiteName: "Konton PRO",
    ogLocale: toOgLocale(localeProperties.value.language),
    ogLocaleAlternate: alternates.map((l) => toOgLocale(l.language)),
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: socialDescription,
  });

  useHead({
    link: [
      { rel: "canonical", href: pageUrl },
      ...locales.value.map((l) => ({ rel: "alternate", hreflang: l.language, href: new URL(switchLocalePath(l.code), siteUrl).href })),
      { rel: "alternate", hreflang: "x-default", href: new URL("/", siteUrl).href },
    ],
  });

  useSchemaOrg([
    defineOrganization({
      name: "Konton PRO",
      url: siteUrl,
      email: "hello@konton.pro",
      description,
      inLanguage: localeProperties.value.language,
      logo: new URL("/logo-mark.svg", siteUrl).href,
    }),
    defineWebPage({
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: localeProperties.value.language,
    }),
  ]);

  defineOgImage("Konton", {
    title: t("seo.ogTitle"),
    description: socialDescription,
    eyebrow: t("seo.ogEyebrow"),
    tagline: t("seo.ogTagline"),
  }, {
    width: 1200,
    height: 630,
    alt: t("seo.ogAlt"),
  });
}
</script>
