export interface Point {
   x: number;
   y: number;
}

export default class Pen {
   public ctx: CanvasRenderingContext2D;
   public canvas: HTMLCanvasElement;

   constructor(c: CanvasRenderingContext2D | HTMLCanvasElement) {
      if ('getContext' in c) {
         this.canvas = c as HTMLCanvasElement;
         this.ctx = c.getContext('2d')!;
      } else if ('canvas' in c) {
         this.ctx = c as CanvasRenderingContext2D;
         this.canvas = this.ctx.canvas;
      } else {
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

   public getImageData(): ImageData {
      return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
   }

   public fill(): Pen {
      this.ctx.fill();
      return this;
   }

   public stroke(): Pen {
      this.ctx.stroke();
      return this;
   }

   public line(...points: Point[]): Pen {
      this.ctx.beginPath();
      this.ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
         this.ctx.lineTo(points[i].x, points[i].y);
      }
      return this;
   }

   public circle(center: Point, radius: number): Pen {
      this.ctx.beginPath();
      this.ctx.ellipse(center.x, center.y, radius, radius, 0, 0, 2 * Math.PI);
      return this;
   }

   public ellipse(center: Point, radiusX: number, radiusY: number): Pen {
      this.ctx.beginPath();
      this.ctx.ellipse(center.x, center.y, radiusX, radiusY, 0, 0, 2 * Math.PI);
      return this;
   }

   public square(center: Point, size: number): Pen {
      this.ctx.beginPath();
      this.ctx.rect(center.x - size / 2, center.y - size / 2, size, size);
      return this;
   }

   public rect(center: Point, width: number, height: number): Pen {
      this.ctx.beginPath();
      this.ctx.rect(center.x - width / 2, center.y - height / 2, width, height);
      return this;
   }

   public arc(center: Point, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Pen {
      this.ctx.beginPath();
      this.ctx.arc(center.x, center.y, radius, startAngle, endAngle, anticlockwise);
      return this;
   }

   public shape(...points: Point[]): Pen {
      this.ctx.beginPath();
      this.ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
         this.ctx.lineTo(points[i].x, points[i].y);
      }
      this.ctx.closePath();
      return this;
   }

   public translate(origin: Point): Pen {
      this.ctx.translate(origin.x, origin.y);
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