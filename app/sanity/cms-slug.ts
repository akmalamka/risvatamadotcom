const LOCALE_CODES = ['en', 'id'] as const

export function cmsSlugFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean)

  if (segments.length === 0) {
    return '/'
  }

  const first = segments[0]
  if (LOCALE_CODES.includes(first as (typeof LOCALE_CODES)[number])) {
    const rest = segments.slice(1)
    return rest.length > 0 ? `/${rest.join('/')}` : '/'
  }

  return path.startsWith('/') ? path : `/${segments.join('/')}`
}