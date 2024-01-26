// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    ssr: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'payrexx-sdk',
      fileName: 'payrexx-sdk',
    },
  },
  plugins: [dts()],
});
