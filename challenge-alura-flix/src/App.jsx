import React from "react";
import Home from "./pages/Home";
import Layout from "@/components/Layout";
import GlobalContextProvider from "@/context/GlobalContext";
import ScrollContextProvider from "@/context/ScrollContext";

const App = () => {
  return (
    <GlobalContextProvider>
      <ScrollContextProvider>
        <Layout>
          <Home />
        </Layout>
      </ScrollContextProvider>
    </GlobalContextProvider>
  );
};

export default App;
``;
