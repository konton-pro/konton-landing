<template>
  <div class="site-shell">
    <Head>
      <Title>Konton — tecnologia que aproxima</Title>
      <Meta
        name="description"
        content="A Konton cria produtos digitais que transformam problemas reais em experiências simples, seguras e úteis."
      />
      <Meta property="og:title" content="Konton — tecnologia que aproxima" />
      <Meta
        property="og:description"
        content="Produtos digitais feitos para deixar a vida mais clara, segura e conectada."
      />
      <Meta property="og:type" content="website" />
    </Head>

    <header class="site-header container">
      <a class="wordmark" href="#top" aria-label="Konton, início">
        <span class="wordmark-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>konton<span class="wordmark-dot">.</span></span>
      </a>

      <nav class="main-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#produtos">Produtos</a>
        <a href="#eventos">Eventos</a>
        <a href="#contato">Contato</a>
      </nav>

      <a class="header-cta" href="#produtos">Conheça o ecossistema <span aria-hidden="true">↗</span></a>
    </header>

    <main id="top">
      <section class="hero container">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> Tecnologia com intenção</p>
          <h1>Ideias que<br /><em>ganham caminho.</em></h1>
          <p class="hero-lead">
            A Konton cria produtos digitais que transformam problemas reais em experiências simples,
            seguras e úteis.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#produtos">Explorar produtos <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="#sobre">Entender a Konton <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div class="hero-art" aria-label="Ilustração abstrata representando conexões" role="img">
          <div class="art-orbit orbit-one"></div>
          <div class="art-orbit orbit-two"></div>
          <div class="art-core"><span>k</span></div>
          <span class="art-node node-one"></span>
          <span class="art-node node-two"></span>
          <span class="art-node node-three"></span>
          <span class="art-label label-one">curiosidade</span>
          <span class="art-label label-two">cuidado</span>
          <span class="art-label label-three">movimento</span>
        </div>
      </section>

      <section id="sobre" class="about-section container section-grid">
        <p class="section-number">01 <span>/</span> sobre</p>
        <div class="about-content">
          <h2>O digital fica melhor quando começa no <em>humano.</em></h2>
          <p>
            A gente observa o que está à nossa volta, encontra as fricções e constrói ferramentas que
            fazem sentido de verdade. Cada produto é uma oportunidade de simplificar uma rotina e abrir
            novas possibilidades.
          </p>
          <div class="principles" aria-label="Princípios da Konton">
            <div><strong>01</strong><span>Clareza antes da complexidade.</span></div>
            <div><strong>02</strong><span>Segurança como ponto de partida.</span></div>
            <div><strong>03</strong><span>Utilidade que se prova no cotidiano.</span></div>
          </div>
        </div>
      </section>

      <section id="produtos" class="products-section container">
        <div class="section-heading">
          <p class="section-number">02 <span>/</span> produtos</p>
          <p class="section-caption">Duas frentes, a mesma vontade de tornar as coisas melhores.</p>
        </div>

        <div class="product-grid">
          <a class="product-card product-nave" href="https://nave.konton.pro" target="_blank" rel="noreferrer">
            <div class="product-topline"><span>01</span><span class="product-arrow" aria-hidden="true">↗</span></div>
            <div class="product-icon icon-nave" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="product-copy">
              <p class="product-kicker">Mobilidade</p>
              <h3>Nave</h3>
              <p>Menos espera, mais previsibilidade. A maneira simples de encontrar linhas e planejar seu caminho.</p>
            </div>
            <span class="product-link">Visitar nave <span aria-hidden="true">→</span></span>
          </a>

          <a class="product-card product-lockroom" href="https://lockroom.konton.pro" target="_blank" rel="noreferrer">
            <div class="product-topline"><span>02</span><span class="product-arrow" aria-hidden="true">↗</span></div>
            <div class="product-icon icon-lock" aria-hidden="true"><span></span></div>
            <div class="product-copy">
              <p class="product-kicker">Privacidade</p>
              <h3>Lock-Room</h3>
              <p>Um lugar seguro para suas credenciais. Privacidade de ponta a ponta, sem abrir mão da praticidade.</p>
            </div>
            <span class="product-link">Visitar lock-room <span aria-hidden="true">→</span></span>
          </a>
        </div>
      </section>

      <section id="eventos" class="events-section container">
        <div class="section-heading">
          <p class="section-number">03 <span>/</span> eventos</p>
          <p class="section-caption">Conversas para pensar o presente e desenhar melhores caminhos.</p>
        </div>

        <div class="events-layout">
          <div class="event-list">
            <article v-for="event in events" :key="event.id" class="event-card">
              <div>
                <p class="event-date">{{ event.date }}</p>
                <p class="event-time">{{ event.time }} · online</p>
              </div>
              <div class="event-copy">
                <p class="product-kicker">Evento Nave</p>
                <h3>{{ event.title }}</h3>
                <p>{{ event.description }}</p>
                <a :href="event.discordUrl" class="text-link" target="_blank" rel="noreferrer">
                  Ver no Discord <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>

          <form class="registration-form" @submit.prevent="registerInterest">
            <p class="product-kicker">Inscrição</p>
            <h2>Quer participar?</h2>
            <p>Deixe seus dados e a gente envia os próximos passos.</p>
            <label>
              Evento
              <select v-model="registration.event" required>
                <option v-for="event in events" :key="event.id" :value="event.title">{{ event.title }}</option>
              </select>
            </label>
            <label>
              Nome
              <input v-model.trim="registration.name" type="text" name="name" autocomplete="name" required />
            </label>
            <label>
              E-mail
              <input v-model.trim="registration.email" type="email" name="email" autocomplete="email" required />
            </label>
            <button class="button button-primary" type="submit">Quero me inscrever <span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </section>

      <section id="contato" class="contact-section container">
        <div class="contact-mark" aria-hidden="true">✳</div>
        <div>
          <p class="section-number">04 <span>/</span> contato</p>
          <h2>Tem uma ideia<br />para colocar <em>no mundo?</em></h2>
        </div>
        <a class="button button-dark" href="mailto:hello@konton.pro">Vamos conversar <span aria-hidden="true">↗</span></a>
      </section>
    </main>

    <footer class="site-footer container">
      <a class="wordmark" href="#top" aria-label="Voltar ao início">
        <span class="wordmark-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>konton<span class="wordmark-dot">.</span></span>
      </a>
      <p>Feito com curiosidade e cuidado.</p>
      <p>© {{ new Date().getFullYear() }} Konton PRO</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const events = [
  {
    id: "1547959674090029076",
    title: "Embarque na Revolução",
    date: "09 out. 2026",
    time: "12h",
    description: "O Projeto Nave não é apenas um aplicativo; é a modernização definitiva de um setor historicamente esquecido.",
    discordUrl: "https://discord.com/events/1547667617806946327/1547959674090029076",
  },
  {
    id: "1547959147125932202",
    title: "A evolução no transporte digital",
    date: "13 nov. 2026",
    time: "12h",
    description: "O fim das longas esperas e o início da verdadeira eficiência.",
    discordUrl: "https://discord.com/events/1547667617806946327/1547959147125932202",
  },
];

const registration = ref({ event: events[0].title, name: "", email: "" });

const registerInterest = () => {
  const subject = encodeURIComponent(`Inscrição — ${registration.value.event}`);
  const body = encodeURIComponent(`Evento: ${registration.value.event}\nNome: ${registration.value.name}\nE-mail: ${registration.value.email}`);
  window.location.href = `mailto:hello@konton.pro?subject=${subject}&body=${body}`;
};

useHead({
  link: [{ rel: "canonical", href: "https://konton.pro" }],
});
</script>
