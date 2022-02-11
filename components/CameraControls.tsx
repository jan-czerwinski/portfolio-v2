import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

export default CameraControls;
