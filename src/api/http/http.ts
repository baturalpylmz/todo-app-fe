import { http } from './client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const httpInstance = ({ url, method, params, data, headers }: any) => {
    return http.request({
        url,
        method,
        params,
        data,
        headers,
    });
};
