const currentPath = window.location.pathname;

export const menu = [
    {
        title: "Home",
        url: "/",
        isActive: currentPath === "/"
    },
    {
        title: "Projects",
        url: "/projects",
        isActive: currentPath === "/projects"
    },
    {
        title: "About us",
        url: "/about",
        isActive: currentPath === "/about"
    },
]
