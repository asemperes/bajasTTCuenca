// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cuencamotor4x4.com',
  // Genera nosotros.html en lugar de nosotros/index.html.
  // Junto con "cleanUrls" de vercel.json, /nosotros.html redirige a /nosotros
  build: { format: 'file' },
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
