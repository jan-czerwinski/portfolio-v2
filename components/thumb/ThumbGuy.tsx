import React, { useMemo } from 'react';
import { Object3D } from 'three/src/core/Object3D'; //Object3D types
import { Quaternion, Vector3 } from 'three';

//This model loading is based on Model.tsx file from this example:
//https://github.dev/oslavdev/next-three-example

export type LocationType = {
  position: Vector3;
  scale: Vector3;
  quaternion: Quaternion;
};
export type ThumbGuyProps = LocationType & {
  model: Object3D;
};

const ThumbGuy = (props: ThumbGuyProps) => {
  //this is cloning the model passed as a prop for efficiency reasons
  const clonedModel = useMemo(() => props.model?.clone(), [props.model]);

  return clonedModel ? (
    <group
      position={props.position}
      quaternion={props.quaternion}
      scale={props.scale}
      dispose={null}
    >
      <primitive name="Object_0" object={clonedModel} />
    </group>
  ) : null;
};

export default ThumbGuy;
