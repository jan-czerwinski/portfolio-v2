import { BufferGeometry, Material, Mesh } from 'three/src/Three';
import { MutableRefObject } from 'react';

//TODO extract this to RubiksCube
export type CubiesRefType = MutableRefObject<
  Mesh<BufferGeometry, Material | Material[]>[]
>;

export const logRubiksCube = (rubiksCube: CubiesRefType) => {
  console.log(
    rubiksCube?.current?.map(
      ({ position }) => `${position.x} ${position.y} ${position.z}`
    )
  );
};

/**
 * these are the helper funnctions, types and consts that define the rubiks cube
 * @see {@link https://en.wikipedia.org/wiki/Rubik%27s_Cube#Move_notation}
 *
 */

export type TurnDirectionType = 'R' | 'L' | 'F' | 'B' | 'U' | 'D';
export const turnDirectionArray: TurnDirectionType[] = [
  'R',
  'L',
  'F',
  'B',
  'U',
  'D',
];

export type TurnModifierType = '' | 'i' | '2';
export const turnModifierArray: TurnModifierType[] = ['', 'i', '2'];

export type TurnType = {
  direction: TurnDirectionType;
  modifier: TurnModifierType;
};

/**
 * TODO
 */
export const reverseTurn = ({ modifier, direction }: TurnType): TurnType => {
  switch (modifier) {
    case '':
      modifier = 'i';
      break;
    case 'i':
      modifier = '';
      break;
    default:
      //case '2' - does nothing because this turn doesnt have direction
      break;
  }

  return {
    direction,
    modifier,
  };
};

/**
 * @returns {Set<string>} set of all possible turn strings to make in the rubiks cube
 */
export const getAllPossibleTurnsSet = (): Set<string> => {
  const turnArray = [];
  for (let turnProto of turnDirectionArray) {
    for (let turnModifier of turnModifierArray) {
      turnArray.push(`${turnProto}${turnModifier}`);
    }
  }

  const turnSet = new Set(turnArray);
  return turnSet;
};

export const getAllPossibleTurnTypesArray = (): TurnType[] => {
  const turnArray: TurnType[] = [];
  for (const direction of turnDirectionArray) {
    for (const modifier of turnModifierArray) {
      turnArray.push({ direction, modifier });
    }
  }

  return turnArray;
};

export const getRandomTurn = () => {
  const allPossibleTurns = getAllPossibleTurnTypesArray();
  const randomTurn =
    allPossibleTurns[Math.floor(Math.random() * allPossibleTurns.length)];
  return randomTurn;
};

export const convertStringToTurnArray = (text: string): TurnType[] => {
  const output: TurnType[] = [];

  // loop checks every item and its right neighbour
  text += ' '; // this is needed to ensure the idx doesn't go out of bounds
  for (let idx = 0; idx < text.length - 1; idx++) {
    const direction = text[idx];
    if (!turnDirectionArray.includes(direction as TurnDirectionType)) continue;
    const modifier = turnModifierArray.includes(
      text[idx + 1] as TurnModifierType
    )
      ? text[idx + 1]
      : '';

    const turn: TurnType = {
      modifier: modifier as TurnModifierType,
      direction: direction as TurnDirectionType,
    };
    output.push(turn);
  }
  return output;
};

const turnToString = (turn: TurnType): string =>
  `${turn.direction}${turn.modifier}`;

export const turnArrayToString = (turnArray: TurnType[]): string =>
  turnArray.map(turnToString).join(' ');
