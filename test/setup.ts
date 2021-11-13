import BasePen from '../src/Pen';
import 'jest-canvas-mock';

export class Pen extends BasePen {
    declare readonly canvas: HTMLCanvasElement;
    declare readonly ctx: CanvasRenderingContext2D;

    constructor(c: HTMLCanvasElement | CanvasRenderingContext2D) {
        super(c);
    }
}

export const createCanvas = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = 100;
    canvas.height = 100;

    return { canvas, ctx };
}

export const createPen = () => {
    const { canvas } = createCanvas();
    return new Pen(canvas);
}