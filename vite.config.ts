import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'


// https://vite.devvite/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths({ root: __dirname })],
})
