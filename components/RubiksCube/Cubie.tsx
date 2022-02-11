import { useFrame } from '@react-three/fiber';
import { MutableRefObject, useRef, useState } from 'react';
import { BufferGeometry, Material, Mesh, Vector3 } from 'three';

export type CubieDrawFacesType = {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  front: boolean;
  back: boolean;
};
export type CubiePropsType = {
  // meshArgs?: JSX.IntrinsicElements['mesh'];
  targetPosition: Vector3;
  drawFaces: CubieDrawFacesType;
  size?: number;
  passRef?: (element: any) => any;
};
const Cubie = ({
  targetPosition,
  drawFaces,
  passRef,
  size,
}: CubiePropsType) => {
  const [hovered, hover] = useState(false);
  const [insideMaterialColor, setInsideMaterialColor] = useState('black');
  const [currPosition, setCurrPosition] = useState<Vector3>(
    targetPosition.clone()
  );
  const [idx, setIdx] = useState(0);

  useFrame(({ clock }) => {
    // setIdx(idx + 1);
    //FIXME animate by moving from currPosition to targetPosition using vectors
    // const { x, y, z } = currPosition;

    if (insideMaterialColor == 'blue' && idx % 40 == 0) {
      // console.log(x, y, z);
      // console.log(clock.getElapsedTime());
      // console.log(targetPosition);
    }

    // setCurrPosition(targetPosition);
    // setCurrPosition((curr) => {
    //   const diffPosition = targetPosition.sub(currPosition);

    //   const normalizedScaledDownDiff = diffPosition
    //     .normalize()
    //     .multiplyScalar(0.01);
    //   curr.add(normalizedScaledDownDiff);
    //   return curr;
    // });
  });

  return (
    <mesh
      //FIXME what is this shit
      ref={(element) => passRef && passRef(element)} //FIXME
      position={targetPosition}
      onClick={() => setInsideMaterialColor('blue')}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[size, size, size]} />

      <meshStandardMaterial
        attachArray="material"
        color={drawFaces.right ? 'blue' : insideMaterialColor}
      />
      <meshStandardMaterial
        attachArray="material"
        color={drawFaces.left ? 'green' : insideMaterialColor}
      />
      <meshStandardMaterial
        attachArray="material"
        color={drawFaces.up ? 'white' : insideMaterialColor}
      />
      <meshStandardMaterial
        attachArray="material"
        color={drawFaces.down ? 'yellow' : insideMaterialColor}
      />
      <meshStandardMaterial
        attachArray="material"
        color={drawFaces.front ? 'red' : insideMaterialColor}
      />
      <meshStandardMaterial
        attachArray="material"
        color={drawFaces.back ? 'orange' : insideMaterialColor}
      />
    </mesh>
  );
};

export default Cubie;
