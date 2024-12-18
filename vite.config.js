import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/animal-fun-fact/', // Adaugă numele repo-ului aici
});