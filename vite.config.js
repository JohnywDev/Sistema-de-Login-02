import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Sistema-de-Login02/', // Coloque o nome do seu repositório aqui
})