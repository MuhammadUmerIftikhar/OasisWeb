import type { MetadataRoute } from 'next'
import { client } from '../sanity/lib/client'
import { CASE_STUDY_SLUGS_QUERY } from '../sanity/lib/queries'

const SITE_URL = 'https://oasisstudio.org'

const SERVICE_SLUGS = [
  'game-development',
  'app-development',
  'web-development',
  'ai-development',
  'cloud-engineering',
  'video-editing',
  'ui-ux-design',
  'graphic-designing',
  '2d-art',
  '3d-modeling',
  'testing-qa',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const caseStudySlugs = await client.fetch<{ slug: string }[]>(CASE_STUDY_SLUGS_QUERY)
  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map(({ slug }) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...servicePages,
    ...caseStudyPages,
  ]
}
