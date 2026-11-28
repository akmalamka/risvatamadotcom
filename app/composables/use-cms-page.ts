import type { Ref } from 'vue'

import { BLOCK_COMPONENTS } from '~/block/block.components'
import type { PageQueryResult } from '~/sanity/sanity.types'

export const cmsBlockComponents = BLOCK_COMPONENTS

export function useCmsPageMeta(data: Ref<PageQueryResult | null | undefined>) {
  useSeoMeta({
    title: () => data.value?.title,
    description: () => data.value?.description,
  })
}

export function assertCmsPageFound(data: Ref<PageQueryResult | null | undefined>) {
  if (!data.value) {
    showError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
    })
  }
}