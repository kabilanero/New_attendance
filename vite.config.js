import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Attendance_compiler/',   // Base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
