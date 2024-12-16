import { minify } from "../minify";
import { type ImageMetaData, imageMetaData as setMetaData } from "./image-metadata";

interface MetaTag {
    name: string;
    content: string;
}

interface OpenGraphTag {
    property: string;
    content: string;
}

const generateMetaTags = (
    tags: MetaTag[] = []
): string => {
    return tags.map(tag => `<meta name="${tag.name}" content="${tag.content}">`).join('\n');
};

const generateOpenGraphTags = (
    tags: OpenGraphTag[] = []
): string => {
    return tags.map(tag => `<meta property="${tag.property}" content="${tag.content}">`).join('\n');
};

export const setSEO = ({
    title,
    description,
    metaTags,
    openGraphTags,
    profilePage,
    imageMetaData
}: {
    title: string;
    description: string;
    metaTags?: MetaTag[];
    openGraphTags?: OpenGraphTag[],
    profilePage?: string,
    imageMetaData?: ImageMetaData
}): string => {
    const metaTagString = generateMetaTags(metaTags);
    const openGraphTagString = generateOpenGraphTags(openGraphTags);
    const head =  `
        <title>${title}</title>
        <meta name="description" content="${description}">
        ${metaTagString ?? ""}
        ${openGraphTagString ?? ""}
        ${profilePage ?? ""}
        ${imageMetaData && setMetaData(imageMetaData)}
    `;

    return document.head.innerHTML += minify(head);
};
