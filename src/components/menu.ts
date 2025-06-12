const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

export const menu = [
    {
        title: "Home",
        url: "/",
        isActive: currentPath === "/"
    },
    {
        title: "Blog",
        url: "/blog",
        isActive: currentPath === "/blog"
    },
    {
        title: "Projects",
        url: "/projects",
        isActive: currentPath === "/projects"
    },
    {
        title: "About us",
        url: "https://about.pphat.top/about/",
        isActive: currentPath === "/about"
    },
]
