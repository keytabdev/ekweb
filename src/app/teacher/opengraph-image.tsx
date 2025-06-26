import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Eklavya for Teachers - Smarter Tools, Inspired Teaching'
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
          Eklavya for Teachers
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
          Smarter Tools, Inspired Teaching
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            marginTop: '30px',
            opacity: 0.9,
          }}
        >
          🤖 AI-Powered • 📊 Analytics • ⏱️ Save Time
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 