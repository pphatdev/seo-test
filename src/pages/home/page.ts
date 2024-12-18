import { Bg as Background } from "@components/bg";
import { renderAsElement as oscillator } from "@components/canvas";
import { headerSection } from "@templates/header";
import homeSEO from "@pages/home/seo";
import { heroSection } from "@pages/home/hero";


const Home = () => {
    homeSEO();
    return Background(`
        ${oscillator}
        ${headerSection}
        ${heroSection}
    `);
};

export default Home;