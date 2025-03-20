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
        target: 'http://192.168.0.63:5000', // Flask backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: Remove /api prefix if needed
      }
    }
  }
})
