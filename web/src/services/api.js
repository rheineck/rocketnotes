import axios from "axios"

export const api = axios.create({
    baseURL: "https://rocketnotes-tte9.onrender.com",
})
