

import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;
console.log(apiUrl);

export const incidentsApi = axios.create({
    baseURL: `${apiUrl}`
})