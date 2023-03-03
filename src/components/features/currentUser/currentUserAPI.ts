import client from "../../../services/httpClient";
import { store } from '../../../app/store';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}

export interface FetchCurrentUserError {
  errorMessage: string | null
}

export interface FetchCurrentUserResult {
  user: User | null;
}

export interface CurrentUserState {
  currentUser: User | null;
  errorMessage: string | null;
  status: 'loading' | 'found' | 'notfound';
}

export const fetchCurrentUserAsync = async () => {
  client.interceptors.request.use((config) => {
    const token = store.getState().authorizer.accessToken;
    config.headers.Authorization = `bearer ${token}`;
    return config;
  });

  var response = await client.get('/api/user/current');
  return { currentUser: response.data };
}