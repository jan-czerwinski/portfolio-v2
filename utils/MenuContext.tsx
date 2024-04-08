// MyContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define the shape of your context
type MyContextType = {
  myStringState: string;
  setMyStringState: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context
const MenuContext = createContext<MyContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};

// Create the provider component
export const MenuContextProvider: React.FC = ({ children }) => {
  const [myStringState, setMyStringState] = useState<string>("");
  const value = { myStringState, setMyStringState };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
