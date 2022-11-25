import { useEffect, useRef } from 'react';
import { useDrawing } from '../utils/useDrawing';

const PersonState = {};
type GameState = {
  sheep: number;
};
const Catan = () => {
  const { canvasRef } = useDrawing();
  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-screen h-screen bg-teal-100"
      ></canvas>
      <div className="absolute inset-0 grid mb-16 mr-32 place-content-end">
        `🐑` ``
      </div>
    </div>
  );
};

export default Catan;
