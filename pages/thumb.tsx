import { useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Euler, Object3D, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import CameraControls from '../components/CameraControls';
import ThumbGuy, { LocationType } from '../components/thumb/ThumbGuy';

// const ThumbLeftArm: LocationType = {
//TODO Ta funkcja ma generować rotację dla lewej ręki -
//TODO analogicznie ma być dla prawej, nóg i głowy
//TODO rotacje całości, tak zeby mozna było przyczepić i zrobić fraktal
// };

const generateThumbLocations = (): AllThumbLocationsType => {
  const thumbLocations: AllThumbLocationsType = [];

  //generates cube of thumbguy
  //cool for testing performance
  // const cubeSize = 2;
  // const scale = 1;
  // for (let x = -cubeSize; x <= cubeSize; x++) {
  //   for (let y = -cubeSize; y <= cubeSize; y++) {
  //     for (let z = -cubeSize; z <= cubeSize; z++) {
  //       const scale = 0.3;
  //       thumbLocations.push({
  //         position: new Vector3(x, y, z),
  //         scale: new Vector3(scale, scale, scale),
  //         rotation: new Euler(0, Math.PI, 0),
  //       });
  //     }
  //   }
  // }

  const transformations = {
    head: {
      position: new Vector3(0, 4.2, 1.3),
      scale: new Vector3(1, 1, 1),
      rotation: new Euler(0.6, 0, Math.PI),
    } as LocationType,
    leftArm: {
      position: new Vector3(-0.8, -1.4, -0.2),
      scale: new Vector3(1, 1, 1),
      rotation: new Euler(0, Math.PI / 2, 0),
    } as LocationType,
    rightArm: {
      position: new Vector3(0.8, -1.4, -0.2),
      scale: new Vector3(1, 1, 1),
      rotation: new Euler(0, -Math.PI / 2, 0),
    } as LocationType,
    leftLeg: {
      position: new Vector3(0.15, -2.2, 0),
      scale: new Vector3(1, 1, 1),
      rotation: new Euler(0, 0, 0),
    } as LocationType,
    rightLeg: {
      position: new Vector3(-0.15, -2.2, 0),
      scale: new Vector3(1, 1, 1),
      rotation: new Euler(0, 0, 0),
    } as LocationType,
  };

  //base thumb guy
  thumbLocations.push({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Euler(0, 0, 0),
  });

  thumbLocations.push(
    ...[
      transformations.head,
      transformations.leftArm,
      transformations.rightArm,
      transformations.rightLeg,
      transformations.leftLeg,
    ]
  );

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
