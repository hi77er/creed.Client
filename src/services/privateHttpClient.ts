import axios from 'axios';
import { memoizedRefreshToken } from "../components/features/authorize/authorizeAPI";

const privateClient = axios.create({
  baseURL: process.env.REACT_APP_WEB_API_BASE_URL,
  withCredentials: true,
});

privateClient.interceptors.response.use(
  res => res,
  async (error) => {
    if (error.response.status === 401) {
      await memoizedRefreshToken();
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default privateClient;