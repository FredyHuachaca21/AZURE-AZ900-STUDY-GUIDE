import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AZURE-AZ900-STUDY-GUIDE/',
  server: {
    port: 5173,
    open: true
  }
})
