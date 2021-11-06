import Pen from '../src/Pen';

// get canvas element
const canvas = document.querySelector('canvas');

// instantiate pen using canvas element or it's rendering context
const pen = new Pen(canvas);

// optional: set default pen styles
// these may be changed any time during execution
pen.setFillStyle('#000')
   .setStrokeStyle('#ccc')
   .setLineWidth(5)
   .setLineJoin('round');

// draw a filled circle using an origin point and radius
// all points passed to the pen are relative to the canvas
// and are defined as [x, y]
pen.circle([200, 200], 100)
   .fill();

// draw the outline of a square using
// an origin point and side length
pen.square([200, 200], 250)
   .stroke();

// draw any shape using 2 or more points
// example: outline of triangle
pen.shape(
   [250, 270],
   [200, 120],
   [150, 270]
).stroke();

// temporary change styles for a single stroke call by passing
// color and line width as arguments
// default color and width will be restored afterwards
pen.rect([200, 200], 300, 100)
   .stroke('#f00', 1);

// draw filled ellipse along with it's outline using 
// an origin point and a radius vector
pen.ellipse([200, 200], [100, 50])
   .stroke()
   .fill();