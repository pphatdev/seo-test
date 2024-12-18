import { handleThemeToggle } from "@/components/theme";
import NotFound from "../pages/not-found/page";
import { renderUpDown } from "@/components/updown";

export class Router {
    private routes: Array<{ path: string; component: string | ((...params: any[]) => string) }>;

    constructor(routes: Array<{ path: string; component: string | ((...params: any[]) => string) }>) {
        this.routes = routes;
        this.init();
    }

    private init() {
        window.addEventListener('popstate', () => {
            this.loadRoute(location.pathname);
        });
        this.loadRoute(location.pathname);
    }

    private loadRoute(route: string) {

        const matchedRoute = this.routes.find(r => {
            return r.path === route || /\/:/g.test(r.path)
        });
        if (matchedRoute) {
            const component = typeof matchedRoute.component === 'function'
                ? matchedRoute.component()
                : matchedRoute.component;
            document.getElementById('app')!.innerHTML = component;
        } else {
            document.getElementById('app')!.innerHTML = NotFound();
        }
        document.head.innerHTML += `<link rel="canonical" href="${window.location.href}"/>`
        handleThemeToggle()
        renderUpDown()
    }

    public navigate(path: string) {
        history.pushState({}, '', path);
        this.loadRoute(path);
    }
}
