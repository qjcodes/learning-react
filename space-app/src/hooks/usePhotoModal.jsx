import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function usePhotoModal() {
  const { state, dispatch } = useContext(GlobalContext);

  const openModal = (photo) => {
    dispatch({ type: "SET_PHOTO_SELECTED", payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: "SET_PHOTO_SELECTED", payload: null });
  };

  const photoSelected = state.photoSelected;
  const isModalOpen = state.openModal;
  
  return { openModal, closeModal, photoSelected, isModalOpen };
}

export default usePhotoModal;
