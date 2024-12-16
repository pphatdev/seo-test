import './style.css'
import { Router } from "./router/render";
import Home from './pages/home/page';
import About from './pages/about/page';
import NotFound from './pages/not-found/page';
import Blog from "./pages/blog/page";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '*', component: NotFound },
];


new Router(routes);

// To navigate programmatically
// router.navigate('/about'); 