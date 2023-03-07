import authorizeReducer, { fetchToken, signout } from './authorizeSlice';
import { AuthorizeState } from './authorizeAPI';

describe('authorize reducer', () => {
  const initialState: AuthorizeState = {
    errorMessage: null,
    status: 'unauthorized'
  };

  // it('should handle initial state', () => {
  //   const actual = authorizeReducer(undefined, { type: 'unknown' });
  //   expect(actual).toEqual({
  //     user: null,
  //     status: 'unauthorized'
  //   });
  // });

  // it('should handle increment', () => {
  //   const actual = authorizeReducer(initialState, fetchToken({ email: 'kdkrastev89@gmail.com' password: '!234Qwer' }));
  //   expect(actual.status).toEqual('authorized');
  //   expect(actual.errorMessage).toEqual(null);
  // });

  // it('should handle decrement', () => {
  //   const actual = authorizeReducer(initialState, getCurrentUser({ user: null }));
  //   expect(actual.user).toEqual(null);
  // });
});
