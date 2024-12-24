export interface OscillatorOptions {
    phase?: number;
    offset?: number;
    frequency?: number;
    amplitude?: number;
}


export interface NodePoint {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export class Node implements NodePoint {
    x: number = 0;
    y: number = 0;
    vx: number = 0;
    vy: number = 0;
}

export interface LineOptions {
    spring: number;
}

export interface Position {
    x: number;
    y: number;
}

export interface Config {
    debug: boolean;
    friction: number;
    trails: number;
    size: number;
    dampening: number;
    tension: number;
}


export interface ExtendedCanvasRenderingContext2D extends CanvasRenderingContext2D {
    running: boolean;
    frame: number;
}