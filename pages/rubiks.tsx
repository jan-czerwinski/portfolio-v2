import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { Ref, useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TurnType } from '../components/RubiksCube/CubeUtils';

import RubiksCube from '../components/RubiksCube/RubiksCube';
import { Ui } from '../components/RubiksCube/Ui';

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  //FIXME it works but gets highlited, probably issue with react-three-fiber and typescript
  const controls = useRef(null!);

  useFrame(() => {
    controls?.current?.update();
  });
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Three = () => {
  const [cubeState, setCubeState] = useState<TurnType[]>([
    // { direction: 'R', modifier: 'i' },
  ]);

  return (
    <div className="relative w-screen h-screen">
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
export default Three;
