import { LazyBlockHeroTitle } from '#components'

export const BLOCK_COMPONENTS = {
  heroTitle: LazyBlockHeroTitle,
} as const

export type BlockComponentsKeys = keyof typeof BLOCK_COMPONENTS