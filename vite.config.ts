/*
 * @Description: 配置文件
 * @Author: 简艾
 * @Email: 137333@163.com
 * @Date: 2017-12-15 16:51:10
 * @LastEditTime: 2024-07-30 19:37:31
 * @LastEditors: 简艾
*/
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: ["chrome58"],
    minify: "terser",
    rollupOptions: {
      output: {
        format: "iife",
        name: "output.js",
      },
    },
    sourcemap: false,
    assetsInlineLimit: 4096,
    terserOptions: {
      compress: {
        // 打包自动删除console
        drop_console: true,
        drop_debugger: true,
      },
      keep_classnames: true,
      toplevel: true,
      ie8: true,
    },
  },
});
