import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'maxvoltaexim.com',
      'www.maxvoltaexim.com'
    ]
  },
  preview: {
    allowedHosts: [
      'maxvoltaexim.com',
      'www.maxvoltaexim.com'
    ]
  }
})
