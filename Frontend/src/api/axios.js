
import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://idowuolakunlesamproject.vercel.app/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"

    }
})


export default API;