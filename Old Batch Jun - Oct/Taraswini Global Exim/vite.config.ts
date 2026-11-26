import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'taraswiniglobal.com',
      'www.taraswiniglobal.com',
      '.taraswiniglobal.com'
    ]
  },
  preview: {
    host: true,
    allowedHosts: [
      'taraswiniglobal.com',
      'www.taraswiniglobal.com',
      '.taraswiniglobal.com'
    ]
  }
})
