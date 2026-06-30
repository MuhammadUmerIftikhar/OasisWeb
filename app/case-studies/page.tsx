import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { sanityFetch } from '../../sanity/lib/live'
import { urlFor } from '../../sanity/lib/image'
import { CASE_STUDIES_LIST_QUERY } from '../../sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real project write-ups from Oasis Studio covering game development, web development, app development, AI development, and more.',
  alternates: { canonical: '/case-studies' },
}

type CaseStudyListItem = {
  _id: string
  title: string
  slug: string
  client?: string
  service?: string
  excerpt: string
  coverImage?: { asset?: { _ref: string } }
  publishedAt: string
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

export default async function CaseStudiesPage() {
  const { data } = await sanityFetch({ query: CASE_STUDIES_LIST_QUERY })
  const caseStudies = data as CaseStudyListItem[]

  return (
    <div className="bg-[#121212] text-white min-h-screen">

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
              href="/#services"
              className="hidden md:inline text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              All Services
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

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-[#E63946] transition-colors duration-200 mb-8 font-semibold tracking-widest uppercase"
          >
            <span aria-hidden="true">&#8592;</span> Back to Home
          </Link>

          <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Case <span className="text-[#E63946]">Studies</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
            Real projects, real outcomes. Deep write-ups on how Oasis Studio
            builds, ships, and scales products for clients worldwide.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CASE STUDIES GRID
      ════════════════════════════════════════════════ */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {caseStudies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-gray-800 rounded-2xl">
              <p className="text-gray-400 text-lg font-medium mb-2">
                No case studies published yet.
              </p>
              <p className="text-gray-500 text-sm">
                Check back soon for in-depth project write-ups.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((cs) => (
                <article
                  key={cs._id}
                  className="group bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col"
                >
                  <Link href={`/case-studies/${cs.slug}`} className="flex flex-col h-full">
                    {cs.coverImage && (
                      <div className="relative w-full aspect-video overflow-hidden bg-[#161616]">
                        <Image
                          src={urlFor(cs.coverImage).width(800).height(450).url()}
                          alt={cs.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="p-7 flex flex-col flex-1">
                      {cs.service && SERVICE_LABELS[cs.service] && (
                        <span className="text-xs px-3 py-1 rounded-full bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/20 font-semibold w-fit mb-4">
                          {SERVICE_LABELS[cs.service]}
                        </span>
                      )}

                      <h2 className="text-xl font-bold mb-2 group-hover:text-[#E63946] transition-colors duration-300">
                        {cs.title}
                      </h2>

                      {cs.client && (
                        <p className="text-gray-500 text-xs mb-4">{cs.client}</p>
                      )}

                      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                        {cs.excerpt}
                      </p>

                      <time
                        dateTime={cs.publishedAt}
                        className="text-xs text-gray-600 mt-auto"
                      >
                        {new Date(cs.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Bottom back link */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-[#E63946]/40 text-gray-300 hover:text-[#E63946] text-sm font-semibold rounded-full transition-all duration-200"
            >
              <span aria-hidden="true">&#8592;</span> Back to Home
            </Link>
          </div>

        </div>
      </section>

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
