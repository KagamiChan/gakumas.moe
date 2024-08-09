import '@fontsource/ibm-plex-sans-jp/400.css'
import '@fontsource/ibm-plex-sans-jp/600.css'

import '~/styles/globals.css'

import { type Metadata } from 'next'
import { APP_DEFAULT_TITLE, APP_DESCRIPTION } from './constants'

export const metadata: Metadata = {
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  keywords: [
    '学園アイドルマスター',
    '学マス',
    '計算機',
    '初星学園',
    'Gakumas',
    'THE IDOLM@STER',
    'アイドルマスター',
    'Calculator',
    'Gakuen Idolmaster',
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  )
}
