import axios from "axios";


const useApi = axios.create({
    baseURL: 'http://localhost:3000/api/v2',
    validateStatus: () => true,
})


export {
    useApi
}