import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { OrganizationJsonLd } from './components/JsonLd'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Oasis Studio | Crafting Digital Worlds',
  description:
    'Oasis Studio is a premier software and interactive media agency. We build immersive games, AR/VR experiences, WebGL prototypes, and polished web products.',
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
      </body>
    </html>
  )
}
