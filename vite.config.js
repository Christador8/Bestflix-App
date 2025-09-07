import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // <-- use root path for Vercel deployment
  plugins: [react()],
});
