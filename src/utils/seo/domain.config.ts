const host = window.location.hostname ?? ""
const subDomains = [
    "www",
    "v3"
]

export const sameAs = ([] as string[]).concat(
    subDomains.map(sub => `https://${sub}.${host}`)
)