import { Bg } from "@components/bg";
import { headerSection } from "@templates/header";
import { setSEO } from "@/utils/seo";
import { heroSection } from "./hero";
// import { blogs } from "./blogs";

const Blogs = async () => {
    // Set SEO metadata
    setSEO({
        title: "Blogs | " + import.meta.env.VITE_APP_NAME,
        description: "Discover the various projects and works by " + import.meta.env.VITE_APP_NAME,
        metaTags: [
            {
                name: "description",
                content: "Discover the various projects and works by " + import.meta.env.VITE_APP_NAME
            }
        ]
    });
    // ${await blogs}

    // Render page content
    return Bg(`
        ${headerSection}
        ${heroSection}
        <div class="max-w-6xl mx-auto px-5 py-10">
            <h1 class="text-4xl font-bold">Blogs</h1>

        </div>
    `);
};

export default Blogs;