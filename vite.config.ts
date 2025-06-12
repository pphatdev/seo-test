import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import sitemapPlugin from 'vite-plugin-sitemap';
import { menu } from './src/components/menu';
// import { ImageSitemap } from './src/utils/seo/sitemap/image';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dynamicRoutes = menu.map(name => {
    if (!name.url.includes('http')) {
        return name.url;
    }
}).filter((route): route is string => route !== undefined);

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
    build: {
        rollupOptions: {
            external: ["sharp"],
            output: {
                manualChunks: {}
            }
        },
        chunkSizeWarningLimit: 1000, // Size in kB
    },
    plugins: [
        ViteImageOptimizer({
            /* pass your config */
        }),
        sitemapPlugin({
            hostname: 'https://about.pphat.top',
            dynamicRoutes
        }),
        // ImageSitemap({
        //     content: './public/**/*.{jpg,jpeg,png,gif,webp}',
        //     outputPath: './public/sitemap-images.xml',
        // })
    ],
}