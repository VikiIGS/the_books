import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/the_books/',
  plugins: [react()],
  server: {
    port: 6509, //
    proxy: {
      '/api': 'http://127.0.0.1:8000',
    },
  },
})
