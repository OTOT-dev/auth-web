import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'

/** 环境配置目录路径 */
const ENV_DIR_PATH = 'env'
/** 客户端环境可用环境变量的命名前缀 */
const ENV_PREFIX = 'PUBLIC_'
/** 自动导入的ts类型声明文件路径 */
const AUTO_IMPORT_TYPE_FILE_PATH = 'src/types/auto-import.d.ts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, 'env', 'PUBLIC_') }

  return {
    envDir: ENV_DIR_PATH,
    envPrefix: ENV_PREFIX,
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    plugins: [
      react(),
      svgr(),
      AutoImport({
        imports: ['react', 'react-router-dom'],
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
            extension: 'jsx'
          })
        ],
        dts: AUTO_IMPORT_TYPE_FILE_PATH
      })
    ],
    server: {
      host: '0.0.0.0',
      port: Number(process.env.PUBLIC_APP_PORT),
      cors: true,
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: Number(process.env.PUBLIC_APP_PORT)
      },
      proxy: {
        '/ws': {
          target: process.env.PUBLIC_APP_BACKEND,
          changeOrigin: true,
          ws: true
        },
        '/api': {
          target: process.env.PUBLIC_APP_BACKEND,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    },
    define: {
      __APP_NAME__: '"REACT DEMO APP"'
    }
  }
})
