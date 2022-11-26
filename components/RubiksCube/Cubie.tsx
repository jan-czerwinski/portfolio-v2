import { ThreeEvent } from '@react-three/fiber';
import { useState } from 'react';
import { Vector3 } from 'three';
import {
  reverseTurn,
  TurnDirectionType,
  TurnModifierType,
  TurnType,
} from './CubeUtils';

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
  move: (turn: TurnType) => void;
  size?: number;
  passRef?: (element: any) => any; //TODO FIX THIS ANY
};
const Cubie = ({
  targetPosition,
  drawFaces,
  passRef,
  size,
  move,
}: CubiePropsType) => {
  // const [hovered, hover] = useState(false);
  const [insideMaterialColor, setInsideMaterialColor] = useState('black');

  //probably could be 3 times shorter, but its 4:30 am and this is already pretty hard
  const turnFromClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();

    const normal = e.face?.normal;
    let { x, y, z } = e.point;
    if (!normal) return;

    const SIDE = 1.44; //half of size of rubiks cube
    const CLICK = 1.0;
    const HALF_CLICK = 0.5; // distance from center to top/left/right/bottom layer in 2d

    let direction: TurnDirectionType | null = null;
    let modifier: TurnModifierType = '';

    //if side is either front or back and clicked
    if (Math.max(Math.abs(y), Math.abs(x)) > CLICK && Math.abs(z) > SIDE) {
      if (Math.abs(x) > Math.abs(y)) {
        if (y > HALF_CLICK) {
          direction = 'U';
          if (x > HALF_CLICK) modifier = 'i';
        }
        if (y < -HALF_CLICK) {
          direction = 'D';
          if (x < -HALF_CLICK) modifier = 'i';
        }
      } else {
        if (x > HALF_CLICK) {
          direction = 'R';
          if (y < -HALF_CLICK) modifier = 'i';
        }
        if (x < -HALF_CLICK) {
          direction = 'L';
          if (y > HALF_CLICK) modifier = 'i';
        }
      }

      //reverse modifier on opposite side
      if (z < -SIDE) modifier = modifier === '' ? 'i' : '';
    }

    //if side is either left or right and clicked
    if (Math.max(Math.abs(z), Math.abs(y)) > CLICK && Math.abs(x) > SIDE) {
      if (Math.abs(z) > Math.abs(y)) {
        if (y > HALF_CLICK) {
          direction = 'U';
          if (z < -HALF_CLICK) modifier = 'i';
        }
        if (y < -HALF_CLICK) {
          direction = 'D';
          if (z > HALF_CLICK) modifier = 'i';
        }
      } else {
        if (z < -HALF_CLICK) {
          direction = 'B';
          if (y < -HALF_CLICK) modifier = 'i';
        }
        if (z > HALF_CLICK) {
          direction = 'F';
          if (y > HALF_CLICK) modifier = 'i';
        }
      }

      //reverse modifier on opposite side
      if (x < -SIDE) modifier = modifier === '' ? 'i' : '';
    }

    //if side is either top or bottom and clicked
    if (Math.max(Math.abs(x), Math.abs(z)) > CLICK && Math.abs(y) > SIDE) {
      if (Math.abs(x) > Math.abs(z)) {
        if (z < -HALF_CLICK) {
          direction = 'B';
          if (x > HALF_CLICK) modifier = 'i';
        }
        if (z > HALF_CLICK) {
          direction = 'F';
          if (x < -HALF_CLICK) modifier = 'i';
        }
      } else {
        if (x > HALF_CLICK) {
          direction = 'R';
          if (z > HALF_CLICK) modifier = 'i';
        }
        if (x < -HALF_CLICK) {
          direction = 'L';
          if (z < -HALF_CLICK) modifier = 'i';
        }
      }

      //reverse modifier on opposite side
      if (y < -SIDE) modifier = modifier === '' ? 'i' : '';
    }

    if (direction !== null) {
      move({ direction, modifier });
    }
  };

  return (
    <mesh
      onClick={turnFromClick}
      //FIXME what is this shit
      ref={(element) => passRef && passRef(element)} //FIXME
      position={targetPosition}
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
