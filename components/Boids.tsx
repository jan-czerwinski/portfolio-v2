import { useEffect, useState } from "react";
//
import Boid from "./boids/Boid";
import Vector2D from "./boids/Vector2D";
// import { Boid, Vector2D } from "./types"; // Assuming you have types defined

function calculateBoidPositions(
  boids: Boid[],
  width: number,
  height: number
): Vector2D[] {
  // Implement your logic for updating boid positions here
  // For simplicity, let's just update the positions randomly
  const positions: Vector2D[] = [];
  for (let i = 0; i < boids.length; i++) {
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;
    positions.push(new Vector2D(randomX, randomY));
  }
  console.log(positions);
  return positions;
}

const newOne = new Boid(new Vector2D(100, 100), new Vector2D(100, 100));
const boids = [
  newOne.copy(),
  newOne.copy(),
  newOne.copy(),
  newOne.copy(),
  newOne.copy(),
  newOne.copy(),
];
export const Boids = () => {
  // State to hold the positions of the boids
  const [boidPositions, setBoidPositions] = useState<Vector2D[]>([]);

  // Update boid positions when boids change
  useEffect(() => {
    const interval = setInterval(() => {
      const positions = calculateBoidPositions(boids, 200, 200);
      setBoidPositions(positions);
    }, 1000);

    return clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-300 ">
      <div className="bg-red-400 w-40">{boidPositions}</div>
      <svg className="w-screen h-screen">
        {boidPositions.map((position, index) => (
          <circle
            key={index}
            cx={position.x} // Set the x-coordinate of the circle
            cy={position.y} // Set the y-coordinate of the circle
            r={10} // Set the radius of the circle
            fill="black" // Set the fill color of the circle
          />
        ))}
      </svg>
    </div>
  );
};
