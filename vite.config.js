import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Sistema-de-Login-02/', // Nome exato do seu repositório no GitHub
})