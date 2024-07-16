import {
  SET_CATEGORIES,
  SET_SELECTED_VIDEO,
  SET_VIDEOS,
  SET_BODY_SIZE,
} from "@/context/actions";

export const initialState = {
  categories: [],
  videos: [],
  selectedVideo: null,
  openModal: false,
  bodySize: {
    with: 0,
    hight: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_VIDEOS:
      return {
        ...state,
        videos: [...action.payload, ],
      };
    case SET_SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
        openModal: action.payload !== null,
      };
    case SET_BODY_SIZE:
      return {
        ...state,
        bodySize: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
