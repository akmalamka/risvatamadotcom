import { defineField, defineType } from 'sanity'

export const heroTitleSchema = defineType({
  name: 'heroTitle',
  title: 'Hero Title',
  type: 'object',
  preview: {
    select: {
      titleEn: 'title.en',
    },
    prepare({ titleEn }) {
      return {
        title: 'Hero Title',
        subtitle: titleEn,
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Hidden on the site when empty',
      type: 'localeString',
    }),
  ],
})