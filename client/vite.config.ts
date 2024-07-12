import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import config from 'core/src/config/mergedConfig.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    port: config.ports.client
  }
})
