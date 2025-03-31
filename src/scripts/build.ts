console.log("\x1b[36m%s\x1b[0m", "🚀 Starting build process...");
console.log("\x1b[33m%s\x1b[0m", "⚡ Loading configurations...");
console.log(".\n");

export { generateSitemap } from "./generate-sitemap";
export { generateImageSitemap } from "./generate-images-sitemap";
export { generateManifest } from "./generate-manifest";

console.log("\x1b[32m%s\x1b[0m", "✨ Build initialized successfully!\n\n");
