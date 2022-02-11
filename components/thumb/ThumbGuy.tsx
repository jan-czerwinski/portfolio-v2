import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Object3D } from 'three/src/core/Object3D'; //Object3D types
import { Vector3 } from 'three';

//This model loading is based on Model.tsx file from this example:
//https://github.dev/oslavdev/next-three-example

export type ThumbGuyProps = {
  position: Vector3;
  scale: Vector3;
};

const ThumbGuy = (props: ThumbGuyProps) => {
  const [model, setModel] = useState<Object3D | null>(null);

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/three/thumb_guy/scene.gltf', async (gltf) => {
      const nodes = await gltf.parser.getDependencies('node');
      setModel(nodes[0]);
    });
  }, []);

  return model ? (
    <group position={props.position} dispose={null} scale={props.scale}>
      <primitive name="Object_0" object={model} />
    </group>
  ) : (
    <Html>Loading...</Html>
  );
};

export default ThumbGuy;
