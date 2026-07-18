import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const revalidate = 86400;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: '#FCFBF5',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '60px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: '#1C2A44',
            fontFamily: 'serif',
            letterSpacing: '-2px',
            lineHeight: 1.2,
          }}
        >
          Power In The Pause®
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#D6B25E',
            marginTop: 24,
            fontFamily: 'serif',
            fontWeight: 300,
          }}
        >
          A philosophy for modern life
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
