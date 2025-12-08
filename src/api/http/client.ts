import axios from 'axios';
import qs from 'qs';
import { env } from '@/config/env';

export const http = axios.create({
    baseURL: env.apiUrl,
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-store',
        'Accept-Language': 'tr-TR',
    },
    paramsSerializer: {
        serialize: params => qs.stringify(params, { arrayFormat: 'repeat' }),
    },
});

// http.interceptors.response.use(
//     response => {
//         return response.data;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );
