import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// Set BASE_PATH=/per_test/ when deploying to GitHub Pages (project site)
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        id: base,
        name: 'Per Test',
        short_name: 'Per',
        description: 'Separate personality quizzes for different shows and movies',
        theme_color: '#0a0e1b',
        background_color: '#0a0e1b',
        display: 'standalone',
        display_override: ['standalone', 'minimal-ui'],
        orientation: 'any',
        scope: base,
        start_url: base,
        lang: 'en',
        categories: ['entertainment'],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,webmanifest}'],
        navigateFallback: 'index.html',
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
  ],
})
