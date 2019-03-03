import qs from 'query-string';
import fetch from 'cross-fetch';
import get from 'lodash/get';

export function fetchMoviesRequest(filters) {
    const params = {
        order_way: 'ASC',
        order_id: '50',
        level_id: 'GPS',
        region: 'mexico',
        api_version: 'v5.84',
        authpn: 'webclient',
        authpt: 'tfg1h3j4k6fd7',
        format: 'json',
        device_id: 'web',
        device_category: 'web',
        device_model: 'web',
        device_type: 'web',
        device_manufacturer: 'generic',
        ...filters,
    };

    return fetch(`https://mfwkweb-api.clarovideo.net//services/content/list?${qs.stringify(params)}`)
        .then((res) => res.json())
        .then((res) => {
            if (res.msg === 'ERROR') {
                throw Error(res.msg);
            }

            return res;
        })
        .then((res) => get(res, 'response.groups', []));
}