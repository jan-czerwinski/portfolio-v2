import { useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Euler, Object3D, Quaternion, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import CameraControls from '../components/CameraControls';
import ThumbGuy, { LocationType } from '../components/thumb/ThumbGuy';

const applyTransformation = (
  original: LocationType,
  transformation: LocationType
): LocationType => {
  const scale = original.scale.clone().multiply(transformation.scale);

  const position = original.position
    .clone()
    .add(
      transformation.position
        .applyQuaternion(original.quaternion)
        .multiply(original.scale)
    );

  const quaternion = original.quaternion
    .clone()
    .multiply(transformation.quaternion);

  return {
    position,
    scale,
    quaternion,
  };
};

const getChildrenThumbs = (
  originalThumbLocation: LocationType
): LocationType[] => {
  // children transformations from pos(0,0,0) scale(1,1,1) rotation(0,0,0)
  const transformations = {
    head: {
      position: new Vector3(0, 4.2, 1.3),
      scale: new Vector3(1, 1, 1),
      quaternion: new Quaternion().setFromEuler(new Euler(0.6, 0, Math.PI)),
    } as LocationType,

    leftArm: {
      position: new Vector3(-0.8, -0.45, -0.4),
      scale: new Vector3(0.6, 0.6, 0.6),
      quaternion: new Quaternion().setFromEuler(
        new Euler(0.15, Math.PI / 2, 0)
      ),
    } as LocationType,
    rightArm: {
      position: new Vector3(0.8, -0.45, -0.4),
      scale: new Vector3(0.6, 0.6, 0.6),
      quaternion: new Quaternion().setFromEuler(
        new Euler(0.15, -Math.PI / 2, 0)
      ),
    } as LocationType,

    leftLeg: {
      position: new Vector3(-0.15, -1, 0.3),
      scale: new Vector3(0.5, 0.5, 0.5),
      quaternion: new Quaternion().setFromEuler(new Euler(-0.3, -0.1, 0)),
    } as LocationType,
    rightLeg: {
      position: new Vector3(0.15, -1, 0.3),
      scale: new Vector3(0.5, 0.5, 0.5),
      quaternion: new Quaternion().setFromEuler(new Euler(-0.3, 0.1, 0)),
    } as LocationType,
  };

  const thumbChildren: LocationType[] = [];

  thumbChildren.push(
    // applyTransformation(originalThumbLocation, transformations.head),
    applyTransformation(originalThumbLocation, transformations.leftArm),
    applyTransformation(originalThumbLocation, transformations.rightArm),
    applyTransformation(originalThumbLocation, transformations.rightLeg),
    applyTransformation(originalThumbLocation, transformations.leftLeg)
  );

  return thumbChildren;
};

const generateThumbCube = (): LocationType[] => {
  const thumbLocations: LocationType[] = [];
  const cubeSize = 3;
  const scale = 0.3;
  for (let x = -cubeSize; x <= cubeSize; x++) {
    for (let y = -cubeSize; y <= cubeSize; y++) {
      for (let z = -cubeSize; z <= cubeSize; z++) {
        const rotationRandom = Math.random() * 2;
        thumbLocations.push({
          position: new Vector3(x, y, z),
          scale: new Vector3(scale, scale, scale),
          quaternion: new Quaternion().setFromEuler(
            new Euler(rotationRandom, Math.PI + rotationRandom, rotationRandom)
          ),
        });
      }
    }
  }
  return thumbLocations;
};

const generateThumbLocations = (): LocationType[] => {
  const thumbLocations: LocationType[] = [];

  const baseThumb = {
    position: new Vector3(),
    scale: new Vector3(1, 1, 1),
    quaternion: new Quaternion(),
  };

  //thumbs that don't have any children
  let leafThumbs: LocationType[] = [baseThumb];

  const depth = 6;
  for (let i = 0; i < depth; i++) {
    thumbLocations.push(...leafThumbs);

    const newLeafThumbs = [];
    for (const thumb of leafThumbs) {
      newLeafThumbs.push(...getChildrenThumbs(thumb));
    }
    leafThumbs = newLeafThumbs;
  }
  // add children of each child
  // for (const child of children) {
  // thumbLocations.push(...getChildrenThumbs(child));
  // }
  // }

  return thumbLocations;
};

const Thumb = () => {
  const [thumbLocations, setThumbLocations] = useState<LocationType[]>(
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
        {thumbLocations.map(({ position, scale, quaternion }, idx) => (
          <ThumbGuy
            key={idx}
            position={position}
            scale={scale}
            quaternion={quaternion}
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
