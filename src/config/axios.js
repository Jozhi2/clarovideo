import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://mfwkweb-api.clarovideo.net/'
});

export default clientAxios;