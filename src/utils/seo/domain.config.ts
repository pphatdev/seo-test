const host = import.meta.env.VITE_APP_HOST ?? "leatsophat.me"
const subDomains = [
    "www",
    "v3"
]

export const sameAs = ([] as string[]).concat(
    subDomains.map(sub => `https://${sub}.${host}`)
)