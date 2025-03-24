import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

// Export the Vite configuration
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // Suppress warnings from dependencies using deprecated Sass features
                quietDeps: true
            },
        },
        postcss: {
            plugins: [
                autoprefixer(),
            ],
        },
    },
});