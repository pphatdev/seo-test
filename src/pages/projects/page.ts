import { Bg } from "@components/bg";
import { headerSection } from "@templates/header";
import { setSEO } from "@/utils/seo";

const Projects = () => {
    // Set SEO metadata
    setSEO({
        title: "Projects | " + import.meta.env.VITE_APP_NAME,
        description: "Projects page description",
        metaTags: [
            {
                name: "description",
                content: "Projects page for " + import.meta.env.VITE_APP_NAME
            }
        ]
    });

    // Render page content
    return Bg(`
        ${headerSection}
        <div class="max-w-6xl mx-auto px-5 py-10">
            <h1 class="text-4xl font-bold">Projects Page</h1>
            <!-- Add projects page content here -->
        </div>
    `);
};

export default Projects;