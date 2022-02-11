import { useEffect, useMemo, useRef, useState } from 'react';
import { BufferGeometry, Euler, Material, Matrix4, Mesh, Vector3 } from 'three';
import { CubiesRefType, reverseTurn, TurnType } from './CubeUtils';
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
  console.log(targetPositions);

  // initialCubieProps = initialCubieProps.map(({ targetPosition, drawFaces }) => {
  //   const scaledPosition = targetPosition.multiplyScalar(4);
  //   return { drawFaces, targetPosition: scaledPosition };
  // });
  return { cubieDrawFaces, targetPositions };
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
  rubiksCube: CubiesRefType, //TODO  TYPE should be Vector3[]
  turn: TurnType
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

  const eulerAngle = new Euler(0, 0, 0);
  eulerAngle[extractorAxis] = angle;
  const matrix = new Matrix4();
  matrix.makeRotationFromEuler(eulerAngle);

  const cubieIdxsToTurn: number[] = [];
  for (let idx = 0; idx < rubiksCube.current.length; idx++) {
    const cubie = rubiksCube.current[idx];
    if (cubieExtractor(cubie, extractorAxis, extractorOffset)) {
      rubiksCube.current[idx].applyMatrix4(matrix);
      cubieIdxsToTurn.push(idx);
    }
  }

  return { matrix, cubieIdxsToTurn };
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

type RubiksCubeProps = {
  cubeState: TurnType[];
};
const RubiksCube = ({ cubeState }: RubiksCubeProps) => {
  const [prevCubeState, setPrevCubeState] = useState<TurnType[]>([]);
  const rubiksCube = useRef<THREE.Mesh[]>(Array(CUBIE_COUNT).fill(null!));

  const initialCubieProps = useMemo(getInitialCubieProps, []);

  useEffect(() => {
    const lastEqualTurnIdx = findIdxOfFirstDifferentTurn(
      prevCubeState,
      cubeState
    );

    //so this finds only the turns that differ at some point
    const currTurns = cubeState.slice(lastEqualTurnIdx + 1, cubeState.length);
    const prevTurns = prevCubeState.slice(
      lastEqualTurnIdx + 1,
      prevCubeState.length
    );

    // turns with both turn direction and order reversed
    const reversedTurns = prevTurns.reverse().map(reverseTurn);

    // deep copy cubie cubie target positions array
    // const newCubieTargetPositions = cubieTargetPositions.map((vec) =>
    //   vec.clone()
    // );

    // first the reversed turns get applied, then the current catch up
    const turnsToApply: TurnType[] = [...reversedTurns, ...currTurns];
    for (const turn of turnsToApply) {
      const { matrix, cubieIdxsToTurn } = rotationMatrixFromTurn(
        rubiksCube,
        turn
      );
      // console.log('prev: ', newCubieTargetPositions);
      console.log(rubiksCube.current[0].position);
      rubiksCube.current[0].applyMatrix4(matrix);

      console.log(rubiksCube.current[0].position);

      // cubieIdxsToTurn.map((idx) => {
      // rubiksCube.current[idx].applyMatrix4(matrix);

      //this doesnt make sense
      // newCubieTargetPositions[idx].applyMatrix4(matrix);
      // newCubieTargetPositions[idx].round();
      // });
    }

    // console.log('curr: ', newCubieTargetPositions);

    // setCubieTargetPositions(newCubieTargetPositions);

    setPrevCubeState(cubeState);
  }, [cubeState]);

  return (
    <group>
      {[...Array(CUBIE_COUNT)].map((_, idx) => {
        return (
          <Cubie
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
