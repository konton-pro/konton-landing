<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
  description?: string;
}>(), {
  title: "Ideias que ganham caminho.",
  description: "Uma software house que observa, constrói e evolui produtos digitais com intenção.",
});
</script>

<template>
  <div class="canvas">
    <img class="paths" src="/images/brand-ink/konton-sistema-caminhos.png" alt="" />
    <div class="veil" />

    <div class="content">
      <div class="brand">
        <img src="/logo-mark.svg" alt="" />
        <span>konton<span class="dot">.</span><small>pro</small></span>
      </div>

      <p class="eyebrow">SOFTWARE HOUSE INDEPENDENTE</p>
      <h1 class="title">{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </div>

    <div class="footer">
      <span>TECNOLOGIA QUE GANHA CAMINHO</span>
      <span class="marker" />
      <span>KONTON.PRO</span>
    </div>
  </div>
</template>

<style scoped>
.canvas {
  position: relative;
  display: flex;
  width: 1200px;
  height: 630px;
  overflow: hidden;
  background: #171513;
  color: #f7f4ec;
  font-family: Arial, sans-serif;
}

.paths {
  position: absolute;
  right: -55px;
  bottom: -165px;
  width: 760px;
  height: 760px;
  opacity: 0.66;
  object-fit: contain;
}

.veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #171513 24%, rgba(23, 21, 19, 0.84) 50%, rgba(23, 21, 19, 0.08) 100%);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 670px;
  padding: 64px 0 58px 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -2px;
}

.brand img { width: 34px; height: 34px; filter: invert(1); }
.brand .dot, .marker { color: #c93832; background: #c93832; }
.brand small { margin-left: 4px; color: #b8b2aa; font-size: 12px; font-weight: 500; letter-spacing: 1px; vertical-align: top; }

.eyebrow { margin: auto 0 19px; color: #c93832; font-size: 13px; font-weight: 700; letter-spacing: 2.2px; }
.title { display: block; max-width: 620px; margin: 0; font-size: 74px; font-weight: 700; letter-spacing: -4.5px; line-height: 0.92; }
.description { max-width: 490px; margin: 28px 0 0; color: #d0cbc3; font-size: 21px; line-height: 1.35; }

.footer {
  position: absolute;
  right: 72px;
  bottom: 56px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #d0cbc3;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.marker { display: block; width: 8px; height: 8px; border-radius: 50%; }
</style>
