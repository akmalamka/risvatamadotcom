# risvatamadotcom

A company profile for Risvatama Laras.

## Requirements

- Node `^22.22.3`, `^24.15.0`, or `>=26`
- pnpm 12.23.0 (`corepack enable && corepack prepare pnpm@12.23.0 --activate`)

## Setup

```sh
cp .env.example .env
pnpm install
```

Fill `.env` from `.env.example`. The homepage heading reads the `homePage` document title and falls back to "Risvatama Laras" until that document is published. Production env for the site lives in Vercel (`NUXT_SITE_URL`, `NUXT_SANITY_PROJECT_ID`, `NUXT_SANITY_DATASET`, `NUXT_SANITY_API_VERSION`). Studio env stays in gitignored `app/cms/.env`.

## Scripts

- `pnpm dev` — Nuxt site at http://localhost:3000 (`/` redirects to `/en`, Indonesian is `/id`)
- `pnpm dev:studio` — Sanity studio at http://localhost:3333 (needs `SANITY_STUDIO_PROJECT_ID`)

Copy the root `.env` values into `app/cms/.env` before starting the studio. Sanity reads environment variables from the studio directory.
