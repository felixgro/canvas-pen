import Pen from '../src/main';

// setup canvas
const canvas = document.querySelector('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// instantiate pen
const pen = new Pen(canvas);

// prepare pen styles
pen.setFillStyle('#000')
   .setStrokeStyle('#f00')
   .setLineWidth(20)
   .setLineJoin('round');

// shift origin
pen.translate({ x: 45, y: 50 });

// draw a triangle
pen.shape(
   { x: 100, y: 100 },
   { x: 300, y: 300 },
   { x: 100, y: 300 }
).fill();

// draw red circle border
pen.circle({ x: 200, y: 200 }, 100).stroke();

// draw filled circle with white border
pen.circle({ x: 200, y: 200 }, 50)
   .save()
   .setStrokeStyle('#fff')
   .setLineWidth(25)
   .stroke()
   .fill()
   .restore();