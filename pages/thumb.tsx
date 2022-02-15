import { useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Euler, Object3D, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import CameraControls from '../components/CameraControls';
import ThumbGuy, { LocationType } from '../components/thumb/ThumbGuy';
// generates cube of thumbguy
//cool for testing performance

const applyTransformation = (
  original: LocationType,
  transformation: LocationType
): LocationType => {
  //FIXME
  //this is probably wrong
  const newPosition = original.position.clone();
  newPosition.add(transformation.position);
  // newPosition.multiply(original.scale);

  const newScale = original.scale.clone();
  newScale.multiply(transformation.scale);

  const newRotation = transformation.rotation.clone();
  // newRotation.add(transformation.rotation);

  return {
    position: newPosition,
    scale: newScale,
    rotation: newRotation,
  };
};

const getChildrenThumbs = (
  originalThumbLocation: LocationType
): LocationType[] => {
  // children transformations from pos(0,0,0) scale(1,1,1) rotation(0,0,0)
  const thumbChildren: LocationType[] = [];
  const transformations = {
    //FIXME UNUSED
    head: {
      position: new Vector3(0, 4.2, 1.3),
      scale: new Vector3(1, 1, 1),
      rotation: new Euler(0.6, 0, Math.PI),
    } as LocationType,

    leftArm: {
      position: new Vector3(-0.8, -0.45, -0.4),
      scale: new Vector3(0.6, 0.6, 0.6),
      rotation: new Euler(0.15, Math.PI / 2, 0),
    } as LocationType,
    rightArm: {
      position: new Vector3(0.8, -0.45, -0.4),
      scale: new Vector3(0.6, 0.6, 0.6),
      rotation: new Euler(0.15, -Math.PI / 2, 0),
    } as LocationType,

    leftLeg: {
      position: new Vector3(-0.15, -1, 0.3),
      scale: new Vector3(0.5, 0.5, 0.5),
      rotation: new Euler(-0.3, -0.1, 0),
    } as LocationType,
    rightLeg: {
      position: new Vector3(0.15, -1, 0.3),
      scale: new Vector3(0.5, 0.5, 0.5),
      rotation: new Euler(-0.3, 0.1, 0),
    } as LocationType,
  };

  thumbChildren.push(
    applyTransformation(originalThumbLocation, transformations.head),
    applyTransformation(originalThumbLocation, transformations.leftArm),
    applyTransformation(originalThumbLocation, transformations.rightArm),
    applyTransformation(originalThumbLocation, transformations.rightLeg),
    applyTransformation(originalThumbLocation, transformations.leftLeg)
  );

  return thumbChildren;
};

const generateThumbLocations = (): AllThumbLocationsType => {
  const thumbLocations: AllThumbLocationsType = [];
  //UNSCALED left leg
  //    leftLeg: {
  //   position: new Vector3(-0.15, -2.2, 0),
  //   scale: new Vector3(1, 1, 1),
  //   rotation: new Euler(0, 0, 0),
  // } as LocationType,

  const depth = 2;

  //first iteration
  const baseThumb = {
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Euler(0, 0, 0),
  };

  //rest of iteration
  // for (let i = 1; i < depth; i++) {
  // const children = getChildrenThumbs(baseThumb);
  // thumbLocations.push(baseThumb, ...children);

  //add children of each child
  // for (const child of children) {
  // thumbLocations.push(...getChildrenThumbs(child));
  // }
  // }

  const cubeSize = 3;
  const scale = 1;
  for (let x = -cubeSize; x <= cubeSize; x++) {
    for (let y = -cubeSize; y <= cubeSize; y++) {
      for (let z = -cubeSize; z <= cubeSize; z++) {
        const scale = 0.3;
        const rotationRandom = Math.random() * 2;
        thumbLocations.push({
          position: new Vector3(x, y, z),
          scale: new Vector3(scale, scale, scale),
          rotation: new Euler(
            rotationRandom,
            Math.PI + rotationRandom,
            rotationRandom
          ),
        });
      }
    }
  }

  return thumbLocations;
};

type AllThumbLocationsType = LocationType[];

const Thumb = () => {
  const [thumbLocations, setThumbLocations] = useState<AllThumbLocationsType>(
    generateThumbLocations()
  );

  const [thumbModel, setThumbModel] = useState<Object3D>(null!);
  useMemo(() => {
    // this loads the thumb guy model
    //This model loading is based on Model.tsx file from this example:
    //https://github.dev/oslavdev/next-three-example
    const loader = new GLTFLoader();
    let nodes: Object3D[];
    loader.load('/three/thumb_guy/scene.gltf', async (gltf) => {
      nodes = await gltf.parser.getDependencies('node');
      setThumbModel(nodes[0]);
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-yellow-400">
      <Canvas>
        <CameraControls />
        {thumbLocations.map(({ position, scale, rotation }, idx) => (
          <ThumbGuy
            key={idx}
            position={position}
            scale={scale}
            rotation={rotation}
            model={thumbModel}
          />
        ))}

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
};
export default Thumb;
