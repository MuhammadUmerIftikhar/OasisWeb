import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { sanityFetch } from '../../../sanity/lib/live'
import { urlFor } from '../../../sanity/lib/image'
import { CASE_STUDY_BY_SLUG_QUERY, CASE_STUDY_SLUGS_QUERY } from '../../../sanity/lib/queries'
import { ArticleJsonLd, FaqPageJsonLd } from '../../components/JsonLd'

type FaqItem = { question: string; answer: string }

type CaseStudy = {
  _id: string
  title: string
  slug: string
  client?: string
  service?: string
  excerpt: string
  aiSummary?: string
  coverImage?: { asset?: { _ref: string } }
  techStack?: string[]
  websiteUrl?: string
  publishedAt: string
  body?: unknown[]
  faqs?: FaqItem[]
}

const SERVICE_LABELS: Record<string, string> = {
  'game-development': 'Game Development',
  'app-development': 'App Development',
  'web-development': 'Web Development',
  'ai-development': 'AI Development',
  'cloud-engineering': 'Cloud Engineering',
  'video-editing': 'Video Editing',
  'ui-ux-design': 'UI/UX Design',
  'graphic-designing': 'Graphic Designing',
  '2d-art': '2D Art',
  '3d-modeling': '3D Modeling',
  'testing-qa': 'Testing & QA',
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-white">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-300 text-base leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#E63946] pl-6 italic text-gray-400 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-gray-300 mb-5 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-300 mb-5 space-y-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#E63946] hover:underline"
      >
        {children}
      </a>
    ),
  },
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: CASE_STUDY_SLUGS_QUERY,
    perspective: 'published',
    stega: false,
  })
  return (data as { slug: string }[]).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { data } = await sanityFetch({
    query: CASE_STUDY_BY_SLUG_QUERY,
    params: { slug },
    stega: false,
  })
  const caseStudy = data as CaseStudy | null

  if (!caseStudy) return {}

  const url = `/case-studies/${caseStudy.slug}`
  const imageUrl = caseStudy.coverImage ? urlFor(caseStudy.coverImage).width(1200).height(630).url() : undefined

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: caseStudy.title,
      description: caseStudy.excerpt,
      url,
      publishedTime: caseStudy.publishedAt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { data } = await sanityFetch({ query: CASE_STUDY_BY_SLUG_QUERY, params: { slug } })
  const caseStudy = data as CaseStudy | null

  if (!caseStudy) notFound()

  const pageUrl = `https://oasisstudio.org/case-studies/${caseStudy.slug}`
  const imageUrl = caseStudy.coverImage ? urlFor(caseStudy.coverImage).width(1200).height(630).url() : undefined
  const faqs = caseStudy.faqs ?? []

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <ArticleJsonLd
        headline={caseStudy.title}
        description={caseStudy.aiSummary || caseStudy.excerpt}
        url={pageUrl}
        datePublished={caseStudy.publishedAt}
        imageUrl={imageUrl}
      />
      <FaqPageJsonLd
        faqs={faqs}
        pageTitle={`${caseStudy.title} | Oasis Studio`}
        pageDescription={caseStudy.excerpt}
        pageUrl={pageUrl}
      />

      {/* ════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <div className="text-2xl font-black tracking-widest">
              <span className="text-[#E63946]">OASIS</span><span className="text-white">STUDIO</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/case-studies"
              className="hidden md:inline text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              All Case Studies
            </Link>
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-[#E63946] hover:bg-red-700 text-white transition-colors duration-200 shrink-0"
            >
              Start a Project
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <article className="relative z-10 py-20 px-6">
          <div className="max-w-3xl mx-auto">

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-[#E63946] transition-colors duration-200 mb-8 font-semibold tracking-widest uppercase"
            >
              <span aria-hidden="true">&#8592;</span> All Case Studies
            </Link>

            <header className="mb-10">
              {caseStudy.service && SERVICE_LABELS[caseStudy.service] && (
                <span className="text-xs px-3 py-1 rounded-full bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/20 font-semibold w-fit mb-4 inline-block">
                  {SERVICE_LABELS[caseStudy.service]}
                </span>
              )}

              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                {caseStudy.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                {caseStudy.client && <span>{caseStudy.client}</span>}
                {caseStudy.client && <span aria-hidden="true">&middot;</span>}
                <time dateTime={caseStudy.publishedAt}>
                  {new Date(caseStudy.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {caseStudy.techStack && caseStudy.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-900 text-gray-300 rounded-full px-2.5 py-1 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {caseStudy.coverImage && (
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-[#161616] mb-12">
                <Image
                  src={urlFor(caseStudy.coverImage).width(1200).height(675).url()}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {caseStudy.body && caseStudy.body.length > 0 ? (
              <PortableText value={caseStudy.body} components={portableTextComponents} />
            ) : (
              <p className="text-gray-400 text-base leading-relaxed">{caseStudy.excerpt}</p>
            )}

            {caseStudy.websiteUrl && (
              <div className="mt-10">
                <a
                  href={caseStudy.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] hover:-translate-y-1 transition-all font-semibold"
                >
                  Visit Project
                </a>
              </div>
            )}

            {faqs.length > 0 && (
              <div className="mt-16 pt-10 border-t border-white/5">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-6">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-base font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </article>
      </main>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>&#169; {new Date().getFullYear()} All rights reserved.</span>
          <a href="mailto:admin@oasisstudio.org" className="hover:text-gray-400 transition-colors duration-200">
            admin@oasisstudio.org
          </a>
        </div>
      </footer>

    </div>
  )
}
