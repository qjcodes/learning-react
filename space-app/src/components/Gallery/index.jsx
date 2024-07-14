import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Image from "./Image";

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

const Gallery = ({ photos = [], selectPhoto, toggleFavorite, setTag }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue por la galeria</Title>;
          <ImageContainer>
            {photos.map((photo) => (
              <Image
                key={photo.id}
                photo={photo}
                requestZoom={selectPhoto}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </ImageContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
