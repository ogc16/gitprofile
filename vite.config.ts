import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import CONFIG from './gitprofile.config';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: CONFIG.base || '/gitprofile/',
  plugins: [
    react(),
    {
      name: 'html-inject-meta',
      transformIndexHtml(html) {
        return html
          .replace(/<%- metaTitle %>/g, CONFIG.seo?.title ?? '')
          .replace(/<%- metaDescription %>/g, CONFIG.seo?.description ?? '')
          .replace(/<%- metaImageURL %>/g, CONFIG.seo?.imageUrl ?? '');
      },
    },
    ...(CONFIG.enablePWA
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            workbox: { navigateFallback: undefined },
            includeAssets: ['logo.png'],
            manifest: {
              name: 'Portfolio',
              short_name: 'Portfolio',
              description: 'Personal Portfolio',
              theme_color: '#fc055b', // ✨ Added: Matches your Procyon primary color
              background_color: '#ffffff', // ✨ Added: For the mobile splash screen
              icons: [
                {
                  src: 'logo.png',
                  sizes: '64x64 32x32 24x24 16x16',
                  type: 'image/png',
                },
                {
                  src: 'logo192.png',
                  sizes: '192x192',
                  type: 'image/png',
                },
                {
                  src: 'logo512.png',
                  sizes: '512x512',
                  type: 'image/png',
                },
              ],
            },
          }),
        ]
      : []),
  ],
  define: {
    CONFIG: JSON.stringify(CONFIG),
  },
  build: {
    outDir: 'docs', 
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});