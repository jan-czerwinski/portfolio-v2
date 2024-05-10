import React, { createContext, useContext, useState } from "react";

type MyContextType = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

const MenuContext = createContext<MyContextType | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};

export const MenuContextProvider: React.FC = ({ children }) => {
  const [color, setColor] = useState<string>("");
  const value = { color, setColor };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
