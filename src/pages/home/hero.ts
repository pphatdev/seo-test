const download = (() => {
    return (
        ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
        </svg>`
    )
})()

const effectButton = (() => {
    return (
        `<div class="absolute inset-0 items-end h-5 overflow-hidden rounded-full translate-y-7 sm:translate-y-8 group-hover:flex">
            <div class="flex -mb-px h-[1px] w-full">
                <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div class="-ml-[99%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
        </div>`
    )
})()

const buttonList = [
    {
        id: 1,
        name: 'Download CV',
        target: "_blank",
        href: "https://drive.google.com/file/d/10rCDGaZmPShEig1ffibrQaec6N8tsRfS/view?usp=sharing",
        icon: download,
        hasEffects: false
    },
    {
        id: 2,
        name: 'Download CV',
        target: "_blank",
        href: "https://drive.google.com/file/d/10rCDGaZmPShEig1ffibrQaec6N8tsRfS/view?usp=sharing",
        icon: download,
        hasEffects: true
    },
    {
        id: 2,
        name: 'Download CV',
        target: "_blank",
        href: "https://drive.google.com/file/d/10rCDGaZmPShEig1ffibrQaec6N8tsRfS/view?usp=sharing",
        icon: download,
        hasEffects: true
    },
]

const buttons = (() => {
    return (
        `${buttonList.map(item => {
            return (
                `<li>
                    <a
                        target="${item?.target}"
                        href="${item?.href}"
                        class="px-4 gap-2 active:bg-primary/10 inline-flex items-center py-1.5 text-xs sm:text-sm border border-foreground/10 rounded-lg min-w-fit drop-shadow-md backdrop-blur-xl"
                    >
                        <span>${item?.name}</span>
                        ${item?.icon}
                        ${item.hasEffects ? effectButton : ""}
                    </a>
                </li>`
            )
        }).join('')}`
    )
})()

const profile = (() => {
    return (
        `<div class="shrink-0 relative -mt-10">
            <img src="/assets/avatars/hero.webp" alt="Leat Sophat" width="200" height="200" loading="lazy" class="w-96 h-auto drop-shadow-lg">
            <div class="absolute bottom-0 z-50 items-end h-full bg-red-500 overflow-hidden rounded-full  translate-y-7 sm:translate-y-8 group-hover:flex">
                <div class="flex -mb-px h-[1px] w-full">
                    <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div class="-ml-[99%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                </div>
            </div>
        </div>`
    )
})()


export const heroSection = (() => {
    const title = import.meta.env.VITE_APP_NAME
    const description = import.meta.env.VITE_APP_DESCRIPTION
    const lastName = title.split(" ")[0]
    const firstName = title.split(" ")[1]

    return (
        `<section class="max-w-6xl min-h-[35rem] mt-10  md:mt-15 flex-col flex md:flex-row items-center justify-between mx-auto w-full px-5">
            <div class="w-full flex flex-col gap-5">
                <div>
                    <span class="font-medium text-base md:text-lg text-foreground leading-5">PPhatDev</span>
                    <h1 class="text-5xl lg:text-7xl text-foreground font-black -translate-x-1 uppercase before:content-['Hi!,_I_am_'] before:capitalize">${lastName} <span class="text-primary">${firstName}</span></h1>
                </div>
                <p class="text-foreground sm:text-lg">${description}</p>
                <nav>
                    <ul class="inline-flex gap-2">
                        ${buttons}
                    </ul>
                </nav>
            </div>
            ${profile}
        </section>`
    )
})()