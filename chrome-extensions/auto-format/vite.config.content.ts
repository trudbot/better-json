import { defineConfig } from 'vite'
import packageJson from './package.json'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const isDev = process.env.NODE_ENV !== 'production'

// bundling the content script using Vite
export default defineConfig({
  define: {
    '__NAME__': JSON.stringify(packageJson.name),
    'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
  },
  plugins: [
    vue()
  ],
  build: {
    outDir: path.resolve(__dirname,'extension/dist/content-scripts'),
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'src/content-scripts/index.ts'),
      name: packageJson.name,
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        extend: true,
      },
    },
  },
})