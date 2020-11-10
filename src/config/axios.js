import axios from "axios";

const apiClientAxios = axios.create({
    baseURL: "https://api.opendota.com/api/",
});

export default apiClientAxios;