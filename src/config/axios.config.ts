import axios from "axios";
import { BASE_URL } from "../constants/api";

const client = axios.create({ baseURL: "" });

client.interceptors.request.use(function (config) {
  if (config.headers) {
    // const token = getCookies("quincy-token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
  }
  return config;
});

export const request = async ({ ...options }) => {
  const onSuccess = (response: any) => {
    return response.data;
  };
  const onError = (error: Error) => {
    throw error;
  };

  return client(options).then(onSuccess).catch(onError);
};
