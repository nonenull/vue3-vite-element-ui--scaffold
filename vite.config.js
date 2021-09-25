import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

export default defineConfig({
    plugins: [vue()],
    base: './',
    resolve: {
        alias: {
            '~': resolve(__dirname, './'),
            '@': resolve(__dirname, 'src'),
            '_v': resolve(__dirname, 'src/components'),
        },
    },
    server: {
        fs: {
            allow: [__dirname],
        },
        proxy: {
            '/api': {
                target: 'http://localhost:5000/api',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
});
