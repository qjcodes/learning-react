import styled from "styled-components";
import Image from "../Gallery/Image";
import IconButton from "../IconButton";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import usePhotoModal from "../../hooks/usePhotoModal";

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

const ModalZoom = () => {
  const { isModalOpen, photoSelected, closeModal } = usePhotoModal();

  return (
    <>
      {isModalOpen && (
        <>
          <Overlay />
          <StylizedDialog open={!!photoSelected} onClose={() => closeModal()}>
            <Image photo={photoSelected} expand={true} />
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
