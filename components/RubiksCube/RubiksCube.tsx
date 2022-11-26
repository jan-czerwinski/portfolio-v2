import { useFrame } from '@react-three/fiber';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { Euler, Matrix4, Object3D, Vector3 } from 'three';
import { usePrevious } from '../../utils/usePrevious';
import { reverseTurn, turnArrayToString, TurnType } from './CubeUtils';
import Cubie, { CubieDrawFacesType } from './Cubie';

const getInitialCubieProps = (): {
  cubieDrawFaces: CubieDrawFacesType[];
  targetPositions: Vector3[];
} => {
  const cubieDrawFaces: CubieDrawFacesType[] = [];
  const targetPositions: Vector3[] = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (!(x === 0 && y === 0 && z === 0)) {
          cubieDrawFaces.push({
            up: y === 1,
            down: y === -1,
            left: x === -1,
            right: x === 1,
            front: z === 1,
            back: z === -1,
          });
          targetPositions.push(new Vector3(x, y, z));
        }
      }
    }
  }
  return { cubieDrawFaces, targetPositions };
};

type AxisType = 'x' | 'y' | 'z';
/** extracts Cubies on given position on a certain axis
 * @param {Vector3} cubiePos - vector3 position of cubie
 * @param {AxisType} axis - axis on which offset is set
 * @param {number} offset - offset from center
 */
const cubieExtractor = (cubiePos: Vector3, axis: AxisType, offset: number) =>
  cubiePos[axis] === offset;

/** turns the rubiks cube based on cube notation
 * @param {CubiesRefType} rubiksCube - ref to the array of Cubies which make up the rubiks cube
 * @param {TurnType} turn - turn in cube notation
 */

type TurnTransformationType = {
  cubieIdxArray: number[];
  eulerRotation: Euler;
};
const rotationMatrixFromTurn = (
  cubiesPosition: Vector3[],
  turn: TurnType
): TurnTransformationType => {
  let angle = Math.PI / 2;

  if (turn.modifier === '2') {
    angle *= 2;
  } else if (turn.modifier === 'i') {
    angle *= -1;
  }

  let extractorAxis: AxisType;
  let extractorOffset = 1;
  switch (turn.direction) {
    case 'U':
      extractorAxis = 'y';
      angle = -angle;
      break;
    case 'D':
      extractorAxis = 'y';
      extractorOffset = -extractorOffset;
      break;

    case 'F':
      extractorAxis = 'z';
      angle = -angle;
      break;
    case 'B':
      extractorAxis = 'z';
      extractorOffset = -extractorOffset;
      break;

    case 'R':
      extractorAxis = 'x';
      angle = -angle;
      break;
    case 'L':
      extractorAxis = 'x';
      extractorOffset = -extractorOffset;
      break;

    default:
      extractorAxis = 'y';
      console.error(`No ${turn.direction} turn direction defined!`);
      break;
  }

  const eulerAngle = new Euler(0, 0, 0);
  eulerAngle[extractorAxis] = angle;

  const cubieIdxsToTurn: number[] = [];
  for (let idx = 0; idx < cubiesPosition.length; idx++) {
    const cubiePos = cubiesPosition[idx];
    if (cubieExtractor(cubiePos, extractorAxis, extractorOffset)) {
      cubieIdxsToTurn.push(idx);
    }
  }
  return {
    cubieIdxArray: cubieIdxsToTurn,
    eulerRotation: eulerAngle,
  };
};

/**
 * @param {TurnType[]} prevCubeState array of turns describing the cube before any change
 * @param {TurnType[]} cubeState array of turns describing the cube currently
 * @returns {number} index of last turn that is equal from left of array
 */
const findIdxOfFirstDifferentTurn = (
  prevCubeState: TurnType[],
  cubeState: TurnType[]
): number => {
  for (
    let idx = 0;
    idx < Math.max(prevCubeState.length, cubeState.length);
    idx++
  ) {
    const prevTurn = prevCubeState[idx];
    const currTurn = cubeState[idx];
    if (!prevTurn || !currTurn) return idx - 1;
    if (
      Object.entries(prevTurn).toString() !==
      Object.entries(currTurn).toString()
    )
      return idx - 1;
  }
  return cubeState.length - 1;
};

const DIMENSION = 3;
const CUBIE_COUNT = 26; //TODO base on dimensions

type turnQueueAction = {
  type: 'removeFirst' | 'add';
  toAdd?: TurnType[];
};

const turnQueueReducer = (state: TurnType[], action: turnQueueAction) => {
  switch (action.type) {
    case 'removeFirst':
      return state.slice(1, state.length);
    case 'add':
      action.toAdd ??= [];
      return [...state, ...action.toAdd];
    default:
      throw new Error('invalid action type for turnQueue reducer');
  }
};

type RubiksCubeProps = {
  cubeState: TurnType[];
  turnTime: number;
  setCubeState: Dispatch<SetStateAction<TurnType[]>>;
  dramaticRotation?: boolean;
};
const RubiksCube = ({
  dramaticRotation,
  turnTime,
  cubeState,
  setCubeState,
}: RubiksCubeProps) => {
  const prevCubeState = usePrevious(cubeState);

  const rubiksCube = useRef<THREE.Mesh[]>(Array(CUBIE_COUNT).fill(null!));
  const initialCubieProps = useMemo(getInitialCubieProps, []);

  //turns queued for animation
  const [turnQueue, dispatchTurnQueue] = useReducer(turnQueueReducer, []);

  //is animating
  const [transforming, setTransforming] = useState(false);

  //fraction (from 0 to 1.0) of turn done
  const [transformationFraction, setTransformationFraction] =
    useState<number>(0);

  //cubie position on last full turn
  const [cubiePositionAfterLastTurn, setCubiePositionAfterLastTurn] = useState<
    Vector3[]
  >([]);
  useEffect(() => {
    //set initial cubie position after ref loads
    setCubiePositionAfterLastTurn(
      rubiksCube.current.map((cubie) => cubie.position)
    );
  }, []);

  useEffect(() => {
    if (turnArrayToString(prevCubeState) !== turnArrayToString(cubeState)) {
      //find last equal turn (cube only reverses as many moves as it needs to)
      const lastEqualTurnIdx = findIdxOfFirstDifferentTurn(
        prevCubeState,
        cubeState
      );

      //this finds only the turns that differ at some point
      const currTurns = cubeState.slice(lastEqualTurnIdx + 1, cubeState.length);
      const prevTurns = prevCubeState.slice(
        lastEqualTurnIdx + 1,
        prevCubeState.length
      );

      // turns with both turn direction and order reversed
      const reversedTurns = prevTurns.reverse().map(reverseTurn);

      // first the reversed turns get applied, then the current catch up
      const turnsToApply: TurnType[] = [...reversedTurns, ...currTurns];
      dispatchTurnQueue({ type: 'add', toAdd: turnsToApply });
    }
  }, [prevCubeState, cubeState]);

  useFrame((state, delta) => {
    if (transforming || turnQueue.length === 0 || !rubiksCube.current[0])
      return;
    setTransforming(true);

    //find what fraction of a turn do this frame
    let currTurnFraction = delta / turnTime;

    //make sure that fractions always add up to 1
    if (currTurnFraction + transformationFraction > 1) {
      const fractionLeft = 1 - transformationFraction;
      currTurnFraction = fractionLeft;
    }

    //set fraction (1 == full turn)
    setTransformationFraction(transformationFraction + currTurnFraction);

    //get current turn euler rotation
    const { cubieIdxArray, eulerRotation } = rotationMatrixFromTurn(
      cubiePositionAfterLastTurn,
      turnQueue[0]
    );

    //scale current euler rotation to fraction for frame
    const fractionEuler = new Euler();
    fractionEuler.setFromVector3(
      eulerRotation.toVector3().multiplyScalar(currTurnFraction)
    );

    const matrixTransform = new Matrix4();
    matrixTransform.makeRotationFromEuler(fractionEuler);

    // apply rotation
    for (const cubieIdx of cubieIdxArray) {
      rubiksCube.current[cubieIdx].applyMatrix4(matrixTransform);
    }

    //clean up after full turn
    if (transformationFraction >= 0.999) {
      dispatchTurnQueue({ type: 'removeFirst' });
      setTransformationFraction(0);
      for (const cubieIdx of cubieIdxArray) {
        //round position to fix any inconsistencies during animation
        rubiksCube.current[cubieIdx].position.round();
      }
      setCubiePositionAfterLastTurn(
        rubiksCube.current.map((cubie) => cubie.position)
      );
    }
    setTransforming(false);
  });

  useFrame((scene) => {
    if (dramaticRotation)
      scene.scene.rotateOnWorldAxis(new Vector3(0.3, 1, 0.2), 0.005);
  });
  return (
    <group>
      <mesh />
      {[...Array(CUBIE_COUNT)].map((_, idx) => {
        return (
          <Cubie
            move={(turn) =>
              setCubeState((prevCubeState) => [...prevCubeState, turn])
            }
            drawFaces={initialCubieProps.cubieDrawFaces[idx]}
            targetPosition={initialCubieProps.targetPositions[idx]}
            key={idx}
            size={0.9}
            passRef={(element: any) => (rubiksCube.current[idx] = element)}
          />
        );
      })}
    </group>
  );
};

export default RubiksCube;
