import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '40px 80px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          {/* Add your logo SVG here */}
        </div>
        
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            fontStyle: 'normal',
            color: '#fff',
            marginBottom: 20,
            lineHeight: 1.2,
            whiteSpace: 'pre-wrap',
            textAlign: 'center',
          }}
        >
          Perlify<span style={{ color: '#238636' }}>.</span>
        </div>
        
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            textAlign: 'center',
            color: '#888',
            marginTop: 20,
            lineHeight: 1.4,
          }}
        >
          Your fun and insightful window into the world of open source
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
} 