import { Bg } from "@components/bg";
import { headerSection } from "@templates/header";
import { setSEO } from "@/utils/seo";

const About = () => {
    // Set SEO metadata
    setSEO({
        title: "About | " + import.meta.env.VITE_APP_NAME,
        description: "About page description",
        metaTags: [
            {
                name: "description",
                content: "About page for " + import.meta.env.VITE_APP_NAME
            }
        ]
    });

    // Render page content
    return Bg(`
        ${headerSection}
        <div class="max-w-6xl mx-auto px-5 py-10">
            <h1 class="text-4xl font-bold">About Page</h1>
            <!-- Add about page content here -->
        </div>
    `);
};

export default About;