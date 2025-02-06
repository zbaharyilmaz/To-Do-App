import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Build edilmiş dosyaların çıktı dizini
    emptyOutDir: true,  // Build öncesi `dist` dizinini temizle
  },
});