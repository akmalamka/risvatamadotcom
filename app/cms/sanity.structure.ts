import type { StructureResolver } from 'sanity/structure'

import { FOOTER_ID, FOOTER_SCHEMA } from './sanity.constant'

export const structure: StructureResolver = (S) => {
  const singletonSchemas = new Set(['homePage', FOOTER_SCHEMA])

  const defaultItems = S.documentTypeListItems().filter(
    listItem => !singletonSchemas.has(listItem.getId() ?? ''),
  )

  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Homepage'),
        ),
      S.listItem()
        .title('Footer')
        .id('layoutFooter')
        .child(
          S.document()
            .schemaType(FOOTER_SCHEMA)
            .documentId(FOOTER_ID)
            .title('Footer'),
        ),
      ...defaultItems,
    ])
}