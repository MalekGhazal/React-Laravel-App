import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

axiosClient.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        const { res } = err;
        if (res.status === 401) {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }
);

export default axiosClient;
