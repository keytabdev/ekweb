import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'About Eklavya - Revolutionary Educational Platform'
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
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          About Eklavya
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
          Revolutionary Educational Platform
        </div>
        <div
          style={{
            fontSize: 28,
            textAlign: 'center',
            marginTop: '30px',
            opacity: 0.9,
          }}
        >
          Empowering Students, Teachers & Parents
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 