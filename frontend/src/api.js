import axios from "axios";

const api = axios.create({
    baseURL: "https://platinum-gym-mbpb.onrender.com/api",
    headers: { "Content-Type": "application/json" }
});

export default api;