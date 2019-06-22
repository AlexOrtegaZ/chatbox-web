import axios from "axios";
import promise from "promise";

// Add a request interceptor
var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    //If the header does not contain the token and the url not public, redirect to login
    var accessToken = "test";

    //if token is found add it to the header
    if (accessToken) {
      if (config.method !== "OPTIONS") {
        config.headers.authorization = accessToken;
      }
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return promise.reject(error);
  }
);

export class API {
  constructor(baseUrl = "https://0924b73d.ngrok.io/api") {
    this.baseUrl = baseUrl;
  }

  makeRequest(url, method, data) {
    console.log(this);
    return axios({
      url: `${this.baseUrl}/${url}`,
      method,
      data
    }).then(data => data.data);
  }
}
