import axios from 'axios';
import queryString from "querystring";

const HTTPURL = 'https://facebook-api-psz5.onrender.com/';

let headers = {};
headers['x-access-token'] = localStorage.x_accessToken? localStorage.x_accessToken : null;
headers['x-refresh-token'] = localStorage.x_refreshToken? localStorage.x_refreshToken : null;

const axiosClient = axios.create({
  baseURL: HTTPURL,
  headers: headers,
  timeout: 5000,
  paramsSerializer: (params) => queryString.stringify(params),
});

export function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
};


axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.x_accessToken ? localStorage.x_accessToken: null;
    const refresh = localStorage.x_refreshToken ? localStorage.x_refreshToken: null;

    if (token) {
      // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      config.headers["x-access-token"] = token;
      config.headers["x-refresh-token"] = refresh;
        // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;