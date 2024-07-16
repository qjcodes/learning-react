import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

const ScrollContextProvider = ({ children }) => {
  const elementRef = useRef(null);

  const scrollToElement = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ elementRef, scrollToElement }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider
