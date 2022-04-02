import { Dispatch, SetStateAction, useState } from 'react';
import { turnArrayToString, TurnType } from './CubeUtils';
import { convertStringToTurnArray } from './CubeUtils';

type RubiksUiProps = {
  setCubeState: (turns: TurnType[]) => void;
  turnTime: number;
  setTurnTime: (time: number) => void;
};

const RubiksUi = (props: RubiksUiProps) => {
  const [notationInput, setNotationInput] = useState('');

  return (
    <div className="z-10 flex flex-col">
      <div className="flex items-center content-center justify-between text-gray-700 bg-blue-200 border-black ">
        <div>cube state:</div>
        <input
          className="m-4 w-96"
          type="text"
          value={notationInput}
          onChange={(e) => {
            let value = e.target.value;

            value = value.toUpperCase();

            const validateInput = value.match(/[RLFBUD'2 ]/g);
            if (validateInput !== null) value = validateInput.join('');

            setNotationInput(value);

            value = value.replaceAll(/['I]/g, 'i'); // example: RI => Ri, L' => Li
            const cubeState = convertStringToTurnArray(value);
            props.setCubeState(cubeState);
          }}
        />
      </div>
      <div className="flex w-full justify-evenly">
        <div className="w-2/5 text-center">turn time: {props.turnTime} s</div>
        <input
          className="w-3/5"
          type="range"
          value={props.turnTime}
          min={0.05}
          max={2}
          step={0.05}
          onChange={(e) => props.setTurnTime(parseFloat(e.target.value))}
        ></input>
      </div>
    </div>
  );
};

export default RubiksUi;
