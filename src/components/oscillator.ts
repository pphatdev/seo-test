import { Config, ExtendedCanvasRenderingContext2D, LineOptions, Node, OscillatorOptions, Position } from "@/types/oscillator";

class Oscillator {
    private phase: number;
    private offset: number;
    private frequency: number;
    private amplitude: number;
    private value: number = 0;

    constructor(options: OscillatorOptions = {}) {
        this.phase = options.phase || 0;
        this.offset = options.offset || 0;
        this.frequency = options.frequency || 0.001;
        this.amplitude = options.amplitude || 1;
    }

    update(): number {
        this.phase += this.frequency;
        this.value = this.offset + Math.sin(this.phase) * this.amplitude;
        return this.value;
    }

    getValue(): number {
        return this.value;
    }
}

class Line {
    private spring: number;
    private friction: number;
    private nodes: Node[];

    constructor(options: LineOptions) {
        this.spring = options.spring + 0.05 * Math.random() - 0.05;
        this.friction = E.friction + 0.01 * Math.random() - 0.005;
        this.nodes = [];

        for (let i = 0; i < E.size; i++) {
            const node = new Node();
            node.x = pos.x;
            node.y = pos.y;
            this.nodes.push(node);
        }
    }

    update(): void {
        let spring = this.spring;
        let node = this.nodes[0];

        node.vx += (pos.x - node.x) * spring;
        node.vy += (pos.y - node.y) * spring;

        for (let i = 0; i < this.nodes.length; i++) {
            node = this.nodes[i];

            if (i > 0) {
                const prev = this.nodes[i - 1];
                node.vx += (prev.x - node.x) * spring;
                node.vy += (prev.y - node.y) * spring;
                node.vx += prev.vx * E.dampening;
                node.vy += prev.vy * E.dampening;
            }

            node.vx *= this.friction;
            node.vy *= this.friction;
            node.x += node.vx;
            node.y += node.vy;
            spring *= E.tension;
        }
    }

    draw(): void {
        let [x, y] = [this.nodes[0].x, this.nodes[0].y];
        ctx.beginPath();
        ctx.moveTo(x, y);

        for (let i = 1; i < this.nodes.length - 2; i++) {
            const curr = this.nodes[i];
            const next = this.nodes[i + 1];
            x = 0.5 * (curr.x + next.x);
            y = 0.5 * (curr.y + next.y);
            ctx.quadraticCurveTo(curr.x, curr.y, x, y);
        }

        const secondLast = this.nodes[this.nodes.length - 2];
        const last = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
        ctx.stroke();
        ctx.closePath();
    }
}


let ctx: ExtendedCanvasRenderingContext2D;
let oscillator: Oscillator;
const pos: Position = { x: 0, y: 0 };
let lines: Line[] = [];

const E: Config = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98
};

function initLines(): void {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
        lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
    }
}

function handleMouseMove(e: MouseEvent | TouchEvent): void {
    if ('touches' in e) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
    } else {
        pos.x = (e as MouseEvent).clientX;
        pos.y = (e as MouseEvent).clientY;
    }
    e.preventDefault();
}

function handleTouchStart(e: TouchEvent): void {
    if (e.touches.length === 1) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
    }
}

function render(): void {
    if (ctx.running) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},90%,50%,0.25)`;
        ctx.lineWidth = 1;

        for (const line of lines) {
            line.update();
            line.draw();
        }

        ctx.frame++;
        window.requestAnimationFrame(render);
    }
}

function resizeCanvas(): void {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
}

export const renderCanvas = (): void => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    ctx = canvas.getContext('2d') as ExtendedCanvasRenderingContext2D;
    ctx.running = true;
    ctx.frame = 1;

    oscillator = new Oscillator({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    });

    function onMousemove(e: MouseEvent | TouchEvent): void {
        document.removeEventListener('mousemove', onMousemove);
        document.removeEventListener('touchstart', onMousemove);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchstart', handleTouchStart);

        handleMouseMove(e);
        initLines();
        render();
    }

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('touchstart', onMousemove);
    document.body.addEventListener('orientationchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('focus', () => {
        if (!ctx.running) {
            ctx.running = true;
            render();
        }
    });

    window.addEventListener('blur', () => {
        ctx.running = true;
    });

    resizeCanvas();
};


export const renderAsElement = (() => {
    const canvas = (`<canvas id="canvas" class="fixed hidden sm:block top-0 left-0 -z-10 w-full"></canvas>`);
    addEventListener('DOMContentLoaded', () => renderCanvas());
    return canvas
})()