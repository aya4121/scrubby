// Stage definitions for Scrubby character dirty levels
// Stage 0 = just showered, Stage 4 = send help

export const STAGES = [
  { id: 0, label: 'Squeaky Clean',  emoji: '✨', bgColor: '#E0F7FA', textColor: '#006064' },
  { id: 1, label: 'Still Fine',     emoji: '🙂', bgColor: '#F1F8E9', textColor: '#33691E' },
  { id: 2, label: 'Getting Iffy',   emoji: '😅', bgColor: '#FFF8E1', textColor: '#F57F17' },
  { id: 3, label: 'Yikes...',       emoji: '😬', bgColor: '#FBE9E7', textColor: '#BF360C' },
  { id: 4, label: 'SEND HELP',      emoji: '💀', bgColor: '#EFEBE9', textColor: '#3E2723' },
] as const

export type Stage = (typeof STAGES)[number]
