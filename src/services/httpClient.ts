import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_WEB_API_BASE_URL,
  withCredentials: true,
});

export default client;