import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { setSelectedVideo } from "@/context/actions";
import { useScrollContext } from "@/context/ScrollContext";

const useModal = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const {scrollToElement} = useScrollContext()

  const openModal = (video) => {
    scrollToElement()
    dispatch(setSelectedVideo(video));
  };

  const closeModal = () => {
    dispatch(setSelectedVideo(null));
  };

  return {
    openModal,
    closeModal,
    selectedVideo: state.selectedVideo,
    isOpen: state.openModal,
  };
};

export default useModal;
