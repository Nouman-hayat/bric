import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: {
        // Specify the entry points for your HTML files
        index: '/index.html',
        contact: '/contact.html',
        pricing: '/pricing.html',
        bricpro: '/bricpro.html',
        features: '/features.html',
      },
    },
  },
});
