import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon / Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'features',
      title: 'Features',
      description: 'Technologies or capabilities covered by this service',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Game Development', value: 'Game Development' },
          { title: 'Web Development', value: 'Web Development' },
          { title: 'UI/UX Design', value: 'UI/UX Design' },
          { title: '3D Modeling', value: '3D Modeling' },
          { title: 'Unity', value: 'Unity' },
          { title: 'Unreal Engine', value: 'Unreal Engine' },
          { title: 'AR/VR', value: 'AR/VR' },
          { title: 'WebGL', value: 'WebGL' },
          { title: 'Next.js', value: 'Next.js' },
          { title: 'TypeScript', value: 'TypeScript' },
          { title: 'Blender', value: 'Blender' },
          { title: 'Figma', value: 'Figma' },
        ],
      },
    }),
    defineField({
      name: 'aiSummary',
      title: 'AI Summary (max 50 words)',
      description:
        'A concise summary of this service page written for AI engines. Shown in Google AI Overviews and Perplexity. Keep it under 50 words.',
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