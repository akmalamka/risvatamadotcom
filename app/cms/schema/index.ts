import type { SchemaTypeDefinition } from 'sanity'

import { imageWithAlt } from './fields/image-with-alt'
import { localeString } from './fields/locale-string'
import { layoutFooter } from './footer'
import { homePage } from './home-page'

export const schemaTypes: SchemaTypeDefinition[] = [
  localeString,
  imageWithAlt,
  homePage,
  layoutFooter,
]