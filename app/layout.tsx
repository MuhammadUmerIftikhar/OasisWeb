import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { OrganizationJsonLd } from './components/JsonLd'
import { SanityLive } from '../sanity/lib/live'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = 'https://oasisstudio.org'
const SITE_TITLE = 'Oasis Studio | Crafting Digital Worlds'
const SITE_DESCRIPTION =
  'Oasis Studio is a premier software and interactive media agency. We build games, web platforms, mobile apps, AI products, and cloud infrastructure for clients worldwide.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Oasis Studio',
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Oasis Studio',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/OasisLogoTransparent.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/OasisLogoTransparent.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#121212] text-white">
        <OrganizationJsonLd />
        {children}
        <SanityLive />
      </body>
    </html>
  )
}
