import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://6497ecc79543ce0f49e18101.mockapi.io/',
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient;