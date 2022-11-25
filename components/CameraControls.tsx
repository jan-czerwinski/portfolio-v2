import { extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Euler, Vector3 } from 'three';
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

  useEffect(() => {
    camera.rotateOnWorldAxis(new Vector3(1, 0.5, 0), 4);
  }, [camera]);

  //TODO figure out how to delete the ts-ignores
  useFrame(() => {
    //@ts-ignore
    controls?.current?.update();
  });
  return (
    //@ts-ignore
    <orbitControls ref={controls} args={[camera, domElement]} />
  );
};

export default CameraControls;
