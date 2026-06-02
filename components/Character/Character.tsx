// Character.tsx — Scrubby SVG character with dirt stages 0-4

'use client'

import styles from './Character.module.css'
import { STAGES } from './stages'

interface CharacterProps {
  stage: number // 0-4
}

export default function Character({ stage }: CharacterProps) {
  const isStage4 = stage === 4
  const isStage0 = stage === 0
  const dirtClass = styles[`dirt-${stage}` as keyof typeof styles]
  const wrapperClass = isStage4 ? styles.shake : styles.character

  return (
    <div className={styles.characterWrapper}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={wrapperClass}
        aria-label={`Scrubby: ${STAGES[stage].label}`}
      >
        {/* Body */}
        <ellipse cx="100" cy="130" rx="45" ry="50" fill="#FFCC80" />

        {/* Head */}
        <circle cx="100" cy="75" r="38" fill="#FFCC80" />

        {/* Eyes */}
        <circle cx="87" cy="70" r="6" fill="#333" />
        <circle cx="113" cy="70" r="6" fill="#333" />
        {/* Eye shine */}
        <circle cx="89" cy="68" r="2" fill="white" />
        <circle cx="115" cy="68" r="2" fill="white" />

        {/* Mouth — changes with stage */}
        {stage <= 1 && (
          <path d="M88 85 Q100 95 112 85" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}
        {stage === 2 && (
          <path d="M88 88 Q100 88 112 88" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}
        {stage >= 3 && (
          <path d="M88 92 Q100 83 112 92" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}

        {/* Arms */}
        <ellipse cx="58" cy="125" rx="12" ry="28" fill="#FFCC80" transform="rotate(-15 58 125)" />
        <ellipse cx="142" cy="125" rx="12" ry="28" fill="#FFCC80" transform="rotate(15 142 125)" />

        {/* Legs */}
        <ellipse cx="85" cy="178" rx="14" ry="18" fill="#FFCC80" />
        <ellipse cx="115" cy="178" rx="14" ry="18" fill="#FFCC80" />

        {/* === DIRT OVERLAYS (opacity changes with stage) === */}
        <g className={dirtClass}>
          {/* Smudge on face */}
          <ellipse cx="95" cy="80" rx="10" ry="7" fill="#8D6E63" opacity="0.5" />
          {/* Arm smudge */}
          <ellipse cx="62" cy="120" rx="7" ry="5" fill="#8D6E63" opacity="0.4" />
          {/* Body spots */}
          <circle cx="90" cy="140" r="5" fill="#795548" opacity="0.4" />
          <circle cx="110" cy="150" r="4" fill="#795548" opacity="0.3" />
          {/* Stink lines */}
          {stage >= 2 && (
            <>
              <line x1="55" y1="55" x2="48" y2="35" stroke="#A5D6A7" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              <line x1="65" y1="48" x2="60" y2="28" stroke="#A5D6A7" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              <line x1="145" y1="55" x2="152" y2="35" stroke="#A5D6A7" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            </>
          )}
          {/* Stage 3-4: flies */}
          {stage >= 3 && (
            <>
              <circle cx="40" cy="60" r="3" fill="#555" />
              <circle cx="160" cy="50" r="3" fill="#555" />
              <line x1="36" y1="58" x2="30" y2="52" stroke="#555" strokeWidth="1" />
              <line x1="44" y1="58" x2="50" y2="52" stroke="#555" strokeWidth="1" />
              <line x1="156" y1="48" x2="150" y2="42" stroke="#555" strokeWidth="1" />
              <line x1="164" y1="48" x2="170" y2="42" stroke="#555" strokeWidth="1" />
            </>
          )}
        </g>

        {/* Stage 0: sparkles */}
        {isStage0 && (
          <g className={styles.sparkle}>
            <text x="30" y="50" fontSize="18">✨</text>
            <text x="150" y="45" fontSize="14">✨</text>
            <text x="155" y="160" fontSize="12">⭐</text>
          </g>
        )}
      </svg>
    </div>
  )
}
