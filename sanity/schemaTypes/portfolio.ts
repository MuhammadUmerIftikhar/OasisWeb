import { defineField, defineType } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Mobile Games', value: 'mobile-games' },
          { title: 'WebGL', value: 'webgl' },
          { title: 'AR/VR', value: 'ar-vr' },
          { title: 'Web Development', value: 'web-development' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'aiSummary',
      title: 'AI Summary (max 50 words)',
      description:
        'A concise summary of this project written for AI engines. Shown in Google AI Overviews and Perplexity. Keep it under 50 words.',
      type: 'string',
      validation: (R) =>
        R.required().warning('AI Summary is required for GEO visibility.'),
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      description: 'Questions and answers injected as FAQPage JSON-LD for AI search engines.',
      type: 'array',
      of: [{ type: 'faqBlock' }],
    }),
  ],
})