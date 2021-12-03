import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            includeAssets: ['favicon.png', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'Sankt Nikolaus',
                short_name: 'Sint',
                description: 'no description needed',
                theme_color: '#d32f2f',
                display: "fullscreen",
                orientation: 'landscape',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    }
                ],
            }
        })
    ]
})
