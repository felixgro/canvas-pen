import Pen from './Pen';

export default Pen;

export const penify = (c: HTMLCanvasElement | CanvasRenderingContext2D): Pen => new Pen(c);
