# canvas-pen

[![version][npm-badge]][npm-url]
[![bundle size][size-badge]][npm-url]
[![license][license-badge]][npm-url]

Abstraction layer for performing draw operations on a 2d canvas.


## Features

- Lightweight, zero dependencies
- Works with **HTMLCanvasElement** and **OffscreenCanvas**
- Highly customizable and extendable
- Usable within Web Workers
- Typescript support


## Why?

Native canvas drawing methods are performed by utilizing the browsers built-in [CanvasRenderingContext2D][ctx] interface. This interface tends to have a bad developer experience due to a lack of consistency and the need to repeat specific method calls over and over.
Pen aims to enhance the developer experience of 2d drawing operations while still remaining as small as possible.

## Installation
Via NPM or Yarn:
```bash
npm install canvas-pen
yarn add canvas-pen
```

Via CDN:
```html
<script src="https://unpkg.com/canvas-pen"></script>
```

## Usage
```ts
import Pen from 'canvas-pen';

// get canvas element (or OffscreenCanvas)
const canvas = document.createElement('canvas');

// initialize pen by passing the canvas to it
const pen = new Pen(canvas);

// define default styles
pen.setBackground('#ccc')
    .setStrokeStyle('red')
    .setFillStyle('rgb(20, 140, 185)');

// start drawing!
pen.circle([50, 50], 100)
    .fill();

pen.line([10, 50], [50, 50])
    .stroke();
    
pen.rect([10, 10], 100, 200)
    .fill('green') // temporary change fill color for single call

pen.clear();
```
As you see Pen expects by default a `[x: number, y: number]` tuple for each position argument and all of it's methods are chainable.

Checkout this [CodePen][codepen-demo] to tinker with this library.

## Customization
You may customize the default behaviour of Pen by extending it's class:
```ts
import PenBase from 'canvas-pen';

export default class Pen extends PenBase {
    // add or overwrite any method as you wish!
    // make sure to always return this from each method
    // to enable multi-method-chaining
}
```

## Development

These instructions will get you a copy of Pen up and running on your local machine for development and testing purposes.

Start by cloning this repository:
```bash
git clone https://github.com/felixgro/canvas-pen.git
cd canvas-pen
```

Install all development dependencies using a package manager (Yarn or NPM):
```bash
npm i
```

Start a development server which serves files within the demo/ directory:
```bash
npm run dev
```

Run tests:
```bash
npm run test
```

## Contributing

All contributions are welcome!  

## License
MIT


[npm-url]: https://www.npmjs.com/package/canvas-pen
[codepen-demo]: https://codepen.io/felixgro/pen/MWvqLKL
[npm-badge]: https://img.shields.io/npm/v/canvas-pen?color=blue
[size-badge]: https://badgen.net/bundlephobia/minzip/canvas-pen
[license-badge]: https://badgen.net/github/license/felixgro/canvas-pen
[ctx]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D