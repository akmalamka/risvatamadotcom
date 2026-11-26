import { defineField, defineType } from 'sanity'

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Image with alt text',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description:
        'Describes the image for accessibility and search.',
      validation: rule => rule.required(),
    }),
  ],
  options: {
    hotspot: true,
  },
})