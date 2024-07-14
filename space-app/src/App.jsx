import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GlobalStyles from "./components/GlobalStyles";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Gallery from "./components/Gallery";
import photos from "./photos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

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
  /* padding: 0 1rem; */

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
  const [photosGallery, setPhotosGallery] = useState(photos);
  const [photoSelected, setPhotoSelected] = useState(null);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const filteredPhotos = () =>
      photos.filter((photo) => {
        const filterTag = !tag || photo.tagId === tag;
        const filterTitle =
          !filter || photo.title.toLowerCase().includes(filter.toLowerCase());
        return filterTag && filterTitle;
      });
    setPhotosGallery(filteredPhotos);
  }, [filter, tag]);

  const toggleFavorite = (photo) => {
    if (photo.id === photoSelected?.id) {
      setPhotoSelected({
        ...photoSelected,
        favorite: !photo.favorite,
      });
    }
    setPhotosGallery(
      photosGallery.map((photoGallery) => ({
        ...photoGallery,
        favorite:
          photoGallery.id === photo.id
            ? !photo.favorite
            : photoGallery.favorite,
      }))
    );
  };

  return (
    <>
      <GlobalStyles />
      <GradientBackground>
        <AppContainer>
          <Header filter={filter} setFilter={setFilter} />
          <MainContainer>
            <Sidebar />
            <GalleryContent>
              <Banner
                title="La galeria mas completa de fotos del espacio"
                backgroundImage={banner}
              />
              <Gallery
                photos={photosGallery}
                selectPhoto={(photo) => setPhotoSelected(photo)}
                toggleFavorite={toggleFavorite}
                setTag={setTag}
              />
            </GalleryContent>
          </MainContainer>
        </AppContainer>
        <Footer />
        <ModalZoom
          photo={photoSelected}
          onClose={() => setPhotoSelected(null)}
          toggleFavorite={toggleFavorite}
        />
      </GradientBackground>
    </>
  );
};

export default App;
