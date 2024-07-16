export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_VIDEOS = "SET_VIDEOS";
export const SET_SELECTED_VIDEO = "SET_SELECTED_VIDEO";
export const SET_BODY_SIZE = "SET_BODY_SIZE";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setVideos = (videos) => ({
  type: SET_VIDEOS,
  payload: videos,
});

export const setSelectedVideo = (video) => ({
  type: SET_SELECTED_VIDEO,
  payload: video,
});

export const setBodySize = (bodySize) => ({
  type: SET_BODY_SIZE,
  payload: bodySize,
});
