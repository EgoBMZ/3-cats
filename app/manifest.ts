import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '3CATS — Software Development & Project Delivery',
    short_name: '3CATS',
    description: 'Ingeniería tecnológica para transformar negocios.',
    start_url: '/',
    display: 'standalone',
    background_color: '#02050F',
    theme_color: '#02050F',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
