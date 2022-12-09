import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT
  
  return defineConfig({

    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    // 服务器配置
    server: {
      host: "localhost",
      port: 3000, // 端口号
      open: false, // 是否打开新窗口
      strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      https: false, // 是否开启https
    },
    // 打包限制
    build: {
      chunkSizeWarningLimit: 1800,
    }
})
}
