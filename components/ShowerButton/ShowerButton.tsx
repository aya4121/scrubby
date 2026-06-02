// ShowerButton.tsx — Main CTA button. Disabled if already showered today.

'use client'

import { useState } from 'react'
import styles from './ShowerButton.module.css'

interface ShowerButtonProps {
  onShower: () => void
  showeredToday: boolean
}

export default function ShowerButton({ onShower, showeredToday }: ShowerButtonProps) {
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    if (showeredToday) return
    setAnimating(true)
    onShower()
    setTimeout(() => setAnimating(false), 400)
  }

  return (
    <div className="text-center mt-6">
      <button
        onClick={handleClick}
        disabled={showeredToday}
        className={`
          ${styles.button}
          ${animating ? styles.splash : ''}
          px-8 py-4 rounded-2xl text-xl font-bold text-white shadow-lg
          ${showeredToday
            ? 'bg-gray-300'
            : 'bg-blue-400 hover:bg-blue-500 active:bg-blue-600'}
        `}
      >
        {showeredToday ? '✅ Done for today!' : '🚿 I showered today'}
      </button>
    </div>
  )
}
