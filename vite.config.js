import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // HATA BURADAYDI: 7002 yerine 5214 (HTTP) kullanıyoruz. Sertifika derdi bitiyor.
        target: 'http://localhost:5214', 
        changeOrigin: true,
        secure: false,
      }
    }
  }
})