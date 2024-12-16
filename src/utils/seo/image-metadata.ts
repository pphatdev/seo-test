const domain = window.location.origin ?? ""

export type ImageMetaData = {
    title?: string,
    creditText?: string,
    copyrightNotice?: string,
    creator?: Creator,
    acquireLicensePage?: string,
    imagePath?: string
}

interface Creator {
    name?: string;
}

export const imageMetaData = ({
    title,
    creditText,
    copyrightNotice,
    creator,
    acquireLicensePage,
    imagePath
}: ImageMetaData) => {
    return (
        `<script type="application/ld+json">
            {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "contentUrl": "${domain}/${imagePath || ""}",
                "license": "${domain}/license",
                "acquireLicensePage": "${acquireLicensePage || ""}",
                "creditText": "${creditText || ""}",
                "creator": {
                    "@type": "Person",
                    "name": "${creator?.name || 'Unknown'}"
                },
                "copyrightNotice": "${copyrightNotice || 'No copyright notice'}",
                "title": "${title || 'Untitled'}"
            }
        </script>`
    )
}