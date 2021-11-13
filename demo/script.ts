import Pen from '../src/Pen';

// get canvas element
const canvas = document.querySelector('canvas');

// instantiate pen using canvas element or it's rendering context
const pen = new Pen(canvas);

// optional: set default pen styles
// these may be changed any time during execution
pen.setFillStyle('#000')
   .setStrokeStyle('#ccc')
   .setStrokeWidth(5)
   .setStrokeJoin('round');

// draw a filled circle using an origin point and radius
// all points passed to the pen are relative to the canvas
// and are defined as [x, y]
pen.circle([250, 250], 100)
   .fill();