import React, { ReactNode, createContext, useContext, useState } from "react";

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error(
      "useColorContext must be used within a MenuContextProvider"
    );
  }
  return context;
};

type ColorContextType = {
  color: string;

  setColor: React.Dispatch<React.SetStateAction<string>>;
};
export const ColorContextProvider = ({
  children,
  defaultColor,
}: {
  children: ReactNode;
  defaultColor: string;
}) => {
  const [color, setColor] = useState<string>(defaultColor);

  const value = { color, setColor };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
