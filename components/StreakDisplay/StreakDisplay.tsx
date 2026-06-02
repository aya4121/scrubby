// StreakDisplay.tsx — Shows current streak count

'use client'

interface StreakDisplayProps {
  streak: number
}

export default function StreakDisplay({ streak }: StreakDisplayProps) {
  return (
    <div className="text-center mb-4">
      {streak > 0 ? (
        <p className="text-2xl font-bold text-orange-500">
          🔥 {streak} day{streak !== 1 ? 's' : ''} clean
        </p>
      ) : (
        <p className="text-2xl font-bold text-gray-400">
          No streak yet
        </p>
      )}
    </div>
  )
}
