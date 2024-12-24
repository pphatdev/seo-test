export interface SnowConfig {
    snowflakes: string[];
    density: number;
    interval: number;
    minSize: number;
    maxSize: number;
    minDuration: number;
    maxDuration: number;
    wind: number;
    zIndex: number;
}

export interface SnowTheme {
    config: SnowConfig;
    container: HTMLDivElement;
    start: () => void;
    createSnowflake: () => void;
}