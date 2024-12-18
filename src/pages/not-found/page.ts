import { Bg } from "@components/bg";
import { headerSection } from "@templates/header";
import { setSEO } from "@/utils/seo";

const NotFound = () => {
    // Set SEO metadata
    setSEO({
        title: "404 - Page Not Found | " + import.meta.env.VITE_APP_NAME,
        description: "The page you're looking for doesn't exist",
        metaTags: [
            {
                name: "robots",
                content: "noindex"
            }
        ]
    });

    // Render 404 page
    return Bg(`
        ${headerSection}
        <div class="max-w-6xl mx-auto px-5 py-20 text-center">
            <h1 class="text-6xl font-bold mb-4">404</h1>
            <p class="text-xl mb-8">Page Not Found</p>
            <a href="/" class="text-primary hover:underline">Return Home</a>
        </div>
    `);
};

export default NotFound;