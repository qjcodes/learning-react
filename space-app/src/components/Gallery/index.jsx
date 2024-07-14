import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Image from "./Image";
import Loading from "../Loading";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = () => {
  const { state } = useContext(GlobalContext);
  return state.photosGallery.length === 0 ? (
    <Loading />
  ) : (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue por la galeria</Title>;
          <ImageContainer>
            {state.photosGallery.map((photo) => (
              <Image key={photo.id} photo={photo} />
            ))}
          </ImageContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
