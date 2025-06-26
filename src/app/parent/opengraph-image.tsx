import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Eklavya for Parents - Safe Learning That Feels Like Play'
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
          background: 'linear-gradient(135deg, #FFE5E5 0%, #E5F3FF 50%, #E5FFE5 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2D3748',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#00A8C5',
          }}
        >
          Eklavya for Parents
        </div>
        <div
          style={{
            fontSize: 36,
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.2,
            color: '#4A5568',
          }}
        >
          Safe Learning That Feels Like Play
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            marginTop: '30px',
            color: '#5FBE7A',
            fontWeight: '600',
          }}
        >
          🛡️ No Ads • 📱 Stay Involved • 🎮 Gamified Learning
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 