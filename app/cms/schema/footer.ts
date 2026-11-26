import { defineArrayMember, defineField, defineType } from 'sanity'

import { FOOTER_SCHEMA } from '../sanity.constant'

export const layoutFooter = defineType({
  name: FOOTER_SCHEMA,
  title: 'Footer',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Footer',
    }),
  },
  fields: [
    defineField({
      name: 'tagline1',
      title: 'Tagline 1',
      type: 'localeString',
    }),
    defineField({
      name: 'tagline2',
      title: 'Tagline 2',
      type: 'localeString',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'imageWithAlt',
        }),
      ],
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Address text',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'mapUrl',
          title: 'Google Maps URL',
          type: 'url',
          description: 'Use a Google Maps link for this location (placeholder until the final URL is ready).',
        }),
      ],
    }),
    defineField({
      name: 'phone1',
      title: 'Phone 1',
      type: 'string',
    }),
    defineField({
      name: 'phone2',
      title: 'Phone 2',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'backToTop',
      title: 'Back to top label',
      type: 'string',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright (left)',
      type: 'string',
    }),
    defineField({
      name: 'credit',
      title: 'Credit (right)',
      type: 'string',
    }),
  ],
})