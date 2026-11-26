#!/usr/bin/env bash
set -euo pipefail

pnpm build

if [ "${VERCEL_ENV:-local}" = "production" ]; then
  echo "Deploying Sanity Studio (VERCEL_ENV=production)..."
  pnpm deploy:studio
else
  echo "Skipping Sanity Studio deploy (VERCEL_ENV=${VERCEL_ENV:-not set})."
fi