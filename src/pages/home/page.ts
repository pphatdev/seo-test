import { Bg as Background } from "@components/bg";
import { renderAsElement as oscillator } from "@components/canvas";
import { setSEO } from "@utils/seo/index";
import { ProfilePage } from "@utils/seo/profile";
import heading from "@templates/header.stub?raw";

const meta = {
    title: 'Home Page Title',
    description: 'Description for Home Page',
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
}

const menu = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Services",
        url: "/",
    },
    {
        title: "Our Project",
        url: "/",
    },
    {
        title: "About us",
        url: "/",
    },
]


const Home = () => {
    setSEO(meta);
    const template  = new Function('menu', `return \`${heading}\``);
    const header    = template(menu);

    return Background(`
        ${oscillator}
        ${header}
        <div class="h-[calc(100vh_-58px)]"></div>
    `);
};

export default Home;