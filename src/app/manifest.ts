import { type MetadataRoute } from 'next'
import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME } from './constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_DEFAULT_TITLE,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#fff',
    theme_color: '#ff6900',
    icons: [
      {
        src: '/icon?v=2',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
