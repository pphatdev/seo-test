import { setSEO } from "../../utils/seo/index";

const meta = {
    title: 'Home Page Title',
    description: 'Description for Home Page',
    // metaTags: [],
    // openGraphTags: []

    imageMetaData: {
        url: "path/to/image.jpg",
        title: "Description of the image",
    }
}


const Home = () => {
    setSEO(meta);
    
    return `<h1>Home Page</h1>`;
};

export default Home; 