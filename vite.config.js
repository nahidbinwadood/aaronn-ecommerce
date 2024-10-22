import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // This should match the baseUrl and paths in jsconfig.json
    },
  },
  plugins: [react()],
});
