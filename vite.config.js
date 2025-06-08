import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // Chemin d'alias pratique : import "@/..." pointe vers src/...
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },

  // ---------- Build pour WordPress ----------
  build: {
    outDir: 'build',        // dossier de sortie
    emptyOutDir: true,

    rollupOptions: {
      // pas d'index.html → on passe le fichier d’entrée explicitement
      input: path.resolve(__dirname, 'src/main.jsx'),

      output: {
        // un bundle JS / CSS lisible dans WP
        entryFileNames: 'carteCadeau.bundle.js',
        assetFileNames: (asset) =>
          asset.name && asset.name.endsWith('.css')
            ? 'carteCadeau.bundle.css'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
});
