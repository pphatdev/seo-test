import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://new-pphat.netlify.app';

// Function to generate image sitemap
export async function generateImageSitemap() {
    try {
        // Path to your gallery images
        const imageDir = join(process.cwd(), 'public', 'assets', 'gallery', 'WEBP');

        // Get all image files with type safety
        const imageFiles = readdirSync(imageDir)
            .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

        if (imageFiles.length === 0) {
            console.warn('No image files found in directory:', imageDir);
        }

        // Generate sitemap with proper indentation
        const sitemap = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
            '  <url>',
            `    <loc>${baseUrl}/gallery</loc>`,
            imageFiles.map(file => {
                const imageName = file.split('.')[0];
                return [                    '    <image:image>',
                    `      <image:loc>${baseUrl}/assets/gallery/WEBP/${file}</image:loc>`,
                    `      <image:title>Sophat LEAT - ${imageName}</image:title>`,
                    '    </image:image>'
                ].join('\n');
            }).join('\n'),
            '  </url>',
            '  <url>',
            `    <loc>${baseUrl}</loc>`,            '    <image:image>',
            `      <image:loc>${baseUrl}/assets/avatars/hero.webp</image:loc>`,
            '      <image:title>Sophat LEAT - Senior Front-end Developer and UI/UX Designer</image:title>',
            '      <image:caption>Profile photo of Sophat LEAT</image:caption>',
            '    </image:image>',
            '  </url>',
            '</urlset>'
        ].join('\n');

        // Write to file with error handling
        const outputPath = join(process.cwd(), 'public', 'image-sitemap.xml');
        writeFileSync(outputPath.replace(/\s+/g, ""), sitemap, 'utf-8');
        console.log('✅ Image sitemap generated successfully.');
    } catch (error) {
        console.error('❌ Error generating sitemap:', error instanceof Error ? error.message : error);
        throw error;
    }
}

// Run the function
generateImageSitemap().catch(console.error);