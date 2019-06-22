import axios from 'axios';

axios.interceptors.request.use(function(config) {
  const token = window.localStorage.getItem('token');

  if ( token != null ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (err) => Promise.reject(err)); 

export class API {
  constructor(baseUrl = "https://0924b73d.ngrok.io/api") {
    this.baseUrl = baseUrl;
  }

  makeRequest(url, method, data) {
    return axios({
      url: `${this.baseUrl}/${url}`,
      method,
      data
    }).then(data => data.data);
  }
}

export const baseUrl = '';
