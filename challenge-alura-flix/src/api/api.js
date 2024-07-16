import axios from "axios";

export const api = axios.create({baseURL: "http://localhost:4000"});

export const getData = async (url, setData, type) => {
    const response = await api.get(url);
    setData({type: type, payload: response.data});
}
