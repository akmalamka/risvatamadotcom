import { groq } from '#imports'

import { FOOTER_ID } from './sanity.constant'
import type { LayoutQueryResult } from './sanity.types'

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