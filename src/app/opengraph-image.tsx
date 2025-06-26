import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Eklavya - Transforming Learning Through Innovation'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #00A8C5 0%, #5FBE7A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Eklavya
        </div>
        <div
          style={{
            fontSize: 36,
            textAlign: 'center',
            opacity: 0.9,
            maxWidth: '900px',
            lineHeight: 1.2,
          }}
        >
          Transforming Learning Through Innovation
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            marginTop: '30px',
            opacity: 0.8,
          }}
        >
          Interactive • Gamified • AI-Powered
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 