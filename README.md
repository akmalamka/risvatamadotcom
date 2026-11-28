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

Fill `.env` from `.env.example`. Production env for the site lives in Vercel (`NUXT_SITE_URL`, `NUXT_SANITY_PROJECT_ID`, `NUXT_SANITY_DATASET`). Studio env stays in gitignored `app/cms/.env`.

### CMS pages

Site routes are built from Sanity **`pages`** documents. Each page has a **URL** slug that starts with `/` (no locale prefix in the CMS). Examples: `/` for the homepage (`/en`, `/id` on the site), `/about` for `/en/about`.

In Studio, create a page with URL `/`, add a **Hero Title** block with English/Indonesian title and subtitle, then publish. Until that document exists, the homepage returns 404.

## Scripts

- `pnpm dev` — Nuxt site at http://localhost:3000 (`/` redirects to `/en`, Indonesian is `/id`)
- `pnpm dev:studio` — Sanity studio at http://localhost:3333 (needs `SANITY_STUDIO_PROJECT_ID`)

Copy the root `.env` values into `app/cms/.env` before starting the studio. Sanity reads environment variables from the studio directory.
