"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  ReactElement,
} from "react";

interface NavStateContextType {
  navState: NavItem;
  setNavState: (navState: NavItem) => void;
}

const NavStateContext = createContext<NavStateContextType | undefined>(
  undefined
);

const NavStateProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [navState, setNavState] = useState<NavItem>("model_library");

  return (
    <NavStateContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavStateContext.Provider>
  );
};

export const useNavStateContext = (): NavStateContextType => {
  const context = useContext(NavStateContext);

  if (!context) {
    throw new Error(
      "useNavStateContext must be used within a NavStateProvider"
    );
  }

  return context;
};

export default NavStateProvider;
