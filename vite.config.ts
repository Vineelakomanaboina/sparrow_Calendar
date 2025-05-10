import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sparrow_Calendar/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
