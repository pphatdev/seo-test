import { minify } from "../minify"
import { sameAs } from "./domain.config"

const domain = window.location.origin ?? ""
const identifier = import.meta.env.VITE_APP_ID ?? ""
const name = import.meta.env.VITE_APP_NAME ?? ""
const description = import.meta.env.VITE_APP_DESCRIPTION ?? ""
const profilePath = import.meta.env.VITE_APP_PROFILE_PATH ?? ""

export const ProfilePage = () => minify(
    `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "dateCreated": "2024-12-23T12:34:00-05:00",
        "dateModified": "2024-12-26T14:53:00-05:00",
        "mainEntity": {
            "@type": "Person",
            "name": "${name}",
            "alternateName": "${name.replace(/\s+/g, '').toLowerCase()}",
            "identifier": "${identifier}",
            "interactionStatistic": [
                {
                    "@type": "InteractionCounter",
                    "interactionType": "https://schema.org/FollowAction",
                    "userInteractionCount": 1
                },
                {
                    "@type": "InteractionCounter",
                    "interactionType": "https://schema.org/LikeAction",
                    "userInteractionCount": 5
                }
            ],
            "agentInteractionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WriteAction",
                "userInteractionCount": 2346
            },
            "description": "${description}",
            "image": "${domain}/${profilePath}",
            "sameAs": ${JSON.stringify(sameAs)}
        }
    } </script>`
)

console.log(ProfilePage());
