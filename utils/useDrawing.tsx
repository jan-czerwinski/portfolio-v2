import { context } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

type Coord = {
  x: number;
  y: number;
};

const drawBoard = (ctx: CanvasRenderingContext2D, coord: Coord) => {};

const drawHexagon = (ctx: CanvasRenderingContext2D, coord: Coord) => {
  const { x, y } = coord;
  const a = (2 * Math.PI) / 6;
  const r = 50;

  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.strokeStyle = '#666666';
  ctx.stroke();

  // the fill color
  ctx.fillStyle = '#FFCC00';
  ctx.fill();
};
export const useDrawing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    context && drawHexagon(context, { x: 100, y: 100 });
    // if (context) {
    //   context.fillStyle = '#000000';
    //   context.fillRect(0, 0, context.canvas.width / 2, context.canvas.height);
    // }
  }, []);

  return { canvasRef };
};
