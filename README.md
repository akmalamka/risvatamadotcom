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

The Sanity project id is empty until you add one. The homepage does not read from Sanity.

## Scripts

- `pnpm dev` — Nuxt site at http://localhost:3000 (`/` redirects to `/en`, Indonesian is `/id`)
- `pnpm dev:studio` — Sanity studio at http://localhost:3333 (needs `SANITY_STUDIO_PROJECT_ID`)

Copy the root `.env` values into `app/cms/.env` before starting the studio. Sanity reads environment variables from the studio directory.
