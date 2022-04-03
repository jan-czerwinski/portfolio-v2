import { Canvas } from '@react-three/fiber';
import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react';
import { convertStringToTurnArray, TurnType } from './CubeUtils';
import RubiksCube from './RubiksCube';

const permutationT = 'R U Ri Ui Ri F R2 Ui Ri Ui R U Ri Fi';
const permutationTArray = convertStringToTurnArray(permutationT);

type CubeStateAction = {
  type: 'toggle';
};
const cubeStateReducer = (state: TurnType[], action: CubeStateAction) => {
  switch (action.type) {
    case 'toggle':
      return state.length === 0 ? permutationTArray : [];

    default:
      throw new Error('invalid action type for cubeStateReducer');
  }
};

const turnTime = 0.2;
const RubiksCubePreview = () => {
  const [cubeState, dispatchCubeState] = useReducer(cubeStateReducer, []);

  const togglePermutation = () => {
    dispatchCubeState({ type: 'toggle' });
  };

  useEffect(() => {
    //waits before turning so the rubiks cube loads
    const timeout = setTimeout(() => {
      togglePermutation();
    }, 1000);

    // runs permutation in a loop
    const intervalTime = Math.round(
      turnTime * permutationTArray.length * 1000 * 2 + 500
    );
    const interval = setInterval(() => togglePermutation(), intervalTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const [isMouseOver, setIsMouseOver] = useState(false);
  const router = useRouter();

  return (
    <div
      className="w-[30vw] h-[30vw] relative"
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
    >
      <Canvas className="">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <group
          onClick={() => {
            router.push('/rubiks');
          }}
        >
          <RubiksCube
            dramaticRotation={true}
            cubeState={cubeState}
            turnTime={turnTime}
          />
        </group>
      </Canvas>
      {isMouseOver && (
        <span className="absolute z-30 top-12 left-12 ">
          click cube to play around!!!
        </span>
      )}
    </div>
  );
};

export default RubiksCubePreview;
