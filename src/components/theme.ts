import { cn } from "@/utils/tailwind-merge"

export const sun = (className?: string) => {
    return (`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${cn( "size-6 pointer-events-none text-foreground/80", className)}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
    `)
}

export const moon = (className?: string) => {
    return (`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${cn( "size-6 pointer-events-none text-foreground/80", className)}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
    `)
}

export const themeSwitcher = () => {
    const theme = localStorage.getItem('theme') || 'light'
    const htmlElement = document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const toggleTheme = () => {
        if (theme === 'light') {
            htmlElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            return moon()
        } else {
            htmlElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            return sun()
        }
    }

    // Initialize theme on load
    const initTheme = () => {
        if (theme === 'dark' || (!theme && mediaQuery.matches)) {
            htmlElement.classList.add('dark')
            return moon()
        } else {
            htmlElement.classList.remove('dark')
            return sun()
        }
    }

    // Handle system theme changes
    const handleSystemThemeChange = () => {
        mediaQuery.addEventListener('change', (e) => {
            const systemPrefersDark = e.matches
            if (!localStorage.getItem('theme')) {
                if (systemPrefersDark) {
                    htmlElement.classList.add('dark')
                    return moon()
                } else {
                    htmlElement.classList.remove('dark')
                    return sun()
                }
            }
        })
    }

    // Get current theme
    const getCurrentTheme = () => {
        return localStorage.getItem('theme') ||
            (mediaQuery.matches ? 'dark' : 'light')
    }

    return {
        toggleTheme,
        initTheme,
        handleSystemThemeChange,
        getCurrentTheme
    }
}
export const themeSwitcherButton = (() => {
    const { initTheme } = themeSwitcher()
    return (`
        <button class="w-6 h-6 inline-flex items-center justify-center" type="button" aria-label="Toggle theme" data-theme-toggle>
            <span data-theme-icon>
                ${initTheme()}
            </span>
        </button>
    `)
})()

export const handleThemeToggle = () => {
    const themeButton = document.querySelector('[data-theme-toggle]')
    const iconContainer = document.querySelector('[data-theme-icon]')
    const themeManager = themeSwitcher()

    if (themeButton && iconContainer) {

        themeManager.handleSystemThemeChange()

        themeButton.addEventListener('click', () => {
            const currentTheme = themeManager.getCurrentTheme()
            const newTheme = currentTheme === 'light' ? 'dark' : 'light'

            document.documentElement.classList.toggle('dark')
            localStorage.setItem('theme', newTheme)

            iconContainer.innerHTML = newTheme === 'dark' ? moon() : sun()
        })
    }
}
