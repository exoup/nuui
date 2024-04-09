import { defineConfig, mergeConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackBuildConfig } from '@tanstack/config/build'

const config = defineConfig({
    plugins: [react()],
})

export default mergeConfig(
    config,
    tanstackBuildConfig({
        entry: './src/index.js',
        srcDir: './src',
        externalDeps: ['react', 'react/jsx-runtime', 'react-dom'],
    }),
)