import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GlobalStyles from "./components/GlobalStyles";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Gallery from "./components/Gallery";
// import photos from "./photos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { find } from "./api/api";
import GlobalContextProvider from "./context/GlobalContext";

const GradientBackground = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;

  img {
    width: 212px;
  }
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <GradientBackground>
        <GlobalContextProvider>
          <AppContainer>
            <Header />
            <MainContainer>
              <Sidebar />
              <GalleryContent>
                <Banner
                  title="La galeria mas completa de fotos del espacio"
                  backgroundImage={banner}
                />
                <Gallery />
              </GalleryContent>
            </MainContainer>
          </AppContainer>
          <Footer />
          <ModalZoom />
        </GlobalContextProvider>
      </GradientBackground>
    </>
  );
};

export default App;
