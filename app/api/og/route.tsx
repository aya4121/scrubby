// app/api/og/route.tsx — Dynamic OGP image generation

import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#E0F7FA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'Arial Black, sans-serif',
        }}
      >
        {/* Left: Character */}
        <div
          style={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: '#FFCC80',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px',
          }}
        >
          🧼
        </div>

        {/* Right: Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
            paddingLeft: '60px',
          }}
        >
          <div
            style={{
              fontSize: '110px',
              fontWeight: '900',
              color: '#006064',
              lineHeight: 1,
            }}
          >
            scrubby
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#00838F',
              marginTop: '20px',
            }}
          >
            your shower buddy 🚿
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#006064',
              opacity: 0.7,
              marginTop: '16px',
            }}
          >
            skip a shower. watch the chaos.
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#006064',
              opacity: 0.45,
              marginTop: '40px',
            }}
          >
            scrubby-ten.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
