import axios from "axios";
export const key = "d59f491d9a6356cdf103406979ab7979";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;