import '@fontsource/ibm-plex-sans-jp/400.css'
import '@fontsource/ibm-plex-sans-jp/600.css'

import '~/styles/globals.css'

import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '初星学園サーポート科',
  description: '『学園アイドルマスター』非公式アシスタント',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
