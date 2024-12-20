import { cn } from "@/utils/tailwind-merge"
import avatar from "@assets/base64/avatar.txt?raw"

export const profileMode = (className?: string) => {
    return (
        `<svg class="${cn("w-[22rem] h-full", className)}" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g clip-path="url(#clip0_4_2)">
                <path opacity="0.22" d="M156.013 168.249C162.771 158.465 177.229 158.465 183.987 168.249L267.63 289.338C275.42 300.614 267.348 316 253.643 316H86.357C72.6518 316 64.5803 300.615 72.3695 289.338L156.013 168.249Z" class="dark:fill-[#FFAEB0] fill-[#B93437]"/>
                <rect opacity="0.27" x="-11" y="376.743" width="377.225" height="377.225" rx="188.612" transform="rotate(-46 -11 376.743)" class="dark:fill-[#FF989A] fill-[#CF5557]"/>
                <rect opacity="0.27" y="291.86" width="72.0933" height="303.951" rx="36.0467" transform="rotate(-46 0 291.86)" class="dark:fill-[#FFC9FE] fill-[#B934B7]"/>
                <rect opacity="0.27" x="196.023" y="414.338" width="360.361" height="77.5236" rx="38.7618" transform="rotate(-46 196.023 414.338)" class="dark:fill-[#65FF65] fill-[#34B934]"/>
                <rect width="512" height="512" fill="url(#pattern0_4_2)"/>
            </g>
            <defs>
                <pattern id="pattern0_4_2" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_4_2" transform="scale(0.00217391)"/>
                </pattern>
                <clipPath id="clip0_4_2">
                <rect width="512" height="512" rx="12" fill="white"/>
                </clipPath>
                <image id="image0_4_2" width="460" height="460" xlink:href="${avatar}"/>
            </defs>
        </svg>`
    )
}