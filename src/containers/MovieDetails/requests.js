import qs from 'query-string';
import fetch from 'cross-fetch';
import get from 'lodash/get';

export function getMovieDetailsRequest(movieId) {
    const params = {
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
        group_id: movieId,
    };

    return fetch(`https://mfwkweb-api.clarovideo.net/services/content/data?${qs.stringify(params)}`)
        .then((res) => res.json())
        .then((res) => {
            if (res.msg === 'ERROR') {
                throw Error(res.msg);
            }

            return res;
        })
        .then((res) => get(res, 'response.group.common', {}));
}