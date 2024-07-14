import styled from "styled-components";
import Image from "../Gallery/Image";
import IconButton from "../IconButton";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StylizedDialog = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;

  figure {
    width: 100%;
  }

  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const ModalZoom = ({ photo, onClose, toggleFavorite }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <StylizedDialog open={!!photo} onClose={onClose}>
            <Image
              photo={photo}
              expand={true}
              toggleFavorite={toggleFavorite}
            />
            <form method="dialog">
              <IconButton formMethod="dialog">
                <img src="/icons/close.png" alt="Icono de cerrar" />
              </IconButton>
            </form>
          </StylizedDialog>
        </>
      )}
    </>
  );
};

export default ModalZoom;
