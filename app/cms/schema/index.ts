import type { SchemaTypeDefinition } from 'sanity'

import { heroTitleSchema } from './components/hero-title.schema'
import { imageWithAlt } from './fields/image-with-alt'
import { localeString } from './fields/locale-string'
import { layoutFooter } from './footer'
import { pagesSchema } from './pages.schema'

export const schemaTypes: SchemaTypeDefinition[] = [
  localeString,
  imageWithAlt,
  heroTitleSchema,
  pagesSchema,
  layoutFooter,
]