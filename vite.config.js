import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',          // safe for static hosting
  build: { outDir: 'dist' } // make sure build goes to /dist
})
