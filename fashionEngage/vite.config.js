import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000, // Change to your desired port
//     proxy: {
//       '/api': {
//         target: 'http://your-backend-api-server.com',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//  },
// },
  },
})
