import { createCanvas, createPen, Pen } from './setup';

describe('constructor method', () => {
    it('works with canvas argument', () => {
        const { canvas } = createCanvas();
        expect(() => new Pen(canvas)).not.toThrow();
    });

    it('works with context argument', () => {
        const { ctx } = createCanvas();
        expect(() => new Pen(ctx)).not.toThrow();
    });
});

describe('public properties', () => {
    it('has public canvas property', () => {
        const pen = createPen();
        expect(pen.canvas).toBeInstanceOf(HTMLCanvasElement);
    });

    it('has public ctx property', () => {
        const pen = createPen();
        expect(pen.ctx).toBeInstanceOf(CanvasRenderingContext2D);
    });
});

describe('fill styles', () => {
    it('can set fill color', () => {
        const pen = createPen();
        pen.setFillStyle('#ff0000');
        expect(pen.ctx.fillStyle).toBe('#ff0000');
    });

    it('can set background color', () => {
        const pen = createPen();
        pen.setBackground('#ff0000');
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });
});

describe('stroke styles', () => {
    it('can set stroke color', () => {
        const pen = createPen();
        pen.setStrokeStyle('#ff0000');
        expect(pen.ctx.strokeStyle).toBe('#ff0000');
    });

    it('can set stroke width', () => {
        const pen = createPen();
        pen.setStrokeWidth(10);
        expect(pen.ctx.lineWidth).toBe(10);
    });

    it('can set stroke cap', () => {
        const pen = createPen();
        pen.setStrokeCap('round');
        expect(pen.ctx.lineCap).toBe('round');
    });

    it('can set stroke join', () => {
        const pen = createPen();
        pen.setStrokeJoin('round');
        expect(pen.ctx.lineJoin).toBe('round');
    });

    it('can set stroke dash', () => {
        const pen = createPen();
        pen.setStrokeDash(10, 10);
        expect(pen.ctx.getLineDash()).toEqual([10, 10]);
    });
});

describe('draw methods', () => {
    it('can fill a shape', () => {
        const pen = createPen();
        pen.fill();
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can modify color for single fill call', () => {
        const pen = createPen();
        pen.fill('#f00');
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can draw stroke of a shape', () => {
        const pen = createPen();
        pen.stroke();
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can modify color for single stroke call', () => {
        const pen = createPen();
        pen.stroke('#f00');
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });
});

describe('shape methods', () => {
    it('can draw a line', () => {
        const pen = createPen();
        pen.line([0, 0], [100, 100]);
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can draw a circle', () => {
        const pen = createPen();
        pen.circle([0, 0], 100);
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can draw a ellipse', () => {
        const pen = createPen();
        pen.ellipse([0, 0], 100, 100);
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can draw a square', () => {
        const pen = createPen();
        pen.square([0, 0], 100);
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can draw a rectangle', () => {
        const pen = createPen();
        pen.rect([0, 0], 100, 100);
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can draw an arc', () => {
        const pen = createPen();
        pen.arc([0, 0], 100, 0, Math.PI * 2, true);
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can draw polygon', () => {
        const pen = createPen();
        pen.polygon([0, 0], [100, 0], [100, 100], [0, 100]);
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can translate it\'s origin', () => {
        const pen = createPen();
        pen.translate([100, 100]);
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can save the current context', () => {
        const pen = createPen();
        pen.save();
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can restore a saved context', () => {
        const pen = createPen();
        pen.save();
        pen.restore();
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });

    it('can clear whole canvas', () => {
        const pen = createPen();
        pen.clear();
        expect(pen.ctx.__getEvents()).toMatchSnapshot();
    });
});