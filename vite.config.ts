import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[name]",
        inject: "body-first", // 确保 SVG Sprite 注入到页面
      }),
      viteMockServe({
        mockPath: "mock",
        enable: command === "serve",
      }),
    ],
    resolve: {
      //路径别名
      alias: {
        "@": "/src",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@use "@/styles/global.scss"as *;',
        },
      },
    },
  };
});
