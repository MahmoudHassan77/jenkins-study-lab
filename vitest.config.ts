import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.setup.ts',
    reporters: [
      ['vitest-junit', { outputFile: 'test-results/junit.xml' }]
    ],
  },
})
