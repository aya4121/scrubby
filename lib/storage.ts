// storage.ts — localStorage wrapper with SSR safety

const KEYS = {
  LAST_SHOWER: 'scrubby_last_shower',
} as const

function isClient() {
  return typeof window !== 'undefined'
}

export function getLastShower(): string | null {
  if (!isClient()) return null
  return localStorage.getItem(KEYS.LAST_SHOWER)
}

export function saveShower(date: string): void {
  if (!isClient()) return
  localStorage.setItem(KEYS.LAST_SHOWER, date)
}
