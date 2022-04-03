import { useState } from 'react';
import { Vector3 } from 'three';

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
  passRef?: (element: any) => any; //TODO FIX THIS ANY
};
const Cubie = ({
  targetPosition,
  drawFaces,
  passRef,
  size,
}: CubiePropsType) => {
  // const [hovered, hover] = useState(false);
  const [insideMaterialColor, setInsideMaterialColor] = useState('black');

  return (
    <mesh
      //FIXME what is this shit
      ref={(element) => passRef && passRef(element)} //FIXME
      position={targetPosition}
      // onClick={() => setInsideMaterialColor('blue')}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
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
