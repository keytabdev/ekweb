import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Eklavya Pricing - Affordable Plans for Everyone'
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
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Eklavya Pricing
        </div>
        <div
          style={{
            fontSize: 36,
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.2,
            opacity: 0.95,
          }}
        >
          Affordable Plans for Everyone
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            marginTop: '30px',
            opacity: 0.9,
          }}
        >
          💰 Flexible Options • 🎯 Value-Driven • 🚀 Start Free
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 