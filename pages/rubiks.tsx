import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { Ref, useRef, useState } from 'react';
import { TurnType } from '../components/RubiksCube/CubeUtils';

import RubiksCube from '../components/RubiksCube/RubiksCube';
import CameraControls from '../components/CameraControls';
import Ui from '../components/RubiksCube/Ui';

const Rubiks = () => {
  const [cubeState, setCubeState] = useState<TurnType[]>([]);

  return (
    <div className="relative w-screen h-screen bg-purple-200">
      <div className="absolute w-screen h-screen">
        <Canvas>
          <CameraControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <RubiksCube cubeState={cubeState} />
        </Canvas>
      </div>
      <div className="absolute">
        <Ui setCubeState={(turns: TurnType[]) => setCubeState(turns)} />
      </div>
    </div>
  );
};

export default Rubiks;
