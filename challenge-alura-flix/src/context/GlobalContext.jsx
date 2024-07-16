import { createContext, useEffect, useReducer } from "react";
import { getData } from "@/api/api";
import reducer, { initialState } from "@/context/reducer";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getData("/categories", dispatch, "SET_CATEGORIES");
    getData("/videos", dispatch, "SET_VIDEOS");
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
