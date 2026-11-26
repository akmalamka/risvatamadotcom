import type { LocaleString } from './sanity.types'

export function pickLocaleString(
  field: LocaleString | null | undefined,
  locale: string,
  fallback = '',
): string {
  if (!field) {
    return fallback
  }

  const code = locale === 'id' ? 'id' : 'en'
  return field[code] || field.en || fallback
}