import { Dispatch, SetStateAction, useState } from 'react';
import { turnArrayToString, TurnType } from './CubeUtils';
import { convertStringToTurnArray } from './CubeUtils';

type UiProps = {
  setCubeState: (turns: TurnType[]) => void;
};

export const Ui = (props: UiProps) => {
  const [notationInput, setNotationInput] = useState('');

  return (
    <div className="z-10 flex items-center content-center justify-between text-gray-700 bg-blue-200 border-black">
      <div>cube state:</div>
      <input
        className="w-24 m-4 w-96"
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
  );
};
