import { groq, useRoute, useSanityQuery } from '#imports'

import { cmsSlugFromPath } from './cms-slug'
import { FOOTER_ID } from './sanity.constant'
import { pageQuery } from './sanity.query'
import type { LayoutQueryResult, PageQueryResult } from './sanity.types'

const layoutQuery = groq`{
  'footer': *[_id == $footerId][0]{
    ...,
    address,
    images[]{
      _key,
      alt,
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }
}`

export function useSanityLayoutFetcher() {
  return useSanityQuery<LayoutQueryResult>(layoutQuery, {
    footerId: FOOTER_ID,
  })
}

export function useSanityPage() {
  const route = useRoute()
  const slug = cmsSlugFromPath(route.path)

  return useSanityQuery<PageQueryResult>(pageQuery, { slug })
}