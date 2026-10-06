# Konton

Site institucional da Konton PRO, construído com Nuxt 4. Apresenta a organização, seus princípios e o ecossistema de produtos digitais.

## Desenvolvimento

Requisitos: Node.js e pnpm 11.

```bash
pnpm install
pnpm dev
```

O endereço canônico do site é [`https://konton.pro/`](https://konton.pro/).

## Comandos

```bash
pnpm dev       # inicia o servidor de desenvolvimento
pnpm build     # gera a aplicação para produção
pnpm preview   # visualiza o build localmente
pnpm start     # inicia o servidor gerado
pnpm i18n:check # confere se todos os idiomas têm as mesmas chaves
```

## Estrutura

- `app/pages/index.vue`: página principal; os textos vêm de `i18n/locales/`.
- `i18n/`: traduções (`locales/*.json`), formatos de data (`i18n.config.ts`) e glossário.
- `app/assets/css/main.css`: estilos globais do site.
- `public/`: arquivos públicos, como o favicon.
- `nuxt.config.ts`: configuração do Nuxt, metadados e recursos globais.

## Idiomas

O site usa [`@nuxtjs/i18n`](https://i18n.nuxtjs.org). O português do Brasil (`pt-BR`) é o idioma padrão e fica em `/`; o inglês (`en`) fica em `/en`.

- As mensagens ficam em `i18n/locales/<codigo>.json`, agrupadas por seção (`nav`, `hero`, `about`…). O `pt-BR.json` é a referência.
- Textos com destaque (`<em>`, `<br>`) usam placeholders como `{em}` e `{br}`, preenchidos com `<i18n-t>` na página.
- Os eventos ficam em `app/pages/index.vue` (id, data ISO e link); título e descrição ficam em `events.items.<id>` nas mensagens.
- `pnpm i18n:check` falha se algum idioma tiver chaves a mais ou a menos que o `pt-BR.json`.

Para adicionar um idioma:

1. Crie `i18n/locales/<codigo>.json` com as mesmas chaves do `pt-BR.json`.
2. Registre-o em `i18n.locales` no `nuxt.config.ts` (`code`, `language`, `name`, `file`).
3. Adicione os formatos de data em `i18n/i18n.config.ts` (`datetimeFormats`) e inclua a rota `/<codigo>` em `nitro.prerender.routes`.
4. Rode `pnpm i18n:check` e `pnpm build`.

## Produção

A imagem Docker gera o build com pnpm e executa o servidor Nuxt em `0.0.0.0:80`.

```bash
docker build -t konton-landing .
docker run --rm -p 8080:80 konton-landing
```

O site publicado é [konton.pro](https://konton.pro).
