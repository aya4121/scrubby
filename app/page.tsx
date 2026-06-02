// app/page.tsx — Main home screen

'use client'

import { useRef } from 'react'
import Character from '@/components/Character/Character'
import ShowerButton from '@/components/ShowerButton/ShowerButton'
import ShareCard from '@/components/ShareCard/ShareCard'
import { STAGES } from '@/components/Character/stages'
import { useShowerTracker } from '@/hooks/useShowerTracker'
import { shareCard } from '@/lib/share'

export default function Home() {
  const { stage, showeredToday, recordShower, mounted } = useShowerTracker()
  const shareCardRef = useRef<HTMLDivElement>(null)

  const stageData = STAGES[stage]

  const handleShare = async () => {
    if (!shareCardRef.current) return
    await shareCard(shareCardRef.current, stageData.label)
  }

  if (!mounted) {
    return (
      <main className="min-h-dvh flex items-center justify-center bg-gray-50">
        <p className="text-gray-300 text-lg">Loading...</p>
      </main>
    )
  }

  return (
    <main
      className="min-h-dvh flex flex-col items-center justify-center px-4 py-10 transition-colors duration-700"
      style={{ backgroundColor: stageData.bgColor }}
    >
      {/* App name */}
      <h1
        className="text-3xl font-black tracking-tight mb-2"
        style={{ color: stageData.textColor }}
      >
        scrubby
      </h1>

      {/* Stage label */}
      <p className="text-base font-medium mb-6 opacity-70" style={{ color: stageData.textColor }}>
        {stageData.emoji} {stageData.label}
      </p>

      {/* Character */}
      <Character stage={stage} />

      {/* Shower button */}
      <ShowerButton onShower={recordShower} showeredToday={showeredToday} />

      {/* Share button */}
      <button
        onClick={handleShare}
        className="mt-4 text-sm underline opacity-60 hover:opacity-100 transition-opacity"
        style={{ color: stageData.textColor }}
      >
        📸 Share my scrubby
      </button>

      {/* About link */}
      <a
        href="/about"
        className="mt-8 text-xs opacity-40 hover:opacity-70"
        style={{ color: stageData.textColor }}
      >
        What is scrubby?
      </a>

      {/* Hidden ShareCard for html2canvas */}
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        <ShareCard ref={shareCardRef} stage={stage} />
      </div>
    </main>
  )
}
