import client from "../../../services/httpClient";

export interface Error { errorMessage: string | null }
export interface FetchTokenRequestBody { email: string; password: string; }
export interface FetchTokenResult { success: boolean; }
export interface RefreshTokenResult { success: boolean; }
export interface SignoutResult { success: boolean; }
export interface AuthorizeState {
  errorMessage: string | null;
  status: 'loading' | 'authorized' | 'unauthorized';
}

export const fetchTokenAsync = async (data: FetchTokenRequestBody) => {
  var response = await client.post('/auth/signin', data);
  return { success: response.data.success };
}

export const refreshTokenAsync = async () => {
  var response = await client.post('/auth/refresh');
  console.log('refreshed!')
  console.log(response)
  return { success: response.data.success };
}

export const signoutAsync = async () => {
  var response =
    await client.get('/auth/signout');

  return { success: response.data.success };
}