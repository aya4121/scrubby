// share.ts — Generate PNG from ShareCard and share or download

export async function shareCard(element: HTMLElement, stageLabel: string): Promise<void> {
  const html2canvas = (await import('html2canvas')).default

  const canvas = await html2canvas(element, {
    backgroundColor: null,
    scale: 2,
    useCORS: true,
  })

  const dataUrl = canvas.toDataURL('image/png')
  const shareText = `My scrubby is "${stageLabel}" 😬 Track yours at scrubby.app`

  if (navigator.share) {
    try {
      const blob = await (await fetch(dataUrl)).blob()
      const file = new File([blob], 'scrubby.png', { type: 'image/png' })

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ title: 'scrubby', text: shareText, files: [file] })
        return
      }

      await navigator.share({ title: 'scrubby', text: shareText, url: 'https://scrubby.app' })
      return
    } catch (e: any) {
      if (e?.name === 'AbortError') return
    }
  }

  // Last resort: open image in new tab → long press to save
  const blob = await (await fetch(dataUrl)).blob()
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
}
