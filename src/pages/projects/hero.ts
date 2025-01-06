import { effectButton } from "../home/hero"

const search = (() => {
    return (
        `<div class="mx-auto flex items-center mt-5 gap-2 w-full justify-center max-w-3xl">
            <div class="flex relative gap-1 w-full sm:w-auto">
                <input id="project-search" class="pl-9 peer w-full px-5 text-sm py-1 sm:py-1.5 border bg-background/10 border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent" type="text" placeholder="Search projects...">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-foreground peer-focus:text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <div>
                    ${effectButton}
                </div>
            </div>
            <button type="button" class="px-4 gap-2 active:bg-primary/10 inline-flex items-center py-1.5 text-xs sm:text-sm border border-foreground/10 rounded-lg min-w-fit drop-shadow-md backdrop-blur-xl">
                <span class="truncate">Search</span>
                ${effectButton}
            </button>
        </div>`
    )
})()


export const heroSection = (() => {
    const title = `<span class="text-foreground font-head">Explore My Latest</span> <span class="text-primary font-head">Projects and Works </span>`;
    const description = "A list of projects I've worked on recently.";

    return (
        `<section class="max-w-6xl sm:min-h-[35rem] mt-16 md:mt-15 flex-col flex justify-center md:flex-row items-center mx-auto w-full px-5">
            <div class="grid grid-cols-1 gap-5">
                <h1 class="text-5xl flex flex-col gap-5 lg:text-7xl text-center max-w-4xl text-foreground font-bold -translate-x-1">
                    ${title}
                </h1>
                <p class="text-foreground sm:text-lg text-xl text-center">${description}</p>
                ${search}
            </div>
        </section>`
    );
})();