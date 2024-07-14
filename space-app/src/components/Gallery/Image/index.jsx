import React from "react";
import styled from "styled-components";
import IconButton from "../../IconButton";

const Figure = styled.figure`
  width: ${(props) => (props.$expand ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    width: 100%;
    min-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = ({ photo, expand = false, requestZoom, toggleFavorite }) => {
  const favoriteIcon = photo.favorite
    ? "/icons/active-favorite.png"
    : "/icons/favorite.png";

  return (
    <Figure>
      <img src={photo.path} alt={photo.title} />
      <figcaption>
        <h3>{photo.title}</h3>
        <Footer>
          <h4>{photo.font}</h4>
          <IconButton onClick={() => toggleFavorite(photo)}>
            <img src={favoriteIcon} alt="Icono de favorito" />
          </IconButton>
          {!expand && (
            <IconButton aria-hidden={expand} onClick={() => requestZoom(photo)}>
              <img src="/icons/expand.png" alt="Icono de expandir" />
            </IconButton>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Image;
