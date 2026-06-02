// ShareCard.tsx — Hidden 9:16 card rendered by html2canvas for sharing

import { forwardRef } from 'react'
import Character from '../Character/Character'
import { STAGES } from '../Character/stages'
import styles from './ShareCard.module.css'

interface ShareCardProps {
  stage: number
}

const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(({ stage }, ref) => {
  const stageData = STAGES[stage]

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{ backgroundColor: stageData.bgColor }}
    >
      <p className={styles.appName} style={{ color: stageData.textColor }}>
        scrubby
      </p>
      <div className={styles.characterArea}>
        <Character stage={stage} />
      </div>
      <p className={styles.stageText} style={{ color: stageData.textColor }}>
        {stageData.emoji} {stageData.label}
      </p>
      <p className={styles.watermark}>scrubby.app</p>
    </div>
  )
})

ShareCard.displayName = 'ShareCard'
export default ShareCard
