import { Dispatch, SetStateAction, useState } from 'react';
import { turnArrayToString, TurnType } from './CubeUtils';
import { convertStringToTurnArray } from './CubeUtils';

type RubiksUiProps = {
  setCubeState: (turns: TurnType[]) => void;
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

  const sanitizeAndSetNotationInput = (value: string) => {
    value = value.toUpperCase().replace(/\s+/g, ''); //delete whitespace

    const validateInput = value.match(/[RLFBUD'2 ]/g);
    if (validateInput !== null) value = validateInput.join('');

    setNotationInput(value);

    value = value.replaceAll(/['I]/g, 'i'); // example: RI => Ri, L' => Li
    const cubeState = convertStringToTurnArray(value);
    props.setCubeState(cubeState);
  };

  return (
    <div className="z-10 flex flex-col px-4 space-y-8 text-2xl text-center text-white bg-fuchsia-400 w-96">
      {/* <div className="flex items-center content-center justify-between"></div> */}

      <div>
        <div>input: </div>
        <div className="text-md">
          R R&apos; R2 L L&apos; L2 F F&apos; F2 B B&apos; B2 U U&apos; U2 D
          D&apos; D2
        </div>
        <input
          className="w-full bg-transparent border-2 border-white rounded-md"
          type="text"
          value={notationInput}
          onChange={(e) => {
            sanitizeAndSetNotationInput(e.target.value);
          }}
        />
      </div>

      <div>
        <div>turn time: {props.turnTime} s</div>
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
      <ul>
        {algorithms.map(({ algorithm, name }, idx) => (
          <button
            className="w-full px-2"
            key={idx}
            onClick={() => sanitizeAndSetNotationInput(algorithm)}
          >
            {name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default RubiksUi;
