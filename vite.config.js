import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@templates": path.resolve(__dirname, "./src/templates"),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    rollupOptions: {
        external: [
            "sharp"
        ]
    },
    plugins: [
        ViteImageOptimizer({
          /* pass your config */
        }),
    ],
}