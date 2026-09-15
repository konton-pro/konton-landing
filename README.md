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
```

## Estrutura

- `app/pages/index.vue`: página principal e conteúdo institucional.
- `app/assets/css/main.css`: estilos globais do site.
- `public/`: arquivos públicos, como o favicon.
- `nuxt.config.ts`: configuração do Nuxt, metadados e recursos globais.

## Produção

A imagem Docker gera o build com pnpm e executa o servidor Nuxt em `0.0.0.0:80`.

```bash
docker build -t konton-landing .
docker run --rm -p 8080:80 konton-landing
```

O site publicado é [konton.pro](https://konton.pro).
