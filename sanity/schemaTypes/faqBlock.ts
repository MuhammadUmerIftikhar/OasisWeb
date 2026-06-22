import { defineField, defineType } from 'sanity'

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ Block',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 3,
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: 'question' },
  },
})
