import axios from "axios";
import client from "../../../services/httpClient";

export interface FetchTokenRequestBody {
  email: string;
  password: string;
}

export interface FetchTokenResult {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}

export interface FetchCurrentUserResult {
  user: User | null;
}

export interface AuthorizeState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  status: 'loading' | 'authorized' | 'unauthorized'
}

export const fetchCurrentUserAsync = async () => {
  var response = await client.get('/api/user/current');
  return { user: response.data };
}

export const fetchTokenAsync = async (data: FetchTokenRequestBody) => {
  var response = await client.post('/auth/signin', data);
  return { accessToken: response.data.accessToken, refreshToken: null };
}