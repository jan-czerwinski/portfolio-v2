import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { Ref, useEffect, useRef, useState } from 'react';
import { TurnType } from '../components/RubiksCube/CubeUtils';

import RubiksCube from '../components/RubiksCube/RubiksCube';
import CameraControls from '../components/CameraControls';
import RubiksUi from '../components/RubiksCube/RubiksUi';

const Rubiks = () => {
  const [cubeState, setCubeState] = useState<TurnType[]>([]);
  const [turnTime, setTurnTime] = useState(0.5);
  return (
    <div className="relative w-screen h-screen bg-purple-200">
      <div className="absolute w-screen h-screen">
        <Canvas>
          <CameraControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <RubiksCube cubeState={cubeState} turnTime={turnTime} />
        </Canvas>
      </div>
      <div className="absolute">
        <RubiksUi
          setCubeState={(turns: TurnType[]) => setCubeState(turns)}
          turnTime={turnTime}
          setTurnTime={setTurnTime}
        />
      </div>
    </div>
  );
};

export default Rubiks;
