/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = {
    VITE_BASE_URL: process.env.VITE_BASE_URL,
    ...loadEnv(mode, process.cwd(), 'VITE_'),
  };
  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['setupTests.ts'],
    },
    base: mode === 'production' ? env.VITE_BASE_URL : '/',
  };
});
