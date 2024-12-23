import { logo } from "@/assets/icons/logo"
import { menu } from "@/components/menu"
import { themeSwitcherButton } from "@/components/theme"

export const headerSection = (()=> {
    return(
        `<header class="flex justify-between items-center w-full px-2 md:px-5 inset-x-0 sticky pt-4 z-50 max-w-6xl mx-auto">
            <div class="px-2 flex py-2 rounded-full bg-foreground/5 backdrop-blur-xl text-foreground">
                ${logo()}
            </div>
            <nav class="mx-auto hidden sm:flex w-full max-w-md px-5 py-2 rounded-full bg-foreground/5 backdrop-blur-xl">
                <ul class="inline-flex gap-2 justify-center w-full">
                    ${menu.map(item=> {
                        return (
                            `<li class="font-normal rounded-full p-2 px-4 ${item.isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}">
                                <a href="${item.url}" class="font-medium">${item.title}</a>
                            </li>`
                        )
                    }).join("")}
                </ul>
            </nav>
            <div class="px-2 py-2 flex rounded-full items-center justify-center bg-foreground/5 backdrop-blur-xl">
                ${themeSwitcherButton}
            </div>
        </header>`
    )
})()