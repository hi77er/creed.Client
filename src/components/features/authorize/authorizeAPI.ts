import client from "../../../services/httpClient";

export interface FetchTokenRequestBody {
  email: string;
  password: string;
}

export interface FetchTokenResult {
  accessToken: string | null;
  refreshToken: string | null;
  success: boolean;
}

export interface Error {
  errorMessage: string | null
}

export interface SignoutResult {
  success: boolean;
}

export interface AuthorizeState {
  accessToken: string | null;
  refreshToken: string | null;
  errorMessage: string | null;
  status: 'loading' | 'authorized' | 'unauthorized';
}

export const fetchTokenAsync = async (data: FetchTokenRequestBody) => {
  var response = await client.post('/auth/signin', data);
  return { accessToken: response.data.accessToken, refreshToken: null };
}

export const signoutAsync = async () => {
  var response =
    await client.get('/auth/signout');

  return { success: response.data.success };
}