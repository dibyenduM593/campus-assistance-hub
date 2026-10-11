import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple Vite config, nothing fancy - just enables React (JSX) support
export default defineConfig({
  plugins: [react()]
})
