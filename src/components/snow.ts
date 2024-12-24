import { SnowConfig, SnowTheme } from "@/types/snow";

declare global {
    interface Window {
        SnowTheme: SnowTheme;
    }
}

export const Snow = () => {
    // Create and inject CSS
    const styleSheet: HTMLStyleElement = document.createElement("style");
    styleSheet.textContent = `
        .snowflake {
            position: fixed;
            top: -10px;
            color: white;
            font-size: 1em;
            font-family: Arial, sans-serif;
            text-shadow: 0 0 5px rgba(255,255,255,0.7);
            filter: drop-shadow(0 0 10px white);
            cursor: default;
            user-select: none;
            z-index: 999999;
            pointer-events: none;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }

        @keyframes snowfall {
            0% {
                transform: translateY(0vh) translateX(0) rotate(0deg);
            }
            100% {
                transform: translateY(100vh) translateX(20px) rotate(360deg);
            }
        }

        #snow-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 999999;
        }
    `;
    document.head.appendChild(styleSheet);

    // Configuration options
    const config: SnowConfig = {
        snowflakes: ['❄', '❅', '❆'],
        density: 50,
        interval: 200,
        minSize: 0.8,
        maxSize: 1.5,
        minDuration: 5,
        maxDuration: 15,
        wind: 20,
        zIndex: 999999
    };

    // Create container for snowflakes
    const container: HTMLDivElement = document.createElement('div');
    container.id = 'snow-container';
    document.body.appendChild(container);

    // Create a single snowflake
    function createSnowflake(): void {
        if (container.children.length >= config.density) return;

        const snowflake: HTMLDivElement = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = config.snowflakes[Math.floor(Math.random() * config.snowflakes.length)];

        // Random properties
        const startPositionX: number = Math.random() * window.innerWidth;
        const size: number = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        const duration: number = Math.random() * (config.maxDuration - config.minDuration) + config.minDuration;
        // const windOffset: number = Math.random() * config.wind;

        // Apply styles
        Object.assign(snowflake.style, {
            left: `${startPositionX}px`,
            transform: `scale(${size})`,
            opacity: Math.random() * 0.6 + 0.4,
            animation: `snowfall ${duration}s linear infinite`
        });

        // Add to container and set cleanup
        container.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), duration * 1000);
    }

    // Start snowfall effect
    function startSnowfall(): void {
        // Create initial batch
        for (let i: number = 0; i < 10; i++) createSnowflake();

        // Continue creating snowflakes
        setInterval(createSnowflake, config.interval);
    }

    // Handle window resize
    window.addEventListener('resize', (): void => {
        const snowflakes: HTMLCollectionOf<Element> = container.getElementsByClassName('snowflake');
        for (let flake of snowflakes) {
            if (parseInt((flake as HTMLElement).style.left) > window.innerWidth) {
                (flake as HTMLElement).style.left = `${Math.random() * window.innerWidth}px`;
            }
        }
    });

    // Start the effect
    startSnowfall();

    // Expose configuration to window for customization
    window.SnowTheme = {
        config,
        container,
        start: startSnowfall,
        createSnowflake
    };
};