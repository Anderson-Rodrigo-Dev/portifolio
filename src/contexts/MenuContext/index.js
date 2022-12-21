import { createContext, useState } from "react";

export const MenuContext = createContext({});

export const MenuProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};