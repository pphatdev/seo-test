/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html,vue,svelte,stub}",
        "./src/**/**/*.{js,ts,jsx,tsx,html,vue,svelte,stub}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                xs: "360px"
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: "hsl(var(--primary))",
                'primary-foreground': "hsl(var(--primary-foreground))",
            },
            fontFamily: {
                default: "Kantumruy Pro, Poppins, sans-serif"
            }
        },
    },
    plugins: [],
}