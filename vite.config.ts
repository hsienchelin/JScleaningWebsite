import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      jpg: { quality: 78 },
      jpeg: { quality: 78 },
      png: { quality: 80 },
      webp: { quality: 78 },
    }),
  ],
})
