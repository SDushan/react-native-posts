import axios from "axios";

// const cacheConfig = {
//   enabledByDefault: false,
//   cacheFlag: "useCache"
// };

// URL
const BASE_URL = "https://jsonplaceholder.typicode.com";


const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  /**
   * ignore SSL in axios
   */
  //   httpsAgent: new https.Agent({
  //     rejectUnauthorized: false
  //   })
});

/**
 * interceptor to catch all errors
 * @param error
 */
const errorInterceptor = (error) => {
  switch (error.response.status) {
    case 400:
      console.log(error.response.status, error.message);
      break;
    case 401:
      break;
    default:
      console.error(error.response.status, error.message);
  }
  return Promise.reject(error);
};

/**
 * interceptor for responses
 * @param response
 */
const responseInterceptor = (response) => {
  switch (response.status) {
    case 200:
      break;
    default:
  }
  return response;
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
