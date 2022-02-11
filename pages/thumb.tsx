import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Matrix4, Vector3 } from 'three';

import CameraControls from '../components/CameraControls';
import ThumbGuy, { ThumbGuyProps } from '../components/thumb/ThumbGuy';

// const ThumbLeftArm: Matrix4 = {
//TODO Ta funkcja ma generować rotację dla lewej ręki -
//TODO analogicznie ma być dla prawej, nóg i głowy
//TODO rotacje całości, tak zeby mozna było przyczepić i zrobić fraktal
// };

const generateThumbLocations = (): AllThumbLocationsType => {
  const thumbLocations: AllThumbLocationsType = [];
  const cubeSize = 1;
  for (let x = -cubeSize; x < cubeSize; x++) {
    for (let y = -cubeSize; y < cubeSize; y++) {
      for (let z = -cubeSize; z < cubeSize; z++) {
        const scale = (y % 2) + 1; //swap between 2 values (1,2)
        thumbLocations.push({
          position: new Vector3(x * 3, y * 3, z * 3),
          scale: new Vector3(scale, scale, scale),
        });
      }
    }
  }

  return thumbLocations;
};

type AllThumbLocationsType = ThumbGuyProps[];
const Thumb = () => {
  const [thumbLocations, setThumbLocations] = useState<AllThumbLocationsType>(
    generateThumbLocations()
  );

  return (
    <div className="w-screen h-screen bg-yellow-400">
      <Canvas>
        <CameraControls />
        {thumbLocations.map(({ position, scale }, idx) => (
          <ThumbGuy position={position} scale={scale} key={idx} />
        ))}

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
};
export default Thumb;
