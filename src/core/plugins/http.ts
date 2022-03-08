import { useAuthStore } from '@/modules/auth/store';
import axios from "axios"
import { Plugin } from 'vue';

export const httpPlugin: Plugin = {
  install(app) {
    const http = axios.create({
      timeout: 30000, // 30s
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    })

    const authStore = useAuthStore();

    // Add a request interceptor
    http.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    http.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });

    app.config.globalProperties.$http = http

    if(window) {
      window.$http = http
    }
  }
}
