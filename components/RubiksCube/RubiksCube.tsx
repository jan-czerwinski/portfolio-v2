import { useEffect, useMemo, useRef, useState } from 'react';
import { BufferGeometry, Euler, Material, Matrix4, Mesh, Vector3 } from 'three';
import {
  CubiesRefType,
  reverseTurn,
  turnArrayToString,
  TurnType,
} from './CubeUtils';
import Cubie, { CubieProps } from './Cubie';

const getInitialCubieProps = (): CubieProps[] => {
  let initialCubieProps: CubieProps[] = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (!(x === 0 && y === 0 && z === 0))
          initialCubieProps.push({
            targetPosition: new Vector3(x, y, z),
            drawFaces: {
              up: y === 1,
              down: y === -1,
              left: x === -1,
              right: x === 1,
              front: z === 1,
              back: z === -1,
            },
          });
      }
    }
  }
  initialCubieProps = initialCubieProps.map(({ targetPosition, drawFaces }) => {
    const scaledPosition = targetPosition.multiplyScalar(4);
    return { drawFaces, targetPosition: scaledPosition };
  });
  return initialCubieProps;
};

type AxisType = 'x' | 'y' | 'z';
/** extracts Cubies on given position on a certain axis
 * @param {Mesh<BufferGeometry, Material | Material[]>} cubie - mesh of a cubie
 * @param {AxisType} axis - axis on which offset is set
 * @param {number} offset - offset from center
 */
const cubieExtractor = (
  cubie: Mesh<BufferGeometry, Material | Material[]>,
  axis: AxisType,
  offset: number
) => cubie.position[axis] === offset;

/** turns the rubiks cube based on cube notation
 * @param {CubiesRefType} rubiksCube - ref to the array of Cubies which make up the rubiks cube
 * @param {TurnType} turn - turn in cube notation
 */
type matrixAndCubiesType = {
  matrix: Matrix4;
  cubieIdxsToTurn: number[];
};
const rotationMatrixFromTurn = (
  rubiksCube: CubiesRefType,
  turn: TurnType
  // groupRef: MutableRefObject<Group>,
): matrixAndCubiesType => {
  let angle = Math.PI / 2;

  if (turn.modifier === '2') {
    angle *= 2;
  } else if (turn.modifier === 'i') {
    angle *= -1;
  }

  let extractorAxis: AxisType;
  let extractorOffset = 4;
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

  const matrix = new Matrix4();
  const eulerAngle = new Euler(0, 0, 0);
  eulerAngle[extractorAxis] = angle;
  matrix.makeRotationFromEuler(eulerAngle);

  const cubieIdxsToTurn: number[] = [];
  for (let idx = 0; idx < rubiksCube.current.length; idx++) {
    const cubie = rubiksCube.current[idx];
    if (cubieExtractor(cubie, extractorAxis, extractorOffset)) {
      console.log(idx);
      cubieIdxsToTurn.push(idx);
    }
  }

  return { matrix, cubieIdxsToTurn };
};

const DIMENSION = 3;
const CUBIE_COUNT = 26; //TODO base on dimensions

type RubiksCubeProps = {
  cubeState: TurnType[];
};
const RubiksCube = ({ cubeState }: RubiksCubeProps) => {
  const rubiksCube = useRef<THREE.Mesh[]>(Array(CUBIE_COUNT).fill(null!));
  const [allCubieProps, setAllCubieProps] = useState(getInitialCubieProps());
  const groupRef = useRef<THREE.Group>(null!);
  const [prevCubeState, setPrevCubeState] = useState<TurnType[]>([]);

  useEffect(() => {
    console.log(turnArrayToString(cubeState));
    //TODO find previousCubeState and cubeState differences and apply them accordingly

    const findIdxOfFirstDifferentTurn = (): {
      lastEqualIdx: number;
      diff: -1 | 1 | 0;
    } => {
      //prev < curr => 1 ; prev > curr => -1 ; prev = curr => 0
      const diff =
        prevCubeState.length < cubeState.length
          ? 1
          : prevCubeState.length === cubeState.length
          ? 0
          : -1;
      for (
        let idx = 0;
        idx < Math.max(prevCubeState.length, cubeState.length);
        idx++
      ) {
        const prevTurn = prevCubeState[idx];
        const currTurn = cubeState[idx];
        if (!prevTurn || !currTurn) return { lastEqualIdx: idx - 1, diff };
        if (
          Object.entries(prevTurn).toString() !==
          Object.entries(currTurn).toString()
        )
          return { lastEqualIdx: idx - 1, diff };
      }
      return { lastEqualIdx: cubeState.length - 1, diff };
    };

    const { lastEqualIdx, diff } = findIdxOfFirstDifferentTurn();

    //so this finds only the turns that differ at some point
    const currTurns = cubeState.slice(lastEqualIdx + 1, cubeState.length);
    const prevTurns = prevCubeState.slice(
      lastEqualIdx + 1,
      prevCubeState.length
    );

    // turns with both turn direction and order reversed
    const reversedTurns = prevTurns.reverse().map(reverseTurn);

    // first the reversed turns get applied, then the current catch up
    const turnsToApply: TurnType[] = [...reversedTurns, ...currTurns];
    for (const turn of turnsToApply) {
      const { matrix, cubieIdxsToTurn } = rotationMatrixFromTurn(
        rubiksCube,
        turn
      );

      const targetPositionArray = allCubieProps.map(
        (cubieProp) => cubieProp.targetPosition
      );

      cubieIdxsToTurn.map((idx) => {
        // const cubie = rubiksCube.current[idx];
        targetPositionArray[idx].applyMatrix4(matrix);
        targetPositionArray[idx].round();
      });
      console.log('reversedTurns: ', reversedTurns);
      console.log('cubieIdxsToTurn: ', cubieIdxsToTurn);
    }

    setPrevCubeState(cubeState);
  }, [cubeState]);

  return (
    <group ref={groupRef}>
      {allCubieProps.map(({ targetPosition, drawFaces }, idx) => {
        return (
          <Cubie
            targetPosition={targetPosition}
            key={idx}
            drawFaces={drawFaces}
            size={2}
            passRef={(element: any) => (rubiksCube.current[idx] = element)}
          />
        );
      })}
    </group>
  );
};

export default RubiksCube;
