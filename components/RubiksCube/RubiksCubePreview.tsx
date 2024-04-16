import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { TurnType, convertStringToTurnArray } from "./CubeUtils";
import RubiksCube from "./RubiksCube";

const permutationT = "R U Ri Ui Ri F R2 Ui Ri Ui R U Ri Fi";
const permutationTArray = convertStringToTurnArray(permutationT);

type CubeStateAction = {
  type: "toggle";
};
const cubeStateReducer = (state: TurnType[], action: CubeStateAction) => {
  switch (action.type) {
    case "toggle":
      return state.length === 0 ? permutationTArray : [];

    default:
      throw new Error("invalid action type for cubeStateReducer");
  }
};

const turnTime = 0.2;

type RubiksCubePreviewProps = {
  color: string;
};
const RubiksCubePreview = ({ color }: RubiksCubePreviewProps) => {
  const [cubeState, dispatchCubeState] = useReducer(cubeStateReducer, []);

  const togglePermutation = () => {
    dispatchCubeState({ type: "toggle" });
  };

  useEffect(() => {
    //waits before turning so the rubiks cube loads
    const timeout = setTimeout(() => {
      togglePermutation();
    }, 1000);

    // runs permutation in a loop
    const intervalTime = Math.round(
      turnTime * permutationTArray.length * 1000 * 2 + 1000
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
      className="w-[30vw] h-[30vw] relative cursor-pointer"
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onClick={() => {
        router.push({ pathname: "/rubiks", query: { color } });
      }}
    >
      <Canvas className="">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RubiksCube
          setCubeState={() => {}}
          dramaticRotation={true}
          cubeState={cubeState}
          turnTime={turnTime}
        />
      </Canvas>
      {isMouseOver && (
        <span className="absolute z-30 top-16 left-16 ">click here</span>
      )}
    </div>
  );
};

export default RubiksCubePreview;
