// useShowerTracker.ts — Core logic: stage calculation, shower recording

'use client'

import { useState, useEffect } from 'react'
import { getLastShower, saveShower } from '@/lib/storage'

export function getTodayString(): string {
  // YYYY-MM-DD in local timezone
  return new Date().toLocaleDateString('en-CA')
}

function getDaysSinceLastShower(lastShower: string | null): number {
  if (!lastShower) return 4 // Never showered → max stage

  const today = getTodayString()
  if (lastShower === today) return 0

  // Parse as local date to avoid UTC offset issues
  const [ly, lm, ld] = lastShower.split('-').map(Number)
  const [ty, tm, td] = today.split('-').map(Number)
  const lastDate = new Date(ly, lm - 1, ld)
  const todayDate = new Date(ty, tm - 1, td)
  const diff = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))
  return Math.max(0, diff)
}

export function useShowerTracker() {
  const [lastShower, setLastShower] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLastShower(getLastShower())
    setMounted(true)
  }, [])

  const today = getTodayString()
  const daysSince = getDaysSinceLastShower(lastShower)
  const stage = Math.min(4, daysSince) as 0 | 1 | 2 | 3 | 4
  const showeredToday = lastShower === today

  const recordShower = () => {
    saveShower(today)
    setLastShower(today)
  }

  return { stage, showeredToday, recordShower, mounted }
}
