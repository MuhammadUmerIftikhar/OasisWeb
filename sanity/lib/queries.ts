export const CASE_STUDIES_LIST_QUERY = `*[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  client,
  service,
  excerpt,
  coverImage,
  publishedAt
}`

export const CASE_STUDY_BY_SLUG_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  client,
  service,
  excerpt,
  aiSummary,
  coverImage,
  techStack,
  websiteUrl,
  publishedAt,
  body,
  faqs
}`

export const CASE_STUDY_SLUGS_QUERY = `*[_type == "caseStudy" && defined(slug.current)] { "slug": slug.current }`
