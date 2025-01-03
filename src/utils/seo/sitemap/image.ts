import { join } from 'path';
import { writeFileSync } from 'fs';
import path from 'path';
import { Plugin } from 'vite';
import { glob } from 'glob';

interface Image {
    loc: string;
    title: string;
    caption?: string;
    geo_location?: string;
    license?: string;
}

interface ConfigOptions {
    content: string;
    outputPath?: string;
    baseURL?: string;
    env?: "development" | "production";
}

/**
 * Create a Vite plugin that generates an image sitemap based on the provided configuration options.
 */
export const ImageSitemap = (options: ConfigOptions): Plugin => {
    return {
        name: 'image-sitemap',
        configResolved(config) {
            return generateImageSitemap(
                {
                    baseURL: config.env.VITE_APP_URL,
                    outputPath: join('dist', 'sitemap-images.xml'),
                    env: config.env.MODE,
                    ...options,
                }
            );
        },
    };
}


/**
 * Generates an image sitemap based on the provided configuration options.
 */
export function generateImageSitemap({
    content,
    outputPath,
    baseURL,
    env,
}: ConfigOptions): void {
    const images: Image[] = [];
    const imageFiles = glob.sync(`${content}`);
    imageFiles.forEach((imageFile) => {
        // get file name without extension
        const fileName = path.basename(imageFile, path.extname(imageFile));
        const image = {
            loc: baseURL + imageFile.replace(/\\/g, '/').replace('public', ''),
            title: fileName.replace(/-+/g, ' '),
            caption: fileName,
        };
        images.push(image);
    });

    generateImageSitemapFile(images, outputPath ?? join('dist', 'sitemap-images.xml'), env);
}


/**
 * Generates an image sitemap file based on the provided images.
 */
export function generateImageSitemapFile(images: Image[], outputPath: string, env: "development" | "production" = "development"): void {
    const sitemapContent = (
        `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
            ${images.map((image) => (
                `<url>
                    <loc>${image.loc}</loc>
                    <image:image>
                        <image:loc>${image.loc}</image:loc>
                    </image:image>
                    ${image.title? `<image:title>${image.title}</image:title>`: ''}
                    ${image.caption ? `<image:caption>${image.caption}</image:caption>` : ''}
                    ${image.geo_location ? `<image:geo_location>${image.geo_location}</image:geo_location>` : ''}
                    ${image.license ? `<image:license>${image.license}</image:license>` : ''}
                </url>`
            )).join('')}</urlset>`
    );

    return writeFileSync(
        outputPath,
        (env === 'development' ? sitemapContent : sitemapContent.replace(/\s\s+|\n+/g, "")),
        'utf8'
    );
}
