import fs from 'fs';
import path from 'path';

interface Image {
    src: string
    alt: string
    width: number
    height: number
    link?: string
    caption?: string
}

const publicDir = path.join(process.cwd(), 'public');
const imageDir = path.join(publicDir, 'assets/gallery/WEBP');

export const images: Image[] = fs.readdirSync(imageDir)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({
        src: `/assets/gallery/WEBP/${file}`,
        alt: file.split('.')[0],
        width: 300,
        height: 200,
        link: `/gallery/${file.split('.')[0]}`,
        caption: file.split('.')[0].replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
    }));