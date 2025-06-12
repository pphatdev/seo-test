const host = import.meta.env.VITE_APP_HOST ?? "about.pphat.top"
const subDomains = [
    "www",
    "v3"
]

export const sameAs = ([] as string[]).concat(
    subDomains.map(sub => `https://${sub}.${host}`)
)