import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/peanut2/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.png', '**/*.svg']
  },
  publicDir: 'public'
})
