import { writeFileSync } from 'fs';
import { join } from 'path';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://new-pphat.netlify.app';
const today = new Date().toISOString().split('T')[0];

// Known routes in the application
const routes = [
    { path: '/', changefreq: 'weekly', priority: 1.0 },
    { path: '/gallery', changefreq: 'monthly', priority: 0.8 },
    { path: '/faq', changefreq: 'monthly', priority: 0.7 },
];

function generateSitemap() {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        `;

    // Add each route
    routes.forEach(route => {
        sitemap += `
        <url>
            <loc>${baseUrl}${route.path}</loc>
            <lastmod>${today}</lastmod>
            <changefreq>${route.changefreq}</changefreq>
            <priority>${route.priority}</priority>
        </url>
        `;
    });

    sitemap += `</urlset>`;

    // Write to file
    const outputPath = join(__dirname, '../../public/sitemap.xml');
    writeFileSync(outputPath, sitemap);
    console.log('Sitemap generated at:', outputPath);
}

// Run the function
generateSitemap();