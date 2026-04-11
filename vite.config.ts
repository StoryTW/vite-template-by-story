import path from 'node:path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type UserConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode, command }) => {
  const isDev = command === 'serve';
  const isVisualiser = mode === 'visualizer';

  const config: UserConfig = {
    plugins: [
      react(),
      svgr(),
      isDev && checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint ./src',
          useFlatConfig: true,
        },
      }),
    ].filter(Boolean),

    resolve: {
      tsconfigPaths: true,

      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    css: {
      devSourcemap: isDev,

      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/mixins.scss" as *;',
        },
      },
    },

    build: {
      rolldownOptions: {
        plugins: [
          isVisualiser && visualizer({
            filename: 'dist/stats.html',
            template: 'treemap',
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ].filter(Boolean),

        output: {
          codeSplitting: {
            groups: [
              {
                test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
                name: 'react-core',
              },
              // {
              //   test: /node_modules[\\/]react-router/,
              //   name: 'router',
              // },
              // {
              //   test: /node_modules[\\/]axios/,
              //   name: 'http',
              // },
            ],
          },
        },
      },
    },
  };

  return config;
});
