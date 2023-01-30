import axios from 'axios';
import queryString from 'querystring';

const axiosClient = axios.create({
	baseURL: 'https://facebook-api-psz5.onrender.com/',
	timeout: 5000,
	headers: { 'X-Custom-Header': 'facebook' },
});

export default axiosClient;
