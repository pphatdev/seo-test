/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html,vue,svelte}",
        "./src/**/**/*.{js,ts,jsx,tsx,html,vue,svelte}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            fontFamily: {
                default: "Kantumruy Pro, Poppins, sans-serif"
            }
        },
    },
    plugins: [],
}