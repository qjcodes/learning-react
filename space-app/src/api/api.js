import axios from "axios";

export const api = axios.create({baseURL: "http://localhost:4000"});

export const find = async (url, setData) => {
    const response = await api.get(url);
    setData({type: "SET_PHOTOS_GALLERY", payload: response.data});
};
