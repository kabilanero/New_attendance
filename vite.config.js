import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/New_attendance/',   // Base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
