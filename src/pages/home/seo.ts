import { setSEO } from "@/utils/seo";
import { ProfilePage } from "@/utils/seo/profile";

const homeSEO = () => setSEO({
    title: import.meta.env.VITE_APP_NAME || "Unknown",
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Description for Home Page',
    metaTags: [
        {
            name: "description",
            content: `Author: ${import.meta.env.VITE_APP_NAME}`
        },
        {
            name: "robots",
            content: "noindex, nofollow"
        }
    ],
    profilePage: ProfilePage()
})

export default homeSEO;