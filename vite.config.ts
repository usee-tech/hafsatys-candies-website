import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // or '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hafsatys-candies-website/', // <-- ADD THIS LINE EXACTLY
})
