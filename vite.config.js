import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/raptor-recovery-preview",
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://66.241.124.19:8080', // backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
