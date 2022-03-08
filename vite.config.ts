import { defineConfig } from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from "vite-plugin-windicss";
import vue from "@vitejs/plugin-vue";
import path from "path";

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/core/components') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src/core/constants') },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/core/layouts') },
      { find: '@use', replacement: path.resolve(__dirname, 'src/core/use') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/core/utils') },
      { find: '@modules', replacement: path.resolve(__dirname, 'src/modules') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
    ]
  },
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/core/components'],
      resolvers: [ElementPlusResolver()],
    })
  ],
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  },
});
