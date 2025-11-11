import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // call the tailwind plugin factory so Vite/PostCSS processes @tailwind/@apply
  plugins: [react(), tailwindcss()],
})
