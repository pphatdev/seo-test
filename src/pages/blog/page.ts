import { Bg } from "@components/bg";
import { headerSection } from "@templates/header";
import { setSEO } from "@/utils/seo";

const Blog = () => {
    // Set SEO metadata
    setSEO({
        title: "Blog | " + import.meta.env.VITE_APP_NAME,
        description: "Blog posts and articles",
        metaTags: [
            {
                name: "description",
                content: "Blog posts by " + import.meta.env.VITE_APP_NAME
            }
        ]
    });

    // Render page content
    return Bg(`
        ${headerSection}
        <div class="max-w-6xl mx-auto px-5 py-10">
            <h1 class="text-4xl font-bold">Blog</h1>
            <!-- Add blog listing content here -->
        </div>
    `);
};

export default Blog;