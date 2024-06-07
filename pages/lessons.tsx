export default () => null;
// import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

// class SingleGrass {
//   x: number;
//   y: number;
//   length: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//     this.length = 1000;
//   }

//   draw(p: P5CanvasInstance) {
//     p.fill(0, 255, 0);
//     // p.rect(this.x, this.y, this.w, this.h);
//     p.strokeWeight(2);
//     p.stroke(255);
//     const pos = p.createVector(this.x, this.y);
//     const mouse = p.createVector(p.mouseX, p.mouseY);
//     // const dir = mouse.sub(pos).normalize().mult(this.length);
//     const dir = mouse.sub(pos);

//     p.line(this.x, this.y, this.x + dir.x, this.y + dir.y);
//   }
// }

// function sketch(p5: P5CanvasInstance) {
//   const grass: SingleGrass[] = [];

//   p5.mouseMoved = () => {
//     p5.redraw();
//   };
//   p5.setup = () => {
//     // const { innerWidth: width, innerHeight: height } = window;

//     const canvasWidth = 200;
//     const canvasHeight = 200;
//     p5.createCanvas(canvasWidth, canvasWidth);
//     for (let i = 0; i < 40; i++) {
//       grass.push(
//         new SingleGrass(p5.random(canvasWidth), p5.random(canvasHeight))
//       );
//     }
//   };

//   p5.draw = () => {
//     for (const singleGrass of grass) {
//       singleGrass.draw(p5);
//     }
//     p5.background(p5.color(0, 0, 0, 10));

//     // p.ellipse(p.width / 2, p.height / 2, width, height);
//   };
// }

// export function App() {
//   return <ReactP5Wrapper sketch={sketch} />;
// }
