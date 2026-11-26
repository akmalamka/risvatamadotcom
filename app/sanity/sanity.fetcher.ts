import { groq } from '#imports'

import type { LayoutQueryResult } from './sanity.types'

const layoutQuery = groq`{
  'footer': *[_type == 'layoutFooter'][0]{
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
  return useSanityQuery<LayoutQueryResult>(layoutQuery)
}