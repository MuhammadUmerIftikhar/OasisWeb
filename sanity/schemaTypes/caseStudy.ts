import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'service',
      title: 'Related Service',
      type: 'string',
      options: {
        list: [
          { title: 'Game Development', value: 'game-development' },
          { title: 'App Development', value: 'app-development' },
          { title: 'Web Development', value: 'web-development' },
          { title: 'AI Development', value: 'ai-development' },
          { title: 'Cloud Engineering', value: 'cloud-engineering' },
          { title: 'Video Editing', value: 'video-editing' },
          { title: 'UI/UX Design', value: 'ui-ux-design' },
          { title: 'Graphic Designing', value: 'graphic-designing' },
          { title: '2D Art', value: '2d-art' },
          { title: '3D Modeling', value: '3d-modeling' },
          { title: 'Testing & QA', value: 'testing-qa' },
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Short summary shown on the case studies listing page. One to two sentences.',
      type: 'text',
      rows: 3,
      validation: (R) => R.required().max(300),
    }),
    defineField({
      name: 'aiSummary',
      title: 'AI Summary (max 50 words)',
      description:
        'A concise, strictly factual summary written for AI engines. Shown in Google AI Overviews and Perplexity. Keep it under 50 words and always refer to the studio as Oasis Studio.',
      type: 'string',
      validation: (R) =>
        R.required().warning('AI Summary is required for GEO visibility.'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Project Website URL',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'The full write-up. Use headings, paragraphs, and lists to break up the content.',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      description: 'Questions and answers injected as FAQPage JSON-LD for AI search engines.',
      type: 'array',
      of: [{ type: 'faqBlock' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'coverImage',
    },
  },
})
