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
        target: 'https://raptor-recovery-backend.fly.dev', // backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
