import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Make sure this matches your repo name
  build: {
    outDir: 'dist', // Make sure the build folder is correctly set
  },
});
