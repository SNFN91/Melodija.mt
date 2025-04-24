import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fix for React Router in Vercel
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    open: true
  },
  base: './'
});
