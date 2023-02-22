
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

export interface FetchUserResult {
  user: User | null;
}

export interface AuthorizeState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  status: 'loading' | 'authorized' | 'unauthorized'
}

export const fetchUserAsync = () => {
  return new Promise<FetchUserResult>((resolve) =>
    setTimeout(() => resolve({ user: null }), 500)
  );
}

export const fetchTokenAsync = () => {
  return new Promise<FetchTokenResult>((resolve) =>
    setTimeout(() => resolve(
      { accessToken: null, refreshToken: null }
    ), 500)
  );
}
