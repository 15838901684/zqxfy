import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/main.scss"'
      }
    }
  },
  server: {
    host: "localhost",//设置主机名,默认127.0.0.1
    port: 8080,//默认端口号
    open: false,
    proxy: {
      "/sunapi": {
        target: "https://shop.sunofbeach.net/union/shop",//代理目标服务器
        ws: true,
        changeOrigin: true,//是否支持域名转换即跨域
        rewrite: (path) => path.replace(/^\/sunapi/, "")//url路径重写
      }
    }
  }

})
