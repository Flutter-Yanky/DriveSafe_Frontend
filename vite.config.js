import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api' : "https://drivesafe-backend.onrender.com/api/v1",
    },
  },
  plugins: [react()],
})
