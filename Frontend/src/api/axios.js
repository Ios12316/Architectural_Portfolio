
import axios from "axios";

const API = axios.create({
    baseURL: "https://idowuolakunlesamproject.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true,
})

export default API;