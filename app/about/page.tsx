// app/about/page.tsx — SEO landing page (SSG) + AdSense placement

import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'scrubby — Shower Tracker App | Track Your Shower Streak',
  description:
    'scrubby is a fun shower habit tracker. Your cute character gets dirtier every day you skip a shower. Track your streak, share on Instagram Stories, and never lose track of your hygiene game.',
  keywords: 'shower tracker app, did i shower today, shower habit tracker, shower streak app, funny habit tracker',
  openGraph: {
    title: 'scrubby — Shower Tracker App',
    description: 'Your little buddy gets dirtier every day you skip a shower.',
    url: 'https://scrubby.app/about',
  },
  alternates: {
    canonical: 'https://scrubby.app/about',
  },
}

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID

export default function AboutPage() {
  return (
    <>
      {/* AdSense script — only if ID is set */}
      {ADSENSE_ID && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      <main className="max-w-2xl mx-auto px-4 py-16">
        <a href="/" className="text-blue-500 hover:underline text-sm">← Back to scrubby</a>

        <h1 className="text-4xl font-black mt-6 mb-4">What is scrubby?</h1>
        <p className="text-lg text-gray-600 mb-8">
          scrubby is a fun, no-login shower habit tracker. Your little character gets visibly dirtier every day you skip a shower — and cleaner the moment you tap the button.
        </p>

        {/* AdSense slot */}
        {ADSENSE_ID && (
          <div className="my-8">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client={ADSENSE_ID}
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        )}

        <h2 className="text-2xl font-bold mt-10 mb-3">How it works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Open scrubby each day.</li>
          <li>If you showered, tap <strong>🚿 I showered today</strong>.</li>
          <li>Your character stays fresh. Skip a day and they start to smell.</li>
          <li>Share your state to Instagram Stories or TikTok.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-3">Dirty stages</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✨ <strong>Squeaky Clean</strong> — Just showered today</li>
          <li>🙂 <strong>Still Fine</strong> — 1 day since last shower</li>
          <li>😅 <strong>Getting Iffy</strong> — 2 days</li>
          <li>😬 <strong>Yikes...</strong> — 3 days</li>
          <li>💀 <strong>SEND HELP</strong> — 4+ days</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-3">Privacy</h2>
        <p className="text-gray-600">
          Everything is stored locally on your device. No account, no server, no tracking of your shower habits. Your hygiene data stays yours.
        </p>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block bg-blue-400 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl text-lg"
          >
            🚿 Go to scrubby
          </a>
        </div>
      </main>
    </>
  )
}
