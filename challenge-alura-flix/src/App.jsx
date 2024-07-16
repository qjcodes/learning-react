import React from "react";
import Home from "./pages/Home";
import GlobalContextProvider from "@/context/GlobalContext";
import ScrollContextProvider from "@/context/ScrollContext";
import AppRoutes from "@/Routes";

const App = () => {
  return (
    <GlobalContextProvider>
      <ScrollContextProvider>
        <AppRoutes />
      </ScrollContextProvider>
    </GlobalContextProvider>
  );
};

export default App;
``;
