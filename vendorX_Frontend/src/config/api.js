// import axios from 'axios';

// export const API_URL = "http://localhost:8080";

// export const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'pk_test_51R96nfSDaoJtgGIJg4j7yfcWi3mcZqoQ9jYlRrOHhq8zQktH82nNjYtMGyyWGhfmVXjtd9I8fOe7iot0rEq5iwMk00LMMw8E5y'
//   },
// });
import axios from 'axios';

export const API_URL = "http://localhost:8080";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
