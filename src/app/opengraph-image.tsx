import { ImageResponse } from 'next/og'
import { Logo } from '~/components/logo'

const size = {
  width: 1200,
  height: 630,
}

const Image = async () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: '96px',
          fontWeight: '600',
          lineHeight: '1.2em',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo style={{ width: 1200, height: 300 }} />
      </div>
    ),
    {
      ...size,
    },
  )
}

export default Image
