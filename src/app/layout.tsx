import '~/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
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
    <html lang="jp" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
