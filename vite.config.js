import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import liveReload from 'vite-plugin-live-reload'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // liveReload('src/*.*', { alwaysReload: true }),
  ],
  server: {
    watch: {
      usePolling: true,
    }
  }
})
