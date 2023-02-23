import axios from "axios";

const api = axios.create({
    baseURL: "https://backendcasadouniversitario-production.up.railway.app/"
})

export default api;