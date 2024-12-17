import { BgEffectLeft, BgEffectRight } from "./bg-effect"

export const Bg = (element: string = "") => {
    return(`
        <div class="overflow-hidden w-full relative">
            <div class="absolute inset-y-0 left-0 -translate-x-1/2">
                ${BgEffectRight}
            </div>
            <div class="absolute inset-y-0 right-0 translate-x-1/2">
                ${BgEffectLeft}
            </div>
            ${element}
        </div>
    `)
}