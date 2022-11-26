import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { getContrastColor } from '../../utils/colorUtils';
import {
  convertStringToTurnArray,
  getAllPossibleTurnsSet,
  getAllPossibleTurnTypesArray,
  turnArrayToString,
  TurnType,
} from './CubeUtils';

type RubiksUiProps = {
  color: string;
  cubeState: TurnType[];
  setCubeState: Dispatch<SetStateAction<TurnType[]>>;
  turnTime: number;
  setTurnTime: (time: number) => void;
};
type AlgorithmType = {
  name: string;
  algorithm: string;
};
const algorithms: AlgorithmType[] = [
  {
    name: 'T permutation',
    algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
  },
  {
    name: 'Y permutation',
    algorithm: "R' U' R U' L R U2 R' U' R U2 L' U R2 U R",
  },
  {
    name: 'nice cross pattern',
    algorithm: "D2 U' R B2 D' R' D' U L' R D R F2 D' L R2",
  },
  {
    name: 'clear',
    algorithm: '',
  },
];

const RubiksUi = (props: RubiksUiProps) => {
  const [notationInput, setNotationInput] = useState('');

  useEffect(() => {
    setNotationInput(turnArrayToString(props.cubeState));
  }, [props.cubeState]);

  const sanitizeAndSetNotationInput = (value: string) => {
    value = value.toUpperCase().replace(/\s+/g, ''); //delete whitespace

    const validateInput = value.match(/[RLFBUDI'2 ]/g);
    if (validateInput !== null) value = validateInput.join('');

    setNotationInput(value);

    value = value.replaceAll(/['I]/g, 'i'); // example: RI => Ri, L' => Lis
    const cubeState = convertStringToTurnArray(value);
    props.setCubeState(cubeState);
  };

  const allTurns = getAllPossibleTurnTypesArray();

  return (
    <div
      style={{ color: getContrastColor(props.color) }}
      className="flex flex-col justify-between h-screen text-xl "
    >
      <div className="z-20 flex w-screen px-4 text-center justify-evenly">
        <div className="w-full ">
          <div className="my-2 font-semibold">all moves: </div>
          <div className="grid grid-cols-6 gap-1 mb-2 place-content-center text-md">
            {allTurns.map((turn, idx) => (
              <button
                key={idx}
                className="rounded-md hover:outline"
                onClick={
                  () => props.setCubeState((turns) => [...turns, turn])
                  // sanitizeAndSetNotationInput(`${notationInput} ${turn}`)
                }
              >
                {`${turn.direction}${turn.modifier}`}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="my-2 font-semibold">algorigthms:</div>
          <div className="flex flex-col">
            {algorithms.map(({ algorithm, name }, idx) => (
              <button
                className="px-2 "
                key={idx}
                onClick={() => sanitizeAndSetNotationInput(algorithm)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="my-2 font-semibold">
            turn time: {props.turnTime} s
          </div>
          <input
            className="w-full"
            type="range"
            value={props.turnTime}
            min={0.05}
            max={1}
            step={0.05}
            onChange={(e) => props.setTurnTime(parseFloat(e.target.value))}
          ></input>
        </div>
      </div>

      <div className="z-20 w-full px-8 py-2">
        <div className="my-2 font-semibold ">
          cube state in{' '}
          <a
            className="underline underline-offset-2"
            href="https://en.wikipedia.org/wiki/Rubik%27s_Cube#Move_notation"
          >
            standard move notation:
          </a>
        </div>
        <input
          className="w-full text-xl bg-transparent border-2 border-white rounded-md"
          type="text"
          value={notationInput}
          onChange={(e) => {
            sanitizeAndSetNotationInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default RubiksUi;
