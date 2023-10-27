import axios from 'axios';

export const baseUrl = 'https://youtubeapp-fb07a.firebaseio.com';

let defaults = {

}

const createAxios = function (options = {}) {
    return axios.create(Object.assign({}, defaults, options));
}

export default createAxios({
    baseURL: baseUrl
});