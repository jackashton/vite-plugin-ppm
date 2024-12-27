import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  sourcemap: true,
  dts: true,
  clean: true,
  outDir: 'dist',
  target: 'esnext',
  external: ['vite', 'ppm-parser'],
});
