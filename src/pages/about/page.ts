import { Bg } from "@components/bg";
import { headerSection } from "@templates/header";
import { setSEO } from "@/utils/seo";

const About = () => {
    // Set SEO metadata
    setSEO({
        title: "About | " + import.meta.env.VITE_APP_NAME,
        description: "Sophat LEAT, also known as PPhat. Sophat Leat works as a Senior Front-end Developer at TURBOTECH CO., LTD, and as a Freelance UI/UX Designer",
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
            <div class="mt-6 text-lg">
                <p>Sophat LEAT, also known as PPhat. Sophat Leat works as a Senior Front-end Developer at TURBOTECH CO., LTD, and as a Freelance UI/UX Designer.</p>
            </div>
        </div>
    `);
};

export default About;