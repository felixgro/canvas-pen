type Position = [number, number];

export default class Pen {
   public ctx: CanvasRenderingContext2D;
   public canvas: HTMLCanvasElement;

   constructor(c: CanvasRenderingContext2D | HTMLCanvasElement) {
      if ('getContext' in c) {
         // c is HTMLCanvasElement, which contains getContext() method
         this.canvas = c as HTMLCanvasElement;
         this.ctx = c.getContext('2d')!;
      } else if ('canvas' in c) {
         // c is CanvasRenderingContext2D, which contains canvas property
         this.ctx = c as CanvasRenderingContext2D;
         this.canvas = this.ctx.canvas;
      } else {
         // c is not HTMLCanvasElement or CanvasRenderingContext2D
         throw new Error('Invalid canvas or context');
      }
   }

   public setFillStyle(style: string | CanvasGradient | CanvasPattern): Pen {
      this.ctx.fillStyle = style;
      return this;
   }

   public setStrokeStyle(style: string | CanvasGradient | CanvasPattern): Pen {
      this.ctx.strokeStyle = style;
      return this;
   }

   public setLineWidth(width: number): Pen {
      this.ctx.lineWidth = width;
      return this;
   }

   public setLineCap(cap: CanvasLineCap): Pen {
      this.ctx.lineCap = cap;
      return this;
   }

   public setLineJoin(join: CanvasLineJoin): Pen {
      this.ctx.lineJoin = join;
      return this;
   }

   public setLineDash(...segments: number[]): Pen {
      this.ctx.setLineDash(segments);
      return this;
   }

   public setFont(font: string): Pen {
      this.ctx.font = font;
      return this;
   }

   public setTextAlign(align: CanvasTextAlign): Pen {
      this.ctx.textAlign = align;
      return this;
   }

   public setTextBaseLine(baseLine: CanvasTextBaseline): Pen {
      this.ctx.textBaseline = baseLine;
      return this;
   }

   public setMiterLimit(limit: number): Pen {
      this.ctx.miterLimit = limit;
      return this;
   }

   public fill(color?: string): Pen {
      if (color) {
         this.ctx.save();
         this.ctx.fillStyle = color;
      }
      this.ctx.fill();
      if (color) this.ctx.restore();
      return this;
   }

   public stroke(color?: string, width?: number): Pen {
      if (color || width) {
         this.ctx.save();
         if (color) this.ctx.strokeStyle = color;
         if (width) this.ctx.lineWidth = width;
      }
      this.ctx.stroke();
      if (color || width) this.ctx.restore();
      return this;
   }

   public line(...points: Position[]): Pen {
      this.ctx.beginPath();
      this.ctx.moveTo(...points[0]);
      for (let i = 1; i < points.length; i++) {
         this.ctx.lineTo(...points[i]);
      }
      return this;
   }

   public circle(origin: Position, radius: number): Pen {
      this.ctx.beginPath();
      this.ctx.ellipse(...origin, radius, radius, 0, 0, 2 * Math.PI);
      return this;
   }

   public ellipse(origin: Position, radius: Position): Pen {
      this.ctx.beginPath();
      this.ctx.ellipse(...origin, ...radius, 0, 0, 2 * Math.PI);
      return this;
   }

   public square(origin: Position, size: number): Pen {
      this.ctx.beginPath();
      origin[0] -= size / 2;
      origin[1] -= size / 2;
      this.ctx.rect(...origin, size, size);
      return this;
   }

   public rect(origin: Position, width: number, height: number): Pen {
      this.ctx.beginPath();
      origin[0] -= width / 2;
      origin[1] -= height / 2;
      this.ctx.rect(...origin, width, height);
      return this;
   }

   public arc(origin: Position, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Pen {
      this.ctx.beginPath();
      this.ctx.arc(...origin, radius, startAngle, endAngle, anticlockwise);
      return this;
   }

   public shape(...anchors: Position[]): Pen {
      this.ctx.beginPath();
      this.ctx.moveTo(...anchors[0]);
      for (let i = 1; i < anchors.length; i++) {
         this.ctx.lineTo(...anchors[i]);
      }
      this.ctx.closePath();
      return this;
   }

   public translate(origin: Position): Pen {
      this.ctx.translate(...origin);
      return this;
   }

   public save(): Pen {
      this.ctx.save();
      return this;
   }

   public restore(): Pen {
      this.ctx.restore();
      return this;
   }

   public clear(): Pen {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      return this;
   }
}