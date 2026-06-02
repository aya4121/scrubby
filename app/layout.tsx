// app/layout.tsx — Root layout with metadata

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'scrubby — your shower buddy',
  description: 'A cute character that gets dirtier every day you skip a shower. Track your streak and share the chaos.',
  openGraph: {
    title: 'scrubby',
    description: 'Your little buddy gets dirtier every day you skip a shower.',
    url: 'https://scrubby.app',
    siteName: 'scrubby',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'scrubby',
    description: 'Your little buddy gets dirtier every day you skip a shower.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
