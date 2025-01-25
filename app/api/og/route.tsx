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
          background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Enhanced Gradient Orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(35, 134, 54, 0.3) 0%, rgba(35, 134, 54, 0.1) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            transform: 'rotate(-10deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(46, 160, 67, 0.25) 0%, rgba(46, 160, 67, 0.08) 45%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(90px)',
            transform: 'rotate(15deg)',
          }}
        />
        
        {/* Additional ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '1000px',
            height: '1000px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(35, 134, 54, 0.05) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Content with enhanced styling */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '16px',
            marginBottom: 40,
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 70,
              fontWeight: 500,
              color: '#ffffff',
              fontFamily: 'Inter',
            //   textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Perlify
          </div>
          <div
            style={{
              padding: '4px 12px',
              fontSize: '16px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.8)',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.05em',
              marginLeft: '4px',
              marginBottom: '6px',
            }}
          >
            beta
          </div>
        </div>
        
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#9ca3af',
            textAlign: 'center',
            maxWidth: '550px',
            lineHeight: 1.4,
            position: 'relative',
            zIndex: 10,
            textShadow: '0 2px 8px rgba(0,0,0,0.1)',
            letterSpacing: '-0.01em',
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