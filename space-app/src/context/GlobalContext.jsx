import { createContext, useEffect, useReducer, useState } from "react";
import { find } from "../api/api";

export const GlobalContext = createContext();

const initialState = {
  photosGallery: [],
  photoSelected: null,
  filter: "",
  tag: 0,
  openModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PHOTOS_GALLERY":
      return { ...state, photosGallery: action.payload };
    case "SET_PHOTO_SELECTED":
      return { 
        ...state, 
        photoSelected: action.payload ,
        openModal: action.payload !== null
    };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_TAG":
      return { ...state, tag: action.payload };
    case "TOGGLE_FAVORITE":
      const photosGallery = state.photosGallery.map((photoGallery) => ({
        ...photoGallery,
        favorite:
          photoGallery.id === action.payload.id
            ? !action.payload.favorite
            : photoGallery.favorite,
      }));
      if (action.payload.id === state.photoSelected?.id) {
        return {
          ...state,
          photosGallery: photosGallery,
          photoSelected: {
            ...state.photoSelected,
            favorite: !action.payload.favorite,
          },
        };
      } else {
        return {
          ...state,
          photosGallery: photosGallery,
        };
      }
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [photosGallery, setPhotosGallery] = useState([]);
  //   const [photoSelected, setPhotoSelected] = useState(null);
  //   const [filter, setFilter] = useState("");
  //   const [tag, setTag] = useState(0);

  useEffect(() => {
    const getData = async () => {
      await find("/photos", dispatch);
    };
    getData();
  }, []);

  useEffect(() => {
    const filteredPhotos = () =>
      state.photosGallery.filter((photo) => {
        const filterTag = !state.tag || photo.tagId === state.tag;
        const filterTitle =
          !state.filter ||
          photo.title
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .includes(
              state.filter
                .toLocaleLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
            );
        return filterTag && filterTitle;
      });
    dispatch({ type: "SET_PHOTOS_GALLERY", payload: filteredPhotos() });
  }, [state.filter, state.tag]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
