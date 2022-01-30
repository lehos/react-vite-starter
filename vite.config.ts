import path from 'path'

import svgr from '@honkhonk/vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const SOURCE_PATH = path.resolve(__dirname, 'src')

export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
  plugins: [
    svgr(),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': SOURCE_PATH,
    },
  },
})
