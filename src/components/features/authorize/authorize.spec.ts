// import authorizeReducer, {
//   getToken,
//   getCurrentUser
// } from './authorizeSlice';
import { AuthorizeState } from './authorizeAPI';

describe('authorize reducer', () => {
  const initialState: AuthorizeState = {
    errorMessage: null,
    status: 'unauthorized'
  };

  // it('should handle initial state', () => {
  //   const actual = authorizeReducer(undefined, { type: 'unknown' });
  //   expect(actual).toEqual({
  //     accessToken: null,
  //     refreshToken: null,
  //     user: null,
  //     status: 'unauthorized'
  //   });
  // });

  // it('should handle increment', () => {
  //   const actual = authorizeReducer(initialState, getToken({ accessToken: null, refreshToken: null }));
  //   expect(actual.accessToken).toEqual(null);
  //   expect(actual.refreshToken).toEqual(null);
  // });

  // it('should handle decrement', () => {
  //   const actual = authorizeReducer(initialState, getCurrentUser({ user: null }));
  //   expect(actual.user).toEqual(null);
  // });
});
