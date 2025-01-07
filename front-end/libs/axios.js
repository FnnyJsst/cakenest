import Axios from "axios";

const apiAxios = Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'X-Requested-With':
        'XMLHttpRequest',
    },
})
export default apiAxios