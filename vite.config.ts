import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./",  // Esto es clave para que las rutas funcionen en deploy
  plugins: [react()],
});
