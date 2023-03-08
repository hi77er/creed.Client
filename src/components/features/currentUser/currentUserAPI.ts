import client from "../../../services/httpClient";
import privateClient from "../../../services/privateHttpClient";
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
  loginProvider: null | 'local' | 'facebook' | 'github' | 'google';
}

export interface CurrentUserState {
  status: 'loading' | 'found' | 'notfound';
  loginProvider: null | 'local' | 'facebook' | 'github' | 'google';
  currentUser: User | null;
  errorMessage: string | null;
}

export const fetchCurrentUserAsync = async () => {
  var response = await privateClient.get('/api/user/current');
  return { currentUser: response.data, loginProvider: response.data?.sessions[0]?.authStrategy };
}