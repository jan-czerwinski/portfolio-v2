import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TurnType } from '../components/RubiksCube/CubeUtils';

import RubiksCube from '../components/RubiksCube/RubiksCube';
import CameraControls from '../components/CameraControls';
import RubiksUi from '../components/RubiksCube/RubiksUi';
import {
  getBgAndTextColorStyle,
  getOpposingBgStyle,
} from '../utils/colorUtils';
import { useRouter } from 'next/router';

type RubiksRouter = ReturnType<typeof useRouter> & {
  query: {
    color: string;
  };
};

const Rubiks = () => {
  const [cubeState, setCubeState] = useState<TurnType[]>([]);
  const [turnTime, setTurnTime] = useState(0.2);
  const { query } = useRouter() as RubiksRouter;
  const { color } = query;
  const passedColor = color || '#FFFF';

  return (
    <div
      style={getBgAndTextColorStyle(passedColor)}
      className="relative w-screen h-screen"
    >
      <div className="absolute z-10 w-screen h-screen ">
        <Canvas>
          <CameraControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <RubiksCube
            cubeState={cubeState}
            turnTime={turnTime}
            setCubeState={setCubeState}
          />
        </Canvas>
      </div>
      <div className="absolute">
        <RubiksUi
          color={passedColor}
          cubeState={cubeState}
          setCubeState={setCubeState}
          turnTime={turnTime}
          setTurnTime={setTurnTime}
        />
      </div>
    </div>
  );
};

export default Rubiks;
