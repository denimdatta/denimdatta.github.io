/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react()
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: "./tst/setup.ts",
        coverage: {
            provider: 'v8', // or 'istanbul'
            reporter: ['text', 'json', 'html'], // Reporters for output formats
            // Optional: Specify files to include/exclude from coverage report
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['src/main.tsx'],
        },
    }
})
